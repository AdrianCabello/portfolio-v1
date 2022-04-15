import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  portfolios= [
    {
      id: 1,
      title: 'Comudy',
      github: 'githubcom',
      web: 'comudy.com',
      img: '../../../assets/portfolio1.jpg'
    },
    {
      id: 1,
      title: 'Comudy',
      github: 'githubcom',
      web: 'comudy.com',
      img: '../../../assets/portfolio1.jpg'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
