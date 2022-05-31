import header from './header';
import ViewController from './ViewController'

let content = document.getElementById('content');

content.append(header());

let viewController = new ViewController();

let HamburgerMenuEvent = document.getElementById('OpenHamburgerMenu');

HamburgerMenuEvent.addEventListener("click", () =>{
    viewController.HamburgermenuControls();
});