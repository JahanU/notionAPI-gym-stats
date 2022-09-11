import React, { useState } from 'react';


let gymLabels = [
    'Push', 'Pull', 'Legs'
];

let pushExercises = [
    'Bench Press', 'Incline Bench',
    'Dumbell Press', 'Incline Dumbell Press',
    'Machine Flys', 'Cable Flys', 'Decline Flys',
    'Overhead Press', 'Lateral Raises',
    'Dips', 'Seated Dips', 'Cable Push Down'
];

let pullExercises = [
    'Pull Ups', 'Lat Pull Down',
    'Seated Row',
    'Deadlift', 'Sumo Lift',
];

let legExercises = [
    'Leg Press', 'Squat',
    'Leg Curl', 'Leg Extension',
    'Calf Press', 'Calves Raises',
];

let map = new Map();
map.set('Push', pushExercises);
map.set('Pull', pullExercises);
map.set('Legs', legExercises);


export default function StatsInput() {

    const [selectedGymLabel, setSelectedGymLabel] = useState(gymLabels[0]);
    const [exercises, setExercises] = useState(pushExercises);
    const [selectedExercise, setSelectedExercise] = useState(pushExercises[0]);
    const [weight, setWeight] = useState(0);
    const [rep, setRep] = useState(0);
    const [comment, setComment] = useState(0);
    const [notionCode, setNotionCode] = useState(null);
    const [error, setError] = useState(false);
    const [message, setMessage] = useState('');

    const onGymLabelhandler = (input) => {
        const label = input.target.value;
        setMessage('');
        setSelectedGymLabel(label);
        if (map.has(label)) { // Update list of excersises based on label
            setExercises(map.get(label));
            setSelectedExercise(map.get(label)[0]);
        }
    }

    const onExcerciseHandler = (input) => {
        setMessage('');
        setSelectedExercise(input.target.value);
    }

    const onWeightHandler = (input) => {
        setMessage('');
        setWeight(input.target.value);
    }

    const onRepHandler = (input) => {
        setMessage('');
        setRep(input.target.value);
    }

    const onCommentHandler = (input) => {
        setMessage('');
        setComment(input.target.value);
    }

    const onNotionCodeHandler = (input) => {
        setNotionCode(input.target.value);
    }

    const submitStats = async (e) => {
        e.preventDefault();
        console.log(selectedGymLabel, selectedExercise, weight, notionCode);

        let payload = {
            tag: selectedGymLabel,
            exercise: selectedExercise,
            weight: weight,
            reps: rep,
            comment: comment,
            notionCode: notionCode
        }

        console.log(payload);

        const url = 'https://notionapi-gym-stats.herokuapp.com/post-gym-stats';
        // const url = 'http://localhost:4000/post-gym-stats';

        try {
            const resp = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });
            if (!resp.ok) {
                throw new Error('Request failed!');
            }
            setError(false);
            setMessage('Successfully submitted stats!');
        }
        catch (err) {
            setError(true);
        }
    }

    return (
        <form className='form-control' onSubmit={submitStats}>

            <div className='control-group'>
                <label>Gym Day: {selectedGymLabel}</label>
                <select onChange={onGymLabelhandler}>
                    {gymLabels.map(label =>
                        <option key={label}>{label}</option>
                    )}
                </select>

                <label htmlFor="exercises">Exercises</label>
                <select onChange={onExcerciseHandler}>
                    {exercises.map(exercise =>
                        <option key={exercise}>{exercise}</option>
                    )}
                </select>


                <label htmlFor="weight">Weight</label>
                <input type="number" onChange={onWeightHandler} />

                <label htmlFor="reps">Reps</label>
                <input type="number" onChange={onRepHandler} />

                <label htmlFor="comment">Comments</label>
                <input onChange={onCommentHandler} />

                <label htmlFor="notion">Notion Code</label>
                <input type="number" onChange={onNotionCodeHandler} />
            </div>

            <div className='form-actions'>
                <button>Submit</button>
            </div>

            <br></br>
            {error && <span className='error-text'>Error with request</span>}
            {message && <span className='success-text'>{message}</span>}

        </form>
    );

}

