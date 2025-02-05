const container = document.querySelector('.container');
const search = document.querySelector('.search button');
const weather = document.querySelector('.weather');
const details = document.querySelector('.details');
const error404 = document.querySelector('.not-found');

search.addEventListener('click', () => {

    //Sign Up to https://openweathermap.org/ to get your API key
    const key = 'Your API key';
    const city = document.querySelector('.search input').value;

    if (city === '') return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`)
        .then(r => r.json())
        .then(json => {
            if (json.cod === '404') {
                container.style.height = '400px;';
                weather.style.display = 'none';
                details.style.display = 'none';
                error404.style.display = 'block';
                error404.classList.add('fadeIn');
                return;
            }

            error404.style.display = 'none';
            error404.classList.remove('fadeIn');

            const image = document.querySelector('.weather img');
            const temperature = document.querySelector('.weather .temperature');
            const description = document.querySelector('.weather .description');
            const humidity = document.querySelector('.details .humidity span');
            const wind = document.querySelector('.details .wind span');

            switch (json.weather[0].main) {
                case 'Clear':
                    image.src = 'images/clear.png';
                    break;
                case 'Snow':
                    image.src = 'images/snow.png';
                    break;
                case 'Rain':
                    image.src = 'images/rain.png';
                    break;
                case 'Clouds':
                    image.src = 'images/cloud.png';
                    break;
                case 'Mist':
                    image.src = 'images/mist.png';
                    break;
                default:
                    image.src = '';
            }

            temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
            wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;
            description.innerHTML = `${json.weather[0].description}`;
            humidity.innerHTML = `${json.main.humidity}%`;

            weather.style.display = '';
            details.style.display = '';
            weather.classList.add('fadeIn');
            details.classList.add('fadeIn');
            container.style.height = '590px';
        });
})