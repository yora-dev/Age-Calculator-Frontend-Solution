

let calculateDate = document.querySelector('.arrow');
calculateDate.addEventListener('click', validateDate)



function validateDate() {
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

  // varibales to calculate birth date

  let birthDate = new Date(userYear, userMonth - 1, userDay);

  let birthYear = birthDate.getFullYear();
  let birthMonth = birthDate.getMonth() + 1;
  let birthDay = birthDate.getDate();

  // Calculate the age

  let ageYear = currentYear - birthYear;
  let ageMonth;
  let ageDay;
  

  if(currentMonth >= birthMonth) {
    (ageMonth = currentMonth - birthMonth);
  } else {
    ageYear--;
    ageMonth = 12 + currentMonth - birthMonth;
  }

  if(currentDay >= birthDay) {
    ageDay = currentDay - birthDay;
  } else {
    ageMonth--;
    ageDay = 30 + currentDay - birthDay;
  }



  resultDay.innerHTML = ageDay;
  resultMonth.innerHTML = ageMonth;
  resultYear.innerHTML = ageYear;
}