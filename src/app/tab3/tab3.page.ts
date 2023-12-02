import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  cursos: Observable<any[]>;
  firestore : Firestore = inject(Firestore);

  constructor(private http : HttpClient, private route:Router) {
   
    //validamos si estamos logeados

    let user = localStorage.getItem('user');
    if (user == null) {
      this.route.navigate(['/login']);
    }
    // traemos los eventos de firebase
    const cursoCollection = collection(this.firestore,'cursos');
    this.cursos = collectionData(cursoCollection, {
      idField: '_id'
    });
  }

  VerDetalle(curso:any){ 
    this.route.navigate(['/curso/' + curso._id])
  }

  registrar(){ 
    this.route.navigate(['/registrarcurso/'])
  }


  
}

