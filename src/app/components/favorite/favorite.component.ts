import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addList, editList } from 'src/app/actions/favorite.actions';
import { FavoriteList } from 'src/app/models/favorite-list';
import { Photo } from 'src/app/models/photo';
import { AppState } from 'src/app/reducers/app-state';
import { listsSelector } from 'src/app/selectors/favorite.selectors';
import { FavoriteManageDialogComponent } from '../favorite-manage-dialog/favorite-manage-dialog.component';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.sass']
})
export class FavoriteComponent {

  public favoriteLists$: Observable<FavoriteList[]>;

  constructor(private store$: Store<AppState>,
    public dialog: MatDialog,
  ) {
    this.favoriteLists$ = this.store$.select(listsSelector);
  }

  handleFocusPhoto(photo: Photo): void {
    window.open(photo.url_q, "_blank");
  }

  handleListChange(list: FavoriteList | undefined): void {
    const dialogRef = this.dialog.open(FavoriteManageDialogComponent, {
      width: '250px',
      disableClose: true,
      data: list
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        list ? this.updateList(result) : this.createList(result);
      }
    });
  }

  updateList(list: FavoriteList): void {
    this.store$.dispatch(editList({ list }));
  }

  createList(list: FavoriteList): void {
    this.store$.dispatch(addList({ list }));
  }

}
