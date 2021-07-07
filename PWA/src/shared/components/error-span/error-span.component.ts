import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-span',
  templateUrl: './error-span.component.html',
  styleUrls: ['./error-span.component.scss']
})
export class ErrorSpanComponent implements OnInit {
  @Input() errorMessage: String = ''

  constructor() { }

  ngOnInit(): void {
  }

}
