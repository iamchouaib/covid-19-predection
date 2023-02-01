export const WorldDataFetcher = (url) =>
  fetch(url)
    .then((r) => r.json())
    .then((data) =>
      data.map((point, index) => ({
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [point.countryInfo.long, point.countryInfo.lat],
        },
        properties: {
          id: index,
          country: point.country,
          cases: point.cases,
          todayCases: point.todayCases,
          deaths: point.deaths,
          todayDeaths: point.todayDeaths,
          recovered: point.recovered,
          todayRecovered: point.todayRecovered,
          active: point.active,
          critical: point.critical,
        },
      }))
    );
