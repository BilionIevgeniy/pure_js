import "./slider";
import { tabs } from "./modules/tabs";
import { handleForms } from "./modules/forms";
import { handleCalcModals } from "./modules/handleCalcModals";
import { timer } from "./modules/timer";
import { imagesHandler } from "./modules/images";
import { slider } from "./slider";
import { modals } from "./modules/modals";

window.addEventListener("DOMContentLoaded", () => {
  "use strict";
  slider();

  let deadline = "2026-12-18"; //YYYY-MM-DD

  handleCalcModals();
  modals();
  tabs(
    ".glazing_slider",
    ".glazing_slider .glazing_block",
    ".glazing_content",
    "active",
  );
  tabs(
    ".decoration_slider",
    ".decoration_slider .decoration_item",
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
  handleForms();
  timer(".container1", deadline);
  imagesHandler();
});
