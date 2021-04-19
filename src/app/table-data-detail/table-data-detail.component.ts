import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TableData } from '../models/tableData';
import { TableDataService } from '../services/table-data.service';

@Component({
  selector: 'app-table-data-detail',
  templateUrl: './table-data-detail.component.html',
  styleUrls: ['./table-data-detail.component.css']
})
export class TableDataDetailComponent implements OnInit {
  tableData: TableData = {} as TableData;

  constructor(
    private route: ActivatedRoute,
    private tableDataService: TableDataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getTableDataItem();
  }

  getTableDataItem(): void {
    const id = this.route.snapshot.paramMap.get('id') as string;
    this.tableData = this.tableDataService.getTableDataElemetnById(+id);
  }

  save(): void {
    this.router.navigate(['/table-page']);
  }
}
