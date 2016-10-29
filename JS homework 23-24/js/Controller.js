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