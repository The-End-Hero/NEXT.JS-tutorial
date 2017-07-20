/**
 * Created by xiping.wang on 2017/7/20.
 */
import { observable,action } from 'mobx'
import fetch from 'isomorphic-unfetch'


// let store = null
class simpleStore{
    @observable qqqq = '99199'
    @observable info = {}
    @action getdata = async()=>{
        const res = await fetch(`http://127.0.0.1:8888/simple`)
        const req = await res.json()
        console.log(`class simpleStore req===${JSON.stringify(req)}`)
        console.log(`this.info:${JSON.stringify(this.info)}`)
        this.info = req
        console.log(`this.info:${JSON.stringify(this.info)}`)
    }
}
const simple = new simpleStore()

export default simple