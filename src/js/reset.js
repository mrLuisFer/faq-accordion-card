import handleToShow from "./toShowFunction.js";

export const reset = () => {
  const reset_container = document.querySelector("#reset-container");
  const reset_toShow = document.querySelector("#reset-toShow");
  const reset_title = document.querySelector("#reset-title");
  const resetIconDown = document.querySelector("#reset-icon-down");

  handleToShow(reset_container, reset_toShow, reset_title, resetIconDown);
};
