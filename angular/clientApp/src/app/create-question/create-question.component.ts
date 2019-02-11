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
  noOfOptions: number;
  options:any = [];
  single:boolean = true;
  public text : string = "";
  types = [
    { id: 1, name: 'single answer' ,check:''},
    { id: 2, name: 'multiple answer' ,check:''}
  ];
  answer:any = [];
  question = {
    'questionText': null,
    'questionType': null,
    'options':[],
    'correctOption': [],
    'solution': null,
    'difficulty': null
  }
  selectedAnswer : boolean[] = [];
  ngOnInit() {
    
  }

  questionTypeFunct(index){
    this.types = [
    { id: 1, name: 'single answer' ,check:''},
    { id: 2, name: 'multiple answer' ,check:''}
  ];
    this.types[index].check = 'checked';
    this.question.questionType = this.types[index].name;
    console.log(index);
    if(index == 0){
    this.single = true;
    this.selectedAnswer = [];
    }
    else{
    this.single = false;
    this.selectedAnswer = [];
    }
  }

  numOptions(){
    this.options = [];
    console.log(this.noOfOptions);
    for(let i = 0; i < this.noOfOptions; i++)
    this.options.push(''); 
    console.log(this.options);
  }

  singleAnswer(index){
    this.answer = [];
    this.selectedAnswer = [];
    this.selectedAnswer[index] = true;
    this.answer.push(index+1);
    console.log(this.single);
  }

  multipleAnswers(index){
    this.answer.push(index+1);
    console.log(this.single);
  }

  submit(){
    this.question.correctOption = this.answer;
    console.log(this.question);
    this.adminService.addQuestion(this.question).subscribe(res => {
      this.data = res;
      console.log(this.data);
    });
  }

}
