export class StepByStepProjectPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('step-by-step-project-app h1')).getText();
  }
}
