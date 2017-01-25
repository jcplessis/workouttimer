import { WorkouttimerPage } from './app.po';

describe('workouttimer App', function() {
  let page: WorkouttimerPage;

  beforeEach(() => {
    page = new WorkouttimerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
