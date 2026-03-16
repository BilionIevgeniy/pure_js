export function checkNumInputs(selector) {
  const numInputs = document.querySelectorAll(selector);

  numInputs.forEach((item) => {
    item.addEventListener("input", () => {
      item.value = item.value.replace(/\D/, "");
    });
  });
}

export function addZeroToNum(num) {
  if (num <= 9) {
    return "0" + num;
  } else {
    return num;
  }
}
