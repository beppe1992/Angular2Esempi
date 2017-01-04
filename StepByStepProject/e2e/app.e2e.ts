import { StepByStepProjectPage } from './app.po';

describe('step-by-step-project App', function() {
  let page: StepByStepProjectPage;

  beforeEach(() => {
    page = new StepByStepProjectPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('step-by-step-project works!');
  });
});
