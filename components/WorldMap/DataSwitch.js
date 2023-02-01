import styles from "../../styles/WorldmapPage.module.css";

export default function DataSwitch({ setShowedData }) {
  return (
    <div className={styles.dataswitch}>
      <button
        className={styles.dataswitch__button}
        onClick={() =>
          setShowedData({ dataType: "cases", circleColor: "#FF331F" })
        }
      >
        Cases
      </button>

      <button
        className={styles.dataswitch__button}
        onClick={() =>
          setShowedData({ dataType: "deaths", circleColor: "#FFFFFA" })
        }
      >
        Deaths
      </button>
    </div>
  );
}
