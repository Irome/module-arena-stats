/*jslint browser: true, white: true, plusplus: true*/
/*global angular, console, alert*/

(function () {
  'use strict';
  var app = angular.module('arenastats');

  /* Edit with path of TC-JSON-API */
  app.api = location.protocol+"//azerothshard.org/modules/TC-JSON-API/public/index.php/";

  app.serverName = "AzerothShard";

}());
