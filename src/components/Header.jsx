import { useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const homename = location.state?.name || "Guest"; // Safe fallback

  function capitalizeAll(str) {
    if (!str) return "";
    return str.toUpperCase(); // Convert entire string to uppercase
  }

  return (
    <div>
      <h1 className="text-3xl font-bold">
        Hello {capitalizeAll(homename)}!
      </h1>
      <p>I help to manage your activities :)</p>
    </div>
  );
}

export default Header;
