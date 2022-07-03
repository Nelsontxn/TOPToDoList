import CreateDivFunc from './createdivfunction';

let hero = () =>{
    /* main header div */
    let herodiv = CreateDivFunc('div', 'herodiv', 'herodiv');

    let herotitle = CreateDivFunc('div', 'todoItem,todoItemHeader', 'todoItemHeader');

    let todoPriority = CreateDivFunc('div', `todoPriority,todoPriorityHeader`,  `todoPriorityHeader`);
    todoPriority.textContent = 'Priority';

    let todoTitle = CreateDivFunc('div','todoTitle,todoTitleHeader', 'todoTitleHeader');
    todoTitle.textContent = 'Title';

    let todoDescription = CreateDivFunc('div','todoDescription,todoDescriptionHeader', 'todoDescriptionHeader');
    todoDescription.textContent = 'Description';

    let todoDueDate = CreateDivFunc('div','ttodoDueDate,odoDueDateHeader', 'todoDueDateHeader');
    todoDueDate.textContent = 'Due Date';

    herotitle.append(todoPriority);
    herotitle.append(todoTitle);
    herotitle.append(todoDescription);
    herotitle.append(todoDueDate);

    herodiv.append(herotitle);

    return herodiv;
}

export default hero;