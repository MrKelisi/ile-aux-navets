import { Component, OnInit } from '@angular/core';
import {Week} from '../_models/week.class';
import {WeeksService} from '../_services/weeks.service';
import {Months} from '../_models/months.enum';

@Component({
  selector: 'app-turnip',
  templateUrl: './turnip.component.html',
  styleUrls: ['./turnip.component.css']
})
export class TurnipComponent implements OnInit {

  dateAchat = new Date();
  week: Week;
  Months: Months;

  constructor(private turnipsService: WeeksService) {
    this.dateAchat = new Date();
    this.setToLastSunday(this.dateAchat);
  }

  setToLastSunday(d) {
    return d.setDate(d.getDate() - d.getDay());
  }

  ngOnInit(): void {
    this.turnipsService.find('mrkelisi', this.dateAchat).subscribe(
      data => {
        this.week = data;
      },
      error => {
        console.log(error);
      },
      () => {}
    );
  }

}
