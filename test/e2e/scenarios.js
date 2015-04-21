describe('newsletter app', function() {

  beforeEach(function() {
    browser.get('index.html');
    newsletter = element.all(by.repeater('newsletter in newsletters'));
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

});
