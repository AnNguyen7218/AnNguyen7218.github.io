import React from 'react';

export default class Round extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      img : props.img,
      size: props.size,
      redirect : props.redirect
    }

    this.onClickRedirect = this.onClickRedirect.bind(this)
  }
  
  onClickRedirect () {
    window.location.href = this.state.redirect
  }

  render() {
    let x = this
    return (
      <div 
        className = 'roundBtn' 
        style = {{background: 'url(' + x.state.img + ') center no-repeat', 
                  width: x.state.size.width,
                  height: x.state.size.height, 
                  backgroundSize:'cover'}}
        onClick = {x.onClickRedirect}
      >
      </div>
    )
  }
}
