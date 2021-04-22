import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/reducers/app-state';
import { Store } from '@ngrx/store';
import { Photo } from 'src/app/models/photo';
import { focusPhoto, search, searchResultsLoaded } from 'src/app/actions/photos.actions';
import { currentPhotoSelector, photosSelector, searchTermSelector } from 'src/app/selectors/photos.selectors';
import { FavoriteList } from 'src/app/models/favorite-list';
import { listsSelector } from 'src/app/selectors/favorite.selectors';
import { MatDialog } from '@angular/material/dialog';
import { FavoriteListDialogComponent } from '../favorite-list-dialog/favorite-list-dialog.component';
import { addList, editList } from 'src/app/actions/favorite.actions';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {

  public searchTerm$: Observable<string>;
  public photos$: Observable<Photo[]>;
  public currentPhoto$: Observable<Photo | null>;
  public favoriteLists$: Observable<FavoriteList[]>;

  constructor(private store$: Store<AppState>,
    public dialog: MatDialog) {
    this.searchTerm$ = this.store$.select(searchTermSelector);
    this.photos$ = this.store$.select(photosSelector);
    this.currentPhoto$ = this.store$.select(currentPhotoSelector);
    this.favoriteLists$ = this.store$.select(listsSelector)
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
    const dialogRef = this.dialog.open(FavoriteListDialogComponent, {
      width: '250px',
      disableClose: true,
      data: photo
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.handlePhotoListSave(result, photo);
      }
    });
  }

  handlePhotoListSave(result: any, photo: Photo) {
    if (result.hasOwnProperty('id')) {
      const appendedPhotos: Photo[] = [...result.photos, photo];
      const list: FavoriteList = { ...result, photos: appendedPhotos };
      this.store$.dispatch(editList({ list }));
    } else {
      const { name, description } = result;
      const list: FavoriteList = { id: 1, name, description, photos: [photo] }
      this.store$.dispatch(addList({ list }));
    }
  }


}
