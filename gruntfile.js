module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    less: {
      development: {
        files: {
          'src/styles/**.css': 'src/styles/less/**.less'
        },
        options: {
          plugins: [
            new (require('less-plugin-autoprefix'))({browsers: ['last 2 versions']}),
            new (require('less-plugin-clean-css'))()
          ]
        }
      }
    },
    watch: {
      less: {
        files: ['src/styles/less/**'],
        tasks: ['less'],
        options: {
          livereload: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['less']);
  grunt.registerTask('compile-less', ['less']);
};