import FoodCard from "../../../Components/FoodCard/FoodCard";
import PropTypes from 'prop-types';

const OrderTab = ({items}) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto'>
            {
                items.map(item => <FoodCard item={item} key={item._id}></FoodCard>)
            }
        </div>
    );
};
OrderTab.propTypes ={
    items: PropTypes.object,

    
}
export default OrderTab;