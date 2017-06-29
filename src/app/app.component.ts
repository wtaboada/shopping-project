import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  currentPage: string = 'Recipe';

  changePage(newPage: string){
    this.currentPage = newPage;
  }
}
