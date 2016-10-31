"use strict";

const gulp = require("gulp");
const del = require("del");
const tsc = require("gulp-typescript");
const sourcemaps = require('gulp-sourcemaps');
const tsProject = tsc.createProject("tsconfig.json");
const tslint = require('gulp-tslint');

/**
 * Remove database file.
 */
gulp.task('clean_database', (cb => {
    return del(["d20Seq.db*"], cb);
}));

/**
 * Remove build directory and database file.
 */
gulp.task('clean', ["clean_database"], (cb) => {
    return del(["build"], cb);
});

/**
 * Lint all custom TypeScript files.
 */
gulp.task('tslint', () => {
    return gulp.src("frontend/**/*.ts")
        .pipe(tslint({
            formatter: 'prose'
        }))
        .pipe(tslint.report());
});

/**
 * Compile TypeScript sources and create sourcemaps in build directory.
 */
gulp.task("compile"/*, ["tslint"]*/, () => {
    let tsResult = gulp.src("frontend/**/*.ts")
        .pipe(sourcemaps.init())
        .pipe(tsProject());
    return tsResult.js
        .pipe(sourcemaps.write(".", {sourceRoot: '/frontend'}))
        .pipe(gulp.dest("build"));
});

/**
 * Copy all resources that are not TypeScript files into build directory.
 */
gulp.task("resources", () => {
    return gulp.src(["frontend/**/*", "!**/*.ts"])
        .pipe(gulp.dest("build"));
});

/**
 * Recreate d20Seq.db file via dbFill.js script
 */
gulp.task("fill_database", ["clean_database"], () => {
    return require('./dbFill.js');
});

/**
 * Copy all required libraries into build directory.
 */
gulp.task("libs", () => {
    return gulp.src([
            'core-js/client/*',
            'systemjs/dist/system-polyfills.js',
            'systemjs/dist/system.src.js',
            'reflect-metadata/*',
            'rxjs/**/*.js',
            'rxjs/**/*.js.map',
            'zone.js/dist/**',
            '@angular/**/bundles/**',
            'ng2-bs3-modal/**',
            'ng2-completer/bundles/*',
            'ng2-pagination/**',
            'angular2-jwt/**',
            'js-base64/**',
            'ng2-tabs/**',
        ], {cwd: "node_modules/**"}) /* Glob required here. */
        .pipe(gulp.dest("build/lib"));
});

/**
 * Watch for changes in TypeScript, HTML and CSS files.
 */
gulp.task('watch', function () {
    gulp.watch(["frontend/**/*.ts", "backend/**/*.js" ], ['compile']).on('change', function (e) {
        console.log('Source file ' + e.path + ' has been changed. Compiling.');
    });
    gulp.watch(["frontend/**/*.html", "frontend/**/*.css", "frontend/*.js"], ['resources']).on('change', function (e) {
        console.log('Resource file ' + e.path + ' has been changed. Updating.');
    });
});

/**
 * Build the project.
 */
gulp.task("build", ['compile', 'resources', 'libs', 'fill_database'], () => {
    console.log("Building the project ...");
});
