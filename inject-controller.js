exports.name = 'MyController';
console.log('INJECTED: http://www.totaljs.com/inject-controller.js (name: MyController)');
exports.install = function() { framework.route('/test/', view_index); };

function view_index() { this.plain('INJECTED.'); };
