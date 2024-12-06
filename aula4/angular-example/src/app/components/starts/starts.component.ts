import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-starts',
  imports: [MatIcon],
  templateUrl: './starts.component.html',
  styleUrl: './starts.component.css'
})
export class StartsComponent implements OnInit, OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    this.updateStarts();
  }
  ngOnInit(): void {
    this.updateStarts();
  }

  @Input() starts: number = 0;
  startsArray: number[] = [];

  updateStarts(){
    this.startsArray = [];
    for(let i = 0; i < this.starts; i++){
      this.startsArray.push(i);
    }
  }
}
