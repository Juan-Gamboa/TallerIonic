import { Component, OnInit } from '@angular/core';
import { GetapiService } from 'src/app/Servicios/getapi.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
getdata:any[]=[];
textoBuscar = "";
  constructor(public _services: GetapiService) {
    
   }

  ngOnInit() {
    this._services.getdata<any[]>("").subscribe(data =>
      {
        this.getdata=data;
        console.log(this.getdata);
      })
  }

  buscar( event) {
    //console.log(event);
    this.textoBuscar = event.detail.value;
  }
}
