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
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

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
  status: any;
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
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}
  tambahAlamat: any = (<FormArray>this.userForm.get('dataAlamat')).controls;

  ngOnInit(): void {
    this.data = this.dataService.data;
    this.userForm.statusChanges.subscribe((change) => {
      this.status = change;
      console.log(this.status);
    });
  }

  tambah() {
    if (this.status == 'INVALID') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Data tidak Valid',
      });
    } else {
      Swal.fire('New data has been added!');
      this.dataService.addData(this.userForm.value, false);

      setTimeout(() => {
        this.router.navigate(['/users/user-list']);
      }, 500);
    }
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
