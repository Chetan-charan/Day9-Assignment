
var getAsia = () => {
    const xhr = new XMLHttpRequest();

    xhr.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");

    xhr.responseType = "json";

    xhr.onload = () => {
        var countries = xhr.response;
        let region = (value) => value.region == "Asia";
        var region_Asia = countries.filter(region);
        console.log(region_Asia);
    }


    xhr.send();

} 

getAsia();