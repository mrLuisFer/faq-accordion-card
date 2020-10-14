const invite_container = document.querySelector("#invite-container");
const invite_toShow = document.querySelector("#invite-toShow");
const invite_title = document.querySelector("#invite-title");
const inviteIconDown = document.querySelector("#invite-icon-down");

import handleToShow from "./toShowFunction.js";

handleToShow(invite_container, invite_toShow, invite_title, inviteIconDown);
