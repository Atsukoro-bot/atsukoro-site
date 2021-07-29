import Head from 'next/head'
import { useState } from 'react';

import styles from '../styles/Commands.module.css'

export default function Home({data}) {
  const [categoryName, setCategoryName] = useState("Informational");

  return (
    <div className={styles.container}>
      <Head>
        <title>Atsukoro Commands</title>
        <meta name="description" content="Best Discord anime bot" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.flex}>
        <div className={styles.cmd}>
          {Object.keys(data).map((c) => (
            <div key={c} onClick={() => setCategoryName(c)} className={styles.cmdbutton}>
              {c}
            </div>
          ))}
        </div>
        <div className={styles.cmdinfobox}>
          {console.log(Object.keys(data[categoryName]).length)}
        {Object.keys(data[categoryName]).map((c) => (
          <div className={styles.cmdinfo}>
            <div className={styles.title}>
              <p>ak.{c}</p>
              <div className={styles.alias}>
                [No aliases]
              </div>
            </div>
            <div className={styles.description}>
              {Object.values(data[categoryName][c])}
            </div>
          </div>
          ))}
        </div>
      </div>

    </div>
  )
}


export async function getStaticProps(context) {
  const res = await fetch(`https://atsukoro.herokuapp.com/commands`, {
    method: 'POST'
  });
  const coms = await res.json()

  var data = {};
  coms.forEach(function(item) {
    var category = data[item.category] = data[item.category] || {};
    category[item.name] = data[item.name] || {description: item.description};
});


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