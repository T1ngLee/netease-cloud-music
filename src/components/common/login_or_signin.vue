<template>
  <div class="login-wrap">
    <div class="top-bar">
      <span class="custom-btn">自定义按钮</span>
      <span class="close iconfont icon-chacha"></span>
    </div>
    <phone-login/>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import PhoneLogin from '@/components/login_or_signin/phone_login.vue'
@Component({
  components: {
    PhoneLogin
  }
})
export default class LoginOrSignIN extends Vue {}
</script>

<style lang="scss" scoped>
.login-wrap {
  position: fixed;
  width: 300px;
  height: 400px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 3px 3px rgba($color: #000000, $alpha: .3);
  padding: 5px;
  background: rgb(250,250,250);
  z-index: 999;
  display: flex;
  flex-direction: column;
  .top-bar {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
    .iconfont {
      font-size: 13px;
      cursor: pointer;
    }
  }
}
</style>