import { Vue, Component } from 'vue-property-decorator'
@Component
export default class DeepCopy extends Vue {
  deepCopy (obj: any): any {
    // console.log(typeof obj)
    if (typeof obj !== 'object' || obj == null) {
      return obj
    }

    let newObj: any
    if (Array.isArray(obj)) {
      newObj = []
    } else {
      newObj = {}
    }

    for (const key in obj) {
      if(Object.prototype.hasOwnProperty.call(obj, key)) {
        newObj[key] = this.deepCopy(obj[key])
      }
    }

    return newObj
  }
}