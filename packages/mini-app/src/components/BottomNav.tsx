import { useLocation, useNavigate } from "react-router-dom";

const navItems = [
  { path: "/", icon: "🏠", label: "Home" },
  { path: "/markets", icon: "📊", label: "Markets" },
  { path: "/radar", icon: "🐋", label: "Radar" },
  { path: "/signals", icon: "🤖", label: "Signals" },
  { path: "/wallet", icon: "💰", label: "Wallet" },
];

export function BottomNav() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className="bottom-nav">
      {navItems.map((item) => (
        <button
          key={item.path}
          className={`nav-item ${location.pathname === item.path ? "active" : ""}`}
          onClick={() => navigate(item.path)}
          style={{ background: "none", border: "none", cursor: "pointer" }}
        >
          <span className="nav-item-icon">{item.icon}</span>
          {item.label}
        </button>
      ))}
    </nav>
  );
}
