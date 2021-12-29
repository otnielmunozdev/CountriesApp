import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalLocationEpisodeComponent } from './modal-location-episode.component';

describe('ModalLocationEpisodeComponent', () => {
  let component: ModalLocationEpisodeComponent;
  let fixture: ComponentFixture<ModalLocationEpisodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalLocationEpisodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalLocationEpisodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
