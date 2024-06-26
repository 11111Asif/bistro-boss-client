import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import UseMenu from '../../../Hooks/UseMenu';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
const Menu = () => {
    const [menu] = UseMenu()
    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')
    return (
        <div>
             <Helmet>
                <title>Bistro Boss | Menu</title>
             </Helmet>
             <Cover img={menuImg} title='Our Menu'></Cover>
             <SectionTitle
                subHeading={"Don's miss"}
                heading={"TODAY's OFFER"}
             ></SectionTitle>
             {/* offered menu */}
             <MenuCategory items={offered}></MenuCategory>
              {/* desert menu */}
              <MenuCategory items={dessert} title= 'Dessert' img={dessertImg} ></MenuCategory>
              {/* pizza items */}
              <MenuCategory items={pizza} title= 'Pizza' img={pizzaImg} ></MenuCategory>
              {/* salad items */}
              <MenuCategory items={salad} title= 'Salad' img={saladImg} ></MenuCategory>
              {/* soup items */}
              <MenuCategory items={soup} title= 'Soup' img={soupImg} ></MenuCategory>
        </div>
    );
};

export default Menu;