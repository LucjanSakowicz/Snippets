// ****** SELECT ITEMS **********
const alert = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");
// edit option
let editElement;
let editFlag = false;
let editID = "";
// ****** EVENT LISTENERS **********
//submit form
form.addEventListener("submit", addItem);

const deleteBtn = document.querySelector('.delete-btn');
console.log(deleteBtn);

// ****** FUNCTIONS **********
function addItem(e) {
    e.preventDefault();
    const value = grocery.value;
    const id = new Date().getTime().toString();
    if (value && !editFlag) {
        const element = document.createElement("article");
        //add class
        element.classList.add("grocery-item");
        // add id
        const attr = document.createAttribute("data-id");
        attr.value = id;
        element.setAttributeNode(attr);
        element.innerHtml = `<p class="title">${value}</p>
                        <div class="btn-container">
                            <button type="button" class="edit-btn">
                                <i class="fas fa-edit"></i>
                            </button>
                            <button type="button" class="delete-btn">
                                <i class="fas fa-thrash"></i>
                            </button>
                        </div>`;
        /*those functions are required for gettin the buttons AFTER they were created in line above*/
        const deleteBtn = element.querySelector('.delete-btn');
        const editBtn = element.querySelector('.edit-btn');
        deleteBtn.addEventListener('click', deleteItem);
        editBtn.addEventListener('click', editItem);
        //append child
        list.appendChild(element);
        displayAlert("item added to the list", "success");
        // show container
        container.classList.add("show-container");
        //add to local storage
        addToLocalStorage(id, value);
        //set back to default
        setBackToDefault();
    } else if (value && editFlag) {
        editElement.innerHTML = value;
        displayAlert('value changed','success');
        //edit local storage
        editLocalStorage(editID, value);
        setBackToDefault();
    } else {
        displayAlert("please enter value", "danger")
    }
}

//display alert
function displayAlert(text, action) {
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);
    //remove alert
    setTimeout(function () {
        alert.textContent = "";
        alert.classList.remove(`alert-${action}`);
    }, 1000)
}

//clear items
function clearItems() {
    const items = document.querySelectorAll(".grocery-item");
    if (items.length > 0) {
        items.forEach(function (item) {
            list.removeChild(item);
        });
    }
    container.classList.remove("show-container");
    displayAlert("empty list", "danger");
    //localStorage.removeItem("list");
    setBackToDefault();
}

//delete function
function deleteItem(e) {
    /*e.currentTarget -> selects button*/
    const element = e.currentTarget.parentElement.parentElement;
    /*dataset.id because name of attribute is dataset-id*/
    const id = element.dataset.id;
    list.removeChild(element);
    if (list.children.length) {
        container.classList.remove("show-container");
    }
    displayAlert('item removed', 'danger');
    setBackToDefault();
    //remove from local storage
    //removeFromLocalStorage(id);
}

//edit function
function editItem(e) {
    const element = e.currentTarget.parentElement.parentElement;
    //set edit item
    /*e.currentTarget.parentElement is button*/
    /*e.currentTarget.parentElement.previousElementSibling is title*/
    editElement = e.currentTarget.parentElement.previousElementSibling;
    // set form value
    grocery.value = editElement.innerHTML;
    editFlag = true;
    editID = element.dataset.id;
    submitBtn.textContent = "edit";
}

//set back to default
function setBackToDefault() {
    grocery.value = "";
    editFlag = false;
    editID = "";
    submitBtn.textContent = "submit";
    console.log("")
}

// ****** LOCAL STORAGE **********
function addToLocalStorage(id, value) {
    console.log("added to local storage");
}

function removeFromLocalStorage(id) {

}
function editLocalStorage(id, value){

};
// ****** SETUP ITEMS **********
