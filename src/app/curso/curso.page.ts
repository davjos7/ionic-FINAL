import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Firestore, doc, docData } from '@angular/fire/firestore';


@Component({
  selector: 'app-curso',
  templateUrl: './curso.page.html',
  styleUrls: ['./curso.page.scss'],
})
export class CursoPage implements OnInit {
  curso: any = {};
  firestore: Firestore = inject(Firestore);

  constructor(private route:ActivatedRoute,private http : HttpClient) { 

    this.route.params.subscribe(params => {
      const curso_id = params['id'];

      const curso = doc(this.firestore,'cursos/'+ curso_id);
      docData<any>(curso).subscribe(data => {
        this.curso = data;
      })
  }) 
}

  ngOnInit() {
  }

  

}
