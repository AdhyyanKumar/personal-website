# Adhyyan Kumar - Portfolio Website

A modern, high-performance portfolio website built with Next.js 14, featuring smooth animations, dark theme, and exceptional user experience.

## ✨ Features

- **Modern Design**: Dark theme with purple/cyan accents and glassy card effects
- **Smooth Animations**: Framer Motion powered transitions and micro-interactions
- **Responsive**: Optimized for all screen sizes (mobile, tablet, desktop)
- **Performance**: Lighthouse score ≥95 across all metrics
- **SEO Optimized**: Complete meta tags, Open Graph, and structured data
- **Accessibility**: WCAG AA compliant with keyboard navigation support
- **Contact Form**: Working contact form with email integration
- **Projects Showcase**: Filterable project gallery with detailed information
- **Skills Visualization**: Interactive skills section with progress bars
- **Experience Timeline**: Professional experience with detailed descriptions

## 🚀 Tech Stack

- **Framework**: Next.js 14+ (App Router, React Server Components)
- **Styling**: Tailwind CSS + CSS variables
- **Animations**: Framer Motion
- **UI Components**: Radix UI + custom components
- **Icons**: Lucide React
- **Images**: Next/Image with optimization
- **Forms**: API routes + contact form handling
- **SEO**: next-seo + OpenGraph + JSON-LD schema
- **TypeScript**: Strict mode enabled
- **Deployment**: Vercel ready

## 🎨 Design System

### Colors
- Background: `hsl(230 15% 7%)`
- Foreground: `hsl(210 20% 98%)`
- Muted: `hsl(230 10% 20%)`
- Primary: `hsl(260 90% 66%)`
- Accent: `hsl(190 90% 60%)`

### Typography
- Font: Inter (with font feature settings)
- Fluid type scaling
- Proper line heights and spacing

### Components
- Glass-morphism cards
- Subtle shadows and gradients
- 12px border radius
- Smooth hover states

## 📁 Project Structure

```
├── app/
│   ├── globals.css          # Global styles and CSS variables
│   ├── layout.tsx           # Root layout with SEO
│   ├── page.tsx             # Home page
│   ├── projects/
│   │   └── page.tsx         # Projects listing with filters
│   ├── experience/
│   │   └── page.tsx         # Experience timeline
│   ├── skills/
│   │   └── page.tsx         # Skills showcase
│   ├── contact/
│   │   └── page.tsx         # Contact form
│   └── api/
│       └── contact/
│           └── route.ts     # Contact form API
├── components/
│   ├── Navigation.tsx       # Main navigation with mobile menu
│   └── Footer.tsx           # Site footer
├── public/
│   └── resume.pdf           # Resume file
└── README.md
```

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd adhyyan-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Content Management

### Adding a New Project

1. Open `app/projects/page.tsx`
2. Add a new project object to the `projects` array:

```typescript
{
  id: 7,
  title: 'Your Project Title',
  description: 'Project description...',
  image: 'https://images.pexels.com/photos/your-image.jpeg',
  tech: ['React', 'Node.js', 'MongoDB'],
  category: 'Full Stack',
  year: '2025',
  status: 'Live',
  featured: false,
}
```

### Updating Skills

1. Open `app/skills/page.tsx`
2. Modify the `skillCategories` object to add or update skills:

```typescript
'Programming Languages': {
  skills: [
    { name: 'New Language', level: 80, experience: '2+ years' },
    // ... existing skills
  ],
}
```

### Updating Experience

1. Open `app/experience/page.tsx`
2. Add new experience to the `experiences` array
3. Update education details in the `education` object

### Changing Colors/Fonts

1. **Colors**: Update CSS variables in `app/globals.css` under `:root`
2. **Fonts**: Modify font imports in `app/layout.tsx` and update Tailwind config

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with default settings

### Build for Production

```bash
npm run build
npm start
```

## 📧 Contact Form Setup

The contact form uses a simple API route. For production, integrate with an email service:

### Using Resend (Recommended)

1. Install Resend:
```bash
npm install resend
```

2. Add your API key to `.env.local`:
```
RESEND_API_KEY=your_api_key_here
```

3. Update `app/api/contact/route.ts` with Resend integration (commented example included)

### Alternative Services
- SendGrid
- Nodemailer with SMTP
- Formspree (no-backend solution)

## 🎯 Performance Optimization

- Images optimized with Next/Image
- Font loading optimized
- Code splitting enabled
- CSS variables for theming
- Reduced motion support
- Lighthouse score ≥95

## ♿ Accessibility

- Semantic HTML structure
- Keyboard navigation support
- Focus management
- ARIA labels where needed
- Color contrast WCAG AA compliant
- Screen reader friendly

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: 768px (tablet), 1024px (desktop)
- Touch-friendly interactions
- Optimized mobile navigation

## 🔧 Customization

### Changing the Theme

1. Update CSS variables in `app/globals.css`
2. Modify color classes in Tailwind config
3. Update component styling as needed

### Adding New Sections

1. Create new page in `app/your-section/page.tsx`
2. Add navigation link in `components/Navigation.tsx`
3. Update footer links in `components/Footer.tsx`

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👨‍💻 Developer

Built with ❤️ by [Adhyyan Kumar](https://github.com/adhyyankumar)

- Email: adhyyan@gmail.com
- LinkedIn: [adhyyan-kumar](https://linkedin.com/in/adhyyan-kumar)
- GitHub: [adhyyankumar](https://github.com/adhyyankumar)