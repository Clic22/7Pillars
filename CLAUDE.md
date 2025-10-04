# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static website for the band "7 Pillars" - a French alternative music duo consisting of Thomas and Aymeric. The site is built with vanilla HTML, CSS, and JavaScript (no build tools or frameworks).

## Project Structure

```
7PillarsWeb/
├── index.html        # Main HTML file with all sections
├── style.css         # All styles including responsive design
├── script.js         # Interactive features and animations
└── .github/
    └── workflows/    # GitHub Actions for Claude integration
```

## Development

This is a static website with no build process. To work with this project:

- **Preview**: Open `index.html` directly in a browser, or use a local server
- **Deployment**: The site can be hosted on any static hosting service (GitHub Pages, Netlify, Vercel, etc.)

## Code Architecture

### HTML Structure (index.html)
The single-page site is organized into semantic sections:
- **Navigation** (`.navbar`): Fixed header with responsive mobile menu
- **Hero** (`#home`): Full-screen landing with parallax effect
- **About** (`#about`): Band story, influences, and stats
- **Music** (`#music`): Release cards and Spotify embed
- **Contact** (`#contact`): Social media links
- **Footer**: Copyright and tagline

### CSS Architecture (style.css)
- **CSS Variables** (lines 8-24): Centralized design tokens for colors, spacing, and transitions
- **Mobile-First Responsive**: Media queries at 968px, 768px, and 480px breakpoints
- **Component-Based**: Modular styles for cards, buttons, sections
- **Animations**: Keyframe animations for fade-ins and scroll indicators

### JavaScript Features (script.js)
- **Mobile Navigation** (lines 1-29): Burger menu toggle with animation
- **Navbar Behavior** (lines 31-42): Background changes on scroll
- **Smooth Scrolling** (lines 44-59): Anchor navigation with navbar offset
- **Scroll Animations** (lines 61-83): Intersection Observer for fade-in effects
- **Parallax** (lines 101-109): Hero section parallax on scroll
- **Dynamic Footer** (lines 130-135): Auto-updates copyright year

## Design System

### Color Palette
- Primary: `#c44536` (red/terracotta)
- Secondary: `#2a2a2a` (dark gray)
- Accent: `#f4a261` (orange)
- Backgrounds: Light (`#ffffff`) and Dark (`#0a0a0a`)

### Typography
- Body: Inter (300, 400, 500, 600, 700)
- Headings: Playfair Display (700)

### Key Patterns
- Gradient cards for featured content
- Hover effects with `translateY` transforms
- Consistent border-radius: 15px for cards, 50px for buttons
- Box shadows for depth

## Content Updates

When updating releases or content:
- **New Music**: Add `.release-card` in the `#music` section (lines 108-203)
- **Social Links**: Modify `.social-card` elements (lines 222-280)
- **Band Info**: Edit the `#about` section (lines 48-96)
- **Featured Release**: Use `.release-card.featured` class (spans 2 columns on desktop)

## Social Media & Data Sources

### Official Links

**Linktree**: https://linktr.ee/7pillarsmusic

**Music Platforms**:
- **Spotify**: https://open.spotify.com/artist/0FALnBqHDnu5GdyCEj6W2H
- **Apple Music**: https://music.apple.com/us/artist/7-pillars/1746189345
- **YouTube Music**: https://music.youtube.com/channel/UCZRXsJ8IFoe8zn_eCXXBYmg
- **Deezer**: https://deezer.page.link/HjNNxXpAUUbsAJdX6
- **Amazon Music**: https://music.amazon.fr/artists/B0D4DYNV93
- **iTunes Store**: https://music.apple.com/fr/album/roads-ep/1746923049

**Social Media**:
- **Instagram**: https://instagram.com/7pillarsmusic (@7pillarsmusic)
- **Threads**: https://www.threads.com/@7pillarsmusic (@7pillarsmusic)
- **TikTok**: https://tiktok.com/@7pillarsmusic (@7pillarsmusic)
- **Facebook**: https://www.facebook.com/profile.php?id=61560388991105
- **X (Twitter)**: https://twitter.com/7PillarsMusic (@7PillarsMusic)

### Fetching Assets & Data

When developing features that require band data, images, videos, or other assets:

1. **Music Data**: Use the Spotify/Apple Music APIs or fetch metadata from streaming platforms
2. **Social Media Content**:
   - Instagram posts and media can be accessed via Instagram's API or web scraping (when permitted)
   - Facebook page content via Facebook Graph API
   - Twitter/X posts via X API
3. **Cover Art & Photos**: Available through music streaming platforms' APIs
4. **Videos**: Check YouTube channel or social media platforms for video content
5. **Press Kit**: Contact the band for official press materials, high-res photos, and logos

### Data to Fetch
- Latest releases and discography
- Album/single artwork
- Band photos and promotional images
- Social media metrics (followers, engagement)
- Upcoming shows or events
- Music videos and behind-the-scenes content

## GitHub Actions

Two Claude Code workflows are configured:
1. **claude.yml**: Responds to `@claude` mentions in issues and PRs
2. **claude-code-review.yml**: Automatically reviews new/updated PRs
