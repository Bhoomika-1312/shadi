# Wedding Invitation Website

A beautiful, modern, and immersive full-stack wedding invitation website built with Next.js, featuring audio-synchronized animations, dynamic personalization, and a complete RSVP system.

## Features

✨ **Core Features:**
- 🎵 Background audio with user consent and synchronization
- 🎨 Audio-synced animations and transitions
- 👤 Dynamic personalization for each invitee
- 📅 Event details for Engagement (9th Feb 2026) and Wedding (10th Feb 2026)
- 🗺️ Google Maps integration for venue locations
- 📸 Photo gallery with lightbox view
- 💌 RSVP system with database storage
- 🙏 Blessings section from family and friends
- 📱 Fully responsive design
- ⚡ Smooth animations with Framer Motion

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Database:** MongoDB (with JSON fallback)
- **Icons:** Lucide React
- **Fonts:** Google Fonts (Inter, Playfair Display, Great Vibes)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- MongoDB (optional - falls back to JSON files if not available)
- Google Maps API key (optional - for venue maps)

### Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd wedding-invitation
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   
   Create a `.env.local` file in the root directory:
   ```env
   # Database Configuration (optional)
   # For MongoDB Atlas: mongodb+srv://username:password@cluster.mongodb.net/dbname
   # For local MongoDB: mongodb://localhost:27017/wedding-invitation
   # Leave empty to use JSON file fallback
   MONGODB_URI=

   # Google Maps API Key (optional - see GOOGLE_MAPS_SETUP.md)
   # Get one at: https://console.cloud.google.com/google/maps-apis
   # Website works without it - shows placeholder instead of embedded map
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=

   # Admin Password (optional - defaults to 'wedding2026')
   ADMIN_PASSWORD=wedding2026

   # Application URL
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   ```

   **Note:** All environment variables are optional! The website works without them.

4. **Add your media files:**
   
   - **Audio:** Place your background music file in `public/audio/wedding-music.mp3`
   - **Song Details:** Edit `lib/audioConfig.ts` to add song title, artist, and other details
   - **Images:**
     - `public/images/ganesha.jpg` - Lord Ganesha image for hero section
     - `public/images/engagement-1.jpg`, `engagement-2.jpg`, `engagement-3.jpg` - Engagement photos
     - `public/images/couple-1.jpg`, `couple-2.jpg`, `couple-3.jpg` - Couple photos

5. **Run the development server:**
   ```bash
   npm run dev
   ```

6. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Customization

### Updating Event Details

Edit `components/EventDetailsSection.tsx` to update:
- Event dates and times
- Venue names and addresses
- Event descriptions

### Updating Venue Locations

Edit `components/VenueMapsSection.tsx` to update:
- Venue coordinates (lat/lng)
- Venue addresses
- Google Maps embed URLs

### Customizing Love Story

Edit `components/LoveStorySection.tsx` to update:
- Timeline events
- Dates and descriptions
- Icons for each event

### Updating Blessings

Edit `components/BlessingsSection.tsx` to update:
- Family member names
- Relationship types
- Blessing messages

### Changing Colors and Theme

Edit `tailwind.config.ts` to customize:
- Color palette (gold, maroon, etc.)
- Font families
- Animation timings

### Audio Synchronization

The audio timeline is tracked in `app/page.tsx`. You can adjust animation triggers in:
- `components/HeroSection.tsx`
- `components/LoveStorySection.tsx`
- `components/PhotoGallery.tsx`

## Database Setup

### Option 1: MongoDB (Recommended for Production)

1. **MongoDB Atlas (Cloud):**
   - Create a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
   - Create a cluster and get your connection string
   - Add it to `.env.local` as `MONGODB_URI`

2. **Local MongoDB:**
   - Install MongoDB locally
   - Start MongoDB service
   - Use `mongodb://localhost:27017/wedding-invitation` in `.env.local`

### Option 2: JSON Files (Development/Simple Setup)

If MongoDB is not configured, the app automatically falls back to JSON files stored in the `data/` directory:
- `data/invitees.json` - Stores invitee information
- `data/rsvps.json` - Stores RSVP responses

## Deployment

