import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaTweakComponent } from './idea.tweak.component';

describe('IdeaTweakComponent', () => {
  let component: IdeaTweakComponent;
  let fixture: ComponentFixture<IdeaTweakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IdeaTweakComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IdeaTweakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
