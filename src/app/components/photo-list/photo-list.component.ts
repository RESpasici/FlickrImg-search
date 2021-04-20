import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Photo } from 'src/app/models/photo';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.sass']
})
export class PhotoListComponent {

  @Input()
  public photos: Photo[] = [];

  @Output()
  public focusPhoto = new EventEmitter<Photo>();

  public photoClick(event: Event, photo: Photo): void {
    event.preventDefault();
    if (photo) {
      this.focusPhoto.emit(photo);
    }
  }

}
