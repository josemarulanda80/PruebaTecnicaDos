import { Component, OnInit, ViewChild } from '@angular/core';
import { Users } from 'src/app/interfaces/list.item.types';
import { UsersService } from 'src/app/services/users.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { User } from 'src/app/interfaces/user.type';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  ELEMENT_DATA!:Users[];
  displayedColumns: string[] = ['Id', 'Name', 'Username', 'Email'];
  dataSource = new MatTableDataSource<Users>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(private userService: UsersService) {
    this.getAllUsers()
   }

  ngOnInit() {
    this.getAllUsers()
  }

  public getAllUsers(){
    this.userService.getUsers().subscribe(report => this.dataSource.data=report as Users[])
  }
  
}



