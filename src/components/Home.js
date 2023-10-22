import React from 'react';
import data from '../db.json';
import Service from './Service';

function Home() {

    return (
        <div className="container" style={{marginTop: '10%'}}>
            <h2> COMMUNITIES WE MANAGE </h2>

            <div className="row" style={{marginBottom: '10%'}}>
                {data.cards.map((card, index) => (
                    <div className="col-md-4" key={index} style={{boxShadow: "5px 5px 10px 0 rgba(192, 192, 192, 0.2)"}}>
                        <div className="card mb-4">
                            <img className="card-img-top" src={card.imageSrc} alt={`Card ${index + 1}`} style={{ height: '250px' }} />
                            <div className="card-body">
                                <p className="card-text" style={{ textAlign: "left", fontSize: '16px' }}>{card.text}</p>
                                <h5 className="card-text" style={{ textAlign: "left", background: '#f5f5f5'}}>{card.userName} </h5>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Service />
        </div>
    );
}

export default Home;
