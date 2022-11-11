import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormsModule,
  Validators,
} from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.scss'],
})
export class UserInputComponent implements OnInit {
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
  dataId: any;
  dataNama: any;
  dataUmur: any;
  dataGender: any;
  dataEmail: any;
  dataStatusPernikahan: any;
  dataAlamat: any;
  dataKodePos: any;
  dataKota: any;
  dataNegara: any;
  userForm = this.formBuilder.group({
    Id: ['', Validators.required],
    Nama: ['', Validators.required],
    Umur: ['', Validators.required],
    Gender: [''],
    Email: ['', Validators.required],
    Domisili: ['', Validators.required],
    StatusPernikahan: ['', Validators.required],
    Alamat: ['', Validators.required],
    KodePos: ['', Validators.required],
    Kota: ['', Validators.required],
    Negara: ['', Validators.required],
  });
  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.data = this.dataService.data;
  }

  tambah() {
    this.dataService.addData(this.userForm.value, false);
  }
}
