import { useState } from "react";

import styles from "../styles/Commands.module.css";

import Meta from "../components/Meta/Meta";
import { GetStaticProps } from "next";

import { DisplayCategory } from "../modules/commands/DisplayCategory";
import { DisplayCategoryInfo } from "../modules/commands/DisplayCategoryInfo";

interface CommandsState {
  data: string;
}

const CommandsPage = ({ data }) => {
  const [categoryName, setCategoryName] = useState<string>("Utility");

  return (
    <div className={styles.container}>
      <Meta title={"Atsukoro Commands"} />
      <div className={styles.flex}>
        <DisplayCategory
          categoryName={categoryName}
          data={data}
          setCategoryName={setCategoryName}
        />
        <DisplayCategoryInfo categoryName={categoryName} data={data} />
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch(`https://atsukoro.herokuapp.com/commands`);
  const coms = await res.json();

  var data: object = {};
  coms.forEach(function (item: any) {
    var category = (data[item.category] = data[item.category] || {});
    category[item.name] = data[item.name] || { description: item.description };
  });

  if (!data) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { data },
  };
};

export default CommandsPage;
