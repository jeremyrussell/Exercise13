var gulp = require('gulp');
var webpack = require('webpack-stream');
var del = require('del');
var ts = require('gulp-typescript');
var tslint = require("gulp-tslint");

gulp.task('default', ['tslint', 'webpack', 'copy-static']);

gulp.task('webpack', function() {
	return gulp.src('')
	.pipe( webpack(require('./webpack.config.js')) )
	.pipe(gulp.dest('artifacts/web'));
});

gulp.task('copy-static', function() {
    return gulp.src('./src/images/*')
		.pipe(gulp.dest('./artifacts/web/images/'));
});

gulp.task('clean-native', function() {
    return del('lib');
});

gulp.task('compile-native', ['clean-native'], function() {
    var tsProject = ts.createProject('tsconfig.json');
    var tsResult = tsProject.src()
        .pipe(tsProject());
    return tsResult.js.pipe(gulp.dest('lib'));
});

gulp.task('tslint', function() {
    gulp.src('src/web/*.tsx')
    .pipe(tslint({
        formatter: "verbose"
    }))
    .pipe(tslint.report())
});
