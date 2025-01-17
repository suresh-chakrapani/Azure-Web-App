import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  value = 'Suresh';
  http: HttpClient = null;
  constructor(private tmphttp: HttpClient){
    this.http = this.tmphttp;
  }

  onSubmit(textVal: string){
    this.value=textVal;

    this.http.get('https://sureshpocanalyzeimage.azurewebsites.net/api/AnalyzeImage?name=' + textVal )
      .subscribe((resp: any) => this.value = resp.text);
  }
}
