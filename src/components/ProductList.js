import React, { Component } from "react";
import { connect } from "react-redux";

// for now: fetch in this component. Later: replace with action

class ProductList extends Component {
  componentDidMount() {
    fetch("http://localhost:4000/products")
      .then(data => data.json())
      .then(jsonData => {
        const fetchedData = jsonData;
        console.log(fetchedData);
        this.props.dispatch({
          type: "products/FETCHED",
          payload: fetchedData
        });
      })
      .catch(console.error);
  }

  displayProducts = () => {
    const productList = this.props.data.products;
    console.log("the productlist", productList);
    return productList.map(singleProduct => (
      <div>
        {singleProduct.name}
        {singleProduct.price}
      </div>
    ));
  };

  render() {
    console.log("rendering the products", this.props.data);
    return (
      <div>
        ProductList!
        {this.displayProducts()}
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    data: reduxState.items
  };
}

const connectingHOC = connect(mapStateToProps);
const ConnectedProductList = connectingHOC(ProductList);
export default ConnectedProductList;
