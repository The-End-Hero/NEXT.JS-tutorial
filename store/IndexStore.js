/**
 * Created by xiping.wang on 2017/7/19.
 */
import { action, observable } from 'mobx'
import fetch from 'isomorphic-unfetch'

let store = null

export default class Store {


    @observable mobxarticle = {}
    @observable mobx = {}
    constructor () {
        // this.mobxarticle = result
        // this.mobx = 'macaline'
        // this.mobx
        // this.mobxarticle
    }
    sss(){return 123}
    // @action initmobxarticle = async(id) => {
    //     const res = await fetch(`http://127.0.0.1:8888/articledetail/${id}`)
    //     const req = await res.json()
    //     this.mobxarticle = req.dataMap
    //     console.log(`this=${this}`)
    //     console.log(`this.mobxarticle=======${JSON.stringify(this.mobxarticle)}`)
    // }
    // @action initmobx = async() => {
    //     const res = await fetch(`http://127.0.0.1:8888/123`)
    //     const req = await res.json()
    //     this.mobxarticle = req.dataMap
    //     console.log(`this=${this}`)
    //     console.log(`this.mobx=======${JSON.stringify(this.mobxarticle)}`)
    // }
}

export function initStore (isServer, result) {
    if (isServer && typeof window === 'undefined') {
        return new Store(isServer, result)
    } else {
        if (store === null) {
            store = new Store(isServer, result)
        }
        return store
    }
}