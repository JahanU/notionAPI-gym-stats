import React, { useState } from 'react';


let gymLabels = ['Push', 'Pull', 'Legs'];

let pushExercises = ['Bench Press', 'Incline Bench', 'Decline Bench',
    'Decline Flys', 'Cable Flys', 'Machine Flys',
    'Overhead Press', 'Dips', 'Seated Dips'];

let pullExercises = ['Lat Pull Down', 'Seated Row', 'Deadlift', 'Pull Ups'];

let legExercises = ['Calf Press', 'Calves Raises', 'Leg Curl',
    'Leg Extension', 'Leg Press', 'Squat'
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
    const [notionCode, setNotionCode] = useState(null);
    const [error, setError] = useState(false);

    const onGymLabelhandler = (input) => {
        setSelectedGymLabel(input.target.value);

        if (map.has(input.target.value)) { // Update list of excersises based on label
            setExercises(map.get(input.target.value));
        }
    }

    const onExcerciseHandler = (input) => {
        setSelectedExercise(input.target.value);
    }

    const onWeightHandler = (input) => {
        setWeight(input.target.value);
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
            notionCode: notionCode
        }

        console.log(payload);

        // const url = 'https://notionapi-gym-stats.herokuapp.com/post-gym-stats';
        const url = 'http://localhost:4000/post-gym-stats';

        try {
            const resp = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            if (!resp.ok) {
                console.log(resp);
                throw new Error('Request failed!');
            }

            setError(false);
        }
        catch (err) {
            setError(true);
        }

    }

    return (
        <form className='form-control' onSubmit={submitStats}>
            {error && <span className='error-text'>Error with request</span>}
            <div className='control-group'>
                <label>Gym Day</label>
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

                <label htmlFor="notion">Notion Code</label>
                <input type="number" onChange={onNotionCodeHandler} />

            </div>

            <div className='form-actions'>
                <button>Submit</button>
            </div>

        </form>
    );

}

