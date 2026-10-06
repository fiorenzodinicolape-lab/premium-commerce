const express = require('express');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const PORT = process.env.PORT || 3000;
const DB_PATH = path.join(__dirname, 'database.sqlite');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const db = new sqlite3.Database(DB_PATH, (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
    process.exit(1);
  }
  console.log('Connected to SQLite database.');
  initDatabase();
});

function initDatabase() {
  db.run(`
    CREATE TABLE IF NOT EXISTS products (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      category TEXT NOT NULL,
      price REAL NOT NULL,
      originalPrice REAL,
      rating REAL NOT NULL,
      reviews INTEGER NOT NULL,
      image TEXT NOT NULL,
      badge TEXT,
      featured INTEGER DEFAULT 0,
      description TEXT
    )
  `);

  db.get('SELECT COUNT(*) AS count FROM products', (err, row) => {
    if (err) {
      console.error('Error checking products count:', err.message);
      return;
    }

    if (row.count === 0) {
      const products = [
        {
          name: 'Aster Leather Tote',
          category: 'Accessories',
          price: 189,
          originalPrice: 249,
          rating: 4.9,
          reviews: 128,
          image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
          badge: 'Bestseller',
          featured: 1,
          description: 'Sculpted leather luxury bag with handcrafted details and a soft suede interior.'
        },
        {
          name: 'Veloura Smartwatch',
          category: 'Wearables',
          price: 299,
          originalPrice: 389,
          rating: 4.8,
          reviews: 97,
          image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80',
          badge: 'New',
          featured: 1,
          description: 'Premium fitness and style combined with sapphire glass and all-day battery.'
        },
        {
          name: 'Noir Audio Speaker',
          category: 'Audio',
          price: 249,
          originalPrice: 329,
          rating: 4.7,
          reviews: 204,
          image: 'https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?auto=format&fit=crop&w=900&q=80',
          badge: 'Top Rated',
          featured: 1,
          description: 'Immersive room-filling sound with rich bass and a luxe matte finish.'
        },
        {
          name: 'Luna Ceramic Lamp',
          category: 'Home',
          price: 139,
          originalPrice: 189,
          rating: 4.6,
          reviews: 73,
          image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
          badge: 'Popular',
          featured: 0,
          description: 'Soft ambient lighting designed to create a refined atmosphere in every room.'
        },
        {
          name: 'Harbor Travel Set',
          category: 'Travel',
          price: 219,
          originalPrice: 299,
          rating: 4.9,
          reviews: 162,
          image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=900&q=80',
          badge: 'Limited',
          featured: 0,
          description: 'Premium carry-on essentials for elevated movement and effortless organization.'
        },
        {
          name: 'Solstice Wireless Charger',
          category: 'Tech',
          price: 89,
          originalPrice: 119,
          rating: 4.5,
          reviews: 58,
          image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=900&q=80',
          badge: 'Eco',
          featured: 0,
          description: 'Minimal aluminum charging pad with fast wireless performance and clean aesthetics.'
        }
      ];

      const insert = db.prepare(`
        INSERT INTO products (name, category, price, originalPrice, rating, reviews, image, badge, featured, description)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `);

      products.forEach((product) => {
        insert.run(
          product.name,
          product.category,
          product.price,
          product.originalPrice,
          product.rating,
          product.reviews,
          product.image,
          product.badge,
          product.featured,
          product.description
        );
      });

      insert.finalize();
      console.log('Seed products added.');
    }
  });
}

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.get('/api/products', (_req, res) => {
  db.all('SELECT * FROM products ORDER BY featured DESC, id ASC', (err, rows) => {
    if (err) {
      console.error('Error fetching products:', err.message);
      res.status(500).json({ error: 'Unable to fetch products.' });
      return;
    }

    res.json(rows);
  });
});

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  if (email === 'admin@premiumcommerce.it' && password === 'admin123') {
    return res.json({ success: true, message: 'Accesso consentito.' });
  }

  return res.status(401).json({ success: false, message: 'Credenziali non valide.' });
});

app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Premium Commerce running on http://localhost:${PORT}`);
});
