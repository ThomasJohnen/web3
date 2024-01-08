import React, { useContext, useEffect, useState } from 'react';
import { Context as JokeContex } from 'contexts/Context';
import { useParams } from 'react-router-dom';

const Joke = () => {
    const { getJokeWithScores, addScore } = useContext(JokeContex);
    const { id } = useParams();
    const [ joke, setJoke ] = useState(null);

    useEffect(() => {
        const fetchedJoke = getJokeWithScores(id);
        if (fetchedJoke !== null) {
            fetchedJoke.scores.sort((a, b) => {
                if (b.score === a.score) {
                    return +new Date(b.date) - +new Date(a.date);
                }
                return b.score - a.score;
            });
        }
        setJoke(fetchedJoke);
    }, [id, getJokeWithScores]);

    const [ username, setUsername ] = useState('');
    const [ score, setScore ] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        await addScore(username, Number(score), id);

        event.target.reset();
        setUsername('');
        setScore('');
        setJoke(getJokeWithScores(id));
    };

    return (
        <div>
            <h1>{joke.question}</h1>
            <p>{joke.answer}</p>
            <p>Category: {joke.category}</p>
            <p>Average Score : {joke.averageScore}</p>
            <ul>
                {joke.scores.map(score => (
                    <li key={score.id}>
                        <p>Username: {score.username}</p>
                        <p>Score: {score.score}</p>
                    </li>
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
                <label>
                    Username: <input type="text" name="username" onChange={(e) => setUsername(e.target.value)} />
                </label>
                <label>
                    Score: <input type="number" name="score" max={10} min={0} onChange={(e) => setScore(e.target.value)} />
                </label>
                <input type="hidden" name="joke" value={joke.id} />
                <input type="submit" value="Ajouter" />
            </form>

        </div>
    );
};

export default Joke;