import CreateDivFunc from './createdivfunction';

let newform = () =>{
    //Main Form Page
    let formMainDiv = CreateDivFunc('div', 'formMainDiv', 'formMainDiv');

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
    // let duedateLabel = CreateDivFunc('label', 'duedateLabel,formItem', 'duedateLabel');
    // duedateLabel.for = 'DueDate';

    let Newduedate = CreateDivFunc('input', 'Newduedate', 'Newduedate');
    Newduedate.type = 'date';
    Newduedate.name = 'duedate';

    let today = new Date();
    let year = today.getFullYear()
    let month = today.getMonth() + 1
    let day = today.getDate()

    month.toString().length == 1 ? month = `0${month}` : month=month;
    day.toString().length == 1 ? day = `0${day}` : day=day
    Newduedate.defaultValue = `${year}-${month}-${day}`


    //priority
    let priority = CreateDivFunc('select', 'selectWrapper', 'selectWrapper')
    for (let i = 1; i <= 3; i++) {
        let priorityList = [null,'Low', 'Medium', 'High']
        let option = CreateDivFunc('option', `priorityOption${i}`,`priorityOption${i}`)
        option.value = i
        option.textContent = priorityList[i];
        priority.options.add(option)
    }



    //Append to the DOM
    FormWrapper.append(NewTitle);
    FormWrapper.append(NewDescription); 
    // FormWrapper.append(duedateLabel);
    FormWrapper.append(Newduedate);   
    FormWrapper.append(priority);  
    
    formMainDiv.append(formHeader);
    formMainDiv.append(formCloseButton);
    formMainDiv.append(FormWrapper);
    return formMainDiv;
}

export default newform;