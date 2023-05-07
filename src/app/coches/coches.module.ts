import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CochesComponent } from './Components/coches.component';
import { ListComponent } from './Components/list/list.component';
import { AddCharacterComponent } from './Components/add-character/add-character.component';



@NgModule({
  declarations: [CochesComponent, ListComponent, AddCharacterComponent],
  imports: [CommonModule],
  exports: [CommonModule,CochesComponent],
})
export class CochesModule { }
