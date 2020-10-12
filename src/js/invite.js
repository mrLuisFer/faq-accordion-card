const iconDown = document.querySelector("#invite-icon-down");
const invite_toShow = document.querySelector("#invite-toShow");

iconDown.addEventListener("click", () => {
  console.log("works for the moment");

  invite_toShow.classList.toggle("hidde");
});
