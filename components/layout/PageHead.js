import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <title>
                    {headTitle ? headTitle : "Iqnaut - School Template"}
                </title>
            </Head>
        </>
    )
}

export default PageHead