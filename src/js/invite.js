import handleToShow from "./toShowFunction.js";

export const invite = () => {
  const invite_container = document.querySelector("#invite-container");
  const invite_toShow = document.querySelector("#invite-toShow");
  const invite_title = document.querySelector("#invite-title");
  const inviteIconDown = document.querySelector("#invite-icon-down");

  handleToShow(invite_container, invite_toShow, invite_title, inviteIconDown);
};
