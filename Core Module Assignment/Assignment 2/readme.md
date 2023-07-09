## 1. What’s Box Model in CSS ? 

The Box model in css describes the layout and sizing of elements on a web page. It consist of four components which defines the total space occupied by an element: content, padding, border, margin.

The properties associated with box model are:

* Content – 
1. Width – specifies the width of the content area

2. Height – specifies the height of the content area
3. Padding –
4.	top, right, bottom and left determines the space between the content area and border of element.
* Border – 
1.    border-width – sets the thickness of border
2.	border-style – specifies the style of the
3.  border (e.g., solid, dashed etc.)
4.	border-color – specifies the color of the border
5.	border-radius – specifies the rounded corners of the border.
* Margin – 
    top, right, bottom and left determines the space between elements border and neighbouring elements.
 	Together all these properties controls the overall size and spacing of elements in web page.
		
e.g.- 
```
.box {
  width: 200px;
  height: 150px;
  padding: 10px;
  border: 1px solid black;
  margin: 20px;
}
```

## 2. What are the Different Types of Selectors in CSS & what are the advantages of them?

There are different types of selectors present in CSS to target specific HTML elements and applying css to them. Some of the commonly used selectors are as followed:

### Element Selector – selects elements based on their element name.
Eg.
```
p {
  /* Styles applied to all <p> elements */
}
```
	
Advantages – simple and straight forward, targets all the element of specific type.

### Class Selectors – selects elements based on the value of their “class” attribute. Starts with (.) followed by name of the class.
Eg.
```
.highlight {
  /* Styles applied to elements with class="highlight" */
}
```
Advantages – allows the grouping and styling of multiple elements across different tags with same class name promoting reusability and maintaining consistency.

### ID Selectors – selects elements based on the unique value of their “id” attribute. Starts with (#) followed by name of the id.
Eg.
```
. #header {
  /* Styles applied to the element with id="header" */
}
```
Advantages – target a single unique element, useful for applying specific styles or JavaScript interactions.

### Attribute Selectors – selects elements based on their attribute value.
Eg.
```
input[type="text"] {
  /* Styles applied to <input> elements with type="text" */
}
```	
Advantages –allows targeting element based on the value of attribute providing flexibility and granularity in selection.

### Descendent Selectors – selects elements that are descendants of another element.
Eg.
```
.container p {
  /* Styles applied to <p> elements within an element with class="container" */
}
```
Advantages –enables targeting specific elements within a particular parent container, facilitating contextual styling.


### Child Selectors – selects direct child of an element.
Eg.
```
ul > li {
  /* Styles applied to <li> elements that are direct children of <ul> */
}
```
Advantages –targets immediate child elements, useful for styling the specific level of nested elements.

### Pseudo-classes and Pseudo-elements Selectors – select the elements based on their state or position.
Eg.
```
a:hover {
  /* Styles applied to <a> elements on hover */
}

p::first-letter {
  /* Styles applied to the first letter of <p> elements */
}
```
Advantages – enables styling based on dynamic states (e.g. hover, active) or applying styles to specific parts of an element (e.g. first letter, first line).


## 3. What is VW/VH ?

VW (Viewport Width) and VH (Viewport Height) are units of measurement in CSS that are relative to the size of viewport or the browser window.

* VW – 1vw = 1% of the width of viewport.
e.g. 
	If the width of the viewport is 1000px then 1vw is equal to 10 pixels i.e. 1% * 1000px.

* VH – 1vh = 1% of the height of viewport.
e.g. 
	If the height of the viewport is 800px then 1vw is equal to 8 pixels i.e. 1% * 800px.

In summary the major difference between the VW/VH and PX is how they are calculated and their responsiveness o changes in viewport size. VW/VH are particularly useful for creating responsive designs that dynamically adapt to the different viewport size, whereas PX provide a fixed size regardless the viewport dimensions.


## 4. Whats difference between Inline, Inline Block and block ?

The difference between “inline”, “inline-block” and “block” in css determines that how elements are rendered and how they interact with other elements within the document flow.
Inline: Inline elements do not start on a new line and only take up as much width as necessary to contain their content. They flow alongside each other horizontally within the same line.

Examples of inline elements:  `<span>`, `<a>`, `<strong>`, `<em>`, `<img>`.

Inline Block: Inline-block elements are similar to inline elements in that they flow within the same line horizontally, but they can have a specified width, height, margins, and padding. They retain their block-level properties while staying inline.

Examples of inline-block elements: `<input>`, `<button>`, `<select>`, `<div>` (with display: inline-block;).

Block: Block-level elements start on a new line and take up the full width available, extending from the left edge to the right edge of their containing element by default. They create a block-level formatting context and can contain other block-level and inline elements.

Examples of block-level elements: `<div>`, `<p>`, `<h1>-<h6>`, `<ul>`, `<li>`, `<section>`, `<header>`, `<footer>`, etc.


## 5. How is Border-box different from Content Box?

Content Box:

* The "content-box" is the default box-sizing value in CSS.
* When using "content-box", the specified width and height of an element only include the content area, excluding the padding, border, and margins.
* In other words, the width and height you set for an element using "content-box" represent the dimensions of the content area alone, and the padding, border, and margins are added to it.

Border Box:

* When using "border-box", the specified width and height of an element include the content area, padding, and border.
* In "border-box" sizing, the padding and border are included within the specified width and height, and the browser adjusts the content box size to fit.

The choice between "content-box" and "border-box" depends on the desired box-sizing behaviour. "border-box" is often favoured for its convenience, as it allows easier control over the overall dimensions of elements, especially when dealing with complex layouts and responsive designs.


