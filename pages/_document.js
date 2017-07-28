import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

export default class MyDocument extends Document {
    static getInitialProps ({ renderPage }) {
        const {html, head} = renderPage();
        const styles = flush();
        return { html, head, styles };
    }

    render () {
        const script = `window.ENV = '${process.env.NODE_ENV || 'dev'}';`;
        return (
            <html>
            <Head>
                <script dangerouslySetInnerHTML={{__html: script}}/>
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
            </html>
        )
    }
}