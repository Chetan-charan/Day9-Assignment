var getPopulation = () => {
    const xhr = new XMLHttpRequest();

    xhr.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");

    xhr.responseType = "json";

    xhr.onload = () => {
        var countries = xhr.response;
        countries.forEach(country => {
            console.log("Country: " + country.name);
            console.log("Capital: " + country.capital);
            console.log("Flag: " + country.flag);

        });


    }


    xhr.send();

} 

getPopulation();