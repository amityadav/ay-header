import { AyHeaderPage } from './app.po';

describe('ay-header App', () => {
  let page: AyHeaderPage;

  beforeEach(() => {
    page = new AyHeaderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
