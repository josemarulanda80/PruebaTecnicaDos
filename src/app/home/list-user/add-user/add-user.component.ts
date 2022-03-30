import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  @Input() title:string = ''
  user: FormGroup;

  public show =false;
  constructor() { }
createForm(){
  this.user=new FormGroup({
    email:new FormControl("",[Validators.required, Validators.email]),
    name:new FormControl("",Validators.required),
    username:new FormControl("",Validators.required),
    phone:new FormControl("",Validators.required),

  })
}
  ngOnInit(): void {
    this.createForm();
  }
showModel(){
  this.show=true;
}
  hideModel(){
    this.show=false;
  }
  createUser(){
    console.log(this.user)
  }
exit(){
  this.user.reset()
  this.show=false;
 
}
}
