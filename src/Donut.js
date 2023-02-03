import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Donut.css';

function Donut() {
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {navigate('/')}, 3000)
    }, [])
    
    return (
        <div className="background-image">
            <img src={require('./images/K_Homer.png')} alt="Rotating Homer" style={{alignSelf: 'center', height: '5em',animation: 'spin 3s linear infinite'}} />
        </div>
    );
}

export { Donut };
  