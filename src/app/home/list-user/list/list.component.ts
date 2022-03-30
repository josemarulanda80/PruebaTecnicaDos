import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Users } from 'src/app/interfaces/list.item.types';
import { UsersService } from 'src/app/services/users.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/interfaces/user.type';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @ViewChild("myModal") myModal: ElementRef;

  error: boolean = false;
  title: string = 'Agregar Usuario'
  editUser:Users
  ELEMENT_DATA!: Users[];
  displayedColumns: string[] = ['Id', 'Name', 'Username', 'Email', 'Phone', 'Editar'];
  dataSource = new MatTableDataSource<Users>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(private userService: UsersService, private renderer: Renderer2) {
    this.getAllUsers()
  }

  ngOnInit() {
    this.getAllUsers()
  }

  public getAllUsers() {
    this.userService.getUsers().subscribe(report => this.dataSource.data = report as Users[]), err => {
      this.error == true;
      console.log(err);
    }
  }
  edit(j:Users) {
    this.title = "Editar usuario"
    console.log(j)
    this.editUser=j

  }

}



