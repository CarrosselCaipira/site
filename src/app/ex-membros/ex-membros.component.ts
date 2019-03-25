import { Component, OnInit } from '@angular/core';
import { ListaPessoasService } from '../lista-pessoas.service';

@Component({
  selector: 'app-ex-membros',
  templateUrl: './ex-membros.component.html',
  styleUrls: ['./ex-membros.component.scss']
})
export class ExMembrosComponent implements OnInit {

  membros = this.pessoas.exMembros;
  
  n = this.membros.length;
  currentIndex = 0;
  pessoa = this.membros[0];
    
  constructor(private pessoas: ListaPessoasService) { }

  ngOnInit() {
  }
  
  horizontalScrollIntoView(i) {
      var parWid = document.querySelector('div.displayTime').clientWidth;
      var unitWid = document.getElementById(i).clientWidth;
      var scrolledLeft = document.querySelector('div.displayTime').scrollLeft + parWid / 2;
      var offsetLeft = document.getElementById(i).offsetLeft;
      var dir = scrolledLeft > offsetLeft ? -1 : 1;
      var qtFrames = 50;
      var inc = Math.abs(offsetLeft - scrolledLeft + unitWid / 2) / qtFrames;
      var tempo = 0;
      
      var incremento = function() {
          document.querySelector('div.displayTime').scrollLeft = scrolledLeft - parWid / 2 + inc * dir * tempo;
          tempo++;
          if(tempo < qtFrames) {
            setTimeout(incremento, 1);
          }
      }   
      incremento();
  }    
    
 
      
  onMemberClick(i) {
      this.horizontalScrollIntoView('membro' + i);
      this.currentIndex = i;
      this.pessoa = this.membros[i];
  }
    
  scrollBackward() {
      if(this.currentIndex > 0) {
          this.currentIndex--;
          this.horizontalScrollIntoView('membro' + this.currentIndex);
          this.pessoa = this.membros[this.currentIndex];
      }
  }
    
  scrollForward() {

      if(this.currentIndex < this.n - 1) {
          this.currentIndex++;
          this.horizontalScrollIntoView('membro' + this.currentIndex);
          this.pessoa = this.membros[this.currentIndex];
      }
  }
    
  windowResize() {
      var aux = this;
      setTimeout(function() {
          aux.horizontalScrollIntoView('membro' + aux.currentIndex);
      }, 400);
      
  }
}
