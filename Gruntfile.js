module.exports = function(grunt) {

  "use strict";

  grunt.initConfig({

    port: 3000,

    libFiles: [
      "src/**/*.purs",
      "bower_components/purescript-*/src/**/*.purs",
    ],

    dotPsci: ["<%=libFiles%>"],

    connect: {
      dev: {
        port: "<%=port%>",
        livereload: true
      }
    },

    watch: {
      dev: {
        files: ["main.purs"],
        tasks: ['psc:main'],
        options: {spawn: false}
      }
    },

    psc: {
      main: {
        options: {
          modules: ["Main"],
          main: true
        },
        src: ["main.purs", "<%=libFiles%>"],
        dest: "main.js"
      }
    }

  });

  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-purescript");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-connect");

  grunt.registerTask('dev', ['psc:main', 'connect:dev', 'watch:dev']);
  grunt.registerTask('make', ['psc:main']);
  grunt.registerTask('default', ['make']);

};
