

let calculateDate = document.querySelector('.arrow');
calculateDate.addEventListener('click', validateDate);



function validateDate() {
  //Error Variables

  let dayError = document.querySelector('.day-error');
  let monthError = document.querySelector('.month-error');
  let yearError = document.querySelector('.year-error');

  let day = document.querySelector('.day');
  let month = document.querySelector('.month');
  let year = document.querySelector('.year');


  // Variables to User inputs

  let userYear = (document.querySelector('#year').value);
  let userDay = (document.querySelector('#day').value);
  let userMonth = (document.querySelector('#month').value);



  // Variables to show user year

  let resultDay = document.querySelector('.result-day');
  let resultMonth = document.querySelector('.result-month');
  let resultYear = document.querySelector('.result-year');

  // Variables to calculate the current date
  let today = new Date();

  let currentYear = today.getFullYear();
  let currentMonth = today.getMonth() + 1;
  let currentDay = today.getDate();


  if (userYear > currentYear) {
    yearError.classList.toggle('active');
    year.classList.toggle('label');
    return false;

  } else if (userDay > 28 && userMonth == 2) {
    monthError.classList.toggle('active');
    month.classList.toggle('label');

    return false;

  } else if (userDay > 31) {
    dayError.classList.toggle('active');
    day.classList.toggle('label');

    return false;

  } else if (userMonth > 12) {
    monthError.classList.toggle('active');
    month.classList.toggle('label');

    return false;

  }


  // varibales to calculate birth date

  let birthDate = new Date(userYear, userMonth, userDay);

  let birthYear = birthDate.getFullYear();
  let birthMonth = birthDate.getMonth() + 1;
  let birthDay = birthDate.getDate();

  // Calculate the age

  let ageYear = currentYear - birthYear;
  let ageMonth;
  let ageDay;



  if (currentMonth >= birthMonth) {
    (ageMonth = currentMonth - birthMonth);
  } else {
    ageYear--;
    ageMonth = 12 + currentMonth - birthMonth;
  }

  if (currentDay >= birthDay) {
    ageDay = currentDay - birthDay;
  } else {
    ageMonth--;
    ageDay = getDays(birthYear, birthMonth) + currentDay - birthDay;
  }

  if (birthMonth === 2 && birthDay > 28) {
    dayError.classList.toggle('active');
    return false;
  } else {
    resultDay.innerHTML = ageDay;
    resultMonth.innerHTML = ageMonth;
    resultYear.innerHTML = ageYear;
  }


}

function getDays(year, month) {
  return new Date(year, month, 0).getDate();
}