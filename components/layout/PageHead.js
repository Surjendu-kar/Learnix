import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <title>
                    {headTitle ? headTitle : "Learnix - School Template"}
                </title>
            </Head>
        </>
    )
}

export default PageHead