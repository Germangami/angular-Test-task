import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TableDataService } from '../services/table-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  parsData: string = '';

  constructor(private tableDataService: TableDataService, private router: Router) { }

  ngOnInit(): void {
    this.parsData = this.tableDataService.getExprortData();
  }

  parsingInputData(): void {
    if (this.tableDataService.IsJsonString(this.parsData)) {
      this.tableDataService.setTableData(this.parsData);
      this.router.navigate(['/table-page']);
    }
  }
}
