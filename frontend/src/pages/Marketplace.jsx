function Marketplace() {

  const products = [

    {
      title: "🎨 VS Code Theme Pack",
      category: "Themes",
      price: "$12",
      description:
        "Modern premium editor themes for developers."
    },

    {
      title: "⚛ React Templates",
      category: "Templates",
      price: "$25",
      description:
        "Production ready React & Next.js templates."
    },

    {
      title: "🤖 AI Extensions",
      category: "AI Tools",
      price: "$19",
      description:
        "AI powered coding assistant extensions."
    },

    {
      title: "☁ Cloud Hosting Pack",
      category: "Hosting",
      price: "$49",
      description:
        "Deploy applications instantly with cloud hosting."
    },

    {
      title: "🛡 Security Toolkit",
      category: "Cyber Security",
      price: "$35",
      description:
        "Professional ethical hacking toolkit."
    },

    {
      title: "📚 Premium Courses",
      category: "Education",
      price: "$15",
      description:
        "Advanced learning courses and certifications."
    }

  ];

  return (

    <div className="marketplace-page">

      {/* HERO */}

      <section className="hero-section">

        <div className="hero-left">

          <span className="hero-badge">
            Digital Marketplace
          </span>

          <h1>
            🛒 Quavron Marketplace
          </h1>

          <p className="hero-text">
            Buy and sell developer tools,
            AI systems, templates,
            hosting services, courses,
            extensions and digital products.
          </p>

          <div className="hero-buttons">

            <button className="primary-btn">
              Explore Marketplace
            </button>

            <button className="secondary-btn">
              Start Selling
            </button>

          </div>

        </div>

      </section>

      {/* SEARCH */}

      <div
        style={{
          marginTop: "30px"
        }}
      >

        <input
          className="search"
          type="text"
          placeholder="Search marketplace..."
        />

      </div>

      {/* PRODUCTS */}

      <div className="projects-grid">

        {products.map((product, index) => (

          <div
            className="project-card"
            key={index}
          >

            <div className="project-top">

              <h3>
                {product.title}
              </h3>

              <span>
                {product.category}
              </span>

            </div>

            <p>
              {product.description}
            </p>

            <div
              style={{
                marginTop: "20px",
                fontSize: "22px",
                color: "#38bdf8",
                fontWeight: "bold"
              }}
            >
              {product.price}
            </div>

            <div className="project-footer">

              <button>
                Preview
              </button>

              <button>
                Buy Now
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>

  );

}

export default Marketplace;
