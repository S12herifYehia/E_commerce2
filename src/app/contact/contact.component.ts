import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  email:string="@gmail";
  quantity=100;

  writing(e:any){
    this.quantity=100 -  e.target.value.length 
  }
  




}
