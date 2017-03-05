var gulp = require("gulp"), // call gulp.
    browserify = require('browserify'), // Require Browserify.
    source = require('vinyl-source-stream'), // Need To Use Browserify.
    plumber = require("gulp-plumber"), // case, error task. don't stop watch plugin.
    sass = require("gulp-sass"), // sass file compile plugin.
    sourcemaps = require("gulp-sourcemaps"), // write sourcemaps.
    gutil = require("gulp-util"), // gulp-util plugin.
    imageMin = require("gulp-imagemin"), // images compression plugin.
    pngImageMin = require("imagemin-pngquant"), // png images compression plugin.
    changed = require("gulp-changed"), // only change file watch plugin.
    noCompressionImagesFold = (["wp-content/themes/dimsemenov-Touchfolio-c3d30d9/noCompressionImages/*.jpg", "wp-content/themes/dimsemenov-Touchfolio-c3d30d9/noCompressionImages/*.jpeg", "wp-content/themes/dimsemenov-Touchfolio-c3d30d9/noCompressionImages/*.png", "wp-content/themes/dimsemenov-Touchfolio-c3d30d9/noCompressionImages/*.gif", "wp-content/themes/dimsemenov-Touchfolio-c3d30d9/noCompressionImages/*.svg"]), // no compression images fold.
    compressionImageFold = "wp-content/themes/dimsemenov-Touchfolio-c3d30d9/images/", // finish compression images fold.
    autoprefixer = require("gulp-autoprefixer"), // add vendor prefix in CSS automatically.
    cssmin = require('gulp-cssmin'), // CSS File Compression.
    jsmin = require('gulp-uglify'), // JS File Compression.
    rename = require("gulp-rename"), // File Rename PlugIn.
    del = require("del"), // File Delete, Not Gulp PlugIn.
    ftp = require("vinyl-ftp"), // ftp plugin.
    sftp = require("gulp-sftp"), // sftp plugin.
    using_PHP_LocalServerConnect = require("gulp-connect-php"), // using php local server connect plugin.
    browserSync = require("browser-sync"), // local browser sync plugin.
    upLoadFileWrite = (["wp-content/themes/dimsemenov-Touchfolio-c3d30d9/*.php", "wp-content/themes/dimsemenov-Touchfolio-c3d30d9/css/*.css", "wp-content/themes/dimsemenov-Touchfolio-c3d30d9/maps/*", "wp-content/themes/dimsemenov-Touchfolio-c3d30d9/sass/*.scss", "wp-content/themes/dimsemenov-Touchfolio-c3d30d9/js/*.js", "wp-content/themes/dimsemenov-Touchfolio-c3d30d9/images/*", "wp-content/themes/dimsemenov-Touchfolio-c3d30d9/fonts/*", "wp-content/themes/dimsemenov-Touchfolio-c3d30d9/screenshot.png", "plugins/*", "uploads/*", "upgrade/*"]), // upload file write.
    notUpLoadFileWrite = (["!**/.DS_Store", "!node_modules/**/*"]), // don't upload file write.
    upLoadFile = upLoadFileWrite.concat(notUpLoadFileWrite); //ftp upload file. variable upLoadFileWrite concatenate variable notUpLoadFileWrite.

// Browserify.
gulp.task('browserify', function () {
    browserify({
            entries: ['wp-content/themes/dimsemenov-Touchfolio-c3d30d9/src/AddFileName.js']
        })
        .bundle()
        .pipe(source('AddFileName.js'))
        .pipe(gulp.dest('wp-content/themes/dimsemenov-Touchfolio-c3d30d9/js/'));
});

// compression images.
gulp.task("compressionImages", function () {
    gulp.src(noCompressionImagesFold)
        .pipe(plumber())
        .pipe(changed(compressionImageFold))
        .pipe(imageMin({
            use: [pngImageMin({
                quality: "60-80",
                speed: 4
            })]
        }))
        .pipe(gulp.dest(compressionImageFold));
});

// sass compile.
gulp.task("sass", function () {
    gulp.src("wp-content/themes/dimsemenov-Touchfolio-c3d30d9/sass/*.scss")
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(sourcemaps.write("../maps"))
        .pipe(gulp.dest("wp-content/themes/dimsemenov-Touchfolio-c3d30d9/css/"));
});

