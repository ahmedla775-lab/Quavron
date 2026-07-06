import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";

function Marketplace() {

  const products = [
    {
      title: "VS Code Theme Pack",
      category: "Themes",
      price: "$12",
      description:
        "Modern premium themes for developers."
    },

    {
      title: "React Templates",
      category: "Templates",
      price: "$25",
      description:
        "Production-ready React templates."
    },

    {
      title: "AI Extensions",
      category: "AI Tools",
      price: "$19",
      description:
        "AI powered coding assistant tools."
    }
  ];

  return (
    <div className="marketplace">

      <Navbar />

      <div className="hero">
        <h1>
          🛒 Quavron Marketplace
        </h1>

        <p>
          Buy and sell developer tools,
          AI systems, templates and
          digital products.
        </p>
      </div>

      <div className="products-grid">

        {products.map((product, index) => (
          <ProductCard
            key={index}
            title={product.title}
            category={product.category}
            price={product.price}
            description={product.description}
          />
        ))}

      </div>

    </div>
  );
}

export default Marketplace;
