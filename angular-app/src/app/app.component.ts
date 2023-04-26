import { Component, OnInit } from '@angular/core';
import {
  checkOriginForChild,
  childToParent,
  customEventChildToParent,
  setCustomEvent,
  setEvent,
} from './massagechannle';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-app';
  ngOnInit(): void {
    setEvent((event) => {
      if (typeof event == 'object' && event && 'data' in event) {
        console.log('in angular ', event.data);
      }
    });
    childToParent('from angular');
    if (checkOriginForChild()) {
      setCustomEvent((event) => {
        if (typeof event == 'object' && event && 'data' in event) {
          console.log('in angular - custom', event.data);
        }
      });
      customEventChildToParent('from angular custom');
    }
  }
}
