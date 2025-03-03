import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongsBookGridComponent } from './songs-book-grid.component';

describe('SongsBookGridComponent', () => {
  let component: SongsBookGridComponent;
  let fixture: ComponentFixture<SongsBookGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SongsBookGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SongsBookGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
