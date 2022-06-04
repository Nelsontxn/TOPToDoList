import CreateDivFunc from './createdivfunction';

let newform = () =>{
    //Main Form Page
    let formMainDiv = CreateDivFunc('div', 'formMainDiv,VisibilityHidden', 'formMainDiv');

    //Header
    let formHeader = CreateDivFunc('div', 'formHeader', 'formHeader');
    formHeader.textContent = 'New TO-DO';

    //Close Button
    let formCloseButton = CreateDivFunc('div', 'formCloseButton', 'formCloseBotton');
    formCloseButton.textContent = 'X';

    //form Wrapper
    let FormWrapper =  CreateDivFunc('form', 'FormWrapper', 'FormWrapper');
    FormWrapper.autocomplete = 'off';

    //title
    let NewTitle = CreateDivFunc('input', 'NewTitle,formItem', 'Newtitle');
    NewTitle.required = true;
    NewTitle.placeholder = 'Title';
    NewTitle.maxLength = 25;

    //description
    let NewDescription = CreateDivFunc('textarea', 'NewDescription,formItem', 'NewDescription');
    NewDescription.placeholder = 'Description';

    //dueDate


    //priority


}

export default newform;