/**
 * Created by xiping.wang on 2017/7/20.
 */
import Layout from '../components/MyLayout.js'
import { observer,inject } from 'mobx-react'
import { observable,action } from 'mobx'

import store from '../store/store'
import { Provider } from 'mobx-react'

@observer
class Index extends React.Component{
    constructor(props){
        super(props)
        console.log(`props----:${JSON.stringify(props)}`)
        console.log(`store----:${JSON.stringify(store)}`)
        this.state={
            data : this.store
        }
    }
    render(){
        return (
            <Provider store={store}>
            <Layout title='simple主页'>
                123
                <h1>
                    {/*{this.state.data.info.code}*/}
                    {/*{this.props.data.info.code}*/}
                </h1>
                3333
            </Layout>
            </Provider>
        )
    }
}

Index.getInitialProps = async ()=> {
    const res = await fetch(`http://127.0.0.1:8888/simple`)
    const req = await res.json()
    console.log(`store:${JSON.stringify(store)}`)
    console.log(`store:${JSON.stringify(store.simple)}`)
    store.simple=action(
        this.info = req
    )
    console.log(`store:${JSON.stringify(store.simple)}`)
    return {initdata:store.simple}
}

export default Index
