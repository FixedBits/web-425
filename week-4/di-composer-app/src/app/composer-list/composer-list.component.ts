/**
 * Title: composer-list.component.ts
 * Author: Victor Soto
 * Date:   03/31/2024
 * Updated: 04/14/2024
 * Description: Composer list component; displays a list of composers
 * Source: https://github.com/buwebdev/web-425
 */

import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service';

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css'],
})
export class ComposerListComponent implements OnInit {
  composers: Array<IComposer>;
  constructor(private composerService: ComposerService) {
    this.composers = this.composerService.getComposers();

  }

  ngOnInit(): void {}
}
