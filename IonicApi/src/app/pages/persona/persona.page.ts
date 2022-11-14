import { Component, OnInit } from '@angular/core';
import { GetapiService } from 'src/app/Servicios/getapi.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
getdata:any[]=[];
  constructor(public _services:GetapiService) {
    this._services.getdata<any[]>("").subscribe(data =>
      {
        this.getdata=data
        console.log(this.getdata);
      })
   }

  ngOnInit() {
  }
  buscar( event){
    console.log(event)
  }

}
