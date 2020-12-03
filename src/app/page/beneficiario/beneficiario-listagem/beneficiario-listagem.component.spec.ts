import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficiarioListagemComponent } from './beneficiario-listagem.component';

describe('BeneficiarioListagemComponent', () => {
  let component: BeneficiarioListagemComponent;
  let fixture: ComponentFixture<BeneficiarioListagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeneficiarioListagemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeneficiarioListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
