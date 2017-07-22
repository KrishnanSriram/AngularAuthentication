import { DynamicTitleAppPage } from './app.po';

describe('dynamic-title-app App', function() {
  let page: DynamicTitleAppPage;

  beforeEach(() => {
    page = new DynamicTitleAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
