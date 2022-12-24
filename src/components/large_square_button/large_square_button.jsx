import './large_square_button.css';

const LargeSquareButton = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize
}) =>
{
  return (
    <button onClick={ onClick } class="large-selection-button">
      { children }
    </button>
  );
}

export default LargeSquareButton;