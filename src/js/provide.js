import handleToShow from "./toShowFunction.js";

export const provide = () => {
  const provide_container = document.querySelector("#provide-container");
  const provide_toShow = document.querySelector("#provide-toShow");
  const provide_title = document.querySelector("#provide-title");
  const provideIconDown = document.querySelector("#provide-icon-down");

  handleToShow(
    provide_container,
    provide_toShow,
    provide_title,
    provideIconDown
  );
};