## 6. What’s z-index and How does it Function ?

"z-index" property appropriately allows developers to control the layering and visibility of elements on the web page. It is commonly used in scenarios where elements need to overlap or when creating complex layouts with overlapping components, dropdown menus, or modal dialogs. It's important to note that the "z-index" property affects only elements that have a position value other than "static".

```
<!DOCTYPE html>
<html>
<head>
  <style>
    .box {
      width: 200px;
      height: 200px;
      position: absolute;
    }

    #box1 {
      background-color: red;
      z-index: 1;
    }

    #box2 {
      background-color: blue;
      z-index: 2;
      top: 50px;
      left: 50px;
    }

    #box3 {
      background-color: green;
      z-index: 3;
      top: 100px;
      left: 100px;
    }
  </style>
</head>
<body>
  <div class="box" id="box1"></div>
  <div class="box" id="box2"></div>
  <div class="box" id="box3"></div>
</body>
</html>

```

## 7. What’s Grid & Flex and difference between them?

Grid and Flex box are two popular CSS layout systems that provide different approaches to creating responsive and flexible web page layouts. 

Flex box (Flexible Box Layout):

Flex box is a one-dimensional layout system that allows you to arrange elements along a single axis (either horizontally or vertically). It provides powerful alignment and distribution capabilities for creating flexible and dynamic layouts. 

Key points about Flex box include: one dimensional layout, flex containers& flex items, flexibility & alignment.

Grid:

Grid is a two-dimensional layout system that allows you to create complex grid-based layouts with rows and columns. It provides precise control over both horizontal and vertical axes, enabling you to create responsive layouts that adapt to different screen sizes. 

Key points about Grid include: two dimensional layouts, grid containers & grid items, rows & columns and grid tracks & grid areas

Difference between Grid and Flex box:
1.	Layout system: Flex box is a one-dimensional layout system, while Grid is a two-dimensional layout system.

2.	Axis control: Flex box works along a single axis (horizontal or vertical), whereas Grid allows control over both the horizontal and vertical axes.

3.	Alignment: Flex box provides powerful alignment properties for flex items, allowing you to control their positioning within a flex container. Grid offers more advanced alignment capabilities, including alignment of both rows and columns.

4.	Layout complexity: Grid is more suitable for complex grid-based layouts with multiple rows and columns, whereas Flex box is well-suited for simpler one-dimensional layouts or aligning items within a container.


## 8. Difference between absolute and relative and sticky and fixed position explain with example.

The differences between absolute and relative positioning, as well as sticky and fixed positioning, are related to how elements are positioned within the document flow and their behaviour when scrolling.

### Absolute Positioning:

* Absolute positioning removes an element from the normal document flow and positions it relative to its nearest positioned ancestor or the containing block.
* The element's position is specified using the top, right, bottom, and left properties.

* Other elements are not affected by the absolute positioned element, and it may overlap or be overlapped by other elements.

* If no positioned ancestor is found, the element will be positioned relative to the initial containing block, which is usually the viewport.

e.g.
```
<div class="container">
  		<div class="absolute-box"></div>
</div>

	.container {
  		position: relative;
  		height: 300px;
}

.absolute-box {
  		position: absolute;
 	 	top: 50px;
  		left: 50px;
  		width: 200px;
  		height: 200px;
  		background-color: red;
}
```
In the above example, the .absolute-box element is positioned absolutely within its relative positioned parent container. It is placed 50 pixels from the top and 50 pixels from the left of its nearest positioned ancestor.

### Relative Positioning:

* Relative positioning allows an element to be positioned relative to its normal position in the document flow.
* The element's position is adjusted using the top, right, bottom, and left properties, which shift it from its original position.
* Other elements on the page are not affected by the relative positioned element, and it still occupies its original space in the document flow.
e.g.
```
<div class="relative-box"></div>
		
		.relative-box {
  			position: relative;
 	 		top: 20px;
  			left: 30px;
  			width: 150px;
  			height: 150px;
  			background-color: blue;
}
```
In the above example, the .relative-box element is positioned relative to its original position. It is shifted 20 pixels down and 30 pixels to the right from where it would normally appear.


### Sticky Positioning:

* Sticky positioning is a combination of both relative and fixed positioning.
* It behaves like a relatively positioned element until it reaches a specific scroll position, after which it becomes fixed in place.
* The element's position is determined using the top, right, bottom, and left properties when it becomes sticky.
* Sticky positioning is commonly used for creating sticky headers, navigation menus, or sidebars that stay fixed until a certain point while scrolling.

e.g.
```
	<div class="sticky-box"></div>

	.sticky-box {
  		position: sticky;
 		top: 20px;
  		width: 200px;
  		height: 100px;
 	 	background-color: green;
}
```
In the above example, the .sticky-box element starts as a relatively positioned element. However, when the user scrolls to a specific point (defined by top: 20px;), it becomes fixed in place and remains visible even as the rest of the content scrolls.

Fixed Positioning:
* Fixed positioning removes an element from the normal document flow and positions it relative to the viewport (the browser window).
* The element's position is specified using


## 9. Build Periodic Table as shown in the below image.

[periodic table](https://github.com/Gaurav-Dev24/Placement-Assignment/tree/main/CSS%20Answers/Question%209)

## 10. Build Responsive Layout both desktop and mobile and Tablet, see below image for reference ?

[layout](https://github.com/Gaurav-Dev24/Placement-Assignment/tree/main/CSS%20Answers/Question%2010)