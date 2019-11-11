const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const del = require("del");
const gulp = require("gulp");
const source = require("vinyl-source-stream");
const buffer = require("vinyl-buffer");
const postcss = require("gulp-postcss");
const browserify = require("browserify");
const babelify = require("babelify");
const uglify = require("gulp-uglify");
const htmlmin = require("gulp-htmlmin");
const rename = require("gulp-rename");
const atImport = require("postcss-import");

function clean() {
  return del(["./dist"]);
}

function html() {
  return gulp
    .src("./src/*.html")
    .pipe(htmlmin())
    .pipe(gulp.dest("./dist"));
}

function css() {
  return gulp
    .src("./src/css/*.css")
    .pipe(postcss([ atImport(), autoprefixer(), cssnano() ]))
    .pipe(rename({ basename: "bundle" }))
    .pipe(gulp.dest("./dist/css"));
}

function js() {
  return (
    browserify("./src/js/index.js")
      .transform(babelify)
      .bundle()
      .pipe(source("bundle.js"))
      .pipe(buffer())
      .pipe(uglify())
      .pipe(gulp.dest("./dist/js"))
  );
}

exports.build = gulp.series(clean, gulp.parallel(html, css, js));