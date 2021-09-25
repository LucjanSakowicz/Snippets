const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const articles = document.querySelectorAll('.content');

about.addEventListener('click', function (e) {
    const id = e.target.dataset.id;
    if (id) {
        //remove active from other buttons
        btns.forEach(btn =>clearNonActiveElements(btn, e));
        articles.forEach(article =>clearNonActiveElements(article, e));
        const element = document.getElementById(id);
        element.classList.add("active")
    }
});

const clearNonActiveElements = (item, e) => {
    item.classList.remove('active');
    e.target.classList.add('active')
};