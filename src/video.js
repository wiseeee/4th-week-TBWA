const video = document.getElementById('video-container');

const width = "100%"
const height = "auto"
const isAutoplay = true


const videoContent = `
<video width=${width} height=${height} controls autoplay="${isAutoplay}" loop>
  <source src="asset/video.mp4" type="video/mp4">
</video>
`

video.innerHTML = videoContent


export default initVideo