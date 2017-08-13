# Angular Observables - Best Practices

## References
[HTTP Example with Observables](https://codecraft.tv/courses/angular/http/http-with-observables/#_using_the_code_async_code_pipe)

## Tools Used

* Angular-CLI 1.3.0
* TypeScript 2.4.2
* Angular 4.3.4
* ng-bootstrap
* Bootstrap V4 
* jQuery
* tether

## Changes to the original code
* created with Angular-CLI with `--routing` and `style=scss`
* changed nearly all version specifications in package.json to specify just the major version needed, such as `^4.0.0` instead of ^4.2.4
* Used newer version of Angular
* Used ng-bootstrap
* Search service is in a separate directory via `ng generate`
* SearchItem is a separate file.
* Bootstrap styles are imported in `styles.scss` after overriding default font size to reduce it back to being closer to the default font size under Bootstrap 3.  See styles.scss for full details.
