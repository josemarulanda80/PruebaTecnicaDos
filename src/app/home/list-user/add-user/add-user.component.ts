import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { Users } from 'src/app/interfaces/list.item.types';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  @Input() title: string = ''
  @Input() editUser: Users
  user: FormGroup
  id:number

  public show = false;
  constructor(private userServices: UsersService) { }
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
  showModel() {
    this.show = true;
    console.log(this.editUser)
  }
  hideModel() {
    this.show = false;
  }
  createUser() {
    console.log(this.user)
    const newUser: Users = {
      email: this.user.get("email")?.value,
      name: this.user.get("name")?.value,
      username: this.user.get("username")?.value,
      phone: this.user.get('phone')?.value
    };
    this.userServices.saveUSer(newUser).subscribe(data =>
      console.log('Información enviada'),
      error => console.log('oops', error));
    this.exit()
  }
  exit() {
    console.log("hola");
    console.log(this.editUser.id)
    this.user.reset()
    this.show = false;

  }


  //Función con la que trate llamar la información del usuario a editar pero no me funciona, la alternativa que usaria es implementar un store(ngrx) para tener un mejor manejo del flujo información
  // showInformationUserEdit(){
  //   this.user.patchValue({
  //     email: this.user.get("email")?.value,
  //     name: this.user.get("name")?.value,
  //     username: this.user.get("username")?.value,
  //     phone: this.user.get('phone')?.value
  //   })
  // }
}
