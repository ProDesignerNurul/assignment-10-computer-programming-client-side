import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import jsPDF from 'jspdf';
import logo from '../../images/logo.png';

class PDF extends Component {
    pdfGenerate = () => {
        var doc = new jsPDF ('landscape', 'px', 'a4', 'false');
        doc.addImage(logo, 'PNG', 65,20,500,400)
        doc.addPage()
        doc.text(60, 60, 'name')
        doc.save('a.pdf')
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