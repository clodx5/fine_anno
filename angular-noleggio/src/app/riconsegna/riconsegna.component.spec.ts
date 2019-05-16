import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiconsegnaComponent } from './riconsegna.component';

describe('RiconsegnaComponent', () => {
  let component: RiconsegnaComponent;
  let fixture: ComponentFixture<RiconsegnaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiconsegnaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiconsegnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
