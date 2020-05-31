<template>
  <div class="phone-login-wrap">
    <div class="tip" ref="tip">请先勾选《服务条款》《隐私政策》《儿童隐私政策》</div>
    <img src="../../assets/login.png" alt="">
    <phone-input @getChildData="getChildData"/>
    <div class="auto-login">
      <div class="checkbox" :class="{checked: autoLogin}" @click="autoLogin = !autoLogin">
        <span class="iconfont icon-gou"></span>
      </div>
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
    <div class="protocol-box">
      <div class="checkbox" :class="{checked: protocolIsCheck}" @click="protocolIsCheck = !protocolIsCheck">
        <span class="iconfont icon-gou"></span>
      </div>
      <a class="service" href="https://st.music.163.com/official-terms/service" target="_blank">《服务条款》</a>
      <a class="privacy" href="https://st.music.163.com/official-terms/privacy" target="_blank">《隐私政策》</a>
      <a class="children" href="https://st.music.163.com/official-terms/children" target="_blank">《儿童隐私政策》</a>
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
    phone: '',
    password: '',
    countrycode: '86',
    timestamp: 0
  }
  hintMessage = ''
  protocolIsCheck = false
  autoLogin = false

  loginSubmit(){
    this.checkInput()
  }
  checkInput(){
    // 是否勾选了已读协议
    if(!this.protocolIsCheck){
      return this.tipShow()
    }
    if (this.loginInput.phone.trim().length === 0) {
      return this.hintMessage = '请输入手机号'
    }
    if (this.loginInput.password.length === 0) {
      return this.hintMessage = '请输入登录密码'
    }
    const phone = /^\d{11}$/
    if (!phone.test(this.loginInput.phone.trim())) {
      return this.hintMessage = '请输入11位数字的手机号'
    }

    // 每次调用登录接口就生成时间戳
    this.loginInput.timestamp = new Date().getTime()

    loginByPhone(this.loginInput)
    .then((res: any) => {
      console.log(res)
      // document.cookie = `login=${res.cookie}`
      // 是否自动登录
      if(this.autoLogin) {
        // document.cookie = res.cookie
        localStorage.setItem('_isAutoLogin', 'true')
        // localStorage.setItem('_logedUserId', res.account.id)
      } else {
        // sessionStorage.setItem('_login',res.cookie)
        localStorage.setItem('_isAutoLogin', 'false')
        // sessionStorage.setItem('_logedUserId', res.account.id)
        // console.log(res.cookie)
      }
      this.$store.commit('setLoginState', true)
      // this.localStorage
    })
    .catch(err => {
      if (err === 501) {
        this.hintMessage = '该手机号尚未注册'
      } else if (err.msg === '密码错误') {
        this.hintMessage = '手机号或密码错误'
      } else {
        this.hintMessage = '未知错误'
      }
    })
  }
  getChildData(val: any, type: number){  
    if(type === 0) {
      this.loginInput.phone = val      
    } else if (type === 1) {
      this.loginInput.password = val
    }
    console.log(this.loginInput);
    
  }
  timer = 0
  tipShow(){
    const tip: any = this.$refs.tip
    if (this.timer) {
      clearTimeout(this.timer)
    } else {
      tip.classList.add('show')
    }
    // console.dir(this.$refs.tip.classList)
    this.timer = setTimeout(()=>{
      tip.classList.remove('show')
      clearTimeout(this.timer)
      this.timer = 0
    }, 1000)
  }
}
</script>

<style lang="scss" scoped>
.phone-login-wrap {
  width: 100%;
  height: 100%;
  position: relative;
  .tip {
    position: absolute;
    background: rgba($color: #000000, $alpha: 0.8);
    width: 80%;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: 9999;
    color: white;
    font-size: 14px;
    padding: 10px;
    border-radius: 8px;
    line-height: 25px;
    display: none;
    &.show {
      display: block;
    }
  }
  img {
    width: 100%;
  }
  .auto-login {
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
      &.checked {
        .iconfont {
          display: block;
        }
      }
      .iconfont {
        display: none;
        margin-left: -1px;
        margin-top: 0px;
        color: black;
        font-size: 14px;
      }
    }
    span {
      font-size: 12px;
      margin-left: 5px;
    }
    .hint {
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
  .protocol-box {
    font-size: 12px;
    position: absolute;
    bottom: 20px;
    width: 100%;
    text-align: center;
    .checkbox {
      border: 1px solid rgb(230,231,234);
      height: 13px;
      width: 13px;
      display: inline-block;
      &.checked {
        background: rgb(234, 72, 72);
        border: none;
        .iconfont {
          display: block;
        }
      }
      .iconfont {
        display: none;
        margin-left: -1px;
        margin-top: -1px;
        color: white;
      }
    }
    a {
      text-decoration: none;
      vertical-align: 3px;
    }
    a:link { 
      color: rgb(80, 125, 175); 
    } 
    a:visited { 
      color: rgb(80, 125, 175); 
    } 
    a:hover { 
      color: rgb(80, 125, 175); 
    }
  }
}
</style>