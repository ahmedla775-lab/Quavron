import { ShoppingCart, User, Search } from "lucide-react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        ⚡ Quavron
      </div>

      <div className="nav-search">
        <Search size={18} />
        <input
          type="text"
          placeholder="Search products..."
        />
      </div>

      <div className="nav-actions">
        <button>
          <ShoppingCart size={20} />
        </button>

        <button>
          <User size={20} />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
