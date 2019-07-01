import { browser, element, by } from 'protractor';

export class TestPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.className('app-footer')).getText();
  }
}
