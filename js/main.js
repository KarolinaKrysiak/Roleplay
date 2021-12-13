"use strict";

/*
global variables
*/
let _allEvents = [];
let _characters = [];
let _selectedCharacter = [];
let _allMembers = [];



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
    htmlTemplate += /*html*/ `
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

/*
Shows detailed view
*/

function showDetailView(id) {
  _selectedCharacter = id;
  const characterToShow = _characters.find(character => character.id === id);
  navigateTo("detail-view");
  document.querySelector("#detail-view-container").innerHTML = /*html*/ `
    
    <article>
    <img src="${characterToShow.img}">
      <h2>${characterToShow.name}</h2>
      <p>${characterToShow.occupation}</p>
      <p>${characterToShow.skills}</p>
      <p>${characterToShow.hobbies}</p>
      <p>${characterToShow.alignment}</p>
      <p>${characterToShow.type}</p>
      <p>${characterToShow.description}</p>
    </article>
  `;
}





/*Fetches json data from the file members.json*/
async function fetchMembers() {
  let response = await fetch('json/members.json');
  let data = await response.json();
  _allMembers = data;
  appendMembers(_allMembers);
}

fetchMembers();

/*
Appends json data to the DOM
*/
function appendMembers(members) {
  let htmlTemplate = "";
  for (let member of members) {
    htmlTemplate += /*html*/ `
      
        <div class="single-member">
          <div class="single-member-image">
            <img alt="team-member" src="${member.img}" >
          </div>
          <div class="single-member-text">
            <h4>${member.name}</h4>
            <p>${member.description}</p>
          </div>
        </div>
     

    `;
  }
  document.querySelector("#members").innerHTML = htmlTemplate;
}