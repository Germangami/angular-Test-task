import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TableData } from '../models/tableData';
import { TableDataService } from '../services/table-data.service';

@Component({
  selector: 'app-table-page',
  templateUrl: './table-page.component.html',
  styleUrls: ['./table-page.component.scss']
})
export class TablePageComponent implements OnInit {
  tableData: TableData[] = [];

  constructor(private tableDataService: TableDataService, private router: Router) { }

  ngOnInit() {
    this.tableData = this.tableDataService.getTableData();
  }

  edit(item: TableData): void {
    this.router.navigate(['/detail', item.id]);
  }

  exportTableData(): void {
    this.tableDataService.setExprortData(this.tableData);
    this.router.navigate(['/dashboard']);
  }
}
