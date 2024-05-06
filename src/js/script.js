"use strict";

// Connecting vendors (plugins)
import "./_vendor";

// Functions
import { mobileCheck } from "./functions/mobile-check";
import { burger } from "./functions/burger";
import { accordion } from "./functions/accordion";
// Components
// import { formValidation } from "./components/formValidation";

window.addEventListener("DOMContentLoaded", () => {
  mobileCheck();
  accordion(".ask__body", "ask__question", ".ask__wrap", "ask__wrap--active");
  burger();
  // formValidation();
});
