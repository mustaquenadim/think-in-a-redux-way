import './App.css';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import AddProduct from './components/AddProduct';
import ShoppingCart from './components/ShoppingCart';
import { useSelector } from 'react-redux';

const App = () => {
	const products = useSelector((state) => state.products);

	return (
		<>
			<Header />
			<main className="py-16">
				<div className="productWrapper">
					<div className="productContainer" id="lws-productContainer">
						{products?.map((product) => (
							<ProductCard key={product.id} product={product} />
						))}
					</div>
					<div>
						<AddProduct />
					</div>
				</div>
			</main>
			<ShoppingCart />
		</>
	);
};

export default App;
