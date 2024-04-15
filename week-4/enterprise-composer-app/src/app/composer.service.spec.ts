/**
 * Title: composer.service.spec.ts
 * Author: Victor Soto
 * Date: 04/14/2024
 * Description: composer service spec
 */

import { TestBed } from '@angular/core/testing';
import { ComposerService } from './composer.service';

describe('ComposerService', () => {
  let service: ComposerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComposerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
