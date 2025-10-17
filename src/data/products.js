// ===== Products Database =====
export const productsDatabase = [
    // PC Parts - Processors
    {
        id: 1,
        name: "معالج Intel Core i9-13900K",
        category: "pc-parts",
        subcategory: "processors",
        brand: "intel",
        price: 18999,
        oldPrice: 21999,
        rating: 5,
        reviewCount: 45,
        image: "https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=400&h=400&fit=crop",
        badge: "new",
        inStock: true,
        description: "معالج Intel Core i9 الجيل الثالث عشر بـ 24 نواة و 32 خيط معالجة",
        specifications: {
            cores: "24 نواة",
            threads: "32 خيط",
            baseFreq: "3.0 GHz",
            boostFreq: "5.8 GHz",
            cache: "36 MB",
            socket: "LGA 1700"
        }
    },
    {
        id: 2,
        name: "معالج AMD Ryzen 9 7900X",
        category: "pc-parts",
        subcategory: "processors",
        brand: "amd",
        price: 16499,
        oldPrice: 18999,
        rating: 5,
        reviewCount: 38,
        image: "https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=400&h=400&fit=crop",
        badge: "sale",
        inStock: true,
        description: "معالج AMD Ryzen 9 بتقنية 5nm وأداء استثنائي للألعاب",
        specifications: {
            cores: "12 نواة",
            threads: "24 خيط",
            baseFreq: "4.7 GHz",
            boostFreq: "5.6 GHz",
            cache: "76 MB",
            socket: "AM5"
        }
    },
    {
        id: 3,
        name: "كارت شاشة NVIDIA RTX 4080",
        category: "pc-parts",
        subcategory: "graphics-cards",
        brand: "nvidia",
        price: 35999,
        oldPrice: 39999,
        rating: 5,
        reviewCount: 67,
        image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400&h=400&fit=crop",
        badge: "sale",
        inStock: true,
        description: "كارت شاشة RTX 4080 بذاكرة 16GB GDDR6X للألعاب بدقة 4K",
        specifications: {
            memory: "16GB GDDR6X",
            memoryBus: "256-bit",
            coreClock: "2205 MHz",
            boostClock: "2505 MHz",
            rtCores: "76",
            tensorCores: "304"
        }
    },
    {
        id: 4,
        name: "لابتوب ASUS ROG Strix G15",
        category: "laptops",
        subcategory: "gaming",
        brand: "asus",
        price: 45999,
        oldPrice: 52999,
        rating: 5,
        reviewCount: 78,
        image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=400&fit=crop",
        badge: "sale",
        inStock: true,
        description: "لابتوب ألعاب ASUS ROG بمعالج AMD Ryzen 9 وكارت RTX 4070",
        specifications: {
            processor: "AMD Ryzen 9 7940HS",
            graphics: "NVIDIA RTX 4070 8GB",
            memory: "32GB DDR5",
            storage: "1TB NVMe SSD",
            display: "15.6\" QHD 165Hz",
            battery: "90Wh"
        }
    },
    {
        id: 5,
        name: "لوحة مفاتيح Corsair K95 RGB",
        category: "accessories",
        subcategory: "keyboards",
        brand: "corsair",
        price: 2499,
        oldPrice: 2999,
        rating: 5,
        reviewCount: 156,
        image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=400&fit=crop",
        badge: "bestseller",
        inStock: true,
        description: "لوحة مفاتيح ميكانيكية RGB مع مفاتيح Cherry MX",
        specifications: {
            switchType: "Cherry MX Speed",
            backlight: "RGB Per-Key",
            connectivity: "USB-C",
            layout: "Full Size",
            macroKeys: "6",
            mediaControls: "نعم"
        }
    },
    {
        id: 6,
        name: "فأرة Logitech G Pro X Superlight",
        category: "accessories",
        subcategory: "mice",
        brand: "logitech",
        price: 1899,
        oldPrice: 2199,
        rating: 5,
        reviewCount: 234,
        image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop",
        badge: "bestseller",
        inStock: true,
        description: "فأرة ألعاب لاسلكية خفيفة الوزن مع حساس HERO 25K",
        specifications: {
            sensor: "HERO 25K",
            dpi: "25,600 DPI",
            weight: "63g",
            connectivity: "LIGHTSPEED Wireless",
            battery: "70 ساعة",
            buttons: "5"
        }
    },
    // منتجات مستعملة
    {
        id: 21,
        name: "Intel Core i7-10700K مستعمل",
        description: "معالج Intel Core i7 الجيل العاشر، حالة ممتازة، تم اختباره بالكامل",
        price: 4500,
        oldPrice: 6500,
        image: "/images/used-i7-10700k.jpg",
        category: "used",
        subcategory: "processors",
        brand: "intel",
        condition: "excellent",
        inStock: true,
        rating: 4.3,
        reviewCount: 12,
        badge: "used",
        usageTime: "8 أشهر",
        warranty: "3 أشهر ضمان المتجر",
        specifications: {
            cores: "8",
            threads: "16",
            baseClock: "3.8 GHz",
            boostClock: "5.1 GHz",
            socket: "LGA 1200",
            tdp: "125W"
        }
    },
    {
        id: 22,
        name: "RTX 3070 مستعملة - حالة ممتازة",
        description: "كارت شاشة RTX 3070 مستعمل، لم يستخدم في التعدين، حالة ممتازة",
        price: 8500,
        oldPrice: 12000,
        image: "/images/used-rtx-3070.jpg",
        category: "used",
        subcategory: "graphics-cards",
        brand: "nvidia",
        condition: "excellent",
        inStock: true,
        rating: 4.5,
        reviewCount: 8,
        badge: "used",
        usageTime: "6 أشهر",
        warranty: "6 أشهر ضمان المتجر",
        specifications: {
            memory: "8GB GDDR6",
            memoryBus: "256-bit",
            baseClock: "1500 MHz",
            boostClock: "1725 MHz",
            rayTracing: "نعم",
            dlss: "نعم"
        }
    },
    {
        id: 23,
        name: "لابتوب Dell Inspiron 15 مستعمل",
        description: "لابتوب Dell مستعمل بحالة جيدة جداً، مناسب للدراسة والعمل",
        price: 7500,
        oldPrice: 11000,
        image: "/images/used-dell-inspiron.jpg",
        category: "used",
        subcategory: "laptops",
        brand: "dell",
        condition: "good",
        inStock: true,
        rating: 4.0,
        reviewCount: 15,
        badge: "used",
        usageTime: "سنة واحدة",
        warranty: "شهر واحد ضمان المتجر",
        specifications: {
            processor: "Intel Core i5-10210U",
            memory: "8GB DDR4",
            storage: "256GB SSD",
            display: "15.6 بوصة Full HD",
            graphics: "Intel UHD Graphics",
            battery: "3-4 ساعات"
        }
    },
    {
        id: 24,
        name: "ذاكرة عشوائية Corsair 16GB مستعملة",
        description: "ذاكرة عشوائية Corsair Vengeance 16GB مستعملة، تعمل بكفاءة عالية",
        price: 1200,
        oldPrice: 1800,
        image: "/images/used-corsair-ram.jpg",
        category: "used",
        subcategory: "memory",
        brand: "corsair",
        condition: "like-new",
        inStock: true,
        rating: 4.7,
        reviewCount: 6,
        badge: "used",
        usageTime: "4 أشهر",
        warranty: "شهرين ضمان المتجر",
        specifications: {
            capacity: "16GB (2x8GB)",
            type: "DDR4",
            speed: "3200 MHz",
            latency: "CL16",
            voltage: "1.35V"
        }
    },
    {
        id: 25,
        name: "SSD Samsung 500GB مستعمل",
        description: "قرص SSD سامسونج 500GB مستعمل، سرعة عالية وأداء ممتاز",
        price: 800,
        oldPrice: 1200,
        image: "/images/used-samsung-ssd.jpg",
        category: "used",
        subcategory: "storage",
        brand: "samsung",
        condition: "excellent",
        inStock: true,
        rating: 4.4,
        reviewCount: 9,
        badge: "used",
        usageTime: "5 أشهر",
        warranty: "شهر واحد ضمان المتجر",
        specifications: {
            capacity: "500GB",
            interface: "SATA III",
            readSpeed: "560 MB/s",
            writeSpeed: "530 MB/s",
            formFactor: "2.5 inch"
        }
    },
    {
        id: 26,
        name: "لوحة مفاتيح Razer BlackWidow مستعملة",
        description: "لوحة مفاتيح ميكانيكية Razer مستعملة، مفاتيح Cherry MX Blue",
        price: 1500,
        oldPrice: 2500,
        image: "/images/used-razer-keyboard.jpg",
        category: "used",
        subcategory: "keyboards",
        brand: "razer",
        condition: "good",
        inStock: true,
        rating: 4.2,
        reviewCount: 7,
        badge: "used",
        usageTime: "10 أشهر",
        warranty: "أسبوعين ضمان المتجر",
        specifications: {
            switchType: "Cherry MX Blue",
            backlight: "RGB",
            connectivity: "USB",
            layout: "Full Size",
            macroKeys: "نعم"
        }
    }
];

