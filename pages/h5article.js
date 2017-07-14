/**
 * Created by xiping.wang on 2017/7/14.
 */
import Layout from '../components/MyLayout.js'
import fetch from 'isomorphic-unfetch'

const h5article = (props)=>(
    <Layout>
        <h1>{props.show.dataMap.title}</h1>
        <div>{props.show.dataMap.tags.replace(/,/g,'/')}</div>
        <div dangerouslySetInnerHTML={{__html: props.show.dataMap.content}}></div>
    </Layout>
)

h5article.getInitialProps = async function (context) {
    const {id} = context.query
    // const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
    const res = await fetch(`http://127.0.0.1:8888/articledetail/${id}`)
    const show = await res.json()

    console.log(`Fetched show : ${show}`)

    return {show}
}

export default h5article
