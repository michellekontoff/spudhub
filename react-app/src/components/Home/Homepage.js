import { useSelector } from 'react-redux'
import './Homepage.css'
import ProductList from './ProductList';


function HomePage() {
    const products = Object.values(useSelector((state) => state.products));

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
