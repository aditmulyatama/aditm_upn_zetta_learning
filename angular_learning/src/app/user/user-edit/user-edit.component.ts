import {
  Component,
  OnInit,
  OnChanges,
  SimpleChanges,
  DoCheck,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormsModule,
  Validators,
} from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss'],
})
export class UserEditComponent implements OnInit, OnChanges, DoCheck {
  data: {
    Id: any;
    Nama: any;
    Umur: FormControl;
    Gender: FormControl;
    Email: FormControl;
    Domisili: FormControl;
    StatusPernikahan: FormControl;
    Alamat: FormControl;
    KodePos: FormControl;
    Kota: FormControl;
    Negara: FormControl;
  }[] = this.dataService.data;
  hasil: any[] = [];
  dataId: any = this.activatedRoute.snapshot.paramMap.get('id');
  userForm = this.formBuilder.group({
    Id: [this.dataId, Validators.required],
    Nama: ['', Validators.required],
    Umur: ['', Validators.required],
    Gender: [''],
    Email: ['', Validators.required, Validators.email],
    Domisili: ['', Validators.required],
    StatusPernikahan: ['', Validators.required],
    Alamat: ['', Validators.required],
    KodePos: ['', Validators.required, Validators.minLength(5)],
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
    this.dataId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log(this.dataId);
  }
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
  }
  ngDoCheck(): void {}
  editData() {
    this.dataService.changeData(this.userForm.value);
  }
}
