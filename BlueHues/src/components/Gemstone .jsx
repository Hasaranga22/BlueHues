// Gemstone class - Stores information about each gemstone
// Simple class structure for easy maintenance
class Gemstone {
    constructor(id, name, description, color, origin, treatment) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.color = color;
        this.origin = origin;
        this.treatment = treatment;
    }
}

// List of all gemstones - Easy to add or remove gemstones
// Client can update this list as needed
export const gemstonesList = [
    new Gemstone(
        1,
        'Blue Sapphire',
        'The most sought-after sapphire, renowned for its deep blue color and exceptional clarity.',
        'Deep Blue',
        'Sri Lanka',
        'Natural & Heat-Treated'
    ),
    new Gemstone(
        2,
        'Pink Sapphire',
        'Delicate and romantic, these sapphires range from light pink to vibrant hot pink.',
        'Pink',
        'Sri Lanka',
        'Natural & Heat-Treated'
    ),
    new Gemstone(
        3,
        'Yellow Sapphire',
        'Warm and radiant, symbolizing prosperity and wisdom in many cultures.',
        'Yellow',
        'Sri Lanka',
        'Natural & Heat-Treated'
    ),
    new Gemstone(
        4,
        'Padparadscha Sapphire',
        'Rare and precious, displaying a unique pink-orange color reminiscent of lotus blossoms.',
        'Pink-Orange',
        'Sri Lanka',
        'Natural & Heat-Treated'
    ),
    new Gemstone(
        5,
        'White Sapphire',
        'Clear and brilliant, a beautiful diamond alternative with excellent durability.',
        'White',
        'Sri Lanka',
        'Natural'
    ),
    new Gemstone(
        6,
        'Green Sapphire',
        'Vibrant and unique, ranging from light mint to deep forest green.',
        'Green',
        'Sri Lanka',
        'Natural & Heat-Treated'
    ),
    new Gemstone(
        7,
        'Purple Sapphire',
        'Majestic and rare, blending the nobility of blue with passion of pink.',
        'Purple',
        'Sri Lanka',
        'Natural & Heat-Treated'
    ),
    new Gemstone(
        8,
        'Orange Sapphire',
        'Vibrant and energetic, capturing the warmth of tropical sunsets.',
        'Orange',
        'Sri Lanka',
        'Natural & Heat-Treated'
    ),
    new Gemstone(
        9,
        'Star Sapphire',
        'Mystical and captivating, displaying a six-ray star effect.',
        'Various',
        'Sri Lanka',
        'Natural'
    ),
    new Gemstone(
        10,
        'Teal Sapphire',
        'Modern and sophisticated, a blue-green hybrid of natural beauty.',
        'Teal',
        'Sri Lanka',
        'Natural & Heat-Treated'
    ),
    new Gemstone(
        11,
        'Peach Sapphire',
        'Soft and feminine, with delicate peachy-pink tones.',
        'Peach',
        'Sri Lanka',
        'Heat-Treated'
    ),
    new Gemstone(
        12,
        'Champagne Sapphire',
        'Elegant and understated, with warm golden-brown hues.',
        'Champagne',
        'Sri Lanka',
        'Heat-Treated'
    ),
    new Gemstone(
        13,
        'Lavender Sapphire',
        'Delicate and dreamy, with soft purple-pink tones.',
        'Lavender',
        'Sri Lanka',
        'Natural & Heat-Treated'
    ),
    new Gemstone(
        14,
        'Bi-Color Sapphire',
        'Unique and artistic, displaying two distinct colors in one stone.',
        'Multi-Color',
        'Sri Lanka',
        'Natural'
    ),
    new Gemstone(
        15,
        'Color-Change Sapphire',
        'Magical and rare, changing color under different lighting conditions.',
        'Variable',
        'Sri Lanka',
        'Natural'
    ),
    new Gemstone(
        16,
        'Garnet',
        'Deep red semi-precious stone, symbolizing passion and energy.',
        'Red',
        'Sri Lanka',
        'Natural'
    ),
    new Gemstone(
        17,
        'Spinel',
        'Vibrant and brilliant, often mistaken for ruby or sapphire.',
        'Various',
        'Sri Lanka',
        'Natural'
    ),
    new Gemstone(
        18,
        'Tourmaline',
        'Colorful and versatile, available in a rainbow of hues.',
        'Various',
        'Sri Lanka',
        'Natural'
    ),
    new Gemstone(
        19,
        'Zircon',
        'Brilliant and sparkly, with exceptional fire and luster.',
        'Various',
        'Sri Lanka',
        'Heat-Treated'
    ),
    new Gemstone(
        20,
        'Moonstone',
        'Ethereal and mystical, displaying a unique adularescence effect.',
        'White-Blue',
        'Sri Lanka',
        'Natural'
    ),
];

export default Gemstone;