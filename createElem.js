var CreateElem = function() {
	function create(element, options, content = null) {
		var elem = document.createElement(element);

		if (options) {
			Object.keys(options).forEach(function(key) {
				if (key === 'events') {
					Object.keys(options[key]).forEach(function (ev) {
						elem.addEventListener(ev, options[key][ev])
					});
					return;
				}

				elem.setAttribute(key, options[key]);
			});
		}

		if (content) {
			elem.textContent = content;
		}

		return elem;
	}

	function empty(element) {
		if (typeof element === 'string') {
			if (!document.querySelector(element)) {
				throw `"${element}" element does not exist.`;
			}

			document.querySelector(element).innerHTML = '';
			return;
		}
		element.innerHTML = '';
	}

	function exists(element) {
		return !!document.querySelector(element);
	}

	function append(container, child) {
		return Array.isArray(child)
			? child.forEach(element => container.appendChild( element ))
			: container.appendChild( child );
	}

	return { append, create, exists, empty };
}();
