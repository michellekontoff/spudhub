
import {  useSelector } from 'react-redux'
// import { fetchAllProducts } from '../../store/products';
import './Homepage.css'
import { Link } from 'react-router-dom';

function HomePage() {

    const products = Object.values(useSelector((state) => state.products));

    const user = useSelector(state => state.session.user);

    // useEffect(() => {
    //     dispatch(fetchAllProducts());
    // }, [dispatch])

    return (
        <div>
            <h1>Spudhub</h1>
            <div className="container">
                <ul className="list">
                    {products.map((product) => (
                        <div className='product-container' key={product.id}>
                            {user ?
                                <button className='plus-btn'>
                                    <i className="fas fa-plus"></i>
                                </button>
                                : null
                            }
                            <Link to={`/products/${product.id}`}>
                                <li className="product">
                                    <img src={product.image} alt={product.id}></img>
                                    <div>{product.name}</div>
                                    <div>${product.price}</div>
                                </li>
                            </Link>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default HomePage