### Deploy to Vercel (Recommended)

1. **Push your code to GitHub**

2. **Import to Vercel:**
   - Go to [Vercel](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository

3. **Add Environment Variables:**
   - In Vercel project settings, add:
     - `MONGODB_URI` (if using MongoDB)
     - `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`
     - `NEXT_PUBLIC_APP_URL`

4. **Deploy:**
   - Vercel will automatically build and deploy

### Other Deployment Options

The app can be deployed to any platform that supports Next.js:
- **Netlify:** Similar to Vercel, supports Next.js
- **AWS Amplify:** Full Next.js support
- **Self-hosted:** Build with `npm run build` and run with `npm start`

## Project Structure

```
wedding-invitation/
├── app/
│   ├── api/
│   │   ├── invitee/
│   │   │   └── route.ts          # API for invitee management
│   │   └── rsvp/
│   │       └── route.ts          # API for RSVP submissions
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Main page
├── components/
│   ├── AudioPlayer.tsx           # Audio player with consent
│   ├── BlessingsSection.tsx      # Blessings from family
│   ├── EventDetailsSection.tsx   # Event dates and venues
│   ├── HeroSection.tsx           # Hero with Ganesha
│   ├── LoadingScreen.tsx         # Loading animation
│   ├── LoveStorySection.tsx      # Timeline love story
│   ├── PhotoGallery.tsx          # Photo gallery with lightbox
│   ├── RSVPSection.tsx           # RSVP form
│   ├── ScrollProgress.tsx       # Scroll progress indicator
│   └── VenueMapsSection.tsx     # Google Maps integration
├── lib/
│   └── db.ts                     # Database utilities
├── public/
│   ├── audio/                    # Background music files
│   └── images/                   # Image assets
├── data/                         # JSON fallback storage
├── .env.local                    # Environment variables (create this)
├── next.config.js                # Next.js configuration
├── tailwind.config.ts            # Tailwind configuration
└── package.json                  # Dependencies
```

## Viewing Visitor Data

**Admin Dashboard:** Access all visitor names and RSVPs at `/admin`
- Default password: `wedding2026` (change in `.env.local` as `ADMIN_PASSWORD`)
- View statistics, export to CSV, and see all data in one place

**Direct File Access:** If using JSON storage, view:
- `data/invitees.json` - All visitor names
- `data/rsvps.json` - All RSVP responses

See `VIEW_DATA.md` for detailed instructions.

## Usage

1. **First Visit:**
   - User enters their name
   - System creates an invitee record
   - URL is updated with invitee ID

2. **Personalized Experience:**
   - Name appears throughout the website
   - "Dear [Name]" in hero section
   - Personalized RSVP form

3. **Audio Experience:**
   - User consents to play background music
   - Animations sync with audio timeline
   - Controls available at bottom right

4. **RSVP:**
   - User selects Yes/No
   - Optional message
   - Response saved to database

## Troubleshooting

### Audio not playing
- Check browser autoplay policies
- Ensure user has given consent
- Verify audio file path and format (MP3, WAV, OGG)

### Images not loading
- Verify image paths in `public/images/`
- Check file names match component references
- Ensure images are in correct format (JPG, PNG, WebP)

### Database errors
- Check MongoDB connection string
- Verify environment variables are set
- Check `data/` directory permissions (for JSON fallback)

### Google Maps not showing
- Verify `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` is set
- Check API key has Maps Embed API enabled
- Verify venue coordinates are correct

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Tips

1. **Optimize Images:**
   - Use WebP format when possible
   - Compress images before adding
   - Use Next.js Image component (already implemented)

2. **Audio Optimization:**
   - Use compressed MP3 format
   - Consider multiple quality options
   - Lazy load audio

3. **Database:**
   - Use MongoDB Atlas for production
   - Index frequently queried fields
   - Consider caching for read-heavy operations

## License

This project is created for personal use. Feel free to customize it for your own wedding!

## Support

For issues or questions:
1. Check the troubleshooting section
2. Review Next.js documentation
3. Check component comments for customization hints

---

**Made with ❤️ for your special day**

*May your wedding be filled with love, joy, and beautiful memories!*

