<template>
  <div class="input">
    <div class="input__placeholder">{{placeholder}}</div>
    <input class="input__input" v-model="showValue"/>
  </div>
</template>

<script>
  export default {
    props: ['placeholder', 'value'],
    name: "hack-input",
    computed: {
      showValue: {
        get() {
          return this.value
        },
        set(val) {
          this.$emit('input', val)
        }
      }
    }
  }
</script>

<style scoped>
  .input {
    background: #F2F5F9;
    border-radius: 4px 4px 0px 0px;
    padding: 12px;
  }

  .input__placeholder {
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 12px;
    color: rgba(0, 0, 0, 0.54);
  }

  .input__input {
    border: none;
    background: none;

    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: rgba(0, 0, 0, 0.87);

    width: 100%;
  }
</style>
