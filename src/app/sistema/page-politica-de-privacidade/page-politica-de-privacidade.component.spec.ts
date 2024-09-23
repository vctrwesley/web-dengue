import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePoliticaDePrivacidadeComponent } from './page-politica-de-privacidade.component';

describe('PagePoliticaDePrivacidadeComponent', () => {
  let component: PagePoliticaDePrivacidadeComponent;
  let fixture: ComponentFixture<PagePoliticaDePrivacidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PagePoliticaDePrivacidadeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagePoliticaDePrivacidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
