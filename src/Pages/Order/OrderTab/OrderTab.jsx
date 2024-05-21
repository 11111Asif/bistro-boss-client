
import Swiper from "swiper";
import FoodCard from "../../../Components/FoodCard/FoodCard";
import PropTypes from 'prop-types';
import { SwiperSlide } from "swiper/react";



const OrderTab = ({ items }) => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto'>
                        {
                            items.map(item => <FoodCard item={item} key={item._id}></FoodCard>)
                        }

            {/* <Swiper
                pagination={pagination}
                modules={[pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    
                    
                </SwiperSlide>

            </Swiper> */}
        </div>
    );
};
OrderTab.propTypes = {
    items: PropTypes.object,


}
export default OrderTab;