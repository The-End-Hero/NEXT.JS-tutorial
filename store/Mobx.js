/**
 * Created by xiping.wang on 2017/7/19.
 */
import Store from './IndexStore'
import { action, observable } from 'mobx'
import fetch from 'isomorphic-unfetch'

export class Mobx extends Store{
    constructor(props,context){
        super(props,context)
        console.log(1111)
        this.mobx = super.mobx
        console.log(2222)
        super.mobx='sssssssss'
    }
    rrrr(){
        super.sss()

    }
    @action initmobx = async() => {
        // console.log(`super.indexstore${super.sss()}`)
        // console.log(`super.indexstore${super.indexstore()}`)
        console.log(`Mobx.__proto__===Store:${Mobx.__proto__===Store}`)
        console.log(`${Mobx.__proto__.__proto__===Store}`)
        console.log(`${Mobx.prototype.sss()}`)
        console.log(`Mobx.prototype.mobx: ${JSON.stringify(Mobx.prototype.mobx)}`)
        console.log(3333)
        const res = await fetch(`http://127.0.0.1:8888/123`)
        const req = await res.json()
        Mobx.prototype.mobx = req.dataMap
        console.log(`Mobx.prototype.mobx: ${JSON.stringify(Mobx.prototype.mobx)}`)
        console.log(`this=${JSON.stringify(this)}`)
        console.log(`this.mobx=======${JSON.stringify(Mobx.prototype.mobx)}`)
        return req.dataMap
    }
}