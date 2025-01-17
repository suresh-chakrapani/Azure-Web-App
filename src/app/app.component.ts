import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  value = 'Suresh';
  http: HttpClient;
  constructor(private httpClient: HttpClient){
    this.http = this.httpClient;
  }

  onSubmit(textVal: string){
    this.value=textVal;

    // this.http.get('https://sureshpocanalyzeimage.azurewebsites.net/api/AnalyzeImage?name=SC')
    //   .subscribe((resp: any) => this.value = resp.text);
  }
}
