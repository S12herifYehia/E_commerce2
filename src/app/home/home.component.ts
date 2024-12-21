import { Component, Renderer2, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { register } from 'swiper/element/bundle';
import { Products } from '../models/products';
import { ProductserviceService } from '../services/productservice.service';
import { json } from 'stream/consumers';
register();
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  hour: any;
  minute: any;
  second: any;
  day: any;
  intervalid: any;
  num = 0;

  arr: any = [];
  arr_details: any = [];

  // tableprod:Products[]=[]
  tableprodtodays: any = [];
  tablemonth: any = [];
  ourproduct: any = [];

  constructor(
    private serviceproductToday: ProductserviceService,
    private ngzone: NgZone,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getprodtodays();
    this.getmonth();
    this.getproduct();
    this.hidecart()

    // this.onShowDetails();
    this.ngzone.runOutsideAngular(() => {
      this.intervalid = setInterval(() => {
        this.ngzone.run(() => {
          this.timestoday();
          this.hidecart();
         
        });
      }, 1000);
    });

    // this.ngzone.runOutsideAngular(() => {
    //   this.intervalid = setInterval(() => {
    //     this.ngzone.run(() => {
    //       // this.timestoday();
    //       this.hidecart();
    //     });
    //   }, 3000);
    // });

    

    var loc = localStorage.getItem('cardProd');

    if (loc != null) {
      this.arr = JSON.parse(loc);
    } else {
      this.arr = [];
    }
  }

  ngOnDestroy(): void {
    if (this.intervalid) {
      clearInterval(this.intervalid);
    }
  }

  getprodtodays() {
    this.tableprodtodays = this.serviceproductToday.producttabletodays;
  }

  getmonth() {
    this.tablemonth = this.serviceproductToday.prodmonth;
  }

  getproduct() {
    this.ourproduct = this.serviceproductToday.ourproducts;
  }

  timestoday() {
    var currenttime = new Date();
    var times = new Date('Sep 18,2024 00:00:00');

    var targettime = times.getTime() - currenttime.getTime();

    this.second = Math.round(targettime / 1000) % 60;
    this.minute = Math.round(targettime / (1000 * 60)) % 60;
    this.hour = Math.round(targettime / (1000 * 60 * 60)) % 24;
    this.day = Math.round(targettime / (1000 * 60 * 60 * 24));

    var discount = document.querySelectorAll(
      '#todays .carts_discount .discount'
    );

    if (
      this.second == 0 &&
      this.minute == 0 &&
      this.hour == 0 &&
      this.day == 0
    ) {
      discount.forEach((dis) => {
        dis.remove();
      });
    }
  }

  showAddcart(i: any) {
    var msg_addcart = document.querySelector('.msg_addcart') as HTMLElement;
    msg_addcart?.classList.add('show');
    this.arr.push(i);
    localStorage.setItem('cardProd', JSON.stringify(this.arr));
    // emitChange
  }

  hidecart() {
    // setTimeout(function(){
      var msg_addcart = document.querySelector('.msg_addcart') as HTMLElement;
      msg_addcart?.classList.remove('show');
    // },3000)
   
  }

  // onShowDetails() {
  //   this.router.navigate(['/product_details']);
  //   // setTimeout(()=>{
  //   const cart = document.querySelector('#todays .cart h3')?.parentElement;
  //   const sibli = cart?.previousSibling as HTMLElement

  //   // var child_sibli=sibli?.lastChild
 


  //   if (sibli) {
  //     // احصل على جميع العناصر الفرعية للعنصر السابق
  //     const children = Array.from(sibli.children);
 

  //   // for (var b = 0; b < children.length - 1; b++) {
  //   //   console.log(children[children.length - 2 ]);
  //   // }
  //   }
  //   // console.log(sibli);
  //   // console.log(cart)
  //   if (cart) {
  //     const child = cart.children;

  //     // console.log(child)

  //     // this.arr_details=child;
  //     // console.log(this.arr)

  //     // for(var i = 0; i<cart.length)
  //     // for(var i = 0 ; i < child.length; i++){
  //     // console.log(child[i])
  //     // لو عاوز النص والعنصر لاغير
  //     // this.arr_details=Array.from(child).map(child=>({
  //     //   textContent: child.textContent,
  //     //   tagName: child.tagName
  //     // }))

  //     // لو عاوز النص فقط لاغير
  //     this.arr_details = Array.from(child).map((child) => ({
  //       textContent: child.textContent,
  //     }));
  //     console.log(this.arr_details);
  //     localStorage.setItem('arr_details', JSON.stringify(this.arr_details));
  //     // }
  //   } else {
  //     console.error('Element not found');
  //   }

  //   // },1000)
  // }






  onShowDetails(prod:any){
    this.router.navigate(['/product_details']);
    // this.arr_details = prod
    localStorage.setItem('prod_details',JSON.stringify(prod));

    // console.log(this.arr_details)

  }
}
