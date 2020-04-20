window.onload = function () {
  getCovidStatsUSA();
  getCovidStatsIndia();
};

function getCovidStatsUSA() {
  fetch("https://coronavirus-tracker-api.herokuapp.com/v2/locations/225")
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      let country = data.location.country;
      let population = data.location.country_population;
      let update = data.location.last_updated;
      let confirmedCases = data.location.latest.confirmed;
      let deaths = data.location.latest.deaths;

      document.getElementById("country").innerHTML = country.toLocaleString(
        "en"
      );
      document.getElementById(
        "population"
      ).innerHTML = population.toLocaleString("en");
      document.getElementById("update").innerHTML = update.substr(0, 10);
      document.getElementById(
        "cases"
      ).innerHTML = confirmedCases.toLocaleString("en");
      document.getElementById("deaths").innerHTML = deaths.toLocaleString("en");
      document.getElementById("percent").innerHTML =
        ((Number(deaths) / Number(confirmedCases)) * 100).toLocaleString("en", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }) + "%";
    })
    .catch(function () {
      console.log("error");
    });
  setTimeout(getCovidStatsUSA, 43200000); // update every 12 hours
}

function getCovidStatsIndia() {
  fetch("https://coronavirus-tracker-api.herokuapp.com/v2/locations/131")
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      let country = data.location.country;
      let population = data.location.country_population;
      let update = data.location.last_updated;
      let confirmedCases = data.location.latest.confirmed;
      let deaths = data.location.latest.deaths;

      document.getElementById("icountry").innerHTML = country.toLocaleString(
        "en"
      );
      document.getElementById(
        "ipopulation"
      ).innerHTML = population.toLocaleString("en");
      document.getElementById("iupdate").innerHTML = update.substr(0, 10);
      document.getElementById(
        "icases"
      ).innerHTML = confirmedCases.toLocaleString("en");
      document.getElementById("ideaths").innerHTML = deaths.toLocaleString(
        "en"
      );
      document.getElementById("ipercent").innerHTML =
        ((Number(deaths) / Number(confirmedCases)) * 100).toLocaleString("en", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }) + "%";
    })
    .catch(function () {
      console.log("error");
    });
  setTimeout(getCovidStatsIndia, 43200000); // update every 12 hours
}
