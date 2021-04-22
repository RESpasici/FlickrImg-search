import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/reducers/app-state';
import { select, Store } from '@ngrx/store';
import { Photo } from 'src/app/models/photo';
import { focusPhoto, search, searchResultsLoaded } from 'src/app/actions/photos.actions';
import { currentPhotoSelector, photosSelector, searchTermSelector } from 'src/app/selectors/photos.selectors';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {

  public searchTerm$: Observable<string>;
  public photos$: Observable<Photo[]>;
  public currentPhoto$: Observable<Photo | null>;

  constructor(private store$: Store<AppState>) {
    this.searchTerm$ = this.store$.pipe(select(searchTermSelector));
    this.photos$ = this.store$.pipe(select(photosSelector));
    this.currentPhoto$ = this.store$.pipe(select(currentPhotoSelector));
  }

  ngOnInit(): void {
  }

  onSearchChange(searchValue: Event): void {
    const target = searchValue.target as HTMLInputElement;
    if (target && target.value.length >= 3) {
      this.handleSearch(target.value)
    }
    else {
      this.clearPhotoList();
    };
  }

  handleSearch(searchTerm: string): void {
    this.store$.dispatch(search({ searchTerm }));
  }

  handleFocusPhoto(photo: Photo): void {
    this.store$.dispatch(focusPhoto({ photo }));
  }

  clearPhotoList(): void {
    const photos: Photo[] = []
    this.store$.dispatch(searchResultsLoaded({ photos }));
  }

  handleSavePhoto(photo: Photo): void {
    console.log(photo);
  }
}
