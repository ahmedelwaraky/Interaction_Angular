import { Component, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
currentComponent:string = ""
@Output() myEvent = new EventEmitter()
  getcomponent(currentComponent:any ){
    this.currentComponent =currentComponent
    this.myEvent.emit(this.currentComponent)
  }
}
