const heroContent = document.querySelector('.hero')
const zodiacContent =  document.querySelector('.js-character-modal')
const zodiacTitle = document.querySelector('.js-zodiac')
const zodiacSplashArt = document.querySelector('.splash_art')
const modal = document.querySelector('.js-modal-wrapper')
const characterName = document.querySelector('.character_name')
const subheading = document.querySelector('.js-date-range')
const zodiacDesc = document.querySelector('.js-zodiac-desc')
const audio = document.querySelector("#speakers")
const villainsPage = document.querySelector('.characters')




// display all characters

const allVillains = document.querySelector('.js-button');

allVillains.addEventListener('click', function (event) {
  event.preventDefault();
  // alert('hey');
    if (villainsPage.style.display == "grid") {
    villainsPage.style.display = "none";
    modal.style.display = "grid";
  } else {
    villainsPage.style.display = "grid";
    modal.style.display = "none"
  }
})

// allVillains.addEventListener('click', function (event) {
//   event.preventDefault();
//   // alert('hey');
//   const villainsPage = document.querySelector('.characters')
//   const heroContent = document.querySelector('.hero')
//   if (villainsPage.style.display == "none" && heroContent.style.display == "grid") {
//     villainsPage.style.display = "grid";
//     heroContent.style.display = "none";
//   } else if (villainsPage.style.display == "none" && zodiacContent.style.display == "grid"){
//     villainsPage.style.display = "grid";
//     zodiacContent.style.display = "none";
//   }
// });


// help button 

const moreInfo = document.querySelector('.button__white');

moreInfo.addEventListener('click', function(event){
  const moreInfoContent = document.querySelector('.js-more-info')
  // alert('heyy');
  if (moreInfoContent.style.display == "none") {
    moreInfoContent.style.display = "flex";
  } else {
    moreInfoContent.style.display = "none";
    // heroContent.style.display = "block"
  }
});


// x buttons 

const xButton = document.querySelector('.x')

xButton.addEventListener('click', function(event){
  const moreInfoContent = document.querySelector('.js-more-info')
  if (moreInfoContent.style.display == "flex") {
    moreInfoContent.style.display = "none";
  } else {
    moreInfoContent.style.display = "none";
    heroContent.style.display = "block"
  }
});

const characterx = document.getElementById("x")

characterx.addEventListener('click', function(event){
  if (zodiacContent.style.display == "grid") {
    zodiacContent.style.display = "none";
    heroContent.style.display = "grid"
    audio.pause();
  } else {
    zodiacContent.style.display = "none";
  }
})





// birthday input & response

const birthdaySubmit = document.querySelector('.js-submit-button')

