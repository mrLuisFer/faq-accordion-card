import handleToShow from "./toShowFunction.js";

export const maximum = () => {
  const maximum_container = document.querySelector("#maximum-container");
  const maximum_toShow = document.querySelector("#maximum-toShow");
  const maximum_title = document.querySelector("#maximum-title");
  const maximumIconDown = document.querySelector("#maximum-icon-down");

  handleToShow(
    maximum_container,
    maximum_toShow,
    maximum_title,
    maximumIconDown
  );
};
