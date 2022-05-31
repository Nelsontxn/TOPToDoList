export default class ViewController{
    constructor() {
        this.HamburgermenuOpen = false;
    }

    //HamburgermenuController
    HamburgermenuControls(){
        let OpenHamburgerMenuActive = document.getElementById('OpenHamburgerMenu');
        if(this.HamburgermenuOpen === false) {
            this.HamburgermenuOpen = true;
            OpenHamburgerMenuActive.textContent = '';
            OpenHamburgerMenuActive.textContent = 'Close Menu';
            OpenHamburgerMenuActive.classList.add("CloseHamburgerMenu");
            OpenHamburgerMenuActive.classList.remove("OpenHamburgerMenu");
          } else {
            this.HamburgermenuOpen = false;
            OpenHamburgerMenuActive.textContent = '';
            OpenHamburgerMenuActive.textContent = 'Open Menu';              
            OpenHamburgerMenuActive.classList.add("OpenHamburgerMenu");
            OpenHamburgerMenuActive.classList.remove("CloseHamburgerMenu");
          }

    }

}