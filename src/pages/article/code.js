export const code = `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<style>
  * {
    padding: 0;
    margin: 0;
  }

  .box {
    display: flex;
    background: darkgray;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .child {
    width: 14%;
    height: 100px;
    background-color: skyblue;
    /* margin-top: 15px; */
    margin: 10px;
  }
  /* .child:not(:nth-child(4n)) {
    margin-right: calc(4% / 3);
} */
.box:nth-of-type(1) > :last-child {
    margin-right: auto;
}

.box:nth-of-type(2)::after {
    content: '12121';
    flex: auto;    或者flex: 1
}
</style>
<body>
  <div class="box">
    <div class="child">1</div>
    <div class="child">2</div>
    <div class="child">3</div>
    <div class="child">4</div>
    <div class="child">5</div>
    <div class="child">6</div>
    <div class="child">6</div>
    <div class="child">6</div>
    <div class="child">6</div>
    <div class="child">6</div>
  </div>
  <div class="box">
      <div class="child">1</div>
      <div class="child">2</div>
      <div class="child">3</div>
      <div class="child">4</div>
      <div class="child">4</div>
      <div class="child">4</div>
      <div class="child">4</div>
      <div class="child">5</div>
      <div class="child">6</div>
      <div class="child">6</div>
    </div>
</body>
</html>`