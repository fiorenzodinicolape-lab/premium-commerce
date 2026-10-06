* {
  box-sizing: border-box;
}

:root {
  --bg: #f7f3ee;
  --surface: #fffdf9;
  --surface-strong: #f0e7de;
  --card: #ffffff;
  --text: #201b1a;
  --muted: #655b57;
  --gold: #c7a271;
  --gold-deep: #9c7443;
  --line: rgba(32, 27, 26, 0.08);
  --shadow: 0 24px 48px rgba(32, 27, 26, 0.08);
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: 'Manrope', sans-serif;
  background: var(--bg);
  color: var(--text);
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  max-width: 100%;
  display: block;
}

button,
input {
  font: inherit;
}

.container {
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 10;
  backdrop-filter: blur(14px);
  background: rgba(247, 243, 238, 0.8);
  border-bottom: 1px solid var(--line);
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 84px;
}

.brand-wrap {
  display: flex;
  align-items: center;
  gap: 12px;
}

.brand-mark {
  width: 40px;
  height: 40px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, var(--gold), #e9d7ba);
  color: #fff;
  font-weight: 800;
}

.brand-name,
.brand-sub {
  line-height: 1.1;
}

.brand-name {
  font-weight: 800;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  font-size: 0.82rem;
}

.brand-sub {
  font-size: 0.74rem;
  color: var(--muted);
}

.nav-links,
.nav-actions,
.footer-links,
.hero-actions,
.category-row {
  display: flex;
  align-items: center;
}

.nav-links {
  gap: 28px;
  color: var(--muted);
  font-size: 0.95rem;
}

.nav-actions {
  gap: 12px;
}

.primary-button,
.secondary-button,
.ghost-button,
.category,
.newsletter-box button {
  border: none;
  border-radius: 999px;
  cursor: pointer;
  transition: 0.2s ease;
}

.primary-button,
.newsletter-box button {
  background: linear-gradient(135deg, var(--gold), var(--gold-deep));
  color: white;
  padding: 0.95rem 1.5rem;
  font-weight: 700;
  box-shadow: var(--shadow);
}

.secondary-button,
.ghost-button,
.category {
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid var(--line);
  color: var(--text);
  padding: 0.95rem 1.5rem;
  font-weight: 600;
}

.primary-button:hover,
.secondary-button:hover,
.ghost-button:hover,
.category:hover,
.newsletter-box button:hover {
  transform: translateY(-1px);
}

.hero {
  padding: 72px 0 44px;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.08fr 1fr;
  gap: 48px;
  align-items: center;
}

.eyebrow {
  display: inline-flex;
  padding: 0.5rem 0.8rem;
  border-radius: 999px;
  background: rgba(199, 162, 113, 0.12);
  color: var(--gold-deep);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.hero-copy h1,
.section-intro h2,
.faq-grid h2 {
  margin: 18px 0 10px;
  letter-spacing: -0.06em;
  line-height: 1;
}

.hero-copy h1 {
  font-size: clamp(3rem, 6vw, 5.3rem);
}

.hero-copy p,
.faq-grid p,
.journal-body p,
.showcase-card p,
.copy p {
  color: var(--muted);
  font-size: 1.08rem;
  line-height: 1.7;
}

.hero-actions {
  gap: 16px;
  margin: 28px 0 18px;
}

.brand-points {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  padding: 0;
  color: var(--muted);
  font-size: 0.95rem;
}

.hero-visual {
  position: relative;
  min-height: 620px;
}

.visual-card {
  position: absolute;
  overflow: hidden;
  border-radius: 28px;
  box-shadow: var(--shadow);
}

.main-card {
  inset: 0 20px 40px 0;
}

.main-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.floating-badge {
  position: absolute;
  padding: 0.75rem 1rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.78);
  backdrop-filter: blur(10px);
  box-shadow: var(--shadow);
  font-weight: 700;
}

.badge-top {
  top: 40px;
  right: 0;
}

.badge-bottom {
  bottom: 24px;
  left: 18px;
}

.feature-strip {
  padding: 10px 0 26px;
}

.strip-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 22px;
  padding: 20px 24px;
}

.strip-grid div {
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
}

.strip-grid strong {
  font-size: 1.7rem;
}

.strip-grid span {
  color: var(--muted);
}

.catalogue,
.showcase,
.journal,
.faq {
  padding: 92px 0 24px;
}

.section-intro {
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 20px;
  margin-bottom: 30px;
}

.section-intro h2,
.faq-grid h2 {
  font-size: clamp(2rem, 5vw, 3.5rem);
}

.text-link {
  color: var(--gold-deep);
  font-weight: 700;
}

.category-row {
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 28px;
}

.category {
  padding: 0.8rem 1.2rem;
  background: rgba(255, 255, 255, 0.5);
}

