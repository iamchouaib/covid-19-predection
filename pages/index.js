import { Chart as ChartJS } from "chart.js/auto";
import "chartjs-adapter-moment";

import Overview from "../components/Overview";
import MainChart from "../components/MainChart";
import Footer from "../components/Interface/Footer";
import Loader from "../components/Interface/Loader";
import { getStatistique, getStatistiqueByCountry } from "../lib/helpers";
import React, { useState } from "react";

export default function Home({ data }) {
  const [passedData, setpassedData] = useState({ country: "total", ...data });

  const changeDataHandler = async (country) => {
    const fdata = await getStatistiqueByCountry(country);
    setpassedData(fdata);
  };
  return (
    <>
      {data ? (
        <div className="full__width">
          <Overview data={passedData} />
          <MainChart onChangeData={changeDataHandler} />
          <Footer />
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}

export async function getStaticProps() {
  const data = await getStatistique();

  return {
    props: { data },
  };
}
