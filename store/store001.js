/**
 * Created by xiping.wang on 2017/7/20.
 */
import { action, observable } from 'mobx'
import fetch from 'isomorphic-unfetch'

let store = null

export default class Store {


    // @observable mobxarticle = {}
    @observable mobx = {
        // store001:{},
        // store002:{}
    }
    constructor (isServer, result) {
        this.mobx=result
    }
    // indexstore = observable({
    //     mock:'macaline 889889'
    // })
    @action getstore001 = async()=>{
        const res = await fetch(`http://127.0.0.1:8888/simple`)
        const req = await res.json()
        console.log(`class simpleStore req===${JSON.stringify(req)}`)
        this.mobx.store001 = await req
        console.log(23333)
    }
    @action getstore002 = async()=>{
        const res = await fetch(`http://127.0.0.1:8888/simple`)
        const req = await res.json()
        console.log(`class simpleStore req===${JSON.stringify(req)}`)
        this.mobx.store002 = await req
    }
    @action change = ()=>{
        this.mobx.store001.code++
    }
    sss(){
        console.log('macaline    66666')
    }
}

export function initStore (isServer, result={}) {
    if (isServer && typeof window === 'undefined') {
        return new Store(isServer, result)
    } else {
        if (store === null) {
            store = new Store(isServer, result)
        }
        return store
    }
}