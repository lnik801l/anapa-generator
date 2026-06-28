<script setup lang="ts">
// Poster + play-button overlay matching the original aesthetic; on click the
// portrait video plays inline with native controls and the overlay disappears.
const props = defineProps<{
  src: string
  poster: string
}>()

const videoEl = ref<HTMLVideoElement | null>(null)
const playing = ref(false)

function play() {
  const el = videoEl.value
  if (!el) return
  el.play()
  playing.value = true
}
</script>

<template>
  <div class="video-card">
    <video
      ref="videoEl"
      :poster="props.poster"
      :controls="playing"
      preload="none"
      playsinline
    >
      <source :src="props.src" type="video/mp4" />
    </video>
    <button v-if="!playing" class="video-ov" type="button" aria-label="Смотреть видео" @click="play">
      <span class="video-play"><b></b></span>
    </button>
  </div>
</template>
