import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CochesComponent } from './coches/Components/coches.component';
import { CochesModule } from './coches/coches.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    CochesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