// add vendor prefix automatically.
gulp.task("autoprefixer", function () {
    return gulp.src("wp-content/themes/dimsemenov-Touchfolio-c3d30d9/css/allTheSmallThingsMain.css")
        .pipe(autoprefixer({
            browsers: ["last 2 versions", "ie >= 9", "Android >= 4", "ios_saf >= 8"],
            cascade: false
        }))
        .pipe(gulp.dest("wp-content/themes/dimsemenov-Touchfolio-c3d30d9/css/"));
});

// CSS File Compression.
gulp.task('cssmin', function () {
    gulp.src('wp-content/themes/dimsemenov-Touchfolio-c3d30d9/css/allTheSmallThingsMain.css')
        .pipe(cssmin())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('wp-content/themes/dimsemenov-Touchfolio-c3d30d9/css/'));
});

// JS File Compression.
gulp.task('jsmin', function () {
    gulp.src('wp-content/themes/dimsemenov-Touchfolio-c3d30d9/js/allTheSmallThingsMain.js')
        .pipe(jsmin({
            preserveComments: 'some'
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('wp-content/themes/dimsemenov-Touchfolio-c3d30d9/js/'));
});

// HTML File Rename PHP File. Setting at The Work Start.
gulp.task("rename", function () {
    gulp.src('index.html')
        .pipe(rename({
            extname: '.php'
        }))
        .pipe(gulp.dest('.'));
});

// HTML File & .DS_Store Delete. Setting at The Work Start.
gulp.task("delete", function (cb) {
    del(["**/.DS_Store"], cb);
});

// local browser connect & sync.
gulp.task("browserSync", function () {
    using_PHP_LocalServerConnect.server({
        port: 8080,
        bin: "/Applications/MAMP/bin/php/php5.6.10/bin/php", // PHP pass.
        ini: "/Applications/MAMP/bin/php/php5.6.10/conf/php.ini" // PHP.ini pass.
    }, function () {
        browserSync({
            proxy: "localhost:8080",
            notify: false,
            browser: "google chrome"
        });
    });
});

// file save's local browser reload.
gulp.task("localBrowserReload", function () {
    browserSync.reload();
});

// ftp upload.
gulp.task("ftpUpLoad", function () {
    var ftpConnect = ftp.create({
        host: "***",
        user: "***",
        password: "***",
        parallel: 7,
        log: gutil.log
    });
    gulp.src(upLoadFile, {
            base: ".",
            buffer: false
        })
        .pipe(ftpConnect.newer("/main/"))
        .pipe(ftpConnect.dest("/main/"));
});

// gulp default task, terminal command "gulp".
gulp.task("default", ["browserSync"], function () { // first task, local server connect & local browser sync.
    //gulp.watch("wp-content/themes/dimsemenov-Touchfolio-c3d30d9/src/*", ["browserify"]); // JS File Browserify.
    gulp.watch(noCompressionImagesFold, ["compressionImages"]); // watching noCompressionImages fold changed images, compression images.
    gulp.watch("wp-content/themes/dimsemenov-Touchfolio-c3d30d9/sass/*.scss", ["sass"]); // watching sass file save's auto compile.
    gulp.watch("wp-content/themes/dimsemenov-Touchfolio-c3d30d9/css/*.css", ["autoprefixer"]); // watching change's CSS flie. add vendor prefix automatically.
    gulp.watch("wp-content/themes/dimsemenov-Touchfolio-c3d30d9/css/*.css", ["cssmin"]); // watching change's CSS flie, File Compression.
    gulp.watch("wp-content/themes/dimsemenov-Touchfolio-c3d30d9/js/*.js", ["jsmin"]); // watching change's JS flie, File Compression.
    //gulp.watch("**/*", ["rename"]); // watching change's HTML flie. Rename PHP file.
    //gulp.watch("**/*", ["delete"]); // watching rename PHP file. delet HTML file.
    gulp.watch(upLoadFile, ["ftpUpLoad"]); // watching file save's auto ftp upload.
    gulp.watch(upLoadFile, ["localBrowserReload"]); // watching file save's local browser reload.
});
