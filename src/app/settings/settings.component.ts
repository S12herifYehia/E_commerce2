import { Component,NgZone } from '@angular/core';
import { subscribe } from 'diagnostics_channel';
import { Subscription ,interval} from 'rxjs';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {

mybol=false;
intervalid:any;

constructor(private ngZone:NgZone){}

ngOnInit(){
  // this.subscription=interval(1000).subscribe(()=>{
  //   this.settime();
  // })
  // console.log(this.timestoday())
this.ngZone.runOutsideAngular(()=>{
  this.intervalid=setInterval(()=>{
    this.ngZone.run(()=>{
this.settime()
    })
  },1000)
})


}


ngOnDestroy(): void {
  //Called once, before the instance is destroyed.
  //Add 'implements OnDestroy' to the class.
if(this.intervalid){
  clearInterval(this.intervalid)
}
}

settime(){
  var time=new Date();


 var hand=(time.getHours() / 12) * 360;
  var minute=(time.getMinutes() / 60 ) * 360;
  var second=(time.getSeconds() / 60 ) * 360;



  var hour_hand=document.querySelector('.hour-hand') as HTMLElement;
  var minute_hand=document.querySelector('.minute-hand') as HTMLElement;
  var second_hand=document.querySelector('.second-hand') as HTMLElement;




  hour_hand.style.rotate=`${hand}deg`;
  minute_hand.style.rotate=`${minute}deg`;
  second_hand.style.rotate=`${second}deg`;

}






}
