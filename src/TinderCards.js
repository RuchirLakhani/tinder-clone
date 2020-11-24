
import TinderCard from 'react-tinder-card';
import React, { useEffect, useState } from "react";
import './TinderCards.css';
import database from "./firebase";




function TinderCards() {
//const people = [];
//people.push('ruchir','kritik');
//setPeople([...people, 'ruvhir']) --react way of pushing elemnts in a list
const [people, setPeople] = useState([]);
        //piece of code that runs on the condition
        useEffect(() => {

            //runs once when component loads and never again

           const unsubscribe = database
           .collection('people')
           .onSnapshot(snapshot => (
                setPeople(snapshot.docs.map(doc => doc.data()))
            ));

            return () => {
                unsubscribe();
            };

        }, []);





    return (
        <div>
           
           <div className="tinderCard_cardContainer" >

            {people.map(person => (
                <TinderCard
                    className="swipe"
                    key={person.name}
                    preventSwipe={['up','down']}
                
                
                >
                    <div 
                    style={{ backgroundImage: `url(${person.url})` }}
                    className="card">
                        <h3>{person.name}</h3>


                    </div>

                </TinderCard>
            ))}

            </div>
        </div>
    );
}

export default TinderCards
