import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild,
} from '@angular/core';

@Component({
  selector: 'app-lifecycle-components',
  templateUrl: './lifecycle-components.component.html',
  styleUrls: ['./lifecycle-components.component.scss'],
})
//
export class LifecycleComponentsComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentChecked,
    AfterContentInit,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @ViewChild('header', { static: true }) header: ElementRef;
  @ContentChild('paragraph') paragraph: ElementRef;
  @Input('name') name: string;

  constructor() {
    console.log('constructor called');
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called');
    console.log(changes);
  }
  ngOnInit(): void {
    console.log('ngOnInit called');
  }

  ngDoCheck() {
    console.log('ngDoChek called');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called');
    console.log('text paragraph : ' + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called');
    console.log('text content : ' + this.header.nativeElement.textContent);
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy Called');
  }
}
