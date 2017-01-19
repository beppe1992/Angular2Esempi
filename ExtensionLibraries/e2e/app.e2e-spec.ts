import { ExtensionLibrariesPage } from './app.po';

describe('extension-libraries App', function() {
  let page: ExtensionLibrariesPage;

  beforeEach(() => {
    page = new ExtensionLibrariesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
