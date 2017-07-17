import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import stylesheet from 'styles/index.scss'

const Index = (props) => (
    <Layout title='index主页'>
        {/*<style dangerouslySetInnerHTML={{__html:stylesheet}}/>*/}
        <style jsx global>{stylesheet}</style>
        <h1>Batman  TV Show</h1>
        <ul>
            {props.shows.map(({show})=>(
                <li key={show.id}>
                    <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
                        <a>{show.name}</a>
                    </Link>
                </li>
            ))}
        </ul>
    </Layout>
)

Index.getInitialProps = async function () {
    console.log(123)
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
    const data = await res.json()

    console.log(`Show data fetched. Count: ${data.length}`)

    return{
        shows:data
    }
}

export default Index

