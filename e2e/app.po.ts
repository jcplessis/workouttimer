import { browser, element, by } from 'protractor';

export class WorkouttimerPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('wt-root h1')).getText();
  }
}
