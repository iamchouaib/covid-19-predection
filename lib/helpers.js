export const getData = async (country) => {
  const response = await fetch("/api/mydata");
  const data = await response.json();

  const fetchedDatas = Object.entries(data);

  const dataFilterd = fetchedDatas.filter((data) => {
    return data[1].CR.toLowerCase() == country.toLowerCase();
  });

  return dataFilterd;
};

export const getCountries = async () => {
  const response = await fetch("/api/country");
  const data = await response.json();

  const dataArr = Object.entries(data.Country_Region);

  return dataArr.map((e) => {
    return e[1];
  });
};

export const getMapData = () =>
  fetch("/api/map")
    .then((r) => r.json())
    .then((data) =>
      data.map((point, index) => ({
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [point.Long, point.Lat],
        },
        properties: {
          id: index,
          country: point.Country_Region,
          cases: parseInt(point.cases),
          todayCases: parseInt(point.todayCases),
          deaths: parseInt(point.deaths),
          todayDeaths: parseInt(point.todayDeaths),
        },
      }))
    );
export const getStatistique = async () => {
  const response = await fetch("http://localhost:3000/api/map");
  const data = await response.json();

  let totalCases = 0;
  let totalDeaths = 0;
  data.map((country) => {
    totalCases += parseInt(country.cases);
    totalDeaths += parseInt(country.deaths);
  });

  return { totalCases, totalDeaths };
};
export const getStatistiqueByCountry = async (country) => {
  const response = await fetch("/api/map");
  const data = await response.json();

  const dataFilterd = data.filter((c) => c.Country_Region == country);

  let totalCases = Math.floor(dataFilterd[0].cases);
  let totalDeaths = Math.floor(dataFilterd[0].deaths);
  let countryF = dataFilterd[0].Country_Region;
  return { country: countryF, totalCases, totalDeaths };
};
