(function() {
    'use strict';

  angular.module('app')
  .component('navigation', {

    controller:  function() {
      const vm = this

      vm.$onInit = function() {
      }

    },
    template: `<nav class="navbar navbar-default">
  <div class="container">
  <div class="navbar-header">
  <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
    <span class="sr-only">Toggle navigation</span>
    <span class="icon-bar"></span>
    <span class="icon-bar"></span>
    <span class="icon-bar"></span>
  </button>
  <a class="navbar-brand">Reddit Clone</a>
  </div>

  <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
  </div>
  </div>
  </nav>
  `
  })

})()
