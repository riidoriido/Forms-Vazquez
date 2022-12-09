import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-errorhelper',
  templateUrl: './errorhelper.component.html',
  styleUrls: ['./errorhelper.component.css'],
})
export class ErrorhelperComponent implements OnInit {
  @Input()
  control: FormControl | undefined;

  constructor() {}

  ngOnInit(): void {}
}
