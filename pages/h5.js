/**
 * Created by xiping.wang on 2017/7/14.
 */
import Layout from '../components/MyLayout.js'
import Link from 'next/link'
// import React from 'react'
import fetch from 'isomorphic-unfetch'
//
// const Index = (props) => (
//     <Layout>
//         <h1>Batman  TV Show</h1>
//         <ul>
//             {props.shows.map(({show})=>(
//                 <li key={show.recommendationData.id}>
//                     <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
//                         <a>{show.name}</a>
//                     </Link>
//                 </li>
//             ))}
//         </ul>
//     </Layout>
// )
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
        console.log('shows:'+this.props.shows)
        this.state={
            shows: this.props.shows
        }
    }
    render(){
        let innerbox=[]
        console.log(this.state.shows)
        for(let i=0;i<this.state.shows.length; i++ ){
            innerbox.push(
                <li key={i}>
                    <Link as={`/T/${this.state.shows[i].recommendationData.id}`} href={`/h5article?id=${this.state.shows[i].recommendationData.id}`}>
                        {/*<img src={this.state.shows[i].recommendationData.coverImgUrl} alt=""/>*/}
                        {/*<p>{this.state.shows[i].recommendationData.title}</p>*/}
                        {/*<p>{this.state.shows[i].recommendationData.tags.replace(/,/g,'/')}</p>*/}
                        {/*<content result={this.state.shows[i].recommendationData}/>*/}
                        {content(this.state.shows[i].recommendationData)}
                    </Link>
                </li>
            )
        }
        return(
            <Layout title='h5 主页'>
                <ul>
                    {innerbox}
                </ul>
            </Layout>
        );
    }
}

Index.getInitialProps = async function () {
    console.log(123)
    // const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
    const res = await fetch('http://127.0.0.1:8888/123')
    const data = await res.json()

    console.log(`Show data fetched. 123123: ${data}`)

    return{
        shows:data.dataMap
    }
}

export default Index

