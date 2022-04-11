<script>
  export let color = "black"
  export let zIndex = 1
  export let rotate = 0

  import { styleObjToStr } from "./style-format"

  $: circleStyle = styleObjToStr({
    "background-color": color,
    "z-index": zIndex
  })

  $: containerStyle = styleObjToStr({
    transform: `rotate(${rotate}turn)`
  })
</script>

<style>
  .container {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    transform-origin: right;
  }

  .window {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
  }

  .circle {
    width: 200%;
    height: 100%;
    position: absolute;
    border-radius: 50%;
    top: 0;
    left: 0;
  }
</style>

<div class="container" style={containerStyle}>
  <div class="window">
    <div class="circle" style={circleStyle} />
  </div>
</div>