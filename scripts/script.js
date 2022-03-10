const allVillains = document.querySelector('.js-button');

allVillains.addEventListener('click', function (event) {
  event.preventDefault();
  // alert('hey');
  const villainsPage = document.querySelector('.characters')
  const heroContent = document.querySelector('.hero')
  if (villainsPage.style.display == "none") {
    villainsPage.style.display = "grid";
    heroContent.style.display = "none";
  } else {
    villainsPage.style.display = "none";
    heroContent.style.display = "block"
}

});

const moreInfo = document.querySelector('.button_white');

moreInfo.addEventListener('click', function(event){
  
})




// const modal = document.getElementById('.character-modal')

// const himBtn = document.getElementsByClassName('.him')
// const daffyBtn = document.getElementsByClassName('.daffy')
// const akuBtn = document.getElementsByClassName('.aku')
// const tomBtn = document.getElementsByClassName('.tom')
// const chrisBtn = document.getElementsByClassName('.chris')
// const cheeseBtn = document.getElementsByClassName('.cheese')
// const iceBtn = document.getElementsByClassName('.iceking')
// const scrappyBtn = document.getElementsByClassName('.scrappy')
// const mandarkBtn = document.getElementsByClassName('.mandark')
// const grimBtn = document.getElementsByClassName('.grim')
// const katzBtn = document.getElementsByClassName('.katz')
// const mandyBtn = document.getElementsByClassName('.mandy')

// const span = document.getElementsByClassName("close")[0];


// himbtn.onclick = function() {
//     modal.style.display = "block";
//   }

// daffybtn.onclick = function() {
//     modal.style.display = "block";
//   }

// akubtn.onclick = function() {
//     modal.style.display = "block";
//   }

// tombtn.onclick = function() {
//     modal.style.display = "block";
//   }
// chrisbtn.onclick = function() {
//     modal.style.display = "block";
//   }

// cheesebtn.onclick = function() {
//     modal.style.display = "block";
//   }

// icebtn.onclick = function() {
//     modal.style.display = "block";
//   }

// scrappybtn.onclick = function() {
//     modal.style.display = "block";
//   }

// mandarkbtn.onclick = function() {
//     modal.style.display = "block";
//   }

// grimbtn.onclick = function() {
//     modal.style.display = "block";
//   }

// katzbtn.onclick = function() {
//     modal.style.display = "block";
//   }

// mandybtn.onclick = function() {
//     modal.style.display = "block";
//   }

// window.onclick = function(event) {
//     if (event.target == modal) {
//     modal.style.display = "none";
//     }
// }

