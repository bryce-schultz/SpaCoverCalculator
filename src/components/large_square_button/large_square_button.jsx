import './large_square_button.css';

const LargeSquareButton = ({
  children,
  onClick
}) =>
{
  return (
    <button onClick={ onClick } class="large-selection-button">
      { children }
    </button>
  );
}

export default LargeSquareButton;