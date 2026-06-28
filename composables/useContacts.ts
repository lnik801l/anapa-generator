// Single source of truth for contact details, backed by runtimeConfig.public
// so the phone number can be overridden via env (NUXT_PUBLIC_PHONE / _DISPLAY).
export function useContacts() {
  const { phone, phoneDisplay } = useRuntimeConfig().public
  return {
    phone: phone,
    phoneDisplay: phoneDisplay,
    telHref: `tel:${phone}`,
  }
}
