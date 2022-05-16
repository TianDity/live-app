import { computed } from 'vue'

export default (show: string) => {
  const clientWidth = document.documentElement.clientWidth;

  const width = computed(() => {
    if (show === 'flex') {
      return {
        imgWidth: String(clientWidth * 1/3),
        textWidth: String(clientWidth * 2/3),
      }
    }

    return {
      imgWidth: String(clientWidth * 1/2),
      textWidth: String(clientWidth * 1/2),
    }
  })

  return width
}
