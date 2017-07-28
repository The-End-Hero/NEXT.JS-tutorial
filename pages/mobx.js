/**
 * Created by xiping.wang on 2017/7/17.
 */
import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import { Provider } from 'mobx-react'
import LazyLoad  from 'react-lazyload';
import stylesheet from 'styles/mobx.scss'
import Place from '../components/placeholder'


import env from '../env';

const content = (props)=>{
    console.log(`content props: ${props}`)
    return (
        <div>
            <img src={props.coverImgUrl} alt=""/>
            <p>{props.title}</p>
            <p>{props.tags.replace(/,/g,'/')}</p>
        </div>
    )
}

class Index extends React.Component{
    constructor(props,context){
        super(props, context)
        this.state={
            shows: props.shows.dataMap
        }
        console.log(`this.state:${JSON.stringify(this.state)}`)
    }
    changestore(){
        fetch('http://127.0.0.1:3001/111',{
            method: 'POST',
            mode: 'cors',
            credentials: 'include',
            headers: {
                // 'Access-Control-Allow-Origin':'*',
                // 'Content-Type': 'application/json;charset=utf-8',
                // 'Access-Control-Allow-Credentials':'true',
            },
        })
            .then( r => r.text() )
            .then( txt => console.log('代理返回'+txt) )
        // alert(132)
        // this.store.start()
        // console.log(this.store.mobx[0].recommendationData.id)
    }
    touchmove(){

    }
    render(){
        let innerbox=[]
        if(!!this.state.shows){
            for(let i=0;i<this.state.shows.length; i++ ){
                innerbox.push(
                    <li key={this.state.shows[i].recommendationData.id} >
                        <Link as={`/T/${this.state.shows[i].recommendationData.id}`} href={`/h5article?id=${this.state.shows[i].recommendationData.id}`}>
                            <LazyLoad once={true} placeholder={<Place/>} offset={[-200, 0]} debounce={500}>
                                {content(this.state.shows[i].recommendationData)}
                            </LazyLoad >
                        </Link>
                    </li>
                )
            }
        }

        return(
        <Provider store={this.store}>
            <Layout title='Mobx 主页'>
                <style jsx global>{stylesheet}</style>
                <button onClick={this.changestore.bind(this)}>click!</button>
                <ul onTouchMove={this.touchmove.bind(this)}>
                    {innerbox}
                </ul>
            </Layout>
        </Provider>
        );
    }
}
Index.getInitialProps = async function ({req}) {
    const res = await fetch(env.GRAPHQL_ENDPOINT)
    const data = await res.json()
    return{shows: data}
}
export default Index

