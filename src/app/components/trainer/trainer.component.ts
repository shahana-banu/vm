
import { Component, OnInit } from '@angular/core';
import {TrainerService} from './trainer.service';
import {Trainer} from './trainer.interface';


@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})

export class TrainerComponent implements OnInit {

  trainer: Trainer = {
    user_Id: '',
    user_Name: '',
    first_Name: '',
    last_Name: '',
    email: '',
    Discription: '',
  };

  constructor(private trainerService: TrainerService) { }

  ngOnInit() {
  }

  createTrainer(data: Trainer) {
    this.trainerService.createTrainer(data);
  }

}




  



 

