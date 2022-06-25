import header from './header';
import footer from './CreateTodoFooterBtn';
import ViewController from './ViewController';
import newform from './AddNewTodoForm';
import FormController from './FormController';
import DataController from './DataController';

let content = document.getElementById('content');

content.append(header());
content.append(newform());
content.append(footer());

const viewController = new ViewController();
const formController = new FormController();
const dataController = new DataController();

dataController.LoadLocalStorage();

let HamburgerMenuEvent = document.getElementById('OpenHamburgerMenu');

HamburgerMenuEvent.addEventListener("click", () =>{
    viewController.HamburgermenuControls();
});

let AddNewForm = document.getElementById('addNewBook');

AddNewForm.addEventListener("click", (e) =>{
    viewController.SwitchNewForm();
    if (viewController.toggleNewForm == true) {
        e.stopPropagation();
      }
});

//Popup Form Clear Btn
document.getElementById('clearBtn').addEventListener("click", () =>{
    formController.ResetForm();
});

//Popup Close X btn
document.getElementById('formCloseBotton').addEventListener("click", () =>{
    formController.ResetForm();
    viewController.SwitchNewForm();
});

//Popup Submit Btn
document.getElementById('SubmitBtn').addEventListener("click", () =>{
    dataController.SubmitForm();
    formController.ResetForm();
    viewController.SwitchNewForm();
});

// When the user clicks anywhere outside of the modal, close it
document.addEventListener("click", (e) => {
    // Check if the filter list parent element exist
    const popupQuerySelector = document.getElementById('formMainDiv');
    const isClosest = popupQuerySelector.contains(e.target);
    // If `isClosest` equals falsy & popup has the class `show`
    // then hide the popup
    if (!isClosest && viewController.toggleNewForm == true) {
        viewController.SwitchNewForm();
        formController.ResetForm();
    }
  });