import { Html, Head, Main, NextScript } from 'next/document'

import Script from 'next/script'

export default function Document() {
    return (
        <Html lang="pt-BR">
            <Head> 
                <link rel="icon" href="/favicon.ico" />
                <meta name="language" content="pt-BR" />
                <meta name="description" content="Leandro Lombaldo da silva, desenvolvedor front end ReactJS e React Native" />
                <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
                <meta name="author" content="Leandro Lombaldo" />
                <meta name="keywords" content="desenvolvedor front end e mobile, usando tecnologia ReactJS, NextJS, React Native"></meta>
                <meta property="og:type" content="page" />
                <meta property="og:site_name" content="Leandro Lombaldo da silva" />
                <meta property="og:locale" content="pt_BR" />
                <meta property="og:description" content="Leandro Lombaldo da silva, desenvolvedor front end ReactJS e React Native" />
                <link rel="apple-touch-icon" href="/favicon.ico"></link>
                <meta name="theme-color" content="#2A0944"></meta>


                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" />

            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}