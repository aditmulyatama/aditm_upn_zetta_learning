import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  data: any[] = [];
  constructor() {}

  addData(dataInput: any) {
    this.data.push(dataInput);
  }
  changeData(param: any) {
    for (let index = 0; index < this.data.length; index++) {
      if (this.data[index].Id == param.Id) {
        (this.data[index].Id = param.Id),
          (this.data[index].Nama = param.Nama),
          (this.data[index].Umur = param.Umur),
          (this.data[index].Gender = param.Gender),
          (this.data[index].Email = param.Email),
          (this.data[index].Domisili = param.Domisili),
          (this.data[index].StatusPernikahan = param.StatusPernikahan),
          (this.data[index].Alamat = param.Alamat),
          (this.data[index].KodePos = param.KodePos),
          (this.data[index].Kota = param.Kota),
          (this.data[index].Negara = param.Negara);
      }
    }
  }
}
