import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AddItemAction, DeleteItemAction, LoadShoppingAction } from 'src/app/actions/shopping.action';
import { AppState } from 'src/app/models/app-state.model';
import { ShoppingItem } from 'src/app/models/shopping.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  shoppingItems: Observable<Array<ShoppingItem>>;
  loading$: Observable<Boolean>;
  error$: Observable<Error>
  newShoppingItem: ShoppingItem = { id: 0, name: '' }
  title = 'ngrx with json server';
  constructor(private store: Store<AppState>,
    private titleService: Title,
    private metaTagService: Meta) { }

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.metaTagService.updateTag(
      { name: 'description', content: 'Add car template' }
    );
    this.shoppingItems = this.store.select(store => store.shopping.list);
    this.loading$ = this.store.select(store => store.shopping.loading);
    this.error$ = this.store.select(store => store.shopping.error);

    this.store.dispatch(new LoadShoppingAction());
  }

  addItem() {

    this.store.dispatch(new AddItemAction(this.newShoppingItem));

    this.newShoppingItem = {  name: '' };
  }

  deleteItem(id: number) {
    this.store.dispatch(new DeleteItemAction(id));
  }
}