// Categories mapping
export const categories = {
    'all': 'جميع المنتجات',
    'pc-parts': 'قطع الكمبيوتر',
    'laptops': 'اللابتوب',
    'accessories': 'الاكسسوارات',
    'used': 'منتجات مستعملة'
};

export const subcategories = {
    'processors': 'المعالجات',
    'graphics-cards': 'كروت الشاشة',
    'motherboards': 'اللوحات الأم',
    'memory': 'الذاكرة العشوائية',
    'storage': 'وحدات التخزين',
    'power-supplies': 'مزودات الطاقة',
    'cases': 'صناديق الكمبيوتر',
    'cooling': 'أنظمة التبريد',
    'gaming': 'ألعاب',
    'business': 'أعمال',
    'keyboards': 'لوحات المفاتيح',
    'mice': 'الفئران',
    'headsets': 'السماعات',
    'monitors': 'الشاشات',
    'webcams': 'كاميرات الويب'
};

export const conditions = {
    'new': 'جديد',
    'like-new': 'مثل الجديد',
    'excellent': 'ممتاز',
    'good': 'جيد',
    'fair': 'مقبول'
};

export const brands = {
    'intel': 'Intel',
    'amd': 'AMD',
    'nvidia': 'NVIDIA',
    'asus': 'ASUS',
    'msi': 'MSI',
    'corsair': 'Corsair',
    'dell': 'Dell',
    'razer': 'Razer',
    'logitech': 'Logitech',
    'steelseries': 'SteelSeries',
    'samsung': 'Samsung',
    'fractal-design': 'Fractal Design'
};

