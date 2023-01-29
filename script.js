let searchBtn = document.getElementById("search-btn");

let countryInp = document.getElementById('country-inp');

searchBtn.addEventListener('click' , ()=>{
    let countryName = countryInp.value;
    let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;

    console.log(finalURL)

    // fetching and converiting it to json
    fetch(finalURL)
    .then((response)=>response.json())
    .then((data)=>{
        console.log(data[0]);

        result.innerHTML=`
        <img src="${data[0].flags.svg}" class="flag-img">
        <h2 class="country-name">${data[0].name.common}</h2>
        <div class='wrapper' >
            <div class='data-wrapper'>
            <h3>Capital : ${data[0].capital[0]} </h3>
            <h3>Continent : ${data[0].continents[0]}</h3>
            <h3>Population : ${data[0].population} people</h3>
            <h3>Language : ${Object.values(data[0].languages)}
             </h3>
            </div>
        </div>
        `
    }).catch(()=>{
        result.innerHTML=`
        <p class="error"> Please Enter a Valid Country name </p>
        `
    })
})


