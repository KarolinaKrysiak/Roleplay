"use strict";

/*
global variable: _allEvents
*/
let _allEvents = [];

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
      <section class="activity-section">
        <div class="half-activity-section">
            <img src="${event.img}" class="img-half">
        </div>
        <div class="half-activity-section">

          <div>
            <h3>${event.name}</h3>
            <p>${event.date}</p>
            <p>${event.description}</p>
          </div>
 
          <a href="${event.link}"><img class="btn" src="icons/btn.png"></a>
        </div>
  </section>
    `;
  }
  document.querySelector("#event-section").innerHTML = htmlTemplate;
}