import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(resp => console.log(resp))
  }
  
}
