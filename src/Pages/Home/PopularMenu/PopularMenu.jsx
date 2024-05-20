import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const PopularMenu = () => {
    const [menu, setMenu] = useState([])

    useEffect(() => {
        fetch('Menu.json')
        .then(res => res.json())
        .then(data => {
            const popularItems = data.filter(item => item.category === 'popular')
            setMenu(popularItems)
        })
    }, [])
    return (
        <section className="mb-12">
            <SectionTitle
                subHeading={'Popular Item'}
                heading={'FROM OUR MENU'}
            ></SectionTitle>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {
                    menu.map(item => <MenuItem item={item} key={item._id}></MenuItem>)
                }
            </div>
            
            <button className="btn btn-outline border-0 border-b-4 mt-4 mx-auto flex">View full menu</button>
            
        </section>  
    );
};

export default PopularMenu;