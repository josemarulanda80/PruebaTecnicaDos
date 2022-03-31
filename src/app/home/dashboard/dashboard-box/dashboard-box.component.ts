import { Component, Input, OnInit } from "@angular/core";
import { Users } from "src/app/interfaces/list.item.types";
import { DashboardItem } from "../../../interfaces/dashboard.item.type";
import { DashboardComponent } from "../dashboard.component";

@Component({
  selector: "app-dashboard-box",
  templateUrl: "./dashboard-box.component.html",
  styleUrls: ["./dashboard-box.component.css"],
})
export class DashboardBoxComponent implements OnInit {
  @Input() public data: Users;
  @Input() public mainRef: DashboardComponent;


  constructor() {}

  public ngOnInit(): void {
  }

}
