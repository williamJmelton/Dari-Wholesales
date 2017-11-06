import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import * as firebase from 'firebase/app';

export interface User { name: string; age: number; framework: string; }

@Injectable()
export class FireBaseService {
  private itemDoc: AngularFirestoreDocument<any>;
  itemsCollection: AngularFirestoreCollection<User>;
  items: Observable<any[]>;
  users: Observable<User[]>;
  userName = new BehaviorSubject(null);

  constructor(public _auth: AngularFireAuth , private _db: AngularFirestore, private rtdb: AngularFireDatabase) {
    this.itemsCollection = _db.collection<User>('users');
    this.users = this.itemsCollection.valueChanges();
    this.items = rtdb.list('/').valueChanges();
  }

  getItems() {
    return this.users;
  }

  login() {
    this._auth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    this._auth.auth.onAuthStateChanged(function(user) {
      if (user) {
        console.log( user.displayName + ' is logged in now.');
      } else {
        // No user is signed in.
        console.log('Ain\'t No One Logged in');
      }
    });
    this.userName.next('SOMEONE');
  }

  changeUserName(name: String) {
    this.userName.next(name);
  }

  logout() {
    this._auth.auth.signOut();
  }

  getItemList() {
    return this.items;
  }
}
