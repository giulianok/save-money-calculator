var
	gulp        = require('gulp'),
  	$		    = require('gulp-load-plugins')({ camelize: true }),
  	config      = require('../gulpconfig')
;
$.path 			= require('path');

    
gulp.task('styles', function() {

	console.log(__dirname)

	return gulp.src(config.styles.src)
        .pipe($.plumber())
		.pipe($.compass({
            config_file: '../config.rb',
            project: $.path.join(__dirname.replace('/gulpfile.js/tasks',''), 'app'),
            relative: true,
            comments: false,
            sourcemap: true,
            //import_path: 'etc/clientlibs/devry-global/vendors/',
            image: config.assets.images.base, //paths.images.base,
            css: '../' + config.folder.tmp + config.styles.base,
            sass: config.styles.base,
            font: config.styles.fonts,
            style: 'compressed',
            require: ['susy', 'breakpoint', 'sass-globbing'],
            import_path: "../bower_components/bootstrap-sass/assets/stylesheets"
        }));

});
gulp.task('rev:css', function () {
    return gulp.src(config.styles.dest+'/*.css')
        .pipe($.rev())
        .pipe(gulp.dest(config.styles.dest));
});

