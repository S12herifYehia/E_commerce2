import { Component } from '@angular/core';
import { json } from 'stream/consumers';

@Component({
  selector: 'app-gaming',
  templateUrl: './gaming.component.html',
  styleUrl: './gaming.component.scss'
})
export class GamingComponent {


  arr:any;
  details:any;


ngOnInit():void{
var loc=localStorage.getItem('prod_details');
if(loc != null){
  this.details=JSON.parse(loc);
  console.log(this.details)

}else{
  this.arr=[];
}






}







prod_details(){

}






}
