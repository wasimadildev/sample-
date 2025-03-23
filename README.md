# Modern Portfolio Website

A fully responsive, modern portfolio website built with HTML, CSS, and JavaScript.

## Features Implemented

- 📱 **Fully Responsive Design**: Works seamlessly on all devices - desktop, tablets, and mobile phones
- 🌓 **Dark/Light Mode Toggle**: Switch between dark and light themes with state persistence using localStorage
- 🎯 **Interactive Project Filtering**: Filter projects by category (Web, App, Design, or All)
- 🔄 **Testimonials Slider**: Interactive carousel with autoplay, pause on hover, and dot/arrow navigation
- 📝 **Blog Section**: Showcase your articles with modern card design and hover effects
- 📄 **Resume Download**: Allow visitors to download your resume with tracking capability
- 🔍 **Skill Progress Bars**: Animated progress bars showing your skill proficiency
- 📞 **Contact Form**: With validation and form submission feedback
- 🔼 **Smooth Scrolling**: Navigation with smooth scroll to sections

## Sections

- **Hero Section**: A welcoming introduction with social media links
- **About Me**: Background information and skills with animated progress bars
- **Projects**: Filterable project showcase with hover effects
- **Services**: Modern card-based design showcasing services
- **Contact**: Form with validation and contact information
- **Responsive Navigation**: Mobile-friendly dropdown menu with smooth scrolling

## Technologies Used

- HTML5
- CSS3 with custom variables for theming
- Vanilla JavaScript (no frameworks)
- Font Awesome for icons
- Google Fonts

## Setup and Usage

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/portfolio-website.git
   ```

2. Navigate to the project directory:
   ```
   cd portfolio-website
   ```

3. Open `index.html` in your browser to view the website.

4. To customize:
   - Replace placeholder images in the `img` folder with your own
   - Update text content in `index.html`
   - Modify colors in CSS variables (in `css/style.css`)
   - Add your own projects to the gallery

## Project Structure

```
portfolio-website/
│
├── index.html              # Main HTML file
├── css/
│   └── style.css           # Stylesheet
├── js/
│   └── script.js           # JavaScript functionality
├── img/                    # Image directory
│   ├── hero-bg.jpg         # Hero section background
│   ├── profile.jpg         # Profile picture
│   └── project1.jpg...     # Project images
└── README.md               # Project documentation
```

## Customization

### Changing Colors

The color scheme can be easily modified by changing the CSS variables in the `:root` section of `style.css`:

```css
:root {
    --primary-color: #2a9d8f;
    --secondary-color: #264653;
    --accent-color: #e76f51;
    /* other colors... */
}
```

### Adding Projects

To add a new project to the gallery, add the following HTML structure inside the `.project-gallery` div:

```html
<div class="project-item" data-category="YOUR_CATEGORY">
    <div class="project-img">
        <img src="img/your-project-image.jpg" alt="Project Description">
        <div class="project-overlay">
            <div class="project-info">
                <h3>Project Title</h3>
                <p>Project description goes here.</p>
                <div class="project-links">
                    <a href="#" aria-label="View Live"><i class="fas fa-eye"></i></a>
                    <a href="#" aria-label="View Code"><i class="fab fa-github"></i></a>
                </div>
            </div>
        </div>
    </div>
</div>
```

## Dark Mode Implementation

The website includes a dark/light mode toggle with the following features:

- Theme preference is saved in localStorage
- Custom color scheme for dark mode
- Smooth transition between modes
- Toggle icon changes based on the active theme

## Project Filtering System

The project filtering functionality allows visitors to:

- View all projects or filter by category
- Smooth transitions when filtering
- Active state indicator on filter buttons
- Mobile-responsive filtering interface

## Testimonials Carousel

The testimonials slider includes:

- Automatic rotation with 5-second interval
- Pause on hover functionality
- Manual navigation with arrows and dot indicators
- Smooth transitions between testimonials
- Responsive design that adapts to all screen sizes

## Blog Section

The blog section features:

- Card-based design with hover effects
- Featured image with zoom effect on hover
- Date indicator for each article
- "Read More" link with animated arrow
- Call-to-action button to view all articles

## Customizing the Website

See the inline comments in the code files for guidance on customizing specific elements of the website. The site is built with maintainability and easy customization in mind.

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Font Awesome for the icons
- Google Fonts for the typography
- Unsplash for placeholder images # sample-
