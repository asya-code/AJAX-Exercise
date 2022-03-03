'use strict';

// PART 1: SHOW A FORTUNE

function showFortune(evt) {
  fetch('/fortune')
  .then(response => response.text())
  .then(serverData =>{
  document.querySelector('#fortune-text').innerHTML = serverData
  });
}


document.querySelector('#get-fortune-button').addEventListener('click', showFortune);

// PART 2: SHOW WEATHER

function showWeather(evt) {
  evt.preventDefault();
  
  const zipcode = document.querySelector('#zipcode-field').value;

  fetch(`/weather.json?zipcode=${zipcode}`) 
    .then(response => response.json())
    .then(jsonData => {
      const jsonParam = jsonData.forecast + " " + jsonData.temp;
      document.querySelector('#weather-info').innerHTML = jsonParam;
    });
};

document.querySelector('#weather-form').addEventListener('submit', showWeather);

// PART 3: ORDER MELONS

function orderMelons(evt) {
  evt.preventDefault();
  const formInputs = {
   qty: document.querySelector('#qty-field').value,
   melon_type: document.querySelector('#melon-type-field').value};

  fetch("/order-melons.json", {
    method: "POST",
    body: JSON.stringify(formInputs),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then (response => response.json())
    .then (jsonData => {

      console.log(jsonData)
      const jsonParam = jsonData.code + " " + jsonData.msg;
      document.querySelector('#order-status').innerHTML = jsonParam;
  
    } 
      )
  

  // TODO: show the result message after your form
  // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}
document.querySelector('#order-form').addEventListener('submit', orderMelons);
