import {Component, OnInit} from "@angular/core";

@Component({
    selector: "index",
    template: require("./index.component.html"),
    styles: [require("./index.component.scss")]
})

export class IndexComponent implements OnInit{
    constructor() {}

    ngOnInit(): void{

    }
}