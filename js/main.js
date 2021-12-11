"use strict";

/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNavX() {
    document.getElementById("myNav").style.width = "0%";
  }

  /* Close when someone clicks on the lnk inside the overlay */
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    window.scroll({
      top: 0, 
      left: 0, 
     });
  }

  function scrollTop(){
    window.scroll({
      top: 0, 
      left: 0, 
     });
  }


  // =========== Project functionality =========== //
/*
global variables: _projects _selectedProjectId
*/
let _projects = [];
let _selectedProjectId;

/*
Fetches json data from the file projects.json
*/
async function fetchData() {
  const response = await fetch('json/projects.json');
  const data = await response.json();
  _projects = data;
  console.log(_projects);
  appendProjects(_projects);
}

fetchData();

function appendProjects(projects) {
  let htmlTemplate = "";
  for (let project of projects) {
    htmlTemplate += /*html*/`
        <article onclick="showDetailView(${project.id})">
        
          <img src="${project.img}">
          <h2>${project.title}</h2>
          <h3>${project.undertitle}</h3>
          
        </article>
    `;
  }
  document.querySelector('#projects-container').innerHTML = htmlTemplate;
}

function showDetailView(id) {
  _selectedProjectId = id;
  const projectToShow = _projects.find(project => project.id === id);
  navigateTo("detail-view");
  
  document.querySelector("#detail-view-container").innerHTML = /*html*/` 
  
  <section class="deteils">
<div class="details-top">
  <div class="prototype-div">
    <img src="${projectToShow.img}"/>
  </div>
    <div  class="details-right">
      <h2>${projectToShow.title}</h2>
      <span class="red-line-p"></span>
      <p>${projectToShow.undertitle}</p>
      <p>Ammount of time: ${projectToShow.time}</p>
      <p>Group: ${projectToShow.group}</p>
    </div>
</div>
<div  class="details-bottom">
      <h3>What the project was about</h3>
      <span class="red-line-p"></span>
      <p>${projectToShow.description}</p>
      <h3>The process</h3>
      <span class="red-line-p"></span>
      <p>${projectToShow.methodology}</p>
      <div class="github-link">
      <span class="blue-line"></span>
      <a href="${projectToShow.github}">Link to the GitHub</a>
      <span class="blue-line"></span>
      <div>
</div>
    </section>
  `;
}
