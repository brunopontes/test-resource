import { TestPage } from './app.po';

describe('test App', function () {
  let page: TestPage;

  beforeEach(() => {
    page = new TestPage();
  });

  it('teste', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toContain('teste');
  });
});
