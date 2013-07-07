module.exports = function( grunt ) {
    /** Grunt plugins. **/
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-jslint');
    // TODO grunt.loadNpmTasks for each grunt plugin.
    
    /** Grunt tasks. **/
    grunt.registerTask( 'README', [ 'copy:README' ] );
    grunt.registerTask( "test", [ "TODO" ] );
    grunt.registerTask( 'check', [ 'jslint' ] );
    // TODO grunt.registerTask for each target.
    
    /** Grunt task options. **/
    grunt.initConfig( {
        pkg: grunt.file.readJSON( 'package.json' )
        ,
        copy: {
          README: {
            files: [
              { src: ['README.md'], dest: 'README.html' }
            ]
          }
        }
        ,
        jslint: {
            files: [
                '*.js'
                ,
                'src/**/*.js'
                ,
                'test/**/*.js'
                ,
                'public/**/*.js'
                ,
                'routes/**/*.js'
                ,
                'views/**/*.js'
            ]
            ,
            directives: {
                // Look for to do comments.
                todo: true,
            },
            options: {
                // Log errors.
                log: 'results/lint.log',
                failOnError: false,
            }
        }
        // TODO task data for each task.
    } )
}
