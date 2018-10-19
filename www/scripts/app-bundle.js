define('app',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App() {
            this.message = 'Hello World!';
        }
        return App;
    }());
    exports.App = App;
});



define('text!app.html',[],function(){return "<template>\n  <h1>Test</h1>\n</template>\n";});
define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});



define('main',["require", "exports", "./environment"], function (require, exports, environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources');
        aurelia.use.developmentLogging(environment_1.default.debug ? 'debug' : 'warn');
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        if (top['cordovaDeviceReady']) {
            aurelia.start().then(function () { return aurelia.setRoot(); });
        }
        else {
            document.addEventListener("deviceready", function () {
                aurelia.start().then(function () { return aurelia.setRoot(); });
            }, false);
        }
    }
    exports.configure = configure;
});



define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
    }
    exports.configure = configure;
});



define('resources',['resources/index'],function(m){return m;});
//# sourceMappingURL=app-bundle.js.map