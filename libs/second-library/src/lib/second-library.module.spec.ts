import { async, TestBed } from '@angular/core/testing';
import { SecondLibraryModule } from './second-library.module';

describe('SecondLibraryModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SecondLibraryModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SecondLibraryModule).toBeDefined();
  });
});
