import { F0ckPage } from './app.po';

describe('f0ck App', function() {
  let page: F0ckPage;

  beforeEach(() => {
    page = new F0ckPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
