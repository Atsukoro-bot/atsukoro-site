import Head from "next/head";

interface MetaProps {
    title?: string,
    description?: string
}

const Meta: React.FC<MetaProps> = ({ title, description }) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="icon" href="../../public/icons/favicon.ico" type="image/x-icon" />
            <link rel="apple-touch-icon" sizes="180x180" href="../../public/icons/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="../../public/icons/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="../../public/icons/favicon-16x16.png" />

            {/* Settings */}
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="utf-8" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary" key="twcard" />
            <meta name="twitter:creator" content="Atsukoro" key="twhandle" />
            <meta name="twitter:url" content="https://atsukoro.bruh" key="twurl" />
            <meta name="twitter:description" content={description} key="twdescription" />
            <meta name="twitter:image" content="https://i.imgur.com/vbIuETI.png" key="twimage" />

            {/* Open Graph */}
            <meta property="og:url" content="https://atsukoro.bruh" key="ogurl" />
            <meta property="og:image" content="https://i.imgur.com/vbIuETI.png" key="ogimage" />
            <meta property="og:title" content={title} key="ogtitle" />
            <meta property="og:description" content={description} key="ogdesc" />

            {/* Other */}
            <meta property="theme-color" content="#404EED" key="thcolor" />


        </Head>
    )
}

Meta.defaultProps = {
    title: 'Atsukoro',
    description: 'Anime, manga & japanese culture based discord bot.',
}

export default Meta;