# JavaScript Calculator  

A simple, responsive calculator built with **HTML, CSS, and JavaScript**.  
This project is part of my learning journey and portfolio — created to practice DOM manipulation, CSS grid layouts, and handling user input both via mouse and keyboard (including **numpad support**).  

---

## Features  
- Basic arithmetic: `+`, `-`, `*`, `/`  
- Parentheses `(` `)` support
- Implied multiplication with `( )` (e.g., `2(3+3)` automatically evaluates as `2*(3+3)`)
- Decimal numbers `.`
- Display box overflow protection (max 30 characters)
- Backspace & reset functions  
- Keyboard / numpad support for faster input  
- Responsive design (works on desktop & mobile)  
- Local storage support — remembers the last calculation even after refreshing the page  

---

## Demo  
[View live on GitHub Pages](https://aanowak.github.io/JS-Calculator)  

---

## Preview  
![Calculator Screenshot](graphic/preview.png) 

---

## Tech Stack  
- **HTML5** – semantic structure (Accessibility / a11y)
- **CSS3 (Grid & Flexbox)** – responsive layout using `grid-template-areas`
- **JavaScript (Vanilla)** – clean ES6+ functionality  

---

## Lessons Learned & Refactoring  
- **Production-ready calculations:** Replaced the unsafe `eval()` function with a safer execution context to ensure code security.
- **Advanced Event Handling:** Implemented **Event Delegation** on the button container instead of using multiple inline `onclick` attributes, dramatically improving DOM performance and separating concerns (HTML from JS).
- **Robust Error Handling:** Added a comprehensive `try...catch` block to gracefully handle syntax errors and prevent mathematical edge-cases like division by zero (`Infinity`).
- **RegEx Power:** Used Regular Expressions for the first time to preprocess strings for implicit multiplication.
- **Cache-Busting:** Avoided GitHub Pages caching issues by implementing a simple query-string versioning trick (`?v=1.2`).

---

## How to Run Locally  
1. Clone the repo:  
   ```bash
   git clone [https://github.com/AANowak/JS-Calculator.git](https://github.com/AANowak/JS-Calculator.git)