import React from 'react'
import {Document, Page, pdfjs } from 'react-pdf';
import file from '../assests/cv.pdf'
pdfjs.GlobalWorkerOptions.workerSrc = '//cdnjs.cloudflare.com/ajax/libs/pdf.js/2.0.943/pdf.worker.js';


export default class PDF_viewer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      file : props.file
    }
  }
  render() {
    let x = this
    return (
      <div>
        <Document 
          file= {file}
        >
        <Page pageNumber={1} />
        </Document>
      </div>
    );
  }
}