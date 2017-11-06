import { Component, OnInit } from '@angular/core';
import { FireBaseService } from '../fire-base.service';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  providers: [FireBaseService]
})
export class NavBarComponent implements OnInit {

  constructor(public _fbService: FireBaseService) { }

  ngOnInit() {

  }

  logIn() {
    this._fbService.login();
  }

  logOut() {
    this._fbService.logout();
  }

}
