import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ImagePath } from '../../constants/images.constant';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  message:string;
  image: object = ImagePath;

  constructor() { }

  ngOnInit() {
  }

}
