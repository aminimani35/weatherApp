const key = 'M4U4Y1WCacAciRv2w9ZRquPtW8e0m7XK';

// get weather from api
const getWeather = async id => {
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/'
    const q = `${id}?apikey=${key}`;

    const responce = await fetch(base + q)
    const data = await responce.json();
    return data[0];
}


// get city from api 
const getCity = async city => {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const q = `?apikey=${key}&q=${city}`;

    const responce = await fetch(base + q);
    const data = await responce.json();
    return data[0];
}


// getCity('isfahan').then(data =>{
//     return getWeather(data.Key)})
//     .then(data => console.log(data))
// .catch(err => console.log(err));