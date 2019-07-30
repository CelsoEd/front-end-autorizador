import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaTodosComponent } from './busca-todos.component';

describe('BuscaTodosComponent', () => {
  let component: BuscaTodosComponent;
  let fixture: ComponentFixture<BuscaTodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscaTodosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscaTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
