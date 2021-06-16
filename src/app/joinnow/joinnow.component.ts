import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-joinnow',
  templateUrl: './joinnow.component.html',
  styleUrls: ['./joinnow.component.css']
})
export class JoinnowComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  register(){
    $(".modal-backdrop").remove();
    this.router.navigate(['/join']);
  }

  join(){
    $(".modal-backdrop").remove();
    this.router.navigate(['/seminar']);
  }

}
