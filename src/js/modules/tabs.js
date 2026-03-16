export function tabs(
  headerSelector,
  tabSelector,
  contentSelector,
  activeClass,
  display = "block",
) {
  const header = document.querySelector(headerSelector),
    tab = document.querySelectorAll(tabSelector),
    content = document.querySelectorAll(contentSelector),
    initialTabData = { content, tab, activeClass, display };

  hideTabContent(initialTabData);
  showTabContent(initialTabData);

  header.addEventListener("click", (e) => {
    const target = e.target;
    const activeTab = target.closest(tabSelector);
    if (activeTab) {
      tab.forEach((item, i) => {
        if (activeTab == item || target.parentNode == item) {
          hideTabContent(initialTabData);
          const { index } = item.dataset;
          showTabContent({ ...initialTabData, index });
        }
      });
    }
  });
}

function hideTabContent({ content, tab, activeClass }) {
  content.forEach((item) => {
    item.style.display = "none";
  });

  tab.forEach((item) => {
    item.classList.remove(activeClass);
  });
}

function showTabContent({ content, tab, index = 0, display, activeClass }) {
  content[index].style.display = display;
  tab[index].classList.add(activeClass);
}

export default tabs;
