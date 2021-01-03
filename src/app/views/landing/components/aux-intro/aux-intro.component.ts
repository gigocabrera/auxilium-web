import { Component, OnInit } from '@angular/core';
import { SharedAnimations } from 'src/app/shared/animations/shared-animations';

@Component({
  selector: 'app-aux-intro',
  templateUrl: './aux-intro.component.html',
  styleUrls: ['./aux-intro.component.scss'],
  animations:[SharedAnimations]
})
export class AuxIntroComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
