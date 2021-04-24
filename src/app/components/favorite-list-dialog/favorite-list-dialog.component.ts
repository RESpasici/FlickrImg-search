import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FavoriteList } from 'src/app/models/favorite-list';
import { Photo } from 'src/app/models/photo';
import { AppState } from 'src/app/reducers/app-state';
import { listsSelector } from 'src/app/selectors/favorite.selectors';

@Component({
  selector: 'app-favorite-list-dialog',
  templateUrl: './favorite-list-dialog.component.html',
  styleUrls: ['./favorite-list-dialog.component.sass']
})
export class FavoriteListDialogComponent {
  public selectedValue: number | undefined;
  public newValueName: string | undefined;
  public newValueDescription: string | undefined;
  public favoriteLists$: Observable<FavoriteList[]>;
  public favoriteList: FavoriteList[] | undefined;

  constructor(
    private store$: Store<AppState>,
    private dialogRef: MatDialogRef<FavoriteListDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Photo) {
    this.favoriteLists$ = this.store$.select(listsSelector);
    this.favoriteLists$.subscribe(items => this.favoriteList = items);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  newListData(): { name?: string, description?: string } {
    return { name: this.newValueName, description: this.newValueDescription }
  }

  getList(id: number) {
    return this.favoriteList?.find(list => list.id === id);
  }

  preventClose(): boolean {
    return !(!!this.selectedValue || (!!this.newValueName && !!this.newValueDescription))
  }

}
