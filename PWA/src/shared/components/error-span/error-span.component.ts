import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-error-span',
  templateUrl: './error-span.component.html',
  styleUrls: ['./error-span.component.scss']
})
export class ErrorSpanComponent implements OnInit {
  @Input() errorMessage: string = ''
  @Output() isError = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  close(): void {
    this.isError.emit(false);
  }
}
