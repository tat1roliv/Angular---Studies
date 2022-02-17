import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoTesteComponent } from './botao-teste.component';

describe('BotaoTesteComponent', () => {
  let component: BotaoTesteComponent;
  let fixture: ComponentFixture<BotaoTesteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotaoTesteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotaoTesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
