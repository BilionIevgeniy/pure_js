import { postData } from "../api";

const changeModalState = () => {
  const calcForms = document.querySelectorAll("[data-calc]");
  const startFormsWrapper = document.querySelector(".popup_calc");
  const middleFormsWrapper = document.querySelector(".popup_calc_profile");
  const endFormsWrapper = document.querySelector(".popup_calc_end");
  let modalState = {};
  for (const form of calcForms) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
      const data = Object.fromEntries(formData.entries());

      const { calc } = form.dataset;
      modalState = { ...modalState, ...data };
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
          console.log(res);
          break;
      }
    });
  }
};

export default changeModalState;
