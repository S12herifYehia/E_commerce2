import { Component, HostListener } from '@angular/core';
// import { throttle } from 'lodash';
// import { throttle } from 'lodash';

@Component({
  selector: 'app-mouse',
  templateUrl: './mouse.component.html',
  styleUrl: './mouse.component.scss',
})
export class MouseComponent {
  x: number = 0;
  y: number = 0;
  onmouseover(e: MouseEvent) {
    this.x = e.clientX;
    this.y = e.clientY;
  }
}
