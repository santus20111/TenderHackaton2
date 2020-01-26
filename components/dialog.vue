<template>
  <div v-if="show" class="dialog_wrapper">
    <div class="dialog_bg" @click="close"></div>
    <div class="dialog" :style="{width: width}">
      <div class="dialog__header">{{title}}</div>
      <div class="dialog__content">
        <slot/>
      </div>
      <div class="dialog__footer">
        <slot name="footer"/>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['show', 'title', 'width'],
    name: "hack-dialog",
    methods: {
      close() {
        this.$emit('update:show', false)
      }
    }
  }
</script>

<style scoped>
  .dialog_wrapper {
    position: fixed;
    height: 100vh;
    width: 100%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .dialog_bg {
    cursor: pointer;

    background: #2B333F;
    opacity: 0.8;
    height: 100vh;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
  }

  .dialog {
    padding: 40px 50px;
    background: #FFFFFF;
    border-radius: 20px;
    z-index: 100;
  }

  .dialog__header {
    margin-bottom: 32px;

    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    color: #2B333F;
  }

  .dialog__footer {
    margin-top: 50px;
  }
</style>
