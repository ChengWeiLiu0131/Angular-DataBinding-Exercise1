import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  url = 'http://blog.miniasp.com/';
  imgurl = '/assets/images/logo.png';
  strLen = 0;
  constructor() {
  }
  changeTitle(altKey: boolean) {
    if (altKey) {
      this.title  = 'The Will Will Web';
    }
  }

  keyUpAction($event) {
    console.log($event);
    if( $event.key === 'Escape') {
      $event.target.value = '';
      this.strLen = 0;
    }
    this.strLen = $event.target.value.length;
  }
}
