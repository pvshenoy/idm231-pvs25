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


const birthdaySubmit = document.querySelector('.js-submit-button')

birthdaySubmit.addEventListener('click', function(event){
  event.preventDefault();
  const dateInput = document.querySelector('.js-birthday-input');
  let birthDate = new Date(dateInput.value);
  const month = birthDate.getMonth() + 1;
  const day = birthDate.getDate() + 1;
  const heroContent = document.querySelector('.hero')
  const zodiacContent =  document.querySelector('.js-character-modal')
  const zodiacTitle = document.querySelector('.js-zodiac')
  const zodiacSplashArt = document.querySelector('.splash_art')
  const characterName = document.querySelector('character_name')
  const subheading = document.querySelector('.js-date-range')
  const zodiacDesc = document.querySelector('.js-zodiac-desc')

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
    } else if ((day >= 22 && month == 2) || (day <= 20 && month == 3)){ 
        zodiac = "PISCES";
  }

  if (zodiac = "ARIES") {
    zodiacContent.style.display = "grid"
    heroContent.style.display = "none"
    subheading.textContent = "MARCH 21ST - APRIL 19TH"
    zodiacTitle.innerHTML = zodiac
    zodiacDesc.textContent = "Just like AKU, you are cold, conniving, and long for release from the chains that hold you back."
    zodiacSplashArt.src = "images/characters/aku_splash_art.svg"
    characterName.src = "images/characters/names/aku.svg"
    console.log("aries")
  }

  if (zodiac = "TAURUS") {
    zodiacContent.style.display = "grid"
    heroContent.style.display = "none"
    subheading.textContent = "APRIL 20TH - JUNE 20TH"
    zodiacTitle.innerHTML = zodiac
    zodiacDesc.textContent = "Just like GRIM, you are cold, conniving, and long for release from the chains that hold you back."
    zodiacSplashArt.src = "images/characters/aku_splash_art.svg"
    characterName.src = "images/characters/names/grim.svg"
    console.log("taurus")
  }

})

