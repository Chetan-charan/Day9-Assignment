var getPopulation = () => {
    const xhr = new XMLHttpRequest();

    xhr.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");

    xhr.responseType = "json";

    xhr.onload = () => {
        var countries = xhr.response;
        console.log("Total Population of all Countries:")
        console.log(countries.reduce((sum,curr) => sum+curr.population,0));

    }


    xhr.send();

} 

getPopulation();