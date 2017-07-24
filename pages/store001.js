/**
 * Created by xiping.wang on 2017/7/20.
 */
import Layout from '../components/MyLayout.js'
import { observable,action } from 'mobx'
import { Provider } from 'mobx-react'
import {initStore} from '../store/store001'
import { observer,inject } from 'mobx-react'
import fetch from 'isomorphic-unfetch'

@observer
class store001 extends React.Component{
    constructor(props,context){
        super(props,context)
        console.log(`props:${JSON.stringify(props)}`)
        this.store = initStore(props.isServer,props.result)
        console.log(`this.store-----${JSON.stringify(this.store)}`)
    }
    get(){
        document.cookie='name_123='+'sdsdevewssss'
        this.store.change()
        fetch(`http://127.0.0.1:8888/login`,{
            credentials: 'include',
            method: 'POST',
            headers: {
                // 'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username: `hello username !` })
        })
    }
    render(){
        console.log(`this.props------${JSON.stringify(this.props)}`)
        console.log(`this.store.mobx.code------${JSON.stringify(this.store.mobx.code)}`)
        console.log(`this.store------${JSON.stringify(this.store)}`)
        return(
            <Provider store={this.store}>
                <div>132
                    <h1 onClick={this.get.bind(this)}>
                        {/*{this.props.result.indexstore.mock}*/}
                        {this.store.mobx.code}
                        {BACKEND_URL}
                    </h1>
                </div>
            </Provider>
        )
    }

}

store001.getInitialProps = async(req)=>{
    const isServer = !!req
    const store = await initStore(isServer)
    console.log(`store1----${JSON.stringify(store)}`)
    await store.getdata()
    console.log(`store2----${JSON.stringify(store)}`)
    return {
        result:store.mobx,isServer
    }
}

export default store001