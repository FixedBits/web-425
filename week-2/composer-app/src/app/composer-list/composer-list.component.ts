/**
 * Title: composer-list.component.ts
 * Author: Victor Soto
 * Date:   03/31/2024
 * Description: Composer list component; displays a list of composers
 */

import { Component, OnInit } from '@angular/core';

class MusicComposer {
  fullName: string;
  genre: string;

  constructor(fullName: string, genre: string) {
    this.fullName = fullName;
    this.genre = genre;
  }
}

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css'],
})
export class ComposerListComponent implements OnInit {
  composers: Array<MusicComposer>;

  constructor() {
    this.composers = [
      new MusicComposer('Franz Schubert', 'Classical'),
      new MusicComposer('Richard Wagner', 'Classical'),
      new MusicComposer('Antonio Vivaldi', 'Classical'),
      new MusicComposer('Franz Joseph Haydn', 'Classical'),
      new MusicComposer('George Frideric Handel', 'Classical'),
    ];
  }

  ngOnInit(): void {}
}
