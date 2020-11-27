import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseRelaContasComponent } from './base-rela-contas.component';

describe('BaseRelaContasComponent', () => {
  let component: BaseRelaContasComponent;
  let fixture: ComponentFixture<BaseRelaContasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseRelaContasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseRelaContasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
