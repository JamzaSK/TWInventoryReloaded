// ==UserScript==
// @name TW-Inventory Reloaded Beta
// @namespace WINGS
// @author Jamza
// @description Tento script zvětšuje inventář a zjednodušuje jeho třídění. Pracuji na dalších funkcích. Pokud máš nápady na vylepšení, kontaktuj mě :)
// @include https://*.the-west.*/game.php*
// @version 1.55
// @icon https://jamzask.github.io/TWInventoryReloaded/TWinventoryreloaded.ico
// @downloadURL  https://jamzask.github.io/TWInventoryReloaded/code.user.js
// @updateURL    https://jamzask.github.io/TWInventoryReloaded/code.user.js
// @grant none
// @credits Jackson, Tom Robert, Sagal
// ==/UserScript==
(function(fn) {
    var script = document.createElement('script');
    script.setAttribute('type', 'application/javascript');
    script.textContent = '(' + fn + ')();';
    document.body.appendChild(script);
    document.body.removeChild(script);
})(function() {
    var TWIR = {
        version: '1.55',
        name: 'TW-InventoryReloaded',
        author: 'Jamza',
        minGame: '2.63',
        maxGame: Game.version.toString(),
        website: 'https://jamzask.github.io/TWInventoryReloaded',
        updateUrl: 'https://jamzask.github.io/TWInventoryReloaded/update.js',
        images: {}
    };
    Inventory.uid = "inventory";
    Inventory.size = 66;
    Inventory.sizeSearch = 55;
    Inventory.sizeCustom = 55;
    Inventory.width = 608;
    Inventory.availableCategories = ['new', 'right_arm', 'left_arm', 'head', 'neck', 'body', 'belt', 'pants', 'foot', 'animal', 'yield', 'upgradeable'];
    Inventory.defaultCategory = 'new';
    Inventory.latestSize = 66;
    Inventory.context = null;
    $("<link href='https://jamzask.github.io/TWInventoryReloaded/TW-InventoryReloaded.css' rel='stylesheet' type='text/css'>").appendTo("head");
    var langs;
    langs = {
        cs_CZ: {
            lang_select: 'Aktuální jazyk',
            language: 'Čeština',
            ApiGui: 'Tenhle script zvětšuje inventář a vylepšuje jeho třídění.',
            contact: 'Kontakt',
            title: 'TW Inventory Reloaded',
            update: 'Update',
            updateAvailable: 'Nová verze skriptu je dostupní.',
            name: 'TW Inventory Reloaded',
            msgme: 'Napiš mi ve hře',
            mailme: 'Pošli mi email',
            adventure: '• Dobrodružství',
            work: '• Práce (PB)',
            duel: '• Duely',
            motivation: '• Motivace',
            energy: '• Energie',
            skill: '• Schopnosti',
            fk: '• Bitvy',
            speed: '• Cestování',
            lp: '♥ Zdraví',
            special: '• Výhody',
            events: '• Eventy',
            chests: '• Poklady',
            questitems: '• Úkolové předměty',
            craftitems: '❖ Výrobky z řemesel',
            kuchar: '• Polní kuchař',
            mastickar: '• Mastičkář',
            kovar: '• Kovař',
            sedlar: '• Sedlový mistr',
            menu: '[BETA]Externí výběr posílení (pracuji na interním)',
            nothingFound: 'Nemáte tenhle typ posílení!',
			open_info: 'Pracuji na tom...',
			open_result: 'Hotovo...',
			open_number: 'Kolik kusů?',
			vsecky: 'Všechny',
            vsecky_recepty: 'Všechny návody',
            Duplikaty: {
                tip: 'Zobrazit pouze: Duplikáty',
                upgradeable: '• Vylepšitelné',
                noset: '• Kromě setů',
                sellable: '• Prodejní',
                auctionable: '• Dražitelné',
                tipuse: 'Zobrazit pouze: Použitelné',
                tiprecipe: 'Zobrazit pouze: Rěmeslo',
                tipsets: 'Zobrazit pouze: Soupravy',
                vsecko: 'Všechny',
            }
        },
        sk_SK: {
            lang_select: 'Aktuálny jazyk',
            language: 'Slovenčina',
            ApiGui: 'Tento script zväčšuje inventár a vylepšuje jeho triedenie.',
            contact: 'Kontakt',
            title: 'TW Inventory Reloaded',
            update: 'Update',
            updateAvailable: 'Nová verzia skriptu je dostupná.',
            name: 'TW Inventory Reloaded',
            msgme: 'Napíš mi v hre',
            mailme: 'Pošli mi email',
            adventure: 'Dobrodružstvá',
            work: '• Práce (PB)',
            duel: '• Duely',
            motivation: '• Motivácia',
            energy: '• Energia',
            skill: '• Schopnosti',
            fk: '• Boje',
            speed: '• Cestovanie',
            lp: '♥ Zdravie',
            special: '• Výhody',
            events: '• Eventy',
            chests: '• Poklady',
            questitems: '• Predmety z úloh',
            craftitems: '❖ Výrobky z remesiel',
            kuchar: '• Poľný kuchár',
            mastickar: '• Mastičkár',
            kovar: '• Kováč',
            sedlar: '• Majster sedla',
            menu: '[BETA]Externí výběr posílení (pracuji na interním)',
            nothingFound: 'Nemáš tento typ produktu!',
			open_info: 'Pracujem na tom...',
			open_result: 'Hotovo...',
			open_number: 'Koľko kusov?',
			vsecky: 'Všetky',
			vsecky_recepty: 'Všetky recepty',
            Duplikaty: {
                tip: 'Zobraziť iba: Duplikáty',
                upgradeable: '• Vylepšiteľné',
                noset: '• Okrem setov',
                sellable: '• Predajné',
                auctionable: '• Dražiteľné',
                tipuse: 'Zobraziť iba: Použiteľné',
                tiprecipe: 'Zobraziť iba: Remeslo',
                tipsets: 'Zobraziť iba: Súpravy',
                vsecko: 'Všetky',
            }
        },
    };
    var IRlang = langs.hasOwnProperty(Game.locale) ? langs[Game.locale] : langs.cs_CZ;
    var TWIRApi = TheWestApi.register('TWIR', IRlang.title, TWIR.minGame, TWIR.maxGame, TWIR.author, TWIR.website);
    TWIRApi.setGui('<br><i>' + IRlang.lang_select + ': </i>' + IRlang.language + '<br><br>' + IRlang.ApiGui + '<br><br><i>' + IRlang.name + ' v' + TWIR.version + '</i><br><br>' + IRlang.contact + ':</b><ul style="margin-left:15px;"><li>' + IRlang.msgme + '<a  style="margin-left:15px;" href="javascript:void(PlayerProfileWindow.open(746376));">Jamza (CZ14)</a>' + '</li><li>' + IRlang.mailme + '<a  style="margin-left:15px;" href="mailto:97jamza@gmail.com">97jamza@gmail.com</a>' + '</li></ul>');
    var TW_Sets = [{
        name: IRlang.vsecky,
        items: [50480000, 50481000, 50482000, 50483000, 50484000, 50485000, 50486000, 50487000, 371000, 374000, 376000, 377000, 378000, 379000, 852000, 853000, 926000, 927000, 928000, 973000, 974000, 975000, 976000, 1003000, 1838000, 1868000, 1869000, 1878000, 1887000, 1888000, 1897000, 1905000, 1906000, 1915000, 1923000, 1924000, 1933000, 1960000, 1961000, 1964000, 1967000, 1975000, 1976000, 2131000, 2132000, 2133000, 2134000, 2136000, 2137000, 2138000, 2139000, 2144000, 2152000, 2172000, 2173000, 2174000, 2175000, 2176000, 2187000, 2192000, 2193000, 2194000, 2195000, 2196000, 2197000, 2198000, 2199000, 2200000, 2201000, 2202000, 2203000, 2204000, 2205000, 2226000, 2227000, 2297000, 2298000, 2299000, 2300000, 2305000, 2329000, 2330000, 2331000, 2332000, 2333000, 2334000, 2335000, 2336000, 2337000, 2338000, 2345000, 2359000, 2360000, 2361000, 2362000, 2379000, 2380000, 2381000, 2382000, 2383000, 2384000, 2385000, 2393000, 2394000, 2395000, 2396000, 2397000, 2421000, 2460000, 2461000, 2462000, 2482000, 2487000, 2488000, 2489000, 2490000, 2499000, 2507000, 2518000, 2521000, 2524000, 2527000, 2533000, 2534000, 2535000, 2536000, 2537000, 2538000, 2540000, 2542000, 2556000, 2557000, 2558000, 2559000, 2560000, 2561000, 2562000, 2563000, 2564000, 2565000, 2566000, 2567000, 2579000, 2580000, 2581000, 2585000, 2586000, 2587000, 2588000, 2589000, 2590000, 2591000, 2592000, 2593000, 2594000, 2602000, 2603000, 2604000, 2605000, 2606000, 2614000, 2615000, 2616000, 2617000, 2618000, 2619000, 2620000, 2621000, 2622000, 2623000, 2624000, 2626000, 2627000, 2628000, 2629000, 2630000, 2645000, 2646000, 2647000, 2648000, 2650000, 2665000, 2666000, 2673000, 2674000, 2675000, 2676000, 2677000, 2678000, 2679000, 2680000, 2685000, 2687000, 2688000, 2689000, 2690000, 2692000, 2693000, 2694000, 2698000, 2699000, 2700000, 2701000, 2702000, 2703000, 2704000, 2705000, 2714000, 2715000, 2721000, 2722000, 2723000, 2728000, 2755000, 12700000, 12709000, 12710000, 12711000, 13711000, 17000000, 17001000, 17002000, 17003000, 17004000, 17005000, 17006000, 17007000, 17008000, 50001000, 50002000, 50003000, 50009000, 50023000, 50025000, 50080000, 50081000, 50082000, 50086000, 50087000, 50088000, 50093000, 50105000, 50128000, 50130000, 50131000, 50132000, 50133000, 50134000, 50168000, 50169000, 50170000, 50171000, 50177000, 50195000, 50251000, 50252000, 50253000, 50254000, 50255000, 50256000, 50257000, 50258000, 50259000, 50295000, 50296000, 50297000, 50298000, 50299000, 50300000, 50301000, 50302000, 50305000, 50346000, 50347000, 50348000, 50368000, 50381000, 50382000, 50383000, 50384000, 50385000, 50386000, 50387000, 50388000, 50391000, 50409000, 50423000, 50424000, 50425000, 50426000, 50427000, 50428000, 50442000, 50446000, 50456000, 50477000, 50478000, 50479000, 50488000, 50501000, 50509000, 50540000, 50545000, 50547000, 50556000, 50557000, 50558000, 50559000, 50560000, 50570000, 50579000, 50588000, 50603000, 50604000, 50605000, 50606000, 50607000, 50608000, 50622000, 50623000, 50624000, 50625000, 50675000, 50676000, 50677000, 50678000, 50679000, 50680000, 50681000, 50682000, 50683000, 50684000, 50685000, 50686000, 50687000, 50688000, 50689000, 50690000, 50691000, 50696000, 50697000, 50698000, 50699000, 50700000, 55000, 1977000, 1978000, 1979000, 2311000, 2312000, 2313000, 2314000, 2315000, 2316000, 2317000, 2318000, 2319000, 2320000, 2321000, 2322000, 2323000, 2324000, 2325000, 2326000, 2470000, 2472000, 2473000, 2475000, 2476000, 2478000, 2479000, 2481000, 2484000, 2485000, 2486000, 2491000, 2493000, 2495000, 2497000, 2695000, 21340000, 21341000, 21342000, 21343000, 1883000, 1892000, 1898000, 1946000, 1974000, 1991000, 2116000, 2117000, 2235000, 2253000, 2254000, 2255000, 2256000, 2257000, 2295000, 2296000, 2357000, 2358000, 2525000, 2671000, 2672000, 2734000, 12705000, 12706000, 13705000, 13706000, 16100000, 17028000, 50113000, 185204000, 185205000, 1918000, 1919000, 1926000, 1927000, 1934000, 1937000, 1952000, 1968000, 1987000, 2135000, 2229000, 2262000, 2263000, 2264000, 2284000, 2292000, 2354000, 2519000, 2668000, 12702000, 13702000, 50304000, 185201000, 1872000, 1873000, 1900000, 1909000, 1910000, 1949000, 1990000, 2106000, 2107000, 2108000, 2109000, 2110000, 2111000, 2112000, 2113000, 2114000, 2115000, 2119000, 2120000, 2121000, 2122000, 2123000, 2124000, 2125000, 2127000, 2258000, 2259000, 2260000, 2261000, 2269000, 2285000, 2286000, 2287000, 2288000, 2289000, 2516000, 2522000, 2529000, 2530000, 2741000, 50480000, 1863000, 1864000, 1871000, 1879000, 1981000, 1982000, 1984000, 1988000, 2528000, 2531000, 2738000, 253800000, 255000, 1890000, 1928000, 1943000, 1969000, 1970000, 1971000, 1985000, 1997000, 2128000, 2129000, 2130000, 2294000, 2356000, 2670000, 12704000, 13704000, 21345000, 50390000, 50627000, 185203000, 1940000, 1998000, 2100000, 2101000, 2102000, 2103000, 2104000, 2105000, 2118000, 2126000, 2164000, 2206000, 2207000, 2208000, 2209000, 2210000, 2211000, 2212000, 2213000, 2214000, 2215000, 2216000, 2217000, 2218000, 2219000, 2220000, 2221000, 2222000, 2225000, 2290000, 2466000, 2732000, 50205000, 50303000, 1901000, 1908000, 1916000, 1938000, 50135000, 50136000, 1882000, 1891000, 1939000, 2268000, 2291000, 2293000, 2353000, 2355000, 2391000, 2667000, 2669000, 2706000, 2707000, 12701000, 12703000, 13701000, 13703000, 185200000, 185202000, ]    
    }, {
        name: IRlang.adventure,
        items: [50480000, 50481000, 50482000, 50483000, 50484000, 50485000, 50486000, 50487000, 1909000, 1910000, 1991000, 2110000, 2111000, 2112000, 2113000, 2114000, 2115000, 2121000, 2122000, 2741000, 50480000, 50481000, ]
    }, {
        name: IRlang.work,
        items: [1879000, 1940000, 1982000, 1988000, 1998000, 2100000, 2101000, 2102000, 2103000, 2104000, 2105000, 2118000, 2126000, 2164000, 2206000, 2207000, 2208000, 2209000, 2210000, 2211000, 2212000, 2213000, 2214000, 2215000, 2216000, 2217000, 2218000, 2219000, 2220000, 2221000, 2222000, 2225000, 2285000, 2286000, 2287000, 2288000, 2289000, 2290000, 2313000, 2317000, 2321000, 2325000, 2466000, 2491000, 2493000, 2495000, 2497000, 2516000, 2525000, 2528000, 2531000, 2732000, 2738000, 21342000, 50205000, 50303000, 253800000, ]
    }, {
        name: IRlang.duel,
        items: [1863000, 1864000, 1871000, 1872000, 1901000, 1908000, 1916000, 1938000, 1946000, 1981000, 1984000, 2285000, 2286000, 2287000, 2288000, 2289000, 2529000, 2695000, 50135000, 50136000, ]
    }, {
        name: IRlang.motivation,
        items: [255000, 1882000, 1891000, 1928000, 1934000, 1939000, 1952000, 1981000, 1984000, 1985000, 1988000, 1997000, 2128000, 2129000, 2130000, 2268000, 2291000, 2293000, 2353000, 2355000, 2391000, 2484000, 2516000, 2667000, 2669000, 2706000, 2707000, 2734000, 12701000, 12703000, 13701000, 13703000, 17028000, 50113000, 50135000, 50136000, 50627000, 185200000, 185202000, ]
    }, {
        name: IRlang.energy,
        items: [255000, 1890000, 1892000, 1898000, 1928000, 1937000, 1943000, 1969000, 1970000, 1971000, 1985000, 1997000, 2128000, 2129000, 2130000, 2235000, 2294000, 2296000, 2312000, 2316000, 2320000, 2324000, 2356000, 2358000, 2485000, 2486000, 2491000, 2493000, 2495000, 2497000, 2525000, 2670000, 2672000, 12704000, 12706000, 13704000, 13706000, 16100000, 17028000, 21341000, 21345000, 50113000, 50390000, 50627000, 185203000, 185205000, ]
    }, {
        name: IRlang.skill,
        items: [1863000, 1864000, 1871000, 1872000, 1873000, 1879000, 1946000, 1977000, 1978000, 1979000, 1981000, 1982000, 1984000, 1988000, 2285000, 2286000, 2287000, 2288000, 2289000, 2516000, 2525000, 2528000, 2529000, 2530000, 2531000, 2738000, 50482000, 50483000, 50484000, 50485000, 50486000, 50487000, 253800000, ]
    }, {
        name: IRlang.fk,
        items: [1872000, 1873000, 1900000, 1909000, 1910000, 1946000, 1949000, 1990000, 1991000, 2106000, 2107000, 2108000, 2109000, 2110000, 2111000, 2112000, 2113000, 2114000, 2115000, 2119000, 2120000, 2121000, 2122000, 2123000, 2124000, 2125000, 2127000, 2258000, 2259000, 2260000, 2261000, 2269000, 2285000, 2286000, 2287000, 2288000, 2289000, 2516000, 2522000, 2525000, 2529000, 2530000, 2741000, 50480000, 50481000, 50482000, 50483000, 50484000, 50485000, 50486000, 50487000, ]
    }, {
        name: IRlang.speed,
        items: [1918000, 1919000, 1926000, 1927000, 1934000, 1937000, 1952000, 1968000, 1987000, 2135000, 2229000, 2262000, 2263000, 2264000, 2284000, 2292000, 2354000, 2470000, 2473000, 2476000, 2479000, 2491000, 2493000, 2495000, 2497000, 2519000, 2668000, 2734000, 12702000, 13702000, 50304000, 185201000, ]
    }, {
        name: IRlang.lp,
        items: [1883000, 1892000, 1898000, 1946000, 1974000, 1991000, 2116000, 2117000, 2235000, 2253000, 2254000, 2255000, 2256000, 2257000, 2295000, 2296000, 2357000, 2358000, 2486000, 2525000, 2671000, 2672000, 2734000, 12705000, 12706000, 13705000, 13706000, 16100000, 17028000, 50113000, 185204000, 185205000, ]
    }, {
        name: IRlang.special,
        items: [1977000, 1978000, 1979000, 2311000, 2312000, 2313000, 2314000, 2315000, 2316000, 2317000, 2318000, 2319000, 2320000, 2321000, 2322000, 2323000, 2324000, 2325000, 2326000, 2470000, 2472000, 2473000, 2475000, 2476000, 2478000, 2479000, 2481000, 2482000, 2484000, 2485000, 2486000, 2491000, 2493000, 2495000, 2497000, 2695000, 21340000, 21341000, 21342000, 21343000, ]
    }, {
        name: IRlang.events,
        items: [55000, 371000, 973000, 974000, 975000, 976000, 2557000, 2558000, 2561000, 2562000, 2563000, 2564000, 2565000, 2566000, 2567000, 2590000, 2591000, 2592000, 2593000, 2594000, 2619000, 2620000, 2621000, 2622000, 2623000, 2665000, 2666000, 2675000, 2676000, 2677000, 2678000, 2679000, 2680000, 2692000, 2693000, 2698000, 12700000, 50691000, ]
    }, {
        name: IRlang.chests,
        items: [371000, 374000, 376000, 377000, 378000, 379000, 852000, 853000, 926000, 927000, 928000, 973000, 974000, 975000, 976000, 1003000, 1838000, 1868000, 1869000, 1878000, 1887000, 1888000, 1897000, 1905000, 1906000, 1915000, 1923000, 1924000, 1933000, 1960000, 1961000, 1964000, 1967000, 1975000, 1976000, 2131000, 2132000, 2133000, 2134000, 2136000, 2137000, 2138000, 2139000, 2144000, 2152000, 2172000, 2173000, 2174000, 2175000, 2176000, 2187000, 2192000, 2193000, 2194000, 2195000, 2196000, 2197000, 2198000, 2199000, 2200000, 2201000, 2202000, 2203000, 2204000, 2205000, 2226000, 2227000, 2297000, 2298000, 2299000, 2300000, 2305000, 2329000, 2330000, 2331000, 2332000, 2333000, 2334000, 2335000, 2336000, 2337000, 2338000, 2345000, 2359000, 2360000, 2361000, 2362000, 2379000, 2380000, 2381000, 2382000, 2383000, 2384000, 2385000, 2393000, 2394000, 2395000, 2396000, 2397000, 2421000, 2460000, 2461000, 2462000, 2482000, 2487000, 2488000, 2489000, 2490000, 2499000, 2507000, 2518000, 2521000, 2524000, 2527000, 2533000, 2534000, 2535000, 2536000, 2537000, 2538000, 2540000, 2542000, 2556000, 2557000, 2558000, 2559000, 2560000, 2561000, 2562000, 2563000, 2564000, 2565000, 2566000, 2567000, 2579000, 2580000, 2581000, 2585000, 2586000, 2587000, 2588000, 2589000, 2590000, 2591000, 2592000, 2593000, 2594000, 2602000, 2603000, 2604000, 2605000, 2606000, 2614000, 2615000, 2616000, 2617000, 2618000, 2619000, 2620000, 2621000, 2622000, 2623000, 2624000, 2626000, 2627000, 2628000, 2629000, 2630000, 2645000, 2646000, 2647000, 2648000, 2650000, 2665000, 2666000, 2673000, 2674000, 2675000, 2676000, 2677000, 2678000, 2679000, 2680000, 2685000, 2687000, 2688000, 2689000, 2690000, 2692000, 2693000, 2694000, 2698000, 2699000, 2700000, 2701000, 2702000, 2703000, 2704000, 2705000, 2714000, 2715000, 2721000, 2722000, 2723000, 2728000, 2755000, 12700000, 12709000, 12710000, 12711000, 13711000, 17000000, 17001000, 17002000, 17003000, 17004000, 17005000, 17006000, 17007000, 17008000, 50001000, 50002000, 50003000, 50009000, 50023000, 50025000, 50080000, 50081000, 50082000, 50086000, 50087000, 50088000, 50093000, 50105000, 50128000, 50130000, 50131000, 50132000, 50133000, 50134000, 50168000, 50169000, 50170000, 50171000, 50177000, 50195000, 50251000, 50252000, 50253000, 50254000, 50255000, 50256000, 50257000, 50258000, 50259000, 50295000, 50296000, 50297000, 50298000, 50299000, 50300000, 50301000, 50302000, 50305000, 50346000, 50347000, 50348000, 50368000, 50381000, 50382000, 50383000, 50384000, 50385000, 50386000, 50387000, 50388000, 50391000, 50409000, 50423000, 50424000, 50425000, 50426000, 50427000, 50428000, 50442000, 50446000, 50456000, 50477000, 50478000, 50479000, 50488000, 50501000, 50509000, 50540000, 50545000, 50547000, 50556000, 50557000, 50558000, 50559000, 50560000, 50570000, 50579000, 50588000, 50603000, 50604000, 50605000, 50606000, 50607000, 50608000, 50622000, 50623000, 50624000, 50625000, 50675000, 50676000, 50677000, 50678000, 50679000, 50680000, 50681000, 50682000, 50683000, 50684000, 50685000, 50686000, 50687000, 50688000, 50689000, 50690000, 50691000, 50696000, 50697000, 50698000, 50699000, 50700000, ]
    }, ];
    var TW_Recepts = [{
        name: IRlang.vsecky_recepty,
        items: [20060000, 20061000, 20062000, 20080000, 20093000, 20094000, 20095000, 20063000, 20064000, 20065000, 20066000, 20067000, 20068000, 20069000, 20070000, 20071000, 20072000, 20073000, 20074000, 20075000, 20076000, 20077000, 20117000, 20078000, 20079000, 20121000, 20137000, 20106000, 20125000, 20107000, 20108000, 20138000, 20109000, 20110000, 20139000, 20040000, 20041000, 20042000, 20082000, 20090000, 20091000, 20092000, 20043000, 20044000, 20045000, 20046000, 20047000, 20048000, 20049000, 20050000, 20051000, 20052000, 20053000, 20054000, 20055000, 20056000, 20057000, 20118000, 20058000, 20059000, 20122000, 20131000, 20111000, 20126000, 20112000, 20113000, 20132000, 20114000, 20115000, 20133000, 20020000, 20021000, 20022000, 20081000, 20087000, 20088000, 20089000, 20023000, 20024000, 20025000, 20026000, 20027000, 20028000, 20029000, 20030000, 20031000, 20032000, 20033000, 20034000, 20035000, 20036000, 20037000, 20119000, 20038000, 20039000, 20123000, 20128000, 20101000, 20127000, 20102000, 20103000, 20129000, 20104000, 20105000, 20130000, 20000000, 20001000, 20002000, 20083000, 20084000, 20085000, 20086000, 20003000, 20004000, 20005000, 20006000, 20007000, 20008000, 20009000, 20010000, 20011000, 20012000, 20013000, 20014000, 20015000, 20016000, 20017000, 20116000, 20018000, 20019000, 20134000, 20096000, 20120000, 20124000, 20097000, 20098000, 20135000, 20099000, 20100000, 20136000, ]
	}, {
        name: IRlang.kuchar,
        items: [20000000, 20001000, 20002000, 20083000, 20084000, 20085000, 20086000, 20003000, 20004000, 20005000, 20006000, 20007000, 20008000, 20009000, 20010000, 20011000, 20012000, 20013000, 20014000, 20015000, 20016000, 20017000, 20116000, 20018000, 20019000, 20134000, 20096000, 20120000, 20124000, 20097000, 20098000, 20135000, 20099000, 20100000, 20136000, ]
    }, {
        name: IRlang.mastickar,
        items: [20020000, 20021000, 20022000, 20081000, 20087000, 20088000, 20089000, 20023000, 20024000, 20025000, 20026000, 20027000, 20028000, 20029000, 20030000, 20031000, 20032000, 20033000, 20034000, 20035000, 20036000, 20037000, 20119000, 20038000, 20039000, 20123000, 20128000, 20101000, 20127000, 20102000, 20103000, 20129000, 20104000, 20105000, 20130000, ]
    }, {
        name: IRlang.kovar,
        items: [20040000, 20041000, 20042000, 20082000, 20090000, 20091000, 20092000, 20043000, 20044000, 20045000, 20046000, 20047000, 20048000, 20049000, 20050000, 20051000, 20052000, 20053000, 20054000, 20055000, 20056000, 20057000, 20118000, 20058000, 20059000, 20122000, 20131000, 20111000, 20126000, 20112000, 20113000, 20132000, 20114000, 20115000, 20133000, ]
    }, {
        name: IRlang.sedlar,
        items: [20060000, 20061000, 20062000, 20080000, 20093000, 20094000, 20095000, 20063000, 20064000, 20065000, 20066000, 20067000, 20068000, 20069000, 20070000, 20071000, 20072000, 20073000, 20074000, 20075000, 20076000, 20077000, 20117000, 20078000, 20079000, 20121000, 20137000, 20106000, 20125000, 20107000, 20108000, 20138000, 20109000, 20110000, 20139000, ]
    }, {
        name: IRlang.craftitems,
        items: [1855000, 1856000, 1857000, 1858000, 1859000, 1860000, 1861000, 1862000, 1863000, 1864000, 1865000, 1866000, 1867000, 1868000, 1869000, 1870000, 1871000, 1872000, 1873000, 1874000, 1875000, 1876000, 1877000, 1878000, 1879000, 1880000, 1881000, 1882000, 1883000, 1884000, 1885000, 1886000, 1887000, 1888000, 1889000, 1890000, 1891000, 1892000, 1893000, 1894000, 1895000, 1896000, 1897000, 1898000, 1899000, 1900000, 1901000, 1902000, 1903000, 1904000, 1905000, 1906000, 1907000, 1908000, 1909000, 1910000, 1911000, 1912000, 1913000, 1914000, 1915000, 1916000, 1917000, 1918000, 1919000, 1920000, 1921000, 1922000, 1923000, 1924000, 1925000, 1926000, 1927000, 1928000, 1929000, 1930000, 1931000, 1932000, 1933000, 1934000, 1937000, 1938000, 1939000, 1940000, 1941000, 1942000, 1943000, 1944000, 1945000, 1946000, 1947000, 1948000, 1949000, 1950000, 1951000, 1952000, 1980000, 1981000, 1982000, 1983000, 1984000, 1985000, 1986000, 1987000, 1988000, 1989000, 1990000, 1991000, 1999000, 2000000, 2001000, 2002000, 2003000, 2004000, 2005000, 2006000, 2007000, 2008000, 2009000, 2010000, 2516000, 2517000, 2518000, 2519000, 2520000, 2521000, 2522000, 2523000, 2524000, 2525000, 2526000, 2527000, 2730000, 2731000, 2732000, 2733000, 2734000, 2735000, 2736000, 2737000, 2738000, 2739000, 2740000, 2741, ]
    }, ];
    TWIR.gui = {};
    var ICONE = {
        init: function() {
            try {
                EventHandler.signal("ICONE.init");
                var that = this;
                var timeout = 0;
                this.interval = setInterval(function() {
                    var loading = false;
                    if (isDefined(Character.playerId) && Character.playerId === 0) {
                        loading = false;
                    } else if (!isDefined(ItemManager)) {
                        loading = false;
                    } else if (isDefined(ItemManager.initialized) && !ItemManager.initialized) {
                        loading = false;
                    } else if (isDefined(window.TWDB)) {
                        if (!window.TWDB.ClothCalc.ready) {
                            loading = true;
                            timeout++;
                            if (timeout > 20) {
                                ErrorLog.log('Chyba, nelze načíst TWDB ?');
                                ICONE.isTWDBHere = true;
                                loading = true;
                            }
                        } else {
                            ICONE.isTWDBHere = true;
                            loading = true;
                        }
                    } else {
                        loading = true;
                    }
                    if (loading) {
                        clearInterval(that.interval);
                        if (ICONE.scriptStorage === null) {
                            ICONE.scriptStorage = new Storage("local", "Storage.");
                        }
                        ICONE.ready = true;
                        EventHandler.signal('ICONE.ready');
                        ICONE.Inventar.create();
                    }
                }, 500);
            } catch (e) {
                ErrorLog.log("Chyba inicializace ?", e);
                ErrorLog.showLog();
                ICONE.ready = false;
            }
        },
        Inventar: {
            create: function() {
                ICONE.Inventar.attach();
            },
            attach: function() {
                EventHandler.listen("inventory_ready", ICONE.Inventar.addCheckBoxBag, "duplbag");
            },
            detach: function() {
                EventHandler.unlisten("inventory_ready", ICONE.Inventar.addCheckBoxBag, "duplbag");
                $('#bagFilterIsCollect', Inventory.DOM).remove();
            },
            dupliVyhledavani: function(filtru) {
                var searchTxt = "";
                var searchVal = $('#inventory_search', Inventory.DOM).val();
                if (searchVal.lenght === 0 || Inventory.category != 'set') {
                    searchVal = ".*";
                } else {
                    searchTxt = (searchVal.lenght === 0) ? "" : " (" + searchVal + ")";
                }
                var res = Bag.search(searchVal);
                $('#inventory_search', Inventory.DOM).val("");
                var duplikaty = [];
                var sell = 0;
                $.each(res, function(ind1, item) {
					$('#sumsearch').remove();
                    if (item.obj.type != 'yield' && ($.inArray(item.getType(), Inventory.getCategoryTypes(Inventory.category)) > -1 || Inventory.category == 'set' || Inventory.category == 'new')) {
                        var count = item.getCount();
                        var weared = Wear.carries(item.obj.item_base_id);
                        if (weared) {
                            count += 1;
                        }
                        if (count > 1) {
                            switch (filtru) {
                                case 'upgradeable':
                                    if (count < 3 || !item.obj.upgradeable) {
                                        item = null;
                                    }
                                    break;
                                case 'nosets':
                                    if (item.obj.set !== null) {
                                        item = null;
                                    }
                                    break;
                                case 'sellable':
                                    if (!item.obj.sellable) {
                                        item = null;
                                    }
                                    break;
                                case 'auctionable':
                                    if (!item.obj.auctionable) {
                                        item = null;
                                    }
                                    break;
                                default:
                                    break;
                            }
                            if (isDefined(item)) {
                                duplikaty.push(item);
                                sell += (item.getSellPrice()) * (count - 1);
                            }
                        }
                    } else {}
                });
                var lastCat = Inventory.category;
                Inventory.showSearchResult(duplikaty || []);
                $('#sumsearch', Inventory.DOM).remove();
            },
            searchSpecialni: function(what) {
                $('#inventory_search', Inventory.DOM).val(what);
                var res = Bag.search(what);
                Inventory.showSearchResult(res || []);
                return res;
            },
            getDetSearchBox: function() {
                if (isDefined(west.storage.ItemSetManager)) {
                    var selSets = new west.gui.Selectbox();
                    selSets.setWidth(150);
                    $(selSets.elContent).css({
                        "max-height": "270px",
                        "width": "150px",
                        "overflow-y": 'auto'
                    });
                    ICONE.selAdded = [];
                    selSets.addItem('all', IRlang.Duplikaty.vsecko);
                    selSets.addItem('nosets', IRlang.Duplikaty.noset);
                    selSets.addItem('sellable', IRlang.Duplikaty.sellable);
                    selSets.addItem('auctionable', IRlang.Duplikaty.auctionable);
                    selSets.addItem('upgradeable', IRlang.Duplikaty.upgradeable);
                    selSets.addListener(function(e) {
                        switch (e) {
                            case 'all':
                                $('#inventory_search', Inventory.DOM).val("");
                                break;
                            default:
                                break;
                        }
                        ICONE.Inventar.dupliVyhledavani(e);
                        return true;
                    });
                    return selSets;
                }
                return selSets;
            },
            getSetNamesBox: function(setsCache) {
                if (isDefined(west.storage.ItemSetManager)) {
                    var selSets = new west.gui.Selectbox();
                    selSets.setWidth(200);
                    $(selSets.elContent).css({
                        "max-height": "304px",
                        "width": "250px",
                        "overflow-y": 'auto'
                    });
                    ICONE.selAdded = [];
                    selSets.addItem('setitems', IRlang.Duplikaty.vsecko);
                    $.each(setsCache, function(ind2, item) {
                        var itemsSet = west.storage.ItemSetManager.get(item.obj.set);
                        if (!isDefined(ICONE.selAdded[itemsSet.name])) {
                            ICONE.selAdded[itemsSet.name] = true;
                            selSets.addItem(itemsSet.name, itemsSet.name);
                        }
                    });
                    selSets.addListener(function(e) {
                        ICONE.Inventar.searchSpecialni(e);
                        return true;
                    });
                    return selSets;
                }
                return selSets;
            },
            addCheckBoxBag: function(div) {
                if ($('#bagFilterIsCollect', Inventory.DOM).length === 0) {
                    var setsCache = Bag.search('setitems');
                    setsCache.sort(function(a, b) {
                        var x = west.storage.ItemSetManager.get(a.obj.set).name;
                        var y = west.storage.ItemSetManager.get(b.obj.set).name;
                        if (typeof x === 'string' && typeof x === 'string') {
                            return x.localeCompare(y);
                        }
                        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
                    });
                    var selBox = ICONE.Inventar.getSetNamesBox(setsCache);
                    var spanD = $('<div id="bagFilterIsCollect"  ' + 'style="display: flex; position: inherit; float: right;"/>');
                    var duplicat = $("<span title='" + IRlang.Duplikaty.tip + "' id='inventory_doublons'" + '" class="filter_inventory filter_dopp hasMousePopup"' + '" style="cursor: pointer; position: relative; background: url(https://jamzask.github.io/TWInventoryReloaded/small.png) no-repeat; background-position: -2px 0;" />' + "</span>");
                    duplicat.click(function(e) {
                        $('#sumsearch').remove();
                        ICONE.Inventar.getDetSearchBox().show(e);
                    });
                    spanD.append(duplicat);
                    var pouzitelne = $('<span title="' + IRlang.Duplikaty.tipuse + '" id="inventory_useables"' + '" class="filter_inventory filter_utiliz hasMousePopup"' + '" style="cursor: pointer; position: relative; background: url(https://jamzask.github.io/TWInventoryReloaded/small.png) no-repeat; background-position: -45px 0;">' + "</span>");
                    pouzitelne.click(function(e) {
                        $('#sumsearch').remove();
                        if (!TWIR_QuickSearch.gui.popupMenu) {
                            if (isDefined(west.storage.ItemSetManager)) {
                                TWIR_QuickSearch.gui.popupMenu = new west.gui.Selectbox().setWidth(150);
                                TWIR_QuickSearch.gui.popupMenu.addListener(TWIR_QuickSearch.findSet);
                                for (var i = 0; i < TW_Sets.length; i++)
                                    TWIR_QuickSearch.gui.popupMenu.addItem(i, TW_Sets[i].name);
                            }
                        }
                        TWIR_QuickSearch.gui.popupMenu.show(e);
                    });
                    spanD.append(pouzitelne);
                    var receptare = $('<span title="' +
                        IRlang.Duplikaty.tiprecipe + '" id="inventory_recipe"' + '" class="filter_inventory filter_ricet hasMousePopup"' + '" style="position: relative; background: url(https://jamzask.github.io/TWInventoryReloaded/small.png) no-repeat; cursor: pointer; background-position: -88px 0;" >' + '</span>');
                    receptare.click(function(e) {
                        $('#sumsearch').remove();
                        if (!TWIR_RecipesSearch.gui.popupMenu) {
                            if (isDefined(west.storage.ItemSetManager)) {
                                TWIR_RecipesSearch.gui.popupMenu = new west.gui.Selectbox().setWidth(150);
                                TWIR_RecipesSearch.gui.popupMenu.addListener(TWIR_RecipesSearch.findSet);
                                for (var i = 0; i < TW_Recepts.length; i++)
                                    TWIR_RecipesSearch.gui.popupMenu.addItem(i, TW_Recepts[i].name);
                            }
                        }
                        TWIR_RecipesSearch.gui.popupMenu.show(e);
                    });
                    spanD.append(receptare);
                    var naboru = $('<span title="' +
                        IRlang.Duplikaty.tipsets + '" id="inventory_sets"' + '" class="filter_inventory filter_nabor hasMousePopup"' + '" style="cursor: pointer; position: relative; background: url(https://jamzask.github.io/TWInventoryReloaded/small.png) no-repeat; background-position: -131px 0;" >' + "</span>");
                    naboru.click(function(e) {
                        $('#sumsearch').remove();
                        selBox.show(e);
                    });
                    spanD.append(naboru);
                    $('.search_container').css('left', '35%').css('bottom', '10px');
                    $('.filters', Inventory.DOM).append(spanD);
                }
            }
        }
    };
    TWIR.gui.init = function() {
        TWIR.gui.makeButton = function(caption, callback) {
            return new west.gui.Button(caption, callback);
        };
    };

    function Storage(type, namespace) {
        var object = this;
        if (typeof(type) != "string")
            type = "session";
        switch (type) {
            case "local":
                {
                    object.storage = localStorage;
                }
                break;
            case "session":
                {
                    object.storage = sessionStorage;
                }
                break;
            default:
                {
                    object.storage = sessionStorage;
                }
                break;
        }
        if (!namespace || (typeof(namespace) != "string" && typeof(namespace) != "number"))
            namespace = "ScriptStorage";
        object.namespace = [namespace, "."].join("");
        object.setItem = function(key, value) {
            try {
                object.storage.setItem(escape([object.namespace, key].join("")), JSON.stringify(value));
            } catch (e) {}
        };
        object.getItem = function(key, defaultValue) {
            try {
                var value = object.storage.getItem(escape([object.namespace, key].join("")));
                if (value)
                    return eval(value);
                else
                    return defaultValue;
            } catch (e) {
                return defaultValue;
            }
        };
        object.removeItem = function(key) {
            try {
                object.storage.removeItem(escape(collection.craftfilterMarket(object.namespace, key).join("")));
            } catch (e) {}
        };
        object.keys = function() {
            var array = [];
            var indJack = 0;
            do {
                try {
                    var key = unescape(object.storage.key(indJack++));
                    if (key.indexOf(object.namespace) === 0 && object.storage.getItem(key))
                        array.push(key.slice(object.namespace.length));
                } catch (e) {
                    break;
                }
            } while (true);
            return array;
        };
    }
    $(document).ready(function() {
        try {
            TWIR.gui.init();
            ICONE.init();
            setTimeout(TWIR.Updater, 5000);
        } catch (e) {
            console.log(e.stack);
        }
    });
    var TWIR_QuickSearch = new Object();
    TWIR_QuickSearch.gui = {};
    TWIR_QuickSearch.gui.popupMenu = null;
    TWIR_QuickSearch.popup = function(button, e) {
        if (!TWIR_QuickSearch.gui.popupMenu) {
            TWIR_QuickSearch.gui.popupMenu = new west.gui.Selectbox().setWidth(200);
            TWIR_QuickSearch.gui.popupMenu.addListener(TWIR_QuickSearch.findSet);
            for (var i = 0; i < TW_Sets.length; i++)
                TWIR_QuickSearch.gui.popupMenu.addItem(i, TW_Sets[i].name);
        }
        TWIR_QuickSearch.gui.popupMenu.show(e);
    };
    TWIR_QuickSearch.findSet = function(id) {
        var items, base = TW_Sets[id].items,
            upgrade = TW_Sets[id].itemsk,
            invItems = [];
        if (base) {
            items = base;
        } else {
            items = [];
            for (var g = 0; g < upgrade.length; g++) {
                for (var h = 0; h <= 5; h++) {
                    items.push(upgrade[g] + h);
                }
            }
        }
        for (var i = 0; i < items.length; i++) {
            var invItem = Bag.getItemByItemId(items[i]);
            if (invItem)
                invItems.push(invItem);
        }
        if (invItems.length > 0) {
            if (!Bag.loaded) {
                var f = function(res) {
                    EventHandler.listen('inventory_loaded', function() {
                        Wear.open();
                        Inventory.showSearchResult(res);
                        return EventHandler.ONE_TIME_EVENT;
                    });
                    return Bag.loadItems();
                }(invItems);
            } else {
                Wear.open();
                Inventory.showSearchResult(invItems);
            }
        } else {
            new UserMessage(IRlang.nothingFound, UserMessage.TYPE_HINT).show();
        }
    };
    var TWIR_RecipesSearch = new Object();
    TWIR_RecipesSearch.gui = {};
    TWIR_RecipesSearch.gui.rpopupMenu = null;
    TWIR_RecipesSearch.popup = function(button, e) {
        if (!TWIR_RecipesSearch.gui.rpopupMenu) {
            TWIR_RecipesSearch.gui.rpopupMenu = new west.gui.Selectbox().setWidth(200);
            TWIR_RecipesSearch.gui.rpopupMenu.addListener(TWIR_RecipesSearch.findSet);
            for (var i = 0; i < TW_Recepts.length; i++)
                TWIR_RecipesSearch.gui.rpopupMenu.addItem(i, TW_Recepts[i].name);
        }
        TWIR_RecipesSearch.gui.rpopupMenu.show(e);
    };
    TWIR_RecipesSearch.findSet = function(id) {
        var items, base = TW_Recepts[id].items,
            upgrade = TW_Recepts[id].itemsk,
            invItems = [];
        if (base) {
            items = base;
        } else {
            items = [];
            for (var g = 0; g < upgrade.length; g++) {
                for (var h = 0; h <= 5; h++) {
                    items.push(upgrade[g] + h);
                }
            }
        }
        for (var i = 0; i < items.length; i++) {
            var invItem = Bag.getItemByItemId(items[i]);
            if (invItem)
                invItems.push(invItem);
        }
        if (invItems.length > 0) {
            if (!Bag.loaded) {
                var f = function(res) {
                    EventHandler.listen('inventory_loaded', function() {
                        Wear.open();
                        Inventory.showSearchResult(res);
                        return EventHandler.ONE_TIME_EVENT;
                    });
                    return Bag.loadItems();
                }(invItems);
            } else {
                Wear.open();
                Inventory.showSearchResult(invItems);
            }
        } else {
            new UserMessage(IRlang.nothingFound, UserMessage.TYPE_HINT).show();
        }
    };
	
	//davcove otvaranie bagov, test

           TWIR.ItemUse = {};

            TWIR.ItemUse.maxOpenCount = function(item) {
                $('#open_popup_input').val(item.count);
            };
            TWIR.ItemUse.riseOpenCount = function(item) {
                var count = parseInt($('#open_popup_input').val());
                if (!isNaN(count) && count < item.count) {
                    count = count + 1;
                    $('#open_popup_input').val(count);
                }
            };
            TWIR.ItemUse.lowerOpenCount = function(item) {
                var count = parseInt($('#open_popup_input').val());
                if (!isNaN(count) && count > 1) {
                    count = count - 1;
                    $('#open_popup_input').val(count);
                }
            };
            TWIR.ItemUse.checkOpenCount = function(item) {
                var count = parseInt($('#open_popup_input').val());
                if (isNaN(count) || count <= 0) {
                    count = 1;
                } else if (count > item.count) {
                    count = item.count;
                }
                $('#open_popup_input').val(count);
            };
            TWIR.ItemUse.open = function(itemId, number) {

                var pgbar = new west.gui.Progressbar(0, number);
                var info = $('<div id="progress_open_items" style="font-size:15pt;text-align:center;"></div>').append(pgbar.getMainDiv()).append(new tw2widget.InventoryItem(ItemManager.get(itemId), 'item_popup_item').getMainDiv().css('margin-left', '80px').css('margin-top', '10px'));
                wman.open('progress_open', IRlang.open_info).setMiniTitle('TW IR').addClass('nocloseall').addClass('noclose').addClass('noreload').appendToContentPane(info).setSize(270, 180).setModal(true, false, {
                    bg: "https://westzz.innogamescdn.com/images/curtain_bg.png",
                    opacity: 0.7
                });

                if (number < 29) {
                    TWIR.ItemUse.ajax_useitem(itemId, 0, number, pgbar);
                } else {
                    var cnt = 0;
                    time = setInterval(function() {
                        Ajax.remoteCall("itemuse", "use_item", {
                            item_id: itemId,
                            lastInvId: Bag.getLastInvId()
                        }, function(res) {
                            cnt++;
                            pgbar.increase(1);
                            if (cnt == number) {
                                wman.close('progress_open');
                                TWIR.ItemUse.showresult(itemId, res, number);
                                clearInterval(time);
                            }
                        });
                    }, 1100);
                }
            };
            TWIR.ItemUse.showresult = function(itemId, result, number) {
                switch (itemId) {
                    case 1975000:
                    case 1976000:
                        var Div = $('<div></div>');
                        for (x = 0; x < result.msg.changes.length; x++) {
                            var count;
                            if (Bag.getItemByItemId(result.msg.changes[x].item_id)) {
                                count = result.msg.changes[x].count - Bag.getItemByItemId(result.msg.changes[x].item_id).count;
                            } else {
                                count = result.msg.changes[x].count;
                            }
                            if (count > 0) {
                                Div.append(new tw2widget.InventoryItem(ItemManager.get(result.msg.changes[x].item_id), 'item_popup_item').setCount(count).getMainDiv());
                            }
                        }
                        break;
                    case 2561000:
                        var Div_a = $('<div><img src="/images/icons/Hearts.png" class="hasMousePopup"> ' + 100 * number + '</div>');
                        break;
                    case 2562000:
                        var Div_b = $('<div><img src="/images/icons/Hearts.png" class="hasMousePopup"> ' + 500 * number + '</div>');
                        break;
                }
                EventHandler.signal('inventory_changed');
                new west.gui.Dialog(IRlang.open_result, Div).setIcon(west.gui.Dialog.SYS_OK).addButton('ok').show();
            };
            TWIR.ItemUse.ajax_useitem = function(itemId, cnt, number, progressbar) {
                Ajax.remoteCall("itemuse", "use_item", {
                    item_id: itemId,
                    lastInvId: Bag.getLastInvId()
                }, function(res) {
                    cnt++;
                    progressbar.increase(1);
                    if (cnt == number) {
                        wman.close('progress_open');
                        TWIR.ItemUse.showresult(itemId, res, number);
                    } else {
                        TWIR.ItemUse.ajax_useitem(itemId, cnt, number, progressbar);
                    }
                });
            };

            ItemUse.useOrigin = ItemUse.use;
            ItemUse.doItOrigin = ItemUse.doIt;
            ItemUse.use = function(itemId, bonuses, type) {
                if ((itemId == 1975000) || (itemId == 1976000) || (itemId == 2561000) || (itemId == 2562000)) {
                    var item = Bag.getItemByItemId(itemId);
                    ItemUse.useOrigin(itemId, bonuses, type);
                    $('.tw2gui_dialog_text div', '.tw2gui_dialog').html($('.tw2gui_dialog_text div', '.tw2gui_dialog').html() + IRlang.open_number + '<p><input class="open_popup_input" type="text" id="open_popup_input" value="1" style="width:50px;" />' + '<span class="open_count_scrolls"><img src="https://westzz.innogamescdn.com/images/scrollbar/scroll_up.png" id="open_rise_count" alt="' + 'en haut' + '"><img src="https://westzz.innogamescdn.com/images/scrollbar/scroll_down.png" id="open_lower_count" alt="' + 'en bas' + '"></span><span class="item_popup_max_count" id="open_max_item">(' + item.count + ') </span>');
                    $('#open_rise_count').on('click', function() {
                        TWIR.ItemUse.riseOpenCount(item);
                    });
                    $('#open_lower_count').on('click', function() {
                        TWIR.ItemUse.lowerOpenCount(item);
                    });
                    $('#open_max_item').on('click', function() {
                        TWIR.ItemUse.maxOpenCount(item);
                    });
                    $('#open_popup_input').change(function() {
                        TWIR.ItemUse.checkOpenCount(item);
                    });
                } else {
                    ItemUse.useOrigin(itemId, bonuses, type);
                }
            };
            ItemUse.doIt = function(itemId, callback) {
                if ((itemId == 1975000) || (itemId == 1976000) || (itemId == 2561000) || (itemId == 2562000)) {
                    if (parseInt($('#open_popup_input').val()) == 1) {
                        ItemUse.doItOrigin(itemId, callback);
                    } else {
                        TWIR.ItemUse.open(itemId, parseInt($('#open_popup_input').val()));
                    }
                } else {
                    ItemUse.doItOrigin(itemId, callback);
                }
            };
	//otvaranie bagov konec
	
	
	
	

    TWIR.Updater = function() {
        $.getScript(TWIR.updateUrl, function() {
            if (scriptUpdate.TWIR > TWIR.version) {
                var updateMessage = new west.gui.Dialog('Nová verze', '<span>Nová verze ' + TWIR.name + ', script napsán hráčem' + '<a style="margin-left:15px;"href="javascript:void(PlayerProfileWindow.open(746376));">Jamza (CZ14)</a>' + ', je dostupná<br><br><b>Verze: ' + scriptUpdate.TWIR + '</b><br>' + scriptUpdate.TWIRNew + '</span>', west.gui.Dialog.SYS_WARNING).addButton('Update', function() {
                    updateMessage.hide();
                    location.href = TWIR.website + '/code.user.js';
                }).addButton('cancel').show();
            }
        });
    };
    setTimeout(TWIR.Updater, 4000);
    TWIR_QuickSearch.init();
    TWIR_RecipesSearch.init();
});