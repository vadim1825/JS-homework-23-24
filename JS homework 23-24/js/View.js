function View(model) {

	var self = this;

	function init() {

		var wrapper = tmpl($('#wrapper-template').html());

		$('body').append(wrapper);

		self.elements = {

			input: $('.menu__value'),

			addBtn: $('.menu__add'),

			listContainer: $('.menu')
		};

		self.renderList(model.data)
	};


	self.renderList = function(data) {

		var list = tmpl($('#list-template').html(), {data: data});

		self.elements.listContainer.html(list);

	};

	init();

}