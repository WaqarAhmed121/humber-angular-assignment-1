import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'humber-assignment-1';
  showModal = false;
  
  enterText(event: KeyboardEvent){
    console.log(event.key);
  }

  onCardClick() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
  
}
