import { Vue, Component } from 'vue-property-decorator'
@Component
export default class InitTimeFormat extends Vue {
  handleShowTime (time: number): string {
    const a = time / 60
    let minute: any = Math.floor(a)
    let second: any = Math.floor(60 * parseFloat(0 + '.' + a.toString().split('.')[1]))
    if (minute < 10) {
      minute = '0' + minute
    }

    if (second < 10) {
      second = '0' + second
    }
    return minute + ':' + second
  }
}