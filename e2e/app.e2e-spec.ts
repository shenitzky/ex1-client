import { SecuritySettingsWsPage } from './app.po';

describe('security-settings-ws App', () => {
  let page: SecuritySettingsWsPage;

  beforeEach(() => {
    page = new SecuritySettingsWsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
