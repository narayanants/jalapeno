(function () {
  'use strict';

  angular.module('core').controller('HomeController',HomeController);

  HomeController.$inject = ['$scope','Authentication'];

  function HomeController($scope,Authentication){
    var vm = this;
    vm.authentication = Authentication;
    vm.alerts = [
                  {
                    icon:'glyphicon-user',
                    color:'btn-success',
                    title:'20,408',
                    description:'TOTAL CUSTOMERS'
                  },
                  {
                    icon:'glyphicon-calendar',
                    color:'btn-primary',
                    title:'8,382',
                    description:'UPCOMING EVENTS'
                  },
                  {
                    icon:'glyphicon-edit',
                    color:'btn-success',
                    title:'527',
                    description:'NEW CUSTOMERS IN 24 HOURS'
                  },
                  {
                    icon:'glyphicon-record',
                    color:'btn-info',
                    title:'85,000',
                    description:'EMAIL SENT'
                  },
                  {
                    icon:'glyphicon-eye-open',
                    color:'btn-warning',
                    title:'268',
                    description:'FOLLOW UPS REQUIRED'
                  },
                  {
                    icon:'glyphicon-flag',
                    color:'btn-danger',
                    title:'348',
                    description:'REFERRALS TO MODERATE'
                  }
                ];
  }
}());
