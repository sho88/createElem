# CreateElem(ent)

***

### What is this?

A set of simple DOM manipulation functions, and that's it. 2kb in size, and pretty useful for quick prototyping.

***
### Install via NPM
`npm i create-elem`

***

### How to use
```html
<!DOCTYPE html>
<html>
	...
	<body>
		<div id="app"></div>

		<script>
		(function () {
			const element = CreateElem.create('div', {
				class: 'app',
				events: {
					click: function () {
						// do what you need to do in here...
					}
				}
			});

			CreateElem.append(document.getElementById('app'), element);
		}());
		</script>
	</body>
</html>


```
***

### References

**_CreateElem.create(tag, attributes, content)_**
Function used to create an element, with the following arguments:
1. tag - element
2. attributes - An object literal that contains the attributes of this element. You can pass an object in, or just place `null` if you do not intend to add any attributes. In addition to attributes being added, you can add an events property that will hold event listeners for the element you are creating.
3. This will be a string representation of the text you would like to add inside this component.


**_CreateElem.append(container, child)_**
Function used to append a DOM element (or an array of DOM elements) into another DOM element as shown above in the 'How to use' section.
1. container - DOM element.
2. child - DOM element (this can either be a DOM element, or an array containing DOM elements).

**_CreateElem.exists(element)_**
Check to see if an element exists or not. This will return a boolean.
1. element - string representation of an element e.g `.app`

**_CreateElem.empty(element)_**
Empties an element.

1. element - This can either be a string representation of an element e.g `.app` or can be the DOM element itself.

***
### Developed by
***
* [Sho Carter-Daniel](https://www.linkedin.com/in/sho-carter-daniel-18347618/)
