var gulp = require('gulp'),
    less = require('gulp-less'),
    browserSync = require('browser-sync'),
    concatCSS = require('gulp-concat-css'),
    del = require('del'),
    autoprefixer = require('gulp-autoprefixer'),
    svgstore = require('gulp-svgstore'),
    imagemin = require('gulp-imagemin');

gulp.task('less', function () {
    return gulp.src('src/assets/themes/base/styles/import.less')
        .pipe(less())
        .pipe(autoprefixer(['last 2 versions', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'],
            {cascade: true})) // Создаем префиксы
        .pipe(concatCSS('style.css'))
        .pipe(gulp.dest('src/assets/themes/base/styles'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function () {
    browserSync({
        server: {
            baseDir: 'src' // Директория для сервера
        },
        notify: false
    });
});

gulp.task('watch', ['browser-sync'], function () {
    gulp.watch('src/assets/themes/base/styles/**/*.less', ['less']); // Наблюдение за less файлами
    gulp.watch('src/*.html', browserSync.reload); // Наблюдение за HTML файлами в корне проекта
    gulp.watch('src/assets/scripts/*.js', browserSync.reload);   // Наблюдение за JS файлами
});

gulp.task('clean', function () {
    return del.sync('dist'); // Удаляем папку dist перед сборкой
});

gulp.task('img', function () {
    return gulp.src('src/assets/themes/base/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/assets/themes/base/img'));
});

gulp.task('build', ['clean', 'img', 'less'], function () {

    var buildCss = gulp.src(['src/assets/themes/base/styles/*.css'])
        .pipe(gulp.dest('dist/assets/themes/base/styles'));

    var buildFonts = gulp.src('src/assets/themes/base/fonts/*')
        .pipe(gulp.dest('dist/assets/themes/base/fonts'));

    var buildFiles = gulp.src('src/assets/files/*')
        .pipe(gulp.dest('dist/assets/files'));

    var buildPHP = gulp.src('src/*.php')
        .pipe(gulp.dest('dist'));

    var buildICO = gulp.src('src/*.ico')
        .pipe(gulp.dest('dist'));

    var buildJs = gulp.src('src/assets/scripts/**/*.js')
        .pipe(gulp.dest('dist/assets/scripts'));

    var buildHtml = gulp.src('src/*.html')
        .pipe(gulp.dest('dist'));

});

gulp.task('default', ['watch']);
