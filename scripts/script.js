const heroContent = document.querySelector('.hero')
const zodiacContent =  document.querySelector('.js-character-modal')
const zodiacTitle = document.querySelector('.js-zodiac')
const zodiacSplashArt = document.querySelector('.splash_art')
const characterName = document.querySelector('character_name')
const subheading = document.querySelector('.js-date-range')
const zodiacDesc = document.querySelector('.js-zodiac-desc')

// display all characters
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

// help button 

const moreInfo = document.querySelector('.button__white');

moreInfo.addEventListener('click', function(event){
  const moreInfoContent = document.querySelector('.js-more-info')
  // alert('heyy');
  if (moreInfoContent.style.display == "none") {
    moreInfoContent.style.display = "flex";
  } else {
    moreInfoContent.style.display = "none";
    heroContent.style.display = "block"
  }
});

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


// birthday input & response

const birthdaySubmit = document.querySelector('.js-submit-button')

birthdaySubmit.addEventListener('click', function(event){
  event.preventDefault();
  const dateInput = document.querySelector('.js-birthday-input');
  let birthDate = new Date(dateInput.value);
  const month = birthDate.getMonth() + 1;
  const day = birthDate.getDate() + 1;
console.log("hi");
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
    zodiacContent.style.display = "grid"
    heroContent.style.display = "none"
    subheading.textContent = "MARCH 21ST - APRIL 19TH"
    zodiacTitle.innerHTML = zodiac;
    zodiacDesc.textContent = "Just like AKU, you are cold, conniving, and long for release from the chains that hold you back."
    zodiacSplashArt.src = "images/characters/aku_splash_art.svg"
    // characterName.src = "images/characters/names/aku.svg"
    console.log("aries")
  } 
  
  if (zodiac == "TAURUS") {
    zodiacContent.style.display = "grid"
    heroContent.style.display = "none"
    subheading.textContent = "APRIL 20TH - MAY 20TH"
    zodiacTitle.innerHTML = zodiac
    zodiacDesc.textContent = "Lorem ipsum dolor sit TAURUS, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    zodiacSplashArt.src = "images/characters/aku_splash_art.svg"
    // characterName.src = "images/characters/names/grim.svg"
    console.log("taurus")
  }
 
  if (zodiac == "GEMINI") {
    zodiacContent.style.display = "grid"
    heroContent.style.display = "none"
    subheading.textContent = "MAY 21ST - JUNE 20TH"
    zodiacTitle.innerHTML = zodiac
    zodiacDesc.textContent = "Lorem ipsum dolor sit GEMINI, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    zodiacSplashArt.src = "images/characters/aku_splash_art.svg"
    // characterName.src = "images/characters/names/grim.svg"
    console.log("GEMINI")
  }

  if (zodiac == "CANCER") {
    zodiacContent.style.display = "grid"
    heroContent.style.display = "none"
    subheading.textContent = "JUNE 21ST - JULY 22ND"
    zodiacTitle.innerHTML = zodiac
    zodiacDesc.textContent = "Lorem ipsum dolor sit CANCER, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    zodiacSplashArt.src = "images/characters/aku_splash_art.svg"
    // characterName.src = "images/characters/names/grim.svg"
    console.log("CANCER")
  }

  if (zodiac == "LEO") {
    zodiacContent.style.display = "grid"
    heroContent.style.display = "none"
    subheading.textContent = "JULY 23RD - AUGUST 22ND"
    zodiacTitle.innerHTML = zodiac
    zodiacDesc.textContent = "Lorem ipsum dolor sit LEO, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    zodiacSplashArt.src = "images/characters/aku_splash_art.svg"
    // characterName.src = "images/characters/names/grim.svg"
    console.log("LEO")
  }

  if (zodiac == "VIRGO") {
    zodiacContent.style.display = "grid"
    heroContent.style.display = "none"
    subheading.textContent = "AUGUST 23RD - SEPTEMBER 22ND"
    zodiacTitle.innerHTML = zodiac
    zodiacDesc.textContent = "Lorem ipsum dolor sit LEO, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    zodiacSplashArt.src = "images/characters/aku_splash_art.svg"
    // characterName.src = "images/characters/names/grim.svg"
    console.log("VIRGO")
  }

  if (zodiac == "LIBRA") {
    zodiacContent.style.display = "grid"
    heroContent.style.display = "none"
    subheading.textContent = "SEPTEMBER 23RD - OCTOBER 22ND"
    zodiacTitle.innerHTML = zodiac
    zodiacDesc.textContent = "Lorem ipsum dolor sit LIBRA, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    zodiacSplashArt.src = "images/characters/aku_splash_art.svg"
    // characterName.src = "images/characters/names/grim.svg"
    console.log("LIBRA")
  }

  if (zodiac == "SCORPIO") {
    zodiacContent.style.display = "grid"
    heroContent.style.display = "none"
    subheading.textContent = "OCTOBER 23RD - NOVEMBER 20TH"
    zodiacTitle.innerHTML = zodiac
    zodiacDesc.textContent = "Lorem ipsum dolor sit SCORPIO, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    zodiacSplashArt.src = "images/characters/aku_splash_art.svg"
    // characterName.src = "images/characters/names/grim.svg"
    console.log("SCORPIO")
  }

  if (zodiac == "SAGGITARIUS") {
    zodiacContent.style.display = "grid"
    heroContent.style.display = "none"
    subheading.textContent = "NOVEMBER 21ST - DECEMBER 20TH"
    zodiacTitle.innerHTML = zodiac
    zodiacDesc.textContent = "Lorem ipsum dolor sit SAGGITARIUS, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    zodiacSplashArt.src = "images/characters/aku_splash_art.svg"
    // characterName.src = "images/characters/names/grim.svg"
    console.log("SAGGITARIUS")
  }

  if (zodiac == "CAPRICORN") {
    zodiacContent.style.display = "grid"
    heroContent.style.display = "none"
    subheading.textContent = "DECEMBER 21ST - JANUARY 18TH"
    zodiacTitle.innerHTML = zodiac
    zodiacDesc.textContent = "Lorem ipsum dolor sit CAPRICORN, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    zodiacSplashArt.src = "images/characters/aku_splash_art.svg"
    // characterName.src = "images/characters/names/grim.svg"
    console.log("CAPRICORN")
  }

  if (zodiac == "AQUARIUS") {
    zodiacContent.style.display = "grid"
    heroContent.style.display = "none"
    subheading.textContent = "JANUARY 19TH - FEBRUARY 18TH"
    zodiacTitle.innerHTML = zodiac
    zodiacDesc.textContent = "Lorem ipsum dolor sit AQUARIUS, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    zodiacSplashArt.src = "images/characters/aku_splash_art.svg"
    // characterName.src = "images/characters/names/grim.svg"
    console.log("AQUARIUS")
  }

  if (zodiac == "PISCES") {
    zodiacContent.style.display = "grid"
    heroContent.style.display = "none"
    subheading.textContent = "FEBRUARY 19TH - MARCH 20TH"
    zodiacTitle.innerHTML = zodiac
    zodiacDesc.textContent = "Lorem ipsum dolor sit PISCES, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    zodiacSplashArt.src = "images/characters/aku_splash_art.svg"
    characterName.src = "images/characters/names/grim.svg"
    console.log("PISCES")
  }
})

const characterx = document.getElementById("x")

characterx.addEventListener('click', function(event){
  if (zodiacContent.style.display == "grid") {
    zodiacContent.style.display = "none";
    heroContent.style.display = "grid"
  } else {
    zodiacContent.style.display = "none";
    heroContent.style.display = "block"
  }
})

const himButton = document.querySelector(".him")
const daffyButton = document.querySelector(".daffy")
const akuButton = document.querySelector(".aku")
const tomButton = document.querySelector(".tom")
const chrisButton = document.querySelector(".chris")
const cheeseButton = document.querySelector(".cheese")
const iceButton = document.querySelector(".ice")
const scrappyButton = document.querySelector(".scrappy")
const mojoButton = document.querySelector(".mojo")
const grimButton = document.querySelector(".grim")
const katzButton = document.querySelector(".katz")
const mandyButton = document.querySelector(".mandy")

