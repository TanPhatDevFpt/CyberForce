// Mega Menu Optimization & SEO Enhancement
class MegaMenuOptimizer {
  constructor() {
    this.menuContainer = document.querySelector(".menu-mega");
    this.categoryBtn = document.querySelector(".category");
    this.init();
  }

  init() {
    if (!this.menuContainer) return;
    
    // Initialize features
    this.lazyLoadImages();
    this.addEventTracking();
    this.addStructuredData();
    this.optimizeKeyboardNav();
    this.addButtonHandlers();
  }

  /**
   * Lazy load images in mega menu
   */
  lazyLoadImages() {
    const images = this.menuContainer.querySelectorAll("img");
    
    if ("IntersectionObserver" in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src || img.src;
            img.classList.add("loaded");
            observer.unobserve(img);
          }
        });
      });
      
      images.forEach((img) => imageObserver.observe(img));
    }
  }

  /**
   * Add event tracking for analytics
   */
  addEventTracking() {
    const navLinks = this.menuContainer.querySelectorAll(".category-links a");
    const categoryTags = this.menuContainer.querySelectorAll(".category-tag");
    const promoButtons = this.menuContainer.querySelectorAll(".promo-btn");
    
    // Track category links
    navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        const label = link.querySelector("span").textContent.trim();
        const title = link.getAttribute("title");
        
        if (typeof gtag !== "undefined") {
          gtag("event", "menu_link_click", {
            event_category: "navigation",
            event_label: label,
            event_value: title,
          });
        }
      });
    });
    
    // Track category tags
    categoryTags.forEach((tag) => {
      tag.addEventListener("click", (e) => {
        const tagName = tag.textContent.trim();
        
        if (typeof gtag !== "undefined") {
          gtag("event", "category_tag_click", {
            event_category: "navigation",
            event_label: tagName,
          });
        }
      });
    });
    
    // Track promo clicks
    promoButtons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const promo = btn.closest(".promo-overlay").querySelector(".promo-badge").textContent;
        
        if (typeof gtag !== "undefined") {
          gtag("event", "promo_button_click", {
            event_category: "promotion",
            event_label: promo,
          });
        }
      });
    });
    
    // Track menu open
    this.categoryBtn.addEventListener("mouseenter", () => {
      if (typeof gtag !== "undefined") {
        gtag("event", "mega_menu_open", {
          event_category: "navigation",
          event_label: "menu_opened",
        });
      }
    });
  }

  /**
   * Add JSON-LD structured data for SEO
   */
  addStructuredData() {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "SiteNavigationElement",
      name: "Product Categories Mega Menu",
      url: window.location.href,
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: window.location.origin + "/search?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    };
    
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
  }

  /**
   * Optimize keyboard navigation
   */
  optimizeKeyboardNav() {
    const allLinks = this.menuContainer.querySelectorAll("a, button");
    
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        this.menuContainer.style.display = "none";
        this.categoryBtn.blur();
      }
    });
    
    allLinks.forEach((item, index) => {
      item.setAttribute("tabindex", "0");
      
      item.addEventListener("keydown", (e) => {
        // Activate on Enter or Space
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          item.click();
        }
        
        // Navigate down
        if (e.key === "ArrowDown" && index < allLinks.length - 1) {
          e.preventDefault();
          allLinks[index + 1].focus();
        }
        
        // Navigate up
        if (e.key === "ArrowUp" && index > 0) {
          e.preventDefault();
          allLinks[index - 1].focus();
        }
      });
    });
  }

  /**
   * Add click handlers for promo buttons
   */
  addButtonHandlers() {
    const featuredItems = this.menuContainer.querySelectorAll(".featured-item");
    
    featuredItems.forEach((item) => {
      item.addEventListener("mouseenter", () => {
        item.style.cursor = "pointer";
      });
    });
    
    const promoButtons = this.menuContainer.querySelectorAll(".promo-btn");
    promoButtons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const promo = btn.closest(".promo-overlay").querySelector(".promo-badge").textContent;
        
        if (typeof gtag !== "undefined") {
          gtag("event", "promo_button_click", {
            event_category: "promotion",
            event_label: promo,
          });
        }
        
        // Optional: Scroll to products or navigate
        console.log("Promo clicked:", promo);
      });
    });
  }
}

// Initialize when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  new MegaMenuOptimizer();
});

// Export for use in other modules
if (typeof module !== "undefined" && module.exports) {
  module.exports = MegaMenuOptimizer;
}
