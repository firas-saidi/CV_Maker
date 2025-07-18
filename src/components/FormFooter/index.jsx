import React from "react";
import { useSelector } from "react-redux";
import styles from "./index.module.css";

export const FormFooter = () => {
  const { language } = useSelector((state) => state.language);

  let div;

  if (language === "en") {
    div = (
      <>
        <span>
          To contribute, visit my
          <a
            href="https://github.com/firas-saidi"
            target="_blank"
            className={styles.mark}
          >
            github
          </a>
          repo.
        </span>
        <span>
          Visit
          <a href="https://firas-saidi.netlify.app/" target="_blank" className={styles.mark}>
            my website
          </a>
          for my other projects.
        </span>
      </>
    );
  
  } else {
    div = (
      <>
        <span>
          Pour contribuer, visitez mon
          <a
            href="https://github.com/firas-saidi"
            target="_blank"
            className={styles.mark}
          >
            dépôt github
          </a>
          .
        </span>
        <span>
          Pour mes autres projets, visitez
          <a href="https://firas-saidi.netlify.app/" target="_blank" className={styles.mark}>
            mon site web
          </a>
          .
        </span>
      </>
    );
  }

  return <div className={styles.footer}>{div}</div>;
};
