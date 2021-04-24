import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FavoriteListDialogComponent } from './components/favorite-list-dialog/favorite-list-dialog.component';
import { FavoriteManageDialogComponent } from './components/favorite-manage-dialog/favorite-manage-dialog.component';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { PhotoDisplayComponent } from './components/photo-display/photo-display.component';
import { PhotoListComponent } from './components/photo-list/photo-list.component';
import { SearchComponent } from './components/search/search.component';
import { PhotosEffects } from './effects/photos.effects';
import { reducers } from './reducers/app-state';
import { FlickrService } from './services/flickr.service';

@NgModule({
  declarations: [
    AppComponent,
    FavoriteComponent,
    SearchComponent,
    PhotoDisplayComponent,
    PhotoListComponent,
    FavoriteListDialogComponent,
    FavoriteManageDialogComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      },
    }),
    EffectsModule.forRoot([PhotosEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    NoopAnimationsModule,
    MatSidenavModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatSelectModule,
    MatDividerModule
  ],
  providers: [FlickrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
