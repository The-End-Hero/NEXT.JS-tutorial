/**
 * Created by xiping.wang on 2017/7/17.
 */
import { action, observable } from 'mobx'
import fetch from 'isomorphic-unfetch'


let store = null

class Store {

    @observable mobx = 555555555555
    constructor (isServer, result) {
        this.mobx = result
    }
    @action start = () => {
        this.mobx[0].recommendationData.id++
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
