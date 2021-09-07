import React, {useState}  from 'react';
import './Info.css';
import data from '../../data';




 function Info(props) {

    const { num } = props;

   
    return (
       
            <div className="info-box">
              
                <h1 className="name">{data[num].name.first + " "+ data[num].name.last}</h1>
             
            <span className="count">{num} &#8725; {(data.length)} </span>
            <div className="user-info">
            
            <ul className="person-detail">
                <li><b>From:</b></li>
                <li><b>Job Title:</b></li>
                <li> <b>Employer:</b></li>
            </ul>
            <ol className="movie-list">
                <b>Favorite Movies:</b>
               <li className="custom-indent"></li>
               <li className="custom-indent"></li>
               <li className="custom-indent"></li>
            </ol>
            </div>
            </div>
    
    
        
    )
}

export default Info;