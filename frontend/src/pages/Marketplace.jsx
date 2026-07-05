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
        "Deploy fullstack applications instantly."
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
        "Advanced learning tracks and certifications."
    }

  ];

  return (

    <div className="marketplace-page">

      {/* HERO */}

      <section className="courses-hero">

        <div>

          <h1>
            🛒 Quavron Marketplace
          </h1>

          <p>

            Buy and sell developer tools,
            templates, AI systems,
            hosting services, extensions,
            learning resources and digital products.

          </p>

        </div>

      </section>

      {/* SEARCH */}

      <section className="courses-search">

        <input
          type="text"
          placeholder="Search marketplace..."
        />

      </section>

      {/* CATEGORIES */}

      <section className="stats-section">

        <div className="stat-card">
          <h2>🎨</h2>
          <p>Themes</p>
        </div>

        <div className="stat-card">
          <h2>⚛</h2>
          <p>Templates</p>
        </div>

        <div className="stat-card">
          <h2>🤖</h2>
          <p>AI Tools</p>
        </div>

        <div className="stat-card">
          <h2>☁</h2>
          <p>Hosting</p>
        </div>

      </section>

      {/* PRODUCTS */}

      <section className="projects-section">

        <div className="section-title">

          <h2>
            🔥 Trending Products
          </h2>

          <button>
            Explore All
          </button>

        </div>

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

      </section>

      {/* SELL SECTION */}

      <section className="hero-section">

        <div className="hero-left">

          <h1>
            💼 Sell Your Products
          </h1>

          <p className="hero-text">

            Publish templates, themes,
            AI systems, extensions,
            code snippets, courses,
            hosting solutions and developer tools
            directly on Quavron Marketplace.

          </p>

          <div className="hero-buttons">

            <button className="primary-btn">
              Start Selling
            </button>

            <button className="secondary-btn">
              Creator Dashboard
            </button>

          </div>

        </div>

      </section>

    </div>

  );

}

export default Marketplace;
