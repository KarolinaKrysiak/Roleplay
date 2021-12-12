"use strict";

/*
global variable: _allEvents
*/
let _allEvents = [];
let _characters = [];

/*
Fetches json data from the file events.json
*/

async function fetchEvents() {
  let response = await fetch('json/events.json');
  let data = await response.json();
  _allEvents = data;
  appendEvents(_allEvents);
}

fetchEvents();

/*
Appends json data to the DOM
*/
function appendEvents(events) {
  let htmlTemplate = "";
  for (let event of events) {
    htmlTemplate += /*html*/ `
      <section class="activity-section" style="height:450px">
        <div class="half-activity-section">
            <img src="${event.img}" class="img-half">
        </div>
        <div class="half-activity-section">

          <div>
            <h4>${event.name}</h4>
            <p style="text-align: center;">${event.date}</p>
            <p>${event.description}</p>
          </div>
 
          <a href="${event.link}"><img class="btn" src="icons/btn.png"></a>
        </div>
  </section>
  <img alt="grey line" src="icons/line.png" class="line-events">

    `;
  }
  document.querySelector("#event-section").innerHTML = htmlTemplate;
}

/*
Fetches json data from the file characters.json
*/
async function fetchData() {
  const response = await fetch('json/characters.json');
  const data = await response.json();
  _characters = data;
  console.log(_characters);
  appendCharacters(_characters);

}

fetchData();

function appendCharacters(characters) {
  let htmlTemplate = "";
  for (let character of characters) {
    htmlTemplate += /*html*/`
      <article>
        <article onclick="showDetailView(${character.id})">
          <img src="${character.img}">
          <h5>${character.name}</h5>
        </article>
      </article>
    `;
  }
  document.querySelector('#characters-grid').innerHTML = htmlTemplate;
}


/* MAP API */
let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zooms: 8,
    center: {
      lat: 56.06541438464884,
      lng: 9.85778763833258
    },
    mapId: '5f30455d0db8305'
  });
}