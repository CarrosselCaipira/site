import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExMembrosComponent } from './ex-membros.component';

describe('ExMembrosComponent', () => {
  let component: ExMembrosComponent;
  let fixture: ComponentFixture<ExMembrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExMembrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExMembrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
