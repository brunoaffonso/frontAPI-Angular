import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-name-detail',
  templateUrl: './name-detail.component.html',
  styleUrls: ['./name-detail.component.css'],
})
export class NameDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute, private api: ApiService) {}
  selected_name = [];

  ngOnInit(): void {
    this.loadName();
  }

  loadName() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.api.getName(id).subscribe(
      (data) => {
        console.log(data);
        this.selected_name = data;
      },
      (error) => {
        console.log('Algo deu errado!', error.message);
      }
    );
  }
}
