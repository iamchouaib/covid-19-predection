import React, { useEffect } from "react";
import { getCountries, getDatass } from "../lib/helpers";

const Test = () => {
  //when change input

  useEffect(async () => {
    const datas = await getDatass();
  }, []);

  //

  return <div>chouaibe</div>;
};

export default Test;
