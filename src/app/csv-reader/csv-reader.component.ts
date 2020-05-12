import { Component, OnInit, ViewChild } from '@angular/core';
import { CSVRecord } from './CSVModel';

@Component({
  selector: 'app-csv-reader',
  templateUrl: './csv-reader.component.html',
  styleUrls: ['./csv-reader.component.css']
})
export class CsvReaderComponent implements OnInit {
  public records: any[] = [];
  @ViewChild('csvReader') csvReader: any;
  uploadListener($event: any): void {
    let files = $event.srcElement.files;
    if (this.isValidCSVFile(files[0])) {
      let input = $event.target;
      let reader = new FileReader();
      reader.readAsText(input.files[0]);
      reader.onload = () => {
        let csvData = reader.result;
        let csvRecordsArray = (<string>csvData).split(/\r\n|\n/);
        let headersRow = this.getHeaderArray(csvRecordsArray);
        this.records = this.getDataRecordsArrayFromCSVFile(csvRecordsArray, headersRow.length);
      };
      reader.onerror = function () {
        console.log('error is occured while reading file!');
      };
    } else {
      alert("Please import valid .csv file.");
      this.fileReset();
    }
  }
  getDataRecordsArrayFromCSVFile(csvRecordsArray: any, headerLength: any) {
    let csvArr = [];
    for (let i = 1; i < csvRecordsArray.length; i++) {
      let curruntRecord = (<string>csvRecordsArray[i]).split(',');
      if (curruntRecord.length == headerLength) {
        let csvRecord: CSVRecord = new CSVRecord();
        csvRecord.customerNumber = curruntRecord[0].trim();
        csvRecord.clientNature = curruntRecord[1].trim();
        csvRecord.customerName = curruntRecord[2].trim();
        csvRecord.gender = curruntRecord[3].trim();
        csvRecord.birthDate = curruntRecord[4].trim();
        csvRecord.maritalStatus = curruntRecord[5].trim();
        csvRecord.idType = curruntRecord[6].trim();
        csvRecord.idNumber = curruntRecord[7].trim();
        csvRecord.spauseName = curruntRecord[8].trim();
        csvRecord.residentialAdress = curruntRecord[9].trim();
        csvRecord.clientPhoneNumber = curruntRecord[10].trim();
        csvRecord.spausePhoneNumber = curruntRecord[11].trim();
        csvRecord.businessType = curruntRecord[12].trim();
        csvRecord.businessLocation = curruntRecord[13].trim();
        csvRecord.loanStatus = curruntRecord[14].trim();
        csvArr.push(csvRecord);
      }
    }
    return csvArr;
  }
  isValidCSVFile(file: any) {
    return file.name.endsWith(".csv");
  }
  getHeaderArray(csvRecordsArr: any) {
    let headers = (<string>csvRecordsArr[0]).split(',');
    let headerArray = [];
    for (let j = 0; j < headers.length; j++) {
      headerArray.push(headers[j]);
    }
    return headerArray;
  }
  fileReset() {
    this.csvReader.nativeElement.value = "";
    this.records = [];
  }

  constructor() { }

  ngOnInit(): void {
  }

}
