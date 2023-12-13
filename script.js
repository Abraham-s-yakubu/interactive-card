"use strict";
const form = document.getElementById("form");
const form_container = document.querySelector(".form");
const success_message_container = document.querySelector(".success-message");
const input_control = document.querySelector(".input-control");
const card_name = document.getElementById("cardholder-name");
const card_number = document.getElementById("card-number");
const month = document.getElementById("date-month");
const year = document.getElementById("date-year");
const cvc = document.getElementById("cvc-number");
const error_name = document.querySelector(".error-name");
const error_number = document.querySelector(".error-number");
const error_date = document.querySelector(".error-date");
const error_cvc = document.querySelector(".error-cvc");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  show_success_message();
});
// show error on the page
const show_error = function (error_element, input_element, message) {
  error_element.textContent = message;
  input_element.style.borderColor = "hsl(0, 100%, 66%)";
};
// remove error on the page
const remove_error = function (error_element, input_element) {
  error_element.textContent = "";
  input_element.style.borderColor = "hsl(279, 6%, 55%)";
};
// display success message
const show_success_message = function () {
  form_container.style.display = "none";
  success_message_container.style.display = "flex";
};
const validate_cvc = function (e) {
  if (e.target.value.trim() === "") {
    show_error(error_cvc, cvc, "Can't be blank");
    return;
  } else if (isNaN(e.target.value.trim())) {
    show_error(error_cvc, cvc, "Wrong format. numbers only");
    return;
  } else {
    remove_error(error_cvc, cvc);
  }
};
const validate_name = function (e) {
  if (e.target.value.trim() === "") {
    show_error(error_name, card_name, "Can't be blank");
    return;
  } else if (!isNaN(e.target.value.trim())) {
    show_error(error_name, card_name, "Wrong format. input a vaild name");
    return;
  } else {
    remove_error(error_name, card_name);
  }
};
const validate_number = function (e) {
  if (e.target.value.trim().replaceAll(" ", "") === "") {
    show_error(error_number, card_number, "Can't be blank");
    return;
  } else if (isNaN(e.target.value.trim().replaceAll(" ", ""))) {
    show_error(error_number, card_number, "Wrong format. numbers only");
    return;
  } else {
    remove_error(error_number, card_number);
  }
};
const validate_month = function (e) {
  if (e.target.value === "") {
    show_error(error_date, month, "Can't be blank");
    return;
  } else if (isNaN(e.target.value)) {
    show_error(error_date, month, "Wrong format. numbers only");
    return;
  } else {
    remove_error(error_date, month);
  }
};
const validate_year = function (e) {
  // e.target.value
  if (e.target.value === "") {
    show_error(error_date, year, "Can't be blank");
    return;
  } else if (isNaN(e.target.value)) {
    show_error(error_date, year, "Wrong format. numbers only");
    return;
  } else {
    remove_error(error_date, year);
  }
};

cvc.addEventListener("change", validate_cvc);
card_name.addEventListener("change", validate_name);
card_number.addEventListener("change", validate_number);
month.addEventListener("change", validate_month);
year.addEventListener("change", validate_year);
