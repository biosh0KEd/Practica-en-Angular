import { Component } from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('contenedorAnimable', [
      state('inicial', style({
        opacity: 0,
        backgroundColor: 'green',
        transform: 'rotate3d(0,0,0,0deg)'
      })),
      state('final', style({
        opacity: 1,
        backgroundColor: 'yellow',
        transform: 'rotate3d(5,10,20,30deg)'
      })),
      transition('inicial => final', animate(1000)),
      transition('final => inicial', animate(500))
    ])
  ]
})
export class AppComponent {
  title = 'platzi-test';
  state = 'inicial';
  animar(){
    this.state = (this.state === 'final') ? 'inicial' : 'final';
  }
}