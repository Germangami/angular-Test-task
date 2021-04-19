import { Injectable } from '@angular/core';
import { TableData } from '../models/tableData';

@Injectable({ providedIn: 'root' })
export class TableDataService {

  private tableData: TableData[] = [];
  private exportTableData: string = '';

  constructor() { }

  getTableData(): TableData[] {
    return this.tableData;
  }

  getExprortData(): string {
    return this.exportTableData;
  }

  setExprortData(tableData: TableData[]): void {
    this.exportTableData = JSON.stringify(tableData.map(item => item.value));
  }

  getTableDataElemetnById(id: number): TableData {
    return this.tableData.find(item => item.id === id) as TableData;
  }

  setTableData(tableParsData: string): void {
    const tableData: any[] = JSON.parse(tableParsData);

    if (Array.isArray(tableData)) {
      this.tableData = tableData.map((item, index) => {
        return { id: index, value: item, keys: Object.keys(item) }
      });
    }
  }

  IsJsonString(str: string): boolean {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  }
}
