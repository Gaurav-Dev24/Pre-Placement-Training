## 1. "`<!DOCTYPE HTML>`" is it a tag of html? If not, what is it and why do we use it?

* DOCTYPE html is not a tag in html, it is known as “Document Type Declaration” or “Document Type Definition” (DTD).

* It is used to define the type or version of html being used in webpage.

* DOCTYPE html declaration is used in html to indicate that the document is written in HTML syntax. 

* The purpose of `<DOCTYPE html>` is to inform the browser about the version of html document, which helps the browser to render the page correctly.

* It helps to ensure better cross-browser compatibility and consistent rendering of webpages across different devices and platforms.

## 2. Explain Semantic tags in html? And why do we need it?

* Semantic tags in HTML are elements that provide meaning and structure to the content within a webpage.

* Unlike generic tags “`<div>`” and “`<span>`”. Semantic tags describe the purpose and role of the content they wrap.

* They help both humans and search engines to understand the significance of different sections of a webpage.

Here are some examples of semantic tags introduced in HTML5: -
`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`

In summary, semantic tags in HTML add meaning and structure to webpage content improving accessibility, search engine optimization and forward compatibility.

## 3. Differentiate between HTML Tags and Elements?

Tags – Tags are fundamental building blocks of HTML syntax. They are used to define the structure and appearance of elements within HTML document. Tags are represented by angle brackets “<” and “>” and usually comes in pairs with an opening tag and closing tag. 

Ex- 

`<p>` ………. `</p>` is an example of tag. <p> is the known as opening tag and </p> is known as closing tag.


It is important to note that some tags are void or empty don’t having closing tag and are self-closed with forward slash  ( ‘/ ‘)  before the closing angle bracket of the opening tag for example,

`<img src=”image.png” alt=”image” />`, `<br/>` and `<hr/>` etc.


Elements – Elements are composed of tags, along with the content or other element they enclose. An element consists of an opening tag with content and a closing tag. The opening tag marks the beginning of the element and closing tag marks the end of the element. The content be text or other elements or a combination of both.

Ex –
`<p>` This is paragraph `</p>` as a whole is an example of element where `<p>` is opening tag “This is paragraph” is content and `</p>` is closing tag.

## 4. Build Your Resume using HTML only.

[Click Here For HTML Code](https://github.com/Gaurav-Dev24/Placement-Assignment/blob/main/HTML%20Answers/Q.no_4_resume.html)

## 5. Write HTML code so that it looks like the below image.

[Click Here for HTML code](https://github.com/Gaurav-Dev24/Placement-Assignment/blob/main/HTML%20Answers/Q.no_5_image.html)

## 6. What are some of the advantages of HTML5 over its previous versions?

HTML5 is the fifth revision of Hyper Text Mark-up Language, which has been introduced with several significant advancements over previous versions. Some of the major changes are as followed:-

* Rich Multimedia Support 

* Improved Backward Compatibility

* Enhanced New Semantics such as `<header>`, `<footer>`, `<article>`, `<section>`

* Improved form elements

* Introduction of localStorage API

## 7. Create a simple Music player using html only.

[Click Here for HTML code](https://github.com/Gaurav-Dev24/Placement-Assignment/blob/main/HTML%20Answers/Q.no_7_music_player.html)

## 8. What is the difference between `<figure>` tag and `<img>` tag?

The major difference between `<img>` and `<figure>` is `<img>` tag is used to embed image in html document. It is self-closing tag that require src attributes to specify the image source or URL.

Whereas `<figure>` tag is used to group and represent self-contained content such as images, diagrams and code snippets. It provides a way to associate caption or description with the content it encloses.

Apart from it `<img>` tag is primarily used for displaying image it does not have any additional semantic meaning whereas in `<figure>` tag, it provides semantic meaning to the content.


Syntax of image tag - 

```
<img src=”./images/img.png” alt=”image”/>
```

Syntax for figure tag – 

```
<figure>
	<img src=”./images/img.png” alt=”image”/>
	<figcaption>Caption</figcaption>
</figure>
```

## 9. What’s the difference between html tag and attribute and give example of some global attributes?

### Html Tag- 
An HTML tag represents an element in an HTML document and is enclosed within angle brackets. Tags define the structure and content of the document. They can be categorising into two types “Opening tag” and “Closing tag”. The opening tag denotes the start and closing tag denotes the end of the element. Some elements known as “void” and “empty” does not require closing tag hence known as self-closing element.

Some examples of tags are:
```
<p>This is paragraph tag</p>

<a href=”#” >This is anchor tag</a>

<img src=”./images/img.png” alt=”image”/>
```

### Attributes- 
An attribute is provided in HTML tag to modify or to provide additional information about the element. Attributes are placed inside the opening tag and consist of name-value pair. The attribute name is followed by “=” sign and attribute value is followed by “ “ and ‘ ‘ quotes.

Some of the examples of attributes are;

href, type, target, placeholder src, alt, width and height etc.
```
<a href="https://www.example.com" target="_blank">Link</a>

<input type="text" id="username" placeholder="Enter your name">

<img src="image.jpg" alt="Image description" width="500" height="300">
```

Examples of global attributes are:

* Class – specifies one or more classes to an element
* Id – provides unique identifier to the element
* Style – defines inline css style to the element
* Title – specifies the title or tooltip text for element
* Lang – defines the language of the elements content
* Data – allows custom data attribute to be added to element

## 10. Write Html code so that it looks like the below image.

[Click Here for HTML Code](https://github.com/Gaurav-Dev24/Placement-Assignment/blob/main/HTML%20Answers/Q.no_10_table.html)