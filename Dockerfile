# syntax=docker/dockerfile:1

###############################################################################
# 1. Build stage — install deps with pnpm and produce the Nitro server bundle #
###############################################################################
FROM node:22-alpine AS build
WORKDIR /app

# Enable the pnpm version pinned in package.json ("packageManager").
RUN corepack enable

# Install dependencies first (better layer caching).
# pnpm-workspace.yaml carries the build-script allowlist, so copy it before install.
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install --frozen-lockfile

# Build the Nuxt app (SSR / Nitro node-server preset → .output/).
COPY . .
RUN pnpm build

###############################################################################
# 2. Runtime stage — ship only the self-contained .output bundle              #
###############################################################################
FROM node:22-alpine AS runtime
WORKDIR /app
ENV NODE_ENV=production \
    HOST=0.0.0.0 \
    PORT=3000

# Run as the unprivileged user that ships with the node image.
COPY --from=build --chown=node:node /app/.output ./.output

USER node
EXPOSE 3000

# Lightweight container healthcheck against the SSR server.
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD node -e "fetch('http://127.0.0.1:'+(process.env.PORT||3000)).then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))"

CMD ["node", ".output/server/index.mjs"]
