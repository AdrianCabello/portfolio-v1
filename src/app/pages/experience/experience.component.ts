import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ExperienceComponent implements OnInit {

  mobile = true;

  experience = {
    id: 1,
    company: 'Spark Digital',
    title: 'Senior Frontend Developer',
    start: 'Sept. 2021',
    end: 'Currently',
    info: 'We design and engineer people-centric products that spark excitement, transform businesses and change the world for the better.',
    web: 'https://intive.com/',
    client: [{
      name: '',
      info: '',
      text: '',
      web: '',
      items: [
      ]
    }]
  }

  experiences = [
    {
      id: 1,
      company: 'Spark Digital',
      title: 'Senior Frontend Developer',
      start: 'Sept. 2021',
      end: 'Currently',
      info: 'Transformative solutions that propel businesses are not made in a vacuum. Our approach takes the stress out of building exceptional software.',
      web: 'https://intive.com/',
      client: [{
        name: '',
        info: '',
        text: '',
        items: [
        ]
      }]
    }, {
      id: 2,
      company: 'Cognizant Softvision',
      title: 'Senior Frontend Developer',
      start: 'March, 2021',
      end: 'August, 2021',
      info: 'Cognizant Softvision designed and built a patient-facing website for Kaiser that improves the patient experience',
      web: 'https://www.cognizantsoftvision.com/',
      client: [{
        name: 'EY | Global Tax',
        info: 'Multinational organizations need access to real-time global data that offers clear insights into opportunities, obligations and risks. The EY Global Tax Platform (GTP) redefines how tax operates, offering an innovative end-to-end platform that supports all your tax business solutions.',
        text: 'Developed new functionalities',
        web: 'https://www.ey.com/es_ar',
        items: [
          { text: 'Developed new functionalities' },
          { text: 'Refactored and optimized existing functionalitie' },
          { text: 'Kept an 80% unit test coverage over new and refactored code' },
          { text: 'Delivery included: Angular 11, Jasmine, HTML5, CSS3, SASS, RESTful service' },
        ]
      }],
    },
    {
      id: 3,
      company: 'Prokarma',
      title: 'Semi-Sr Frontend Developer',
      start: 'July, 2019',
      end: 'February, 2021',
      info: 'PK and Tigerspike are now Concentrix Catalyst. We are the experience design and engineering team of Concentrix, a leading global solutions company that reimagines everything CX.',
      web: 'https://catalyst.concentrix.com/',
      client: [{
        name: 'Symplr | Cactus 5',
        info: 'Comprehensive healthcare governance, risk management, and compliance. Power organization-wide healthcare GRC with solutions tailored to achieve your key outcomes.',
        text: 'Developed new functionalities',
        web: 'https://www.symplr.com/',
        items: [
          { text: 'New functionalities' },
          { text: 'Forms to Admin (Users, Insumes, Events, Providers)' },
          { text: 'Summary profiles' },
          { text: 'Modals' },
          { text: 'Kept an 80% unit test coverage over new and refactored code' },
          { text: 'Delivery included: Angular 9, Jasmine, HTML5, CSS3, SASS, RESTful service' },
        ]
      }]
    },
    {
      id: 4,
      company: 'Parabolt',
      title: 'Semi-Sr Frontend Developer',
      start: 'July, 2018',
      end: 'June, 2019',
      info: 'We are building an entrepreneurial ecosystem with universities, research institutes, venture capital firms, government agencies and startups. This ecosystem nurtures the business portfolios, using collaborative platforms and incorporating talent and skills in an agile way.',
      web: '',
      client: [{
        name: 'Commodity Finance',
        info: 'Secure inventory loan processing that connects lenders and merchants based on digital documentation facilitating the origination, servicing and distribution of commodity inventory financings.',
        web: '',
        items: [
          { text: 'Login with Redux & LocalStorage' },
          { text: 'Register' },
          { text: 'Navigation with router & lazyLoad' },
          { text: 'Interface with Angular Material' },
          { text: 'Responsive Interface' },
          { text: 'Modals' },
          { text: 'Role system' },
          { text: 'User Summary Profile' },
          { text: 'User Edit Profile' },
          { text: 'Item list with filter and pagination' },
          { text: 'Forms to negotiation (Create, Update, Delete)' },
          { text: 'Chat between companies' },
          { text: 'Google Analytics' },
          { text: 'Kept an 80% unit test coverage over new and refactored code' },
          { text: 'Delivery included: Angular 7, Jasmine, HTML5, CSS3, SASS, RESTful service' },

        ]
      }]
    },
    {
      id: 5,
      company: 'Temperies',
      title: 'Semi-Sr Frontend Developer',
      start: 'November, 2018',
      end: 'June, 2018',
      info: 'Temperies is an Information Technology company specialized in software development, delivering innovate software products focused on usability, scalability and availability.',
      web: 'http://temperies.com/',
      client: [{
        name: 'Motiv',
        info: "Administration and organization tool that covers the different aspects related to a company's employees, developed by modules, such as benefits administration, intranet, training, intelligent reports, profiles and surveys.",
        web: '',
        items: [
          { text: 'Login' },
          { text: 'Register' },
          { text: 'Responsive Interface' },
          { text: 'Modals' },
          { text: 'Wallet functionality' },
          { text: 'Awards functionality' },
          { text: 'Role system' },
          { text: 'Item list with filter and pagination' },
          { text: 'Delivery included: AngularJS, HTML5, CSS3, SASS, RESTful service' },

        ]
      },
      {
        name: 'Stem',
        info: "Allows you to manage and track travel, consumption and reports for employees.",
        web: '',
        items: [
          { text: 'Login' },
          { text: 'Register' },
          { text: 'Responsive Interface' },
          { text: 'Modals' },
          { text: 'Wallet functionality' },
          { text: 'Travels functionality' },
          { text: 'Item list with filter and pagination' },
          { text: 'Delivery included: AngularJS, HTML5, CSS3, SASS, RESTful service' },
        ]
      }
      ]
    },
    {
      id: 6,
      company: 'gA',
      title: 'Junior Frontend Developer',
      start: 'December, 2016',
      end: 'November 2017',
      info: 'We are a global technology company that uses digital platforms and transformation services, to empower large companies in the Americas and Europe to reshape their business models and their organizations, using the power of Data, Business Processes and People.',
      web: 'https://www.globant.com/',
      client: [{
        name: 'OCP',
        info: 'New way to know your customers, Measure traffic inside your stores, manage your sales force and run one-to-one promotions with a single tool.',
        web: '',
        items: [
          { text: 'Login with LocalStorage' },
          { text: 'Register' },
          { text: 'Responsive Interface' },
          { text: 'Modals' },
          { text: 'Store functionalities' },
          { text: 'Regions functionalities' },
          { text: 'Item list with filter and pagination' },
          { text: 'Role system' },
          { text: 'Delivery included: Angular 4, HTML5, CSS3, SASS, RESTful service' },
        ]
      }]
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  selectExp(experience) {
    this.experience = experience
  }

}

