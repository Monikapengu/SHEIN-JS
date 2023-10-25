const tabs = document.querySelectorAll('[data-target]'),
tabContents = document.querySelectorAll('[content]');

tabs.forEach((tab) => {

    tab.addEventListener('click', () => {
        const target = document.querySelecter(tab.dataset.target);
        tabContents.forEach((tabContent) => {
            tabContent.classlist.remove('active-tab');
        });

        target.classList.add('active-tab');

        tabs.forEach((tab) => {
            tab.classList.remove('active-tab');
        });

       tab.classList.add('active-tab');
    });
});