import handleToShow from "./toShowFunction.js";

export const cancel = () => {
  const cancel_container = document.querySelector("#cancel-container");
  const cancel_toShow = document.querySelector("#cancel-toShow");
  const cancel_title = document.querySelector("#cancel-title");
  const cancelIconDown = document.querySelector("#cancel-icon-down");

  handleToShow(cancel_container, cancel_toShow, cancel_title, cancelIconDown);
};
