// Gemstone class - Stores information about each gemstone
// Simple class structure for easy maintenance
class Gemstone {
    constructor(id, name, description, color, origin, treatment, image, measurement, video, clarity, video2 = null) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.color = color;
        this.origin = origin;
        this.treatment = treatment;
        this.image = image;
        this.measurement = measurement;
        this.video = video;
        this.clarity = clarity;
        this.video2 = video2;
    }
}

// List of all gemstones
export const gemstonesList = [
    new Gemstone(
        1,
        'Ceylon Blue sapphire 3.48 Ct heated',
        'Uncover the enduring charm of this 3.48 carat Ceylon sapphire, sourced from the esteemed gemstone mines of Sri Lanka. Shaped into a cushion, this heated gem showcases a mesmerizing vivid blue color typical of genuine Ceylon sapphires.',
        'vivid Blue',
        'Sri Lanka',
        'Heated',
        'stone1.jpg',
        '3.48ct',
        'BlueHuesGemsVideoCollection/stone1.mp4'
    ),
    new Gemstone(
        8,
        'Natural Ruby Burma round cut 1+ Ct',
        'GIA Certified',
        'Intense Red',
        'Burma',
        'Heat Treated',
        'stone8.png',
        '1+ CTS',
        'BlueHuesGemsVideoCollection/stone8.mp4',
        'Eye Clean (VVS2)'
    ),
    new Gemstone(
        10,
        'Natural Rhodolite / Rose Garnet',
        'Beautiful mix lot of natural Rhodolite and Rose Garnet gemstones, showcasing vibrant pink to rose-red hues with excellent clarity.',
        'Intense Red',
        'Sri Lanka',
        'Natural',
        'stone10.png',
        '45 CTS (1-5cts)',
        'BlueHuesGemsVideoCollection/stone10.mp4'
    ),
    new Gemstone(
        11,
        '3.50 Cts Heated Ceylon Sapphire',
        'A stunning 3.50 carat heated Ceylon sapphire, showcasing the classic royal blue hue that Sri Lankan sapphires are renowned for.',
        'Royal Blue',
        'Sri Lanka',
        'Heated',
        'stone11.jpeg',
        '3.50ct',
        'BlueHuesGemsVideoCollection/stone11.mp4'
    ),
    new Gemstone(
        12,
        '5mm Pairs Heated Ceylon Sapphire',
        'Beautiful matched pairs of 5mm heated Ceylon sapphires, perfect for earrings or other jewelry designs. Each pair showcases consistent color and quality.',
        'Vivid Blue',
        'Sri Lanka',
        'Heated',
        'stone12.jpeg',
        '5mm Pairs',
        'BlueHuesGemsVideoCollection/stone12.mp4',
        null,
        'BlueHuesGemsVideoCollection/stone12_1.mp4'
    ),
    new Gemstone(
        13,
        '3.65ct Heated Ceylon Sapphire',
        'A magnificent 3.65 carat heated Ceylon sapphire, displaying the rich, vibrant blue color that premium Sri Lankan sapphires are celebrated for.',
        'Royal Blue',
        'Sri Lanka',
        'Heated',
        'stone13.jpeg',
        '3.65ct',
        'BlueHuesGemsVideoCollection/stone13.mp4'
    ),
    new Gemstone(
        14,
        'Ceylon Blue Sapphire Untreated 10.27 ct',
        'Uncover the enduring charm of this 10.27 carat untreated Ceylon sapphire, sourced from the esteemed gemstone mines of Sri Lanka. Shaped into a cushion, this unheated gem showcases a mesmerizing vivid blue color typical of genuine Ceylon sapphires.',
        'Vivid Blue',
        'Sri Lanka',
        'Unheated',
        'stone14.png',
        '10.27ct',
        'BlueHuesGemsVideoCollection/stone14.mp4'
    ),
    new Gemstone(
        15,
        '6.58 ct Heated Ceylon Sapphire',
        'A stunning 6.58 carat heated Ceylon sapphire, featuring exceptional clarity and brilliant color. This premium gemstone comes with GGTL certification.',
        'Vivid Blue',
        'Sri Lanka',
        'Heated',
        'stone15.jpeg',
        '6.58ct',
        'BlueHuesGemsVideoCollection/stone15.mp4',
        'GGTL Certified'
    ),
    new Gemstone(
        16,
        '2.56 Ct Cushion Sri Lankan Sapphire',
        'Experience the pure elegance of this stunning 2.56 Ct, Cushion shape, a treasure from Sri Lanka\'s prestigious gemstone mines.',
        'Royal Blue',
        'Sri Lanka',
        'Heated',
        'stone16.png',
        '2.56ct',
        'BlueHuesGemsVideoCollection/stone16.mp4'
    ),
    new Gemstone(
        17,
        'Ceylon Blue Sapphire Heated Stone',
        '1.25 Ct cornflower blue sapphire, Cushion-cut and heat-treated. Its medium, velvety blue hue, combined with its remarkable cut, gives this stone an exceptional presence, ideal for a timeless jewelry creation.',
        'Cornflower Blue',
        'Sri Lanka',
        'Heated',
        'stone17.jpeg',
        '1.25ct',
        'BlueHuesGemsVideoCollection/stone17.mp4'
    ),
    new Gemstone(
        18,
        'Natural Dravite Tourmaline Oval Cut 11.70 Ct and Earring Pair',
        'Re-Cut more than a six months ago, this 11.70 Ct natural dravite tourmaline holds a story of gratitude and resilience. Sourced from my own native Ceylon and loupe clean, gem is re-Cut precision-faceted using traditional oval shape design — a pattern created in show my gratitude for miner who taught me about Core Gemological Concepts. The tourmaline exhibits a rich, earthen palette: deep molasses brown, flashes of olive and amber, with subtle golden undertones revealed through every pivot. The outline delivers a sharp, architectural brilliance — with a layered geometry that seems to ripple like shockwaves across the stone. In terms of Clarity, its Loupe clean with Deep earth brown with amber and olive flashes. This set faceted for earring pair and a timeless pendant.',
        'Deep Earth Brown',
        'Sri Lanka',
        'Unheated',
        'stone18.jpeg',
        '11.70ct + 1.55ct Pair',
        'BlueHuesGemsVideoCollection/stone18.mp4',
        null,
        'BlueHuesGemsVideoCollection/stone18-1.mp4'
    ),
    new Gemstone(
        19,
        'Ceylon Blue Sapphire Mix Cut Lot Heated',
        'This heated blend of blue sapphires showcases a deep, vibrant royal-to-cornflower blue hue, featuring slight color zoning and an exceptional degree of brilliance.',
        'Royal to Cornflower Blue',
        'Sri Lanka',
        'Heated',
        'stone19.jpeg',
        '1+ Ct each stone (6 Stones Total)',
        'BlueHuesGemsVideoCollection/stone19.mp4'
    ),
    new Gemstone(
        20,
        'Ceylon Natural Green Zircon Pair Oval 2.22 Ct',
        'A lively apple green shade... remarkably striking in every lighting scenario... Entirely unprocessed and displaying a subtle apple green tint... this duo presents both uniqueness and character. Nearly 1.11 Ct for each gem.',
        'Apple Green',
        'Sri Lanka',
        'Unheated',
        'stone20.png',
        '2.22ct (1.11ct each)',
        'BlueHuesGemsVideoCollection/stone20-1.mp4'
    ),
    new Gemstone(
        21,
        'Natural Zircon Oval Cut Yellow-Green 4.99 Ct',
        'Explore the exceptional charm of a 4.99 Ct natural Ceylon zircon, characterized by its rare yellowish-green color blend. This alluring oval stone presents a deep, fascinating apple yellowish-green tone.',
        'Yellowish-Green',
        'Sri Lanka',
        'Unheated',
        'stone21.jpeg',
        '4.99ct',
        'BlueHuesGemsVideoCollection/stone21.mp4'
    ),
    new Gemstone(
        22,
        'Ceylon Blue Sapphire 3.07 Ct Heated',
        'Experience the captivating beauty of this 3.07 carat heated Ceylon blue sapphire, showcasing a vivid blue hue that exemplifies the finest Sri Lankan gemstone tradition. The cushion cut enhances the stones natural brilliance, creating a mesmerizing play of light across its well-proportioned facets. This exceptional gemstone embodies the rich color saturation and clarity that Ceylon sapphires are renowned for worldwide.',
        'Vivid Blue',
        'Sri Lanka',
        'Heated',
        'stone22.png',
        '3.07ct',
        'BlueHuesGemsVideoCollection/stone22.mp4'
    )
];

export default Gemstone;
