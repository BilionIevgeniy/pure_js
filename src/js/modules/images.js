export function imagesHandler() {
  const workSection = document.querySelector(".works"),
    bigImage = document.createElement("img");

  const imgPopup = createImgPopup();
  imgPopup.appendChild(bigImage);
  workSection.appendChild(imgPopup);

  addWorkSectionListener(workSection, imgPopup, bigImage);
}

function addWorkSectionListener(workSection, imgPopup, bigImage) {
  workSection.addEventListener("click", (e) => {
    e.preventDefault();
    let target = e.target;
    const previewImg = target.closest(".preview");
    if (target == previewImg) {
      imgPopup.style.display = "flex";
      const path = previewImg.parentNode.getAttribute("href");
      bigImage.setAttribute("src", path);
    } else if (target != bigImage) {
      imgPopup.style.display = "none";
    }
  });
}

function createImgPopup() {
  const imgPopup = document.createElement("div");
  imgPopup.classList.add("popup");
  imgPopup.style.justifyContent = "center";
  imgPopup.style.alignItems = "center";
  imgPopup.style.display = "none";
  return imgPopup;
}
