/**
 * Created by xiping.wang on 2017/7/14.
 */
import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import env from '../env'
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
                <li key={this.state.shows[i].recommendationData.id}>
                    <Link as={`/T/${this.state.shows[i].recommendationData.id}`} href={`/h5article?id=${this.state.shows[i].recommendationData.id}`}>
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
    const res = await fetch(env.GRAPHQL_ENDPOINT)
    const data = await res.json()

    console.log(`Show data fetched. 123123: ${data}`)

    return{
        shows:data.dataMap
    }
}

export default Index

