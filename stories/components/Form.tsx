import './Form.css'
import FormButton from './FormButton'

type FormProps = {
    background?: string;
    rounded?: boolean;
    primary?: boolean;
    inputBackground?: string;
    placeholderColor?: string;
}

const Form = ({ background, rounded, primary=false, inputBackground, placeholderColor}: FormProps) => {
  const setPrimary = primary && 'form-primary';

  const setRounded = rounded && 'form-rounded';

  return (
    <form className={['form', setRounded, setPrimary].join(' ')}>
        <input type="email" 
            placeholder="Enter email"
            className='form-input'
        />
        <input type="password" 
            placeholder="Enter password"
            className='form-input'
        />

        {
            primary ? (
                <FormButton 
                    primary
                    label='Submit Form'
                />
            ):(
                <FormButton 
                    rounded
                    label='Submit Form'
                />
            )
        
        }
        <style jsx>{`
        form {
          background-color: ${background};
        }
        input {
          background-color: ${inputBackground};
        }
        input::placeholder {
          color: ${placeholderColor};
        }
      `}</style>
        
    </form>
  )
}

export default Form
