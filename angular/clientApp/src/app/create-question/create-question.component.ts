import { Component, OnInit } from '@angular/core';
import {AdminService} from '../admin.service';

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.css']
})
export class CreateQuestionComponent implements OnInit {

  constructor(private adminService: AdminService) { }
  data: any;
  questions: any;
  ngOnInit() {
    this.adminService
      .getQuestions()
      .subscribe((response: Response) => {
        this.data = response;
        this.questions = this.data.data;
        console.log(this.questions);
      });
  }

}
