/**
 * Created by xiping.wang on 2017/7/18.
 */
import { action, observable } from 'mobx'
import fetch from 'isomorphic-unfetch'

let store = null

class Mobxarticlestore {
    @observable mobxarticle = 1231231239999
    // constructor (isServer, result) {
    //     this.mobxarticle = result
    // }
    @action initstart = async(id) => {
        const res = await fetch(`http://127.0.0.1:8888/articledetail/${id}`)
        const req = await res.json()
        this.mobxarticle = req.dataMap
        console.log(`this.mobxarticle=======${JSON.stringify(this.mobxarticle)}`)
    }
}

export function initStore (isServer, result) {
    if (isServer && typeof window === 'undefined') {
        return new Mobxarticlestore(isServer, result)
    } else {
        if (store === null) {
            store = new Mobxarticlestore(isServer, result)
        }
        return store
    }
}
