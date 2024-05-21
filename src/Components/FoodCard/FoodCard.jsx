
import PropTypes from 'prop-types';
const FoodCard = ({item}) => {
    const {name, image, price, recipe} = item;
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <p className='absolute bg-slate-950 text-white right-0 mr-4 mt-4 px-4'>${price}</p>
                <div className="card-body text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Add to Card</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
FoodCard.propTypes ={
    item: PropTypes.object,
//     title: PropTypes.object,
//    img: PropTypes.object,
    
}
export default FoodCard;