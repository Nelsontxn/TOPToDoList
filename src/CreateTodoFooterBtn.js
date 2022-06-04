import CreateDivFunc from './createdivfunction';

let footer = () =>{

    let footerBtn = CreateDivFunc('button', 'AddButton', 'addNewBook' );
    footerBtn.textContent = "+";
    console.log(footerBtn);
    return footerBtn;

};

export default footer;