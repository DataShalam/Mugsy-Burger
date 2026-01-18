"use strict";

const caloriesBtn = document.querySelector("#calories-btn");
const ingredientsBtn = document.querySelector("#ingredients-btn");
const sectionCalories = document.querySelector(".section--calories");
const sectionIngredients = document.querySelector(".section--ingredients");
const displayNone = "display--none";
const menuButtonActive = "menu--btn__active";

caloriesBtn.addEventListener("click", function (e) {
  e.preventDefault();

  if (sectionCalories.classList.contains(displayNone)) {
    sectionCalories.classList.remove(displayNone);
    sectionIngredients.classList.add(displayNone);

    caloriesBtn.classList.add(menuButtonActive);
    ingredientsBtn.classList.remove(menuButtonActive);
  }
});

ingredientsBtn.addEventListener("click", function (e) {
  e.preventDefault();

  if (sectionIngredients.classList.contains(displayNone)) {
    sectionIngredients.classList.remove(displayNone);
    sectionCalories.classList.add(displayNone);

    ingredientsBtn.classList.add(menuButtonActive);
    caloriesBtn.classList.remove(menuButtonActive);
  }
});
