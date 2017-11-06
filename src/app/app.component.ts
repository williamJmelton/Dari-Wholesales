import { Component, OnInit, ViewChild } from '@angular/core';
import { FireBaseService } from './fire-base.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';

export interface User { name: string; age: number; framework: string; }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [FireBaseService]
})

export class AppComponent implements OnInit {
  @ViewChild('selectedItems') selectedItems;
  users: Observable<User[]>;
  items: Observable<any>;
  userName: String;
  itemsWanted: Array<Object>;
  selectedOptions: string[] = [];

  constructor(public _fbService: FireBaseService) {
    this.itemsWanted = [];

    }

    ngOnInit() {
      this.users = this._fbService.getItems();
      this.items = this._fbService.getItemList();
    }

    handleItemClick(item) {
      this.selectedOptions = this.selectedItems.selectedOptions.selected.map(function(option) {
        console.log(option.value);
        return option.value;
      });
    }

    selectedItem(e: Event) {
      console.log('Real Life.');
    }

    printSomething() {
      console.log('I exist');
    }

    showItems() {
      // console.log(this.selectedItems.selectedOptions.selected);
      this.selectedOptions = this.selectedItems.selectedOptions.selected.map(function(option) {
        console.log(option.value);
        return option.value;
      });
    }
}
