import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featered from '../../../assets/home/featured.jpg';
import './Featured.css';
const Featured = () => {
    return (
        <div className="featered-item mb-10 pt-8 my-20 bg-fixed">
            <SectionTitle
            subHeading={'Check it out'}
            heading={'FROM OUR MENU'}
            ></SectionTitle>
            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-40 pb-20 pt-12 px-36">
                <div>
                    <img src={featered} alt="" />
                </div>
                <div className="md:ml-10 text-white">
                    <p>March 20, 2023</p>
                    <p className="uppercase">WHERE CAN I GET SOME?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;