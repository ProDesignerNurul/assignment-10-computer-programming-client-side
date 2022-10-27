import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import jsPDF from 'jspdf';
import logo from '../../images/logo.png';

class PDF extends Component {
    pdfGenerate = () => {
        var doc = new jsPDF ('landscape', 'px', 'a4', 'false');
        doc.addImage(logo, 'PNG', 65,20,500,400)
        doc.addPage()
        doc.text(60, 60, `
        * 1. Website Name : Computer Programming Tech
        * 2. Hi, welcome to my programming language tech website description,
             I made it for some special tutorials and some special courses for everyone ...so,
             please follow our description below and check the given link... 
        * 3. i have used React JS For Create Dynamic Website, 
        * 4. i have used React Router For Create Single Routing Website, 
        * 5. i have used Firebase For Store My Website Data, 
        * 6. i have used Vercel For Deploy My Server Site, 
        * 7. i have used React Bootstrap Framwork For More Profesional My Website, 
        * 8. I have made login page, registration page for more secure my site,
             and create 3 type registered system, like 1. Email and Password 2. GitHub 3. Google
           --------------------------------------------------------------------------------------- 
        * 1. My Website Live Link : https://computer-programming-d1372.web.app/ 
        * 2. My Github Code Link : https://github.com/programming-hero-web-course1/b610-learning-platform-client-side-ProDesignerNurul.git
           --------------------------------------------------------------------------------------- `)
        doc.save('Computer-Programming-Tech.pdf')
    }
    render () {
        return (
            <div>
                <Button onClick={this.pdfGenerate}> Download PDF</Button>
            </div>
        )
    }

}

export default PDF;