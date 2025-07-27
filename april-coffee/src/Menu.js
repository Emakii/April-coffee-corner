import React from 'react';
import { Coffee, Droplet, Leaf, Cookie } from 'lucide-react';

const Menu = () => {
  const menuSections = [
    {
      title: "Espresso",
      Icon: Coffee,
      items: [
        { name: "Bunna", price: "150ETB", description: "Rich, bold, and perfectly extracted" },
        { name: "Macchiato", price: "120ETB", description: "Espresso with hot water, clean and simple" },
        { name: "Coffee Spris", price: "170ETB", description: "Equal parts espresso, steamed milk, and foam" },
        { name: "Flat White", price: "90ETB", description: "Velvety microfoam meets double shot espresso" },
        { name: "Espresso", price: "120ETB", description: "Spanish-style espresso with warm milk" },
      ]
    },
    {
      title: "Coffee Accompaniments",
      Icon: Cookie,
      items: [
        { name: "Cakes & Pastries", price: "250ETB", description: "Red velvet, Black Forest, carrot cake, or tiramisu — standard in modern cafés." },
        { name: "Mini Pizzas or Savory Bites", price: "350ETB", description: "Light savory pastry options, often with cheese or meat toppings." },
        { name: "Cookies/Biscuits", price: "200ETB", description: "Locally made or imported, served as a light snack." },
        { name: "Sandwiches", price: "300ETB", description: "Light savory options — cheese, tuna, or avocado-filled." }
      ]
    },
    {
      title: "Tea & More",
      Icon: Leaf,
      items: [
        { name: "Earl Grey", price: "90ETB", description: "Classic black tea with a hint of bergamot" },
        { name: "Green Tea", price: "90ETB", description: "Light and refreshing traditional green tea" },
        { name: "Chai Latte", price: "110ETB", description: "Spiced Ethiopian tea with steamed milk" },
        { name: "Hot Chocolate", price: "105ETB", description: "Rich and creamy, made with real cocoa" },
        { name: "Golden Milk", price: "120ETB", description: "Turmeric-infused milk with warming spices" }
      ]
    },
  ];

  return (
    <section className="menu-section">
      <div className="container">
        <div className="section-header">
          <h2>Our Menu</h2>
          <p>Carefully crafted drinks and treats, made with love and intention.</p>
        </div>
        
        <div className="menu-grid">
          {menuSections.map((section, index) => (
            <div key={index} className="menu-category">
              <div className="category-header">
                <section.Icon className="category-icon" size={24} />
                <h3>{section.title}</h3>
              </div>
              
              <div className="menu-items">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="menu-item">
                    <div className="item-header">
                      <span className="item-name">{item.name}</span>
                      <span className="item-price">{item.price}</span>
                    </div>
                    <p className="item-description">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;