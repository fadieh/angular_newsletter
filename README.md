#Angular Newsletter

A single page application to create a new way to sign up for newsletters.

##Features

- Add a newsletter to your sign-up list.
- Remove a newsletter from your sign-up list.
- View the total amount of newsletters you want to sign up for.
- View the previous individual newsletter.
- Cannot add the same newsletter more than once.

##How to use

```
> git clone https://github.com/fadieh/angular_newsletter.git
> cd angular_newsletter
> npm install
> bower install
> npm start
> visit http://localhost:8000/app/
```

##Running Tests

```
- Unit: karma start/karma.conf.js
- E2E: webdriver-manager start then protractor test/protractor.conf.js
```

##Technologies Used

```
- AngularJS v1.2.28
- HTML5 & CSS3
- Bootstrap
```

```
Testing:

- Karma
- Protractor
```

## Structure

- app/js/app.js: Module and Routing
- app/js/controller.js: The Main Controller
- app/js/details.js: The Details Controller for previewing Newsletters.
- app/index.html: HTML5 with ng-view.
- app/partials/main.html: HTML5 with Angular directives for the view of the main newsletter page.
- app/partials/details.html: HTML5 with Angular directives for the view of the newsletter details page.
- e2e/scenarios.js: contains end to end tests
- unit/controllerspec.js: contains unit tests

##Things to improve

- [ ] Improve Details view styling.
- [ ] JQuery heartbeat to indicate when newsletter is added.
- [ ] Link up to Mailchimp API.
