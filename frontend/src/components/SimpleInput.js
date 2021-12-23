import useInput from '../hooks/use-input';

const validateInput = (value) => {
  return value.length > 3;
}

const SimpleInput = (props) => {

  const {
    value: enteredName,
    valueIsValid: nameIsValid,
    inputHasError: inputNameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName
  } = useInput(validateInput);


  const submitFormHandler = (e) => {
    e.preventDefault();
    if (!nameIsValid) return;
    console.log('all validated, submit: ', enteredName);
    resetName();
  }

  const nameInputClass = inputNameHasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={submitFormHandler}>
      <div className={nameInputClass}>
        <label htmlFor='name'>Your Name</label>
        <input
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
          type='text' id='name' />
      </div>
      {inputNameHasError && <p> Form is invalid, try again</p>}
      <div className="form-actions">
        <button disabled={!nameIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
