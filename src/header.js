import CreateDivFunc from './createdivfunction';

let header = () => {
    /* main header div */
    let headerDiv = CreateDivFunc('div', 'headerDiv', 'headerDiv');
    

    //hamburger menu
    let HamburgerMenu = CreateDivFunc('div', 'HamburgerMenu', 'HamburgerMenu');

    let OpenHamburgerMenu = CreateDivFunc('div', 'OpenHamburgerMenu','OpenHamburgerMenu');

    let CloseHamburgerMenu = CreateDivFunc('div', 'CloseHamburgerMenu','CloseHamburgerMenu');

    HamburgerMenu.append(OpenHamburgerMenu);
    HamburgerMenu.append(CloseHamburgerMenu);

    //TO-DONameList
    let ToDoLogo = CreateDivFunc('div','ToDoLogo','ToDoLogo');
    ToDoLogo.textContent = 'To Do List';


    //ProjectName
    let ProjectName = CreateDivFunc('div','ProjectName','ProjectName');
    ProjectName.textContent = 'Default Project';

    //New Task
    let NewTask = CreateDivFunc('div','NewTask','NewTask');
    NewTask.textContent = 'New Task';


    headerDiv.append(HamburgerMenu);
    headerDiv.append(ToDoLogo);
    headerDiv.append(ProjectName);
    headerDiv.append(NewTask);


    return headerDiv;
};

export default header;
