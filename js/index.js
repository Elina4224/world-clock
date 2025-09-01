function updateTime() {
  let houstonElement = document.querySelector("#houston");
  if (houstonElement) {
    let houstonDateElement = houstonElement.querySelector(".date");
    let houstonTimeElement = houstonElement.querySelector(".time");
    let houstonTime = moment().tz("America/Houston");

    houstonDateElement.innerHTML = houstonTime.format("MMMM Do YYYY");
    houstonTimeElement.innerHTML = houstonTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let bakuElement = document.querySelector("#baku");
  if (bakuElement) {
    let bakuDateElement = bakuElement.querySelector(".date");
    let bakuTimeElement = bakuElement.querySelector(".time");
    let bakuTime = moment().tz("Asia/Baku");

    bakuDateElement.innerHTML = bakuTime.format("MMMM Do YYYY");
    bakuTimeElement.innerHTML = bakuTime.format("h:mm:ss [<small>]A[</small>]");
  }

  let madridElement = document.querySelector("#madrid");
  if (madridElement) {
    let madridDateElement = madridElement.querySelector(".date");
    let madridTimeElement = madridElement.querySelector(".time");
    let madridTime = moment().tz("Europe/Madrid");

    madridDateElement.innerHTML = madridTime.format("MMMM Do YYYY");
    madridTimeElement.innerHTML = madridTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}
function updateCity(event) {
  let cityTimeZone = event.target.value;

  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }

  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div class="city">
        <div><h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
  
        <div class="time">${cityTime.format(
          "h:mm:ss"
        )} <small>${cityTime.format("A")}</small></div>

    </div>`;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
