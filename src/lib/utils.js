import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// Smooth scroll function to navigate to sections
export function scrollToSection(sectionId, event) {
  if (event) {
    event.preventDefault();
  }

  const element = document.getElementById(sectionId);
  if (element) {
    // Get the header height dynamically
    const header = document.querySelector('header');
    const headerHeight = header ? header.offsetHeight : 80;
    
    // Calculate the target position
    const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - headerHeight;

    // Scroll to the target position
    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  }
}
