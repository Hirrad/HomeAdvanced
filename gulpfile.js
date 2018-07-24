const gulp = require('gulp'),
    sass = require('gulp-sass'),
    gulpConnect = require('gulp-connect'),
    gulpBabel = require('gulp-babel'),
    gulpConcat = require('gulp-concat'),
    livereload = require('gulp-livereload');
    PATH = {
        src: {
            jsN: './design/jsNoCancat/*.js',
            js: './src/js/*.js',
            css: './src/scss/*.scss',
            html: './src/*.html'
        },
        dest: {
            jsN: './design/jsNoCancat/',
            js: './design/js',
            css: './design/css/',
            html: './design/'
        },
        watch: {
            js: './src/js/*.js',
            css: ['./src/scss/*.scss', './src/scss/**/*.scss'],
            html: './src/*.html'
        }
    };
gulp.task('connect', ()=>{
    gulpConnect.server({
        root: 'design',
        livereload: true
    })
});
gulp.task('html', ()=>{
    gulp.src(PATH.src.html)
        .pipe(gulp.dest(PATH.dest.html))
        .pipe(gulpConnect.reload())
})
gulp.task('css', () => {
    gulp.src(PATH.src.css)
        .pipe(sass({includePaths: require('node-normalize-scss').includePaths}))
        .pipe(gulp.dest(PATH.dest.css))
        .pipe(gulpConnect.reload())
});

gulp.task('js', () => {
    gulp.src(PATH.src.js)
        .pipe(gulpConcat('script.js'))
        .pipe(gulpBabel({
            presets: 'env'
        }))
        .pipe(gulp.dest(PATH.dest.js))
        .pipe(gulpConnect.reload())
});

// gulp.task('impoverish',()=>{
//     gulp.src(PATH.src.jsN)
//         .pipe(gulpConcat('all.js'))
//         .pipe(gulp.dest(PATH.dest.js))
//         .pipe(gulpConnect.reload())

// });
gulp.task('watch',()=>{
    gulp.watch(PATH.watch.js, ['js']);
    gulp.watch(PATH.watch.css, ['css']);
    gulp.watch(PATH.watch.html, ['html']);
});

gulp.task( 'default',['connect', 'html','css', 'js','watch']);