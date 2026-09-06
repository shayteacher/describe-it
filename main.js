document.addEventListener('DOMContentLoaded', function () {

  const tabs = document.querySelectorAll('.tab');
  const pages = document.querySelectorAll('.page');

  function switchTo(id) {
    tabs.forEach(t => t.classList.toggle('active', t.dataset.tab === id));
    pages.forEach(p => p.classList.toggle('active', p.id === id));
    // scroll each page back to top on switch
    const target = document.getElementById(id);
    if (target) target.scrollTop = 0;
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', function () {
      switchTo(this.dataset.tab);
    });
  });

  // Keyboard: left/right arrows move between tabs
  document.addEventListener('keydown', function (e) {
    const activeTab = document.querySelector('.tab.active');
    const tabList = Array.from(tabs);
    const idx = tabList.indexOf(activeTab);

    if (e.key === 'ArrowRight' && idx < tabList.length - 1) {
      switchTo(tabList[idx + 1].dataset.tab);
    }
    if (e.key === 'ArrowLeft' && idx > 0) {
      switchTo(tabList[idx - 1].dataset.tab);
    }
  });

  // Start on first tab
  if (tabs.length > 0) switchTo(tabs[0].dataset.tab);
});
