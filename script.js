const apiKey = "1229ac6060bd4ff59ec80930262202";

function getWeather() {

  const city = document.getElementById("city").value;

  if (city === "") {
    alert("Please enter city name");
    return;
  }

  const url =
    `https://api.weatherapi.com/v1/current.json?key=1229ac6060bd4ff59ec80930262202&q=Delhi`;

  fetch(url)

    .then(response => response.json())

    .then(data => {

      // Error check
      if (data.error) {
        document.getElementById("result").innerHTML =
          "City not found";
        return;
      }

      // Show result
      document.getElementById("result").innerHTML = `
        <h3>${data.location.name}</h3>
        <p>Temperature: ${data.current.temp_c} °C</p>
        <p>Weather: ${data.current.condition.text}</p>
      `;
    })

    .catch(() => {
      document.getElementById("result").innerHTML =
        "Error Try again";
    });
}
