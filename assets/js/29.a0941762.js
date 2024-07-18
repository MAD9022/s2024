(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{340:function(t,e,a){"use strict";a.r(e);var s=a(10),n=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("PageHeader"),t._v(" "),e("h1",{attrs:{id:"mad9022-hybrid"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mad9022-hybrid"}},[t._v("#")]),t._v(" MAD9022 Hybrid")]),t._v(" "),e("p",[t._v("The Hybrid portion of this course is designed to teach you how to create your own custom Web Components.")]),t._v(" "),e("p",[t._v("Through the hybrid modules you will learn about JavaScript class syntax, and how to create and extend your own JavaScript objects. Creating an extended class of your own will be the first hybrid\nexercise.")]),t._v(" "),e("p",[t._v("Then you will learn about how to create and style your own custom web component. This will be your second hybrid exercise.")]),t._v(" "),e("p",[t._v("Finally, you will learn about Web Component libraries that can help you build collections of web components just like framework authors do. Using "),e("a",{attrs:{href:"https://lit.dev",target:"_blank",rel:"noopener noreferrer"}},[t._v("Lit"),e("OutboundLink")],1),t._v(" to create web components will\nbe your third hybrid exercise.")]),t._v(" "),e("h2",{attrs:{id:"web-component-intro"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#web-component-intro"}},[t._v("#")]),t._v(" Web Component Intro")]),t._v(" "),e("p",[t._v("The list of available HTML elements is a finite list. The elements that are included in the list are largely meant to convey a single concept. Eg: "),e("code",[t._v("<p>")]),t._v(" means that the content nested inside this tag\nis all part of a paragraph. This is what is meant by "),e("code",[t._v("semantic")]),t._v(" HTML. Each tag has a specific meaning.")]),t._v(" "),e("p",[t._v("The associated functionality of any element is defined through the DOM. The events, which an element will listen for, the properties and attributes of the element, and the visual behaviour of the\ncomponent are all predefined. When you add a "),e("code",[t._v("<select>")]),t._v(" element to your webpage, you don't have to explain to the browser how it works, how it can contain "),e("code",[t._v("<option>")]),t._v(" elements, or how a user can\ninteract with it. It has built-in functionality that you can access through JavaScript.")]),t._v(" "),e("p",[e("code",[t._v("Web Components")]),t._v(" can be thought of as an extension of HTML5. Developers can create their own HTML element, define what attributes it can have, define event listeners, and even control what other\nelements are allowed as children. Once defined and imported, other developers can use these pre-built and enhanced elements, simply by adding the assigned tag into their own HTML files.")]),t._v(" "),e("div",{staticClass:"language-html line-numbers-mode"},[e("div",{staticClass:"highlight-lines"},[e("br"),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("br"),e("br"),e("br")]),e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("module"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("./js/coolcomponent.js"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token script"}}),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("header")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Existing HTML Content"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("header")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("main")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("cool-component")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("awesome"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Steve"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("cool-component")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("main")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br")])]),e("p",[t._v("In the example above you can see, on line 9, a web component that was imported on line 2.")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("Key Point")]),t._v(" "),e("p",[t._v("All web components have hyphenated names.")])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.youtube.com/watch?v=j0qG-afD244&list=PLyuRouwmQCjnENQk6NJlckZRXOfQP0x5B",target:"_blank",rel:"noopener noreferrer"}},[t._v("Web Component YouTube Tutorial Playlist"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"supporting-technologies-for-web-components"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#supporting-technologies-for-web-components"}},[t._v("#")]),t._v(" Supporting Technologies for Web Components")]),t._v(" "),e("p",[t._v("To be able to build a web component you need to learn how these technologies work.")]),t._v(" "),e("ol",[e("li",[t._v("JavaScript Class Syntax")]),t._v(" "),e("li",[t._v("The Prototype Chain in JavaScript")]),t._v(" "),e("li",[t._v("JavaScript Modules")]),t._v(" "),e("li",[t._v("CSS Specificity and ShadowDOM")])]),t._v(" "),e("YouTube",{attrs:{title:"Introduction to Web Components",url:"https://www.youtube.com/embed/j0qG-afD244"}}),t._v(" "),e("h3",{attrs:{id:"defineelement-method"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#defineelement-method"}},[t._v("#")]),t._v(" DefineElement Method")]),t._v(" "),e("p",[t._v("When you create a web component you are creating a JavaScript class that defines the HTML, its styling, and its behaviour. Once the class is defined it needs to be connected to the DOM.")]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("window")]),t._v(" object has a "),e("code",[t._v("customElements.defineElement()")]),t._v(" method which will connect our class with the browser's current version of the DOM.")]),t._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("window"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("customElements"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("define")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cool-component'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" CoolComponent"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("After you run this line of code in your script, other developers will be able to add "),e("code",[t._v("<cool-component>")]),t._v(" into their HTML.")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("Key point")]),t._v(" "),e("p",[t._v("We only need to run this command. There is nothing that needs to be exported from our file. The command tells the DOM to add your new component to the list of actual elements to be used in the\nwebpage. Your script tag that loads your web component script will need to include the "),e("code",[t._v('type="module"')]),t._v(" attribute.")])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/define",target:"_blank",rel:"noopener noreferrer"}},[t._v("window.customElements.define() reference "),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("<cool-component>")]),t._v(" element can be statically added directly to your HTML. Once the "),e("code",[t._v("customElements.define")]),t._v(" method is called, then the browser will know how to add it to the screen.")]),t._v(" "),e("p",[t._v("Alternatively, you would be able to add a "),e("code",[t._v('<cool-component type="awesome">Hello</cool-component>')]),t._v(" to your page through JavaScript, the same way you add any other element.")]),t._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("addCoolThing")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" cc "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cool-component'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  cc"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("setAttribute")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'type'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'awesome'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  cc"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerText "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  document"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("append")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cc"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br")])])],1)}),[],!1,null,null,null);e.default=n.exports}}]);