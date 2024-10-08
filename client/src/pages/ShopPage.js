import {Row, Col} from 'react-bootstrap';
import ProductCard from '../components/ProductCard';

const productsArray = [
  {
      id: "prod_Qbl5Ay66bO8NuW",
      image: "https://as1.ftcdn.net/v2/jpg/04/83/25/50/1000_F_483255019_m1r1ujM8EOkr8PamCHF85tQ0rHG3Fiqz.jpg",
      title: "Ethically Sourced Jeans",
      description: "This is a description of the jeans. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 49.99
  },
  {
      id: "prod_Qbl8Bn9tzdQAPg",
      image: 'https://as1.ftcdn.net/v2/jpg/01/99/56/52/1000_F_199565283_bFeqVr0L9JNYwTPus3rOUIFQa9ACc0K4.jpg',
      title: "Ethically Sourced Shirt",
      description: "This is a description of the shirt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ornare ex sed tortor lacinia bibendum. Proin eros velit, auctor ut eros quis, pretium malesuada urna. Ut eu metus non est hendrerit accumsan.",
      price: 39.99
  },
  {
      id: "prod_Qbl8FqeZQ6WI5c",
      image: 'https://as1.ftcdn.net/v2/jpg/02/68/00/30/1000_F_268003032_PYDU5gcLWsTAFSN2mnYO2CN8fw1dUBBj.jpg',
      title: "Ethically Sourced Sunglasses",
      description: "This is a description of the sunglasses. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ornare ex sed tortor lacinia bibendum. Proin eros velit, auctor ut eros quis, pretium malesuada urna. Ut eu metus non est hendrerit accumsan.",
      price: 9.99
  }
]

function getProductData(id) {
  let productData = productsArray.find(product => product.id === id);

  if (productData === undefined) {
      console.log("Data does not exist.");
  }
  return productData;
}


function Store() {
    return (
        <>
            <h1 align="center" className='p-3'>Cozy Threads Store</h1>
            <Row xs={1} md={3} className="g-4">
                {productsArray.map((product, idx) => (
                    <Col align="center" key={idx}>
                        <ProductCard product={product}/>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default Store;