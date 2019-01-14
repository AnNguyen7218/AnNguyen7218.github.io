import React from 'react'

import ava from '../../assests/ava.jpg';

import Round from '../../components/round'

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Round 
            img = {ava} 
            size = {{width: '200px', height: '200px'}}
            redirect = {'/cv'}
          />
      </div>
    );
  }
}