birthdaySubmit.addEventListener('click', function(event){
  event.preventDefault();
  modal.style.display = "grid";
  villainsPage.style.display = "none"
  heroContent.style.display = "none"
  zodiacContent.style.display = "grid"
  const dateInput = document.querySelector('.js-birthday-input');
  let birthDate = new Date(dateInput.value);
  const month = birthDate.getMonth() + 1;
  const day = birthDate.getDate() + 1;
  console.log("its working!!!");
  let zodiac = "";
    if ((day >= 21 && month == 3) || (day <= 19 && month == 4)) {
        zodiac = "ARIES";
    } else if ((day >= 20 && month == 4) || (day <= 20 && month == 5)){ 
        zodiac = "TAURUS";
    } else if ((day >= 21 && month == 5) || (day <= 20 && month == 6)){ 
        zodiac = "GEMINI";
    } else if ((day >= 21 && month == 6) || (day <= 22 && month == 7)){ 
        zodiac = "CANCER";
    } else if ((day >= 23 && month == 7) || (day <= 22 && month == 8)){ 
        zodiac = "LEO";
    } else if ((day >= 23 && month == 8) || (day <= 22 && month == 9)){ 
        zodiac = "VIRGO"; 
    } else if ((day >= 23 && month == 9) || (day <= 22 && month == 10)){ 
        zodiac = "LIBRA";
    } else if ((day >= 23 && month == 10) || (day <= 21 && month == 11)){ 
        zodiac = "SCORPIO";
    } else if ((day >= 22 && month == 11) || (day <= 21 && month == 12)){ 
        zodiac = "SAGGITARIUS";
    } else if ((day >= 22 && month == 12) || (day <= 19 && month == 1)){ 
        zodiac = "CAPRICORN";
    } else if ((day >= 20 && month == 1) || (day <= 18 && month == 2)){ 
        zodiac = "AQUARIUS";
    } else if ((day >= 19 && month == 2) || (day <= 20 && month == 3)){ 
        zodiac = "PISCES";
  }
  console.log(zodiac);


  if (zodiac == "ARIES") {
    zodiacTitle.innerHTML = zodiac
    subheading.textContent = "MARCH 21ST - APRIL 19TH"
    zodiacDesc.textContent = "Just like AKU, you are cold, conniving, and long for release from the chains that hold you back."
    zodiacSplashArt.src = "images/characters/him_splash.svg"
    characterName.src = "images/characters/names/him.svg"
    audio.src = 'sounds/him.mp3'
    audio.play ();
    console.log("aries")
  } 
  
  if (zodiac == "TAURUS") {
    zodiacTitle.innerHTML = zodiac
    subheading.textContent = "APRIL 20TH - MAY 20TH"
    zodiacDesc.textContent = "Lorem ipsum dolor sit TAURUS, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    zodiacSplashArt.src = "images/characters/grim_splash.svg"
    characterName.src = "images/characters/names/grim.svg"
    console.log("taurus")
  }
 
  if (zodiac == "GEMINI") {
    zodiacTitle.innerHTML = zodiac
    subheading.textContent = "MAY 21ST - JUNE 20TH"
    zodiacDesc.textContent = "Lorem ipsum dolor sit GEMINI, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    zodiacSplashArt.src = "images/characters/chris_splash.svg"
    characterName.src = "images/characters/names/chris.svg"
    console.log("GEMINI")
  }

  if (zodiac == "CANCER") {
    zodiacTitle.innerHTML = zodiac
    subheading.textContent = "JUNE 21ST - JULY 22ND"
    zodiacDesc.textContent = "Lorem ipsum dolor sit CANCER, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    zodiacSplashArt.src = "images/characters/ice_splash.svg"
    characterName.src = "images/characters/names/ice.svg"
    console.log("CANCER")
  }

  if (zodiac == "LEO") {
    zodiacTitle.innerHTML = zodiac
    subheading.textContent = "JULY 23RD - AUGUST 22ND"
    zodiacDesc.textContent = "Lorem ipsum dolor sit LEO, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    zodiacSplashArt.src = "images/characters/scrappy_splash.svg"
    characterName.src = "images/characters/names/scrappy.svg"
    console.log("LEO")
  }

  if (zodiac == "VIRGO") {
    zodiacTitle.innerHTML = zodiac
    subheading.textContent = "AUGUST 23RD - SEPTEMBER 22ND"
    zodiacDesc.textContent = "You are annoying and you dont know it! You also probably like cheese and chocolate milk."
    zodiacSplashArt.src = "images/characters/cheese_splash.svg"
    characterName.src = "images/characters/names/cheese.svg"
    characterName.style.bottom = "12rem";
    console.log("VIRGO")
  }

  if (zodiac == "LIBRA") {
    zodiacTitle.innerHTML = zodiac
    subheading.textContent = "SEPTEMBER 23RD - OCTOBER 22ND"
    zodiacDesc.textContent = "Lorem ipsum dolor sit LIBRA, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    zodiacSplashArt.src = "images/characters/tom_splash.svg"
    characterName.src = "images/characters/names/tom.svg"
    audio.src = 'sounds/tom.mp3'
    audio.play ();
    console.log("LIBRA")
  }

  if (zodiac == "SCORPIO") {
    zodiacTitle.innerHTML = zodiac
    subheading.textContent = "OCTOBER 23RD - NOVEMBER 20TH"
    zodiacDesc.textContent = "Lorem ipsum dolor sit SCORPIO, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    zodiacSplashArt.src = "images/characters/katz_splash.svg"
    characterName.src = "images/characters/names/katz.svg"
    audio.src = 'sounds/katz.mp3'
    audio.play ();
    console.log("SCORPIO")
  }

  if (zodiac == "SAGGITARIUS") {
  zodiacContent.style.display = "grid"
  heroContent.style.display = "none"
  zodiacTitle.innerHTML = zodiac
    subheading.textContent = "NOVEMBER 21ST - DECEMBER 20TH"
    zodiacDesc.textContent = "Lorem ipsum dolor sit SAGGITARIUS, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    zodiacSplashArt.src = "images/characters/mojo_splash.svg"
    characterName.src = "images/characters/names/mojo_jojo.svg"
    console.log("SAGGITARIUS")
  }

  if (zodiac == "CAPRICORN") {
  zodiacContent.style.display = "grid"
  heroContent.style.display = "none"
  zodiacTitle.innerHTML = zodiac
  subheading.textContent = "DECEMBER 21ST - JANUARY 18TH"
  zodiacDesc.textContent = "Lorem ipsum dolor sit CAPRICORN, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  zodiacSplashArt.src = "images/characters/daffy_splash.png"
  characterName.src = "images/characters/names/daffy.svg"
  characterName.style.left = "2rem";
  console.log("CAPRICORN")
  }

  if (zodiac == "AQUARIUS") {
    zodiacTitle.innerHTML = zodiac
    subheading.textContent = "JANUARY 19TH - FEBRUARY 18TH"
    zodiacDesc.textContent = "Lorem ipsum dolor sit AQUARIUS, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    zodiacSplashArt.src = "images/characters/mandy_splash.svg"
    characterName.src = "images/characters/names/mandy.svg"
    audio.src = 'sounds/mandy.mp3'
    audio.play ();
    console.log("AQUARIUS")
  }

  if (zodiac == "PISCES") {
    zodiacTitle.innerHTML = zodiac
    subheading.textContent = "FEBRUARY 19TH - MARCH 20TH"
    zodiacDesc.textContent = "Lorem ipsum dolor sit PISCES, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    zodiacSplashArt.src = "images/characters/aku_splash.svg"
    characterName.src = "images/characters/names/aku.svg"
    console.log("PISCES")
  }
})



