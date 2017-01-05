import { ProgettoWebSempliceGuidatoPage } from './app.po';

describe('progetto-web-semplice-guidato App', function() {
  let page: ProgettoWebSempliceGuidatoPage;

  beforeEach(() => {
    page = new ProgettoWebSempliceGuidatoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
