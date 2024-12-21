import { Injectable } from '@angular/core';
import { Products } from '../models/products';

@Injectable({
  providedIn: 'root',
})
export class ProductserviceService {
  constructor() {}

  producttabletodays = [
    {
      imgurl: 'assets/home/todays1.png',
      title: 'PlayStation Arm',
      price: 120,
      discount: 160,
      details:"PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive."
    },
    {
      imgurl: 'assets/home/todays2.png',
      title: 'Illuminated keyboard',
      price: 150,
      discount: 160,
      details:'A keyboard is one of the primary input devices used with a computer. Like an electric typewriter, a keyboard is composed of buttons to create letters, numbers, and symbols, and perform additional functions. The following sections provide more in-depth information and answers to frequently asked questions about the keyboard.'
    },
    {
      imgurl: 'assets/home/todays3.png',
      title: 'TV screen',
      price: 180,
      discount: 190,
      details:'Recent leaps in TV sizes (98-inch TVs), resolution—we’re looking at you, 8K TVs—and viewing technology have made getting a new TV fun and exciting, but buying the best TV can quickly turn into a frustrating experience when you have no clue what any of the terms, tech jargon, specs, and formats even mean.'
    },
    {
      imgurl: 'assets/home/todays4.png',
      title: 'chair',
      price: 190,
      discount: 200,
      details:"chair, seat with a back, intended for one person. It is one of the most ancient forms of furniture, dating from the 3rd dynasty of ancient Egypt (c. 2650–c. 2575 bce)."
    },
  ];



  prodmonth=[
    {imgurl:'assets/home/month1.png',title:'The north coat',price:120,discount:160},
    {imgurl:'assets/home/month2.png',title:'Gucci duffle bag',price:120,discount:160},
    {imgurl:'assets/home/month3.png',title:'RGB liquid CPU Cooler',price:120,discount:160},
    {imgurl:'assets/home/month4.png',title:'Small BookSelf',price:120,discount:160},
  ]




  ourproducts=[
    {imgurl:"assets/home/product1.jpeg",title:'assets/home/product1.jpeg',price:120,discount:160},
    {imgurl:"assets/home/product2.png",title:'assets/home/product1.jpeg',price:120,discount:160},
    {imgurl:"assets/home/product3.png",title:'assets/home/product1.jpeg',price:120,discount:160},
    {imgurl:"assets/home/product4.png",title:'assets/home/product1.jpeg',price:120,discount:160},
    {imgurl:"assets/home/product5.png",title:'assets/home/product1.jpeg',price:120,discount:160},
    {imgurl:"assets/home/product6.png",title:'assets/home/product1.jpeg',price:120,discount:160},
    {imgurl:"assets/home/product7.png",title:'assets/home/product1.jpeg',price:120,discount:160},
    {imgurl:"assets/home/product8.png",title:'assets/home/product1.jpeg',price:120,discount:160},
  ]
}