.category.active {
  background: var(--text);
  color: var(--surface);
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 28px;
}

.product-card {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 18px 32px rgba(32, 27, 26, 0.04);
}

.product-image {
  position: relative;
  height: 320px;
  overflow: hidden;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.product-badge {
  position: absolute;
  top: 16px;
  left: 16px;
  background: rgba(255, 255, 255, 0.9);
  padding: 0.45rem 0.7rem;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 800;
}

.product-body {
  padding: 18px 18px 20px;
}

.product-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  color: var(--muted);
  font-size: 0.8rem;
}

.product-title {
  margin: 14px 0 10px;
  font-size: 1.5rem;
}

.product-description {
  margin: 0 0 18px;
  color: var(--muted);
  line-height: 1.6;
}

.product-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.price-wrap {
  display: flex;
  align-items: end;
  gap: 8px;
}

.price {
  font-size: 1.5rem;
  font-weight: 800;
}

.old-price {
  color: var(--muted);
  text-decoration: line-through;
}

.product-btn {
  background: var(--text);
  color: white;
  border: none;
  border-radius: 999px;
  padding: 0.85rem 1.1rem;
  cursor: pointer;
  font-weight: 700;
}

.showcase-grid {
  display: grid;
  grid-template-columns: 1.3fr 0.8fr 0.8fr;
  gap: 28px;
}

.showcase-card {
  border-radius: 28px;
  overflow: hidden;
  min-height: 420px;
  background: linear-gradient(160deg, rgba(24, 24, 24, 0.6), rgba(24, 24, 24, 0.15));
  position: relative;
  color: white;
}

.showcase-card.large {
  background-image: url('https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80');
  background-size: cover;
  background-position: center;
}

.showcase-card.one {
  background-image: url('https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=900&q=80');
  background-size: cover;
  background-position: center;
}

.showcase-card.two {
  background-image: url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80');
  background-size: cover;
  background-position: center;
}

.showcase-card .copy {
  position: absolute;
  left: 28px;
  right: 28px;
  bottom: 24px;
}

.tag {
  display: inline-flex;
  padding: 0.5rem 0.7rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.14);
  backdrop-filter: blur(8px);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.showcase-card h3 {
  margin: 18px 0 8px;
  font-size: clamp(1.7rem, 2vw, 2.4rem);
  line-height: 1.1;
}

.journal-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 28px;
}

.journal-card {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 24px;
  overflow: hidden;
}

.journal-card img {
  width: 100%;
  height: 270px;
  object-fit: cover;
}

.journal-body {
  padding: 20px 18px 24px;
}

.journal-body span {
  color: var(--gold-deep);
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: 0.76rem;
}

.journal-body h3 {
  margin: 12px 0 10px;
  font-size: 1.6rem;
  line-height: 1.2;
}

.faq-grid {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 32px;
  align-items: start;
}

.faq-list {
  display: grid;
  gap: 18px;
}

.faq-list > div {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 22px;
  padding: 22px 22px 18px;
}

.faq-list h3 {
  margin: 0 0 10px;
  font-size: 1.2rem;
}

.footer {
  padding: 36px 0 52px;
  border-top: 1px solid var(--line);
}

.footer-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.footer-links {
  gap: 24px;
  color: var(--muted);
}

.newsletter {
  max-width: 400px;
  width: min(100%, 400px);
}

.newsletter p {
  margin: 0 0 10px;
  color: var(--muted);
}

.newsletter-box {
  display: flex;
  align-items: center;
  border: 1px solid var(--line);
  background: white;
  border-radius: 999px;
  overflow: hidden;
}

.newsletter-box input {
  flex: 1;
  border: none;
  background: transparent;
  padding: 1rem 1rem 1rem 1.1rem;
  font: inherit;
  outline: none;
}

@media (max-width: 980px) {
  .hero-grid,
  .faq-grid,
  .showcase-grid,
  .journal-grid,
  .product-grid {
    grid-template-columns: 1fr 1fr;
  }

  .hero-grid,
  .faq-grid {
    grid-template-columns: 1fr;
  }

  .nav {
    flex-wrap: wrap;
    justify-content: center;
    padding: 20px 0;
  }

  .nav-links {
    order: 3;
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
  }
}

@media (max-width: 640px) {
  .product-grid,
  .showcase-grid,
  .journal-grid,
  .strip-grid {
    grid-template-columns: 1fr;
  }

  .nav-actions {
    width: 100%;
    justify-content: center;
  }

  .hero {
    padding-top: 44px;
  }

  .hero-copy h1 {
    font-size: 2.7rem;
  }

  .section-intro,
  .footer-inner {
    flex-direction: column;
    align-items: flex-start;
  }
}
