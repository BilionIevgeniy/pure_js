import { postData } from "../api";
let modalState = {};

export const handleCalcModals = () => {
  const calcForms = document.querySelectorAll("[data-calc]");
  const formWrappers = getFormWrappers();

  for (const form of calcForms) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
      const data = Object.fromEntries(formData.entries());
      modalState = { ...modalState, ...data };
      await formAction(form, formWrappers);
    });
  }
};

function getFormWrappers() {
  return {
    startFormsWrapper: document.querySelector(".popup_calc"),
    middleFormsWrapper: document.querySelector(".popup_calc_profile"),
    endFormsWrapper: document.querySelector(".popup_calc_end"),
  };
}

async function formAction(form, formWrappers) {
  const { calc } = form.dataset;
  const { startFormsWrapper, middleFormsWrapper, endFormsWrapper } =
    formWrappers;
  switch (calc) {
    case "start":
      form.reset();
      startFormsWrapper.style.display = "none";
      middleFormsWrapper.style.display = "block";
      break;
    case "middle":
      form.reset();
      middleFormsWrapper.style.display = "none";
      endFormsWrapper.style.display = "block";
      break;
    case "end":
      let res = await postData(
        "assets/server.php",
        modalState,
        form,
        () => (endFormsWrapper.style.display = "none"),
      );
      console.log("res", res);
      break;
  }
}
