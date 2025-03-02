# Product Page with Shopping Cart

## 📌 Project Overview
This is a **React-based Product Page** with a **Shopping Cart** that allows users to browse products, add them to the cart, and manage their selections. The cart supports increasing or decreasing product quantities and removing items, with a dynamically updating total price.

## 🛠 Features

- **📌 Product Listing**: Displays available products with images, names, prices, and an "Add to Cart" button.
- **🛒 Shopping Cart**: Users can view selected products in the cart.
- **➕ Increase Quantity**: Click the **+** button to increase the quantity of a product.
- **➖ Decrease Quantity**: Click the **-** button to decrease the quantity of a product.
- **❌ Remove Item**: Click the "Remove" button to delete an item from the cart.
- **🏷 Total Calculation**: The cart dynamically updates the total price based on product quantity changes.
- **🎨 Styled UI**: Properly formatted and styled cart layout with adequate spacing.

## 📂 Folder Structure
```
project-folder/
│── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── ProductList.js
│   │   ├── CartPage.js
│   ├── context/
│   │   ├── CartContext.js
│   ├── styles/
│   │   ├── styles.css
│   ├── App.js
│── public/
│── package.json
│── README.md
```

## 🚀 Installation & Setup

### Clone the repository:
```sh
git clone https://github.com/rutujakale111/product-page.git
cd product-page
```

### Install dependencies:
```sh
npm install
```

### Start the development server:
```sh
npm start
```
The app will run at **http://localhost:3000/**

## 🏗 How It Works

1. Products are displayed on the homepage with an "Add to Cart" button.
2. Clicking "Add to Cart" adds the product to the shopping cart.
3. The cart allows users to:
   - **Increase** product quantity using the **+** button.
   - **Decrease** quantity using the **-** button.
   - **Remove** items using the **Remove** button.
4. The **total price** updates dynamically at the bottom of the cart.

## 📜 Dependencies
- **React** (UI Framework)
- **React Icons** (Icons for buttons)
- **CSS** (Styling)

## 💡 Future Enhancements
✅ Add **local storage** support to save the cart state.  
✅ Implement a **checkout process** with payment integration.  
✅ Improve **mobile responsiveness**.

## 📧 Contact
For questions or suggestions, feel free to reach out:  
📩 **Email**: rutujak1105@gmail.com <br>
🔗 **GitHub**: https://github.com/rutujakale111
