import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import PropTypes from 'prop-types';

const MenuCategory = ({items, title, img}) => {
    return (
        <div>
            { title && <Cover img={img} title={title}></Cover>}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-16">
                {
                    items.map(item => <MenuItem key={item._id} item={item} ></MenuItem>)
                }
            </div>
        </div>
    );
};
MenuCategory.propTypes ={
    items: PropTypes.object,
    title: PropTypes.object,
   img: PropTypes.object,
    
}
export default MenuCategory;