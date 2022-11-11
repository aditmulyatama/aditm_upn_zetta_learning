import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.scss'],
})
export class UserInputComponent implements OnInit {
  data: any[] = [];
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
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.data = this.dataService.data;
  }

  tambah() {
    this.dataService.addData(this.userForm.value, false);
  }
}
