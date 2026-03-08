function warikga() {
        
    return {
    mobileMenu: false,
    slidefoto: [
                {
                img:"https://www.wahanaritelindo.com/static/uploads/yq1udhome_banner_image_desktopundefined_1753760862658.png",
                link: "https://draweb.netlify.app/kerjaan/warikga"
                },
                {
                img:"https://www.wahanaritelindo.com/static/uploads/84nhome_banner_image_desktopundefined_1771095922311.png",
                link: "https://draweb.netlify.app/kerjaan/warikga"
                },
                {
                img:"https://i.ibb.co.com/7x3tsrwj/wamo.png",
                link: "https://play.google.com/store/apps/details?id=com.wahanaritelindo.redrider"
                },
                {
                img:"https://www.wahanaritelindo.com/static/uploads/h3x1yv3home_banner_image_desktopi4g7lef8r3gk_1762833465797.png",
                link: "https://draweb.netlify.app/kerjaan/warikga"
                },
                {
                img:"https://www.wahanaritelindo.com/static/uploads/x07j2k38i9nhome_banner_image_desktopundefined_1755690438036.png",
                link: "https://draweb.netlify.app/kerjaan/warikga"
                },
                {
                img:"https://www.wahanaritelindo.com/static/uploads/4ut58s4g2home_banner_image_desktopundefined_1756094517064.jpg",
                link: "https://draweb.netlify.app/kerjaan/warikga"
                },
                {
                img:"https://www.wahanaritelindo.com/static/uploads/ytf24mthome_banner_image_desktopundefined_1758637464831.jpg",
                link: "https://draweb.netlify.app/kerjaan/warikga"
                },
                {
                img:"https://www.wahanaritelindo.com/static/uploads/q71xhome_banner_image_desktopundefined_1756266191973.png",
                link: "https://draweb.netlify.app/kerjaan/warikga"
                },
                {
                img:"https://www.wahanaritelindo.com/static/uploads/rubyhome_banner_image_desktopundefined_1756276342893.png",
                link: "https://draweb.netlify.app/kerjaan/warikga"
                },
                {
                img:"https://www.wahanaritelindo.com/static/uploads/zsg3hhome_banner_image_desktopf6f1ft497yks_1660279629137.jpg",
                link: "https://draweb.netlify.app/kerjaan/warikga"
                }
                ],
    heroIndex: 0,

    nextSlide() {
    this.heroIndex = (this.heroIndex + 1) % this.slidefoto.length;
    },

    prevSlide() {
    this.heroIndex = (this.heroIndex - 1 + this.slidefoto.length) % this.slidefoto.length;
    },
        init() {
    setInterval(() => {
        this.nextSlide();
    }, 4000);
    },
            Kategori: 'MATIC',
            pilihanUnit: 0,
            pilihdp: 0,
            pilihwarna: 'Solid Matte Red', // Warna default awal
            tenor: 35,
            pembelian: 'Kredit',
            namakamu: '',

            unit: {
                "MATIC": [
                    { 
                        nama: "NEW BEAT SPORTY CBS", 
                        otr: 19174000, 
                        images: {
                            "HARD ROCK BLACK": "foto/unit/matic/beat/cbs/CBS_HARD ROCK BLACK.jpg",
                            "FUNK RED BLACK": "foto/unit/matic/beat/cbs/CBS_FUNK RED BLACK.jpg",
                            "JAZZ WHITE BLACK": "foto/unit/matic/beat/cbs/CBS_JAZZ WHITE BLACK.jpg"
                        },
                        warna: ["HARD ROCK BLACK","FUNK RED BLACK","JAZZ WHITE BLACK"],
                        pilihanDP: [
                            { nominal: 2000, angsuran: { 11: 2121, 17: 1522, 23: 1247, 27: 1133, 29: 1085, 33: 1018, 35: 986 } },
                            { nominal: 2200, angsuran: { 11: 2094, 17: 1502, 23: 1229, 27: 1116, 29: 1069, 33: 1002, 35: 971 } },
                            { nominal: 2400, angsuran: { 11: 2072, 17: 1486, 23: 1217, 27: 1104, 29: 1058, 33: 991, 35: 961 } },
                            { nominal: 2600, angsuran: { 11: 2050, 17: 1470, 23: 1204, 27: 1093, 29: 1047, 33: 981, 35: 951 } },
                            { nominal: 2900, angsuran: { 11: 2017, 17: 1447, 23: 1185, 27: 1076, 29: 1030, 33: 966, 35: 936 } },
                            { nominal: 3100, angsuran: { 11: 1958, 17: 1393, 23: 1139, 27: 1033, 29: 987, 33: 923, 35: 893 } },
                            { nominal: 3900, angsuran: { 11: 1871, 17: 1331, 23: 1090, 27: 988, 29: 945, 33: 883, 35: 854 } }
                        ]
                    },
                    { 
                        nama: "BEAT SPORTY CBS ISS DELUXE ACC", 
                        otr: 20469000, 
                        images: {
                            "DELUXE MATTE GREEN": "foto/unit/matic/beat/dlx/DLX_DELUXE MATTE GREEN.jpg",
                            "DELUXE BLACK": "foto/unit/matic/beat/dlx/DLX_DELUXE BLACK.jpg"
                        },
                        warna: ["DELUXE MATTE GREEN","DELUXE BLACK"],
                        pilihanDP: [
                            { nominal: 2100, angsuran: { 11: 2259, 17: 1622, 23: 1330, 27: 1208, 29: 1157, 33: 1085, 35: 1052  } },
                            { nominal: 2300, angsuran: { 11: 2232, 17: 1601, 23: 1311, 27: 1190, 29: 1140, 33: 1069, 35: 1036 } },
                            { nominal: 2600, angsuran: { 11: 2199, 17: 1577, 23: 1292, 27: 1173, 29: 1124, 33: 1054, 35: 1021 } },
                            { nominal: 2800, angsuran: { 11: 2176, 17: 1562, 23: 1279, 27: 1162, 29: 1113, 33: 1043, 35: 1011 } },
                            { nominal: 3100, angsuran: { 11: 2143, 17: 1538, 23: 1260, 27: 1144, 29: 1096, 33: 1028, 35: 996 } },
                            { nominal: 3300, angsuran: { 11: 2084, 17: 1484, 23: 1216, 27: 1103, 29: 1055, 33: 986, 35: 954 } },
                            { nominal: 4100, angsuran: { 11: 1997, 17: 1423, 23: 1166, 27: 1058, 29: 1012, 33: 946, 35: 916 } }
                        ]
                    },
                    { 
                        nama: "BEAT SPORTY DELUXE SMART KEY ACC", 
                        otr: 20999000, 
                        images: {
                            "DELUXE MATTE BROWN": "foto/unit/matic/beat/sk/SK_DELUXE MATTE BROWN.jpg",
                            "DELUXE MATTE BLACK": "foto/unit/matic/beat/sk/SK_DELUXE MATTE BLACK.jpg",
                            "DELUXE MATTE BLUE": "foto/unit/matic/beat/sk/SK_DELUXE MATTE BLUE.jpg"
                        },
                        warna: ["DELUXE MATTE BLUE","DELUXE MATTE BLACK","DELUXE MATTE BROWN"],
                        pilihanDP: [
                            { nominal: 2100, angsuran: { 11: 2319, 17: 1665, 23: 1365, 27: 1240, 29: 1188, 33: 1114, 35: 1080 } },
                            { nominal: 2400, angsuran: { 11: 2281, 17: 1636, 23: 1340, 27: 1217, 29: 1166, 33: 1093, 35: 1059 } },
                            { nominal: 2700, angsuran: { 11: 2248, 17: 1613, 23: 1321, 27: 1199, 29: 1149, 33: 1077, 35: 1044 } },
                            { nominal: 2900, angsuran: { 11: 2225, 17: 1597, 23: 1308, 27: 1188, 29: 1138, 33: 1067, 35: 1034 } },
                            { nominal: 3200, angsuran: { 11: 2192, 17: 1573, 23: 1289, 27: 1171, 29: 1122, 33: 1052, 35: 1019 } },
                            { nominal: 3400, angsuran: { 11: 2133, 17: 1519, 23: 1244, 27: 1128, 29: 1079, 33: 1009, 35: 976 } },
                            { nominal: 4200, angsuran: { 11: 2045, 17: 1457, 23: 1194, 27: 1083, 29: 1036, 33: 969, 35: 938 } }
                        ]
                    },
                    { 
                        nama: "BEAT STREET ACC", 
                        otr: 20469000, 
                        images: {
                            "STREET BROWN": "foto/unit/matic/beat/st/street brown.jpg",
                            "STREET WHITE": "foto/unit/matic/beat/st/street white.jpg",
                            "STREET BLACK": "foto/unit/matic/beat/st/street black.jpg"
                        },
                        warna: ["STREET BLACK","STREET BROWN","STREET WHITE"],
                        pilihanDP: [
                            { nominal: 2100, angsuran: { 11: 2259, 17: 1622, 23: 1327, 27: 1207, 29: 1156, 33: 1084, 35: 1051 } },
                            { nominal: 2300, angsuran: { 11: 2232, 17: 1601, 23: 1309, 27: 1188, 29: 1138, 33: 1067, 35: 1034 } },
                            { nominal: 2600, angsuran: { 11: 2199, 17: 1577, 23: 1290, 27: 1171, 29: 1122, 33: 1051, 35: 1019 } },
                            { nominal: 2800, angsuran: { 11: 2176, 17: 1562, 23: 1277, 27: 1159, 29: 1111, 33: 1041, 35: 1009 } },
                            { nominal: 3100, angsuran: { 11: 2143, 17: 1538, 23: 1258, 27: 1142, 29: 1094, 33: 1026, 35: 994 } },
                            { nominal: 3300, angsuran: { 11: 2077, 17: 1477, 23: 1206, 27: 1092, 29: 1055, 33: 987, 35: 955 } },
                            { nominal: 4100, angsuran: { 11: 1990, 17: 1416, 23: 1157, 27: 1048, 29: 1012, 33: 947, 35: 916 } }
                        ]
                    },
                    { 
                        nama: "Scoopy Fashion ACC", 
                        otr: 23584000, 
                        images: {
                            "FASHION RED": "foto/unit/matic/scoopy/fashion/fashion red.jpg",
                            "FASHION MINT": "foto/unit/matic/scoopy/fashion/fashion mint.jpg",
                            "FASHION BLACK": "foto/unit/matic/scoopy/fashion/fashion black.jpg",
                            "FASHION CREAM": "foto/unit/matic/scoopy/fashion/fashion cream.jpg"
                        },
                        warna: ["FASHION RED","FASHION MINT","FASHION BLACK","FASHION CREAM"],
                        pilihanDP: [
                            { nominal: 2400, angsuran: { 11: 2578, 17: 1851, 23: 1513, 27: 1373, 29: 1316, 33: 1233, 35: 1195 } },
                            { nominal: 2600, angsuran: { 11: 2552, 17: 1831, 23: 1495, 27: 1357, 29: 1299, 33: 1218, 35: 1180 } },
                            { nominal: 2800, angsuran: { 11: 2529, 17: 1815, 23: 1482, 27: 1345, 29: 1288, 33: 1207, 35: 1170 } },
                            { nominal: 3000, angsuran: { 11: 2507, 17: 1799, 23: 1469, 27: 1334, 29: 1277, 33: 1197, 35: 1160 } },
                            { nominal: 3300, angsuran: { 11: 2474, 17: 1776, 23: 1450, 27: 1317, 29: 1261, 33: 1182, 35: 1145 } },
                            { nominal: 3600, angsuran: { 11: 2441, 17: 1752, 23: 1431, 27: 1299, 29: 1245, 33: 1167, 35: 1130 } },
                            { nominal: 4800, angsuran: { 11: 2268, 17: 1616, 23: 1321, 27: 1198, 29: 1145, 33: 1071, 35: 1036 } }
                        ]
                    },
                    { 
                        nama: "Scoopy Prestige ACC", 
                        otr: 24389000, 
                        images: {
                            "PRESTIGE WHITE": "foto/unit/matic/scoopy/prestige/prestige white.jpg",
                            "PRESTIGE RED": "foto/unit/matic/scoopy/prestige/prestige red.jpg",
                            "PRESTIGE BLACK": "foto/unit/matic/scoopy/prestige/prestige black.jpg"
                        },
                        warna: ["PRESTIGE WHITE","PRESTIGE RED","PRESTIGE BLACK"],
                        pilihanDP: [
                            { nominal: 2500, angsuran: { 11: 2639, 17: 1889, 23: 1539, 27: 1395, 29: 1368, 33: 1283, 35: 1244 } },
                            { nominal: 2800, angsuran: { 11: 2602, 17: 1861, 23: 1515, 27: 1372, 29: 1346, 33: 1262, 35: 1224 } },
                            { nominal: 3100, angsuran: { 11: 2569, 17: 1837, 23: 1496, 27: 1355, 29: 1329, 33: 1247, 35: 1209 } },
                            { nominal: 3400, angsuran: { 11: 2536, 17: 1814, 23: 1477, 27: 1338, 29: 1313, 33: 1231, 35: 1194 } },
                            { nominal: 3700, angsuran: { 11: 2503, 17: 1790, 23: 1458, 27: 1321, 29: 1296, 33: 1216, 35: 1179 } },
                            { nominal: 3900, angsuran: { 11: 2441, 17: 1734, 23: 1413, 27: 1279, 29: 1253, 33: 1172, 35: 1135 } },
                            { nominal: 4900, angsuran: { 11: 2333, 17: 1658, 23: 1351, 27: 1224, 29: 1199, 33: 1122, 35: 1086 } }
                        ]
                    },
                    { 
                        nama: "Scoopy Stylish ACC", 
                        otr: 24389000, 
                        images: {
                            "STYLISH BEIGE": "foto/unit/matic/scoopy/stylish/stylish beige.jpg",
                            "STYLISH GREY": "foto/unit/matic/scoopy/stylish/stylish grey.jpg",
                            "STYLISH GREEN": "foto/unit/matic/scoopy/stylish/stylish green.jpg"
                        },
                        warna: ["STYLISH GREEN","STYLISH GREY","STYLISH BEIGE"],
                        pilihanDP: [
                            { nominal: 2500, angsuran: { 11: 2639, 17: 1889, 23: 1539, 27: 1395, 29: 1368, 33: 1283, 35: 1244 } },
                            { nominal: 2800, angsuran: { 11: 2602, 17: 1861, 23: 1515, 27: 1372, 29: 1346, 33: 1262, 35: 1224 } },
                            { nominal: 3100, angsuran: { 11: 2569, 17: 1837, 23: 1496, 27: 1355, 29: 1329, 33: 1247, 35: 1209 } },
                            { nominal: 3400, angsuran: { 11: 2536, 17: 1814, 23: 1477, 27: 1338, 29: 1313, 33: 1231, 35: 1194 } },
                            { nominal: 3700, angsuran: { 11: 2503, 17: 1790, 23: 1458, 27: 1321, 29: 1296, 33: 1216, 35: 1179 } },
                            { nominal: 3900, angsuran: { 11: 2441, 17: 1734, 23: 1413, 27: 1279, 29: 1253, 33: 1172, 35: 1135 } },
                            { nominal: 4900, angsuran: { 11: 2333, 17: 1658, 23: 1351, 27: 1224, 29: 1199, 33: 1122, 35: 1086 } }
                        ]
                    },
                    { 
                        nama: "Genio CBS (BK)", 
                        otr: 20269000, 
                        images: {
                            "VIBRANT BLACK": "foto/unit/matic/genio/cbs/CBS_VIBRANT BLACK.jpg"
                        },
                        warna: ["VIBRANT BLACK"],
                        pilihanDP: [
                            { nominal: 2100, angsuran: { 11: 2239, 17: 1609, 23: 1315, 27: 1194, 29: 1144, 33: 1073, 35: 1040 } },
                            { nominal: 2300, angsuran: { 11: 2217, 17: 1593, 23: 1302, 27: 1182, 29: 1133, 33: 1062, 35: 1030 } },
                            { nominal: 2600, angsuran: { 11: 2184, 17: 1570, 23: 1283, 27: 1165, 29: 1116, 33: 1047, 35: 1015 } },
                            { nominal: 2800, angsuran: { 11: 2157, 17: 1549, 23: 1264, 27: 1148, 29: 1100, 33: 1031, 35: 999 } },
                            { nominal: 3100, angsuran: { 11: 2123, 17: 1525, 23: 1245, 27: 1131, 29: 1083, 33: 1016, 35: 984 } },
                            { nominal: 3300, angsuran: { 11: 2098, 17: 1506, 23: 1227, 27: 1116, 29: 1069, 33: 1002, 35: 971 } },
                            { nominal: 4100, angsuran: { 11: 2010, 17: 1443, 23: 1177, 27: 1070, 29: 1025, 33: 961, 35: 931 } }
                        ]
                    },
                    { 
                        nama: "Genio CBS ISS", 
                        otr: 20889000, 
                        images: {
                            "FABULOUS MATTE BROWN": "foto/unit/matic/genio/iss/ISS_FABULOUS MATTE BROWN.jpg",
                            "FABULOUS MATTE GREEN": "foto/unit/matic/genio/iss/ISS_FABULOUS MATTE GREEN.jpg",
                            "FABULOUS MATTE BLACK": "foto/unit/matic/genio/iss/ISS_FABULOUS MATTE BLACK.jpg"
                        },
                        warna: ["FABULOUS MATTE BLACK","FABULOUS MATTE GREEN","FABULOUS MATTE BROWN"],
                        pilihanDP: [
                            { nominal: 2100, angsuran: { 11: 2312, 17: 1660, 23: 1356, 27: 1231, 29: 1180, 33: 1106, 35: 1072 } },
                            { nominal: 2400, angsuran: { 11: 2279, 17: 1636, 23: 1337, 27: 1214, 29: 1163, 33: 1091, 35: 1057 } },
                            { nominal: 2700, angsuran: { 11: 2245, 17: 1612, 23: 1317, 27: 1197, 29: 1147, 33: 1076, 35: 1043 } },
                            { nominal: 2900, angsuran: { 11: 2218, 17: 1591, 23: 1299, 27: 1180, 29: 1130, 33: 1059, 35: 1026 } },
                            { nominal: 3200, angsuran: { 11: 2185, 17: 1568, 23: 1280, 27: 1162, 29: 1113, 33: 1044, 35: 1012 } },
                            { nominal: 3400, angsuran: { 11: 2158, 17: 1549, 23: 1262, 27: 1148, 29: 1099, 33: 1030, 35: 998 } },
                            { nominal: 4200, angsuran: { 11: 2069, 17: 1486, 23: 1211, 27: 1102, 29: 1055, 33: 990, 35: 959 } }
                        ]
                    },
                    { 
                        nama: "ADV 160 CBS", 
                        otr: 37459000, 
                        images: {
                            "Solid Black": "foto/unit/matic/adv/cbs/CBS_black.jpg",
                            "Solid White": "foto/unit/matic/adv/cbs/CBS_white.jpg",
                            "Solid Matte Red": "foto/unit/matic/adv/cbs/CBS_red.jpg"
                        },
                        warna: ["Solid Black", "Solid White", "Solid Matte Red"],
                        pilihanDP: [
                            { nominal: 3900, angsuran: { 11: 3977, 17: 2852, 23: 2321, 27: 2105, 29: 2015, 33: 1888, 35: 1828 } },
                            { nominal: 4100, angsuran: { 11: 3954, 17: 2836, 23: 2308, 27: 2093, 29: 2004, 33: 1877, 35: 1819 } },
                            { nominal: 4300, angsuran: { 11: 3932, 17: 2821, 23: 2295, 27: 2082, 29: 1994, 33: 1867, 35: 1809 } },
                            { nominal: 4500, angsuran: { 11: 3910, 17: 2805, 23: 2283, 27: 2071, 29: 1983, 33: 1857, 35: 1799 } },
                            { nominal: 4700, angsuran: { 11: 3888, 17: 2789, 23: 2270, 27: 2059, 29: 1972, 33: 1847, 35: 1789 } },
                            { nominal: 4900, angsuran: { 11: 3861, 17: 2769, 23: 2251, 27: 2041, 29: 1954, 33: 1830, 35: 1772 } },
                            { nominal: 5700, angsuran: { 11: 3773, 17: 2706, 23: 2200, 27: 1996, 29: 1910, 33: 1789, 35: 1733 } }
                        ]
                    },
                    { 
                        nama: "ADV 160 ABS ACC", 
                        otr: 41152000, 
                        images: {
                            "Tough Matte Brown": "foto/unit/matic/adv/abs/ABS_tough matte brown.jpg",
                            "Tough Matte Green": "foto/unit/matic/adv/abs/ABS_tough matte green.jpg",
                            "Tough Matte Black": "foto/unit/matic/adv/abs/ABS_tough matte black.jpg"
                        },
                        warna: ["Tough Matte Brown", "Tough Matte Green", "Tough Matte Black"],
                        pilihanDP: [
                            { nominal: 4300, angsuran: { 11: 4350, 17: 3121, 23: 2539, 27: 2303, 29: 2205, 33: 2065, 35: 2001 } },
                            { nominal: 4500, angsuran: { 11: 4328, 17: 3105, 23: 2526, 27: 2292, 29: 2194, 33: 2055, 35: 1991 } },
                            { nominal: 4700, angsuran: { 11: 4306, 17: 3089, 23: 2514, 27: 2280, 29: 2183, 33: 2045, 35: 1981 } },
                            { nominal: 4900, angsuran: { 11: 4284, 17: 3073, 23: 2501, 27: 2269, 29: 2172, 33: 2035, 35: 1971 } },
                            { nominal: 5200, angsuran: { 11: 4251, 17: 3050, 23: 2482, 27: 2252, 29: 2156, 33: 2020, 35: 1956 } },
                            { nominal: 5400, angsuran: { 11: 4224, 17: 3029, 23: 2462, 27: 2233, 29: 2137, 33: 2002, 35: 1939 } },
                            { nominal: 6200, angsuran: { 11: 4135, 17: 2966, 23: 2411, 27: 2187, 29: 2094, 33: 1961, 35: 1900 } }
                        ]
                    },
                    { 
                        nama: "ADV 160 ABS RoadSync ACC", 
                        otr: 41152000, 
                        images: {
                            "SUV BROWN": "foto/unit/matic/adv/roadsing/roadsing_SUV BROWN.jpg"
                        },
                        warna: ["SUV BROWN"],
                        pilihanDP: [
                            { nominal: 4500, angsuran: { 11: 4516, 17: 3239, 23: 2636, 27: 2391, 29: 2289, 33: 2144, 35: 2077 } },
                            { nominal: 4700, angsuran: { 11: 4494, 17: 3223, 23: 2623, 27: 2379, 29: 2278, 33: 2134, 35: 2067 } },
                            { nominal: 4900, angsuran: { 11: 4472, 17: 3208, 23: 2610, 27: 2368, 29: 2267, 33: 2124, 35: 2057 } },
                            { nominal: 5100, angsuran: { 11: 4449, 17: 3192, 23: 2598, 27: 2357, 29: 2256, 33: 2114, 35: 2047 } },
                            { nominal: 5400, angsuran: { 11: 4416, 17: 3168, 23: 2579, 27: 2339, 29: 2240, 33: 2098, 35: 2033 } },
                            { nominal: 5600, angsuran: { 11: 4389, 17: 3147, 23: 2558, 27: 2320, 29: 2221, 33: 2080, 35: 2080 } },
                            { nominal: 6500, angsuran: { 11: 4290, 17: 3077, 23: 2501, 27: 2269, 29: 2172, 33: 2035, 35: 1971 } }
                        ]
                    }
                ],
                "SPORT": [
                    { 
                        nama: "CBR150R ABS", 
                        otr: 123456789, 
                        images: {
                            "Victory Red Black": "https://www.astra-honda.com/images/product/colors/cbr150r/warna-2.webp",
                            "Dominator Matte Black": "https://www.astra-honda.com/images/product/colors/cbr150r/warna-1.webp"
                        },
                        warna: ["Victory Red Black", "Dominator Matte Black"],
                        pilihanDP: [
                            { nominal: 2100, angsuran: { 11: 2312, 17: 1660, 23: 1356, 27: 1231, 29: 1180, 33: 1106, 35: 1072 } }
                        ]
                    }
                ],
                "CUV": [
                    { 
                        nama: "CUV E", 
                        otr: 123456789, 
                        images: {
                            "Victory Red Black": "https://www.astra-honda.com/images/product/colors/cbr150r/warna-2.webp",
                            "Dominator Matte Black": "https://www.astra-honda.com/images/product/colors/cbr150r/warna-1.webp"
                        },
                        warna: ["Victory Red Black", "Dominator Matte Black"],
                        pilihanDP: [
                            { nominal: 2100, angsuran: { 11: 2312, 17: 1660, 23: 1356, 27: 1231, 29: 1180, 33: 1106, 35: 1072 } }
                        ]
                    }
                ],
                "CUB": [
                    { 
                        nama: "Supra", 
                        otr: 123456789, 
                        images: {
                            "Victory Red Black": "https://www.astra-honda.com/images/product/colors/cbr150r/warna-2.webp",
                            "Dominator Matte Black": "https://www.astra-honda.com/images/product/colors/cbr150r/warna-1.webp"
                        },
                        warna: ["Victory Red Black", "Dominator Matte Black"],
                        pilihanDP: [
                            { nominal: 2100, angsuran: { 11: 2312, 17: 1660, 23: 1356, 27: 1231, 29: 1180, 33: 1106, 35: 1072 } }
                        ]
                    }
                ],
            },

            buatgambar() {
                let unit = this.unit[this.Kategori][this.pilihanUnit];
                return unit.images[this.pilihwarna] || unit.images[unit.warna[0]];
            },

            pilihUnit(index, metode) {
                this.pilihanUnit = index;
                this.pembelian = metode;
                this.pilihdp = 0;
                this.pilihwarna = this.unit[this.Kategori][index].warna[0];
                document.getElementById('simulasi').scrollIntoView({ behavior: 'smooth' });
            },

            Angsuran() {
                let unit = this.unit[this.Kategori][this.pilihanUnit];
                let dpData = unit.pilihanDP[this.pilihdp];
                return dpData.angsuran[this.tenor] || 0;
            },
        

          rp(val) {
                    if(!val) return "Rp 0";
                    let nominal = val < 100000 ? val * 1000 : val;
                    return "Rp " + Math.floor(nominal).toLocaleString('id-ID');
                },

            chatwa() {
                if(!this.namakamu) return alert('Silakan masukkan nama Anda');
                
                let unit = this.unit[this.Kategori][this.pilihanUnit].nama;
                let otr = this.rp(this.unit[this.Kategori][this.pilihanUnit].otr);
                let warna = this.pilihwarna;
                let pesan = "";

                if(this.pembelian === 'Kredit') {
                    let dp = this.rp(this.unit[this.Kategori][this.pilihanUnit].pilihanDP[this.pilihdp].nominal);
                    let cicilan = this.rp(this.Angsuran());
                    pesan = `Halo CS Wahana Honda!\n\nSaya ingin mengajukan *KREDIT*:\n*Unit:* ${unit}\n*Warna:* ${warna}\n*Nama:* ${this.namakamu}\n*DP:* ${dp}\n*Angsuran:* ${cicilan} x ${this.tenor} Bulan\n\nMohon dibantu prosesnya.`;
                } else {
                    pesan = `Halo CS Wahana Honda!\n\nSaya ingin membeli *CASH*:\n*Unit:* ${unit}\n*Warna:* ${warna}\n*Nama:* ${this.namakamu}\n*Harga OTR:* ${otr}\n\nMohon info ketersediaan stok.`;
                }

                window.open(`https://wa.me/6281959334206?text=${encodeURIComponent(pesan)}`);
            }
        }
    }
