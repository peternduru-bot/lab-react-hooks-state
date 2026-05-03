import React, { useState } from 'react';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [cart, setCart] = useState([]);
  
  // NEW: State for the category filter (Requirement #3)
  const [category, setCategory] = useState("All");

  const items = [
    { id: 1, name: 'Milk', category: 'Dairy' },
    { id: 2, name: 'Bread', category: 'Bakery' },
    { id: 3, name: 'Cheese', category: 'Dairy' },
    { id: 4, name: 'Apples', category: 'Produce' }
  ];

  // NEW: Logic to filter the items based on the dropdown selection
  const filteredItems = category === "All" 
    ? items 
    : items.filter(item => item.category === category);

  const appStyle = {
    backgroundColor: isDarkMode ? "#222" : "#fff",
    color: isDarkMode ? "#fff" : "#000",
    minHeight: "100vh",
    padding: "20px"
  };

  return (
    <div style={appStyle}>
      <h1>Shopping App</h1>
      
      <button onClick={() => setIsDarkMode(!isDarkMode)}>
        {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>

      <hr />

      {/* NEW: Dropdown Menu (Requirement #3) */}
      <label>Filter by Category: </label>
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="All">All</option>
        <option value="Dairy">Dairy</option>
        <option value="Bakery">Bakery</option>
        <option value="Produce">Produce</option>
      </select>

      <h2>Items for Sale</h2>
      <ul>
        {/* We now map over filteredItems instead of items */}
        {filteredItems.map(item => (
          <li key={item.id}>
            {item.name} ({item.category}) - 
            <button onClick={() => setCart([...cart, item.name])}>
              Add to Cart
            </button>
            {cart.includes(item.name) && <span> ✅ {item.name} is in your cart!</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;