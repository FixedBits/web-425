/**
 * Title: wishlist.component.ts
 * Author: Victor Soto
 * Date: 29 April 2020
 * Source: https://github.com/buwebdev/web-425/blob/master/week-6/in-n-out-booksp4
 * Description: Wishlist component (Wishlist page)
 */

import { Component, OnInit } from '@angular/core';
import { IWishlistItem } from '../wishlist-item.interface';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  items: Array<IWishlistItem> = [];

  constructor() { }

  ngOnInit(): void {
  }

  updateItemsHandler(item: IWishlistItem) {
    console.log('Inside the wishlist.component.ts (parent) - updateItemsHandler() function');
    console.log(item);
    this.items.push(item);
    console.log(this.items);
  }
}
