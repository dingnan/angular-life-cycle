import { Component, ContentChild, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {
  @Input() userName: string;
  @ViewChild('viewWrapper') viewWrapper: ElementRef;
  @ContentChild('contentWrapper') content: ElementRef;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    console.log(
      '%cchild  %cngOnChanges',
      'color: green',
      'color: blue',
      changes
    );
  }

  // a better approach
  //@Input() set userName(value: string) { }

  ngOnInit(): void {
    console.log(
      '%cchild  %cngOnInit',
      'color: green',
      'color: orange',
    );
  }


  ngDoCheck() {
    console.log(
      '%cchild  %cngDoCheck',
      'color: green',
      'color: red',
    );
  }

  ngAfterContentInit(): void {
    console.log(
      '%cchild  %cngAfterContentInit',
      'color: green',
      'color: brown',
      'view',
      this.viewWrapper
    );

    console.log(
      '%cchild  %cngAfterContentInit',
      'color: green',
      'color: brown',
      'content',
      this.content
    );
  }

  ngAfterContentChecked(): void {
    console.log(
      '%cchild  %cngAfterContentChecked',
      'color: green',
      'color: blueviolet',
    );
  }

  ngAfterViewInit(): void {
    console.log(
      '%cchild  %cngAfterViewInit',
      'color: green',
      'color: crimson',
      'view',
      this.viewWrapper
    );

    console.log(
      '%cchild  %cngAfterViewInit',
      'color: green',
      'color: crimson',
      'content',
      this.content
    );
  }

  ngAfterViewChecked(): void {
    console.log(
      '%cchild  %cngAfterViewChecked',
      'color: green',
      'color: darkorange',
    );
  }
}
