<script>
  import ProgressCircle from "../lib/ProgressCircle.svelte"
</script>

<div class="circle-container">
  <ProgressCircle progress={10} />
</div>
<div class="circle-container">
  <ProgressCircle progress={0} text="" />
</div>
<div class="circle-container">
  <ProgressCircle progress={25} text="1/4" />
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

<style>
  .circle-container {
    width: 200px;
    height: 200px;
    margin: 20px;
  }
  .smaller {
    width: 50px;
    height: 50px;
  }
</style>
