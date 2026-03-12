import checkNumInputs from "./checkNumInputs";
const message = {
  loading: "Loading...,",
  success: "Thank you! We will contact you soon",
  failure: "Something went wrong...",
};
let statusMessage;
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

export const postData = async (url, data, form) => {
  let statusMessage = document.createElement("div");
  statusMessage.classList.add("status");
  form.appendChild(statusMessage);
  console.log("posting");
  statusMessage.textContent = message.loading;
  let res;
  try {
    res = data;
    // res = await fetch(url, {
    //   method: "POST",
    //   body: data,
    // });
    // res.text();
    statusMessage.textContent = message.success;
  } catch (error) {
    statusMessage.textContent = message.failure;
  } finally {
    form.reset();
    setTimeout(() => {
      statusMessage.remove();
    }, 5000);
  }

  return res;
};

export default forms;
