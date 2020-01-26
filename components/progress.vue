<template>
  <div class="progress">
    <div class="progress__bg"></div>
    <div :style="{width: percent + '%'}" class="progress__line"></div>
    <div class="progress__text"><slot/></div>
  </div>
</template>

<script>
  export default {
    props: ['percent'],
    name: "hack-progress"
  }
</script>

<style scoped>
  .progress {
    position: relative;
    height: 40px;
    border-radius: 20px;
    padding-top: 11px;
    padding-bottom: 11px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .progress__bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    background: #F0584F;
    opacity: 0.1;
  }

  .progress__line {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background: #F0584F;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    z-index: 100;
  }

  .progress__text {
    z-index: 101;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    color: #FFFFFF;
  }
</style>
