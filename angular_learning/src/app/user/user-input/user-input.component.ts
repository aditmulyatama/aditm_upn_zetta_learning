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
    Nama: ['', Validators.required, Validators.pattern('^[A-Z, a-z]*$')],
    Umur: [
      '',
      Validators.required,
      Validators.pattern('^[0-9]*$'),
      Validators.min(11),
    ],
    Gender: ['', Validators.required],
    Email: ['', Validators.required, Validators.email],
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
        Alamat: new FormControl(null, Validators.required),
        KodePos: new FormControl(null, Validators.required),
        Kota: new FormControl(null, Validators.required),
        Negara: new FormControl(null, Validators.required),
      })
    );
  }
}
