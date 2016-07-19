var gulp = require( 'gulp' ),
    $ = require( 'gulp-load-plugins' )( { lazy: true });

var coffeeSources = ['components/coffee/*.coffee'];

gulp.task( 'coffee', function () {
    gulp.src( coffeeSources )
        .pipe( $.coffee( { bare: true })
            .on( 'error', $.util.log ) )
        .pipe( gulp.dest( 'components/scripts' ) );
});