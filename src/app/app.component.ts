import { Component, OnInit, VERSION } from '@angular/core';
import { GetDataService } from './get-data.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  public cardData: any;
  public searchString: string;
  public renderList = [];
  public dataFound = true;
  constructor(private getData: GetDataService) {}

  public ngOnInit(): void {
    this.getData.getDataForCards().subscribe((data) => {
      this.cardData = data;
      this.cardData.forEach((data) => {
        this.renderList.push(data);
      });
    });
  }

  public search() {
    let data = this.cardData.find((data) => {
      if (
        this.searchString === data.id.toString() ||
        this.searchString === data.name ||
        this.searchString === data.email ||
        this.searchString === data.gender ||
        this.searchString === data.status
      ) {
        return data;
      }
    });
    this.renderList = [];
    if (data) {
      this.dataFound = true;
      this.renderList.push(data);
    } else {
      this.dataFound = false;
    }
  }
}
