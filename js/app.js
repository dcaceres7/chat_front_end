angular.module('myApp', []).controller('appCtrl', function($scope) {
	var vm = this;
	vm.messages = [{name:'Daniela', time:'11:11 PM, Today' , mes: 'holaaa'},
					{name:'Daniela', time:'11:11 PM, Today' , mes: 'como estas?'},
					{name:'Daniela', time:'11:11 PM, Today' , mes: ':D'}];

	vm.set_messages='';
	vm.message = [];

	vm.submitMessage = function(){
		vm.message.push(vm.set_messages);
		console.log(vm.message);
	}
});