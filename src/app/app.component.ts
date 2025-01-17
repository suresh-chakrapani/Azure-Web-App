import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  value = 'Suresh';

  onSubmit(textVal: string){
    this.value=textVal;
  }
}