// Sample reviews data
export const reviewsDatabase = {
    1: [ // Intel Core i9-13900K reviews
        {
            id: 1,
            rating: 5,
            title: "معالج رائع للألعاب والعمل",
            comment: "هذا المعالج أداؤه ممتاز جداً في الألعاب والبرامج الثقيلة. درجات الحرارة معقولة مع التبريد المناسب. أنصح به بشدة لمن يريد أداء عالي.",
            date: "2024-10-15T10:30:00Z",
            user: {
                name: "أحمد محمد",
                avatar: null
            },
            verified: true,
            likes: 15,
            dislikes: 1,
            images: []
        },
        {
            id: 2,
            rating: 4,
            title: "أداء ممتاز لكن يحتاج تبريد قوي",
            comment: "المعالج سريع جداً ويتعامل مع جميع المهام بسهولة. لكن يحتاج نظام تبريد جيد لأنه يسخن قليلاً تحت الضغط العالي.",
            date: "2024-10-12T14:20:00Z",
            user: {
                name: "سارة أحمد",
                avatar: null
            },
            verified: true,
            likes: 8,
            dislikes: 0,
            images: []
        },
        {
            id: 3,
            rating: 5,
            title: "الأفضل في فئته",
            comment: "بعد استخدام المعالج لشهرين، أستطيع القول أنه الأفضل في فئته. سرعة في التشغيل وكفاءة في استهلاك الطاقة.",
            date: "2024-10-08T09:15:00Z",
            user: {
                name: "محمود علي",
                avatar: null
            },
            verified: false,
            likes: 12,
            dislikes: 0,
            images: []
        }
    ],
    2: [ // AMD Ryzen 9 7900X reviews
        {
            id: 4,
            rating: 5,
            title: "معالج AMD ممتاز",
            comment: "أداء رائع في المونتاج والألعاب. أفضل من Intel في نفس الفئة السعرية. التبريد المدمج كافي للاستخدام العادي.",
            date: "2024-10-14T16:45:00Z",
            user: {
                name: "خالد حسن",
                avatar: null
            },
            verified: true,
            likes: 20,
            dislikes: 2,
            images: []
        },
        {
            id: 5,
            rating: 4,
            title: "جيد لكن يحتاج BIOS محدث",
            comment: "المعالج ممتاز لكن تأكد من تحديث BIOS للوحة الأم قبل التركيب. بعد التحديث يعمل بشكل مثالي.",
            date: "2024-10-10T11:30:00Z",
            user: {
                name: "فاطمة محمد",
                avatar: null
            },
            verified: true,
            likes: 6,
            dislikes: 1,
            images: []
        }
    ],
    3: [ // RTX 4080 reviews
        {
            id: 6,
            rating: 5,
            title: "كارت شاشة خرافي للألعاب",
            comment: "يشغل جميع الألعاب على أعلى إعدادات بدقة 4K. Ray tracing ممتاز والأداء مستقر. يستحق السعر تماماً.",
            date: "2024-10-13T13:20:00Z",
            user: {
                name: "عمر سعد",
                avatar: null
            },
            verified: true,
            likes: 25,
            dislikes: 0,
            images: []
        },
        {
            id: 7,
            rating: 4,
            title: "ممتاز لكن يستهلك طاقة عالية",
            comment: "الأداء رائع جداً لكن تأكد من أن مزود الطاقة لديك 850W على الأقل. التبريد جيد والضوضاء معقولة.",
            date: "2024-10-09T15:10:00Z",
            user: {
                name: "ليلى أحمد",
                avatar: null
            },
            verified: true,
            likes: 18,
            dislikes: 1,
            images: []
        }
    ]
};
