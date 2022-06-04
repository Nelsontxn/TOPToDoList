import header from './header';
import footer from './CreateTodoFooterBtn';
import ViewController from './ViewController';

let content = document.getElementById('content');

content.append(header());
content.append(footer());

let viewController = new ViewController();

let HamburgerMenuEvent = document.getElementById('OpenHamburgerMenu');

HamburgerMenuEvent.addEventListener("click", () =>{
    viewController.HamburgermenuControls();
});