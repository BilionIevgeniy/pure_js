const message = {
  loading: "Loading...,",
  success: "Thank you! We will contact you soon",
  failure: "Something went wrong...",
};
let statusMessage;
export const postData = async (url, data, form, cb) => {
  let statusMessage = document.createElement("div");
  statusMessage.classList.add("status");
  statusMessage.textContent = message.loading;
  form.appendChild(statusMessage);

  let res;
  try {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    statusMessage.textContent = message.success;
    res = {
      status: 200,
      text: () => {
        Promise.resolve(data);
      },
    };
  } catch (error) {
    statusMessage.textContent = message.failure;
  } finally {
    setTimeout(() => {
      statusMessage.remove();
      form.reset();
      cb();
    }, 2000);
  }

  return await res.text();
};
