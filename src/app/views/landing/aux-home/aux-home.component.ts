import {Component, OnInit} from "@angular/core";

@Component({
  selector: "app-aux-home",
  templateUrl: "./aux-home.component.html",
  styleUrls: ["./aux-home.component.scss"]
})

export class AuxHomeComponent implements OnInit {
  
  backgroundColor = "landing-auxilium-blue";
  showCustomizer = false;
  
  constructor() {

  }

  ngOnInit() {

  }

  changeBg(colorName) {
    this.backgroundColor = "landing-" + colorName;
  }
  
  toggleCustomizer() {
    this.showCustomizer = !this.showCustomizer;
  }

}