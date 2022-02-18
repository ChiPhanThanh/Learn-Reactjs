import React from "react";
import './App.css';
import ComponentOne from './component/ComponentOne';
import Header from './component/Header/Header';



class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [
        {
          name: "Laptop Asus",
          price: "10000000",
          imge: "img/lenovo.png",
          hot: true,
        },

        {
          name: "Laptop Dell",
          price: "20000000",
          imge: "img/lenovo.png",
          hot: false,
        },

        {
          name: "Laptop Acer",
          price: "167000000",
          imge: "img/lenovo.png",
          hot: true,
        },

        {
          name: "Laptop ThinkPad",
          price: "34000000",
          imge: "img/lenovo.png",
          hot: false,
        },

        {
          name: "Laptop Huawei",
          price: "23000000",
          imge: "img/lenovo.png",
          hot: true,
        },

        {
          name: "Laptop Lampad",
          price: "34000000",
          imge: "img/lenovo.png",
          hot: false,
        },

        {
          id: 1,
          name: "Laptop Ronaldo",
          price: "34000000",
          imge: "img/lenovo.png",
          hot: true,
        },

        {
          name: "Laptop Donaltrum",
          price: "34000000",
          imge: "img/lenovo.png",
          hot: true,
        },
      ],
    };
  }

  deleteProduct = (id) => {
    console.log("Xoa san pham ID" + id);
  };

  editNameProduct = (id, name) => {
    console.log("Xoa san pham ID" + id + " co ten" + name);
  };


  show_product = () => {
    const listProduct = this.state.products.map((iteams, index) => (
      <ComponentOne
        key={index}
        index = {index}
        price={iteams.price}
        edit={(id, name) => {
          this.deleteProduct(id, name);
        }}
        delete={(id) => {
          this.editNameProduct(id);
        }}
        image={iteams.imge}
        hot={iteams.hot}
      >
        {iteams.name}
      </ComponentOne>
    ));
    return listProduct;
  };

  render() {
    return (
      <div>
        <Header />
        <div className="ComponentOne">{this.show_product()}</div>
      </div>
    );
  }
}


export default App;
