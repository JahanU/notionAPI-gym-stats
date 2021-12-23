import { useRef, useState } from 'react';


const SimpleInput = (props) => {

  const nameRef = useRef('');
  const [name, setName] = useState('');

  const nameInputHandler = (e) => {
    setName(e.target.value);
  }

  const submitFormHandler = (e) => {
    e.preventDefault();
    console.log(name);

    console.log(nameRef.current.value)
  }

  return (
    <form onSubmit={submitFormHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input
          ref={nameRef}
          onChange={nameInputHandler} type='text' id='name' />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
