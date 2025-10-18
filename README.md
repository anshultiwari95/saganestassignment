# Saganest - Next.js Project Structure

This project is organized with a modular component structure for better maintainability and scalability.

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles with Tailwind CSS
│   ├── layout.js            # Root layout component
│   └── page.js              # Main page component
└── components/
    ├── index.js             # Component exports
    ├── header/
    │   └── Header.js        # Navigation header component
    ├── footer/
    │   └── Footer.js        # Footer component
    ├── sections/
    │   ├── HeroSection.js   # Hero/banner section
    │   ├── AboutSection.js  # About us section
    │   ├── ServicesSection.js # Services section
    │   └── ContactSection.js # Contact form section
    └── ui/                  # Reusable UI components (future)
```

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🧩 Component Organization

### Header Component (`src/components/header/Header.js`)
- Responsive navigation bar
- Logo and menu items
- Mobile-friendly hamburger menu

### Footer Component (`src/components/footer/Footer.js`)
- Company information
- Social media links
- Contact details
- Quick navigation links

### Section Components (`src/components/sections/`)
- **HeroSection**: Landing banner with call-to-action
- **AboutSection**: Company information and features
- **ServicesSection**: Service offerings grid
- **ContactSection**: Contact form and information

## 🎨 Styling

This project uses **Tailwind CSS** for styling:
- Utility-first CSS framework
- Responsive design built-in
- Dark mode support
- Custom color schemes

## 📱 Features

- ✅ Responsive design
- ✅ Modern UI components
- ✅ Contact form
- ✅ Smooth scrolling navigation
- ✅ SEO-friendly structure
- ✅ Accessibility features

## 🔧 Customization

### Adding New Sections
1. Create a new component in `src/components/sections/`
2. Export it from `src/components/index.js`
3. Import and use it in `src/app/page.js`

### Modifying Styles
- Edit Tailwind classes directly in components
- Add custom styles to `src/app/globals.css`
- Configure Tailwind in `tailwind.config.js`

### Adding New Pages
- Create new files in `src/app/` directory
- Use the same component structure for consistency

## 📦 Dependencies

- **Next.js 15.5.6** - React framework
- **React 19.1.0** - UI library
- **Tailwind CSS 4** - Styling framework
- **ESLint** - Code linting

## 🚀 Deployment

Build the project for production:
```bash
npm run build
npm start
```

Deploy to Vercel, Netlify, or any other hosting platform that supports Next.js.