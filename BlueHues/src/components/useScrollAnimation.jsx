import { useEffect, useState } from 'react';

// Custom hook to detect when element is visible in viewport
// Used for fade-in animations when user scrolls to section
function useScrollAnimation() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Create observer to watch when element enters viewport
        const observer = new IntersectionObserver(
            (entries) => {
                // When element is 20% visible, trigger animation
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.2, // Trigger when 20% of element is visible
            }
        );

        // Get the element to observe
        const element = document.getElementById('animated-section');
        if (element) {
            observer.observe(element);
        }

        // Cleanup observer when component unmounts
        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, []);

    return isVisible;
}

export default useScrollAnimation;