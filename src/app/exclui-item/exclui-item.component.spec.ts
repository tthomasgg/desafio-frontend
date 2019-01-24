import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluiItemComponent } from './exclui-item.component';

describe('ExcluiItemComponent', () => {
  let component: ExcluiItemComponent;
  let fixture: ComponentFixture<ExcluiItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcluiItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcluiItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
