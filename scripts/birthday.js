const submitButton = document.querySelector('.js-submit-button');

submitButton.addEventListener('click', function (event) {
    event.preventDefault();
    // alert('error 404: you arent human');
    const dateInput = document.querySelector('.js-date-input');
    let birthDate = new Date(dateInput.value);

    const month = birthDate.getMonth() + 1;
    const day = birthDate.getDate() + 1;
    const year = birthDate.getFullYear();
    console.log(month, day, year);

    let season = "";
    if ((day >= 22 && month == 3) || (month > 3 && month < 6 ) || (day <= 21 && month == 6)) {
        season = "spring";
    } else if ((day >= 22 && month == 6) || (month > 6 && month < 9) || (day <= 21 && month == 9)){ 
        season = "summer";
    } else if ((day >= 22 && month == 9) || (month > 9 && month < 12) || (day <= 21 && month == 12)){ 
        season = "fall";
    } else if ((day >= 22 && month == 12) || (month > 1 && month < 3) || (day <= 21 && month == 3)){ 
        season = "winter";
    }

    console.log(season);
    const janamdin = (month + "/" + day + "/" + year);
    const birthdayArea = document.querySelector('.js-user-birthday');
    const seasonAppear = document.querySelector('.js-content-wrapper');
    const contentArea = document.querySelector('.js-content');
    contentArea.innerHTML = season;
    birthdayArea.innerHTML = janamdin;

    seasonAppear.style.display='block';
    
    // Spring range is from March 22 - June 21
    // Summer range is June 22 - September 21
    // Fall range is September 22 - December 21
    // Winter range is December 22 - March 21

    // take date 
    // check what season date is in 
    // output results
})









// if month = 3 & day => 22 then if month = 6 & day <= 21

