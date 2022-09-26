import { Component, OnInit } from "@angular/core";
import { Week, Months } from "@core/models";
import { WeeksService } from "@core/services";
import { SnackbarService } from "@shared/services";

@Component({
  selector: 'app-turnip',
  templateUrl: './turnip.component.html',
  styleUrls: ['./turnip.component.css']
})
export class TurnipComponent implements OnInit {

  dateAchat = new Date();
  week: Week;
  Months: Months;

  constructor(
    private snackbarService: SnackbarService,
    private turnipsService: WeeksService
  ) {
    this.dateAchat = new Date();
    this.setToLastSunday(this.dateAchat);
  }

  setToLastSunday(d) {
    return d.setDate(d.getDate() - d.getDay());
  }

  ngOnInit(): void {
    this.turnipsService.find('mrkelisi', this.dateAchat)
      .then(week => this.week = week)
      .catch(error => this.snackbarService.error(error));
  }

}
