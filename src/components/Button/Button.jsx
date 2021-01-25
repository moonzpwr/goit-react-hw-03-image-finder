import propTypes from 'prop-types';

export default function Button(props) { 
    return (
        <button type='button' className="Button" onClick={props.onClick}>Load more</button>
    )
}

Button.propTypes = {
   onClick: propTypes.func
}