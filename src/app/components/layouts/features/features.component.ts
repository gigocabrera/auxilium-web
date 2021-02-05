import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-features',
    templateUrl: './features.component.html',
    styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    sectionTitle: sectionTitleContent[] = [
        {
            subTitle: 'How are we different?',
            title: 'We Always Try To Understand Users\' Expectations',
            paragraphText: 'In today’s digital economy, the landscape is no longer a question of "build vs. buy", but one of "build vs. die". Companies have to get this right to survive. But how do they make this transition? We use creativity of code to solve business problems!'
        }
    ]

    singleFeatures: singleFeaturesContent[] = [
        {
            icon: 'icofont-space-shuttle',
            title: 'Bring a Startup to Market',
            paragraphText: 'Whether you\'re starting a business or launching a new project, we can help you with your web and digital needs.'
        },
        {
            icon: 'icofont-pie-chart',
            title: 'Scaling Business',
            paragraphText: 'To stay competitive in today\'s economy you need to stay ahead of the curve with innovative solutions. We can help.'
        },
        {
            icon: 'icofont-stock-mobile',
            title: 'Engaging Audiences',
            paragraphText: 'By using the latest technologies, we build custom software that delivers great customer experience.'
        },
        {
            icon: 'icofont-automation',
            title: 'Automate Workflows',
            paragraphText: 'Whether you\'re starting a business or launching a new project, we can help you with your web and digital needs.'
        },
        {
            icon: 'icofont-people',
            title: 'Improved Customer Experience',
            paragraphText: 'The benefits in this area for your company are huge: more sales, lower marketing costs, a loyal customer base.'
        },
        {
            icon: 'icofont-monitor',
            title: 'Modernize Old Technology',
            paragraphText: 'Oudated technology can harm your business. To compete, we can help you modernize your technology.'
        }
    ]

}

class sectionTitleContent {
    subTitle : string;
    title : string;
    paragraphText : string;
}

class singleFeaturesContent {
    icon : string;
    title : string;
    paragraphText : string;
}