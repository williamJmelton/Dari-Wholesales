import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Firebase Req
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

// Firebase Service
import { FireBaseService } from './fire-base.service';

// All Material Component Imports Here
import { MatButtonModule, MatToolbarModule, MatIconModule, MatGridListModule,
         MatCardModule, MatCheckboxModule, MatListModule } from '@angular/material';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    MatCheckboxModule,
    MatListModule
  ],
  providers: [ FireBaseService ],
  bootstrap: [AppComponent, NavBarComponent]
})
export class AppModule { }
