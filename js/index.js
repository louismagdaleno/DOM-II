//event 1 - click, change font
let header = document.querySelector('.main-navigation');
header.addEventListener('click', (event) => {
  event.target.style.fontFamily = 'Raleway';
  event.target.style.fontWeight = 'Bold';
  event.preventDefault();
});



//event 2 - click, stopPropagation
let logo = document.querySelector('.logo-heading');
logo.addEventListener('click', (event) => {
  event.target.style.color = 'teal';
  event.stopPropagation();
});



//event 3 - dblclick, change background color
let intro = document.querySelector('.intro');
intro.addEventListener('dblclick', (event) => {
  event.target.style.background = 'orange';
});



//event 4 - dblclick, change width
let introImg = intro.querySelector('img');
introImg.addEventListener('dblclick', (event) => {
  event.target.style.width = '80%';
  event.stopPropagation();
});



//event 5 mouseover , mouseout
let originalFirstSectionH2FontSize;
let firstSectionH2 = document.querySelector('.content-section h2');
firstSectionH2.addEventListener('mouseover', (event) => {
  originalFirstSectionH2FontSize = event.target.style.fontSize; 
  event.target.style.fontSize = '4rem';
});
firstSectionH2.addEventListener('mouseout', (event) => {
  event.target.style.fontSize = originalFirstSectionH2FontSize; 
});



//event 6 - wheel, change font color
let firstSectionPs = document.querySelectorAll('.content-section p');
firstSectionPs[0].addEventListener('wheel', (event) => {
  event.target.style.color = 'blue';
}, {passive: true}); 



//event 7 - mousedown, change font color
firstSectionPs[1].addEventListener('mousedown', (event) => {
  event.target.style.color = 'green';
});



//event 8 - load, change border
let secondSection = document.querySelector('.content-section.inverse-content');
let secondSectionImg = secondSection.querySelector('img');
secondSectionImg.addEventListener('load', (event) => {
  event.target.style.border = '4px solid black';
});



// event 9 - contextmenu, change border 
let secondSectionPs = secondSection.querySelectorAll('p');
secondSectionPs.forEach(e => e.addEventListener('contextmenu', (event) => {
  event.target.style.border = '4px solid red';
  event.preventDefault(); 
}));



// event 10 - click, change border style
secondSectionPs.forEach(e => e.addEventListener('click', (event) => {
  event.target.style.border = '4px solid blue';
}));