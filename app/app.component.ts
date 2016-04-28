import { Component } from 'angular2/core';
import{YouTube} from './youtube/youtube.component';

@Component({
    selector: 'bc-app',
    template: '<bc-youtube></bc-youtube>',
    directives:[YouTube]
})
export class AppComponent {
}
