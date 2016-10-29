function Model(data) {

	var self = this;

	self.data = data;


	self.addItem = function(item) {

		if (item.length === 0) {

			return;
		}

		self.data.push(item);

		return self.data;

	};


	self.removeItem = function(item) {

		var index = self.data.indexOf(item);

		if (index === -1) {

			return;
		}

		self.data.splice(index, 1);

		return self.data;

	};

	self.changeItem = function(item, changed) {

		var index = self.data.indexOf(item);

		if (index === -1) {

			return;
		}

		self.data.splice(index, 1, changed);

		return self.data;

	};

}

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

function Controller(model, view) {

	var self = this;

	view.elements.addBtn.on('click', addItem);

	view.elements.listContainer.on('click', '.menu__del', removeItem);

	view.elements.listContainer.on('click', '.menu__item', changeItem);

	view.elements.listContainer.on('keydown','#changeText', saveItem);

	function addItem() {
        
        var newItem = view.elements.input.val();

        model.addItem(newItem);

        view.renderList(model.data);

        view.elements.input.val('');

	};

	function removeItem() {

		var item = $(this).attr('data-value');

		model.removeItem(item);

		view.renderList(model.data);
	};

	var index;

	function changeItem() {

		var item = $(this).html();

		index = model.data.indexOf(item);

		$(this).replaceWith('<input id="changeText" type="text" value="' + item + '" />');
	};

	function saveItem(e) {

		if(e.keyCode == 13) {

			var newItem = $(this).val();

			$(this).replaceWith('<li class="menu__item">' + newItem + '</li>');

            model.data[index] = newItem;

            view.renderList(model.data);
		}
	}

}


$(function() {

	var firstToDoList = ['Learn HTML', 'Learn CSS', 'Learn JS'];

	var model = new Model(firstToDoList);

	var view = new View(model);

	var controller = new Controller(model, view);

});