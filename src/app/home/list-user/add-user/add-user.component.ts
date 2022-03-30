import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  @Input() title:string = ''
  public show =false;
  constructor() { }

  ngOnInit(): void {
  }
showModel(){
  this.show=true;
}
  hideModel(){
    this.show=false;
  }

}
