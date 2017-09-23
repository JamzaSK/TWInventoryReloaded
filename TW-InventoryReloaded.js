// ==UserScript==
// @name TW Inventory Reloaded
// @namespace WINGS
// @authoraAPI Jackson
// @authorReloaded Jamza
// @description Větší a lepší inventář pro TW!
// @include https://*.the-west.*/game.php*
// @version 1.0
// @icon https://jamzask.github.io/TWInventoryReloaded/TWinventoryreloaded.ico
// @grant none
// ==/UserScript==
(function(fn) {
    var script = document.createElement('script');
    script.setAttribute('type', 'application/javascript');
    script.textContent = '(' + fn + ')();';
    document.body.appendChild(script);
    document.body.removeChild(script);
})(function() {
    var bigInventor = {
        version: '1.0',
        author: 'Jamza',
        minGame: '2.62',
        maxGame: Game.version.toString(),
        website: 'https://github.com/JamzaSK/TWInventoryReloaded',
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
            Doppioni: {
                tip: 'Zobrazit pouze: Duplikáty',
                upgradeable: 'Vylepšitelné',
                noset: 'Bez setů',
                sellable: 'Prodejní',
                auctionable: 'Dražitelné',
                tipuse: 'Zobrazit pouze: Použitelné',
                tiprecipe: 'Zobrazit pouze: Recepty',
                tipsets: 'Zobrazit pouze: Sety',
                tutteOpz: 'Všechno',
            }
        },
        sk_SK: {
            lang_select: 'Vybraný jazyk',
            language: 'Slovenčina',
            ApiGui: 'Tenhle script vylepšuje inventář.',
            contact: 'Kontakt',
            title: 'TW Inventory Reloaded',
            update: 'Update',
            updateAvailable: 'Nová verze skriptu je dostupní.',
            name: 'TW Inventory Reloaded',
            msgme: 'Napiš mi ve hře',
            mailme: 'Pošli mi email',
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
        '</i><br><br>' + MPlang.contact + ':</b><ul style="margin-left:15px;"><li>' + MPlang.msgme + '<a  style="margin-left:15px;" href="javascript:void(PlayerProfileWindow.open(746376));">Jamza</a>' + '</li><li>' + MPlang.mailme + '<a  style="margin-left:15px;" href="mailto:97jamza@gmail.com">97jamza@gmail.com</a>' + '</li></ul>');
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
                    selSets.addItem('upgradeable', MPlang.Doppioni.upgradeable);
                    selSets.addItem('nosets', MPlang.Doppioni.noset);
                    selSets.addItem('sellable', MPlang.Doppioni.sellable);
                    selSets.addItem('auctionable', MPlang.Doppioni.auctionable);
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
    bigInventor.Updater = function() {
        $.getScript(bigInventor.updateUrl, function() {
            if (aggiornaScript.bigInventor != bigInventor.version) {
                var updateMessage = new west.gui.Dialog(MPlang.update + ': ' + MPlang.name, '<span>' +
                    MPlang.updateAvailable + '<br><br><b>v' +
                    aggiornaScript.bigInventor + ':</b><br>' +
                    aggiornaScript.bigInventorNew + '</span>', west.gui.Dialog.SYS_WARNING).addButton(MPlang.update, function() {
                    updateMessage.hide();
                    location.href = bigInventor.website + '/code.user.js';
                }).addButton('cancel').show();
            }
        });
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
});