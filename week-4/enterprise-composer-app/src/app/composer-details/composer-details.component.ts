import { ComposerService } from './../composer.service';
import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-composer-details',
  templateUrl: './composer-details.component.html',
  styleUrls: ['./composer-details.component.css']
})
export class ComposerDetailsComponent implements OnInit {

  composerId: number;
  composer: IComposer;


  constructor(private route: ActivatedRoute, private ComposerService: ComposerService  ) {
    this.composerId = parseInt(this.route.snapshot.paramMap.get('composerId'), 10);

    if (this.composerId) {
      this.composer = this.ComposerService.getComposer(this.composerId);
    }
  }

  ngOnInit(): void {
  }

}
