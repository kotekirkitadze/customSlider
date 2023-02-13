import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'customSlider';

  options: any[] = [
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
      label: 'afternoon',
      description: 'afternoon descr',
      disabled: false,
      singleAnswer: false,
      checked: false,
    },
    {
      value: '2',
      label: 'night',
      description: 'night descr',
      disabled: false,
      singleAnswer: false,
      checked: true,
    },
  ];

  addOptions() {
    this.options = [
      ...this.options,
      {
        value: this.options.length + '',
        label: 'ddd',
        description: 'nddr',
        disabled: false,
        singleAnswer: false,
        checked: false,
      },
    ];
    // this.options.push({
    //   value: this.options.length + '',
    //   label: 'ddd',
    //   description: 'nddr',
    //   disabled: false,
    //   singleAnswer: false,
    //   checked: false,
    // });
    // console.log(this.options);
  }
}
