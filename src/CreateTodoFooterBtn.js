import CreateDivFunc from './createdivfunction';

let footer = () =>{

    let footerBtn = CreateDivFunc('button', 'AddButton', 'addNewBook' );
    footerBtn.textContent = "+";
    return footerBtn;

};

export default footer;