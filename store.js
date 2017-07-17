/**
 * Created by xiping.wang on 2017/7/17.
 */
import { action, observable } from 'mobx'
import fetch from 'isomorphic-unfetch'


let store = null

class Store {
    // @observable lastUpdate = 0
    // @observable light = false
    //
    // constructor (isServer, lastUpdate) {
    //     this.lastUpdate = lastUpdate
    // }
    //
    // @action start = () => {
    //     this.timer = setInterval(() => {
    //         this.lastUpdate = Date.now()
    //         this.light = true
    //     })
    // }
    //
    // stop = () => clearInterval(this.timer)
    @observable result = async function(){
        const res = await fetch('http://127.0.0.1:8888/123')
        const data = await res.json()
        return data.dataMap

        console.log(`mobx.result: ${data}`)
    }
    constructor (isServer, result) {
        this.result = result
    }
    @action start = () => {

        }
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
