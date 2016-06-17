import { RatingAppPage } from './app.po';

describe('rating-app App', function() {
  let page: RatingAppPage;

  beforeEach(() => {
    page = new RatingAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
