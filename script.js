let input = "";

const apiKey = "fd19d8cae00e07ca229993a76170a092";
const icon=document.querySelector("#icon");

function search() {
    input = document.querySelector(".search input").value;
    weather();
}

async function weather() {
    if (!input) {
        alert("Please enter a city name");
        return;
    }

    const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(apiurl);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        document.querySelector("#temp").textContent = data.main.temp + "°C";
        document.querySelector("#city").textContent = data.name;
        document.querySelector("#country").textContent = data.sys.country;
        document.querySelector("#humidity").innerText = data.main.humidity + "%";
        document.querySelector("#air").innerText = data.wind.speed + " km/h";
        
    } catch (error) {
        console.error("Error fetching weather data:", error);
        alert("Failed to fetch weather data. Please check the city name or try again later.");
    }
}
