/**
 * Created by xiping.wang on 2017/7/25.
 */
import Layout from '../components/MyLayout.js'
import { observable,action } from 'mobx'
import { Provider } from 'mobx-react'
import {initStore} from '../store/store001'
import { observer,inject } from 'mobx-react'
import fetch from 'isomorphic-unfetch'

@observer
class store002 extends React.Component{
    constructor(props,context){
        super(props,context)
        console.log(`props:${JSON.stringify(props)}`)
        this.store = initStore(props.isServer,props.result)
        console.log(`this.store-----${JSON.stringify(this.store)}`)
    }
    get(){
        document.cookie='name_123='+'sdsdevewssss'
        this.store.change()
        console.log(`this.store002:${JSON.stringify(this.store)}`)
        fetch(`http://127.0.0.1:8888/login`,{
            method: 'POST',
            mode: 'cors',
            credentials: 'include',
            headers: {
                // 'Access-Control-Allow-Origin':'*',
                // 'Content-Type': 'application/json;charset=utf-8',
                // 'Access-Control-Allow-Credentials':'true',
            },
            body: JSON.stringify({ username: `hello username !` })
        })
    }
    render(){
        console.log(`this.props------${JSON.stringify(this.props)}`)
        console.log(`this.store.mobx.code------${JSON.stringify(this.store.mobx.store002.code)}`)
        console.log(`this.store------${JSON.stringify(this.store)}`)
        return(
            <Provider store={this.store}>
                <Layout  title='store002主页'>
                    <div>132
                        <h1 onClick={this.get.bind(this)}>
                            {/*{this.props.result.indexstore.mock}*/}
                            {this.store.mobx.store002.code}
                            {BACKEND_URL}
                            {CLIENT_SSS}
                        </h1>
                    </div>
                </Layout>
            </Provider>
        )
    }

}

store002.getInitialProps = async(req)=>{
    const isServer = !!req
    const store = await initStore(isServer)
    console.log(`store1----${JSON.stringify(store)}`)
    await store.getstore002()
    console.log(`store2----${JSON.stringify(store)}`)
    return {
        result:store.mobx,isServer
    }
}

export default store002