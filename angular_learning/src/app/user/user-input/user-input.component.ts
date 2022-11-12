import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormsModule,
  Validators,
  FormGroup,
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

  userForm = this.formBuilder.group({
    Id: ['', Validators.required],
    Nama: ['', Validators.required],
    Umur: ['', Validators.required],
    Gender: [''],
    Email: ['', Validators.required],
    Domisili: ['', Validators.required],
    StatusPernikahan: ['', Validators.required],
    dataAlamat: new FormArray([]),
    KodePos: ['', Validators.required],
    Kota: ['', Validators.required],
    Negara: ['', Validators.required],
  });
  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private activatedRoute: ActivatedRoute
  ) {}
  tambahAlamat: any = (<FormArray>this.userForm.get('dataAlamat')).controls;

  ngOnInit(): void {
    this.data = this.dataService.data;
  }

  tambah() {
    this.dataService.addData(this.userForm.value, false);
  }
  tambahAlamatBaru() {
    (<FormArray>this.userForm.get('dataAlamat')).push(
      new FormGroup({
        Alamat: new FormControl(null),
        KodePos: new FormControl(null),
        Kota: new FormControl(null),
        Negara: new FormControl(null),
      })
    );
  }
}
