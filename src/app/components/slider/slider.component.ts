import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';

export interface Options {
  value: string;
  label: string;
  description?: string;
  disabled?: boolean;
  singleAnswer?: boolean;
  checked?: boolean;
}

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent {
  @ViewChild('ngxsliderhandle', { static: false }) divHello!: ElementRef;

  @ViewChild('selector') selector!: ElementRef;
  @ViewChild('selectValue') selectValue!: ElementRef;
  @ViewChild('progressBar') progressBar!: ElementRef;

  @Input() disable: boolean | undefined;

  @Input() set fieldOptions(
    options: Options[] | Observable<any[]> | undefined
  ) {
    this.min = 0;
    this.max = this.optionsTest.length - 1;
    const value = this.optionsTest.find((e) => e.checked)?.value;
    this.value = value ? +value : 0;
  }
  optionsTest: Options[] = [
    {
      value: '0',
      label: 'morning',
      description: 'morning descr',
      disabled: false,
      singleAnswer: false,
      checked: false,
    },

    {
      value: '1',
      label: 'morning',
      description: 'morning descr',
      disabled: false,
      singleAnswer: false,
      checked: true,
    },
  ];
  value = 0;
  min = 0;
  max = 5;
  @Input() label: string | undefined;

  constructor() {}
  ngAfterViewInit(): void {
    this.setSliderConfigs();
    setTimeout(() => {
      this.optionsTest.push({
        value: '3',
        label: 'night',
        description: 'night descr',
        disabled: false,
        singleAnswer: false,
        checked: false,
      });
      console.log(this.optionsTest, 'optionsTest');
      this.min = 0;
      this.max = this.optionsTest.length - 1;
      const value = this.optionsTest.find((e) => e.checked)?.value;
      this.value = value ? +value : 0;
      this.setSliderConfigs();
    }, 4000);
  }

  setSliderConfigs() {
    this.selectValue.nativeElement.setAttribute('data-content', '0');
    const max = this.max == 1 ? 2 : this.max;
    this.progressBar.nativeElement.style.width =
      (100 / max) * +this.value + '%';
    this.selector.nativeElement.style.left = (100 / max) * +this.value + '%';
  }

  onInput(v: any) {
    this.selectValue.nativeElement.setAttribute(
      'data-content',
      +v.target.value
    );

    this.selector.nativeElement.style.left =
      (100 / this.max) * +v.target.value + '%';
    this.progressBar.nativeElement.style.width =
      (100 / this.max) * +v.target.value + '%';
  }
}
