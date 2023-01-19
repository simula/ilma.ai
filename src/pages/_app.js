import '../styles/globals.css'
import Head from 'next/head'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Layout {...pageProps}>
                <Head>
                    <title>Ilma</title>
                </Head>
                <Component {...pageProps} />
            </Layout>
        </>
    )
}

export default MyApp
