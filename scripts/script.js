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
const tvShow = document.querySelector ('.tv_show')
const villainType = document.querySelector('.villain_type')
const goal = document.querySelector('.goal')
const crimes = document.querySelector('.crimes')
const dateInput = document.querySelector('.js-birthday-input')
const allVillains = document.querySelector('.js-button');
const moreInfo = document.querySelector('.button__white');
const xButton = document.querySelector('.x')
const characterx = document.getElementById("x")
const allCharacters = document.querySelectorAll(".character_box")
audio.volume = ".8"


// display all characters

allVillains.addEventListener('click', function (event) {
  event.preventDefault();
    if (villainsPage.style.display == "grid") {
    villainsPage.style.display = "none";
    modal.style.display = "grid";
  } else {
    villainsPage.style.display = "grid";
    modal.style.display = "none"
    audio.pause();
  }
})


// help button 

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

xButton.addEventListener('click', function(event){
  const moreInfoContent = document.querySelector('.js-more-info')
  if (moreInfoContent.style.display == "flex") {
    moreInfoContent.style.display = "none";
  } else {
    moreInfoContent.style.display = "none";
    heroContent.style.display = "block"
  }
});

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
    zodiacDesc.textContent = "Looks like you enjoy psychological torture! You are unapologetically extravagant, and you know it."
    zodiacSplashArt.src = "images/characters/him_splash.png"
    characterName.src = "images/characters/names/him.svg"
    tvShow.textContent = "POWERPUFF GIRLS"
    villainType.textContent ="EXTRAVAGANT DEMON"
    goal.textContent = "rule the universe including Earth as the almighty being"
    crimes.textContent = "abuse of power, mass murder, mass destruction, mass corruption, genocide, universal take-over"
    audio.src = 'sounds/him.wav'
    audio.play ();
  } else if (zodiac == "TAURUS") { 
    zodiacTitle.innerHTML = zodiac
    subheading.textContent = "APRIL 20TH - MAY 20TH"
    zodiacDesc.textContent = "You might be abusive and hate all little children. Don't worry, they hate you too!"
    zodiacSplashArt.src = "images/characters/father_splash.png"
    characterName.src = "images/characters/names/father.svg"
    characterName.style.width = "20rem"
    characterName.style.left = "2rem"
    tvShow.textContent = "CODENAME: KIDS NEXT DOOR"
    villainType.textContent ="TYRANNICAL PARENT"
    goal.textContent = "ruin the lives of children"
    crimes.textContent = "brainwashing, abuse, terrorism, attempted cannibalism"
    audio.src = 'sounds/father.wav'
    audio.play ();
    console.log("taurus")
  } else if (zodiac == "GEMINI") { 
    zodiacTitle.innerHTML = zodiac
    subheading.textContent = "MAY 21ST - JUNE 20TH"
    zodiacDesc.textContent = "You are a narcissist and take pleasure in watching other suffer, especially on reality TV. The more danger involved, the better!"
    zodiacSplashArt.src = "images/characters/chris_splash.png"
    characterName.src = "images/characters/names/chris.svg"
    characterName.style.bottom = "13rem"
    characterName.style.left = "2rem"
    tvShow.textContent = "TOTAL DRAMA ISLAND"
    villainType.textContent ="SADISTIC MASTERMIND"
    goal.textContent = "become the most popular reality show host ever"
    crimes.textContent = "manslaughter, multiple reckless homicides, attempted mass murder, theriocide, snuff farming, fraud"
    audio.src = 'sounds/chris.wav'
    audio.play ();
    console.log("GEMINI")
  } else if (zodiac == "CANCER") { 
    zodiacTitle.innerHTML = zodiac
    subheading.textContent = "JUNE 21ST - JULY 22ND"
    zodiacDesc.textContent = "You are as cold as ice on the exterior, but deep down you are very warm and loving!"
    zodiacSplashArt.src = "images/characters/ice_splash.png"
    characterName.src = "images/characters/names/ice.svg"
    tvShow.textContent = "ADVENTURE TIME"
    villainType.textContent ="TRAGIC MONARCH"
    goal.textContent = "find a princess and marry her"
    crimes.textContent = "unlawful imprisonment, brainwashing, attempted forced marriage, stalking, kidnapping"
    audio.src = 'sounds/ice.wav'
    audio.play ();
    console.log("CANCER")
  } else if (zodiac == "LEO") { 
    zodiacTitle.innerHTML = zodiac
    subheading.textContent = "JULY 23RD - AUGUST 22ND"
    zodiacDesc.textContent = "You are very tiny and very angry. Maybe try anger management?"
    zodiacSplashArt.src = "images/characters/scrappy_splash.png"
    characterName.src = "images/characters/names/scrappy.svg"
    characterName.style.left = "3rem"
    characterName.style.width = "20rem"
    tvShow.textContent = "SCOOBY DOO"
    villainType.textContent ="HEGEMONIC FALLEN HERO"
    goal.textContent = "sacrifice uncle Scooby-Doo and steal a pure soul from him in order to transform into Scrappy Rex and become unstoppable."
    crimes.textContent = "slavery, attempted world-domination, human sacrifice, attempted genocide, attempted avunculicide, conspiracy"
    audio.src = 'sounds/scrappy.wav'
    audio.play ();
    console.log("LEO")
  } else if (zodiac == "VIRGO") { 
    zodiacTitle.innerHTML = zodiac
    subheading.textContent = "AUGUST 23RD - SEPTEMBER 22ND"
    zodiacDesc.textContent = "You are annoying and you dont know it! You also probably like chocolate milk, even though you are lactose intolerant."
    zodiacSplashArt.src = "images/characters/cheese_splash.png"
    characterName.src = "images/characters/names/cheese.svg"
    tvShow.textContent = "FOSTER'S HOME FOR IMAGINARY FRIENDS"
    characterName.style.bottom = "12rem"
    characterName.style.left = "18rem"
    characterName.style.width = "20rem"
    villainType.textContent ="ANNOYING PEST"
    goal.textContent = "become Mac’s imaginary friend"
    crimes.textContent = "breaking and entering, operating a vehicle without a license, vandalism, public nuisance"
    audio.src = 'sounds/cheese.wav'
    audio.play ();
    console.log("VIRGO")
  } else if (zodiac == "LIBRA") { 
    zodiacTitle.innerHTML = zodiac
    subheading.textContent = "SEPTEMBER 23RD - OCTOBER 22ND"
    zodiacDesc.textContent = "You don't always get your way, but when you do it doesn't always end well. Well, at least you are quite the romantic!"
    zodiacSplashArt.src = "images/characters/tom_splash.png"
    characterName.src = "images/characters/names/tom.svg"
    characterName.style.bottom = "20rem"
    characterName.style.left = "22rem"
    tvShow.textContent = "TOM & JERRY"
    villainType.textContent ="ON & OFF ABUSER"
    goal.textContent = "catch Jerry by proving that he is a great house cat and mouse catcher"
    crimes.textContent = "vandalism, harassment, property damage, animal cruelty, abuse, trespassing"
    audio.src = 'sounds/tom.wav'
    audio.play ();
    console.log("LIBRA")
  } else if (zodiac == "SCORPIO") { 
    zodiacTitle.innerHTML = zodiac
    subheading.textContent = "OCTOBER 23RD - NOVEMBER 20TH"
    zodiacDesc.textContent = "You are the type of person to laugh when other people are scared."
    zodiacSplashArt.src = "images/characters/katz_splash.png"
    characterName.src = "images/characters/names/katz.svg"
    characterName.style.bottom = ""
    characterName.style.left = "20rem"
    tvShow.textContent = "COURAGE THE COWARDLY DOG"
    villainType.textContent ="PSYCHOPATHIC MASTERMIND"
    goal.textContent = "defeat courage"
    crimes.textContent = "serial murder, torture, kidnapping, unlawful imprisonment, mutilation, impersonation"
    audio.src = 'sounds/katz.wav'
    audio.play ();
    console.log("SCORPIO")
  } else if (zodiac == "SAGGITARIUS") { 
    zodiacContent.style.display = "grid"
    heroContent.style.display = "none"
    zodiacTitle.innerHTML = zodiac
    subheading.textContent = "NOVEMBER 21ST - DECEMBER 20TH"
    zodiacDesc.textContent = "You are cynical and could not care less about what others think (at the expense of everyone else)! "
    zodiacSplashArt.src = "images/characters/daffy_splash.png"
    characterName.src = "images/characters/names/daffy.svg"
    tvShow.textContent = "LOONEY TUNES"
    characterName.style.left = "16rem"
    characterName.style.bottom = "17rem"
    villainType.textContent ="MENACE TO SOCIETY"
    goal.textContent = "get rich quick"
    crimes.textContent = "attempted murder, torture, harassment,theft, vigilantism, fraud, poaching, abuse, kidnapping, extortion, littering, contempt of court, incrimination, jaywalking, bank robbery"
    audio.src = 'sounds/daffy.wav'
    audio.play ();
    console.log("SAGGITARIUS")
  } else if (zodiac == "CAPRICORN") { 
    zodiacContent.style.display = "grid"
    heroContent.style.display = "none"
    zodiacTitle.innerHTML = zodiac
    subheading.textContent = "DECEMBER 21ST - JANUARY 18TH"
    zodiacDesc.textContent = "You really don't play by the rules! You're also a bit of a loner due to your extreme dislike for the human race."
    zodiacSplashArt.src = "images/characters/mojo_splash.png"
    characterName.src = "images/characters/names/mojo_jojo.svg"
    characterName.style.bottom = "14rem"
    characterName.style.left = "22rem"
    characterName.style.width = "15rem"
    tvShow.textContent = "POWERPUFF GIRLS"
    villainType.textContent ="HEGEMONIC SUPERVILLAIN"
    goal.textContent = "put the Powerpuff Girls in an insane state and take over the world"
    crimes.textContent = "terrorism, enslavement, attempted world domination, impersonation, brainwashing, mass murder"
    audio.src = 'sounds/mojo.wav'
    audio.play ();
  console.log("CAPRICORN")
  } else if (zodiac == "AQUARIUS") { 
    zodiacTitle.innerHTML = zodiac
    subheading.textContent = "JANUARY 19TH - FEBRUARY 18TH"
    zodiacDesc.textContent = "You love to shop and antagonize the people around you! Especially when you break a nail..."
    zodiacSplashArt.src = "images/characters/mandy_splash.png"
    characterName.src = "images/characters/names/mandy.svg"
    characterName.style.bottom = "12rem"
    characterName.style.left = "16rem"
    tvShow.textContent = "TOTALLY SPIES"
    villainType.textContent ="EGOTISTICAL RIVAL"
    goal.textContent = "be better than clover"
    crimes.textContent = "attempted murder, attempted world domination, manipulation of media, harassment, abuse"
    audio.src = 'sounds/mandy.wav'
    audio.play ();
    console.log("AQUARIUS")
  } else if (zodiac == "PISCES") {
    zodiacTitle.innerHTML = zodiac
    subheading.textContent = "FEBRUARY 19TH - MARCH 20TH"
    zodiacDesc.textContent = "You are made of 100% pure evil and love to terrorize those around you, unless you are ordering pizza. You are also probably immortal..."
    zodiacSplashArt.src = "images/characters/aku_splash.png"
    characterName.src = "images/characters/names/aku.svg"
    characterName.style.left = "23rem";
    characterName.style.bottom = "12rem";
    tvShow.textContent = "SAMURAI JACK"
    villainType.textContent ="DEMONIC TYRANT"
    goal.textContent = "rule the universe including Earth as the almighty being"
    crimes.textContent = "abuse of power, mass murder, mass destruction, mass corruption, genocide, universal take-over"
    audio.src = 'sounds/aku.wav'
    audio.play ();
  }
})



