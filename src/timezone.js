function showCurrentTime(event) {
  let currentTokyoTimeElement = document.querySelector("#tokyo");
  let currentTokyoTime = moment();
  let formattedCurrentTokyoTime = currentTime.format("dddd, MMMM D, YYYY");

  if (event.target.value === "tokyo") {
    alert(`It is ${formattedCurrentTime} in Tokyo, Japan.`);
  }
  if (event.target.value === "paris") {
    alert("Ohayo");
  }
  if (event.target.value === "sydney") {
    alert("Ohayo");
  }
}
let timezoneElement = document.querySelector("#timezone");
timezoneElement.addEventListener("change", showCurrentTime);
