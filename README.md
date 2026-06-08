# 🛒 Food Cart

A simple food ordering web application built with **React** and **Vite**. Users can browse food items, add or remove them from a cart, and view the total price in real time.

---

## 🚀 Tech Stack

- **React 19** — UI components and state management
- **React Router DOM v7** — client-side routing
- **Vite** — fast development build tool
- **CSS** — component-level styling

---

## ✨ Features

- Browse a list of food products (name, image, price)
- Add items to the cart with a single click
- Remove items from the cart
- Cart item count shown live in the navbar
- View cart with all selected items and total amount (Rs)
- Multi-page navigation — Home, Cart, About

---

## 📁 Project Structure

```
food-cart/
├── public/
├── src/
│   ├── assets/
│   │   └── Product.json        # Food product data
│   ├── Components/
│   │   ├── Header.jsx          # Navbar with cart count
│   │   ├── Home.jsx            # Product listing page
│   │   ├── Product.jsx         # Individual product card
│   │   ├── ViewCart.jsx        # Cart page with total
│   │   └── About.jsx           # About page
│   ├── App.jsx                 # Root component, routing, CartContext
│   ├── App.css
│   └── main.jsx
├── package.json
└── vite.config.js
```

---

## ⚙️ Getting Started

### Prerequisites

- Node.js (v18 or above)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/Tharshika2001/food-cart.git

# Navigate into the project
cd food-cart

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will run at `http://localhost:5173`

---

## 🧠 Key Concepts Used

- **React Context API** (`CartContext`) — global cart state shared across all components without prop drilling
- **useState & useEffect** — local state for products and real-time total calculation
- **React Router** — declarative routing between Home (`/`), Cart (`/Cart`), and About (`/about`)
- **Component-level CSS** — each component has its own stylesheet for clean separation

---

## 📦 Product Data

Products are loaded from a local JSON file (`src/assets/Product.json`). Each product has:

| Field   | Description              |
|---------|--------------------------|
| `id`    | Unique product ID        |
| `name`  | Product name             |
| `amt`   | Price in Rs              |
| `shop`  | Restaurant/shop name     |
| `ftype` | Food type (Veg/Non-Veg/Pizza) |
| `pic`   | Image URL                |

---

## 🛠️ Available Scripts

| Command         | Description                    |
|-----------------|--------------------------------|
| `npm run dev`   | Start development server       |
| `npm run build` | Build for production           |
| `npm run preview` | Preview production build     |
| `npm run lint`  | Run ESLint                     |

---

## 👩‍💻 Author

**Pakirathan Tharshika**
- GitHub: [@Tharshika2001](https://github.com/Tharshika2001)
- LinkedIn: [pakirathan-tharshika](https://www.linkedin.com/in/pakirathan-tharshika)
