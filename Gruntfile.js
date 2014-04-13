module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            styles: {
                files: ['css/**/*.less'],
                tasks: ['less', 'exec'],
                options: {
                    nospawn: true
                }
            }
        },
        exec: {
            start_server: {
                cmd: "jekyll serve --watch",
                stdout: true
            }
        }
    });
    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('dev', ['exec', 'watch']);
};
