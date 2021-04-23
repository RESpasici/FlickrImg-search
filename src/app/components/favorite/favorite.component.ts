import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FavoriteList } from 'src/app/models/favorite-list';
import { Photo } from 'src/app/models/photo';
import { AppState } from 'src/app/reducers/app-state';
import { listsSelector } from 'src/app/selectors/favorite.selectors';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.sass']
})
export class FavoriteComponent {

  public favoriteLists$: Observable<FavoriteList[]>;

  constructor(private store$: Store<AppState>,
    private sanitizer: DomSanitizer
  ) {
    this.favoriteLists$ = this.store$.select(listsSelector);
  }

  handleFocusPhoto(photo: Photo): void {
    window.open(photo.url_q, "_blank");
  }

}
