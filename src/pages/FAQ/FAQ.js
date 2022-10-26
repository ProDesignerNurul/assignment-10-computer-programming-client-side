import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const FAQ = () => {
    return (
        <div>
            <h2 className='mb-4 text-primary'>Some FAQ Below!!</h2>
            <div>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>What is HTML?</Accordion.Header>
                        <Accordion.Body>
                            HTML is an acronym which stands for Hyper Text Markup Language which is used for creating web pages and web applications. Let's see what is meant by Hypertext Markup Language, and Web page.

                            Hyper Text: HyperText simply means "Text within Text." A text has a link within it, is a hypertext. Whenever you click on a link which brings you to a new webpage, you have clicked on a hypertext. HyperText is a way to link two or more web pages (HTML documents) with each other.

                            Markup language: A markup language is a computer language that is used to apply layout and formatting conventions to a text document. Markup language makes text more interactive and dynamic. It can turn text into images, tables, links, etc.

                            Web Page: A web page is a document which is commonly written in HTML and translated by a web browser. A web page can be identified by entering an URL. A Web page can be of the static or dynamic type. With the help of HTML only, we can create static web pages.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>What is HTML Form?</Accordion.Header>
                        <Accordion.Body>
                            An HTML form is a section of a document which contains controls such as text fields, password fields, checkboxes, radio buttons, submit button, menus etc.

                            An HTML form facilitates the user to enter data that is to be sent to the server for processing such as name, email address, password, phone number, etc. .
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>What is CSS?</Accordion.Header>
                        <Accordion.Body>
                            Cascading Style Sheets, fondly referred to as CSS, is a simple design language intended to simplify the process of making web pages presentable.

                            CSS handles the look and feel part of a web page. Using CSS, you can control the color of the text, the style of fonts, the spacing between paragraphs, how columns are sized and laid out, what background images or colors are used, layout designs,variations in display for different devices and screen sizes as well as a variety of other effects.

                            CSS is easy to learn and understand but it provides powerful control over the presentation of an HTML document. Most commonly, CSS is combined with the markup languages HTML or XHTML.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>What is CSS Box Model?</Accordion.Header>
                        <Accordion.Body>
                            The components that can be depicted on the web page consist of one or more than one rectangular box.

                            A CSS box model is a compartment that includes numerous assets, such as edge, border, padding and material. It is used to develop the design and structure of a web page. It can be used as a set of tools to personalize the layout of different components. According to the CSS box model, the web browser supplies each element as a square prism.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>What is CSS3 Media Queries?</Accordion.Header>
                        <Accordion.Body>
                            Media queries allow you to customize the presentation of your web pages for a specific range of devices like mobile phones, tablets, desktops, etc. without any change in markups. A media query consists of a media type and zero or more expressions that match the type and conditions of a particular media features such as device width or screen resolution.

                            Since media query is a logical expression it can be resolve to either true or false. The result of the query will be true if the media type specified in the media query matches the type of device the document is being displayed on, as well as all expressions in the media query are satisfied. When a media query is true, the related style sheet or style rules are applied to the target device. Here's a simple example of the media query for standard devices.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                        <Accordion.Header>What is JavaScript ?</Accordion.Header>
                        <Accordion.Body>
                            JavaScript is a dynamic computer programming language. It is lightweight and most commonly used as a part of web pages, whose implementations allow client-side script to interact with the user and make dynamic pages. It is an interpreted programming language with object-oriented capabilities.

                            JavaScript was first known as LiveScript, but Netscape changed its name to JavaScript, possibly because of the excitement being generated by Java. JavaScript made its first appearance in Netscape 2.0 in 1995 with the name LiveScript. The general-purpose core of the language has been embedded in Netscape, Internet Explorer, and other web browsers.

                            The ECMA-262 Specification defined a standard version of the core JavaScript language.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="6">
                        <Accordion.Header>What is the JavaScript DOM?</Accordion.Header>
                        <Accordion.Body>
                        DOM stands for Document Object Model. It is a programming interface that allows us to create, change, or remove elements from the document. We can also add events to these elements to make our page more dynamic.

The DOM views an HTML document as a tree of nodes. A node represents an HTML element.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    );
};

export default FAQ;