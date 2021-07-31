import { useState } from 'react';

import styles from '../styles/Commands.module.css'

import Meta from '../components/Meta/Meta'
import { GetStaticProps } from 'next';

interface CommandsProps {
  data: string
}

const Commands: React.FC<CommandsProps> = ({data}) => {
  const [categoryName, setCategoryName] = useState<string>("Utility");

  return (
    <div className={styles.container}>
      <Meta title={"Atsukoro Commands"}/>
      <div className={styles.flex}>
        <div className={styles.cmd}>
          {Object.keys(data).map((c) => (
            <div key={c} onClick={() => setCategoryName(c)} className={categoryName == c ? styles.cmdbuttonactive : styles.cmdbutton}>
              {c}
            </div>
          ))}
        </div>
        <div className={styles.cmdinfobox}>
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


export const getStaticProps: GetStaticProps = async (context) => {

  const res = await fetch(`https://atsukoro.herokuapp.com/commands`, {
    method: 'POST'
  });
  const coms = await res.json()

  var data: object = {};
  coms.forEach(function(item: any) {
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

export default Commands;