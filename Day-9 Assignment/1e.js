var getPopulation = () => {
    const xhr = new XMLHttpRequest();

    xhr.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");

    xhr.responseType = "json";

    xhr.onload = () => {

        var countries = xhr.response;
        var curr = val => val.currencies[0].code == "USD";
        var usd = countries.filter(curr);

        console.log("Countries that use USD as currency:");
        usd.forEach(country => {           
           console.log(country.name);        //to print only country names
        });

    }

    xhr.send();

} 

getPopulation();