import styles from "../../styles/Home.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <p>
        <b className={styles.bold}>module: </b>
        Sad
      </p>
      <p>
        <b className={styles.bold}>Teachers: </b>
        <a
          href={
            "https://elearning.univ-constantine2.dz/elearning/user/profile.php?id=11801"
          }
        >
          {" "}
          <b className={styles.marir}> Dr Naila Marir</b>
        </a>{" "}
        And <a>Dr.Mohammed Nassim Lacheheub</a>
      </p>
      <p>
        <b className={styles.made}>
          Made with <b>&hearts;</b> By
        </b>
        <span className={styles.bold}> Chouache chouaibe </span>,
        <span className={styles.bold}> Badach Ayoub</span> <b>and</b>
        <span className={styles.bold}> Khanfer Wail</span>
      </p>
    </div>
  );
}
