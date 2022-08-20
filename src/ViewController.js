import CreateDivFunc from './createdivfunction';

export default class ViewController{
    constructor() {
        this.HamburgermenuOpen = false;
        this.toggleNewForm = false;
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

    //NewTODOFunctions

    openNewForm() {
        document.getElementById("formMainDiv").style.display = "block";
      }


    closeNewForm() {
        document.getElementById("formMainDiv").style.display = "none";
      }

    SwitchNewForm(){
        if(this.toggleNewForm == false){
            this.openNewForm();
            this.toggleNewForm = true;
        }else{
            this.closeNewForm();
            this.toggleNewForm = false;
        }
    }


    //A function that take in Todo Objects that will:
    // 1. Load the list in the order specified/ via date/priority etc. Default to Earliest Created.
    // 2. Give the div ID the ID value
    // 3. Have a title, Description, DueDate & show the Priority Value
    // 4. Append the Div to the hero
    TodoPriorityEnumeration(todo){
        let priority;
        switch(todo){
            case '1':
                priority = "Low";
                break;
            case '2':
                priority = "Medium";
                break;
            case '3':
                priority = "High";
                break;
        }
        console.log(priority);
        return priority;
    }

    LoadTodoList(todo){
        let todoItem = CreateDivFunc('div', 'todoItem,todoItemContent',  `${todo.UUID}`);

        let priority = this.TodoPriorityEnumeration(todo.PriorityValue);
        let todoPriority = CreateDivFunc('div', `todoPriority,todoPriorityContent,todoPriority-${priority}`,  `todoPriority`);
        todoPriority.textContent = priority;

        let todoTitle = CreateDivFunc('div','todoTitle', 'todoTitle');
        todoTitle.textContent = todo.title;

        let todoDescription = CreateDivFunc('div','todoDescription', 'todoDescription');
        todoDescription.textContent = todo.Description;

        let todoDueDate = CreateDivFunc('div','todoDueDate', 'todoDueDate');
        todoDueDate.textContent = todo.DueDate;

        let todoDeleteBtn = CreateDivFunc('div', 'DeleteBtn', 'DeleteBtn');
        let deletelogo = CreateDivFunc('div','trashcan', 'trashcan' );
        todoDeleteBtn.append(deletelogo);

        todoItem.append(todoPriority);
        todoItem.append(todoTitle);
        todoItem.append(todoDescription);
        todoItem.append(todoDueDate);
        todoItem.append(todoDeleteBtn);

        return todoItem;
    }


}