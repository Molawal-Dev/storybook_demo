import './FormButton.css'

type ButtonProps = {
    primary?: boolean;
    backgroundColor?: string;
    rounded?: boolean;
    label: string;
    onClick?: () => void;
}

const FormButton = ({ primary=false, backgroundColor, rounded, label, ...props }: ButtonProps) => {

  const setPrimary = primary ? 'form-button--primary' : 'form-button--secondary';

  const setRounded = rounded && 'form-button--rounded'

  return (
    <button
      type='button'
      className={['form-button', setPrimary, setRounded].join(' ')}
      {...props}
    >
      {label}

      <style jsx>{`
        button {
          background-color: ${backgroundColor};
        }
      `}</style>
    </button>
  )
}

export default FormButton
