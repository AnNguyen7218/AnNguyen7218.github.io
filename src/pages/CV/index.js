import React from 'react'

import PDFViewer from '../../components/PDF_viewer'

export default class MyCV extends React.Component {
  render() {
    return (
      <div>
        <PDFViewer
          file = {'../../assests/cv.pdf'}
        />
      </div>
    );
  }
}