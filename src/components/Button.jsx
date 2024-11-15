import PropTypes from 'prop-types';

const Button = ({ name, isBeam, containerClass }) => (
    <button className={containerClass}>
        {isBeam ? `🔲 ${name}` : name}
    </button>
);

Button.propTypes = {
    name: PropTypes.string.isRequired,
    isBeam: PropTypes.bool,
    containerClass: PropTypes.string,
};

Button.defaultProps = {
    isBeam: false,
    containerClass: '',
};

export default Button;
