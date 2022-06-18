import header from './header';
import footer from './CreateTodoFooterBtn';
import ViewController from './ViewController';
import newform from './AddNewTodoForm';

let content = document.getElementById('content');

content.append(header());
content.append(newform());
content.append(footer());

let viewController = new ViewController();

let HamburgerMenuEvent = document.getElementById('OpenHamburgerMenu');

HamburgerMenuEvent.addEventListener("click", () =>{
    viewController.HamburgermenuControls();
});

let AddNewForm = document.getElementById('addNewBook');

AddNewForm.addEventListener("click", () =>{
    viewController.SwitchNewForm();
});


// When the user clicks anywhere outside of the modal, close it
document.addEventListener("click", (e) => {
    // Check if the filter list parent element exist
    const popupQuerySelector = document.getElementById('formMainDiv');
    const isClosest = popupQuerySelector.contains(e.target);
    console.log(isClosest);
    console.log(viewController.toggleNewForm);
    // If `isClosest` equals falsy & popup has the class `show`
    // then hide the popup
    if (!isClosest && viewController.toggleNewForm == true) {
        // viewController.SwitchNewForm();
    }
  });