import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'typeface-lato/index.css';

class SimplePage extends Component {
  render() {
    return (
      <div style={{ backgroundColor: 'black', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', fontFamily: 'Lato' }}>
        <h1 style={{ color: '#FF0505', fontWeight: 'bold', fontSize: '5.5em', marginTop: '10px', marginBottom: '0px', textAlign: 'center'}}>KIDNAP</h1>
        <p style={{ color: 'white', fontSize: '2em', marginTop: '0px', marginBottom: '100px', textAlign: 'center' }}>Enjoy having your precious NFTs stolen!</p>
        <Link to='/donut' style={{ textDecoration: 'none' }}>
          <div style={{ backgroundColor: '#FF0505', color: 'white', fontSize:'1.5em', padding: '10px 30px', borderRadius: '10px', fontWeight: '500', marginTop: '40px' }}>START KIDNAPPING SOON</div>
        </Link>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
          <a href='https://twitter.com/kidn_app' target='_blank' rel='noopener noreferrer'>
            <img src={require('./images/twitter.png')} alt='Twitter' style={{ width: '30px', margin: '0 10px' }} />
          </a>
          <a href='https://instagram.com/_kidn.app' target='_blank' rel='noopener noreferrer'>
            <img src={require('./images/instagram.png')} alt='Instagram' style={{ width: '30px', margin: '0 10px' }} />
          </a>
          <a href='https://t.me/kidn_app' target='_blank' rel='noopener noreferrer'>
            <img src={require('./images/telegram.png')} alt='Telegram' style={{ width: '30px', margin: '0 10px' }} />
          </a>
        </div>
      </div>
    );
  }
}

export { SimplePage };
