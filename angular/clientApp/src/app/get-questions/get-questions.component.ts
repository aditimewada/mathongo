import { Component, OnInit } from '@angular/core';
import {AdminService} from '../admin.service';

@Component({
  selector: 'app-get-questions',
  templateUrl: './get-questions.component.html',
  styleUrls: ['./get-questions.component.css']
})
export class GetQuestionsComponent implements OnInit {

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
