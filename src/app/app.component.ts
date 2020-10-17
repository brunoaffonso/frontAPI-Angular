import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'frontApi';

  names = [];

  constructor(private api: ApiService) {
    this.getNames();
  }

  getNames = () => {
    this.api.getAllNames().subscribe(
      (data) => {
        this.names = data;
      },
      (error) => {
        console.log('Algo deu errado!', error.message);
      }
    );
  };

  nameClicked = (name) => {
    this.api.getName(name.id).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log('Algo deu errado!', error.message);
      }
    );
  };
}
