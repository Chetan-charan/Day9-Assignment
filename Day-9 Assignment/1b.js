var getPopulation = () => {
    const xhr = new XMLHttpRequest();

    xhr.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");

    xhr.responseType = "json";

    xhr.onload = () => {
        var countries = xhr.response;
        let populated = (value) => value.population<200000;
        var population = countries.filter(populated);
        console.log("Countries with Population less than 2 Lakh : ")
        console.log(population);
    }


    xhr.send();

} 

getPopulation();