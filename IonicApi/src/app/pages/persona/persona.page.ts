import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetapiPersonasService } from 'src/app/Servicios/getapi-personas.service';


@Component({
  selector: 'app-persona',
  templateUrl: './persona.page.html',
  styleUrls: ['./persona.page.scss'],
})
export class PersonaPage implements OnInit {
  curso: any;
  getdata: any[] = [];
  codigo: number;
  nombre: String;
  edad: String;
  contP: number=0;
  contMa: number=0;
  contMe: number=0;
  personaA: any[] = [{ "nombre": "Nombre", "edad": "Edad" }];
  textoBuscar = "";
  constructor(public _services: GetapiPersonasService, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.curso = this.activatedRoute.snapshot.paramMap.get("curso")
    console.log(this.curso);

    this._services.getdata<any[]>("").subscribe((response: any) => {
      this.getdata = response.data;
      this.codigo = this.getdata[0].curso;
      console.log(this.getdata);
      console.log(this.codigo);
      for (let i = 0; i < this.getdata.length; i++) {
        if (this.curso === this.getdata[i].curso) {
          this.personaA.push({
            nombre: this.getdata[i].nombre,
            edad:this.getdata[i].edad
          })
          console.log(this.personaA[i]);
          this.contP++;
          console.log(this.contP)
          if (this.getdata[i].edad >= 18) {
            console.log("mayor de edad");
            this.contMa++;
  
          } else {
            console.log("menor de edad");
            this.contMe++;
          }
        }

        

      }
    })

  }
  buscar( event) {
    //console.log(event);
    this.textoBuscar = event.detail.value;
  }

}
