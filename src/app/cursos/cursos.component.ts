import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit{

  nomePortal: string = "http://loiane.trainning";

  cursos: string[] = [];

  constructor( private cursosService: CursosService ) {
    this.nomePortal = "http://loiane.trainning";

    //var servico = new CursosService();

    this.cursos = this.cursosService.getCurso();
  }

  ngOnInit() {
  }
}
