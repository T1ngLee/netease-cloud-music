import { Vue, Component, Watch } from 'vue-property-decorator'
import { userDetail } from '@/api/user.ts'
import { loginStatus } from '@/api/login.ts'
@Component
export default class LoginInfo extends Vue {
  isAutoLogin: any = false
  created(){
    // this.isAutoLogin = localStorage.getItem('_isAutoLogin')
    // this.isAutoLogin = this.isAutoLogin === 'true'
    // console.log(this.isAutoLogin);
    // console.log(document.cookie.indexOf('MUSIC_U='))
    // cookie中有MUSIC_U则已登录
    if (document.cookie.indexOf('MUSIC_U=') > -1) {
      this.$store.commit('setLoginState', true)
    } else {
      this.$store.commit('setLoginState', false)
    }
  }

  @Watch('$store.state.loginState')
  getLoginUserInfo(val: boolean){
    if (val) {
      loginStatus().then((res: any) => {
        console.log(res);
        this.$store.commit('setUserInfo', res.profile)
        
      }).catch(err => {
        console.log(err);
        
      })
    }
  }

  beforeDestory(){
    // 检查当前系统是否自动登录，非自动登录，则删除cookie MUSIC_U
  }
}