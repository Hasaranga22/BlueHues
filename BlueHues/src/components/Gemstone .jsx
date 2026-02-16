// Gemstone class - Stores information about each gemstone
// Simple class structure for easy maintenance
class Gemstone {
    constructor(id, name, description, color, origin, treatment, image, measurement, video) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.color = color;
        this.origin = origin;
        this.treatment = treatment;
        this.image = image;
        this.measurement = measurement;
        this.video = video;
    }
}

// List of all gemstones
export const gemstonesList = [
    new Gemstone(
        1,
        'Blue Sapphire',
        'Uncover the enduring charm of this 3.48 carat Ceylon sapphire, sourced from the esteemed gemstone mines of Sri Lanka. Shaped into a cushion, this heated gem showcases a mesmerizing vivid blue color typical of genuine Ceylon sapphires.',
        'Deep Blue',
        'Sri Lanka',
        'Heated',
        'stone1.jpg',
        '3.48ct',
        'BlueHuesGemsVideoCollection/stone1.mp4'
    ),
    new Gemstone(
        2,
        'Royal Blue Sapphire',
        'Explore the everlasting appeal of this 3.55 carat Ceylon sapphire, harvested from Sri Lanka\'s distinguished gemstone sources. Crafted into an elegant cushion design.',
        'Royal Blue',
        'Sri Lanka',
        'Heated',
        'stone2.jpg',
        '3.55ct',
        'BlueHuesGemsVideoCollection/stone2.mp4'
    ),
    new Gemstone(
        3,
        'Heated Ceylon Sapphire',
        'A stunning vivid blue heated sapphire, cut in a traditional cushion shape, weighing 3.06 carats.',
        'Vivid Blue',
        'Sri Lanka',
        'Heated',
        'stone3.jpg',
        '3.06ct',
        'BlueHuesGemsVideoCollection/stone3.mp4'
    ),
    new Gemstone(
        4,
        'Blue Sapphire Loupe Clean',
        'A beautiful heated sapphire in royal blue, elegantly faceted in a timeless cushion shape, with a total weight of 4.30 carats.',
        'Royal Blue',
        'Sri Lanka',
        'Heated',
        'stone4.jpeg',
        '4.30ct',
        'BlueHuesGemsVideoCollection/stone4.mp4'
    ),
    new Gemstone(
        5,
        '10ct Heated Ceylon',
        'A 10 carat Royal Blue Sapphire sourced from Sri Lanka, featuring an oval cut and heat treatment. Its deep vivid blue color and stunning brilliance render it a sophisticated gem piece.',
        'Royal Blue',
        'Sri Lanka',
        'Heated',
        'stone5.jpeg',
        '10.00ct',
        'BlueHuesGemsVideoCollection/stone5.mp4'
    ),
    new Gemstone(
        6,
        '4ct Vivid Royal Blue H Big Face',
        'Experience the classic beauty of this 4 carat Ceylon sapphire, extracted from the renowned gemstone reserves of Sri Lanka.',
        'Royal Blue',
        'Sri Lanka',
        'Heated',
        'stone6.jpeg',
        '4.00ct',
        'BlueHuesGemsVideoCollection/stone6.mp4'
    ),
    new Gemstone(
        7,
        'Cushion Royal Blue',
        'Uncover the enduring charm of this 4.02 carat Ceylon sapphire, sourced from the esteemed gemstone mines of Sri Lanka. Shaped into a graceful cushion, this heated gem showcases a mesmerizing vivid royal blue color typical of genuine Ceylon sapphires.',
        'Royal Blue',
        'Sri Lanka',
        'Heated',
        'stone7.jpeg',
        '4.02ct',
        'BlueHuesGemsVideoCollection/stone7.mp4'
    ),
    new Gemstone(
        8,
        'Heated Ceylon 6.07 CTs',
        'Uncover the enduring charm of this 6.07 carat Ceylon sapphire, sourced from the esteemed gemstone mines of Sri Lanka. Shaped into a graceful cushion, this heated gem showcases a mesmerizing vivid royal blue color typical of genuine Ceylon sapphires.',
        'Royal Blue',
        'Sri Lanka',
        'Heated',
        'stone8.jpeg',
        '6.07ct',
        'BlueHuesGemsVideoCollection/stone8.mp4'
    ),
    new Gemstone(
        9,
        '107.52 Carat Unheated',
        'Explore the everlasting beauty of this 107.52 carat Ceylon unheated sapphire, extracted from the renowned gemstone mines of Sri Lanka.',
        'Deep Blue',
        'Sri Lanka',
        'Natural',
        'stone9.png',
        '107.52ct',
        'BlueHuesGemsVideoCollection/stone9.mp4'
    ),
    new Gemstone(
        10,
        '4.57 Carat Classic',
        'Experience the classic appeal of this 4.57 carat Ceylon sapphire, harvested from the distinguished gemstone locations in Sri Lanka.',
        'Royal Blue',
        'Sri Lanka',
        'Heated',
        'stone10.png',
        '4.57ct',
        'BlueHuesGemsVideoCollection/stone10.mp4'
    ),
    new Gemstone(
        11,
        'Royal Blue Oval',
        'A gorgeous royal blue heated sapphire faceted in a classic oval-shaped design, 9.10 carats.',
        'Royal Blue',
        'Sri Lanka',
        'Heated',
        'stone11.png',
        '9.10ct',
        'BlueHuesGemsVideoCollection/stone11.mp4'
    )
];

export default Gemstone;
