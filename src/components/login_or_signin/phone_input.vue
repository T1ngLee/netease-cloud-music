<template>
  <div class="phone-input-wrap">
    <div class="phone">
      <div class="area-code">
        <span class="iconfont icon-shouji-copy"></span>
        <span class="now-area-code">+86</span>
        <span class="triangle"></span>
      </div>
      <input type="text" placeholder="请输入手机号" class="phone-input" @blur="pushParentPhone($event.target.value, 0)">
      <ul class="area-code-list" v-if="false">
        <li class="area-code-item" v-for="i in 10" :key="i">
          <div class="left">
            <span class="iconfont"></span>
            <span class="area-name"></span>
          </div>
          <span class="code"></span>
        </li>
      </ul>
    </div>
    <div class="pwd">
      <span class="iconfont icon-suo"></span>
      <input type="password" class="pwd-input" @blur="pushParentPhone($event.target.value, 1)">
      <span class="reset-pwd">重设密码</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component
export default class PhoneInput extends Vue {
  pushParentPhone(val: any, type: number){
    this.$emit('getChildData', val, type)
    // console.log(event.target.value, type)
  }
  // pushParentPwd(){

  // }
}
</script>

<style lang="scss" scoped>
.phone-input-wrap {
  width: 80%;
  margin: 0 auto;
  // background: rosybrown;
  border-radius: 5px;
  border: 1px solid rgb(230,231,234);
  height: 60px;
  overflow: hidden;
  input {
    outline: none;
    border: none;
    // margin: 0;
    padding: 3px 5px;
    font-size: 13px;
    &::-webkit-input-placeholder {
      color: rgb(200, 200, 200);
      font-size: 12px;
    }
  }
  .phone {
    width: 100%;
    height: 50%;
    // border-bottom: 1px solid rgb(230,231,234);
    position: relative;
    .area-code {
      height: 100%;
      width: 30%;
      border-right: 1px solid rgb(230,231,234);
      display: inline-block;
      background: white;
      font-size: 10px;
      vertical-align: top;
      line-height: 30px;
      padding: 0 5px;
      position: relative;
      .iconfont {
        margin-top: 5px;
        display: inline-block;
        vertical-align: top;
      }
      .now-area-code {
        // margin: 0 auto;
        // display: inline-block;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      .triangle {
        height: 0;
        width: 0;
        border: 5px solid rgb(151, 151, 151);
        font-size: 0;
        border-left-color: transparent;
        border-right-color: transparent;
        border-bottom-color: transparent;
        float: right;
        margin-top: 12px;
      }
    }
    .phone-input {
      height: 100%;
      width: 70%;
      vertical-align: top;
    }
  }
  .pwd {
    width: 100%;
    height: 50%;
    border-top: 1px solid rgb(230,231,234);
    position: relative;
    // padd
    display: flex;
    background: white;
    .pwd-input {
      height: 100%;
      width: 100%;
    }
    .iconfont {
      // position: absolute;
      margin-top: 6px;
      // left: 5px;
      height: 100%;
      padding: 0 5px;
      
    }
    .reset-pwd {
      // position: absolute;
      padding: 0 5px;
      font-size: 12px;
      width: 88px;
      height: 100%;
      // background: white;
      line-height: 29px;
      color: rgb(200, 200, 200);
    }
  }
  .area-code-list {
    position: absolute;
    top: 100%;
    width: 100%;
    background: white;
    border: 1px solid rgb(230,231,234);
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    height: 150px;
    overflow: auto;
    .area-code-item {
      padding: 2px 10px;
      font-size: 11px;
      cursor: pointer;
    }
  }
}
</style>