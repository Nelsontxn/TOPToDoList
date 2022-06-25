export default class DataController{
    constructor() {
    this.Todo;
    this.TodoCounter = 0;
    }

    //Function to Parse Stored Data
    LoadLocalStorage(){
    if(localStorage.getItem("Todo")){
        this.Todo = JSON.parse(localStorage.getItem("Todo"));
        this.TodoCounter = this.Todo.length;
    }else{
        this.Todo = [];
        console.log("Loaded LocalStorage")
    };

    console.log(this.Todo);

    }
    //Function to submit the data

    SubmitForm(){
        this.TodoCounter++;
        let NewData = {
            "ID": this.TodoCounter,
            "title": document.getElementById('Newtitle').value,
            "Description": document.getElementById('NewDescription').value,
            "DueDate": document.getElementById('Newduedate').value,
            "PriorityValue": document.getElementById('selectWrapper').value
        };
        this.Todo.push(NewData);
        this.UpdateLocalStorage();

        console.log(this.TodoCounter);
        return NewData;
  
    }
    
    UpdateLocalStorage(){
        console.log(this.Todo);
        localStorage.setItem("Todo", JSON.stringify(this.Todo));
    }

};
