import {Aurelia} from 'aurelia-framework'
import environment from './environment';

export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .feature('resources');

  aurelia.use.developmentLogging(environment.debug ? 'debug' : 'warn');

  if (environment.testing) {
    aurelia.use.plugin('aurelia-testing');
  }

  if (top['cordovaDeviceReady']) {
    aurelia.start().then(() => aurelia.setRoot());
  }
  else {
    document.addEventListener("deviceready", () => {
      aurelia.start().then(() => aurelia.setRoot());
    }, false);
  }
}
