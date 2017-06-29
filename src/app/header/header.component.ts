import {Component, Output, EventEmitter} from "@angular/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() movetoPage = new EventEmitter<string>();

  onSelect(page: string) {
    this.movetoPage.emit(page);
  }
}
