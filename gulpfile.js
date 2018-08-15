const gulp = require('gulp'),
    sass = require('gulp-sass'),
    gulpConnect = require('gulp-connect'),
    gulpBabel = require('gulp-babel'),
    gulpConcat = require('gulp-concat'),
    livereload = require('gulp-livereload'),
    image = require('gulp-image'),
    newer = require('gulp-newer'),
    autoprefixer = require('gulp-autoprefixer'),
    // connect = require('gulp-connect-php'),
    PATH = {
        src: {
            jsN: './design/jsNoCancat/*.js',
            js: './src/js/**/*.js',
            css: './src/scss/*.scss',
            html: './src/*.html',
            img: './src/img/*'
        },
        dest: {
            js: './design/js',
            css: './design/css/',
            html: './design/',
            img: './design/img/'
        },
        watch: {
            js: './src/js/**/*.js',
            css: ['./src/scss/*.scss', './src/scss/**/*.scss'],
            html: './src/*.html',
            img: './src/img/*.*'
        }
    };
gulp.task('img', () => {
    gulp.src(PATH.src.img)
        .pipe(newer(PATH.dest.img))
        .pipe(image())
        .pipe(gulp.dest(PATH.dest.img))
        .pipe(gulpConnect.reload())
});
gulp.task('connect', () => {
    gulpConnect.server({
        root: 'design',
        livereload: true
    })
});

// gulp.task('connect-php', function() {
//     connect.server();
// });

gulp.task('html', () => {
    gulp.src(PATH.src.html)
        .pipe(newer(PATH.dest.html))
        .pipe(gulp.dest(PATH.dest.html))
        .pipe(gulpConnect.reload())
});
gulp.task('css', () => {
    gulp.src(PATH.src.css)
        .pipe(newer(PATH.dest.css))
        .pipe(sass({includePaths: require('node-normalize-scss').includePaths}))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest(PATH.dest.css))
        .pipe(gulpConnect.reload())
});

gulp.task('js', () => {
    gulp.src(['./src/js/variable/var.js','./src/js/variable/object.js',PATH.src.js,'./src/js/variable/prism.js','./src/js/variable/jscolor.js','./src/js/variable/Event.js'])

        .pipe(newer(PATH.dest.js))
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
gulp.task('watch', () => {
    gulp.watch(PATH.watch.js, ['js']);
    gulp.watch(PATH.watch.img, ['img']);
    gulp.watch(PATH.watch.css, ['css']);
    gulp.watch(PATH.watch.html, ['html']);


});

gulp.task('default', ['connect', 'html', 'css', 'js', 'img', 'watch']);