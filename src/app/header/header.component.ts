import { Component, HostListener } from '@angular/core';
import { json } from 'stream/consumers';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

myboldrop:boolean=false;
myboltoggle:boolean=false;
quantity:any=[];



// countarr=localStorage.getItem("")
    // getActive(){
      // this.myboldrop=!this.myboldrop;
      // دا لو كده اعكسها ولو كده اعكسها 

    // }

    // getActiveToggle(){
      // if(this.myboltoggle==false){
      //   this.myboltoggle=true;
      // }else{
      //   this.myboltoggle=false;
      // }


      
    // }

    gettoggle(){
      if(this.myboltoggle==true){
        this.myboltoggle=false
        var divs=document.querySelector('.shows')
        divs?.remove()
      }else{
        var div=document.createElement('div');
        div.classList.add('shows');
        document.body.appendChild(div);
        this.myboltoggle=true

      }
      // this.myboltoggle = !this.myboltoggle
    }






    ngOnInit(){
      this.updatescroll();
      this.qun_arr();
    }


    removedrop(){
      if(this.myboltoggle==true){
        this.myboltoggle=false
        var divs=document.querySelector('.shows')
        divs?.remove()

      }
    }


    @HostListener('window:scroll',['$event'])

    onscroll(event : Event){
      this.updatescroll();
    }


    private updatescroll() {

      var header=document.querySelector('header')

      var top=document.documentElement.scrollTop || document.body.scrollTop;
      if(top >=300){
        header?.classList.add('changeback');
      }else{
        header?.classList.remove('changeback');
      }
      
    }



    // ourtime(){
    //   var time=new Date()
    // }
    
    showAll(val:string){
      var section=document.querySelectorAll('section')

      section.forEach(se=>{
        if(val == "" || val == " "){
          se.style.display="block"
        }
      })
    }

    showingSection(val:string){
      var section=document.querySelectorAll('section')

      section.forEach(sec=>{
        var id=sec.getAttribute("id")?.toLowerCase();


        var inp=val.toLowerCase();


        if(id?.indexOf(inp)==-1){
          sec.style.display='none'
        }
        else{
          sec.style.display='block'
        }



      })



     


    }

    qun_arr(){
      var local=localStorage.getItem('cardProd');
      if(local!=null){
        this.quantity=JSON.parse(local)
        // console.log(this.quantity)
      }else{
        this.quantity=[]
      }
    }
}
