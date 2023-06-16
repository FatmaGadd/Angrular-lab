import { Component } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
inputValue:string='';
todoslist:string[]=[];

addTodo(){
this.todoslist.push(this.inputValue);
this.inputValue='';
}
removeTodo(i:any){
this.todoslist.splice(i,1);
}
}
