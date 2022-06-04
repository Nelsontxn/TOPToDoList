import CreateDivFunc from './createdivfunction';

let header = () => {
    /* main header div */
    let headerDiv = CreateDivFunc('div', 'headerDiv', 'headerDiv');
    

    //hamburger menu
    let HamburgerMenu = CreateDivFunc('div', 'HamburgerMenu', 'HamburgerMenu');

    let OpenHamburgerMenu = CreateDivFunc('button', 'OpenHamburgerMenu,HamburgerMenuIcon','OpenHamburgerMenu');
    OpenHamburgerMenu.textContent = 'Open Menu';

    HamburgerMenu.append(OpenHamburgerMenu);

    //TO-DONameList
    let ToDoLogo = CreateDivFunc('div','ToDoLogo','ToDoLogo');
    ToDoLogo.textContent = 'To Do List';


    //ProjectName
    let ProjectName = CreateDivFunc('div','ProjectName','ProjectName');
    ProjectName.textContent = 'Default Project';

    //New Task
    // let NewTask = CreateDivFunc('div','NewTask','NewTask');
    // NewTask.textContent = 'New Task';


    headerDiv.append(HamburgerMenu);
    headerDiv.append(ProjectName);
    headerDiv.append(ToDoLogo);

    // headerDiv.append(NewTask);


    return headerDiv;
};

export default header;
