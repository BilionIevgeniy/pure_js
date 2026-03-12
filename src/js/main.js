import "./slider";
import tabs from "./modules/tabs";
import forms from "./modules/forms";
import changeModalState from "./modules/changeModalState";
import timer from "./modules/timer";
import images from "./modules/images";
import { slider } from "./slider";
import { modals } from "./modules/modals";

window.addEventListener("DOMContentLoaded", () => {
  "use strict";
  slider();

  let deadline = "2026-03-06";

  changeModalState();
  modals();
  tabs(
    ".glazing_slider",
    ".glazing_slider .slick-slide",
    ".glazing_content",
    "active",
  );
  tabs(
    ".decoration_slider",
    ".decoration_slider .slick-slide",
    ".decoration_content > div > div",
    "after_click",
  );
  tabs(
    ".balcon_icons",
    ".balcon_icons_img",
    ".big_img > img",
    "do_image_more",
    "inline-block",
  );
  forms();
  // timer('.container1', deadline);
  // images();
});
