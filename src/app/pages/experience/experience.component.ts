import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  experience;

  experiences = [
    {
      'id': 1,
      company: 'Spark Digital',
      title: 'Senior Frontend Developer',
      start: 'Sept. 2021',
      end: 'Currently',
      info: 'lorem asd awlpd awlf[wp law[epwad apw[dwa p[dlaw[plf gfaw gawdawd',
      items: [{
        text: 'Bla bla bla'
      }, {
        text: 'Bla bla bla'
      }, {
        text: 'Bla bla bla'
      },]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
