import { Blend4WebModule } from './b4w-module';

declare var b4w: any;

export class BallsModule implements Blend4WebModule {
    name = 'balls';
    content = (exports: any, require: any) => {
            // import modules used by the app
            let m_app =         b4w.require('app');
            let m_cfg =         b4w.require('config');
            let m_data =        b4w.require('data');
            let m_mouse =       b4w.require('mouse');
            let m_preloader =   b4w.require('preloader');
            let m_ver =         b4w.require('version');
            let m_scenes =      b4w.require('scenes');
            let m_trans =       b4w.require('transform');
            let m_obj =         b4w.require('objects');
            let m_phys =        b4w.require('physics');

            // detect application mode
            let DEBUG = (m_ver.type() === 'DEBUG');

            // automatically detect assets path
            let APP_ASSETS_PATH = m_cfg.get_assets_path('balls');

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

            // exports.getMainBall = m_scenes.get_object_by_name('Sphere');

            /**
             * callback executed when the app is initialized 
             */
            function init_cb(canvas_elem: any, success: any) {

                if (!success) {
                    console.log('b4w init failure');
                    return;
                }

                m_preloader.create_preloader();

                // ignore right-click on the canvas element
                canvas_elem.oncontextmenu = function (e: any) {
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
            function preloader_cb(percentage: any) {
                m_preloader.update_preloader(percentage);
            }

            /**
             * callback executed when the scene data is loaded
             */
            function load_cb(data_id: any, success: any) {

                if (!success) {
                    console.log('b4w load failure');
                    return;
                }

                m_app.enable_camera_controls();

                // place your code here...
            }
        };

        // GetMainBall() {
        //     let c = this.content.getMainBall();
        // }
}