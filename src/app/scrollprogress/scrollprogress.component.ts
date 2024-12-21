import { Component, Renderer2, HostListener } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);
@Component({
  selector: 'app-scrollprogress',
  templateUrl: './scrollprogress.component.html',
  styleUrl: './scrollprogress.component.scss',
})
export class ScrollprogressComponent {
  constructor(private render: Renderer2) {}

  ngOnInit(): void {
    this.updatescrollprogress();
  }

  @HostListener('window:scroll', ['$event'])
  onscroll(event: Event) {
    this.updatescrollprogress();
  }

  private updatescrollprogress() {
    const progress = document.querySelector('.progress') as HTMLElement;
    const progress_value = document.querySelector('.progress') as HTMLElement;

    const top = document.documentElement.scrollTop || document.body.scrollTop;
    const calcheight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scroll_value = Math.round((top / calcheight) * 100);

    if (top >= 500) {
      this.render.addClass(progress, 'show');
    } else {
      this.render.removeClass(progress, 'show');
    }

    progress.style.background = `conic-gradient(#DB4444 ${scroll_value}% , white ${scroll_value}%)`;
  }

  scrolltoTop() {
    // window.scrollTo({
    //   top:0,
    //   behavior:'smooth'
    // })

    gsap.to(window, { scrollTo: 0, duration: 1, ease: 'power2.inOut' });
  }
}
