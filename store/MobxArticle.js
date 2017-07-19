/**
 * Created by xiping.wang on 2017/7/19.
 */
import Store from './IndexStore'
import { action, observable } from 'mobx'
import fetch from 'isomorphic-unfetch'

export class MobxArticle extends Store{
    constructor(){
        super()
    }
    @action initmobxarticle = async(id) => {
        const res = await fetch(`http://127.0.0.1:8888/articledetail/${id}`)
        const req = await res.json()
        // super.mobxarticle = req.dataMap
        console.log(`this=${this}`)
        // console.log(`this.mobxarticle=======${JSON.stringify(super.mobxarticle)}`)
        return req.dataMap
    }
}