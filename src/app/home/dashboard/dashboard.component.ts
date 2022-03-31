import { Component, Injectable, OnInit } from "@angular/core";
import { Users } from "src/app/interfaces/list.item.types";
import { UsersService } from "src/app/services/users.service";
import { DashboardItem } from "../../interfaces/dashboard.item.type";
import { DashboardService } from "../../services/dashboard.service";
import { ToastService } from "../../services/toast.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
@Injectable({
  providedIn: "root",
})
export class DashboardComponent implements OnInit {
  users:Users[]=[]
  public elements: DashboardItem[] = [];
  public loading = false;
  public ngxLoadingAnimationTypes = {
    chasingDots: "chasing-dots",
    circle: "sk-circle",
    circleSwish: "circleSwish",
    cubeGrid: "sk-cube-grid",
    doubleBounce: "double-bounce",
    none: "none",
    pulse: "pulse",
    rectangleBounce: "rectangle-bounce",
    rotatingPlane: "rotating-plane",
    threeBounce: "three-bounce",
    wanderingCubes: "wandering-cubes",
  };

  constructor(
    private dashboardService: DashboardService,
    private userUsuario:UsersService,
    private toast: ToastService
  ) {}


  public ngOnInit() {
    this.getData().then();
    this.getDataUser()
  }

  /**
   * getMetrics
   */
  getDataUser(){
    this.userUsuario.getUsers().subscribe((data)=>{
      this.users=data,
      console.log(this.users)
      
    })
  }
  public async getData() {
    try {
      this.loading = true;
      this.elements = await this.dashboardService.getNewDashboardData();
      console.log(this.elements)
      this.loading = false;
    } catch (e) {
      console.log(e);
      this.toast.error(
        "No se pudieron obtener los indicadores del dashboard, revise su conexión"
      );
    }
  }
}
