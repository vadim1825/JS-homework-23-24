requirejs.config ({

	paths: {

		'jquery': "https://code.jquery.com/jquery-3.1.1.min",

		'tmpl': "tmpl",

		'model': "Model",

		'view': "View",

		'controller': "Controller"
	},

	shim: {

		'jquery': {

			exports: 'jQuery'
		},

		'tmpl': {

			exports: 'tmpl'
		},

        'model': {

        	exports: 'Model'
        },

        'view': {

        	exports: 'View'
        },

        'controller': {

        	exports: 'Controller'
        }
	}
});

require (
    
    [

        'Model',

        'View',

        'Controller',

        'jquery',

        'tmpl'

    ],

    function (model, view, controller, $, tmpl) {

        $(function() {

	        var firstToDoList = ['Learn HTML', 'Learn CSS', 'Learn JS'];

	        var model = new Model(firstToDoList);

	        var view = new View(model);

	        var controller = new Controller(model, view);

        });
    }

);