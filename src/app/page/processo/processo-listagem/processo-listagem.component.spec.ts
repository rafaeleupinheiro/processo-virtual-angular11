import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessoListagemComponent } from './processo-listagem.component';

describe('ProcessoListagemComponent', () => {
  let component: ProcessoListagemComponent;
  let fixture: ComponentFixture<ProcessoListagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessoListagemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessoListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
