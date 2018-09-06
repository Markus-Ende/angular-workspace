import { async, TestBed } from '@angular/core/testing';
import { NgPactModule } from './ng-pact.module';

describe('NgPactModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgPactModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(NgPactModule).toBeDefined();
  });
});
