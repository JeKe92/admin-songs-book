import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongsBookHeaderComponent } from './songs-book-header.component';

describe('SongsBookHeaderComponent', () => {
  let component: SongsBookHeaderComponent;
  let fixture: ComponentFixture<SongsBookHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SongsBookHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SongsBookHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
