"use strict";
var Subject_1 = require("rxjs/Subject");
var BallsModule = (function () {
    function BallsModule() {
        var _this = this;
        this.onLoadCallbackSource = new Subject_1.Subject();
        this.onLoadCallback$ = this.onLoadCallbackSource.asObservable();
        this.name = 'balls';
        this.context = function (exports, require) {
            // import modules used by the app
            var m_app = b4w.require('app');
            var m_cfg = b4w.require('config');
            var m_data = b4w.require('data');
            var m_mouse = b4w.require('mouse');
            var m_preloader = b4w.require('preloader');
            var m_ver = b4w.require('version');
            var m_scenes = b4w.require('scenes');
            var m_trans = b4w.require('transform');
            var m_obj = b4w.require('objects');
            var m_phys = b4w.require('physics');
            var m_mat = b4w.require('material');
            var m_rgba = b4w.require('rgba');
            var mainBall;
            var plane;
            var ballCount = 0;
            var balls = [];
            // detect application mode
            var DEBUG = (m_ver.type() === 'DEBUG');
            // automatically detect assets path
            var APP_ASSETS_PATH = m_cfg.get_assets_path('balls');
            /**
             * export the method to initialize the app (called at the bottom of this file)
             */
            exports.init = function () {
                m_app.init({
                    canvas_container_id: 'main_canvas_container',
                    callback: init_cb,
                    show_fps: false,
                    console_verbose: DEBUG,
                    autoresize: true
                });
            };
            exports.genBall = function (color) {
                var newBall = m_obj.copy(mainBall, 'Ball.' + ballCount++);
                var rand_x = (Math.random() * (1 - 0.100) + 0.0200).toFixed(2);
                var rand_y = (Math.random() * (1 - 0.100) + 0.0200).toFixed(2);
                m_trans.set_translation(newBall, rand_x, rand_y, 5);
                m_scenes.append_object(newBall);
                balls.push(newBall);
                m_mat.inherit_material(plane, color, newBall, 'Sphere');
                m_phys.enable_simulation(newBall);
                // Start removing balls if count exceeds n-balls
                if (balls.length > 200) {
                    var oldBall = balls.shift();
                    m_scenes.remove_object(oldBall);
                }
            };
            /**
             * callback executed when the app is initialized
             */
            function init_cb(canvas_elem, success) {
                if (!success) {
                    console.log('b4w init failure');
                    return;
                }
                m_preloader.create_preloader();
                // ignore right-click on the canvas element
                canvas_elem.oncontextmenu = function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    return false;
                };
                load();
            }
            /**
             * load the scene data
             */
            function load() {
                m_data.load(APP_ASSETS_PATH + 'balls' + '.json', load_cb, preloader_cb);
            }
            /**
             * update the app's preloader
             */
            function preloader_cb(percentage) {
                m_preloader.update_preloader(percentage);
            }
            /**
             * callback executed when the scene data is loaded
             */
            var load_cb = function (data_id, success) {
                if (!success) {
                    console.log('b4w load failure');
                    return;
                }
                m_app.enable_camera_controls();
                // place your code here...
                mainBall = m_scenes.get_object_by_name('Sphere');
                plane = m_scenes.get_object_by_name('Plane');
                _this.onLoadCallbackSource.next();
            };
        };
    }
    // onLoadCallback(obj: any) {
    //     console.log('onLoadCallback');
    // }
    BallsModule.prototype.genBall = function (color) {
        var content = b4w.require('balls_main');
        content.genBall(color);
    };
    return BallsModule;
}());
exports.BallsModule = BallsModule;
//# sourceMappingURL=b4w-balls-module.js.map