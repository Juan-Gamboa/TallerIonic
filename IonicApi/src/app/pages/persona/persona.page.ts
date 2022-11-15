import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetapiPersonasService} from 'src/app/Servicios/getapi-personas.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.page.html',
  styleUrls: ['./persona.page.scss'],
})
export class PersonaPage implements OnInit {
  curso: any;
  getdata:any[]=[];
  codigo: number;
  nombre: String;
  edad:String;
  constructor(public _services:GetapiPersonasService, private activatedRoute: ActivatedRoute) {
    
   }

  ngOnInit() {
    this.curso=this.activatedRoute.snapshot.paramMap.get("curso")
    console.log(this.curso);

    this._services.getdata<any[]>("").subscribe((response:any) =>
      {
        this.getdata=response.data;
        this.codigo=this.getdata[0].curso;
        console.log(this.getdata);
        console.log(this.codigo);
      })

  }
  buscar( event){
    console.log(event)
  }

}
