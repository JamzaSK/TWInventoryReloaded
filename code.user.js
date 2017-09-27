// ==UserScript==
// @name TW-Inventory Reloaded
// @namespace WINGS
// @authoraAPI Jackson
// @author Jamza
// @description Tento script zvětšuje inventář a zjednodušuje jeho třídění. Pracuji na dalších funkcích. Pokud máš nápady na vylepšení, kontaktuj mě :)
// @include https://*.the-west.*/game.php*
// @version 1.4
// @icon https://jamzask.github.io/TWInventoryReloaded/TWinventoryreloaded.ico
// @downloadURL  https://jamzask.github.io/TWInventoryReloaded/code.user.js
// @updateURL    https://jamzask.github.io/TWInventoryReloaded/code.user.js
// @grant none
// ==/UserScript==
(function(fn) {
    var script = document.createElement('script');
    script.setAttribute('type', 'application/javascript');
    script.textContent = '(' + fn + ')();';
    document.body.appendChild(script);
    document.body.removeChild(script);
})(function() {
    var bigInventor= {
        name: 'TW-InventoryReloaded',
        version: '1.4',
        author: 'Jamza',
        minGame: '2.63',
        maxGame: Game.version.toString(),
        website: 'https://jamzask.github.io/TWInventoryReloaded',
        updateURL: 'https://jamzask.github.io/TWInventoryReloaded/update.js',
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
            ApiGui: 'Tenhle script vylepšuje inventář.',
            contact: 'Kontakt',
            title: 'TW Inventory Reloaded',
            update: 'Update',
            updateAvailable: 'Nová verze skriptu je dostupní.',
            name: 'TW Inventory Reloaded',
            msgme: 'Napiš mi ve hře',
            mailme: 'Pošli mi email',
            adventure: 'Dobrodružství',
            work: 'Práce',
            duel: 'Duely',
            energy: 'Energie',
            skill: 'Schopnosti',
            fk: 'Bitvy',
            speed: 'Cestování',
            lp: 'Zdraví',
            special: 'Prémium/špeciální',
            events: 'Eventy',
            chests: 'Tašky a truhly',
            questitems: 'Úkolové předměty',
            craftitems: 'Produky z remesel',
            menu: '[BETA]Externí výběr posílení (pracuji na interním)',
            nothingFound: 'Nemáte tenhle typ posílení!',
            Doppioni: {
                tip: 'Zobrazit pouze: Duplikáty',
                upgradeable: 'Vylepšitelné',
                noset: 'Všechno kromě setů',
                sellable: 'Prodejní',
                auctionable: 'Dražitelné',
                tipuse: 'Zobrazit pouze: Použitelné',
                tiprecipe: 'Zobrazit pouze: Recepty',
                tipsets: 'Zobrazit pouze: Sety',
                tutteOpz: 'Všechno',
            }
        },
        sk_SK: {
            lang_select: 'Aktuální jazyk',
            language: 'Čeština',
            ApiGui: 'Tenhle script vylepšuje inventář.',
            contact: 'Kontakt',
            title: 'TW Inventory Reloaded',
            update: 'Update',
            updateAvailable: 'Nová verze skriptu je dostupní.',
            name: 'TW Inventory Reloaded',
            msgme: 'Napiš mi ve hře',
            mailme: 'Pošli mi email',
            adventure: 'Dobrodružství',
            work: 'Práce',
            duel: 'Duely',
            energy: 'Energie',
            skill: 'Schopnosti',
            fk: 'Bitvy',
            speed: 'Cestování',
            lp: 'Zdraví',
            special: 'Prémium/špeciální',
            events: 'Eventy',
            chests: 'Tašky a truhly',
            questitems: 'Úkolové předměty',
            craftitems: 'Produky z remesel',
            menu: '[BETA]Externí výběr posílení (pracuji na interním)',
            nothingFound: 'Nemáte tenhle typ posílení!',
            Doppioni: {
                tip: 'Jenom duplikáty',
                upgradeable: 'Vylepšitelné',
                noset: 'Bez setů',
                sellable: 'Prodejní',
                auctionable: 'Dražitelné',
                tipuse: 'Použitelné',
                tiprecipe: 'Recepty',
                tipsets: 'Jenom sety',
                tutteOpz: 'Všechno',
            }
        },
    };
    var MPlang = langs.hasOwnProperty(Game.locale) ? langs[Game.locale] : langs.cs_CZ;
    var bigInventorApi = TheWestApi.register('bigInventor', MPlang.title, bigInventor.minGame, bigInventor.maxGame, bigInventor.author, bigInventor.website);
    bigInventorApi.setGui('<br><i>' + MPlang.lang_select + ': </i>' + MPlang.language + '<br><br>' + MPlang.ApiGui + '<br><br><i>' + MPlang.name + ' v' + bigInventor.version +
        '</i><br><br>' + MPlang.contact + ':</b><ul style="margin-left:15px;"><li>' + MPlang.msgme + '<a  style="margin-left:15px;" href="javascript:void(PlayerProfileWindow.open(746376));">Jamza (CZ14)</a>' + '</li><li>' + MPlang.mailme + '<a  style="margin-left:15px;" href="mailto:97jamza@gmail.com">97jamza@gmail.com</a>' + '</li></ul>');
    var TW_Widgets = new Object();
  TW_Widgets.MenuButton = function (image, title, onclick) {
    var self = this;
    this.isHovered = false;
    this.onClick = onclick;
    var clicked = function (e) {
      if (self.onClick)
      self.onClick(self, e);
    };
    var repaint = function () {
      var x = !self.isHovered ? 0 : - 25;
      self.obj.css('background-position', x + 'px 0px');
    };
    var mouseIn = function () {
      self.isHovered = true;
      repaint();
    };
    var mouseOut = function () {
      self.isHovered = false;
      repaint();
    };
    this.obj = $('<div class=\'menulink\' title=\'' + title + '\' />').css('background-image', 'url(' + image + ')');
    this.obj.hover(mouseIn, mouseOut);
    this.obj.click(clicked);
    $('div#ui_menubar').append($('<div class=\'ui_menucontainer\' />').append(this.obj).append('<div class=\'menucontainer_bottom\' />'));
  };
var TW_Sets = [
    {
      name: MPlang.adventure,
      items: [
        1909000, 1910000, 1991000, 2110000, 2111000, 2112000, 2113000, 2114000, 2115000, 2121000, 2122000, 2741000, 50480000, 50481000,
      ]
    },
    {
      name: MPlang.work,
      items: [
        1879000, 1940000, 1982000, 1988000, 1998000, 2100000, 2101000, 2102000, 2103000, 2104000, 2105000, 2118000, 2126000, 2164000, 2206000, 2207000, 2208000, 2209000, 2210000, 2211000, 2212000, 2213000, 2214000, 2215000, 2216000, 2217000, 2218000, 2219000, 2220000, 2221000, 2222000, 2225000, 2285000, 2286000, 2287000, 2288000, 2289000, 2290000, 2313000, 2317000, 2321000, 2325000, 2466000, 2491000, 2493000, 2495000, 2497000, 2516000, 2525000, 2528000, 2531000, 2732000, 2738000, 21342000, 50205000, 50303000, 253800000,
      ]
    },
    {
      name: MPlang.duel,
      items: [
        1863000, 1864000, 1871000, 1872000, 1901000, 1908000, 1916000, 1938000, 1946000, 1981000, 1984000, 2285000, 2286000, 2287000, 2288000, 2289000, 2529000, 2695000, 50135000, 50136000,
      ]
    },
    {
      name: MPlang.energy,
      items: [
        255000, 1890000, 1892000, 1898000, 1928000, 1937000, 1943000, 1969000, 1970000, 1971000, 1985000, 1997000, 2128000, 2129000, 2130000, 2235000, 2294000, 2296000, 2312000, 2316000, 2320000, 2324000, 2356000, 2358000, 2485000, 2486000, 2491000, 2493000, 2495000, 2497000, 2525000, 2670000, 2672000, 12704000, 12706000, 13704000, 13706000, 16100000, 17028000, 21341000, 21345000, 50113000, 50390000, 50627000, 185203000, 185205000,
      ]
    },
    {
      name: MPlang.skill,
      items: [
        1863000, 1864000, 1871000, 1872000, 1873000, 1879000, 1946000, 1977000, 1978000, 1979000, 1981000, 1982000, 1984000, 1988000, 2285000, 2286000, 2287000, 2288000, 2289000, 2516000, 2525000, 2528000, 2529000, 2530000, 2531000, 2738000, 50482000, 50483000, 50484000, 50485000, 50486000, 50487000, 253800000,
      ]
    },
    {
      name: MPlang.fk,
      items: [
        1872000, 1873000, 1900000, 1909000, 1910000, 1946000, 1949000, 1990000, 1991000, 2106000, 2107000, 2108000, 2109000, 2110000, 2111000, 2112000, 2113000, 2114000, 2115000, 2119000, 2120000, 2121000, 2122000, 2123000, 2124000, 2125000, 2127000, 2258000, 2259000, 2260000, 2261000, 2269000, 2285000, 2286000, 2287000, 2288000, 2289000, 2516000, 2522000, 2525000, 2529000, 2530000, 2741000, 50480000, 50481000, 50482000, 50483000, 50484000, 50485000, 50486000, 50487000,
      ]
    },
    {
      name: MPlang.speed,
      items: [
        1918000, 1919000, 1926000, 1927000, 1934000, 1937000, 1952000, 1968000, 1987000, 2135000, 2229000, 2262000, 2263000, 2264000, 2284000, 2292000, 2354000, 2470000, 2473000, 2476000, 2479000, 2491000, 2493000, 2495000, 2497000, 2519000, 2668000, 2734000, 12702000, 13702000, 50304000, 185201000,
      ]
    },
    {
      name: MPlang.lp,
      items: [
        1883000, 1892000, 1898000, 1946000, 1974000, 1991000, 2116000, 2117000, 2235000, 2253000, 2254000, 2255000, 2256000, 2257000, 2295000, 2296000, 2357000, 2358000, 2486000, 2525000, 2671000, 2672000, 2734000, 12705000, 12706000, 13705000, 13706000, 16100000, 17028000, 50113000, 185204000, 185205000,
      ]
    },
    {
      name: MPlang.special,
      items: [
        1977000, 1978000, 1979000, 2311000, 2312000, 2313000, 2314000, 2315000, 2316000, 2317000, 2318000, 2319000, 2320000, 2321000, 2322000, 2323000, 2324000, 2325000, 2326000, 2470000, 2472000, 2473000, 2475000, 2476000, 2478000, 2479000, 2481000, 2482000, 2484000, 2485000, 2486000, 2491000, 2493000, 2495000, 2497000, 2695000, 21340000, 21341000, 21342000, 21343000,
      ]
    },
    {
      name: MPlang.events,
      items: [
	    55000, 371000, 973000, 974000, 975000, 976000, 2557000, 2558000, 2561000, 2562000, 2563000, 2564000, 2565000, 2566000, 2567000, 2590000, 2591000, 2592000, 2593000, 2594000, 2619000, 2620000, 2621000, 2622000, 2623000, 2665000, 2666000, 2675000, 2676000, 2677000, 2678000, 2679000, 2680000, 2692000, 2693000, 2698000, 12700000, 50691000,
    ]
      },
    {
      name: MPlang.chests,
      items: [
	    371000, 374000, 376000, 377000, 378000, 379000, 852000, 853000, 926000, 927000, 928000, 973000, 974000, 975000, 976000, 1003000, 1838000, 1868000, 1869000, 1878000, 1887000, 1888000, 1897000, 1905000, 1906000, 1915000, 1923000, 1924000, 1933000, 1960000, 1961000, 1964000, 1967000, 1975000, 1976000, 2131000, 2132000, 2133000, 2134000, 2136000, 2137000, 2138000, 2139000, 2144000, 2152000, 2172000, 2173000, 2174000, 2175000, 2176000, 2187000, 2192000, 2193000, 2194000, 2195000, 2196000, 2197000, 2198000, 2199000, 2200000, 2201000, 2202000, 2203000, 2204000, 2205000, 2226000, 2227000, 2297000, 2298000, 2299000, 2300000, 2305000, 2329000, 2330000, 2331000, 2332000, 2333000, 2334000, 2335000, 2336000, 2337000, 2338000, 2345000, 2359000, 2360000, 2361000, 2362000, 2379000, 2380000, 2381000, 2382000, 2383000, 2384000, 2385000, 2393000, 2394000, 2395000, 2396000, 2397000, 2421000, 2460000, 2461000, 2462000, 2482000, 2487000, 2488000, 2489000, 2490000, 2499000, 2507000, 2518000, 2521000, 2524000, 2527000, 2533000, 2534000, 2535000, 2536000, 2537000, 2538000, 2540000, 2542000, 2556000, 2557000, 2558000, 2559000, 2560000, 2561000, 2562000, 2563000, 2564000, 2565000, 2566000, 2567000, 2579000, 2580000, 2581000, 2585000, 2586000, 2587000, 2588000, 2589000, 2590000, 2591000, 2592000, 2593000, 2594000, 2602000, 2603000, 2604000, 2605000, 2606000, 2614000, 2615000, 2616000, 2617000, 2618000, 2619000, 2620000, 2621000, 2622000, 2623000, 2624000, 2626000, 2627000, 2628000, 2629000, 2630000, 2645000, 2646000, 2647000, 2648000, 2650000, 2665000, 2666000, 2673000, 2674000, 2675000, 2676000, 2677000, 2678000, 2679000, 2680000, 2685000, 2687000, 2688000, 2689000, 2690000, 2692000, 2693000, 2694000, 2698000, 2699000, 2700000, 2701000, 2702000, 2703000, 2704000, 2705000, 2714000, 2715000, 2721000, 2722000, 2723000, 2728000, 2755000, 12700000, 12709000, 12710000, 12711000, 13711000, 17000000, 17001000, 17002000, 17003000, 17004000, 17005000, 17006000, 17007000, 17008000, 50001000, 50002000, 50003000, 50009000, 50023000, 50025000, 50080000, 50081000, 50082000, 50086000, 50087000, 50088000, 50093000, 50105000, 50128000, 50130000, 50131000, 50132000, 50133000, 50134000, 50168000, 50169000, 50170000, 50171000, 50177000, 50195000, 50251000, 50252000, 50253000, 50254000, 50255000, 50256000, 50257000, 50258000, 50259000, 50295000, 50296000, 50297000, 50298000, 50299000, 50300000, 50301000, 50302000, 50305000, 50346000, 50347000, 50348000, 50368000, 50381000, 50382000, 50383000, 50384000, 50385000, 50386000, 50387000, 50388000, 50391000, 50409000, 50423000, 50424000, 50425000, 50426000, 50427000, 50428000, 50442000, 50446000, 50456000, 50477000, 50478000, 50479000, 50488000, 50501000, 50509000, 50540000, 50545000, 50547000, 50556000, 50557000, 50558000, 50559000, 50560000, 50570000, 50579000, 50588000, 50603000, 50604000, 50605000, 50606000, 50607000, 50608000, 50622000, 50623000, 50624000, 50625000, 50675000, 50676000, 50677000, 50678000, 50679000, 50680000, 50681000, 50682000, 50683000, 50684000, 50685000, 50686000, 50687000, 50688000, 50689000, 50690000, 50691000, 50696000, 50697000, 50698000, 50699000, 50700000,
      ]
    },
    {
      name: MPlang.questitems,
      items: [
        251000, 770000, 772000, 773000, 774000, 775000, 776000, 796000, 799000, 995000, 996000, 1016000, 1019000, 1700000, 1701000, 1702000, 1703000, 1704000, 1706000, 1707000, 1709000, 1710000, 1711000, 1712000, 1750000, 1751000, 1752000, 1753000, 1754000, 1757000, 1758000, 1760000, 1761000, 1763000, 1764000, 1765000, 1766000, 1767000, 1768000, 1769000, 1770000, 1771000, 1773000, 1774000, 1775000, 1776000, 1777000, 1778000, 1779000, 1780000, 1781000, 1782000, 1783000, 1784000, 1785000, 1786000, 1789000, 1790000, 1792000, 1793000, 1794000, 1795000, 1796000, 1797000, 1798000, 1799000, 1800000, 1801000, 1802000, 1803000, 1804000, 1805000, 1806000, 1838000, 1839000, 1840000, 1841000, 1842000, 1843000, 1844000, 1845000, 1846000, 1847000, 1848000, 1849000, 1850000, 1851000, 1852000, 1853000, 1854000, 1935000, 1936000, 1953000, 1954000, 1956000, 1957000, 1958000, 1959000, 1962000, 1963000, 1964000, 1965000, 1966000, 1973000, 1992000, 1993000, 1994000, 1995000, 1996000, 2001000, 2004000, 2007000, 2010000, 2145000, 2146000, 2147000, 2148000, 2153000, 2224000, 2245000, 2265000, 2266000, 2267000, 2306000, 2307000, 2308000, 2309000, 2328000, 2340000, 2346000, 2347000, 2348000, 2349000, 2350000, 2351000, 2364000, 2365000, 2366000, 2367000, 2368000, 2369000, 2370000, 2371000, 2372000, 2373000, 2374000, 2375000, 2376000, 2377000, 2378000, 2386000, 2387000, 2388000, 2389000, 2390000, 2392000, 2398000, 2399000, 2400000, 2401000, 2402000, 2403000, 2404000, 2405000, 2406000, 2407000, 2408000, 2410000, 2411000, 2412000, 2413000, 2414000, 2415000, 2416000, 2417000, 2418000, 2419000, 2420000, 2421000, 2422000, 2424000, 2425000, 2426000, 2427000, 2428000, 2429000, 2500000, 2501000, 2502000, 2503000, 2504000, 2505000, 2506000, 2508000, 2509000, 2510000, 2511000, 2512000, 2513000, 2514000, 2515000, 2532000, 2552000, 2553000, 2554000, 2568000, 2569000, 2570000, 2571000, 2572000, 2573000, 2574000, 2575000, 2681000, 2682000, 2683000, 2702000, 2703000, 2704000, 2705000, 2708000, 2709000, 2710000, 2711000, 2712000, 2713000, 2729000, 12707000, 12708000, 17020000, 17021000, 17022000, 17023000, 17024000, 17025000, 17026000, 17027000, 50091000, 50094000, 50172000, 50173000, 50174000, 50175000, 50176000, 50178000, 50179000, 50180000, 50181000, 50182000, 50183000, 50184000, 50185000, 50186000, 50196000, 50197000, 50198000, 50199000, 50200000, 50201000, 50202000, 50203000, 50204000, 50207000, 50208000, 50209000, 50271000, 50272000, 50273000, 50274000, 50275000, 50276000, 50277000, 50278000, 50317000, 50318000, 50319000, 50320000, 50321000, 50322000, 50349000, 50350000, 50351000, 50352000, 50369000, 50389000, 50429000, 50430000, 50431000, 50489000, 50490000, 50491000, 50492000, 50493000, 50494000, 50495000, 50496000, 50497000, 50498000, 50499000, 50500000, 50546000, 50548000, 50566000, 50609000, 50610000, 50611000, 50612000, 50613000,
      ]
    },
    {
      name: MPlang.craftitems,
      items: [
        1855000, 1856000, 1857000, 1858000, 1859000, 1860000, 1861000, 1862000, 1863000, 1864000, 1865000, 1866000, 1867000, 1868000, 1869000, 1870000, 1871000, 1872000, 1873000, 1874000, 1875000, 1876000, 1877000, 1878000, 1879000, 1880000, 1881000, 1882000, 1883000, 1884000, 1885000, 1886000, 1887000, 1888000, 1889000, 1890000, 1891000, 1892000, 1893000, 1894000, 1895000, 1896000, 1897000, 1898000, 1899000, 1900000, 1901000, 1902000, 1903000, 1904000, 1905000, 1906000, 1907000, 1908000, 1909000, 1910000, 1911000, 1912000, 1913000, 1914000, 1915000, 1916000, 1917000, 1918000, 1919000, 1920000, 1921000, 1922000, 1923000, 1924000, 1925000, 1926000, 1927000, 1928000, 1929000, 1930000, 1931000, 1932000, 1933000, 1934000, 1937000, 1938000, 1939000, 1940000, 1941000, 1942000, 1943000, 1944000, 1945000, 1946000, 1947000, 1948000, 1949000, 1950000, 1951000, 1952000, 1980000, 1981000, 1982000, 1983000, 1984000, 1985000, 1986000, 1987000, 1988000, 1989000, 1990000, 1991000, 1999000, 2000000, 2001000, 2002000, 2003000, 2004000, 2005000, 2006000, 2007000, 2008000, 2009000, 2010000, 2516000, 2517000, 2518000, 2519000, 2520000, 2521000, 2522000, 2523000, 2524000, 2525000, 2526000, 2527000, 2730000, 2731000, 2732000, 2733000, 2734000, 2735000, 2736000, 2737000, 2738000, 2739000, 2740000, 2741,
      ]
    },

  ];
    bigInventor.gui = {};
    var ICONE = {
        init: function() {
            try {
                EventHandler.signal("ICONE.init");
                var that = this;
                var timeout = 0;
                this.interval = setInterval(
                    function() {
                        var loading = false;
                        if (isDefined(Character.playerId) &&
                            Character.playerId === 0) {
                            loading = false;
                        } else if (!isDefined(ItemManager)) {
                            loading = false;
                        } else if (isDefined(ItemManager.initialized) &&
                            !ItemManager.initialized) {
                            loading = false;
                        } else if (isDefined(window.TWDB)) {
                            if (!window.TWDB.ClothCalc.ready) {
                                loading = false;
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
                            ICONE.Inventario.create();
                        }

                    }, 500);
            } catch (e) {

                ErrorLog.log("Chyba inicializace ?", e);
                ErrorLog.showLog();
                ICONE.ready = false;
            }
        },
        Inventario: {
            create: function() {
                ICONE.Inventario.attach();
            },
            attach: function() {
                EventHandler.listen("inventory_ready", ICONE.Inventario.addCheckBoxBag, "duplbag");
            },
            detach: function() {
                EventHandler.unlisten("inventory_ready", ICONE.Inventario.addCheckBoxBag, "duplbag");
                $('#bagFilterIsCollect', Inventory.DOM).remove();
            },
            cercaDuplicati: function(filtru) {

                var searchTxt = "";
                var searchVal = $('#inventory_search', Inventory.DOM).val();
                if (searchVal.lenght === 0 || Inventory.category != 'set') {
                    searchVal = ".*";
                } else {
                    searchTxt = (searchVal.lenght === 0) ? "" : " (" + searchVal + ")";
                }
                var res = Bag.search(searchVal);
                $('#inventory_search', Inventory.DOM).val("");
                var doppioni = [];
                var sell = 0;
                $.each(res, function(ind1, item) {
                    if (item.obj.type != 'yield' && ($.inArray(item.getType(), Inventory.getCategoryTypes(Inventory.category)) > -1 ||
                            Inventory.category == 'set' ||
                            Inventory.category == 'new')) {
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
                                doppioni.push(item);
                                sell += (item.getSellPrice()) * (count - 1);
                            }
                        }
                    } else {}
                });
                var lastCat = Inventory.category;
                Inventory.showSearchResult(doppioni || []);
                $('#sumsearch', Inventory.DOM).remove();
            },
            searchSpeciales: function(what) {
                $('#inventory_search', Inventory.DOM).val(what);
                var res = Bag.search(what);
                Inventory.showSearchResult(res || []);
                return res;
            },
            getDetSearchBox: function() {
                if (isDefined(west.storage.ItemSetManager)) {
                    var selSets = new west.gui.Selectbox();
                    selSets.setWidth(200);
                    $(selSets.elContent).css({
                        "max-height": "270px",
                        "width": "250px",
                        "overflow-y": 'auto'
                    });
                    ICONE.selAdded = [];
                    selSets.addItem('all', MPlang.Doppioni.tutteOpz);
                    selSets.addItem('nosets', MPlang.Doppioni.noset);
                    selSets.addItem('sellable', MPlang.Doppioni.sellable);
                    selSets.addItem('auctionable', MPlang.Doppioni.auctionable);
                    selSets.addItem('upgradeable', MPlang.Doppioni.upgradeable);
                    selSets.addListener(function(e) {
                        switch (e) {
                            case 'all':
                                $('#inventory_search', Inventory.DOM)
                                    .val("");

                                break;
                            default:

                                break;
                        }
                        ICONE.Inventario.cercaDuplicati(e);

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
                        "max-height": "270px",
                        "width": "250px",
                        "overflow-y": 'auto'
                    });

                    ICONE.selAdded = [];

                    selSets.addItem('setitems',
                        MPlang.Doppioni.tutteOpz);

                    $
                        .each(
                            setsCache,
                            function(ind2, item) {

                                var itemsSet = west.storage.ItemSetManager
                                    .get(item.obj.set);
                                if (!isDefined(ICONE.selAdded[itemsSet.name])) {
                                    ICONE.selAdded[itemsSet.name] = true;
                                    selSets.addItem(
                                        itemsSet.name,
                                        itemsSet.name);
                                }

                            });

                    selSets.addListener(function(e) {
                        ICONE.Inventario.searchSpeciales(e);
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
                        var x = west.storage.ItemSetManager
                            .get(a.obj.set).name;
                        var y = west.storage.ItemSetManager
                            .get(b.obj.set).name;

                        if (typeof x === 'string' &&
                            typeof x === 'string') {

                            return x.localeCompare(y);
                        }
                        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
                    });

                    var selBox = ICONE.Inventario.getSetNamesBox(setsCache);
                    var spanD = $('<div id="bagFilterIsCollect"  ' + 'style="display: flex; position: inherit; float: right;"/>');
                    var duplicat = $("<span title='" + MPlang.Doppioni.tip + "' id='inventory_doublons'" +
                        '" class="filter_inventory filter_dopp hasMousePopup"' +
                        '" style="cursor: pointer; position: relative; background: url(https://jamzask.github.io/TWInventoryReloaded/small.png) no-repeat; background-position: -2px 0;" />' +
                        "</span>");
                    duplicat.click(function(e) {
                        $('#sumsearch').remove();
                        ICONE.Inventario.getDetSearchBox().show(e);
                    });
                    spanD.append(duplicat);
                    var utilizz = $('<span title="' +
                        MPlang.Doppioni.tipuse +
                        '" id="inventory_useables"' +
                        '" class="filter_inventory filter_utiliz hasMousePopup"' +
                        '" style="cursor: pointer; position: relative; background: url(https://jamzask.github.io/TWInventoryReloaded/small.png) no-repeat; background-position: -45px 0;">' +
                        "</span>");
                    utilizz.click(function() {
                        $('#sumsearch').remove();
                        ICONE.Inventario.searchSpeciales('useable');
                    });
                    spanD.append(utilizz);
                    var ricetta = $('<span title="' +
                        MPlang.Doppioni.tiprecipe +
                        '" id="inventory_recipe"' +
                        '" class="filter_inventory filter_ricet hasMousePopup"' +
                        '" style="position: relative; background: url(https://jamzask.github.io/TWInventoryReloaded/small.png) no-repeat; cursor: pointer; background-position: -88px 0;" >' +
                        '</span>');
                    ricetta.click(function() {
                        $('#sumsearch').remove();
                        ICONE.Inventario.searchSpeciales('recipe');
                    });
                    spanD.append(ricetta);
                    var naboru = $('<span title="' +
                        MPlang.Doppioni.tipsets +
                        '" id="inventory_sets"' +
                        '" class="filter_inventory filter_nabor hasMousePopup"' +
                        '" style="cursor: pointer; position: relative; background: url(https://jamzask.github.io/TWInventoryReloaded/small.png) no-repeat; background-position: -131px 0;" >' +
                        "</span>");
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
    bigInventor.gui.init = function() {
        bigInventor.gui.makeButton = function(caption, callback) {
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
        if (!namespace ||
            (typeof(namespace) != "string" && typeof(namespace) != "number"))
            namespace = "ScriptStorage";

        object.namespace = [namespace, "."].join("");

        object.setItem = function(key, value) {
            try {
                object.storage.setItem(escape([object.namespace,
                    key
                ].join("")), JSON.stringify(value));
            } catch (e) {}
        };
        object.getItem = function(key, defaultValue) {
            try {
                var value = object.storage.getItem(escape([
                    object.namespace, key
                ].join("")));
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
                object.storage
                    .removeItem(escape(collection.craftfilterMarket[
                        object.namespace, key].join("")));
            } catch (e) {}
        };
        object.keys = function() {
            var array = [];
            var indJack = 0;
            do {
                try {
                    var key = unescape(object.storage.key(indJack++));
                    if (key.indexOf(object.namespace) == 0 &&
                        object.storage.getItem(key))
                        array.push(key
                            .slice(object.namespace.length));
                } catch (e) {
                    break;
                }
            } while (true);
            return array;
        };
    };
    $(document).ready(function() {
        try {
            bigInventor.gui.init();
            ICONE.init();
            setTimeout(bigInventor.Updater, 5000);
        } catch (e) {
            console.log(e.stack);
        }
    });
    var TW_QuickSearch = new Object();
  TW_QuickSearch.gui = {
  };
  TW_QuickSearch.gui.popupMenu = null;
  TW_QuickSearch.init = function () {
    TW_QuickSearch.gui.menuButton = new TW_Widgets.MenuButton('data:image/png;base64,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', MPlang.menu, TW_QuickSearch.popup
    );
  };
  TW_QuickSearch.popup = function (button, e) {
    if (!TW_QuickSearch.gui.popupMenu) {
      TW_QuickSearch.gui.popupMenu = new west.gui.Selectbox().setWidth(200);
      TW_QuickSearch.gui.popupMenu.addListener(TW_QuickSearch.findSet);
      for (var i = 0; i < TW_Sets.length; i++)
      TW_QuickSearch.gui.popupMenu.addItem(i, TW_Sets[i].name);
    }
    TW_QuickSearch.gui.popupMenu.show(e);
  };
  TW_QuickSearch.findSet = function (id) {
    var items,
    base = TW_Sets[id].items,
    upgrade = TW_Sets[id].itemsk,
    invItems = [
    ];
    if (base) {
      items = base;
    } else {
      items = [
      ];
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
        var f = function (res) {
          EventHandler.listen('inventory_loaded', function () {
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
      new UserMessage(MPlang.nothingFound, UserMessage.TYPE_HINT).show();
    }
  };

    bigInventor.Updater=function(){
        //Check Updates
        $.getScript( bigInventor.updateURL, function() {
            if(bigInventorUpdateVersion > bigInventor.version){
                var updatedialog = new west.gui.Dialog('TW-InventoryReloaded', MPlang.updateAvailable + ' (v' + bigInventorUpdateVersion + ')', west.gui.Dialog.SYS_WARNING).addButton(MPlang.update, function () {
                    updatedialog.hide();
                    location.href = bigInventor.website + '/code.user.js';
                }).addButton('cancel').show();
            }
        });
     };

  TW_QuickSearch.init();
  var msg = new west.gui.Dialog('TW Inventory Reloaded', '<span>Používáš beta verzi scriptu TW-InventoryReloaded vytvořenou hráčem <a target=\'_blanck\' href="javascript:void(PlayerProfileWindow.open(746376));">Jamza (CZ14)</a><br><br>Pokud najdeš nějaký bug / problém, neváhej mi napsat a popiš ho.</span>', west.gui.Dialog.SYS_USERERROR).addButton('ok', function () {
    msg.hide();
  }).show();
});