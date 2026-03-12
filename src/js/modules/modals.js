let wasOpend = false;

export const modals = () => {
  bindModal(
    ".popup_engineer_btn",
    ".popup_engineer",
    ".popup_engineer .popup_close",
  );
  bindModal(".phone_link", ".popup", ".popup .popup_close");
  bindModal(".popup_calc_btn", ".popup_calc", ".popup_calc_close");
  // showModalByTime(".popup", 60000);
};

function bindModal(
  triggerSelector,
  modalSelector,
  closeSelector,
  closeClickOverlay = true,
) {
  const modal = document.querySelector(modalSelector);
  const triggers = document.querySelectorAll(triggerSelector);
  const close = document.querySelector(closeSelector);

  addEventListeners(modal, triggers, close, closeClickOverlay);
}

function getScrollbarWidth() {
  const outer = document.createElement("div");
  outer.style.visibility = "hidden";
  outer.style.overflow = "scroll";
  document.body.appendChild(outer);
  const inner = document.createElement("div");
  outer.appendChild(inner);
  const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;

  outer.remove();
  return scrollbarWidth;
}

function showModalByTime(selector, time) {
  setTimeout(function () {
    if (!wasOpend) {
      document.querySelector(selector).style.display = "block";
      document.body.style.overflow = "hidden";
      const scrollWidth = getScrollbarWidth();
      document.body.style.paddingRight = `${scrollWidth}px`;
      wasOpend = true;
    }
  }, time);

  setTimeout(function () {
    document.querySelector(selector).style.display = "block";
    document.body.style.overflow = "hidden";
    const scrollWidth = getScrollbarWidth();
    document.body.style.paddingRight = `${scrollWidth}px`;
  }, time);
}

function addEventListeners(modal, triggers, close, closeClickOverlay) {
  const windows = document.querySelectorAll("[data-modal]");
  triggers.forEach((trigger) => {
    trigger.addEventListener("click", (e) => {
      wasOpend = true;
      if (e.target) {
        e.preventDefault();
      }
      windows.forEach((el) => (el.style.display = "none"));
      const scrollWidth = getScrollbarWidth();
      modal.style.display = "block";
      document.body.style.paddingRight = `${scrollWidth}px`;
      // document.body.style.overflow = "hidden";
      document.body.classList.add("modal-open");
    });
  });
  close.addEventListener("click", (e) => {
    modal.style.display = "none";
    document.body.style.paddingRight = "0px";
    // document.body.style.overflow = "auto";
    document.body.classList.remove("modal-open");
  });
  modal.addEventListener("click", (e) => {
    if (e.target == modal && closeClickOverlay) {
      modal.style.display = "none";
      document.body.style.paddingRight = "0px";
      // document.body.style.overflow = "auto";
      document.body.classList.remove("modal-open");
    }
  });
}
