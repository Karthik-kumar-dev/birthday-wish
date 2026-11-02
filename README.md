# 🎂 Doraemon Birthday Surprise for Harshitha

A production-grade, single-page, Doraemon-themed birthday celebration website built with pure HTML5, CSS3, and vanilla JavaScript (no build step, zero external runtime dependencies).

---

## 🌟 Interactive Experience & Page Flow

1. **Screen 1: Welcome (The Anywhere Door & Camera Fly-Through)**
   - Text: *"Hey Harshitha, a surprise is waiting for you!"*
   - Secret-key lock gate: enter the passphrase to reveal the door. A wrong key plays a playful "fah" sound and shakes the input.
   - Interactive 3D Anywhere Door with gold knob and pink frame.
   - **Cinematic 3D Camera Fly-Through**: Clicking **"Open the Door"** turns the knob, swings the door open, reveals a spinning hyperspace portal tunnel, and smoothly glides the camera inside through the doorway with a luminous light warp transition into the party room.
   - Bypasses browser audio autoplay restrictions, playing background music and chime sound effects.
   - Hand-crafted pure CSS Doraemon mascot (round blue face, whiskers, red nose, bell).
   - Designated drop-zone for custom Doraemon stickers/photos in `/assets/doraemon.png`.

2. **Screen 2: Cake Screen (5 Flickering Candles)**
   - Two-tier decorated birthday cake with exactly 5 candles.
   - **Strictly No Age or Numbers**: No age numbers on the cake or in text.
   - **Perfect 3D Candle Placement**: The 5 candles are naturally planted into the cake's top frosting in a curved 3D depth arc, each with its own whipped cream dollop base.
   - **Candle Blowing**: Tap each candle individually or click the "Blow the candles 🎂💨" button to extinguish them with staggered smoke wisps and sound effects (zero microphone permissions required).
   - Animated cheering Doraemon companion standing beside the cake with a speech bubble.
   - Staggered extinguishing animation with rising smoke wisps, chime, and *"Make a wish..."* banner.

3. **Screen 3: Cake Cutting Screen**
   - Doraemon-styled knife with bell badge.
   - Tap cake or knife to slice through the cake with a sawing animation, frosting crease, falling crumbs, and a real slice sliding onto a serving plate (*"Harshitha's Slice ✨"*).
   - Confetti shower and celebratory headline: *"Happy Birthday Harshitha! 🎉"*.
   - **"Meet Shinchan also 🎒"** button continues the journey.

4. **Screen 4: Shinchan Intro**
   - Comic-style Shinchan card with a spinning sunburst, bouncy character art, and the speech bubble: *"Doremon a ravala enti, nanu kudha invite chey"*.
   - **"See Our Memories 📸"** starts the memory lane gallery.

5. **Screen 5: Shinchan's Memory Lane**
   - Polaroid-style photo frame with Shinchan beside it, commenting on each photo one by one in Telugu-English.
   - Auto-advances every ~5 seconds, or use the Prev/Next buttons to browse at your own pace.
   - After the final photo, the **"Read your birthday card 💌"** button fades in.

6. **Screen 6: Personal Wish Screen**
   - Doraemon envelope card with an animated typewriter letter reveal.
   - SVG Dorayaki treat graphic, floating balloons, and twinkling stars.
   - **"Replay Experience 🔄"** button to restart the whole journey.

---

## 🎵 Audio Features

- **Background Music**: Plays `/assets/doraemon-telugu.mp3` on loop at `0.4` volume once started.
- **Floating Bell Mute Button**: Always visible at top-right with animated sound waves.
- **Built-in Web Audio Sound FX Synthesizer**: Produces chime chords, wind gusts, knife whooshes, a soft photo-page blip, and bell sounds using browser synthesis. If extra audio files are absent, everything plays gracefully with **zero console errors**.
- **Wrong-key SFX**: Uses `/assets/original-fah.mp3` when the secret key is incorrect.

---

## 🚀 How to Run

1. Open `index.html` directly in any web browser (Chrome, Safari, Edge, Firefox).
2. No installation, npm, or terminal server required!

---

## 📂 Assets & Customization

