import e from 'cors';
import useInput from '../hooks/use-input';

const isNameValid = (name) => {
  return name.length > 3
}

const isEmailValid = (email) => {
  return email.includes('@');
}


const BasicForm = (props) => {

  const {
    value: firstName,
    valueIsValid: firstNameIsValid,
    inputHasError: inputFirstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName
  } = useInput(isNameValid);

  const {
    value: secondName,
    valueIsValid: secondNameIsValid,
    inputHasError: inputSecondNameHasError,
    valueChangeHandler: secondNameChangeHandler,
    inputBlurHandler: secondNameBlurHandler,
    reset: resetSecondName
  } = useInput(isNameValid);

  const {
    value: email,
    valueIsValid: emailIsValid,
    inputHasError: inputEmailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail
  } = useInput(isEmailValid);

  const formIsValid = firstNameIsValid && secondNameIsValid && emailIsValid;

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (!formIsValid) return;

    console.log('submitted!');
    resetFirstName();
    resetSecondName();
    resetEmail();
  }

  const fNameInputClass = inputFirstNameHasError ? 'form-control invalid' : 'form-control';
  const sNameInputClass = inputSecondNameHasError ? 'form-control invalid' : 'form-control';
  const emailInputClass = inputEmailHasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='control-group'>
        <div className={fNameInputClass}>
          <label htmlFor='name'>First Name</label>
          <input
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            type='text'
            id='name' />
          {inputFirstNameHasError && <p className='error-text'>Please enter a valid name, {firstName} too short</p>}
        </div>
        <div className={sNameInputClass}>
          <label htmlFor='name'>Last Name</label>
          <input
            onChange={secondNameChangeHandler}
            onBlur={secondNameBlurHandler}
            type='text' id='name' />
          {inputSecondNameHasError && <p className='error-text'> Please enter a valid name, {secondName} too short</p>}

        </div>
      </div>
      <div className={emailInputClass}>
        <label htmlFor='name'>E-Mail Address</label>
        <input
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          type='text' id='name' />
        {inputEmailHasError && <p className='error-text'>Please enter a email, {email} is not valid</p>}

      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
