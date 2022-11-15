import { Component, OnInit } from '@angular/core';
import { GetapiService } from 'src/app/Servicios/getapi.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.page.html',
  styleUrls: ['./persona.page.scss'],
})
export class PersonaPage implements OnInit {
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
