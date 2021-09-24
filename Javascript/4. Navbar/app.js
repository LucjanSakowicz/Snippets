// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function () {
    // if (links.classList.contains('show-links')) {
    //     links.classList.remove('show-links');
    // }else{
    //     links.classList.add("show-links");
    // }
    // does the same as if-else above - adds class to classlist if not present, added class behaviour is described in style.css
    links.classList.toggle("show-links");
});
