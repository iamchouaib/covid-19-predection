import styles from "../styles/Home.module.css";
import { useState } from "react";

export default function Overview({
  data: { country, totalDeaths, totalCases },
}) {
  const [statistical, setStatistical] = useState({ cases: 0, deaths: 0 });

  if (statistical.cases !== totalCases) {
    if (statistical.cases < totalCases) {
      setTimeout(() => {
        setStatistical((oldStatistical) => {
          return {
            cases: oldStatistical.cases + Math.floor(totalCases / 1000),
            deaths: oldStatistical.deaths + Math.floor(totalDeaths / 1000),
          };
        });
      }, 50);
    } else {
      setStatistical({ cases: totalCases, deaths: totalDeaths });
    }
  }

  return (
    <div className={styles.overview__group}>
      <div className={styles.overview__subGroup}>
        <div className={styles.overview__element}>
          <p className={styles.label}>
            <b className={styles.bold}>{country}</b> Cases Prideted{" "}
          </p>
          <p className={styles.value}>{statistical.cases}</p>
        </div>
        <div className={styles.overview__element}>
          <p className={styles.label}>
            <span className={styles.bold}>{country}</span> Deaths Prideted
          </p>
          <p className={styles.value}>{statistical.deaths}</p>
        </div>
        <div className={styles.overview__element}>
          <p className={styles.label}>Death rate</p>
          <p className={styles.value}>{`${Math.floor(
            (statistical.deaths / statistical.cases) * 100
          )} %`}</p>
        </div>
      </div>
    </div>
  );
}
