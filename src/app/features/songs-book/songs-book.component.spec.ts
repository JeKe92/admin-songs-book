import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongsBookComponent } from './songs-book.component';

describe('SongsBookComponent', () => {
  let component: SongsBookComponent;
  let fixture: ComponentFixture<SongsBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SongsBookComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SongsBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
