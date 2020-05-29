<template>
  <div class="phone-login-wrap">
    <img src="../../assets/login.png" alt="">
    <phone-input/>
    <div class="auto-login">
      <div class="checkbox"></div>
      <span>自动登录</span>
      <span class="hint" v-show="hintMessage.length">{{hintMessage}}</span>
    </div>
    <button class="login-btn" @click="loginSubmit()">登 录</button>
    <button class="signin-btn"><u>注册</u></button>
    <div class="other-mode">
      <span class="iconfont icon-weixin"></span>
      <span class="iconfont icon-qq"></span>
      <span class="iconfont icon-weibo"></span>
      <span class="iconfont icon-wangyi"></span>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import PhoneInput from '@/components/login_or_signin/phone_input.vue'
import { loginByPhone } from '@/api/login.ts'
@Component({
  components: {
    PhoneInput
  }
})
export default class PhoneLogin extends Vue {
  loginInput = {
    phone: '12376478547',
    password: '11',
    countrycode: '86'
  }
  hintMessage = ''

  loginSubmit(){
    this.checkPhone()
  }
  checkPhone(){
    const phone = /^\d{11}$/
    // console.log(phone.test(this.loginInput.phone))
    if (this.loginInput.phone.trim().length === 0) {
      return this.hintMessage = '请输入手机号'
    }
    if (this.loginInput.password.length === 0) {
      return this.hintMessage = '请输入登录密码'
    }
    if (!phone.test(this.loginInput.phone.trim())) {
      return this.hintMessage = '请输入11位手机号码'
    }
    loginByPhone(this.loginInput)
    .then(res => {
      console.log(res)

    })
    .catch(err => {
      console.log(err.status)
      if (err === 501) {
        this.hintMessage = '该手机号尚未注册'
      } else if (err.msg === '密码错误') {
        this.hintMessage = '手机号或密码错误'
      } else {
        this.hintMessage = '未知错误'
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.phone-login-wrap {
  width: 100%;
  height: 100%;
  img {
    width: 100%;
  }
  .auto-login {
    // margin-left: 10%;
    margin: 10px auto 0 auto;
    width: 80%;
    display: flex;
    align-items: center;
    position: relative;
    .checkbox {
      border: 1px solid rgb(230,231,234);
      height: 13px;
      width: 13px;
      display: inline-block;
    }
    span {
      font-size: 12px;
      margin-left: 5px;
    }
    .hint {
      // float: right;
      position: absolute;
      right: 0;
      color: red;
    }
  }
  button {
    width: 80%;
    height: 30px;
    border: none;
    outline: none;
    margin: 0 auto;
    display: block;
    margin-top: 10px;
    cursor: pointer;
  }
  .login-btn {
    color: white;
    background: rgb(234, 72, 72);
    &:hover {
      background: rgb(160, 42, 42);
    }
  }
  .signin-btn {
    margin-top: 2px;
    background: rgb(250,250,250);
  }
  .other-mode {
    height: 30px;
    width: 80%;
    margin: 0 auto;
    margin-top: 10px;
    display: flex;
    justify-content: space-around;
    .iconfont {
      display: block;
      width: 35px;
      height: 35px;
      text-align: center;
      font-size: 23px;
      border: 1px solid rgb(230,231,234);
      cursor: pointer;
      border-radius: 50%;
      padding-top: 9px;
      line-height: 30px;
    }
    .icon-weixin {
      color: rgb(103, 182, 51);
      &:hover {
        background: rgb(103, 182, 51);
        color: white;
      }
    }
    .icon-qq {
      color: rgb(52, 160, 223);
      &:hover {
        background: rgb(52, 160, 223);
        color: white;
      }
    }
    .icon-weibo {
      color: rgb(234, 72, 72);
      &:hover {
        background: rgb(234, 72, 72);
        color: white;
      }
    }
    .icon-wangyi {
      color: rgb(228, 62, 53);
      &:hover {
        background: rgb(228, 62, 53);
        color: white;
      }
    }

  }
}
</style>