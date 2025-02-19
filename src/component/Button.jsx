import PropTypes from 'prop-types';

const Button = ({name,style}) => {
    return (
        <button className={`btn btn-${style}`}>{name}</button>
    );
};

Button.propTypes = {
    name: PropTypes.string.isRequired,
    style: PropTypes.string.isRequired,
};

export default Button;