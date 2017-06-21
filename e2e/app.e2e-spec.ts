import { DragndropPage } from './app.po';

describe('dragndrop App', () => {
  let page: DragndropPage;

  beforeEach(() => {
    page = new DragndropPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
