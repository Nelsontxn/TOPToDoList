export default class FormController{
    constructor() {
        this.today = new Date();
        this.year = this.today.getFullYear();
        this.month = this.today.getMonth() + 1;
        this.day = this.today.getDate();
    }
    

    ResetForm(){
        document.getElementById('Newtitle').value = null;
        document.getElementById('NewDescription').value = "";
        this.month.toString().length == 1 ? this.month = `0${this.month}` : this.month=this.month;
        this.day.toString().length == 1 ? this.day = `0${this.day}` : this.day=this.day
        document.getElementById('Newduedate').value = `${this.year}-${this.month}-${this.day}`;
        document.getElementById('selectWrapper').value = 1;
        
    }


}
