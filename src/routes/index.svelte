<script>
  import ProgressCircle from "../lib/ProgressCircle.svelte"
</script>

<style>
  .circle-container {
    width: 200px;
    height: 200px;
  }
  .smaller {
    width: 50px;
    height: 50px;
  }
</style>

<div class="circle-container">
  <ProgressCircle progress={0} text="" />
</div>
<div class="circle-container">
  <ProgressCircle progress={10} text="shit" />
</div>
<div class="circle-container">
  <ProgressCircle progress={25} />
</div>
<div class="circle-container">
  <ProgressCircle progress={40} fgColor="green" bgColor="black" />
</div>
<div class="circle-container">
  <ProgressCircle progress={50} />
</div>
<div class="circle-container">
  <ProgressCircle progress={60} fullness={50} />
</div>
<div class="circle-container smaller">
  <ProgressCircle progress={75} fullness={100} />
</div>
<div class="circle-container">
  <ProgressCircle progress={85} />
</div>
<div class="circle-container">
  <ProgressCircle progress={100} />
</div>