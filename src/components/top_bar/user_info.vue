<template>
  <div class="user-info-wrap">
    <div class="head-photo">
      <!-- <img src=""> -->
      <i class="iconfont icon-weidenglu1" v-if="!$store.state.loginState"></i>
      <img :src="$store.state.userInfo.avatarUrl" v-if="$store.state.loginState">
    </div>
    <div class="not-login btn" v-if="!$store.state.loginState" @click="login">
      未登录
      <span class="triangle"></span>
    </div>
    <div class="logged btn" v-if="$store.state.loginState" @click="userTipShow = !userTipShow">
      {{$store.state.userInfo.nickname}}
      <span class="triangle"></span>
    </div>
    <div class="user-tip" v-show="userTipShow">
      <div class="triangle"></div>
      <div class="info">
        <div class="name-box">
          <div class="avatar-name">
            <img :src="$store.state.userInfo.avatarUrl">
            <span class="name">{{$store.state.userInfo.nickname}}</span>
          </div>
          <span class="qiandao">签到</span>
        </div>
        <div class="count-box">
          <div class="dynamic-count">
            <span>{{userDetail.eventCount}}</span>
            <span>动态</span>
          </div>
          <div class="follow-count">
            <span>{{userDetail.follows}}</span>
            <span>关注</span>
          </div>
          <div class="fans-count">
            <span>{{userDetail.followeds}}</span>
            <span>粉丝</span>
          </div>
        </div>
      </div>
      <div class="money">
        <div class="vip">
          <span class="iconfont icon-huiyuan"></span>
          <span>会员中心</span>
        </div>
        <div class="leave">
          <span class="iconfont icon-dengji"></span>
          <span>等级</span>
        </div>
        <div class="shop">
          <span class="iconfont icon-taikong-"></span>
          <span>商城</span>
        </div>
      </div>
      <div class="setting">
        <div class="info-setting">
          <span class="iconfont icon-chilun"></span>
          <span>个人信息设置</span>
        </div>
        <div class="bind-account">
          <span class="iconfont icon-shouji-copy"></span>
          <span>绑定社交账号</span>
        </div>
      </div>
      <div class="logout">
        <span class="iconfont icon-guanji"></span>
        <span>退出登录</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
import { userDetail } from '@/api/user.ts'
@Component
export default class UserInfo extends Vue {
  // isLogged = false
  userTipShow = false
  userDetail = {
    level: 0,
    followeds: 0,
    follows: 0,
    eventCount: 0
  }
  login(){
    if(!this.$store.state.loginState || !this.$store.state.loginBoxShow) {
      this.$store.commit('setLoginBoxShow', true)
    }
  }

  @Watch('userTipShow')
  getUserDetail(val: boolean){
    if (val) {
      userDetail({
        uid: this.$store.state.userInfo.userId
      })
      .then((res: any) => {
        this.userDetail.level = res.level
        this.userDetail.followeds = res.profile.followeds
        this.userDetail.follows = res.profile.follows
        this.userDetail.eventCount = res.profile.eventCount
      })
      .catch(err => {
        console.log(err);
        
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../common/css/common.scss';
.user-info-wrap {
  display: flex;
  align-items: center;
  font-size: 13px;
  color: rgb(238, 193, 193);
  height: 25px;
  position: relative;
  height: 100%;
  .head-photo {
    cursor: pointer;
    height: 25px;
    width: 25px;
    cursor: pointer;
    .iconfont {
      color: rgb(238, 193, 193);
      font-size: 25px;
    }
    img{
      height: 100%;
      width: 100%;
      border-radius: 50%;
    }
  }
  .btn {
    height: 100%;
    cursor: pointer;
    padding-left: 5px;
    display: flex;
    align-items: center;
    cursor: pointer;
    .triangle {
      display: inline-block;
      height: 0;
      width: 0;
      border: 4px solid;
      border-left-color: transparent;
      border-right-color: transparent;
      border-bottom-color: transparent;
      margin-top: 4px;
      margin-left: 4px;
    }
    &:hover {
      color: white;
    }
  }
  .user-tip {
    position: absolute;
    width: 250px;
    min-height: 100px;
    background-color: rgb(250, 250, 250);
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 0 1px 8px 3px rgba($color: #000000, $alpha: 0.1);
    color: black;
    .triangle {
      position: absolute;
      height: 0;
      width: 0;
      border: 8px solid rgb(250, 250, 250);
      border-top-color: transparent;
      border-left-color: transparent;
      border-right-color: transparent;
      top: -16px;
      left: 50%;
      transform: translateX(-50%);
    }
    .info {
      // background: brown;
      border-bottom: 1px solid rgb(230,231,234);  
      padding: 15px;
      .name-box {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .avatar-name {
          display: flex;
          align-items: center;
          img {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            margin-right: 10px;
          }
        }
      }
      .count-box {
        margin-top: 15px;
        display: flex;
        & > div {
          width: calc(100% / 3 - 2px);
          display: flex;
          flex-direction: column;
          align-items: center;
          &:not(:last-child) {
            border-right: 1px solid rgb(230,231,234);  
          }
        }
      }
    }
    .money,
    .setting {
      // padding: ;
      border-bottom: 1px solid rgb(230,231,234);  
      & > div {
        padding: 5px 15px;
        cursor: pointer;
        &:hover {
          background: rgb(236, 237, 238);
        }
        .iconfont {
          margin-right: 10px;
          display: inline-block;
          height: 16px;
          overflow: hidden;
          vertical-align: top;
        }
      }
    }
    .logout {
      padding: 10px 15px;
      cursor: pointer;
      &:hover {
        background: rgb(236, 237, 238);
      }
      .iconfont {
        height: 16px;
        overflow: hidden;
        display: inline-block;
        vertical-align: top;
        margin-right: 10px;
      }
    }
  }
}
</style>