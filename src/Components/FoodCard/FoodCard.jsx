
import PropTypes from 'prop-types';

import UseAuth from '../../Hooks/UseAuth';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import UseAxiosSecure from '../../Hooks/UseAxiosSecure';

const FoodCard = ({item}) => {
    const {name, image, price, recipe, _id} = item;
    const {user} = UseAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const axiosSecure = UseAxiosSecure()

    const handleAddCart = food => {
        if(user && user.email){
            console.log(user.email, food)
            const cartItem = {
                    menuId: _id,
                    email: user.email,
                    name,
                    image,
                    price

            }
            axiosSecure.post('/carts', cartItem)
            .then(res => {
                console.log(res.data)
                if(res.data.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
            })
        }
        else{
            Swal.fire({
                title: "you are not Logged",
                text: "please login to add to the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
              }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', {state: {from:location}})
                //   Swal.fire({
                //     title: "Deleted!",
                //     text: "Your file has been deleted.",
                //     icon: "success"
                //   });
                }
              });
        }
    }

    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <p className='absolute bg-slate-950 text-white right-0 mr-4 mt-4 px-4'>${price}</p>
                <div className="card-body flex flex-col items-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-end">
                        <button onClick={() => handleAddCart(item)} className="btn btn-outline bg-slate-100 border-orange-400 border-0 border-b-4 mt-4">Add to Card</button>
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