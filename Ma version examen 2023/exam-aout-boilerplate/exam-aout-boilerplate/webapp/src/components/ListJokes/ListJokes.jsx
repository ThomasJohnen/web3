import React, { useContext } from 'react';
import { Context as JokeContex } from 'contexts/Context';

const ListJokes = () => {
    const { jokes } = useContext(JokeContex);

    return (
        <div>
        <h1>List of Jokes</h1>
        <ul>
            {jokes.map((joke) => (
                <li key={joke.id}>
                    <a href={`/jokes/${joke.id}`}>
                        <h2>{joke.question}</h2>
                        <p>{joke.answer}</p>
                    </a> 
                </li>
            ))}
        </ul>
    </div>
    )
}

export default ListJokes;
    
