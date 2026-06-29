import { HttpClient } from '@angular/common/http';
import { Component, OnInit, signal } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class AppComponent implements OnInit {

  public forecasts: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
   

    setTimeout(() => {
      this.forecasts = [];
      this.getForecasts();
    }, 2000);

  }
  private getForecasts(): void {

    this.forecasts = [];
    this.http.get<any[]>('/weatherforecast').subscribe({
      next: (result) => {

        debugger;
        this.forecasts = result;

        const logs = JSON.stringify(this.forecasts, null, 2);

        console.log(this.forecasts.length);
        console.log(logs);

      },
      error: (err) => {
        console.error('Error loading forecasts:', err);
        debugger;
        alert(err)

      },
      complete: () => {
        console.log('Request completed.');
      }
    });
  }
}


