import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CochesComponent } from './Components/coches.component';



@NgModule({
  declarations: [CochesComponent],
  imports: [CommonModule],
  exports: [CommonModule,CochesComponent],
})
export class CochesModule { }