// get class name of character 

const allCharacters = document.querySelectorAll(".character_box")

allCharacters.forEach(function(characterButtonElement){
  const character = characterButtonElement.getAttribute("data-character")
  console.log(character);
  characterButtonElement.addEventListener('click', function(event){
    
      if (character == "him"){
        zodiacContent.style.display = "grid"
        heroContent.style.display = "none"
        zodiacTitle.innerHTML = "ARIES"
        subheading.textContent = "MARCH 21ST - APRIL 19TH"
        zodiacDesc.textContent = "Just like AKU, you are cold, conniving, and long for release from the chains that hold you back."
        zodiacSplashArt.src = "images/characters/him_splash.svg"
        characterName.src = "images/characters/names/him.svg"
        audio.src = 'sounds/him.mp3'
        audio.play ();
        allVillains.style.display = "none"
      } else if (character == "grim"){

      }
    alert("heyyyy")
    
  })
})





















// const character = document.getElementsByClassName("")

// character.addEventListener('click', function(event){
  
// })


// get class name of character
// const himButton = document.querySelector(".him")
// const daffyButton = document.querySelector(".daffy")
// const akuButton = document.querySelector(".aku")
// const tomButton = document.querySelector(".tom")
// const chrisButton = document.querySelector(".chris")
// const cheeseButton = document.querySelector(".cheese")
// const iceButton = document.querySelector(".ice")
// const scrappyButton = document.querySelector(".scrappy")
// const mojoButton = document.querySelector(".mojo")
// const grimButton = document.querySelector(".grim")
// const katzButton = document.querySelector(".katz")
// const mandyButton = document.querySelector(".mandy")
// // if clicked -> display character

// himButton.addEventListener('click', function(event){
//   zodiac = "PISCES"
//   villainsPage.style.display = "none";
//   zodiacContent.style.display = "grid";
// })





// function zodiacDisplay () {
//   zodiacContent.style.display = "grid"
//   heroContent.style.display = "none"
//   zodiacTitle.innerHTML = zodiac
// }

// if (himButton.clicked == true) {
//   zodiacContent.style.display = "grid"
//   heroContent.style.display = "none"
//   subheading.textContent = "FEBRUARY 19TH - MARCH 20TH"
//   zodiacTitle.innerHTML = zodiac
//   zodiacDesc.textContent = "Lorem ipsum dolor sit PISCES, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
//   zodiacSplashArt.src = "images/characters/aku_splash_art.svg"
//   characterName.src = "images/characters/names/grim.svg"
//   console.log("PISCES")
// } 

//  if (daffyButton.clicked == true) {
//   zodiacContent.style.display = "grid"
//   heroContent.style.display = "none"
//   subheading.textContent = "AUGUST 23RD - SEPTEMBER 22ND"
//   zodiacTitle.innerHTML = zodiac
//   zodiacDesc.textContent = "Lorem ipsum dolor sit VIRGO, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
//   zodiacSplashArt.src = "images/characters/aku_splash_art.svg"
//   // characterName.src = "images/characters/names/grim.svg"
//   console.log("VIRGO")
// }