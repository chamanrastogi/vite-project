
import PropTypes from 'prop-types';

const Items = (props) => {
    return (       
           <p>Id:{props.item.id} - Name: {props.item.name}</p>        
       
    );
};

Items.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired
    }).isRequired
};

export default Items;