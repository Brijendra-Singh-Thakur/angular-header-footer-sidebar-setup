import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { animate, AUTO_STYLE, state, style, transition, trigger } from '@angular/animations';
import { ImagePath } from '../../constants/images.constant'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(-100%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
})
export class HeaderComponent implements OnInit {
  menuState: string = 'out';
  toggleMenuIcon: string = 'fa-bars';
  displayMenu = "none";
  isMenuHasSubMenu: string;
  isProfilePopoverVisible: boolean = false;
  isnotificationPopoverVisible: boolean = false;
  image: object = ImagePath;

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (this.eRef.nativeElement.contains(event.target)) {
      // this.isProfilePopoverVisible = true;
      // console.log("click Inside")
    } else {
      this.isProfilePopoverVisible = false;
      this.isnotificationPopoverVisible = false;
      this.onClickOutside();
      // console.log("click Outside")
    }
  }

  constructor(private eRef: ElementRef) {
    this.isProfilePopoverVisible = false;
    this.isnotificationPopoverVisible = false;
  }

  ngOnInit() {
  }

  receiveMessage($event) {
    this.isMenuHasSubMenu = $event
    if (this.isMenuHasSubMenu == 'No') {
      this.onClickOutside();
    }
  }

  onClickOutside() {
    if (this.menuState == 'in') {
      this.toggleMenu();
    }
  }
  
  toggleMenu() {
    
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
    if (this.menuState == 'in') {
      this.displayMenu = "block";
      document.body.style.overflow = 'hidden';
    }
    else {
      this.displayMenu = "none";
      document.body.style.overflow = '';
    }

    if (this.toggleMenuIcon == 'fa-bars') {
      this.toggleMenuIcon = 'fa-times';
    }else{
      this.toggleMenuIcon = 'fa-bars';
    }

    this.isProfilePopoverVisible = false;
    this.isnotificationPopoverVisible = false;
  }

  onClickProfile(){
    if (this.isProfilePopoverVisible == false) {
      this.isProfilePopoverVisible = true;
      this.isnotificationPopoverVisible = false;
    }else{
      this.isProfilePopoverVisible = false;
    }
  }

  onClickNotification() {
    if (this.isnotificationPopoverVisible == false) {
      this.isnotificationPopoverVisible = true;
      this.isProfilePopoverVisible = false;
    } else {
      this.isnotificationPopoverVisible = false;
    }
  }
}
