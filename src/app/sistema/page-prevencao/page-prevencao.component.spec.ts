import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePrevencaoComponent } from './page-prevencao.component';

describe('PagePrevencaoComponent', () => {
  let component: PagePrevencaoComponent;
  let fixture: ComponentFixture<PagePrevencaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PagePrevencaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagePrevencaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
