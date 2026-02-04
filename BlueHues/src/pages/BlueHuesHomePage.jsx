import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import Sustainability from '../components/Sustainability';
import OurGemstones from '../components/OurGemstones';
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';

// Main homepage component - Combines all sections
// Each section is a separate component for easy maintenance
function BlueHuesHomePage() {
    return (
        <div id="top" className="bg-white min-h-screen flex flex-col">
            {/* Global header with navigation */}
            <Header />

            {/* Main page content */}
            <main className="flex-1 pt-24">
                {/* Hero Section - First impression */}
                <Hero />

                {/* About Us Section - Company heritage and history */}
                <AboutUs />

                {/* Sustainability Section - Environmental commitment */}
                <Sustainability />

                {/* Our Gemstones Section - Product gallery */}
                <OurGemstones />

                {/* Contact Us Section - Get in touch */}
                <ContactUs />
            </main>

            {/* Global footer */}
            <Footer />
        </div>
    );
}

export default BlueHuesHomePage;