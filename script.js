

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

  let today = new Date();
  let birthDate = new Date(userYear, userMonth - 1, userDay);

  console.log(birthDate);

}