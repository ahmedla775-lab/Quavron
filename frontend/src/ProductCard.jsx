import { motion } from "framer-motion";

function ProductCard({
  title,
  category,
  price,
  description
}) {
  return (
    <motion.div
      className="product-card"
      whileHover={{ scale: 1.03 }}
    >
      <div className="product-category">
        {category}
      </div>

      <h3>{title}</h3>

      <p>{description}</p>

      <div className="product-footer">
        <span>{price}</span>

        <button>
          Buy Now
        </button>
      </div>
    </motion.div>
  );
}

export default ProductCard;
