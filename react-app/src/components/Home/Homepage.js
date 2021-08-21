import { useSelector } from 'react-redux'
import './Homepage.css'
import ProductList from './ProductList';


function HomePage() {

    function sortProductsByName (productA, productB) {
        let nameA = productA.name.toUpperCase();
        let nameB = productB.name.toUpperCase();
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }

        return 0;
    }

    const products = Object.values(useSelector((state) => state.products)).sort(sortProductsByName);

    const user = useSelector(state => state.session.user);

    return (
        <div>
            <h1>SpudHub</h1>
            <div className="container">
                <ul className="list">
                    {products.map((product) => (
                        <ProductList key={product.id} user={user} product={product} />
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default HomePage
