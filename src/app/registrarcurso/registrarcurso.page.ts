import { HttpClient } from '@angular/common/http';
import { Component, OnInit,inject } from '@angular/core';
import { Router } from '@angular/router';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';


@Component({
  selector: 'app-registrarcurso',
  templateUrl: './registrarcurso.page.html',
  styleUrls: ['./registrarcurso.page.scss'],
})
export class RegistrarcursoPage implements OnInit {

  nombre : any = '';
  tipo : any = '';
  profesor : any = '';
  numero_alumnos : any = '';
  aula : any = '';

  notificar: boolean = false;
  firestore: Firestore = inject(Firestore);

  botones = [
    {
      text: 'Regresar',
      handler: () => {
        this.route.navigate(['/tabs/tab3/']);
      },
    },
  ];


  constructor(private http : HttpClient, private route:Router) { }

  ngOnInit() {
  }

  guardar(){
    let valores = {
      'nombre' : this.nombre,
      'tipo' : this.tipo,
      'profesor' : this.profesor,
      'numero_alumnos' : this.numero_alumnos,
      'aula' : this.aula,
    }

    console.log(valores)

    addDoc(collection(this.firestore, "cursos"), valores);
    this.notificar = true;
  }
}
