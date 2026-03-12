import checkNumInputs from "./checkNumInputs";
import { postData } from "./forms";

const changeModalState = () => {
  const calcForms = document.querySelectorAll("[data-calc]");
  const startForms = document.querySelector(".popup_calc");
  const middleForms = document.querySelector(".popup_calc_profile");
  const endForms = document.querySelector(".popup_calc_end");
  let modalState = {};
  for (const form of calcForms) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
      const data = Object.fromEntries(formData.entries());

      const { calc } = form.dataset;
      form.style.display = "none";
      modalState = { ...modalState, ...data };
      switch (calc) {
        case "start":
          startForms.style.display = "none";
          middleForms.style.display = "block";
          break;
        case "middle":
          middleForms.style.display = "none";
          endForms.style.display = "block";
          break;
        default:
          let res = await postData("assets/server.php", modalState, form);
          console.log(res);
          endForms.style.display = "none";
          break;
      }
      form.reset();
    });
  }
};

export default changeModalState;
