import { Chart, Bar } from "react-chartjs-2";
import styles from "../styles/Home.module.css";
import { useEffect, useRef, useState } from "react";
import { getCountries, getData } from "../lib/helpers";
export default function MainChart(props) {
  const countryRef = useRef();

  const [datas, setdatas] = useState([]);
  const [countries, setCountries] = useState([]);

  useEffect(async () => {
    setCountries(await getCountries());
    const dataFilterd = await getData("Afghanistan");
    setdatas(dataFilterd);
  }, []);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: false,
      },
    },
    elements: {
      point: {
        radius: 2,
      },
    },
    scales: {
      x: {
        type: "time",
        time: {
          unit: "month",
        },
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
      y2: {
        position: "right",
        grid: {
          display: false,
        },
      },
    },
  };

  let mainChartData = {
    labels: [],
    datasets: [],
  };

  if (true) {
    mainChartData = {
      labels: [],
      datasets: [
        {
          type: "line",
          label: "Cases",
          data: datas.map((casesData) => {
            return {
              x: casesData[1].Date,
              y: casesData[1].CC,
            };
          }),
          borderColor: "#1cd9c4",
          backgroundColor: "#1cd9c4",
          borderWidth: 1.5,
        },
        {
          type: "bar",
          label: "Deaths",
          data: datas.map((deathsData) => {
            return {
              x: deathsData[1].Date,
              y: deathsData[1].Fat,
            };
          }),
          yAxisID: "y2",
          backgroundColor: "#121416",
        },
      ],
    };
  }

  const changeCountryHandler = async () => {
    const dataFilterd = await getData(countryRef.current.value);
    setdatas(dataFilterd);
    props.onChangeData(countryRef.current.value);
  };

  return (
    <>
      <select
        ref={countryRef}
        onChange={changeCountryHandler}
        className={styles.country}
      >
        {countries.map((country) => (
          <option value={country}>{country}</option>
        ))}
      </select>
      <div id={styles.mainChart} className={styles.dashboard__element}>
        <Chart type="bar" options={options} data={mainChartData} />
      </div>
    </>
  );
}
