import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTermosDeUsoComponent } from './page-termos-de-uso.component';

describe('PageTermosDeUsoComponent', () => {
  let component: PageTermosDeUsoComponent;
  let fixture: ComponentFixture<PageTermosDeUsoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageTermosDeUsoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageTermosDeUsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
