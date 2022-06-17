//Read the countries API using fetch and print the name of country, capital, languages, population and area.


let countries = [];
let languages = [];

let largestCountries = [];

const url = 'https://restcountries.com/v2/all';

const fetchData = async () => {
    try{
    const response = await fetch(url);
    const data = await response.json();

    countries = data;

    countries.forEach(country => {
        console.log(`country:${country.name} capital:${country.capital} population :${country.population}`);
    })


    // languages 
    countries.forEach(country => {
        country.languages.forEach(language => {
            if(languages.indexOf(language.name)===-1){
                languages.push(language.name);
            }
        })
    })
    console.log(`the total nuber of languages is ${languages.length}`);

    // largest countries
    let highestCountry = 0;
    countries.forEach(country => {
        if(country.area >= highestCountry){
            highestCountry = country.area;
            largestCountries.push(country.name);
        }
    })
    console.log(`the  largest countries are :  ${largestCountries}`);
}
catch(error){
    console.log(error);
}
}

fetchData();



let catNames = [];

let cats = [];

const catsApi = 'https://api.thecatapi.com/v1/breeds';

fetch(catsApi)
.then(response => response.json())
.then(data => {
    data.forEach(cat => {
        cats.push(cat.name);
    })
    console.log(cats);

    // let weight = 0
    // cats.forEach(cat => {
        
    // })
})
.catch(error => console.log(error));
