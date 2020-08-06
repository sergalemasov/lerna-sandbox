import { async, TestBed } from '@angular/core/testing';
import { FirstLibraryModule } from './first-library.module';

describe('FirstLibraryModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FirstLibraryModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FirstLibraryModule).toBeDefined();
  });
});
