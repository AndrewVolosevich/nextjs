import styles from "./init-loader.module.scss";
import React from "react";
import Layout from "../layout";

const InitLoader = () => {
  return (
    <Layout>
      <div className={styles.wrapper}>
        <div className={styles.loader}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </Layout>
  );
};

export default InitLoader;
