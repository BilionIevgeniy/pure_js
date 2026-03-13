import { postData } from "../api";
import checkNumInputs from "./checkNumInputs";

const forms = () => {
  const allForm = document.querySelectorAll("form");

  checkNumInputs('input[name="user_phone"]');
  for (const form of allForm) {
    if (form.getAttribute("data-calc")) {
      return;
    }

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      let res = await postData("assets/server.php", formData, form);
    });
  }
};

export default forms;
