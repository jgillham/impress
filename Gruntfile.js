module.exports = function( grunt ) {
    /** Grunt plugins. **/
    grunt.loadNpmTasks( "grunt-mocha" );
    // TODO grunt.loadNpmTasks for each grunt plugin.
    
    /** Tasks. **/
    grunt.registerTask( "check", [ "mocha" ] );
    grunt.registerTask( "test", [ "check" ] );
	// TODO grunt.registerTask for each target.
    
    /** Task options. **/
	grunt.initConfig( {
		pkg: grunt.file.readJSON( 'package.json' )
        ,
        mocha: {
            all: [ "test/*Test.js" ]
        }
		// TODO task options for each task.
	} )
}