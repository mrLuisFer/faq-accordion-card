const iconDown = document.querySelector("#invite-icon-down");
const invite_toShow = document.querySelector("#invite-toShow");
const invite_title = document.querySelector("#invite-title");
const invite_container = document.querySelector("#invite-container");

invite_container.addEventListener("click", () => {
  console.log("works for the moment");

  invite_toShow.classList.toggle("hidde");
  if (invite_toShow.classList.contains("hidde")) {
    invite_title.style.fontWeight = "400";
    iconDown.style.transform = "rotate(360deg)";
  } else {
    invite_title.style.fontWeight = "700";
    iconDown.style.transform = "rotate(180deg)";
    invite_toShow.classList.add(
      "animate__animated",
      "animate__slideInDown",
      "animate__faster"
    );
  }
});
