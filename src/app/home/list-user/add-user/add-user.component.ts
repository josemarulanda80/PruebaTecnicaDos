import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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
    email:new FormControl(""),
    name:new FormControl(""),
    username:new FormControl(""),
    phone:new FormControl(""),

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

}
