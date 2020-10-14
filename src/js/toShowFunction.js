export default function handleToShow(container, toShow, elemTitle, iconDown) {
  container.addEventListener("click", () => {
    toShow.classList.toggle("hidde");

    if (toShow.classList.contains("hidde")) {
      elemTitle.style.fontWeight = "400";
      iconDown.style.transform = "rotate(360deg)";
    } else {
      elemTitle.style.fontWeight = "700";
      iconDown.style.transform = "rotate(180deg)";
      toShow.classList.add(
        "animate__animated",
        "animate__slideInDown",
        "animate__faster"
      );

      window.addEventListener("click", (event) => {
        console.log(event.target);

        if (event.target != container) {
          toShow.classList.add("hidde");
          elemTitle.style.fontWeight = "400";
          iconDown.style.transform = "rotate(360deg)";
        }
      });
    }
  });
}
