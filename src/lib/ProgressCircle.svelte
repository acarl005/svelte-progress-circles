<script>
  export let progress = 0
  export let text = undefined
  export let fgColor = "dodgerblue"
  export let bgColor = "#eee"
  export let fullness = 10

  import SemiCircle from "./SemiCircle.svelte"
  import { styleObjToStr } from "./style-format"

  $: centerText = text === undefined ? `${progress}%` : text
  $: coverStyle = styleObjToStr({
    height: `${100 - fullness}%`,
    width: `${100 - fullness}%`,
    left: `${fullness / 2}%`,
    top: `${fullness / 2}%`,
  })
</script>

<style>
  .progress-circle {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .left-half {
    height: 100%;
    width: 50%;
    position: absolute;
    top: 0;
    left: 0;
  }

  .right-half {
    height: 100%;
    width: 50%;
    position: absolute;
    top: 0;
    right: 0;
    transform: rotate(0.5turn);
  }

  .semi-circle-wrap {
    position: relative;
    height: 100%;
    width: 100%;
  }

  .center-cover {
    position: absolute;
    background-color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>

<div class="progress-circle">
  <div class="left-half">
    <div class="semi-circle-wrap">
      <SemiCircle color={fgColor} />
      <SemiCircle color={bgColor} zIndex={2} rotate={Math.max(0, (progress - 50) / 100)} />
    </div>
  </div>
  <div class="right-half">
    <div class="semi-circle-wrap">
      <SemiCircle color={fgColor} zIndex={3} />
      {#if progress < 50}
        <SemiCircle color={bgColor} zIndex={4} rotate={progress / 100} />
      {/if}
    </div>
  </div>
  <div class="center-cover" style={coverStyle}>
    <span>{centerText}</span>
  </div>
</div>
