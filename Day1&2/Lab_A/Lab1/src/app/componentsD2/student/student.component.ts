import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
invalidName:string='Name should be more than 3';
invalidAge:string='Age should be more than 18';
i:number=1;
stdName:string = "";
stdage:string = "";
studentList:{id:number,stName:string,age:string}[] = [];

Add(){
  if (this.stdName.length>=3 && +this.stdage>=18) {
    this.studentList.push({id:this.i,stName:this.stdName,age:this.stdage});
    this.i++;
   this.stdName = "";
   this.stdage = "";
   }
}
}
