import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
export interface OptionsFromNX {
  value: string;
  label: string;
  description?: string;
  disabled?: boolean;
  singleAnswer?: boolean;
  checked?: boolean;
}

export interface OptionsTest {
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

  // @ViewChild('slider') slider!: ElementRef
  @Input() disable: boolean | undefined;

  @Input() set fieldOptions(
    options: OptionsFromNX[] | Observable<any[]> | undefined
  ) {
    this.min = 0;
    this.max = this.optionsTest.length - 1;
    const value = this.optionsTest.find((e) => e.checked)?.value;
    this.value = value ? +value : 0;

    // console.log(this.value, 'value')
    // console.log(this.min, 'min')
    // console.log(this.max, 'max')

    if (Array.isArray(options)) {
      // this.value = options.length / 2
    }
  }
  optionsTest: OptionsTest[] = [
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
  selector: any;
  selectValue: any;
  progressBar: any;
  constructor() {}
  ngAfterViewInit(): void {
    // this.slider = document.getElementById('slider')
    this.selector = document.getElementById('selector');
    this.selectValue = document.getElementById('selectValue');
    this.selectValue?.setAttribute('data-content', '0');

    this.progressBar = document.getElementById('progressBar');
    const max = this.max == 1 ? 2 : this.max;
    // const value = this.max == 1 && this.value ==
    this.progressBar.style.width = (100 / max) * +this.value + '%';
    this.selector.style.left = (100 / max) * +this.value + '%';
    console.log(this.value, 'value');
    console.log(this.max, 'max');
    console.log((100 / max) * +this.value + '%');
    // if (slider && selector && progressBar) {
    //     console.log(this.value, 'eee')
    //     slider.oninput = function () {
    //         selectValue?.setAttribute('data-content', this?.value)
    //         const max = 4
    //         selector.style.left = (100 / max) * this.value + '%'
    //         progressBar.style.width = (100 / max) * this.value + '%'
    //     }
    // }

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
    }, 4000);
  }

  onInput(v: any) {
    this.selectValue?.setAttribute('data-content', +v.target.value);

    this.selector.style.left = (100 / this.max) * +v.target.value + '%';
    this.progressBar.style.width = (100 / this.max) * +v.target.value + '%';
  }
}
