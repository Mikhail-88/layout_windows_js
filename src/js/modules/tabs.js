const tabs =(headerSelector, tabSelector, contentSelector, activeClass) => {
  const header = document.querySelector(headerSelector),
    tabs = document.querySelectorAll(tabSelector),
    content = document.querySelectorAll(contentSelector);

  function hideTab() {
    content.forEach(item => {
      item.style.display = 'none';
    });

    tabs.forEach(item => {
      item.classList.remove(activeClass);
    });
  }

  function showTab(elem = 0) {
    content[elem].style.display = 'block';
    tabs[elem].classList.add(activeClass);
  }

  hideTab();
  showTab();

  header.addEventListener('click', (e) => {
    const target = e.target;

    if (target && (target.classList.contains(tabSelector.replace(/\./, '')) || 
    target.parentNode.classList.contains(tabSelector.replace(/\./, '')))) {
      tabs.forEach((tab, index) => {
        if (target === tab || target.parentNode === tab) {
          hideTab();
          showTab(index);
        }
      });
    }
  });
};

export default tabs;