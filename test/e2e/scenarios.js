describe('newsletter app', function() {

  beforeEach(function() {
    browser.get('index.html');
    newsletter = element.all(by.repeater('newsletter in newsletters'));
    signups = element.all(by.repeater('newsletter in currentSignUps'))
    add = element.all(by.className('add-to')).get(0);
    remove = element.all(by.className('remove')).get(0);
    list = element.all(by.className('newsletter-list')).get(0);
  });

  it('has a list of 6 newsletters', function() {
    expect(newsletter.get(0).isPresent()).toBe(true);
  });

  it('has a name for newsletters', function() {
    expect(newsletter.get(0).getText()).toContain('React.JS London')
  });

  it('has tag 1 for newsletters', function() {
    expect(newsletter.get(0).getText()).toContain('Javascript')
  });

  it('has tag 2 for newsletters', function() {
    expect(newsletter.get(0).getText()).toContain('Front-End')
  });

  it('has tag 3 for newsletters', function() {
    expect(newsletter.get(0).getText()).toContain('London')
  });

  it('each newsletter has a add button', function() {
    expect(element(by.css('.add-to')).isPresent()).toBe(true)
  });

  it('has a remove button after a newsletter is added', function() {
    add.click()
    expect(remove.isPresent()).toBe(true)
  });

  it('has a list of newsletters you have added before the signup form', function() {
    add.click()
    expect(list.getText()).toContain('React.JS London')
  });

});
