import ProductCard from './components/productCard/ProductCard';
import './App.css'
import logo from './assets/imag2.jpg';
import NavBar from './components/navbar/NavBar'

function App(){
  const products=[
    {name:'redmi',url:logo,price:20},
    {name:'samsung',url:logo,price:20},
    {name:'nokia',url:logo,price:20},
    {name:'poco',url:logo,price:20},
    {name:'iphone',url:logo,price:20},
    {name:'sparx',url:logo,price:20},
    {name:'ball',url:logo,price:20},
  ]

  return (
    <>
    <NavBar/>

    <div className='app'>
    <h1>Products Display</h1>
    <div className="products">
      {
        products.map((product,index)=>{
          return <ProductCard
          key={index}
          price={product.price}
          name={product.name}
          url={product.url}
          />
        })
      }
    </div>

    </div>
    </>
  );
}

export default App;