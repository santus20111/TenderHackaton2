<template>
  <div class="header" @click="goHome">
    <img class="header__logo" src="/logo.png">
    <div class="header__category_icon">
      <div class="header__category_icon_1"/>
      <div class="header__category_icon_2"/>
      <div class="header__category_icon_3"/>
    </div>
    <div class="header__category_name">Категории</div>
    <input class="header__search" placeholder="Поиск товара...">
    <div class="header__account">
      <div class="flex column">
        <div class="flex">
          <div class="header__username">Александр</div>
          <img class="header__username_more_icon" src="/arrow-down.svg">
        </div>
        <div class="header__account_company">ООО "Воробушки"</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "hack-header",
    methods: {
      goHome() {
        this.$router.push('/')
      }
    }
  }
</script>

<style scoped>
  .header {
    padding-top: 36px;
    padding-bottom: 36px;
    display: flex;
    align-items: center;

    max-width: 1020px;
    margin-left: auto;
    margin-right: auto;
  }

  .header__logo {
    cursor: pointer;
    height: 32px;
  }

  .header__category_icon {
    margin-left: 50px;
    width: 18px;
    height: 12px;
    position: relative;
  }

  .header__category_icon_1 {
    /* Rectangle 3 */


    position: absolute;
    width: 18px;
    height: 2px;
    left: 0;
    top: 0;

    /* #E44A41 */

    background: #F0584F;
    border-radius: 8px;
  }

  /* Rectangle 4 */

  .header__category_icon_2 {

    position: absolute;
    width: 18px;
    height: 2px;
    left: 0;
    top: 5px;

    /* #E44A41 */

    background: #F0584F;
    border-radius: 8px;
  }


  .header__category_icon_3 {
    /* Rectangle 5 */


    position: absolute;
    width: 18px;
    height: 2px;
    left: 0;
    top: 10px;

    /* #E44A41 */

    background: #F0584F;
    border-radius: 8px;
  }

  .header__category_name {
    margin-left: 6px;
  }

  .header__search {
    margin-left: 24px;
    height: 40px;
    width: 400px;
    background: #F2F5F9;
    border-radius: 36px;
    padding-left: 16px;
    border: none;
  }

  .header__account {
    display: flex;
    justify-content: flex-end;
    flex-grow: 1;
  }

  .header__username {
    color: #2B333F;
    font-weight: 600;
    line-height: 20px;
    font-size: 16px;
  }

  .header__username_more_icon {
    margin-top: 8px;
    margin-left: 8px;
  }

  .header__account_company {
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #C2CAD6;
  }
</style>
