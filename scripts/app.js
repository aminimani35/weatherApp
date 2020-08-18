const cityForm = document.querySelector('form');
const details = document.querySelector('.detail');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');




const updateUI = data => {
    // const cityDets = data.cityDets;
    // const weather = data.weather;

    const {cityDets , weather} = data;
    details.innerHTML = `
    <h5 class="my-4">${cityDets.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-3">
      <span>${weather.Temperature.Metric.Value}</span> <span>&deg;C</span>
    </div>`


    let timeSrc = null;
    if (weather.IsDayTime){
        timeSrc = 'img/day.svg';
    }else{
        timeSrc = 'img/night.svg'
    }
    time.setAttribute('src' , timeSrc)


    const iconSrc = `img/icons/${weather.WeatherIcon}.svg`
    icon.setAttribute('src' ,iconSrc);
}



//  updataing




const updateCity = async city => {
    const cityDets = await getCity(city);
    const weather = await getWeather(cityDets.Key);

    return {
        cityDets : cityDets ,
        weather : weather
    }
}

cityForm.addEventListener('submit',e =>{
    // prevent Default action 
    e.preventDefault();

    // getting city
    const city = cityForm.city.value.trim();
    cityForm.reset();

    // updating ui with the city value
    updateCity(city).then(data => updateUI(data)).catch(err => {
        console.log(err);
    });

    
}) 