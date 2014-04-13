module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    "css/main.css": "css/main.less"
                }
            }
        },
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

    grunt.registerTask('default', ['less', 'watch']);
    grunt.registerTask('dev', ['less', 'exec', 'watch']);
};
