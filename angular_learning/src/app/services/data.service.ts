import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  data: {
    Id: FormControl<number>;
    Nama: FormControl;
    Umur: FormControl;
    Gender: FormControl;
    Email: FormControl;
    Domisili: FormControl;
    StatusPernikahan: FormControl;
    Alamat: FormControl;
    KodePos: FormControl;
    Kota: FormControl;
    Negara: FormControl;
  }[] = [];
  constructor() {}
  detail: boolean[] = [];
  addData(dataInput: any, detail: boolean) {
    this.data.push(dataInput);
    this.detail.push(detail);
  }

  getData(index: number) {}
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
