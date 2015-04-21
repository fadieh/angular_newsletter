describe('newsletter app', function() {

  beforeEach(function() {
    browser.get('index.html');
    newsletter = element.all(by.repeater('newsletter in newsletters'));
  });

  it('has a list of newsletters', function() {
    expect(newsletter.get(0).isPresent()).toBe(true);
  });

});
