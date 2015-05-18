/*
This file in the main entry point for defining grunt tasks and using grunt plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkID=513275&clcid=0x409
*/
module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');    
    grunt.loadNpmTasks('grunt-contrib-connect');
    
    grunt.initConfig({
        uglify: {
            my_target: {
                files: {'wwwroot/app.js':['Scripts/app.js','Scripts/**/*.js']}
            }
        },
        copy: {
            main: {
                cwd: 'Scripts/',
                src: '**',
                dest: 'wwwroot/js',
                expand: true,
                flatten: true,
                filter: 'isFile'
            },
        },
        watch: {
            scripts: {
                files: ['Scripts/**/*.js'],
                tasks: ['uglify','copy']
            }
        },
        connect: {
            server: {
                options: {
                    port: 9001,
                    base: 'app'
                }
            }
        }
    });

    //grunt.registerTask('default', ['uglify', 'copy', 'watch']);
    grunt.registerTask('default2', ['copy']);
};