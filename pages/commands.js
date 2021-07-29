import Head from 'next/head'

import styles from '../styles/Commands.module.css'

export default function Home({data}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Atsukoro Commands</title>
        <meta name="description" content="Best Discord anime bot" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.flex}>
        <div className={styles.cmd}>
          <div className={styles.cmdbutton}>
            Anime
          </div>
          <div className={styles.cmdbutton}>
            Anime
          </div>
          <div className={styles.cmdbutton}>
            Anime
          </div>
        </div>
        <div className={styles.cmdinfobox}>
          <div className={styles.cmdinfo}>
            <div className={styles.title}>
              <p>ak.help</p>
              <div className={styles.alias}>
                [joe, biden]
              </div>
            </div>
            <div className={styles.description}>
              Joe bidenJoe bidenJoe bidenJoe bidenJoe bidenJoe biden
            </div>
          </div>
          <hr className={styles.hr}/>
          <div className={styles.cmdinfo}>
            
            </div>
            <div className={styles.cmdinfo}>
            
            </div>
            <div className={styles.cmdinfo}>
            
            </div>
            <div className={styles.cmdinfo}>
            
            </div>
            <div className={styles.cmdinfo}>
            
            </div>
            <div className={styles.cmdinfo}>
            
            </div>
            <div className={styles.cmdinfo}>
            
            </div>
        </div>
      </div>

    </div>
  )
}


// {data.map((cmd) => (
//   <div className={styles.data}>
//     <p>{cmd.name}</p>
//   </div>
// ))}

export async function getStaticProps(context) {
  const res = await fetch(`https://atsukoro.herokuapp.com/commands`, {
    method: 'POST'
  });

  const data = await res.json()
  if (!data) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }
  
  return {
    props: { data }
  }
}