//set initial count
let count = 0;

// # ->query by id
const value = document.querySelector('#value');
// . -> query by class
const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    styles.contains("decrease") ? count-- : styles.contains("increase") ? count++ : count = 0;
    count < 0 ? value.style.color = 'red' : count > 0 ? value.style.color = 'green' : value.style.color = 'black';
    // change text of value field (counter value)
    value.textContent = count;
}));