```text
birthday-wish/
├── index.html
├── style.css
├── script.js
├── README.md
├── assets/
│   ├── doraemon-telugu.mp3  <-- Doraemon Telugu theme song (background music)
│   ├── original-fah.mp3     <-- Wrong-password sound
│   ├── doraemon.png         <-- Optional: Drop a custom Doraemon photo or sticker here
│   └── shinchan.png         <-- Shinchan character image
└── images/
    └── memory-1.png ... memory-6.png  <-- Memory-lane photos
```

### Adding Your Own Memory Photos
Replace `images/memory-1.png` … `memory-6.png` with square PNG photos, keeping the same filenames. To use different filenames, add more photos, or change Shinchan's comments, update the `memoryPhotos` array in `CONFIG` at the top of `script.js`.

### Changing Name, Messages, or Volume
Edit the `CONFIG` object at the very top of [`script.js`](file:///c:/Users/Karthik/OneDrive/Desktop/birthday-wish/script.js#L7-L16):

```javascript
const CONFIG = {
  recipientName: "Harshitha",
  welcomeText: "Hey Harshitha, a surprise is waiting for you!",
  birthdayHeading: "Happy Birthday Harshitha! 🎉",
  personalMessage: `Dear Harshitha,\n\nWishing you a magical birthday...`,
  musicVolume: 0.4,
  audioPath: "assets/doraemon-telugu.mp3",
  doorPassword: "har she tha 04.11.2005",
  memoryPhotos: [
    { src: "images/memory-1.png", alt: "Memory 1", comment: "Ahh! Ee photo lo navvu chusi naa heart melt ayindi! 💛" },
    { src: "images/memory-2.png", alt: "Memory 2", comment: "Nuvvu eppudu ila cute ga undali... sambandham ledu! 😆" },
    { src: "images/memory-3.png", alt: "Memory 3", comment: "Doremon a ravala enti? Ee photo lo nuvve superstar! 🌟" },
    { src: "images/memory-4.png", alt: "Memory 4", comment: "Ee memory ki naa taraphu nunchi 100 marks! Buri buri! 📸" },
    { src: "images/memory-5.png", alt: "Memory 5", comment: "Action Kamen kuda ee smile mundu fail ayipoyadu! 😎" },
    { src: "images/memory-6.png", alt: "Memory 6", comment: "Okay okay... ippudu birthday card time! Ready ah? 💌" }
  ],
  memorySeconds: 5,
  typingSpeedMs: 36
};
```

---

## 📱 Responsiveness Testing Verification

- **280px–360px Width (Compact Mobile / iPhone SE)**:
  - Container scales down with `100dvh` to prevent mobile address-bar clipping.
  - Cake width adapts via `clamp(240px, 58vw, 320px)`.
  - Anywhere Door scales to `140px × 210px`.
   - Shinchan speech bubble stacks under the photo; the polaroid and navigation buttons shrink gracefully.
  - All interactive buttons maintain a minimum `48px` touch target.
  - Zero horizontal scrolling (verified from 280px to 1920px).
- **768px Width (Tablets / iPad)**:
  - Card expands comfortably with `2.8rem 2.5rem` internal padding.
  - Generous negative space around the cake stage and knife animation.
- **1440px+ Width (Laptops, Desktops & 4K)**:
  - Content card is capped at `720px` max-width with glassmorphism backdrop blur.
  - Ambient sky background (drifting clouds, floating balloons, twinkling stars) fills wide screens harmoniously.
- **Prefers-Reduced-Motion**:
  - Automatically disables heavy background translations and respects system accessibility settings.

---

## 🌐 Free Deployment Guide

### Option 1: GitHub Pages
1. Push this folder to a GitHub repository.
2. In your repo on GitHub, go to **Settings** > **Pages**.
3. Under **Build and deployment > Branch**, choose `main` branch and `/ (root)` folder.
4. Click **Save**. Your site will be live at `https://<your-username>.github.io/<repo-name>/`.

### Option 2: Netlify Drop (Instant Drag & Drop)
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
2. Drag and drop the `birthday-wish` folder directly into your browser window.
3. Your website goes live immediately with a shareable HTTPS link!

