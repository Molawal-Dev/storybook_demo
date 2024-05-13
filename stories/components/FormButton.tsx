import './FormButton.css'

type ButtonProps = {
    primary?: boolean;
    background?: string;
    rounded?: boolean;
    label: string;
    onClick?: () => void;
}

const FormButton = ({ primary=false, background, rounded, label, ...props }: ButtonProps) => {

  const setPrimary = primary ? 'form-button--primary' : 'form-button--secondary';

  const setRounded = rounded && 'form-button--rounded'

  return (
    <button
        type='button'
        className={['form-button', setPrimary, setRounded].join(' ')}
        {...props}
    >
        {label}
    </button>
  )
}

export default FormButton
