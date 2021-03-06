import { CdkObserveContent } from '@angular/cdk/observers';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Users } from 'src/app/interfaces/list.item.types';
import { ToastService } from 'src/app/services/toast.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  @Input() title: string = '';
  @Input() editUser: Users;
  user: FormGroup;
  id: number | string;

  public show = false;
  constructor(private userServices: UsersService, private toastService: ToastService) { }

  createForm() {
    this.user = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      name: new FormControl("", Validators.required),
      username: new FormControl("", Validators.required),
      phone: new FormControl("", Validators.required)
    })
  }
  ngOnInit(): void {
    this.createForm();
  }
  // show model
  showModel() {
    this.show = true;
  }
  // exit model
  hideModel() {
    this.show = false;
  }
  createOrEditUser() {
    // Create user with information of form 
    const newUser: Users = {
      email: this.user.get("email")?.value,
      name: this.user.get("name")?.value,
      username: this.user.get("username")?.value,
      phone: this.user.get('phone')?.value
    };
    if (this.title == 'Agregar usuario') {

      this.userServices.saveUSer(newUser).subscribe(() => { this.toastService.success("Usuario Creado"), console.log('Usuario Creado'), this.userServices.getUsers().subscribe(), this.exit() },
        error => {
          console.log('oops', error), this.toastService.error(
            "El elemento no pudo ser eliminado",
            "Error"
          )
        });
    } else {
      this.id = this.editUser.id.toString();
      this.userServices.editUSer(newUser, this.id).subscribe(() => { this.toastService.success(`Usuario con id : ${this.id} editado`), this.userServices.getUsers().subscribe(), this.exit() },
        error => {
          this.toastService.error(
            `El elemento con id: ${this.id} no pudo ser editado`,
            "Error"
          )
        });
    }
  }

  // funtion exit modal and to format form
  exit() {
    this.user.reset()
    this.show = false;

  }
  //Funci??n con la que trate llamar la informaci??n del usuario a editar pero no me funciona, la alternativa que usaria es implementar un store(ngrx) para tener un mejor manejo del flujo informaci??n
  // showInformationUserEdit(){
  //   this.user.patchValue({
  //     email: this.user.get("email")?.value,
  //     name: this.user.get("name")?.value,
  //     username: this.user.get("username")?.value,
  //     phone: this.user.get('phone')?.value
  //   })
  // }
}
