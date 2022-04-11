# Svelte Progress Circle

This is a Svelte component for a circular progress bar, i.e. a "progress circle".


# Usage

```html
<script>
  import ProgressCircle from "svelte-progress-circle"
</script>

<div class="circle-container">
  <ProgressCircle progress={10} />
</div>

<style>
  .circle-container {
    width: 200px;
    height: 200px;
    font-size: 40px;
  }
</style>
```

![default](/demo/default.png)

The chart will assume the full width and height of its container, and it MUST BE SQUARE (same width and height).

# Options

```html
<ProgressCircle progress={0} text="" />
```

![blank](/demo/blank.png)

```html
<ProgressCircle progress={25} text="1/4" />
```

![text](/demo/text.png)

```html
<ProgressCircle progress={40} fgColor="#9acd32" bgColor="black" />
```

![color](/demo/color.png)

```html
<ProgressCircle progress={60} fullness={50} />
```

![fullness](/demo/fullness.png)


```html
<div>
  <ProgressCircle progress={75} fullness={100} />
</div>

<style>
  div {
    width: 50px;
    height: 50px;
    font-size: 20px;
  }
</style>
```

![small](/demo/small.png)