# Variable Font Animator

A lightweight and customizable text animation library that leverages **variable fonts** to create smooth, fluid weight transitions for engaging web typography.

![Variable Font Animation Demo](demo-animation.gif)

---

## 🚀 Overview

**Variable Font Animator** creates eye-catching animations by manipulating the **weight axis** (`wght`) of variable fonts. Each character animates individually with a delay, creating a ripple-like effect to draw attention.

- We can use other variable fonts also, i.e: ***Hepta Slab, Geist, Playfair Display, Bodoni Moda*** etc... from https://fonts.google.com/

---

## ✨ Features

- 🎯 Smooth weight transitions using variable font technology
- 🔠 Character-by-character ripple animation
- 🎨 Customizable font styles and animation timing
- 📱 Responsive, centered design
- 🧹 Minimal dependencies (just jQuery)

---

## ⚙️ How It Works

### 1. HTML Structure

```html
<div class="text-animation-container"></div>
```

### 2. CSS Animation

```css
@keyframes variation {
  0%   { font-variation-settings: 'wght' 100; }
  50%  { font-variation-settings: 'wght' 900; }
  100% { font-variation-settings: 'wght' 100; }
}

span {
  font-family: "Inter", sans-serif;
  font-size: 5em;
  animation: 3s infinite variation;
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateZ(0);
  will-change: font-variation-settings;
  display: inline-block;
}
```

### 3. JavaScript Logic

```javascript
$(document).ready(function() {
  var theText = "Variable fonts are awesome!";
  $(".text-animation-container").each(function() {
    for (let i = 0; i < theText.length; i++) {
      let delay = (i * 3) / theText.length;
      let e = $("<span>" + theText[i] + "</span>");
      $(this).append(e);
      e.css("animation-delay", delay + "s");
    }
  });
});
```

---


### ✅ Prerequisites

- A modern browser that supports variable fonts
- jQuery (v3+)


### 🔄 Auto-Initialization

The animation runs automatically on all elements with `.text-animation-container`.

---

## 🎠 Customization

- ✍️ Change the `theText` variable in JS for custom messages
- 🧠 Adjust `font-size`, `font-family`, and animation speed in CSS
- ⏱ Modify the delay logic for unique ripple timings

---

## 🌐 Browser Compatibility

- Lastest updated Browser

---

## 🙏 Acknowledgments

- Inspired by variable font demos from the UI,typography community

# **Designed by** - Debanga Dutta

