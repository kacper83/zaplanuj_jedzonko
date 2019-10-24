const gulp=require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');


function compileSass(cb) {
    gulp.src('./scss/main.scss')
        .pipe(sourcemaps.init()) //włączamy mapę na początku wszystkich operacji
        .pipe(sass({outputStyle : "expanded"}).on('error', sass.logError)) //nested, expanded, compact, compressed
        .pipe(sourcemaps.write('.')) //i zapisujemy tuż przed zapisem plików wynikowych
        .pipe(gulp.dest('./css'));
    cb();
}

function watcher(cb) {
    gulp.watch('./scss/**/*.scss', gulp.series(compileSass));
}

exports.default = gulp.parallel(compileSass, watcher);