import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  arr:any=[];

  quan:number=0;
  

  constructor(){
    this.getProd();
  //  this.getSubTotal();
  this.calculateTotal()
  }


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
   
  }




  getProd() {
    var loc=localStorage.getItem('cardProd')
    if (loc != null) {
      this.arr = JSON.parse(loc);
      // for(var i = 0; i<this.arr.length; i++){
      //   // console.log(this.arr[i].price)
      //   this.quan=this.arr[i].price * 1
      // }
    } else {
      this.arr = [];
    }
  }


  remove(i:any){

   this.arr.splice(i,1)
    localStorage.setItem('cardProd',JSON.stringify(this.arr));
    this.calculateTotal()

  }

  onChangeNum(product:any,price:any){
    // this.quan = +q * price
    
      product.quantity = price;
      product.totalPrice = price * product.price;
      localStorage.setItem('cardProd', JSON.stringify(this.arr));
      this.calculateTotal();
    
    

    

  }


  // getSubTotal(){
  //   var loca=localStorage.getItem('cardProd')
  //   if(loca !=null){
  //     var par=JSON.parse(loca);

  //     this.quan=par.price;
  //     console.log(this.quan)

  //   }
  //   // this.quan=
  // }

  // calculateTotal() {
  //   this.quan = this.arr.reduce((totalPrice, product) => {
  //     return totalPrice + (product.totalPrice || (product.quantity ? product.quantity * product.price : product.price));
  //   }, 0);
  // }

  calculateTotal(){
   this.arr.reduce((totalPrice:any,product:any)=>{
   
      return this.quan=+totalPrice + +(product.totalPrice);
    

   },0)
}
}