import { Component, OnInit, Input, ViewEncapsulation, ViewChild, ElementRef, ContentChild, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, AfterContentInit {

  @Input("srvElement") element: {type: string, name: string, content: string};
  @ViewChild("heading", {static: true}) header: ElementRef;
  @ContentChild("contentParagraph", {static: true}) paragraph: ElementRef;

  constructor() {
    console.log("constuctor");
   }

  ngOnInit(): void {
    console.log("ngOnInit");
    console.log("Text Content: " + this.header.nativeElement.textContent);
    console.log("Text Content of paragraph: " + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentInit(){
    console.log("ngOnAfterContentInit");
    console.log("Text Content: " + this.header.nativeElement.textContent);
    console.log("Text Content of paragraph: " + this.paragraph.nativeElement.textContent);
  }

}
