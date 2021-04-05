import { useState, useRef } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const jsMutator = useRef(null);
  const changeColor = () => {
    jsMutator.current.style.setProperty("--js-color", "orange");
    
  };
  return (
    <>
      <section className={styles.firstBlock}>
        <h2>Example 1: Global Variables</h2>
        <p className={styles.rootClasses}>
          These were set up at the <code>:root</code> level, so they apply
          everywhere.
        </p>
      </section>
      <section className={styles.secondBlock}>
        <h2>Example 2: Local Variables</h2>
        <p className={styles.localClasses}>
          These were set up at the selector level, so they apply everywhere{" "}
          <code>.localClasses</code> is used.
        </p>
      </section>
      <section className={styles.thirdBlock}>
        <h2>Example 3: The Cascade</h2>
        <p className={styles.cascadeClasses}>
          An example of a preveiously declared variable having a global effect
          once updated later in the cascade.
        </p>
      </section>
      <section className={styles.foruthBlock}>
        <h2>Example 4: Interaction with JavaScript</h2>
        <p className={styles.jsClasses} ref={jsMutator}>
          JavaScript has access to these variables, and can use them and abuse
          them as it sees fit.
        </p>
        <button onClick={changeColor}>Change my color!</button>
      </section>
      <section className={styles.fifthBlock}>
        <h2>Example 5: Content-Awareness</h2>
        <p className={styles.caClasses}>
          CSS applies the styles available to <code>.caClasses</code>.
        </p>
        <p className={`${styles.caClasses} ${styles.contentAwareness}`}>
          If, however, <code>.contentAwareness</code> is present, it applies
          those styles.
        </p>
      </section>
    </>
  );
}