// character library

allCharacters.forEach(function(characterButtonElement){
  const character = characterButtonElement.getAttribute("character-data")
  console.log(character);
  characterButtonElement.addEventListener('click', function(event){
    
      if (character == "him"){
        modal.style.display = "grid";
        heroContent.style.display = "none"
        zodiacContent.style.display = "grid"
        villainsPage.style.display = "none"
        zodiacTitle.innerHTML = "ARIES"
        subheading.textContent = "MARCH 21ST - APRIL 19TH"
        zodiacDesc.textContent = "Looks like you enjoy psychological torture! You are unapologetically extravagant, and you know it."
        zodiacSplashArt.src = "images/characters/him_splash.png"
        characterName.src = "images/characters/names/him.svg"
        tvShow.textContent = "POWERPUFF GIRLS"
        tvShow.textContent = "POWERPUFF GIRLS"
        villainType.textContent ="EXTRAVAGANT DEMON"
        goal.textContent = "rule the universe including Earth as the almighty being"
        crimes.textContent = "abuse of power, mass murder, mass destruction, mass corruption, genocide, universal take-over"
        audio.src = 'sounds/him.wav'
        audio.play ();

      } else if (character == "daffy"){
        modal.style.display = "grid";
        zodiacContent.style.display = "grid"
        heroContent.style.display = "none"
        villainsPage.style.display = "none"
        zodiacTitle.innerHTML = "SAGGITARIUS"
        subheading.textContent = "NOVEMBER 21ST - DECEMBER 20TH"
        zodiacDesc.textContent = "You are cynical and could not care less about what others think (at the expense of everyone else)! "
        zodiacSplashArt.src = "images/characters/daffy_splash.png"
        characterName.src = "images/characters/names/daffy.svg"
        characterName.style.left = "16rem"
        characterName.style.bottom = "17rem" 
        tvShow.textContent = "LOONEY TUNES"
        villainType.textContent ="MENACE TO SOCIETY"
        goal.textContent = "get rich quick"
        crimes.textContent = "attempted murder, torture, harassment,theft, vigilantism, fraud, poaching, abuse, kidnapping, extortion, littering, contempt of court, incrimination, jaywalking, bank robbery"
        audio.src = 'sounds/daffy.wav'
        audio.play();

      } else if (character == "aku") {
        modal.style.display = "grid";
        zodiacContent.style.display = "grid"
        heroContent.style.display = "none"
        villainsPage.style.display = "none"
        zodiacTitle.innerHTML = "PISCES"
        subheading.textContent = "FEBRUARY 19TH - MARCH 20TH"
        zodiacDesc.textContent = "You are made of 100% pure evil and love to terrorize those around you, unless you are ordering pizza. You are also probably immortal..."
        zodiacSplashArt.src = "images/characters/aku_splash.png"
        characterName.src = "images/characters/names/aku.svg"
        characterName.style.left = "23rem";
        characterName.style.bottom = "12rem";
        tvShow.textContent = "SAMURAI JACK"
        villainType.textContent ="DEMONIC TYRANT"
        goal.textContent = "rule the universe including Earth as the almighty being"
        crimes.textContent = "abuse of power, mass murder, mass destruction, mass corruption, genocide, universal take-over"
        audio.src = 'sounds/aku.wav'
        audio.play ();

      } else if (character == "tom") {
        modal.style.display = "grid";
        zodiacContent.style.display = "grid"
        heroContent.style.display = "none"
        villainsPage.style.display = "none"
        zodiacTitle.innerHTML = "LIBRA"
        subheading.textContent = "SEPTEMBER 23RD - OCTOBER 22ND"
        zodiacDesc.textContent = "You don't always get your way, but when you do it doesn't always end well. Well, at least you are quite the romantic!"
        zodiacSplashArt.src = "images/characters/tom_splash.png"
        characterName.src = "images/characters/names/tom.svg"
        characterName.style.bottom = "20rem"
        characterName.style.left = "22rem"
        tvShow.textContent = "TOM & JERRY"
        villainType.textContent ="ON & OFF ABUSER"
        goal.textContent = "catch Jerry by proving that he is a great house cat and mouse catcher"
        crimes.textContent = "vandalism, harassment, property damage, animal cruelty, abuse, trespassing"
        audio.src = 'sounds/tom.wav'
        audio.play ();

      } else if (character == "chris") {
        modal.style.display = "grid";
        zodiacContent.style.display = "grid"
        heroContent.style.display = "none"
        villainsPage.style.display = "none"
        zodiacTitle.innerHTML = "GEMINI"
        subheading.textContent = "MAY 21ST - JUNE 20TH"
        zodiacDesc.textContent = "You are a narcissist and take pleasure in watching other suffer, especially on reality TV. The more danger involved, the better!"
        zodiacSplashArt.src = "images/characters/chris_splash.png"
        characterName.src = "images/characters/names/chris.svg"
        characterName.style.bottom = "13rem"
        characterName.style.left = "2rem"
        tvShow.textContent = "TOTAL DRAMA ISLAND"
        villainType.textContent ="SADISTIC MASTERMIND"
        goal.textContent = "become the most popular reality show host ever"
        crimes.textContent = "manslaughter, multiple reckless homicides, attempted mass murder, theriocide, snuff farming, fraud"
        audio.src = 'sounds/chris.wav'
        audio.play ();

      } else if (character == "cheese") {
        modal.style.display = "grid";
        zodiacContent.style.display = "grid"
        heroContent.style.display = "none"
        villainsPage.style.display = "none"
        zodiacTitle.innerHTML = "VIRGO"
        subheading.textContent = "AUGUST 23RD - SEPTEMBER 22ND"
        zodiacDesc.textContent = "You are annoying and you dont know it! You also probably like chocolate milk, even though you are lactose intolerant."
        zodiacSplashArt.src = "images/characters/cheese_splash.png"
        characterName.src = "images/characters/names/cheese.svg"
        tvShow.textContent = "FOSTER'S HOME FOR IMAGINARY FRIENDS"
        characterName.style.bottom = "12rem"
        characterName.style.left = "18rem"
        characterName.style.width = "20rem"
        villainType.textContent ="ANNOYING PEST"
        goal.textContent = "become Mac’s imaginary friend"
        crimes.textContent = "breaking and entering, operating a vehicle without a license, vandalism, public nuisance"
        audio.src = 'sounds/cheese.wav'
        audio.play ();

      } else if (character == "ice") {
        modal.style.display = "grid";
        zodiacContent.style.display = "grid"
        heroContent.style.display = "none"
        villainsPage.style.display = "none"
        zodiacTitle.innerHTML = "CANCER"
        subheading.textContent = "JUNE 21ST - JULY 22ND"
        zodiacDesc.textContent = "You are as cold as ice on the exterior, but deep down you are very warm and loving!"
        zodiacSplashArt.src = "images/characters/ice_splash.png"
        characterName.src = "images/characters/names/ice.svg"
        tvShow.textContent = "ADVENTURE TIME"
        villainType.textContent ="TRAGIC MONARCH"
        goal.textContent = "find a princess and marry her"
        crimes.textContent = "unlawful imprisonment, brainwashing, attempted forced marriage, stalking, kidnapping"
        audio.src = 'sounds/ice.wav'
        audio.play ();

      } else if (character == "scrappy") {
        modal.style.display = "grid";
        zodiacContent.style.display = "grid"
        heroContent.style.display = "none"
        villainsPage.style.display = "none"
        zodiacTitle.innerHTML = "LEO"
        subheading.textContent = "JULY 23RD - AUGUST 22ND"
        zodiacDesc.textContent = "You are very tiny and very angry. Maybe try anger management?"
        zodiacSplashArt.src = "images/characters/scrappy_splash.png"
        characterName.src = "images/characters/names/scrappy.svg"
        characterName.style.left = "3rem"
        characterName.style.width = "20rem"
        tvShow.textContent = "SCOOBY DOO"
        villainType.textContent ="HEGEMONIC FALLEN HERO"
        goal.textContent = "sacrifice uncle Scooby-Doo and steal a pure soul from him in order to transform into Scrappy Rex and become unstoppable."
        crimes.textContent = "slavery, attempted world-domination, human sacrifice, attempted genocide, attempted avunculicide, conspiracy"
        audio.src = 'sounds/scrappy.wav'
        audio.play ();

      } else if (character == "mojo") {
        modal.style.display = "grid";
        zodiacContent.style.display = "grid"
        heroContent.style.display = "none"
        villainsPage.style.display = "none"
        zodiacContent.style.display = "grid"
        heroContent.style.display = "none"
        zodiacTitle.innerHTML = "CAPRICORN"
        subheading.textContent = "DECEMBER 21ST - JANUARY 18TH"
        zodiacDesc.textContent = "You really don't play by the rules! You're also a bit of a loner due to your extreme dislike for the human race."
        zodiacSplashArt.src = "images/characters/mojo_splash.png"
        characterName.src = "images/characters/names/mojo_jojo.svg"
        characterName.style.bottom = "14rem"
        characterName.style.left = "22rem"
        characterName.style.width = "15rem"
        tvShow.textContent = "POWERPUFF GIRLS"
        villainType.textContent ="HEGEMONIC SUPERVILLAIN"
        goal.textContent = "put the Powerpuff Girls in an insane state and take over the world"
        crimes.textContent = "terrorism, enslavement, attempted world domination, impersonation, brainwashing, mass murder"
        audio.src = 'sounds/mojo.wav'
        audio.play ();

      } else if (character == "father") {
        modal.style.display = "grid";
        zodiacContent.style.display = "grid"
        heroContent.style.display = "none"
        villainsPage.style.display = "none"
        zodiacTitle.innerHTML = "TAURUS"
        subheading.textContent = "APRIL 20TH - MAY 20TH"
        zodiacDesc.textContent = "You might be abusive and hate all little children. Don't worry, they hate you too!"
        zodiacSplashArt.src = "images/characters/father_splash.png"
        characterName.src = "images/characters/names/father.svg"
        characterName.style.width = "20rem"
        characterName.style.left = "2rem"
        tvShow.textContent = "CODENAME: KIDS NEXT DOOR"
        villainType.textContent ="TYRANNICAL PARENT"
        goal.textContent = "ruin the lives of children"
        crimes.textContent = "brainwashing, abuse, terrorism, attempted cannibalism"
        audio.src = 'sounds/father.wav'
        audio.play ();

      } else if (character == "katz") {
        modal.style.display = "grid";
        zodiacContent.style.display = "grid"
        heroContent.style.display = "none"
        villainsPage.style.display = "none"
        zodiacTitle.innerHTML = "SCORPIO"
        subheading.textContent = "OCTOBER 23RD - NOVEMBER 20TH"
        zodiacDesc.textContent = "You are the type of person to laugh when other people are scared."
        zodiacSplashArt.src = "images/characters/katz_splash.png"
        characterName.src = "images/characters/names/katz.svg"
        characterName.style.bottom = ""
        characterName.style.left = "20rem"
        tvShow.textContent = "COURAGE THE COWARDLY DOG"
        villainType.textContent ="PSYCHOPATHIC MASTERMIND"
        goal.textContent = "defeat courage"
        crimes.textContent = "serial murder, torture, kidnapping, unlawful imprisonment, mutilation, impersonation"
        audio.src = 'sounds/katz.wav'
        audio.play ();

      } else if (character == "mandy") {
        modal.style.display = "grid";
        zodiacContent.style.display = "grid"
        heroContent.style.display = "none"
        villainsPage.style.display = "none"
        zodiacTitle.innerHTML = "AQUARIUS"
        subheading.textContent = "JANUARY 19TH - FEBRUARY 18TH"
        zodiacDesc.textContent = "You love to shop and antagonize the people around you! Especially when you break a nail..."
        zodiacSplashArt.src = "images/characters/mandy_splash.png"
        characterName.src = "images/characters/names/mandy.svg"
        characterName.style.bottom = "12rem"
        characterName.style.left = "16rem"
        tvShow.textContent = "TOTALLY SPIES"
        villainType.textContent ="EGOTISTICAL RIVAL"
        goal.textContent = "be better than clover"
        crimes.textContent = "attempted murder, attempted world domination, manipulation of media, harassment, abuse"
        audio.src = 'sounds/mandy.wav'
        audio.play ();
      } 
  }) 
})

