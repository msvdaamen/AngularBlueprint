import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {AppActionsModule} from '@states/app-actions.module';
import {AppStateModule} from '@states/app-reducer.module';
import { AppRoutingModule } from './/app-routing.module';
import { TempComponent } from './pages/temp/temp.component';



@NgModule({
  declarations: [
    AppComponent,
    TempComponent,
  ],
  imports: [
    BrowserModule,
    AppActionsModule,
    AppStateModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
  }),
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
