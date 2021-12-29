import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalLocationEpisodeComponent } from '@app/components/modal-location-episode/modal-location-episode.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AppState } from '@app/classes/appState.class';
import { Store } from '@ngrx/store';
import { ClickFilterAction } from '@app/components/counter.actions';




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router,
              private bsModal:NgbModal,
              private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  goHome(){
    this.router.navigate(['/home']);
  }

  modalOpen(){
    const action = new ClickFilterAction();
    this.store.dispatch(action)
    this.bsModal.open(
      ModalLocationEpisodeComponent
    );
  }

}
