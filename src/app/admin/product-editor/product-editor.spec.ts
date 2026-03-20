import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductEditor } from './product-editor';

describe('ProductEditor', () => {
  let component: ProductEditor;
  let fixture: ComponentFixture<ProductEditor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductEditor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductEditor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
