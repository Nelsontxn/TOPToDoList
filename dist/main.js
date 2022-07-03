(()=>{"use strict";const e=(e,t,o)=>{const n=document.createElement(e);return t&&t.split(",").forEach((e=>{n.classList.add(e)})),o&&(n.id=o),n};let t=document.getElementById("content");t.append((()=>{let t=e("div","headerDiv","headerDiv"),o=e("div","HamburgerMenu","HamburgerMenu"),n=e("button","OpenHamburgerMenu,HamburgerMenuIcon","OpenHamburgerMenu");n.textContent="Open Menu",o.append(n);let r=e("div","ToDoLogo","ToDoLogo");r.textContent="To Do List";let d=e("div","ProjectName","ProjectName");return d.textContent="Default Project",t.append(o),t.append(d),t.append(r),t})()),t.append((()=>{let t=e("div","herodiv","herodiv"),o=e("div","todoItem,todoItemHeader","todoItemHeader"),n=e("div","todoPriority,todoPriorityHeader","todoPriorityHeader");n.textContent="Priority";let r=e("div","todoTitle,todoTitleHeader","todoTitleHeader");r.textContent="Title";let d=e("div","todoDescription,todoDescriptionHeader","todoDescriptionHeader");d.textContent="Description";let i=e("div","ttodoDueDate,odoDueDateHeader","todoDueDateHeader");return i.textContent="Due Date",o.append(n),o.append(r),o.append(d),o.append(i),t.append(o),t})()),t.append((()=>{let t=e("div","formMainDiv","formMainDiv");t.style.display="none";let o=e("div","formHeader","formHeader");o.textContent="New TO-DO";let n=e("div","formCloseButton","formCloseBotton");n.textContent="X";let r=e("form","FormWrapper","FormWrapper");r.autocomplete="off";let d=e("input","NewTitle,formItem","Newtitle");d.required=!0,d.placeholder="Title",d.maxLength=25;let i=e("textarea","NewDescription,formItem","NewDescription");i.placeholder="Description";let a=e("input","Newduedate","Newduedate");a.type="date",a.name="duedate";let l=new Date,s=l.getFullYear(),m=l.getMonth()+1,u=l.getDate();1==m.toString().length&&(m=`0${m}`),1==u.toString().length&&(u=`0${u}`),a.defaultValue=`${s}-${m}-${u}`;let p=e("select","selectWrapper","selectWrapper");for(let t=1;t<=3;t++){let o=[null,"Low","Medium","High"],n=e("option",`priorityOption${t}`,`priorityOption${t}`);n.value=t,n.textContent=o[t],p.options.add(n)}let c=e("div","FormActionBtns","FormActionBtns"),g=e("button","actionButts,clearBtn","clearBtn");g.textContent="Clear";let h=e("button","actionButts,SubmitBtn","SubmitBtn");return h.textContent="Submit",r.append(d),r.append(i),r.append(a),r.append(p),c.append(g),c.append(h),t.append(o),t.append(n),t.append(r),t.append(c),t})()),t.append((()=>{let t=e("button","AddButton","addNewBook");return t.textContent="+",t})());const o=new class{constructor(){this.HamburgermenuOpen=!1,this.toggleNewForm=!1}HamburgermenuControls(){let e=document.getElementById("OpenHamburgerMenu");!1===this.HamburgermenuOpen?(this.HamburgermenuOpen=!0,e.textContent="",e.textContent="Close Menu",e.classList.add("CloseHamburgerMenu"),e.classList.remove("OpenHamburgerMenu")):(this.HamburgermenuOpen=!1,e.textContent="",e.textContent="Open Menu",e.classList.add("OpenHamburgerMenu"),e.classList.remove("CloseHamburgerMenu"))}openNewForm(){document.getElementById("formMainDiv").style.display="block"}closeNewForm(){document.getElementById("formMainDiv").style.display="none"}SwitchNewForm(){0==this.toggleNewForm?(this.openNewForm(),this.toggleNewForm=!0):(this.closeNewForm(),this.toggleNewForm=!1)}TodoPriorityEnumeration(e){let t;switch(e){case"1":t="Low";break;case"2":t="Medium";break;case"3":t="High"}return console.log(t),t}LoadTodoList(t){let o=e("div","todoItem,todoItemContent",`${t.ID}`),n=this.TodoPriorityEnumeration(t.PriorityValue),r=e("div",`todoPriority,todoPriorityContent,todoPriority-${n}`,"todoPriority");r.textContent=n;let d=e("div","todoTitle","todoTitle");d.textContent=t.title;let i=e("div","todoDescription","todoDescription");i.textContent=t.Description;let a=e("div","todoDueDate","todoDueDate");return a.textContent=t.DueDate,o.append(r),o.append(d),o.append(i),o.append(a),o}},n=new class{constructor(){this.today=new Date,this.year=this.today.getFullYear(),this.month=this.today.getMonth()+1,this.day=this.today.getDate()}ResetForm(){document.getElementById("Newtitle").value=null,document.getElementById("NewDescription").value="",1==this.month.toString().length?this.month=`0${this.month}`:this.month=this.month,1==this.day.toString().length?this.day=`0${this.day}`:this.day=this.day,document.getElementById("Newduedate").value=`${this.year}-${this.month}-${this.day}`,document.getElementById("selectWrapper").value=1}},r=new class{constructor(){this.Todo,this.TodoCounter=0}LoadLocalStorage(){localStorage.getItem("Todo")?(this.Todo=JSON.parse(localStorage.getItem("Todo")),this.TodoCounter=this.Todo.length):(this.Todo=[],console.log("Loaded LocalStorage"))}SubmitForm(){this.TodoCounter++;let e={ID:this.TodoCounter,title:document.getElementById("Newtitle").value,Description:document.getElementById("NewDescription").value,DueDate:document.getElementById("Newduedate").value,PriorityValue:document.getElementById("selectWrapper").value};return this.Todo.push(e),this.UpdateLocalStorage(),e}UpdateLocalStorage(){console.log(this.Todo),localStorage.setItem("Todo",JSON.stringify(this.Todo))}};r.LoadLocalStorage();let d=document.getElementById("herodiv");r.Todo.forEach((e=>{let t=o.LoadTodoList(e);console.log(t),d.append(t)})),document.getElementById("OpenHamburgerMenu").addEventListener("click",(()=>{o.HamburgermenuControls()})),document.getElementById("addNewBook").addEventListener("click",(e=>{o.SwitchNewForm(),1==o.toggleNewForm&&e.stopPropagation()})),document.getElementById("clearBtn").addEventListener("click",(()=>{n.ResetForm()})),document.getElementById("formCloseBotton").addEventListener("click",(()=>{n.ResetForm(),o.SwitchNewForm()})),document.getElementById("SubmitBtn").addEventListener("click",(()=>{let e=r.SubmitForm();n.ResetForm();let t=o.LoadTodoList(e);d.append(t),o.SwitchNewForm()})),document.addEventListener("click",(e=>{document.getElementById("formMainDiv").contains(e.target)||1!=o.toggleNewForm||(o.SwitchNewForm(),n.ResetForm())}))})();