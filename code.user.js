// ==UserScript==
// @name TW Inventory Reloaded
// @name:cs TW Inventory Reloaded
// @name:sk TW Inventory Reloaded
// @name:pl TW Inventory Reloaded
// @name:it TW Inventory Reloaded
// @name:el TW Inventory Reloaded
// @name:fr TW Inventory Reloaded
// @description Better Inventory and tools for The West!
// @description:cs Lepší Inventář a nástroje pro The West!
// @description:sk Lepší Inventár a nástroje pre The West!
// @description:pl Ulepszony ekwipunek oraz dodane kilka opcji do The-West!
// @description:it Miglior inventario e altre funzionalità per The West!
// @description:el Καλύτερα Αποθέματα και διάφορα εργαλεία για το The West!
// @description:fr Inventaire amélioré et outils pour The West!

// @author Jamza (CZ14)
// @version 2.159
// @license GPL-3.0

// @include https://*.the-west.*/game.php*
// @include http://*.the-west.*/game.php*
// @include https://*.tw.innogames.*/game.php*
// @include http://*.tw.innogames.*/game.php*
// @exclude https://classic.the-west.net*

// @icon https://jamzask.github.io/TWInventoryReloaded/icons/image18.png
// @namespace TWIR
// @grant none

// @updateURL https://jamzask.github.io/TWInventoryReloaded/code.user.js
// @downloadURL http://greasyfork.org/scripts/373294-tw-inventory-reloaded/code/TW%20Inventory%20Reloaded.user.js
// @supportURL https://github.com/JamzaSK/TWInventoryReloaded/issues
// @homepage https://greasyfork.org/scripts/373294-tw-inventory-reloaded
// ==/UserScript==

//
//
//
//  TTTTTTTTTTTTTTTTTTTTTTT     WWWWWWWW                           WWWWWWWW     IIIIIIIIII     RRRRRRRRRRRRRRRRR
//  T:::::::::::::::::::::T     W::::::W                           W::::::W     I::::::::I     R::::::::::::::::R
//  T:::::::::::::::::::::T     W::::::W                           W::::::W     I::::::::I     R::::::RRRRRR:::::R
//  T:::::TT:::::::TT:::::T     W::::::W                           W::::::W     II::::::II     RR:::::R     R:::::R
//  TTTTTT  T:::::T  TTTTTT      W:::::W           WWWWW           W:::::W        I::::I         R::::R     R:::::R
//          T:::::T               W:::::W         W:::::W         W:::::W         I::::I         R::::R     R:::::R
//          T:::::T                W:::::W       W:::::::W       W:::::W          I::::I         R::::RRRRRR:::::R
//          T:::::T                 W:::::W     W:::::::::W     W:::::W           I::::I         R:::::::::::::RR
//          T:::::T                  W:::::W   W:::::W:::::W   W:::::W            I::::I         R::::RRRRRR:::::R
//          T:::::T                   W:::::W W:::::W W:::::W W:::::W             I::::I         R::::R     R:::::R
//          T:::::T                    W:::::W:::::W   W:::::W:::::W              I::::I         R::::R     R:::::R
//          T:::::T                     W:::::::::W     W:::::::::W               I::::I         R::::R     R:::::R
//        TT:::::::TT                    W:::::::W       W:::::::W              II::::::II     RR:::::R     R:::::R
//        T:::::::::T                     W:::::W         W:::::W               I::::::::I     R::::::R     R:::::R
//        T:::::::::T                      W:::W           W:::W                I::::::::I     R::::::R     R:::::R
//        TTTTTTTTTTT                       WWW             WWW                 IIIIIIIIII     RRRRRRRR     RRRRRRR
//
//
//
//
//
//
//

! function(e) {
    var t = document.createElement("script");
    t.setAttribute("type", "application/javascript"), t.textContent = "(" + function() {
        var e;
        TWIR = {
            version: "2.159",
            name: "TW Inventory Reloaded",
            author: "Jamza",
            minGame: "2.04",
            maxGame: Game.version.toString(),
            website: "https://greasyfork.org/scripts/373294-tw-inventory-reloaded",
            updateUrl: "https://jamzask.github.io/TWInventoryReloaded/update.js",
            downloadUrl: "http://greasyfork.org/scripts/373294-tw-inventory-reloaded/code/TW%20Inventory%20Reloaded.user.js",
            updateAds: "http://festyy.com/wJMk7P",
            setsURL: "https://west-tools.alwaysdata.net/script/files/sets.json",
            compress: "https://jamzask.github.io/TWInventoryReloaded/js/lz-string.min.js",
            alert: "https://jamzask.github.io/TWInventoryReloaded/alerts/firefly_western_tone.mp3",
            translations: {
                en: {
                    icon: "0 -721px",
                    translate: "English (en)",
                    url: "https://raw.githubusercontent.com/JamzaSK/TWInventoryReloaded/master/languages/en_EN.json",
                    translator: "translator: TWIR"
                },
                cs: {
                    icon: "0 -785px",
                    translate: "Čeština (cs)",
                    url: "https://raw.githubusercontent.com/JamzaSK/TWInventoryReloaded/master/languages/cs_CZ.json",
                    translator: "překlad: TWIR"
                },
                sk: {
                    icon: "0 -817px",
                    translate: "Slovenčina (sk)",
                    url: "https://raw.githubusercontent.com/JamzaSK/TWInventoryReloaded/master/languages/sk_SK.json",
                    translator: "preklad: TWIR"
                },
                pl: {
                    icon: "0 -1201px",
                    translate: "Polish (pl)",
                    url: "https://raw.githubusercontent.com/JamzaSK/TWInventoryReloaded/master/languages/pl_PL.json",
                    translator: "Przetłumaczył: Wojcieszy"
                },
                es: {
                    icon: "0 -1393px",
                    translate: "Español (es)",
                    url: "https://raw.githubusercontent.com/JamzaSK/TWInventoryReloaded/master/languages/es_ES.json",
                    translator: "traductor: pepe100"
                },
                it: {
                    icon: "0 -1297px",
                    translate: "Italiano (it)",
                    url: "https://raw.githubusercontent.com/JamzaSK/TWInventoryReloaded/master/languages/it_IT.json",
                    translator: "Traduttore: Billy-AR"
                },
                el: {
                    icon: "0 -753px",
                    translate: "Ελληνικά (gr)",
                    url: "https://raw.githubusercontent.com/JamzaSK/TWInventoryReloaded/master/languages/el_GR.json",
                    translator: "Μεταφραστής: Timemod Herkumo"
                },
                de: {
                    icon: "0 -1105px",
                    translate: "Deutsch (de)",
                    url: "https://raw.githubusercontent.com/JamzaSK/TWInventoryReloaded/master/languages/de_DE.json",
                    translator: "Übersetzer: Tom Robert"
                },
                fr: {
                    icon: "0 -1361px",
                    translate: "Français (fr)",
                    url: "https://raw.githubusercontent.com/JamzaSK/TWInventoryReloaded/master/languages/fr_FR.json",
                    translator: "traducteur: Thathanka"
                }
            },
            images: {
                preficon: "data:image/png;base64,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",
                arrow: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAJCAYAAAA/33wPAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4wUVDhsSozJ8iQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAABrElEQVQoz5WSzWoTUQCFv3vv/CRzkzSmSU1FlFrp1tWA+hguXM6+L1HwKfoAs3PhxoUguBBEXTiIUISglobWpiWR/E06SWbujatCKXXhWZ3zLc854vnT7TawB+zy//oE7L/8+CsWzx4/eHHcn+z1BlN0ycEvOeTGUhRQDVwWy5wsK0AIlBDUKg5YQ+cso1xyebLTxlGy7hhj9+80Ki3tyt0gkEgh0IHLorCsrMRTluF4yWg8p1HzaTd9ur9H1AOfR1tNBESvPh+OVed0lD7crCWe52i7tOH6mkerUaFVD3DdFU5uWa/5XMwNy8Jyq6KYzAybG2tIKaLXX7oxgAL40Run27drCVJqa0wYBC5/+jP6/QuEBF12yRYFJ4MMXIXrBQhE9ObrcXxZlro0P88m6dZGNckNOp1l4XCYkWYFS2PIc4OxMJ4XVIMyQPT220l8tXV1NRyeT9P7zWqSG6ELY0NPQsmXCEcwyQyVoMwKEb07OI2vz6eug6P+NL3X1IlQUueFDZWEhRXYlQKI3n/vxTf9QN0Eu4M0vdvQiZBSmxVhYQQgog+d8/hfh/oLKQev5Goti4YAAAAASUVORK5CYII=",
                underprice: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAARCAYAAADQWvz5AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAE9AAABPQB5/Dl3QAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAPcSURBVDiNZZRNbBRlHIefd+ad2Z2d2Z3uLmVpgVLoKkGwKBQwCBojKCSiBxU0JsavcMCTMZJojAeN8eMEhphgPCgxelBIiBojJgiNiigQAaN8NrRQoNuWfu3H7Mz7zngpHvR3+Z2e/+GfPD+T/8cAcj3ZbGcoRLGutQPke0re3CAO7YYiAvR/IXO6BSCBFJDNQNdXPbe+uak9t/50tSEfmV+4a+d95deymbQ62D82CKhpBiBhGgYwS1BYXMiWzwfhjB7PWX4Lap1rxO6+pW2r/Lzl5Yxm9sEFnthxwhpvb8kM+pZxrbdv7BJQBZKbV52N+eyy3Yvm744agWuqptMmdMmwFcKXJFkDchJVcKJ+IQe91qx5qaYPrnn7yOvANUDL6Z+kzzTDogjDYqlem9UkZCINdlpgpzVJGrSlkATWAs/uNGTAsfGoAOSBYSCWgGvBvA7HXtKMGuaE75E8+iRGe4nGiQNYl4+SODb2xm1Ep/bi6mGMsEkcqJYFM5wlfSONCWDIXJZLdXzas/CVF2flnslEQTHa/LRgzb0MnfyF1udfpXLsO8SStVi33U18ah+OBCOGcktm9qbuud2LSv7ot39XzhmjcWIVXTmvYMXF2FLCaC/RHL1Kte8PhONSn9GBc89TTB36CJOYREHS0JjVppwjxXwjIQ8Y5kSo0+frDXNDh7fCSetMPZzEW/8E+ZX3M3X2VxLDQFoWtd/3YiAh0JjNBCOSSe+V4Ohz35z9PFLxgASEn7Et6UsjlZhkb5ykunMLDbfAVBTQ9sKHDO7fQemxd5CZPI0/D6EOfoFvxMJumpabmGYNhbG44GXfWtf5cKFo5aUvcVss8m6Eo65TXLuF2sXjeOWVGH47l77cRWbDVpqpNuLJmFVZ7873V5dXAbYRWSq4UI1ODqVkhZZ0YmRMhCUgV8Lr3kDj8B5ShkGiNWpsHBAkTZNIWeriZPRXpRoOAFoAng2dC9vcB755try93W6WgiCisWIrqlpD9e5B2zNJb34D4bcSHT6Atf8zDkxFP750un/XaKh/AyoSqIVwOYiTcynfhdhAKkHqp4+x6xqpBfFIhfp729B1gaNMnJRLPm1VR0N9FqgAkZyWLuya6Y3WhDUwUo3GrMB2O005RxAKoRNQMSkNgWWF51TSl7dSwtP6KjA+vQT/uiY9j/zSmf68/rGgdfns3LJPHipv92pR9mIlGCgq088rs+X4ZHRs05EzHxRk6rIrxPXjU1NXgBqQ3LRfV6vc+Lk6MQk4Q9Xhq2dWd90+NKH0y99f+KHb9wrv3tH1+NfDN/ZUgqi3QjQCRNNzkgD8A3gonviUn1mfAAAAAElFTkSuQmCC",
                trader: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAARCAYAAADQWvz5AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAT0AAAE9AHn8OXdAAAAB3RJTUUH4wYFEjkptw6k1gAABJxJREFUOMsFwUtQG3UcAODff195k2yThpAHEF6BAgnQUko7jKVgrU47jnqwo4yO70NPthed8ehNHb2oh47Ti47TsY/poVprK7Rqa3kNoYZAAqQJeZAX7G42m91sdtfvQwCgA4QMSNNsGoY7DXZHl//sxMDYUGd3i818gCRIkqtWxWSxshteSkVTj+cjci67g0AtagAcAIgAICNAyAaaZgfC2O49f+7Eu+dCpyd9ll4PIVgVLo2FwxHM1WzUPM2yvFDWl+8y3uXbNxP3ir/fn8dASquAGABNwBFACxBU5+DHM2e/nDn05qsOYqCWyBnn8pCLyETaKUaMa6ojl5TtZTox7x6Q1ntaJ4fbN2x9Ire8VkSgSAAg4wDQ6337/OkvZhxvjNc2PFdLvnjB3MThSlW6l6gnz41ZWx7ElPUrywc3RgadnkqKJQf5SIt7NOCJ6P1FfjWSB4RqON7aM/3+pemZl0pzPQuCg734mHq4/ehJ9sKUJaCabJhBLeqj5abChItxBeiq9Qfn64tkIa/r2lttq/SPUvGd+pa6m93DAm+dOfoKvRp4WpR50eSQf5raOwJGM3knQ+1OdembaXdbLXi8/+CpoKHj5mbTJhOLCCjogdhiFnmZdLDjZHAISMqKTXTVg04mbPyP7k59vWJa2sMMxFcfeY5amv1EPi5S3FLcMcLd85Z0Zt7XQ1s/OxQ7oolKbb9/OE/nVqxOmujDdRSN0ajkiEXL4Ba3mz8YTXWXZLbOSpTSsV/ysGlkFAuaae3WbJPy9K8Dh7wUfXmzJ/n5w+Zlvm+soG9gGCbV7KC3mAmtruKYxazu1EyscZepGQwGrCwiubK0qJNyAtXul5TIOo8RfI4K9VSUmSHG81pPxZNPs4YyL6piE4kBhZOYJMiahTaoYTGw/en3+n9vx+mS3chT7jZeEvf+UVYePsDzPNnwhQaEQsNWjZbNxXTVzDYAaRQoiECaCg1NITic5mIbdWKU3ux++RNLhxMlyEfPeovH+/vVUX0DVp/kiInW1jrWP1LyaRlrmpHrP6b88Q8HKYPTnnbqSUxANUHAUqh5K1u3KdbNsHurSksXbzkfkVVeUdmiMe89kz7+3jvF9vEBMVPk5Stz4lo7VbJdCG0dQw/+aElQ3mpZIhOqIjLY8v34ItsWyGgNROwwhDBx0ueatme7rs7Kq8+i25wkCdrPy3h6FN92VdKN/W/ZE/O6TM7IxPeMCUdoM/skuqQKNQavRddNaPQ5U9CndvnXZj29tOxeMQ1nvrnOLc+MQavNhJsuXZOeTgd09tbDXpe/njpgWFjw5A+fYlb2yRvJX+78DYqcxwGAymyxnOWFKWNvk9SKwvMmAgQtNOY3k5psZ4olqnuos2GuZmzSn7PtVGLHlWwPsiv2/usr3137FdhyEgAYHCFAGlsW1iNcQRo+1uga76M9tYKzV415+Wcp6/52xjJOrHsriTxdwJ1StvtofHbPdG318o3fILezCRhWBk2rIQAwAIAZABzIZPb6Xnw+NDnZO9JtzncaG4qF4XQ4X62oHGkpJ0VDdHUuvJSfX1yDKp8DhMqgaVUAkP8HiCRS/yoZGRsAAAAASUVORK5CYII=",
                bell: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAWQAAAFkBqp2phgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAH0SURBVDiNhZC9T1NRGMZ/59xze1vstSntbaUlFoRQEhuhtLHx2riYGBIH/KDRBDUx0cWog264GBJjwsLi4ODAJItB/R+MX4tRSZDGGMEaEQSVELVVuA60pESuPMt5T877/t7nOeCuRCFrvD2aMd4AMbcmrXoeAHYCp4H3GvTuTTYMZ9LxrsawGV6RKlua/fEdqADnAS8QBUqiCrgBvAI+pJq1C8MF/0C+bz96KLK+6dnLeS4OPbkzUVy8C5hADrgmqy5KQBKI3DzuH0i3+zcMA+S6LEYGc+diEV8F6AY+AUhgBbgNlO12/WRPQqGZgU3z5jNRjvW2HqlGuVUDADjAWGeTtgdAGobbn/Hr5+pBYKx2l3VvM6YhLAChKVfAdr8KAdObAYSmCc9aJXCT0uQGe/UANOnoWwOE7gbw+T3SC+BUyq6ABp8ygfWMtcIDnIgFpfi8tApLM3gWyghd/wcQ/vNNBwrAPeC3AFrO2N7n6YSyADxNzeiNYVcHADjw+MXc7Oh4MauA7lO2Ye2OrZkxe9rQQ9b/AUBHa2DH6HgxJQC9xZJDyajqbIvKBeEzxeS8ytu7REf9wKN3zqS5TU1VDfB66uvE9Mfl624L+u5fCjiLD/Y5y0/7nYcjtgMc2tJWveJBOXj5cPDLlbOpuXjEd9Wt7y8T5HDrQdsx8gAAAABJRU5ErkJggg==",
                market_watcher: "data:image/png;base64,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",
                upgradeicon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAMCAYAAAC9QufkAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAgFJREFUeNqUUUtoE2EQnuxuu6murRpEsdHUtNZaLy2ih/hAKj5qBW3pA6SeFA/FFhR8XDxUDR6MiAiCYg8q+KjiwaMoFQ+exFNBq5hCkwa7TbfBbJLdzW4+55f2IgF14JufeXz/MPNJVN4q2aJ9PdtmNK3yNsdL6D/s7IXzfTYwiOvDqzyOhxnKvxCP9/cfNO3cIIp6CDCbcPpUwOL80N+Ih9oPRPSscQ7ebAPyU0G4ej0soxm9nTUm13vLkcRO+1pbt3xNpS4CmWY4qSCQDsOa3sBvA4zUZuzZqSW578jiDWTG1qZN6x9GdrQM3b21e23dmjHyCmmampbpzbsCrQsqJEsgrQrUtitQnZwJHEbJ3Zues8bFBwOvnvcAOInSbAtPrIX9I4yBEzVQVZ89OrIamA8jn6hDSW/kvv24GQ1B8CR2kpWLE5lj5NhzVKGqNPrSpEfPsgnbxpnLsfmJybhLfr9ERdchT/9C8UlDDJUEGb9VkPykVin08ZNNV29kKGuWYly7M/7ZiV66Zjj5AkhRJJIVXkMWNILwsqoWmexRMuHRlViGJr47Tzh/f+GYTx+/MEfuPfhJrkvkOEQeaPFe1N3VoRWOdS1DZLsfiuL7wLmNf6hRu3KF/LqzQ8PR9qVorK8Qunf72C1ntDGCjBzjPeNbGTlDC33VDCHZ218CDACj79t/Wk/bQQAAAABJRU5ErkJggg==",
                none: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4goBFSoBZ9XyyAAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAABwUlEQVQ4y82TT2sTURTFf+O/ZPGSIenYTRqpWLUUwVJhtCQYiYsggis3Lo0bP4FkYTapiyKC4KLQxbR0n267EkFqUAtiFjWkTqWxSUasMyljKqYgxNV7jIkfoHd13z2cc+89lwdHKspZM//4yrl+OWvmB7HF3GxpPjXVX3jx6FawfixIrvqedfHSJFXfs4Ii5ayZt53dYiwewVlZXbt/744psRMyqfqeZWbSnJqMo48YbLx+Y5WzpsIuz0wDIDpdEp8/vQe0fyYQ4RC+56rRzEyadz/alhSW4f70EeGQemvBfeZTU/3ExFnETJLjX3+ruhTe2qwjwiEKlZo25AGAe/OG2Nqss/fyoyJ+s+sAtLd3EOEQ31NXT/7XRIBnpYVfSWN0rum4JI1Iv729w36nq0aPCX3u+dPlP0GONniqprtXNDNp1Rlgv9MlFo/QdFym9ZEHd19tLA0JLOZmS7azWzw/PqYIsrvMY/EIdqPFtdMJJaJWGCTbjRYAB71DVQMwojpV37OGPDCiOnajpchGVKdQqWlPPnzRDnqHNB1XeTE2Pro+JFCo1DQpIskS693OCQC70WLiwpn1h6tvrx+dD/gXKc7ErG+37IwAAAAASUVORK5CYII=",
                menuicon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4gYQEism8969nAAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAEYUlEQVQ4y3WUW28TVxSFP8+MPTO248RO7DjEuRDbFHIhTYVaQKpAFFqMeOERtSq/AKT+FXhrK/UB+oRaHloRqgpQaWkJSASUUCCekAQ7AWIy48v4kvF4pg8hlNCypaOztXT21j5nnbU8vCPGdiVODw6Fz4QUX2ogFAZgqWxQblja/dnc2adLxXP/V+d5G+gf6MiMj/Zd/mzndvrTYziOg8fjeb0AHv99l9+0HPdnc2febiy+PdWH430XTh07TnskhmWWcJ0WraaF6JVpmkVEWaUr2sPYtm6iQTmzZOh6qdTQAX1Lw/6BjtOH906cPXHoAACVUhEXFw8eXBdc26LedBDsBi2rga8tTF8iQaW+lnlWMLRazdYBXQRQFFJHD45Mnjh0AKtikNUeoS0bFNbK+FUZWfVjVirkVgrMr6wBLuHIxruOJtOsVguZp7nVK7aNJgEM7+49O5HoBuDGvXm+u3SdaKQdx3GRRJFjH4/zx/QcK6sGQVXCqNQ5un83Jw59gK8tzHhfksXtxumZh/msBKR29cUz8Z5BFp8s8PXFq3x5fD8TIylCAZnzP//FNz9cJ5mI8dWpDKrQZP5FjW8vXmVoIM6OAZd4wGFwKJyZeZhPSwAhtQtFhLncKj3RMOlkL67jUqk2+HTfGN2RIMPJBLLQItydILq+QrK/mwdzT9kx0EMgoGxSkZKAdNjbom672I0yTquJLHmpt1pIdgvLdhlNJfD6fAS8No5VJd6hAiD4ZBQRmkBI8W1gAEZTxK6vEQsHKZoNFvIviEe7CMgCiZ4uRAHMyhpGUccoPCe7sMTi8irDfRHqtrvlH0ubieu6xMIBPtmT5PxPNxEEiIVEQq6Ea9eJdoSomCVsj5fLt+bYM5okOdBLs/aSWm2dkNr174SdQZVabR2/X+HgxHaGk71cunYPvbyOJInIPglJCVIyLS5cvoMoiJzM7KNhNanV1lnRa+SNlX+VIrR5jw1F2yLxWC8vizrv9Ycxyia/3HqMV3DobA/wYG6eH6/N0O73cfLwGNh1WlZtQwT1JtOLOZ4tVyZFIOK4lt4V3ZbZmU5SNQrYjsP7oyP4BItfpzQKeokb0wvsGU5w5KM0quylKbUhOhYAfy7lmbqnTdoNroiAXio1bouy+oXssSOJ3l5Ms4jVMJEDEQZjKtfvLnJk/272jvQgCB787d34vBKK1+FGdoknzwpabr7yPaC/JmXqzmxGDXomgVQ8INGwbZz1KuMjw8Tj21CE+msm/YoMwM3ZPA9zz7l7e3kS0IDsm26j6y9Nrdx0P39eL7Iz1kmb6qVvMEV5LYfq9WI7DookUSzr/P7oMQ+eGMzOvDhn21YWmAK0Lfal+gNpt+XqNbPeuVhpRFzBj1WtUiybVB2Z5ZLFdD7HnUcl8strFIvrky3Xo7uucNu2LR3QtxisogRTiiKlgRRApL0tE/C76U1ZAVqpZmbLJTQAZ2MyrWzWsq+u/F/HfqN4M9LvOJN9tWtvgv8Axwj1p1bTaUkAAAAASUVORK5CYII=",
                menuiconhover: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4gYQEi4tGXuQUQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAEMklEQVQ4y3WUy29UZRjGf+d+mTNnbp1epqOttgOiNDUookRMWRiYEIkLF8bL0iXxX/BvKP8CrFwYF1gDJqUxpFIgBmot0GltLS0t087lnJkzZ85cjotabKh8m+/Lm/d58uT9nvcReMn55MLYpOtxqVELAfBqFUwrjmEJRE0Kqyvl/Pzik8KLOOHFwtixbD7Vn/hpd6uMacWJRBOkLJPdmvf8Bqi7ZQxLKNycns8dxIsvkF0yrfghMlXZed5zNGOSskxeHRikUQtHJ86OLQGjhxROnB271KiFkwCRaIKBxJ4S2+hhKBXDcUrYdpJaMwBgt9YAYHFjE6Bwc3o+DxREAF1nFJj0nJBINEFULVMtg1MRGLZFBvuT2PEkJdej6nqYos9QKkbKMhhMqvtKJwEkgPy5sStP18u5dCZD29vg1u1V6l6D7WKFO4ubqEKb6TuPmbn7kKW1LWbuFVBUhdyAjoaKpLdwG51caac2JwFksn1XGjUfQdK5c+8RX1z4gIsT73Dy+AjFisu1Xx9gmTrffHaWTz8+RdrW+f7GXcZzGZK2hqElebRWImIISQmgL937naLqxPQQvxHw+fn36HS7iELI+BvDRDSVsyeP0BPVCAKfoNNhe8cBQSGXiSOLLXaaDvV2IycCtIQyvb0Ctq4RErK6VaLueXS6HRynylBfBEXs8PfTZ7hOGVOVEEWRMAyJp7OkYhbjr4yghIk927Tcvc/uTcVw6z6+1yQdjyJLErqmYRg6mqKgqjKWplHzAlY3iowMZwBQzB4ADEvYIzStOADJWIQPTxzhyrVZ7i4s02q38ZtNmkFAu9NBFEQcz+fHm/d5980hXs+mMWQBz28+96m8z7zvrYm3M7hek+uzi1hWhL5kFEkUkCWRsuNyY24ZwpCLH72F12iwK4ooXZe/iuuHNyVlGUh6gvzp4xwZ6uHqtVnml54iSgrLT3b5YXqBiCbx9YVTiGGbMHBQui71uo/jB6ysrE9JAN0wKPX3xvLVukFvVAEEjo5kiWoh1397RLFU5db9ZU4ey3LuzAlMqYWAQCfsYuoqa9sOv6+u8/DP4rcSQLXqz2WyfV/tlpykaarIkkhMbtLbP8hAOs7Mvcecfz/HmfHX6HabNMMIrVBGJCAQIvyysMLC/c3LzaBVOJg2+4vO6eE+krZKpakSU5tUPIWY2UIUBCpNlbgWoMsyfrvNTGGdW7NbU6VS8TKwJO2z6TrJZ1u1nwcGk18+flIjEHxGMxk0oY1uRbHtBJoRxQjryKLIZsljbn2T1UK3sL2zerXd5jZQkP8TaCGrxujuZnfKtIX8RinA+eMBANlEhoTSAWDNKeP4AfVGnLobAiyZZhrfLx4OWNsyR2U1ko9H9RxARLfzpi2MHrRWoxZSfFad+hdSqLj+kuc1pny/VvjfxN6f54F37iU9S/ukB4v/ANldx3GDN4jYAAAAAElFTkSuQmCC",
                bagbg: "data:image/jpeg;base64,/9j/4RCTRXhpZgAASUkqAAgAAAAFABoBBQABAAAASgAAABsBBQABAAAAUgAAACgBAwABAAAAAgAAABMCAwABAAAAAgAAAGmHBAABAAAAWgAAANcAAACA/AoAECcAAID8CgAQJwAABwAAkAcABAAAADAyMjABkQcABAAAAAECAwAAoAcABAAAADAxMDABoAMAAQAAAAEAAAACoAQAAQAAABsEAAADoAQAAQAAADkCAAAFoAQAAQAAALQAAAAAAAAAAgABAAIABQAAANIAAAACAAcABAAAAAMAAAAAAAAABwcHDQAHAAMBAwABAAAABgAAABoBBQABAAAAMQEAABsBBQABAAAAOQEAACgBAwABAAAAAgAAAAECBAABAAAAQQEAAAICBAABAAAAOg8AABMCAwABAAAAAgAAAAAAAACA/AoAECcAAID8CgAQJwAA/9j/wAARCABXAKADASIAAhEBAxEB/9sAhAAFAwMEAwMFBAQEBQUFBgcNCAcHBwcQCwwJDRMQFBMSEBISFRceGRUWHBYSEhojGhwfICEiIRQZJSckICceISEgAQUFBQcGBw8ICA8gFRIVFSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICD/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery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",
                menubg: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/4QCARXhpZgAASUkqAAgAAAAEABoBBQABAAAAPgAAABsBBQABAAAARgAAACgBAwABAAAAAgAAAGmHBAABAAAATgAAAAAAAABIAAAAAQAAAEgAAAABAAAAAwAAkAcABAAAADAyMTAAoAcABAAAADAxMDABoAMAAQAAAP//AAAAAAAA/+EDyGh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8APD94cGFja2V0IGJlZ2luPSfvu78nIGlkPSdXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQnPz4KPHg6eG1wbWV0YSB4bWxuczp4PSdhZG9iZTpuczptZXRhLyc+CjxyZGY6UkRGIHhtbG5zOnJkZj0naHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyc+CgogPHJkZjpEZXNjcmlwdGlvbiB4bWxuczp4bXBNTT0naHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyc+CiAgPHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD54bXAuZGlkOjFBQzM0QjMxNkY0RTExRTFCRUJFQjhGOTYyODZBRTZBPC94bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ+CiAgPHhtcE1NOkluc3RhbmNlSUQ+eG1wLmlpZDpBQzYzMzAzRTJCOTAxMUU0ODdCQUFEQTVEMDZERDcwNjwveG1wTU06SW5zdGFuY2VJRD4KICA8eG1wTU06T3JpZ2luYWxEb2N1bWVudElEPnhtcC5kaWQ6MUFDMzRCMzE2RjRFMTFFMUJFQkVCOEY5NjI4NkFFNkE8L3htcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD4KICA8eG1wTU06RG9jdW1lbnRJRCByZGY6cmVzb3VyY2U9J3htcC5kaWQ6QUM2MzMwM0YyQjkwMTFFNDg3QkFBREE1RDA2REQ3MDYnIC8+CiAgPHhtcE1NOkluc3RhbmNlSUQ+eG1wLmlpZDpBQzYzMzAzRTJCOTAxMUU0ODdCQUFEQTVEMDZERDcwNjwveG1wTU06SW5zdGFuY2VJRD4KICA8eG1wTU06RGVyaXZlZEZyb20gcmRmOnBhcnNlVHlwZT0nUmVzb3VyY2UnPgogIDwveG1wTU06RGVyaXZl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",
                menuborder: "data:image/png;base64,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",
                linkbg: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/4QCARXhpZgAASUkqAAgAAAAEABoBBQABAAAAPgAAABsBBQABAAAARgAAACgBAwABAAAAAgAAAGmHBAABAAAATgAAAAAAAABIAAAAAQAAAEgAAAABAAAAAwAAkAcABAAAADAyMTAAoAcABAAAADAxMDABoAMAAQAAAP//AAAAAAAA/+EEdWh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8APD94cGFja2V0IGJlZ2luPSfvu78nIGlkPSdXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQnPz4KPHg6eG1wbWV0YSB4bWxuczp4PSdhZG9iZTpuczptZXRhLyc+CjxyZGY6UkRGIHhtbG5zOnJkZj0naHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyc+CgogPHJkZjpEZXNjcmlwdGlvbiB4bWxuczp4bXBNTT0naHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyc+CiAgPHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD54bXAuZGlkOjFBQzM0QjMxNkY0RTExRTFCRUJFQjhGOTYyODZBRTZBPC94bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ+CiAgPHhtcE1NOkluc3RhbmNlSUQ+eG1wLmlpZDpBQzYzMzAzRTJCOTAxMUU0ODdCQUFEQTVEMDZERDcwNjwveG1wTU06SW5zdGFuY2VJRD4KICA8eG1wTU06T3JpZ2luYWxEb2N1bWVudElEPnhtcC5kaWQ6MUFDMzRCMzE2RjRFMTFFMUJFQkVCOEY5NjI4NkFFNkE8L3htcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD4KICA8eG1wTU06RG9jdW1lbnRJRCByZGY6cmVzb3VyY2U9J3htcC5kaWQ6QUM2MzMwM0YyQjkwMTFFNDg3QkFBREE1RDA2REQ3MDYnIC8+CiAgPHhtcE1NOkluc3RhbmNlSUQ+eG1wLmlpZDpBQzYzMzAzRTJCOTAxMUU0ODdCQUFEQTVEMDZERDcwNjwveG1wTU06SW5zdGFuY2VJRD4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3JpcHRpb24geG1sbnM6ZXhpZj0naHR0cDovL25zLmFk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",
                linkborder: "data:image/png;base64,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",
                defaultFilters: {
                    new: "data:image/png;base64,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",
                    belt: "data:image/png;base64,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",
                    body: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4wEDEygAMOz2UQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAARoUlEQVRYwz2ZSY+laWJWzzt98703phyqsrIyXdXlocoy1cht0dgycoNQtwW2bAPGQkJCSAgJVkgsWNls/A/YsmNjhgWIYUljCbvb7S5b3c6auquyMrMiIiPi3rjDN7zfO7JIix/x6Dw6R/yHf/P3cqEcn37yEftgMIsTThtFjBFVNrjtDdMkGacZVZSc3bnH+ctLtDbURck4juzTLV23wEdB34+UuuSoawmzRZFJUeOcI2fIETKSnDNCCEJwYBRSZBSAUqiixNmZab+hqwypOkWvVsfYeWZrDc+2gd2LS46LjDEKXXakacdhssQsKJqGz3Yjh8nio0NrjZQCmSJlP5FCgXcFRhl2h4ibZ6QKyFoBkpxBCo0xGmstWimEKYheIUkoJXAhEuxEcCOlFrTLmusxoCepUbohqVPWduBqaxmLSI6BKexRyZGqGmUKxMGwG3pMVeGcIOMRIrNsK5KNRNsjMORsQWXmMJFI1ELSdR0uRA77NW3bQs6IlMg5o2RLcA6pQEiJ0AJF5rQrmIJEyg79st+yaI7Zyci+kAxdhbVbpMiY1REylxALlFLEkEF1GF2hMDS1QYlEWSVOVguWraKtDKObsSmz7mcu1huGDfS9p10uYFlilSCHSEoeUyqU1uRKkqUiZUHOGRkzue1QXcvNFwf0cnHEeHXNsiipCOiUaIsKozRRadxkCRwQskRKwao1CD8iwsijowecLFse3H+NNx+e8Ppdw/17Le2ypb7zkM2k+eDJU/7g3/93Pv/8c1bZYHMiToGmKkFqRIoEMVMYg5QSsibGTAqWRch0QUCrUb/zjZ/5vRQrLvaX7EeHnfaIrAhhJHjNnA7osqTICWFnVMxM2xu+9u4j3GHN7Dy76+cc9tfkYFHCc7Rs0Cpz/7V7vPHmA15+9IQX558jRUb6TKkN0kja1qDTjDQGozIizmglSSEiUkIEx2v3TtE6oG0/IHOLESCjIM4BKTSkTFEqlCmIIaEF2BjZu4G3f+ot3v3aV/n2t7/NnAKEyKdPnvHBF2u679YY/oiuK3j/r/4V3vrKTyK7mmJZM/lIXdUIrbE5s54GGlPivceFhDEFYz+gZIFMjuOTFcuFYkwVWqfEFAa6SlOIjEqSsiipm5r94FAmUcqSplAIYNl1fOs3fo233jzlu09+yNMfPaMUNdtYo23HepYIO7PSI+PtBzz5zkfce+dNHj9+zJOPPyGJET8KyqNTlKkZtgOl1mSRcAiSqchZYqQgxAk7bRHOoI+Pj1kqxY/Xz/BO0rYtbnJ4qVAyY8qS7DOVlvzEW+/w177xK/zWb/86+5tzlsslSpbYMVOWNZmIwrHqNK8vaqosiEPg5ecXPHr7DR6dnfLphx/S946b22uybNFekJR/tXapKaoCbyMxWYRQGGVQhUG3q47bw56yNkSRmeaRqqoZbc8v/tIv87W//gu8+5V3eO+dx5Rdw6bfk+3Em2885P7qjGXxJfsYSSlBmrh30nDWaVolMVKTU8XsejbXz3j4+jF//1tfp58sV73nB58854sfnxN1oB9mTL3gMAikqKmzZtGecdhbxhzRTVMxx4A2kuWyZco977370/yzf/JPeePRm3SrE+Z5wLuJ6WaLMgWFUVx+8ikvPnuKPUzksiTGiJGSsiioy4KuqzF1xeXNGj/v0dHStEseP2pRuiPVK/7ub/4NDtuZH/7Fx/zxd7/Pl5e3LIqKzcYic6YqSxZt8QoOdpxw1vHi6ec8fO1v83d+4xv86jf/FipLcnLcXl/TnjZkNzP2O+qmJVPwn//TH/DZ06dse0+tNEpI6rrEzYHYFjRNhTSScdgx9JYHj16jbVum/ZbCCI4WNfP+kkoY3v+phzw4qfnwk+d89KOX/PHFX4DWjNMtTaHRFOjDfs9wmHn85iP+4T/+F9x52DKNGwrT4KNn2Syp2oqYLevzHmMU47Dle9//E2Y8dx++jrRwGA+IJEFkjo4a2qpg7HtEb1FpBb6mzEviQTDniWe7zzi694DnT7/k6vaGu3fv8dYbpxwtj2nrho8++RgXdiA6dDTo2W0JKaHVEW++/TpZb7h6vkY0luromGKp6K9viMIRpaewA7urj8izYNmcUqhI7xMIT0gT2cLZ4j2ePX/OPE+slh0rUyDcxGa9I44GLRJHR0dcvtjx8cdf8Ojtx7z11k9wNW3Qhxt+5u1TvHzM/PKalW7IRzXax0S3OCYdrhj7LVGt2Q97To6PiQn2u55oLZEZoyXn5y/4zh/9H5bLJVe7NdM0EZIhZfBBkMgo4ZnHNUopHr72AI9Diczu9orD2rPoWkJyZAFFJShMzadPPmYdRs6fbdgNmj4GDGC9p8ChnYfR9thpwEjP7HvarkCVBUFAURSkYMlodv2OqhDcf3CX5blAne9xLhDxJKXIPiNM4v79JTmf0VUdd7p7PH/5jBAiwSfG2aOqSB4n7DQyTRZtGn74Z3/COsyMdsF69PTzljtEurYku4BM2SBMxdjv2V1/yfmzT1ktahKZYZi4XW+Yxp7+cMvJsmO2Iz/7cz/H7B2TdXgbGf2EDwnrIrO1rJYFP/veQ95/7zGLWnJ3uaIzFYUu8Q5ut47tPnF7iNzuHBcv1xTS4EfPxdWB86sDk/W0bUvfjzirkXWzJMQEOaD8iJh7MpGYYLlacbTs6NoKQsBOE957Lq+ueH5xwWEYKcualMNfHgoJgFaJrlEsFoau1bSVoNSZqpBUdYHSGhci+2FmN3pSFrR1R1tULOoGrTV9P2Ktw7vMODr00ekZPt/QFIphc0n0A2mOFEc1dbdgu75GxJHVsuHq+QXf/9M/5//+4A85v8qMNqGTZI4WEQqCndELg1KGed4yF5bTu0coY1+h87ZHKUvOgZvbgcubW5QpmOYRETzLVctplFwPI7sccD5RK4E0Ge1mj9KCptB89tETNu6cs9ffJ4SEs5boR4LvKaTg9OQO3/zWrzMXgf/9vf+BEEtCinjrEWki+BmlCjISUy8xdUPbdMTUsRh6BjsRQklvM+M4MtqZrmwJ2WGM4O7xEXURuRn2XPcgVcnJYkWsMvLQ7zkcdqTo+fzTT/nRRx+yWhwBkmnsKYxCiMxms2G327PoVhyGmZAg54z3HolAStBKEkKgH2fqZkG9WOKSxyeBj6BQyCyxo+OwHZiGxDwrrm6usN5hSslrdzruHlfEFABBV9WUZYl2BxBlTXf2kO9/9CMOYYcvQIuClAZ2u2tSthg9IesGmyMf//kXCCGYdYF2jlkEdAZnRxpTYsLEvIkEJVDJYd2aHAPWO26nDddD5GY09FGwWz+DeJdf/Ml7LFXJlB2nJTRNRYoaYzy+KdFlnVDmmH6/5+J8S9QJP1ekEJndTFMck/QILlGVHcOt54unzzG6JOSItSNOJnycMCS0kdRNiQ+WEAKCzGwjSSSE1MRYEn3AmEBJweYwcu5e4t8+IUSLlI4Hd2tOXihy6HFRoqJB+thz2B7YbNasb3eU5TGFrFESlIaiKIlRYHTN4fbAfrtl14+Mo4UQgERVtpAl3s8UGoIbmGeLm2cEirpaYozCx0C/j9xcD9jBkrPAWsNgM3uX2e5Hops5aktWFUBku98TDiNaKYEpwPkDSTjqpmS3vaZddJTlhLUzVdvB5Pif/+2/st06ZFEibEKTyRKEUEgpiAnunK0oC0nTdhRFQbNYMk0TQkeyzCBLsu/JyaJ1hdEN5zd7PrsYeXByymJVIKJHepDlEgeo2wO6rBaossBUhtXxEW+88YCmlpQ6EtLEerOnivdoU2K4veWzz14whoSUmjCPyJzJOQMJKWHZNZATRktSClhr8c7i/Ih1I9PksdNA8j05GkBjo+Lp1Y6375+wulvgDnvmaUKYAElTa4FEaoKX5FShdEtZV1RFAQmSh6qoqZoaYwz/6Lf/AX/zV36ZOSZAohIIrVBKAFAohchgrWUcR6Zp4GZ9yXDYk0JEKU2pDceLmntnK5atpq4FTS246dd8+fKC6+0Ng91RFZmoIqJQhCiQspA463BOM02ZcexJcSJaR3SCrluiSsnt7ZqTsxVKZ4bp1VBKowkh4P1MJlKWJcvlEUYqKlOAyDg3IWIme83UB4ZhQIpEW71yAkWZqXVAiYgQAqkMWgrOFh1GCkpdEIVCrjeX5JwYx5H15oaLl0/ZbC8YpwHnLSk7huFAVRfEceD5F085OjlGSYNRGiEEMQWUUpAzbd3hrCPnzDQNjFNPdAE7JewUSSHSVBVd3aCloi4Vi6JAJQlRIoWhUCWn3QlKFIQpshtG9FIu+fz6wDgnXFrw5cWO7f4Fr58kog8EMRLEgs4YgujQ5X3CYUCYAqcMZQykYkVwiaIqKYqC3e6SxUoRw0y0FpsL7JCYd6BEpDwCWRmOlEGSGSpNLFb4MlP3kaJbUZ7OHJ5dYmVFHiT6Zn0gIRimESEEQ38gOc88DqA0qYhokdBS8v0//R7ee7z3iLICBFnIV0ZOSDKJGD390HO70ejCkLPAzZ7bzY7SKI6PVmAiSUskkUJJjFQIKSnLEqEABbUpIGW0NqAj2nnB0ekR7XmNUoZ+NzPc3nJaLQnaE21i2XVcfvk5v/e7/5btAG27YjN5JAqhDVpLchbE6IkxEuYZa2dWdY2WmtGOBOeoio4CwZxnbPC4yZJCSfCeQOTQj2z7A4umoq07xv2eowd3SGJGjvPM5AZMVSKQGAmESFMYgpvZD3sMgftnJ/z+7/8uX/+lXyDnjDEls3eknMkkEhGlFMfLFWfHpyyaBSJphv3E7rYnx4BRoGSiMgYtFVopmqpgmiZyElgXudn3RCFpqpIwzVRVheo0crQj1vZkAYP1WAfjYIneUdUFp6cnuGFP8BOP336TR48fMs8z0QdIGVUYyALvPfM8M9mBEAJSaoTQECXaFJyennJ6smTZlZRGIDNoqRiGgaIsmeeAy4r16Cm7JW27YNF1pAxz9OiqKhDAaB29C5gA0+zo93tiU5C0BuuZUSADymhijAgBSimcs2QMKYHUkmmaSPstZaWJAcZ+QmoBCrTJ6JBI1iHI1HXJ7W5CaMX58zXtSUGrBVe7mdHeUNc1ZV1x2PPKOM++Z3aBOWSkhNE5yrollpJsSpR16FIzzJ6yqmjqmv0YUNogMkwhE2NGSsk4joS+52i1YHaRlDLdYkUOkapQxCQxXiHniNKSotTousTUsJ8yNybxh9/9gK+8dof+MNB6y2GY0XaaUYVESkUUkigEV9drhBDkkEkpoYVAKYUQibOzM7SWlEYjlSTEjFYFKYKUr/5pDAGtNSFCIRXaGLKSaK0QMlGWhnyYsNYh5SvLvDo64fL6muAEw+WBn3/3p6kax2EaOcwzepgdrxcBHUeMbnBJ8uTHew7xS3RewUERF57d/ob/8h//Fx88ucSliBUJg0ZhQEFlJKWUuFSTZcO+P2Cqlr2DaozM80Q0geAFOWmkKFDKk3PEzge6Zcfzy5kxeb7+1Xd48PiMDz65oR8nCqHQx6dnbP0GXzfYvGXYXfNnP7hmvf4Kd08KMAqxb1ipjtzD/uqWUkroKg6HA4iMrlb4wwEfBTkoarUgD4nsMgUF+ziRUiBlhXeRhKQoChYNpCy55yLnN1uOF4q3Xzvm57/6PsE6VIZKKop2gby9vqApV0y7HasysqwgBThMmr3TjFlyFS7Ix5Ff/Z1v8i//9T8nppFxv0XFSJkV4XBDKR2LRhD8iNSCIAS9ndjsN1zsblkPI7eTZe88U4xECbrU1G3NsmnYb27AWYiWy4srvvedDznsevzUs/7yHPHv/tVv5kTk4xfP2E8NpSxpVU9bCaIomOKMVjWKTI4BoRRRSXz0aDET3IAxC6TUOOvRZOI0YXSNp2Cwmeg3wCu6OeeIORMi/z8uyLLFekvTtdRKU0RBnCeSEnjpwWv08+sNoUpc3N5SlZpxjAiT6DfQdjXbw0AjItoIUsr45HEClNFkUREDmJzRlSZL85eIzYSc6f3AYQ6IKSFSBiI5S5KAlECbV7XF70dMAevtJUpoGlNTlhVB9JgiY+QJ/w84x2h2NBTi/wAAAABJRU5ErkJggg==",
                    foot: "data:image/png;base64,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",
                    head: "data:image/png;base64,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",
                    neck: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4wEDEykS2k62WAAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAASCElEQVRYw0WZa6yt13mVn3n9Lutba+211z43+9ju8QE7Ja4bRziJDG1SuaRtoFUbqS2BSvwgBQRCUYGGEkEILSpQEiJQWxEhgqrWiQhFrRqFhEpV0oubJkqaBLuxnRzbx+eyz9l7n7X2unzru80bP7YRf+ePqVdjjne87xhT/PpH/l66+40XqDeCtltz4eKE3I4IIaBlpGsj22bHneMjvvNNj3N4fEg79OyNK8LQ4/oeoxQxRoZhwDlHMSpRStH3PcYYvA9473EhIJQGIYgx4mIgpUSUIxIBJGhtUGjq7RotPONRRuszdHADQwYnuy1Hx3dZ+QV9FxmVe9RNjdYZjdMoU/F7f/ocs3NzThZbOFmRK0PwA7keI6UkRoWLUCT9eqEBYzSlKun7HuccSQBCkVIikBBC4IMmRkAJlFKkwREHzcG0QglDCA16vH+R6WrJH3/pVX7pw/+BX/zIv+B2vWV5eIwpK0yuYafIRznrbc+Ne6cU1Yi2bRnlFc45QKCUJPqEcwkpOwB8cCg1EHRHCAEAKSVwhmSSAiEENniQkGRCRAfBM8kNe1lFS+TexqPvHq+4cXiXwQs+/NFf5Wc/8EH+zj/8p0wvPMCq6dg6yIqcQWl2ymCUQKmcRgS8UAhraYYaIxXSCJI2CCFARJQqCYASGhH9WXFCoBCkdIamEAIBSH12llJCeEhGICxEHAGF+mtvf+JDKMmN62uOT444uDDm6Xf8Ff73575AWRaMcgOhh75mbGBqJfQ7CiUwBFQK6CgYGU0mJYXSWMAiKJRGx0RhDTqCigkbIReKXElyBBkCpS1aabS2jPKCTGpyEntlRq4SbdMjDyYV29UdiqnC9RXPPPNbPPTIm/ieJ99Md3STFFua7YIil0jhOV0do2RCCUGGIpcSFQdU9JgYyGLERk9OJFeRKhPkWlHmmpFRGByZ8pRWUuaK3ApyNbBnCsYior3DhwUmzyhKg1WSwmaopx6/9KHoDbudpm43rJoNn//CF/nIh9/Pn/zRl7m32WDG+ww+w6cMoTRCK6TMUCYjpgBakefZWYMkj9QaoQRIweAHRHJYo3ChR2iF0gaEJkRBcOBCT/A9zW6N73NkApkiB3sZ03IPH0EaKyitxbeOtovkoxmDS3ziE7/Bv/rgz3LfQU4YdpT5iBQto2rG4CNKaaIP5FoxGVmsgXGVMSozxlWBVhKjBZNqhDUQYo+2Cp1nZNUUITO0KtCqwNopWmfsTSqsiMjkEWFACchzi9EBOd8/h9KnSLHDyDk75zFZye/81h/x6vVv8Y/f97eZ2Zr2+BUujDJiWyPDQBwGQj8Qe4cKidT3DNst86rCpsReUTAtxmTS0tYdVTFlu+no+sim3iG1Yr1ek6Kn3np8ZwnO8x0PV/zbf/MzxDDQdx2kFiFqZDGaIGWDiC06ExTjkrpp2ds7z0f/08cYmsQH3//3ufrgmNAdM8kMZVYilEZlJZsu0raBtol0Q+L6jTscnay4ebjg8HDJYtmiGHHr5oL5/iXqTUPXtNx49WUUPUO7wuqGlFb82Lvfyb//d/+az33usxh9RiXneqRMyL3ZHGsqzs32scWWrMgoi4o+rplf+PP8149/BuclP/7X300SNT70TMb79G5AjTTZfoVLgiAVSVlUlmPKMUOEpHO2fSDLR0zGU44Pj6hsxqXZlIcvnyfXA6Ni4PHH5vzyr3yA73n7m/gn7/8F/tdnv4I2FVprQJ5R5GR5RN95lJAMrsFFj0iSPnrubVpkNHz0Pz7Dz//CP+Kn/uaP8Mnf+Bz14ohxJfiJn3wHT33v27lQnWMYBo6O7rJaLem6gXrX8anf/G1eu3GbXe+YTqfU6x4VIs1qR5kLSjPw3p/+Wzz22GP87u/9Lv/9f/4mi+WYyXSONCVCDYwnGT0R9cPf/8YPNesjkh/zwss1fdagYoYIls431LsdvvV84xt/wLu+/ynaZcPizhE/9Td+kL/6rrdw5eoFygSF6hlljkeunOfqlYu88Q1X+L63v40Xn/sKXfLsdhtU8kxGOYUKPHL1AX7un/0ML3/rm3zsVz7JjesL2sGzqnsm8zFFNmYyclRFR5IavdtumVhNLTL6tCV1ErdbojAE5bEp0ImcVw8Fv/SxX+Y973oP8/mIv/y99xGHFc998WWKNtDphl3bILucPKuY3Tel9QOPf+eUW5+9ziiTNL7n3HTOT/zYj5NNLP/8X/487dYj5EVOjo6oZlMuPzBjszjFFBIGQW4PkNqis8wgWkc+kuSFohUD1XRMigprJVcuXeaV20fMOICTjP/28U/wgQ+8l7G0rF57lWGzZrnZsN71NA1kSVKJhng0Qowv8chD382nh2fxqeTqlcd42xNP8Pk//AovXn+ZIWjKao/ltsVMRqgiIyVBOZ4QI0SfMMrg0eimabDOcXJygrYZ2kgGlxgVObtY8/y3XkRmFUebDZWYkk1qXrv9IpfGBXHVMCzvkvQMXe8wuw5Z5gwKjk82PLz3ILNccOn8lK2f44ec//LxZ1DKsGoGyumY6E/ZDi1ZYal9TwoJHUH7jv1yxNAO9BF0mY9Y3g3curXi9s0lO+MoQkaWDTS02JTo0ikxBiq5Y7Q95NEr7+ZTv/P7lFpxfjTg+47ceIbU0TOg8glu59CLJQ89dJEoe167ecymWaGlByIu5qy2HVoMSAGuH/DeI6LGInFAZgvqpqMNAa2FJUZBkVcomSMQaJXjBoGPgaocgYg0GJKueXByH6LuKM2IL/7pNSZjxaXxMZNLl1lsPSoFbnz7Oa5efQA/7CgKyblLB9TPL2h6x2SqyW1Bt3GMKwvOYVVFJOBJCGkwQmJ0QhlN3ezwFOjRaITSEWNBSE+eSVI7kCmLLTOG3QpdZKhOkdSaiw9eQXcd57Xlu64+wpe+eY2lWGJeSchG4u6e8CM/9DSN37I8uklY9Vx9+DJS3KMcl0izZrlakOVT+rbGCkHf9yQFjogggVI4LWiHFq0cSZdowYCxMCoNfVcjs7OloNk26BAxJHAOHQNGBC4cFLTNlpM7pzTdMU8+epkv3KrZvPYqb37wIf7Bz72P67du8tU//DNCs6Rtd5wbl+BattuB8SygtcVFT9fvyFKJCzVJRoKQWG3xQjLJM5SSzPbGdLFEb7enGG2ZTveIEXznkE5hpSE3Et++bkcySZ8Clx+Y4mPA5TNu3fp9nqwU92fnmIwjP/1338uXX3iWZ5/9IjpknD/Yx+/vcbnSaDcg4pkLCMmwbRqU1rSdZjA9bddijAGtSc4jpKXIFJNxgU0TdJccmRbkORjl6ZJkXE2IsUMVEa1GRNWjA8z8PqYYocwCWUUO9h/lj194jSevXuGJH/pRfu2ZT/En33wOM0k8+uAVkhAsr32LeP/D7M8tlZ1Qu5Z62XEugZUSMQ6kCMqOiRFSTCSTsMoTgyNFgYod2ipJCIK+c1hr6Yl0/Y4UexABmwwxCrJc44c1s4MRIa5YrzsGFzh/aZ9q/gC//snf5vlXTmgwzEcTXDtGFjmLVcP0/oBRsO1bpBbMphUqBqRMCKWx2R7ReVISSKHxDGiZ8H5ACUEbEpoQqXeOe/eWON8zJEfjBrRKhC6CECAEXVqjUoP3PU1jWd5z5Pl9lJXnf3zm8yQRePoH3sm3r9/ipVeuMbUdTZ6zG4ORktGo4NadDUPyGCSKhJaAtDS9QEuF1hrvW1IYyJXGDyO6pqULAi11Qd9FNtuOkBJZrimtxmrDIBzaWXSe6GNPWRYIobj20jH1ZsTR0RrnlpSzC0Q23Dx8njf+hUeYn5Nc+7PbHB42nD83I8aIlJLtukHmFpsJYggMPp45AK3IrKUQghgDCIEQihgkbeNZux1S2inVZJ8sK5BSIhQkKUAkjMmQQoEYEGiWixabSbp+y83D58hzx3Ri2T83Yf9ghEwNJ3deIVeBN77hCsG3bDenTMZj9iZTpMgosj2MMUgpKYsx8/kBZTUlRei6nhgTUhqiVwgsxAwfQPdBkNkcY3uk1ATfMwweZEJLiUIipaSrPRerKeOx4rHveoC7PqCVwxpN7w2+LyBWdK2n3qwgNMwrS2kSSgn2ZmPKfIRUFujI85xcT3DRYWQCHSCF/5+4SIFQBT4odk2N9tGzXZ/Stj1SGYwR5NKiSSA1Shl631NVM8KuIfqec/MZf+ltUxaLUxb3jpkKyXYFipx8b0zna9aLLRf2LzGfDaTYoaWnrjekbqAat5STKRKJc56UAnmmMSYDYBgGpJEYa2mHgegF2g0Nu2ZL05zN2j44TJIIqQixhyRRmcT1A8Z76rombRWv3ViS2Zz90UXa7YYqUxAisGG2JzjYm2O9QoUe5xsQDmMUZpSjdMN2u0Z4h8o1UkSapsGoRFGNkCYRhQMRCSnQdR06BkW7izTJI4RGpEhHTVZUpC7Q05G7gEXiQ8JvNYvtPV58/ohv37jDY49e4TsenNBIyDLJnjWsjjeITGFyx/mDChMCSeRELfF+ILcFttSEqAhekJKjrApspokBRJAYo6m7Hhl7Ou/Rm2ZN4CxaKbIcKTR5XmCEJDeKGMGlAZEEsjTUg0cCV95whZfu3uLu8h57s4p12yOF527qqGuHsR17mWTf7OGDAHEmP8ZYMhNIySGFQghICKQ4i3RiTHgfCCkRnEfIRAgBKSMobVDqrBOFEAil6J1Ha01mFIWdYIxCKyBoYhDMDyZc/XOX2e12fO2lQ1qfs1gNHC0aHn/bU7zlHU9zuus5OV6i7Ii293SDYxgG/DDguh6jJPPZlIP9ffI8RyRQUpJbCyISo8doRZZl6H7TYssxQnp2my2DighpsUpjjEGkQEWJ8DVRCGIboIfF9jYPXjyg9BkvHDVcv3UPTctbn3iMaT7l05/+DPNSUc6noAsWqzVJCKzVZNowuEgKASUTSUhSSAihsNYgosB3Hi0lo9GI9bBDC2WoO3+GqBBYY2jbHq8C0XkMEScrar+lRLA6bZgWksXihCYG9ucPMt8Ivn3zNfb2c24cHvK1r32dCxcucG5m6NyOIUiOTk4xmX5dQyNaa5qmIfrAeLKH1hZTKEiSrmkYes/g/eupn0J6HXERhFLkNqMqyrNsMyaapqFpajauYxcc667n9uKEYAzlbM7aeW6dnPCmhx/gYFoy2Z/xf669TC8UIQkmZYGKAyEKNvUWIQS9688W8vGMyd4+eTUCabBZidI5LkR6FzAmI8/LM/5KeSZPQUi225rVaon2BdJqrMlQWqJjhxcRZTJkiuzaFmNzOr9lvW1YHB5xPi/4wXc+zX/+tU+Rl2BHU5zSCKspyfAp0rmBJC0xeVzUDCHQOYeQkfWmRylBJDAMA4TItByREHTO4/sBOVKGlM5sR2EztDwj7/+LrbWWjLOMUuVUtqLZbNEIlneW5KrgrU88yVevPcftu7d5z4++i3m2x+HNEwYkq25AGkvXOwYfSSmgrcUYQ9P2rLc71ruzZ653LbtdS9cNdL1j1zbUzY7dbkfbtsjBF8jWEbqBIQrqXU9X14huRWh2hMawaV6/gJaXjlY0wXCQJX7gzW/F1QO2mvClrz5LUUSeevK7Uc5x6/qrnN5bIGRFt2yQCrqUaNcB4XM8AmUsWZ8RpaaoxoynU2xZIEc5XgpMNkJGg1AZspxaxH5FZ2EbO4r5GKcjrYz0RjBkMAhL0jl9kOz6gNSK++6/wJe//AWOj68xn825eOEiX//610EK/uJb30LfO043LUmX3Dg5ogkQSHiTOB22nA41jXBsUksXekKMDD7QDR7vJTobE5NlCApPQve1pzAVOMn50YxZOWfXSMZVhhAKomDrGiKSqpzSrxuiMgRjmd9/kXFSjIspEcd6sWB37yYoy6VZyf64ZFqOefUbR0xjSRoUOZochTQSgSTiyMcZZW7xfiA4i/MRlQTr5QYVB1bdBvGL7/vhdLK6hQia9bKhzEtm04rONa9/wTiy4PFJIjB411Iaic0Ux6drVFZSqBFReKJ3JBfBFGydo+9qdNeRqcAiQhsUmTBYKahdTUiJAkOvNJnVSAlCalxMyAS5hJGGui/Ru95x+15ExkCuZ2zaRN31DN4jpUdnOcp3IAyRgBsMalDQKnw6z7CLFMYSpabrA6lLCBM47T3DIBG9IrqAqSqaziN8QqWICwqjLJ02CJ3omoAgkJcatEYrQUiBZDK8h/8LPEiwk8JqXXQAAAAASUVORK5CYII=",
                    pants: "data:image/png;base64,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",
                    animal: "data:image/png;base64,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",
                    right_arm: "data:image/png;base64,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",
                    left_arm: "data:image/png;base64,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",
                    work: "data:image/png;base64,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",
                    quest: "data:image/png;base64,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",
                    bonus: "data:image/png;base64,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",
                    useable: "data:image/png;base64,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",
                    buff: "data:image/png;base64,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",
                    craft: "data:image/png;base64,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"
                },
                gameEvents: {
                    xmas: "data:image/png;base64,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",
                    easter: "data:image/png;base64,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",
                    independence: "data:image/png;base64,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",
                    dotd: "data:image/png;base64,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",
                    oktoberfest: "data:image/png;base64,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",
                    valentine: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAYAAABb0P4QAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB94BFA0UBCfgvpgAAAPuSURBVDjLjZRbb1RVGIaftfbenUNnpp1OO21lChgolaJUCEFThSClSjwRjTHxVi+M8cILjdEf4I3xFxg1MXiDhsQLSUw8RFFELFhKDwhMYSi0My1zPu6ZvfdaXjiToNHEN/myvmTle/Lmy1qv0Hfe4y5JIABEgSDQAopAFVDtu0j79IBKu5wOwLwLZgJDyghPayP8PNLcglJ5oezvpZv7GrStzOh+bYSmpOHfDMJG1WdEK3sSZV8GaoAWbYcmkFBm7PWWp17O3Z7tK2/cQdFLbOueat9g/zVDqEalxvbsjZU+t1Q3/PGtxEd32AErPycaqbfx6jOA3QEOKDP6WtNpvpm6dDxSvbVMPCsx0mHyvhiNid2YkR7EygL9K1UCpSHyVoD6/r1sf+oxJ2Re/1LUl98BUiZgIowdngy+kk0dj+CfY8+DJua3/VCLMZz1k0nP4AYd4iQI+J6EoXEGWnVu/nyRVOR3a2xq56Euq3QIJ3vCBPza6HnULqUG8/kFxic1ZtKCugkFH0YzwSYxCnYU7t0Lh/bBSA8sphm5qFk8O0N5YrA3Fg0dFE72lAQspDVSL21YXVUHaykK57thTUHBhbSClRj4dsHBHXB4MwyHIAwyGCFWklRvpQyENQL4TcDTWhWVF/KcdFRyYxiuKVh1/3oQxTLaKYJTRaTvwA8L0NJwuwjFHKZdpVovK60HHQHaBGzhVc4F+rYUKs5w3C09gJmroRsNqDfQlRa4ZUjn0YsZRKYCWiByNXQmSda3ihUZ9/CaKaBhAo5Q9mK4p3/eGNo+lVZbGQnH0Lf+gFoW7ZTQTg1W0wi/gIEQQgONAoXib+QOdLN7c6IgVOksUJOABtalV/ps28NHCstd12keexxx4Am8gftwfTEc2cIpXsdJLuFeXoLlWdzULySDawweecgOBZo/Cjd/GrBl+5c0hFc5HYuHzvSNxdVS7znEu88inp7EHRyi1S2xSdMqz6M2LqBWL5AsX8GbnmDLzm0p6RY+BtKA6gAVsCbtlffHJx+5ahfPcy31HeZEApnwowI2nq6h3ALN2jrzTpbMM2PsOnY0Y4nKJ0I1ZoFmJww6stHevOmtf7D38PRadvkLZq98ittfwOoqY8kWJRRn/B63Xxjn/ldfyoYinJRu7nOg0F7d38IBoIyT/8rXZZj7jk6/cfmnc2O/Judkb7BIM+iwdk+Y3ucm9f4XD98Mh/UJ6Wx8BKy1kwcA8Y/46rjuQXbtUdamt3Lr9X2ZCwvRRqUpBiZGK4nRgaShyx9Kr3gK2ADcu4f/DdhRANikzdiUlsGDaCy0PSe8yjdC21eBcnv3/F9gx20Q6G739XY5/zXwJ03F3+5EcNvyAAAAAElFTkSuQmCC"
                },
                currency: {
                    nuggets: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4wIPFBo7ZK6Y6QAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAACU0lEQVQ4y8WTXUiTURzGn/O+73znO1/n3JcfyzmpVWKEUYJIeTFLJcMuCiqIKInwVgq6regiqCCE6FKhD7wIUiZEI2N+plNQzKWZWk1N1rS57/m693SjsZUWXXVu/hzO8/z/h995DvC/F/unQ0EJnmFIFsuyokoJUpRNJF84VUO2Mn7vAc/GdtUodFmnOY2+msugzPLrweyhrhXHQK/i3K0Jybft1PD4xcqw3eiQfA8ppS3UP1FNnx4GHWpkqDRdTHuukqFkPZO8ib/KM/HCZItQ+6CKU4UBKBAcG4XrA8GhehOi/kxUXNi7lHx7LrlBlKSXw6solOVPIOAgYA5vumRIBoIX7QEcL49g0WK1bbCTUyCuNGOHUHOjX6ndjbE715DwOKGQBpCvY1CQA8x7E3D1BZErrjG2nLiibVTuSmlw5ojenl91zLzwvB0GYRbmExYorZVQ78yB3mhCkTqIqaUIXO/AfF2M7a8rZTodU9T7k4HVVljQWn0F050OaA+KkDP3gRiLAY0GfEkpRLMaDU0NmJkJICCzaiGNE1MYcFJ8vMyWYf7ijoEk8kH9KoCdRVg6itDIY6wuaDDc24qztSI8c1G8/7wup7yCWyqrzy3Rg/Ay+hxexMIGjNztwMfmRqR9GwS7Po1TTYWoPLAGTxCP7rnkt78FaemZ9nqvffW2IIKx6BPQFgjQ59Fggktb9S1zkrM7MvekGzc73BHntklsu5R+kg9F91ScL6I6AxOf9/CjL+9PDl/uT4S2Ch75h39DkvR0s5K/GDYr+4uZbPDjfgBJsNkBg0DurgAAAABJRU5ErkJggg==",
                    bonds: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4wIPFBsmHrPFcQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAClUlEQVQ4y02Ty08TURTGf3c6M7SlLS1FqyAoEFExMdoE64ONGONC/wBd+Re40rX+Ca5cGFdGY4wudaEbH1GCj/ioMcZHBIFK29SQvmDKzNw7LriNc5NzT3KS891zvvt9gv/H0GHqsHUWgAJcHR7gd5vMUKMF9AAxnXuAPmByM4uXEFSAugZUhF6wgV4gAfTZtlWIW+bpAKamC/mMZZmRJ89mHzquf01P4IUBIkDUikRG9k2MXrStnrM7hwez586fYc9knuWVMulkkpXK5RMfvnx/5UtZB9Y0yP/xM4no8atXLl24d/9W9s69uyT6d7BSrXHz+g3WXZdDU/msUmoCGNDriTCA7fvS3Dcxxrs3czQaDZLxKAOZNIXDB1hvNEimUsIQDGuAqO7bvADhe670pcvK3yq+lBiGYN1xGBjaRalSIZ1KkorbBaAfSOr1MYAAUC1XNedeF/E6G7iuRy5tYxgGo7t2cqRwlLHdI4yNj+aEENv071hdAAX4Afx++2p2qTeVpNMsYcZzOJ0OvlRkExFQJgiTmG0NAynNg2EAUgujvdpsPxrfvpWv82VisTiDA0kAlHTpTfWhpM9QLnsyBCCMkMpajiudWqNJ8dN7hDCo1dv0JeKUamvYdJiZmSaQcrvmIBbmwAec7z9+fWuuttZcr4Vp2WTS/bTXHTY8DzuaIH/kGEq6vXp/syukLkBnoVT9Kcz4R8uyp53GMkakBxUELC2WCALFy6fPpePKF0AL6ACBqb9R6kK1XCkvTu49ePT2g8dBubSkluYXvGLxc6Naq/9se2oW+CFgPoAmEIiuDjQpKWB/zBSnpAqygTAihhCtDV/+AcpABfgD1PQUrgjZOaJNlQa2ABldc4G2dmEz5AMF8A80UA562euhuwAAAABJRU5ErkJggg==",
                    veteran: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4wIPFBw2TEVD0gAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAADUklEQVQ4y32TW2hbdRzHv+d//jkn9+tJ06RNutpmvayNlLVRtqLO20AQdAMZ+uTD8MVnwTcFkYEOURAdbMhAO0UEJTKZOCzFiXNrbdLadKYxtzZJk6a5ndzOyTnxpRveP/Dj9/CDL7+Hz5fFf6MBYADAEUKIUU8VSVbxfzAAyMHWTo/1eVdDZy9+feG5cwD6ALAHt7sDAKAAoOVY3YngAInEKk5FVeluUYTTqr2fcw4+aJBpMzhuuLYal9IOm5YxaKloNpDKL5sltdeDRAHgpdOHbUen3Atnnx90W8ycurK62S5V2ylAsaiSKDxxfPi1l18cdbtcDmVvr0xr+7nLLqvmzVOvLIEC4BO5Oj88YNqTtXQyePIRZ63RKATQpJTlnZ1ul3k0ODDKCB7BKHi525Hvkhqp2Xv744QZQI095LMLZ1546OlUSb9T34m1FDEeUBi16h4aIi25JYQjmwzDkDolXV08+lt1O1f5jFj7C4f9dv0PN9Np5szpGc+515+5LliE8Uoph9vhTJehFtpuVSHYulhfj0JSBUwFjkJq7iqTE27WSBRk8sW3gk9depWNRvPdxM+/btgdGiGRLfbzvFbHmo6g3VFRKabQasnwTZxEoSQjvLzUCy//no3dyV9+973vL+7WlRJLKIPodiO28NVaZMaLXjab76M6h31s+hgWPvkc9RaPhx8/hdAXV9qVbOwWkeULb1xa+zBT6iQ9gp6wPRWqxaIhnY66f/1WMTUzYjENeoyzvNlJEvE0Rv0+SJ0GyumV/N4+3v/oauZLAIVhjxGpvKgSAKhWZRWAwrFQ5uaD6PfY6Y3Fawgc8cDjMuDmjavg+YbWLhg5l8MqAeglsmIPB+bdU/fZJ8dMJgt3rFCuYWs9jH5Bo8pNESZNE2arThjxmY4/MO3g7gr49wB2LjjuH/I65nLJdMamY5ea9UZdrJSLfSbLotftEedmR+ZNRuoHoP5bQE9sNa1Uq1ndXMueX46WP0gnij9up0vfXgltnZdlwzt2wXZHcOhcgUP8X7twgBxP5hfDG4nIp6GtWE0FG/Dntit1qfXTRjnl+GZrhddzoWanW3J7BTWS3PlnHacmbGT4vnuNJCcmWXZ2hGNBeAYAY9OAPDbv+/PX+AP8fWhDCu8eeAAAAABJRU5ErkJggg==",
                    bonds_nuggets: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4wIPFBkvVVkfVwAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAADLElEQVQ4y2WTvW8bBRiHnzvf+Xznrzjn+CMX10nsNGk+1XQoQ6ESLQKqNqIgwYqQUPkHYIKpAywsZSkjC0sQFQlFDCCgVSshqlSIBIgLiaokdezYjuNczr7z2cfiSJF4pWd49X4Ov5/A/0MEfIAEyL0coAu4Pbo9PN+JIaE35AdUIKj4hDMdjzDgAYEe/l6feLxAPHFNATQgCiiDqu+LhSuvvCs2GxdbB0dGC2ygefIzwUgFA+fPDoSMlBYfTAZT4ZBs+GUxbZrNSMMyPlp4820gQBc/Pyzd5ce7y7utZuunPbN55++d6kPh6qVMfG5SH0wmgmNGwj+V0TuzyaQy3I3I/QcFYaTwTMcKZBkdmwcpyNzsPL8+us/6ykrtww9uvi7lh6P96aQ2dno4eGF21Hu1zzibJWQEfv/kFqlUmQljlFb/BD7VoyNIlIpFHvx2j2uXFxoWN10xrivJdEKdmEjuvqRPPz+uZN4LbD6u8OWtbTQjTe7lFAm9A12TcFBhv1GjWi/hWrbbBkcKqrJuJLXJ1MzV3Ob3a3iltwiEi+Reg8XPN7hQaKA8N0RowCDaF+LPf1eJx5Lc//mXp4ApqZoY0TR1sLjmBeTCd8Qvp9BOn+PGpRpPvn3G0pKJvPINV94fRxS7bGxsMDUxw43r79wGmqKs+IVWtSSufPoxsTyEzs8jxhYQI2+QnZshqkmU1uuENZVmy6aNyZn8NDWPbaAt2ZZ75A+pB+MXw/yxGuVcXmZvfRHpcIu9SoUXX3D4KzeOTQTHtKjUK2wX/gGoAa50aDrV8qG2Fo8m5jYfbJzK9C+TSHexEnH0zDQVJ01mZg4tMkK5eER2aITlrxfv9KTsSPWGXd58aj1yElnh1PWhSTMuh57UxHlFHYsK6HQCfcjEwadTPdgmkx7i9r3PvgLagCtt7ZhlSRJpWO6hovlXvR07tl88WtvaLFyrN5x+nxJTh3JTxAYeMzKaFyKRKG23XelJ2hWymZAybIQVLeDTZEnULNtVG2bb39hv6ZLny3RsR281HcG2Xc9t02l22LUEHnY89gFL6LnQd8KNx8Y65rjmAR3AAVo93P8AkTgykLfC+iAAAAAASUVORK5CYII=",
                    dollars: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4wIPFw402PnsdAAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAACxUlEQVQ4y22TT28bVRTFz3tv3sx4PPE/YseuHSWN0sgkhU0LiCiIBRAkNgj1I7Bp9931S7RSP0mlqouqCNQmqGorQAJFCEOVOHHsxJbj8czE8+b9YdG0spLe7b3nJ5177mW4WIQQOAub9dXG+tymV8+WRq0gACDP+mZ6mJ0TUwAePO/y5S9mf1z7dOZ2rsSXY2ojW/MASmIxEmIaMg1gPMfztY3qxupm+Wbz2sz3H37szfl5q1GoOtdnF7wlZfNu/8/hHgD1VmRN6am3XGw2Py/eWr3uf8ctQuKxEjIFW1jKzMeR8rr7yTbgbAOJuACwPrC92hX/k5WPsuvVGqevtsbBjM8QxsaUKjybLzDjuNQCKJ32/A7AGbLZPGvki5ZfLnPYGSsjFGR0IgYH7USV5pwwmeg+kCbvA5BEYDw4FK1eRwyaa27t629zvNuT1i+PReafF6NtEkwepoHYokRCm/ekYITWsBkRzFqShjbrdRvlMifliu1minZFMItHJ7IVdeI9AOnFFIxhk6PTOBik+539VHUHuubnLL9es0m16mS4a83HKWQoyUvRi0fTAAuA9souW/iqtlhp5r6MuqcTIYz0S87y7mthoAgqZdsJQ6VHA/nrqBW0p3fAAUi76LjF+ew3i2v+nbjp9w9eJ0MtTbi/NyHBSNlX17Iu55SmUufONOlbAAUAEcoMpSg0LnEeF9l871C6UEbN+Iz5nkWGQ5n0u2InOIgPzx+SAQBDkCYTHcWRTuoNx6WfkbmcT029QcnRcYq/d6Lf//sreBTuDHcB6Hc7IAQEgLI41TznRP2xLrQ7aVEDxnWY1/p3cvLb89GDg1eDu+2fOj8DGE8DyJkFzRzKVKL5mb9LKzcWf1i5Vrhx0kuePLu3cx/AMWVEa2XS89/4xoIyBoAGgQEQJsK0+iH+6LdPn0a74zYoUUYbef73/wcw2zvOc4eiEwAAAABJRU5ErkJggg=="
                },
                menulink: {
                    market: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAZCAYAAABzVH1EAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4wMdFR8f42hU7gAADjVJREFUWMNd1u2PZXdBwPHv7zyfc8+55z7NnZmd2Zndzu52t1tburS1GFpaWtsUeQhPNQbFN0QjhETAYkkM1AKKIipGDBGExCCIIIgGEHBpYaF2odBuy273YWZnZ2bn7r0z9859OOee5wdflKDxL/i8++Yr3vfWm8vR5T7ygaNsXOlReh5Ws0IeBuiahWFHFLnCe157D1k+IEkDkjJFCIe//foqZu5hGRUGA4/13SHjPCeXJaqaiZ6XNFyNG483mV5JYcli/VofdSKjWgkaBlOh4zoZaprg2PsZ+NcgLvGSDGQDVfGxQo1KvUm/32etNyCgZJpEzM20yacBc66F+KM3vaQ8fvgED3/is3S8Eq2USEQBpQBUCllDLXzSUuHZT76F0XSAJlnc9a5/QUMQCAlR5ihCIhUFcqFTipjFusIj7/xNes/8kLjq8tKF23jiyml2xgF6YYIyRaARSyp5plKWU/70fW9E9iMKPAphE+Ypf/mpUxRqwXQ8oaLqoBqkRYohlzTVCjddf4T1s08hH1pwH/2vx5/lhZ2YVs3E1DRKPcG1KliShK3HGFabhu7zxe+e5y33vZSHPvQfSJbGnKGi1FTqtg0UGLKFUuZoMoTTnDhOeP29xzl19hLfe/wZMlVCM01s1aIoI3IBsmXgxODoOU89cYY77z9OFEoIKebvP/MdzKKgVFV0wyBNUvJMQuQCkQlGgymBH3Hnyw4in7j7lke/+cTPaDY1LEqalNTrAktKMMwE25CZqUhYpsSsLvH1M2sYioxhQNWymDcL6poCUYBt5LQaJs16jaJIWV3b4faHXsNo6rO6PcZyVXQktKLAkMAWGnkSIssxeibj1FROn17nttsP89nPnCSVVGTFoqaDrQqmXoChFphVE0VTKMqSzW6HxVe8AmVpcZ5EgFAl5DSjOT+P5UoUQkWUBYqs4EcpcVRSsEecqKj5kDoaHT+lrpokBFSaBmEYUmQ5qiRwKxU0dcql73+D2aWjjPOLLCFIEh+sKma1ShjlGKUKCmRCoe8nOBJ8/G9OkuUT9Fxjz49QDIk4DqmYKmmSkaQjZElFVQrMisSFJ76LEq6fpW7ozLk2h5bnKdOIpmty6w0LtOoO4yDnwpbH+St7dC8PuG6+gWLNMB3n5HmXgTdC1UFXquTEaJKMSkqpJRRyRiO3mGxvYKQZjtCpze1jOg0pZZmXnVikUbOZhAWr2z6b10Z0ty8zN99mxj7EcDgmHo0JRkNUQ6coVVI/wlQtIKeQSgwqNAoNRfbGmLJGmXjMzRxFsw8iypJLA8FPtnx2RyHTKKMilwQJ1NstDhw+wk6vh+f1WalWMU2FOM6Ym2lh2xqD8RjCnCITrNywj+eevwiJT5nZVN0D1Of2I8qStT3Bs9tTBuOIaZxRlQv8NEevOrj7j6I3dvH9p3GMCpCjKjFG3UBTdLxhRDcKSDM4dOw4ittqIRlDGq7D0bbgwLLBpa0JG9cmDAc+w+EUVZHJdQXTdVnbHvDUucc5uK9GJldYObaAKHIuXVql2lQIPQ+l0GnZDTQlIBuNqDZMSkvCtm2OzMDCgs7lbY+trsdoOGU0ClBkmdSQMSyb9Y7HD392ipUFl1KYzC4voYmCyWCLNEhIywxZLpi1bcb5lHw4QslMh7gMELHCuU6K24jRFdAUQcXQ2CVimpTsTjPGQcmNi00OH6kRhhEPve5udvbGvPD8RTTTpdMZYgoTRWQY1hhf5Gx4U4S0TBD9hNgbc+FaRqWaoMmgKoKKrjEgJkhLBkHOxBMcO1Tn9mWXKIq554GX0x9O2FxdZ+Kr2JogCWKKQse2EiaOw9ZkiiIbNfbJKcKskCQRj58d44cF3jRl7KXsTXKSOEQuU8IgYRqEBJHF1e4eH/z4P7Gy0OSvP/oemq19fPmLX+Mb//YtKrJAKQRSIlGlSuFGuCXYrkGaRfzg/AQ/KvCDjImfMvJykjhCLlOiMCEIIkLbotMb8hef/BIH5hv8yWPvoNGY4ztf+xYnv/rvNBoCuYhI/BhLbiNdJ/Xwcw1NzbGklCP1mBl9SlMLqCohBiF5PKUsMh546TIP3tRkuVriGoIkLbnh8CJVs8DQEt700Ou58747CYuMSSooxz4nThxk3PV49LdvIytKXDlkpRbT0gMaaoAjR+hE5MmLxitv3s99xxvsd0qqhiDJSq5f2UfVeNH41dc9yC33v5IgKehPdT7y2NtptOqIrzz8knJ58TC/95f/yZGVeY6u1PDCEm8as7ETcqXrceNSjftOXEdWgETJ9Ys1JAHjqGA4TckVjfZcG6e9TKM9w9t+651c16zzofc+QHcv49TpDZbbJfe88ggf+/RPaS86+GGJH8Rs7UZs7vgcW3S5++blXxiH9rlIAiZRwSjIKBSVVnsGe2Y/jVaL9737ET7y4Ydx5QlPfu80SiYsMknij9/6Cj72tdNYNRtdFkRxxnzN5A2/coSl2TpbuxNmqzrLbRdDU1AUiQOKTBjndIdTJuM9zq53aCwu46eCN7/+Drw4QtU1DFdDlSJ03eTe+2/lmz84iy4L4jhnzjV4ze0rLLZrbPc9Zmo6+2eqGKqMrEgsKTJRnNMbB3iTIec3ujQWFlhaOUwS9FHmK+xlMVIi1ZHznPd/4Un8yYjhMGK9F7C6m0GZk8RTfnyxw6HFGW674QCzTQe7YqBrGnFWMvRjhGrQGUZ43oSnzqziRzGf+Ny3uTLS0Qqb3sVzxMWELNP51F99nm53zMZOyOXBz40k4KerXQ7ua3Hi+v20GzaV/2OMpglC0emOYnzf4/SZy5w89SyZkNFFzm4/QpKzCXe/+6ukqoMmm8RegCVi5HiM5/lc2xnR6fV58vlLnPzxeTa6Q4qiQJJkkkIGzebi1SHNqsGpsx0KZIq8pCwFj7z/c0zKCD/UKCWH33n4SwgqWJMJJiFyPMHzp/R2x3R3B/zo3Brfe+YSW73RL4y0kEGrsNYZ03B0/vv8NZBUpn7O77/jo8SxxpVn1pDvue+WR7/xxBq2iCnKjLCX4hWCUVYCCvtbJkmaIRcpO3sTLmz22OwOGfkxrbrDZm/MYsPi60+vc7U3IvB9BoM9WlWDiRdQnW3SOraP3/3wN6lKEqkSsRcEeKHEMCyQZYWF5v8a/aHH6tVdtndGjKcxzZrN1d0J++om3352g87umHDqEYVDblqe4QN//iVe/qo7UIa7Me0ZldkZjYN1i52RyjSb4KYwmRbEmUualyiKjC4AIdHbm7DRHfLk8+vMtRpU3SrrnQGGKvOjZ87Rdm1kRSXVddpVk2tDjwMtjYNLBcfnZrjcTxCajG45RFlBnBekOSiKjPZzY2fosbUz4kfnNmg36jhVh43uHm5F44ULl9nnmCzNGtSrFdpuBWWwscZ81cZxVAbDKZJeRy9V8iRE5DmdUU5FAyHJqIpEURRoikSaFUyilJ9e2ETSTDRN5rm1qyiSRF6WmKZGEGQMrm2w0/GYqVaYaczRG4RI6iySGJKORkR5wJ5toEgC/r+RF3hRypnVq0iaga7LXN3qsdSuccfROVQ1ZhCH7G5fQJlbXGLj8ZPk1BBBQoSHYRS07Br1isLES7kwHHH+6oRbDzVpVBQEoCoSUZJiaDKJEHSujYmihKX5JoookAWoQtAbFxy8boUvfvsCNcdE+FMCEeLUdKqFAM1gOtgjEDr9Scyh+Sq2Lr1oyBJxmv3C8PcCvMmUubaJIGVvElKpOGzslCiWqWHLgv3tOm27QqkYhNEQQ6ogSRJpFJCoCSUGT6+OcR2ZQ20LTRFIAlRZ4MUlnW6ftluhKguEyJHKAtVQaDVqKBo4FcHKUpvD7QqpUImCKY5uoldV0nHO5WGf4Tjg9LmARs3gwKyNKr9oKJIgRWbsjbnrxEFefugI5y+eYbZu8+uvuo3U81B6qYzuzhIXGkkqUQYeE69PbMoEec40nhCHJbpZ0jQkdns9ntytsrTPpWkJshKeu9ihyAqyLGEQlxhCotnUCOIMkYzppBJuq04qS3iJRuhNGHjb1OsLFL6G7OdESUrip9i6zZW1TTY3TJaXFmjXFPISzq5ukwQeqxem+DsTNjd7NGZqhNE1fulgibj12Ez5k/N7VCo6DhmKSFBshSKvYOoqslFgmBrdbo6r+kiiIClMCkl+cWt0iyudETVToWXIyFKCYtRQNJn1zh533dji8kDh+8+t0aop1NHQSDCsEtmcI5cy3IbAUi2ubg44sjDPY3/2Wv7wDz5PmklMpRRdqrLVGVPXFWYrEWmSoLRm6PsBO709ji9UkT/8tnsfHfZHDAfDF+vg6FQcHb1UMchwigxNqaMyZdbW+ODbH+Tssxs0mhpSXGJIJY5j0KjWmXEtdFsm0U22OkMsLaduOrzp/hvZ7Q7ZHXjsW3BYmG3gWE0EKoYaoyQFjsiolDoffP+dtFB49a/dwtOn1ihRcERIq9mk7mrUTJW5/cuEGFxau8Li7AKuriP++V13lL52mI98+sv0vRSnroOcURE2ajREFlV8AX1/xD9+4NU0pQTRXOatj/wruQBpOqRwLYTqEo4HIKX090puPrLIGx84zuWfvcA9N9WI7Rv4+Be+QvdaSrtlIquglQZKHlPqGomf8Q9/9xu4MuiFiVltEjZMHnzgvWTIpKZJrd5kuN1BEhpbvZC7bt3PvbeucOHiZcRjb76jbFUUNvu7XBkGtJuLpFnOxm6fcRATBREVR/DwG34ZS9XJ5Ix2tY7QM05+5wyKK1BFSZxqGM4Mk+1Vdgud+4/No9oOZ7auMdkRzFkmlwcd1vc82o1lEgq2ej0mYUYUTKiaFdyaRTWMaDgOuZniyBI110G1I0xJwU9lKtVZxtsb9AuJe4/NYTgVnrvS5X8AUin4x32jJsUAAAAASUVORK5CYII=",
                    sleep: "data:image/png;base64,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",
                    npc: "data:image/png;base64,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"
                },
                profile: {
                    duels: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4wYJCBk1bexFJQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAD8ElEQVQ4y21US08bVxg94+cYh/ED4yJeNRgTIHapCCGvJpXSLEJRUlLRSLQkVRdV0/yO/oJuq2676rZVGqmEQhWaAiaAA7axjW2wPbaxPcavedyZ6WZQraqfdHWl++kcHd3vnE+Pf0sHgDEYDJMmg+EqkeVOAE0AMgAGwARtMt0ARTkUReEBiADUc7BeuykAJgC+9wKj858/Xnx8cBBhWi3erPUCTqdj7umzrxcLhZy1VOI4ACUAwv8RGQH0upxdlx3d7oc3b151s2zeWqlwXo/Hc/mLpUcfVTgucJw4SpbK1QyADIDWuap2IgCg+VajSxJ4vaqSseu3bo8FLgWs09dmPohHDpjoXih0lDyJiESOAThpJ9L954+UswbPbW2HEulkNqhIggWU7spg/0BnLsNGN3fDiXpLOAXAAZDasNBramgAwwA+HBnxXp/9+F5gfMo/VWvULJnkUb4m1BnvxEX76JCH1JtNuVKuqADOANQAEACqHoAFwCWGYebnH35yd3Fx6UEmlx0momh68cvzja3gbqSUz5/29w14FVXpW1h45Ou80EGnUmmHKIoCgDIAUW82w8NcYGa/ffbN/NKTJ7fZAmtUFYKd4BbisWRQIiSqKDJvMugmx/0BymZ3mObuz3ldDpttb3dH4QWpDKCk7+iwTFx5f/zOndm5u3+urholsYlkOoVsJh/PZHI7qqpuy7La7O52OYy0sY82GbAf2qd842Nd2VSils8Xc7KinuhFkTiTx+xAB23u8l709ITDUVSK5Ur4bWiz3mhtA9hRVbUq8bzJ7XL3tySJGfYNYnV5LfPbi5f7RFYOASR0ABi7jXERSXZurO+pbLZQXF5eWbfQdAxAWBtz4t2BdyJrKyu/FnNsamN9T1UUWOx2m/HcQnqaph98/93TT51G3hdLs8no3m7cSJsT+UJlU1aUfQB5AHyVqwsjQ70Mmz+VbIxFd3vcMXT/3jX6+UowK8tK1ECbje7JqX7/9jorvf57K1koVUMAXgN4A4DVTEc1BCEd3E/8DkDgOM44f2vOMzUz7LPQph5RlFw6WZYp0uKJnTEbpv0eC0WhBiClkVS10BIAFQBligI/HRi0OB20lTRFVZYVMwCzjufFs923qVTtrEV9+dm03zvY7dQMSjQSVTsKAJN/tK/nq4WZG2dVngq+iRV5XhAAiDqJkONEMhe3MVb+h5/WIrlCta6BqLYMnlcjnS2nfvz51R8MY22GD09OiawUAdT1AOhmC7qXfx2kXgWP9iUihwBENce250kFoAgiIfHUafMgXigexjLpIlcPAghTAFwAegF0asC8tmtamjK1bUPoAHQA6Abg1t5qAJL/AN2R/QDJdEC+AAAAAElFTkSuQmCC",
                    forts: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4wYJCAYOEb2inwAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAADk0lEQVQ4y42UzU9cZRSHn/e9d+bOzO3MUBjmMnwUEIZKp7RjiRUWtbFRY2JjSIzGrTFutXs/Nv4bLnSjMenC6MJEa0tiWxvrYKGE1lZKoRQqtDCUgbmf7+tmBmtioic5m5OTJ79zcs7PALLA6Y9fLn1pZQdPz68uDwIK2AECQPM/wgBSwNhAmz0amK+ciKWLLbXa7bYgDGzAA3wg+i+gASSAo4c6MqMbfpfT2n+y4Lvpgwlja18Q1LoipTINSNhQqv4N2gQdOVzIjm76XU6yrRvfq1lelC+m7VxfMqbykfL6wyh0Gr3N0E8Czb2qBi/wiEKNlJKEZaBUvjMS+ztz6XB7uHpxdjWoLtxyg7tepG4DC8ASsAp4e4pKhezog+12x84NEPjbuK6HlJp4TBBEcevUs4d73j9WHHlR6/5uFfSGkoGa1p2+0lVg03xyzlbHZrfuE4VgGAZKSYQwkTGJXryDSOcov/1O91sdhW6uX+fa+R/uvVqpBCt+uC6bkChSvPlMghdO9aMti3o9RAiJlBIU6L4hRL4dVakQ/ngOYibl9870CNvOA6m/dyQNzKlfOSNgeOI4X1Qsbk7fRbkBSsaI5hcQuy66dAQ99hz4AdVLl1ztB/Kfy1YRQbFIrXiI3u++4t28w9xrJS7Oe9z4fRM/76BO9KAigbp0Gba2UH29OjBNDWgTEADCMET45xrqwgXC4+N4GxscmPyGN7IZNk6NYqkk7i9TRIAqH4XxccROTUiQgGgq0qbWWIZETkwgJyeJFpdwj5RxVYT928+kohCvf4CgVCLM52F2lvjKfQOBAcRkQ1HYlk7Iz6evnfv0ww+m4sKAsXHCtTX8mRl2UzY7wyX8TAb/1i2CK1fA97HL5VgiHrcAa2+0rGUmq3Hj7ifL65WzX5+9+VJLdmS4dHTEHz5EVKuhb/9BEo3b3YU7OAiOA48e0ZKIpxZhXxNkmIJkwUlXbyxvfn+jVjdv1urlno3q00NJq3+o3RkqHOjrtNpy7GRb2Hn8eO/2DrS0ZKaXVvY3QcJOWvb5ytwaMA+sa5hd2nX7lnbdgz9t1Z7quLfU3WMazsGUnXs4WMw7z5/szOTysddHjznfzsylmiAZBFG6YRkuUG/kI2DOC6PWxTByFqFwcWun/bMH6+0fXb2a64sZ9khr1tuXtJbNhtdsaCEE8LBhF83vbvrRY+B+4+7ikdaJFddvXXHJXt6ue8DCX3Llifswz12xAAAAAElFTkSuQmCC",
                    craft: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4wYJCBQ3NkxaRAAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAADw0lEQVQ4y12US28bZRiFn/lmPM7YsZ3YsZ3UvaelNC20pTexQIhWQipqYc2WPbDiD1Ts2bDmD7AGChIbolK6KFDqBjdNnTRN6sR3T2zPfHP5PhZ1EOL5AUdH73vOMXiFAQggASSBaWAWKAMHTGEcsk1RnsumcqMwanZd7w7wO+ACCsACTCADFIF5Aw4KUxzOONZ8ITNVqhTSxeOV/MH5dOa1YeCbq9uD1Z/+WO8CW8AI0IC2gFnbEledhHW1mHcOHS/lykvHi5VyIX0o1saMHCojEAZJIXg58hkFQQCUgANAExjsO1q8ce38rQ8vlm8N+lF+GEVTvWHMy45mLpsgnRFkBSgNwhAsvXF2bq0lF1utzrtKawlUgaEJLB6rFC5pw3qn0fEtS9g4yQTZlEXCNrCMV0eUSvG8vce16+/z2RefnrIimX5cezqKIrUDDCzAq683hheWFrBElnTKITltoQyThAgYjyNiuceTrT7tnqtvf/nVs+x8KXf5/GkxO5vNe41OGrAsQLb7Y9l63keqmGdhQKk8BzpEjyWetvG8Ac2mxB3saV9F5nBzu/1N9enPwDLQAAILiMcy1A03QivJwJPYiQ5SRkgJgh4yUghhkMsXRLYQnF6pt+4bBkmtCYAxoE3gSMISVwr5mcteEGALmzgICGVI31OEsabvKhAGA89HRUpcPlkq+DL0+qPA0a+EuhbgOAnLnjKC2Eza5mzGQRiKKNaktcYdjXFVQExM2lJgwEZ3nKoUp68fK2Xmfq3tWCMZ+RYQZVMOzpS9c+b0icp22yWbNum5AZEfUMyZaENgqhAvjjh3NEcuNYVtGFYozYtrL93d9Zb70AS0H4TmOAjF7c/fevP7H54w9kPSxhgr8kjaGtOZ5tS5S1xYOkIxEaOMBA/qAx41BtQ224+UUjUTCCOlA8e2Kh9cqly8efOKXVvf4v7KLvXmgDCM+eTWGY0cG2urG/yy1ubJRhfX89Vux2323PGy1twzJ6VTYxmkbMOeee/MzIkDi4eNtdUGb5+tcPX1BZYftY27f23S7AwJZRDvtIeN9a3OvWZv+J3W3AP+NiftD7XGX9lok81YC1dOlhcwbar1Hg9qu3TcETKU0WZr73l9u3O30x/eCeL4x0mOqvtf00AIbHlB/NvX3z4ul5zpheWVzvx6Z0gofX+367/odAd/RlFc1ZoqUAN2gCEQAXrSJJjsURa4cGIh91E+k/m43upu9V2/GsXqIbACPAN2JyGMJyb+HbT/sr9NR4UQJ5VSCeAFsAm0Afl/gX3+AfPZ8VWA6iO4AAAAAElFTkSuQmCC",
                    mpi: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4wYJCCIO4FVDOQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAD/ElEQVQ4y12UW2zTdRTHP//L2m7t2u7SdSu7MFe8MIGNDQFHhIHxASWDaDD6YnxSI2++mxBNTIjRB99EExQMwWiIaCQaMYBjy5iFUd1Yu0u3ua51vZfe/u2//78P/KeLJ/kmv5yc8z0nv3O+R+I/EzZBBCxAA7DFeGuAbmAj7l+TDIdkoAYwAXVAu0kW93d5bAc1TfcoZU0DCkYR8f9kG8l2oN2o3gZ0ATs87vqhsx+9/OJCKGZZWs0IQK0R2wRYjS4rgC4DjcCTAvQDLv0hsQzUelrs3YN7eju3dtzOMI4CeAFVAAVI6nAH+AOIy0Crx2UZPv32vtfTpbqKKAmaXinUXbjsC/ft3GJOPMjLW9ssLc/0u3YePbKjTa4x56sagr0mZ/rgM9+FlWghBWREoCVfqNruTEejmYJuOf7Kse5t27c1tjgky/PDva5Eokh3Z0PTkafa7Y5Gq+PoiYPd2ZJun5pdj2uabgfcgFUym6QXamS8v0/HxXA4Wulp1ZoKpbSefVDNHRvZ27YWiUor4bBsFmoK9TbNkkqkxfMXf5v/aWwtrkMVnbKq6RHh1Zd2nX339GsjtYpSl039rfn8KxaHU5YLik1rblAkTRcZG7uFuaZVP3R4Hwvz0Wrfno6iuVwVZatUev/Dq9+fu+Q/Ly0vJ3arqaTTs8XmzqlavarrUte2A0IspYqp2BK9j3exvBTC3r5X8G5/WpicuClO3181J+MPtGvXpgNfX5nxF0rqlKRUNMukPyxO3g4WrULRbBKLzoVVheMn32D05nXmFxYJLmY49c4Zzn76JTN3R9FLSvjn64u+b67OTeZK6hgwKwEFHbLrKUXzz8arlWKlmksuO/cPj8iRSIRLF6+wa+AAe4aG+fyTM0pF0QO/TKzfCyxnfRqMAlNAQuLhTqQBpahUndlc1Tby3BONi6tr1sHBHYzeuM5bp05y7ovLSPmF3L1gYW4lkg/wkMQHJIGyCKjG6ieB0mM9bsuxE4ftczNTLAV89A/sIra6xszdGzQ3a7ZHOu1WWRZVIGXklQFdNKQiAnaLSbQPDHY4Y+ms+db4DFN3/Zw42kcgEMLdWEGXJNnbaXVZLbLDELS0oTV5k+Yc9TaLc6C3o3li/J7w7EDLulhWtPBatDWzHs/s9nrzZofmyeVxO+ymhkyu7DQELgGquPmEPNrjqu0f9DYFpiP+j7+an7x8LTSXjFUqv46Hgm++N+r77sfI+NDePvXwULdjUwMaIEib7o/N2WBxzwZXY9/+EPizoKihckXNlPOZ1P1QOpjJVYJzK5m1haX4X8ViOTa/lJ4AVjb+SNjEbAd6RGjWIAMUgXqzLLoqqpbWIGHENRiTDhoDUgH+AV2k0e724e0fAAAAAElFTkSuQmCC",
                    build: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4wYJByYf5dXh8gAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAACu0lEQVQ4y5XUW0jTURzA8e90lpd5yYmmWWSRl5HaRvOW2YuiQSBSNKN68ckLBD2EEQgSPfRQD0aQVISBDyoRmmaamzVzU0tnXsCVmy3dZpRm4f0y/z20xRh7sPN2bp9zzo/f+Ynw3nyBQMAfELmNC8A6sAw43DeIvCC7gTggBTgEBDjXuRAr8AGYcvYBEHsgYuCw3y6/s5dUhZnnCvNPe54y0K97f/NO3TugGRgCVr1BQUBiw+O7NwHWVlb/TWRkZBAmjSB2X0xaaooi7XzJ1UDHlmMNGAE28XKjg8BloBK4BTyUhu/pfFRTLSzPTwmOjUVhpO+l8KimWgBuAEcAsa8HtA0sATOAEVgD4u/dvq6SJckIDZWwtrRAVHQsxolP2xpt3/zGxmYwMOvrJdjbzuAmAWcqr1zMcmwTE7YnDIkkiK+WaRqbGlHIj4kS4qKPyhXJKb36IYvYCxQAKAGVpraoTCJN5ECiggd1jdhtNn7MzdPa+aYHyFEqlfzUqvcCoZ6QvxMp1tQWlUqkCuQ56ZjHTGQlSAk+KCM7X/VEEIQvH0c/m65V/C4ZNVpaALPII3/SgAua2qIycWAS8fITTBsN2O027j8f7NRoBz8Crc4YJmamJ5/sGxibAN6KPJDi+qr88oj9MlIzc/k8rMNms/KiTdfVoDOrgXZgEtgAgoFI4BewIPZEgiLiSM3MZaRPzYzVzrNeS0fnX6QV+OKWM4vAivOrCGJABqjqq/LLfQKjkCtz6O9uxWqdRacf73JDpoAtj3+35Z6A2Y9L0ypWRWHknSpAr+3Aap/DYPjkeo43BG+ZHC5ExpFXUIhe28Gk2cLEhM2FNO8EcUGrCwuL9L56isn0ne6p5dc9A2Y10LJTxFV3QpbXl3zCQ0KS2w2WJv3wtBpocwZ2R4irHkmB484aZAHGgW//gwD8Aab2FXiIjwPWAAAAAElFTkSuQmCC"
                }
            },
            enchantLang: function() {
                var t = TWIR.translations;
                TWIR.lang = t[localStorage.getItem("scriptsLang")] ? localStorage.getItem("scriptsLang") : t[Game.locale.substr(0, 2)] ? Game.locale.substr(0, 2) : "en", $.when($.getScript(TWIR.compress, function(e) {
                    TWIR.LZ = LZString
                }), $.getJSON(t[TWIR.lang].url, function(t) {
                    e = t
                })).done(function() {
                    var t = TheWestApi.register("TWIR", e.script_name, TWIR.minGame, TWIR.maxGame, TWIR.author, TWIR.website),
                        a = (new west.gui.Scrollpane).appendContent('<span style="display: block;margin-left: auto;margin-right: auto;width: 500px;"><img src="https://jamzask.github.io/TWInventoryReloaded/menu/twir_biglogo.png"></img></span><br><span style="text-align: center;font-family: comic sans ms;margin-left: auto;margin-right: auto;width: 500px;display: block;font-size: 15px;"><form target="_blank" action="https://www.paypal.com/cgi-bin/webscr method="post"><input type="hidden" name="cmd" value="_s-xclick"><input type="hidden" name="hosted_button_id" value="TE95VRHUPXCUW"><input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"><img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"></form></span><br><div style="display: block;margin-left: 55px;"><span style="font-weight: bold;margin-top: 5px;text-shadow: 2px 1px 2px #fae3ad;color: #5e321a;">credits:</span> Tom Robert, Thathanka Iyothanka<br><br><span style="font-weight: bold;margin-top: 5px;text-shadow: 2px 1px 2px #fae3ad;color: #5e321a;">translators:</span> Wojcieszy (pl), pepe100(es), Billy-AR (it), Timemod Herkumo (el), Tom Robert (de), Thathanka (fr) <br><br></div>');
                    t.setGui(a.getMainDiv());
                    var r = $('<div class="menulink" title="TW Inventory Reloaded" style="background-image: url(' + TWIR.images.preficon + '); background-position: 0px 0px;" />');
                    r.mouseenter(function() {
                        $(this).css("background-position", "-25px 0px")
                    }), r.mouseleave(function() {
                        $(this).css("background-position", "0px 0px")
                    }), r.click(function(e) {
                        TWIR.menu.showSelect(e)
                    }), $("div#ui_menubar").find("#TWIR").length || $("div#ui_menubar").append($('<div class="ui_menucontainer" id="TWIR" />').append(r).append('<div class="menucontainer_bottom" />')), $(document).ready(TWIR.init), $(document).ready(TWIR.Updater)
                }).fail(function(e, t, a) {
                    TWIR.bugHunt(a)
                })
            }
        }, TWIR.enchantLang(), TWIR.scriptFriendly = function() {
            if (void 0 !== localStorage.tws_settings) {
                var e = JSON.parse(localStorage.tws_settings) || {};
                Object.assign(e, {
                    enableWir: !1,
                    enableWirExt: !1
                }), localStorage.tws_settings = JSON.stringify(e)
            }
            if (void 0 !== localStorage.TWLT) {
                var t = JSON.parse(localStorage.TWLT) || {},
                    a = window.LT || {};
                void 0 !== a.Features && (a.Features.ShortPopups = !1), Object.assign(t, {
                    ShortPopups: !1
                }), localStorage.TWLT = JSON.stringify(t)
            } else {
                var t = {
                    ShortPopups: !1
                };
                localStorage.TWLT = JSON.stringify(t)
            }
            var r = window.TWToolkit || {};
            if (r.hasOwnProperty("preferences") && (r.preferences.ids_popup = !1), void 0 !== localStorage.TWToolkit_preferences) {
                var i = JSON.parse(localStorage.TWToolkit_preferences) || {};
                Object.assign(i, {
                    ids_popup: !1
                }), localStorage.TWToolkit_preferences = JSON.stringify(i)
            }
        }, TWIR.scriptFriendly(), TWIR.storage = {
            sleep: {},
            init: function() {
                TWIR.storage.updateFeat(), TWIR.storage.find_MarketData(), TWIR.storage.find_MarketAlertSettings(), TWIR.storage.find_LimitedPrices(), TWIR.storage.get_ToolkitEventIcons(), TWIR.marketBest.init()
            },
            inventory: {
                buffs: [],
                use: [],
                crafting: [],
                quest: [],
                work: [],
                bonus: [],
                collectibles: [],
                addedCategories: ["bonus", "useable", "buff", "craft", "work", "quest"],
                buffs_all: [],
                use_all: [],
                crafting_all: []
            },
            setList: {
                eventIcons: {},
                ownedSetItems: []
            },
            find_LimitedPrices: function() {
                void 0 !== localStorage && void 0 !== localStorage.twir_limitedSale && (TWIR.storage.popups.shop_limited_prices = JSON.parse(localStorage.twir_limitedSale))
            },
            get_ToolkitEventIcons: function() {
                $.getJSON(TWIR.setsURL, function(e) {
                    for (var t in e) "independance" == e[t][0] && (e[t][0] = "independence");
                    TWIR.storage.setList.eventIcons = e
                })
            },
            stats: {
                cache: [],
                global: {}
            },
            popups: {
                crafting: {},
                shop_prices: {},
                shop_limited_prices: {},
                marketBest: {},
                marketBestJunk: {}
            },
            marketWatcher: {
                marketMain: [],
                marketOther: [],
                marketAlert: [],
                mwl: [],
                missing: [],
                wtb: {},
                wtb_missing: {},
                trader: []
            },
            find_MarketAlertSettings: function() {
                var t = localStorage.twir_marketAlert;
                if (void 0 === localStorage) new UserMessage(e.informative.storage_error + "!", UserMessage.TYPE_ERROR).show();
                else if (void 0 !== t) try {
                    var a = TWIR.LZ.decompress(t) ? TWIR.LZ.decompress(t) : t;
                    TWIR.storage.marketWatcher.mwl = JSON.parse(a)
                } catch (e) {
                    TWIR.bugHunt(e)
                } else TWIR.storage.marketWatcher.mwl = [{
                    item_id: 862e3,
                    item_price: 1e5
                }]
            },
            find_MarketData: function() {
                if (void 0 === localStorage) new UserMessage(e.informative.storage_error + "!", UserMessage.TYPE_ERROR).show();
                else {
                    if (void 0 !== localStorage.twir_marketData) try {
                        var t = localStorage.twir_marketData,
                            a = TWIR.LZ.decompress(t),
                            r = a || t,
                            i = JSON.parse(r);
                        TWIR.storage.marketWatcher.marketMain = a ? TWIR.maxMarketData(i) : i
                    } catch (e) {
                        TWIR.console("TWIR/ saved scans cannot be parsed. Removing scan data.", "red"), localStorage.removeItem("twir_marketData"), TWIR.storage.marketWatcher.marketMain = []
                    } else TWIR.storage.marketWatcher.marketMain = [];
                    if (void 0 !== localStorage.twir_marketDataJunk) try {
                        var o = localStorage.twir_marketDataJunk,
                            n = TWIR.LZ.decompress(o),
                            s = n || o,
                            p = JSON.parse(s);
                        TWIR.storage.marketWatcher.marketOther = n ? TWIR.maxMarketData(p) : p
                    } catch (e) {
                        TWIR.console("TWIR/ saved scans cannot be parsed. Removing scan data.", "red"), localStorage.removeItem("twir_marketDataJunk"), TWIR.storage.marketWatcher.marketOther = []
                    } else TWIR.storage.marketWatcher.marketOther = []
                }
            },
            features: {
                inv_window_title: !0,
                inv_window_minititle: !0,
                inv_setmenu_full_color: !0,
                inv_setmenu_empty_opacity: !0,
                inv_setwindow_remember_search: !1,
                inv_searchwindow_remember_search: !1,
                pop_item_id: !0,
                pop_set_id: !0,
                pop_display_event: !0,
                pop_owned_counts: !0,
                pop_job_table: !0,
                pop_crafting_recipe: !0,
                pop_recipe_table: !1,
                pop_partial_bonus: !1,
                pop_short_currency: !0,
                pop_market_price: !0,
                pop_ups_price: !0,
                pop_min_market_price: !0,
                pop_avg_dmg: !0,
                pop_bonus_calc: !0,
                pop_trader: "https://events.the-west.net" === Game.masterURL,
                mw_item_price_tooltip: !0,
                mw_product_price_tooltip: !0,
                mw_bbcode_tooltip: !0,
                mw_underpriced_alert: !1,
                mw_trader: !0,
                mw_collections: !0,
                mw_wtb_alert: !0,
                mw_wtb_chat_alert: !0,
                mw_alert_playsound: !1,
                ml_market_collector: !0,
                ml_sleep: !0,
                ml_npc: !0,
                prof_rank_bar: !0,
                prof_craft_points: !0,
                fb_topic: !0,
                fb_travel_button: !0,
                fb_online_status: !0,
                fb_ranks: !0,
                fb_ali_name: !0,
                fb_count: !0
            },
            updateFeat: function() {
                if (void 0 !== localStorage && void 0 !== localStorage.twir_features) {
                    var e = JSON.parse(localStorage.twir_features);
                    for (var t in TWIR.storage.features) e.hasOwnProperty(t) && (TWIR.storage.features[t] = e[t])
                }
            },
            get: function(e) {
                return void 0 !== TWIR.storage.features[e] && TWIR.storage.features[e]
            }
        }, TWIR.allSetItems = function(e) {
            for (var t = 0; t < e.length; t++)
                if (null !== e[t].obj.set) return !0;
            return !1
        }, TWIR.arraysEqual = function(e, t, a) {
            if (a && (t = Bag.getItemsByItemIds(t)), e.length !== t.length) return !1;
            for (var r = 0; r < e.length; r++)
                if (e[r].inv_id !== t[r].inv_id) return !1;
            return !0
        }, TWIR.getItemByName = function(e) {
            var t = ItemManager.getAll();
            for (var a in t)
                if (t[a].name === e) return t[a]
        }, TWIR.makeEmUp = function(e) {
            for (var t = [], a = 0; a < e.length; a++)
                for (var r = 0; r <= Game.ui.itemUpgrade.max_level; r++) t.push(1e3 * e[a] + r);
            return t
        }, TWIR.repTitle = function(t, a) {
            TWIR.storage.get("inv_window_minititle") ? Inventory.window.setMiniTitle(a.cutIt(50)) : Inventory.window.setMiniTitle("TWIR"), TWIR.storage.get("inv_window_title") ? Inventory.window.setTitle(t.replace("*", "").replace("#", "").cutIt(50)) : Inventory.window.setTitle("TWIR - " + e.invent)
        }, TWIR.replUml = function(e) {
            return e.toUpperCase().replace(/"/g, "").replace(/Á/g, "A").replace(/Č/g, "C").replace(/É|Ě/g, "E").replace(/Ő/g, "O").replace(/Ú|Ü|Ů|Ű/g, "U").replace(/Ś|Š/g, "S")
        }, TWIR.replSum = function(e, t) {
            if (Math.abs(e) >= 1e3 && Math.abs(e) < 1e5) {
                if (t && e >= 1e4) {
                    var a = e / 1e3;
                    if (Math.floor(a) !== a) return e
                } else if (t && e < 5e3) return e;
                return parseFloat(Math.round(e / 1e3 * 100) / 100).toFixed(1).replace(/\.0+$/, "").replace(".", ",") + "k"
            }
            return Math.abs(e) >= 1e5 && Math.abs(e) < 1e6 ? parseFloat(e / 1e3).toFixed(0).replace(/\.0+$/, "").replace(".", ",") + "k" : Math.abs(e) >= 1e6 ? parseFloat(100 * e / 100 / 1e6).toFixed(1).replace(/\.0+$/, "").replace(".", ",") + "M" : parseFloat(e).toFixed(0)
        }, TWIR.beatMarketData = function(e) {
            for (var t = TWIR.marketWatcher.keep, a = [], r = 0; r < e.length; r++) {
                $.isNumeric(e[r].date) || (e[r].date = new Date(e[r].date).valueOf());
                var i = new Date - new Date(e[r].date);
                i <= t && void 0 !== e[r].offer_id && a.push(e[r])
            }
            var o = a.sort(function(e, t) {
                var a = new Date(e.date).valueOf(),
                    r = new Date(t.date).valueOf();
                return a > r ? -1 : a < r ? 1 : 0
            });
            return o
        }, TWIR.minMarketData = function(e) {
            if (e) {
                for (var t = [], a = 0; a < e.length; a++) {
                    var r = e[a];
                    t[a] = {}, void 0 !== r.auction_end_date && (t[a].e = r.auction_end_date), void 0 !== r.auction_price && (t[a].b = r.auction_price), void 0 !== r.max_price && (t[a].p = r.max_price), void 0 !== r.date && (t[a].d = r.date), void 0 !== r.offer_id && (t[a].o = r.offer_id), void 0 !== r.item_base_id && (t[a].i = r.item_base_id), void 0 !== r.item_count && (t[a].c = r.item_count)
                }
                return t
            }
        }, TWIR.maxMarketData = function(e) {
            if (e) {
                for (var t = [], a = 0; a < e.length; a++) {
                    var r = e[a];
                    t[a] = {}, void 0 !== r.e && (t[a].auction_end_date = r.e), void 0 !== r.b && (t[a].auction_price = r.b), void 0 !== r.p && (t[a].max_price = r.p), void 0 !== r.d && (t[a].date = r.d), void 0 !== r.o && (t[a].offer_id = r.o), void 0 !== r.i && (t[a].item_base_id = r.i), void 0 !== r.c && (t[a].item_count = r.c)
                }
                return t
            }
        }, TWIR.getStorage = function() {
            if (!localStorage) return "";
            var e = "",
                t = window.localStorage.twir_marketData ? 16 * window.localStorage.twir_marketData.length / 8192 : 0,
                a = window.localStorage.twir_marketDataJunk ? 16 * window.localStorage.twir_marketDataJunk.length / 8192 : 0,
                r = "Scan data: " + (t + a).toFixed(2) + " KB";
            for (var i in window.localStorage) window.localStorage.hasOwnProperty(i) && (e += window.localStorage[i]);
            var o = e ? '<span style="color: ' + (5120 - 16 * e.length / 8192 <= 250 ? "red" : "unset") + ';">Approx. space remaining: ' + (5120 - 16 * e.length / 8192).toFixed(2) + " KB" : "5 MB</span>";
            return r + " | " + o
        }, TWIR.hasBonus = function(e) {
            var t = ItemManager.get(e),
                a = 0;
            return "object" == typeof t.bonus.attributes && countObjectKeys(t.bonus.attributes) > 0 && a++, "object" == typeof t.bonus.skills && countObjectKeys(t.bonus.skills) > 0 && a++, void 0 !== t.bonus.fortbattle && t.bonus.fortbattle.defense > 0 && a++, void 0 !== t.bonus.fortbattle && t.bonus.fortbattle.offense > 0 && a++, void 0 !== t.bonus.fortbattle && t.bonus.fortbattle.resistance > 0 && a++, void 0 !== t.bonus.fortbattlesector && t.bonus.fortbattlesector.defense > 0 && a++, void 0 !== t.bonus.fortbattlesector && t.bonus.fortbattlesector.offense > 0 && a++, void 0 !== t.bonus.fortbattle && t.bonus.fortbattlesector.resistance > 0 && a++, void 0 !== t.bonus.item && t.bonus.item.length > 0 && a++, a
        }, TWIR.sortName = function(e, t) {
            for (var a = e.length; a--;) {
                var r = e[a];
                r.name ? r.name.name && (r.name = r.name.name) : e.splice(a, 1)
            }
            e.sort(function(e, t) {
                var a = TWIR.replUml(e.name),
                    r = TWIR.replUml(t.name);
                return a[0].match(/#/) ? 1 : r[0].match(/#/) ? -1 : a == r ? 0 : a > r ? 1 : -1
            })
        }, TWIR.timeSince = function(t) {
            var a = Math.floor((new Date - t) / 1e3),
                r = Math.floor(a / 31536e3);
            return r > 1 ? e.informative.years.replace("$1", Math.floor(r)) : (r = Math.floor(a / 2592e3)) > 1 ? e.informative.months.replace("$1", Math.floor(r)) : (r = Math.floor(a / 86400)) > 1 ? e.informative.days.replace("$1", Math.floor(r)) : (r = Math.floor(a / 3600)) > 1 ? e.informative.hours.replace("$1", Math.floor(r)) : (r = Math.floor(a / 60)) > 1 ? e.informative.minutes.replace("$1", Math.floor(r)) : e.informative.seconds.replace("$1", Math.floor(a))
        }, TWIR.msToTime = function(e) {
            var t = e.timestamp2TimeObject();
            return t.days > 0 ? t.days + "d" : t.hours > 0 ? t.hours + "h" : t.minutes > 0 ? t.minutes + "m" : t.seconds > 0 ? t.seconds + "s" : "NaN"
        }, TWIR.console = function(e, t) {
            console.log("\n %c" + e, "color:" + t + ";font-weight:bold;")
        }, TWIR.bugHunt = function(t) {
            TWIR.console("TWIR/ please report following error at https://greasyfork.org/scripts/373294-tw-inventory-reloaded/feedback ", "red"), console.log(t), TWIR.console("TWIR version: " + TWIR.version + " on " + Game.version + ", locale: " + Game.locale, "red"), new UserMessage(e.informative.error_other + ".", UserMessage.TYPE_ERROR).show()
        }, TWIR.travelToNPC = function(e, t, a) {
            Ajax.remoteCall("quest_employer", "walk", {
                x: t,
                y: a,
                employer: e
            }, function(e) {
                e.error || TaskQueue.init(e.task_queue)
            })
        }, TWIR.menu = {
            gui: {
                window: {},
                check: {}
            },
            showSelect: function(t) {
                var a = (new west.gui.Selectbox).setWidth(250).setHeader("TWIR");
                return a.addItem(1, '<span style="color: #5e321a; display: inline-block; margin-left: 5px;">' + e.features.preferences + "</span>"), a.addItem(3, '<span style="color: #5e321a; display: inline-block; margin-left: 5px;">' + e.market_watcher.add_name + "</span>"), a.addItem(2, '<span style="color: #5e321a; display: inline-block; margin-left: 5px;">' + e.donate_title + "</span>"), a.addListener(function(t) {
                    switch (t) {
                        case 1:
                            TWIR.menu.open("Features");
                            break;
                        case 2:
                            TWIR.menu.open("Donate");
                            break;
                        case 3:
                            MarketWindow.open(), MarketWindow.showTab("twir_mw"), MarketWindow.window.setTitle(e.market_watcher.add_name), TWIR.marketWatcher.openMWTab()
                    }
                }), a.show(t)
            },
            open: function(t) {
                switch (TWIR.menu.gui.window = wman.open("TWIR", null, "escape noreload").setMiniTitle("TWIR - " + e.inventory.twir_menu).setSize(748, 471).setTitle("TW Inventory Reloaded").addTab(e.features.preferences, "twir_feat", TWIR.menu.openFeat).addTab(e.donate_title, "twir_donate", TWIR.menu.openDonate), t) {
                    case "Features":
                        TWIR.menu.openFeat();
                        break;
                    case "Donate":
                        TWIR.menu.openDonate()
                }
            },
            openFeat: function() {
                try {
                    TWIR.menu.gui.window.activateTab("twir_feat"), TWIR.menu.gui.window.clearContentPane();
                    var t = (new west.gui.Scrollpane).appendContent("<div/>"),
                        a = (new west.gui.Combobox).setWidth(165);
                    const I = {};
                    for (var r in Object.keys(TWIR.translations).sort().forEach(function(e) {
                            I[e] = TWIR.translations[e]
                        }), I) a.addItem(r, '<span title="' + I[r].translator + '" style="background: url(//portal-bar.innogamescdn.com/images/west-sprite_01.1541670091.png) no-repeat top left;height: 12px;padding-left: 25px;background-position:' + I[r].icon + ';">' + I[r].translate + "</span>");
                    a.select(TWIR.lang);
                    var i = $('<div style="width: 250px;float: right;margin-right: 10px;"/>'),
                        o = $('<div style="font-weight: bold;margin-top: 5px;text-shadow: 2px 1px 2px #fae3ad;color: #5e321a;font-size: 16px;margin-bottom: 5px;">' + e.language + "</div>");
                    i.append((new west.gui.Groupframe).appendToContentPane(o, a.getMainDiv().css({
                        "margin-bottom": "10px",
                        "margin-left": "10px"
                    })).getMainDiv()), t.getContentPane().append(i);
                    var n = $("<div/>"),
                        s = $("<div/>"),
                        p = $("<div/>"),
                        l = $("<div/>");
                    for (var c in TWIR.storage.features) c.indexOf("inv_") > -1 ? (TWIR.menu.gui.check[c] = (new west.gui.Checkbox).setLabel(e.feat_strings[c]).setSelected(TWIR.storage.get(c)).appendTo(n), n.append('<br><div style="height:5px;" />')) : c.indexOf("pop_") > -1 ? (TWIR.menu.gui.check[c] = (new west.gui.Checkbox).setLabel(e.feat_strings[c]).setSelected(TWIR.storage.get(c)).appendTo(s), s.append('<br><div style="height:5px;" />')) : c.indexOf("mw_") > -1 ? (TWIR.menu.gui.check[c] = (new west.gui.Checkbox).setLabel(e.feat_strings[c]).setSelected(TWIR.storage.get(c)).appendTo(p), p.append('<br><div style="height:5px;" />')) : (TWIR.menu.gui.check[c] = (new west.gui.Checkbox).setLabel(e.feat_strings[c]).setSelected(TWIR.storage.get(c)).appendTo(l), l.append('<br><div style="height:5px;" />'));
                    var A = (new west.gui.Combobox).setWidth(50);
                    A.addItem(2592e6, 2592e3.getTime2EndToken()), A.addItem(7776e6, 7776e3.getTime2EndToken()), A.addItem(15552e6, 15552e3.getTime2EndToken()), A.addItem(31104e6, 31104e3.getTime2EndToken()), A.select(TWIR.marketWatcher.keep), t.appendContent('<div style="font-weight: bold;margin-top: 8px;text-shadow: 2px 1px 2px #fae3ad;color: #5e321a;font-size: 16px;margin-bottom: 5px;">' + e.features.inventory_menus + "</div>"), t.appendContent(n), t.appendContent('<div style="font-weight: bold;margin-top: 8px;text-shadow: 2px 1px 2px #fae3ad;color: #5e321a;font-size: 16px;margin-bottom: 5px;">' + e.features.popup_tooltips + "</div>"), t.appendContent(s), t.appendContent('<div style="font-weight: bold;margin-top: 8px;text-shadow: 2px 1px 2px #fae3ad;color: #5e321a;font-size: 16px;margin-bottom: 5px;">' + e.market_watcher.add_name + "</div>"), t.appendContent("<span>" + e.feat_strings.mw_clear_time + "</span>").appendContent(A.getMainDiv().css({
                        "margin-left": "10px"
                    })), t.appendContent(p), t.appendContent('<div style="font-weight: bold;margin-top: 8px;text-shadow: 2px 1px 2px #fae3ad;color: #5e321a;font-size: 16px;margin-bottom: 5px;">' + e.features.other + "</div>"), t.appendContent(l), t.appendContent("<br>"), $(t.getMainDiv()).css({
                        height: "305px",
                        "margin-top": "10px",
                        "margin-left": "20px",
                        width: "680px"
                    });
                    var g = new west.gui.Button(e.organizing.submit, function() {
                            if (void 0 !== localStorage) {
                                for (var t in TWIR.menu.gui.check) TWIR.storage.features[t] = TWIR.menu.gui.check[t].isSelected();
                                localStorage.setItem("scriptsLang", a.getValue()), localStorage.setItem("twir_mw_keep", A.getValue()), localStorage.setItem("twir_features", JSON.stringify(TWIR.storage.features));
                                var r = TWIR.translations;
                                $.getJSON(r[a.getValue()].url, function(e) {
                                    new UserMessage(e.informative.sucess, UserMessage.TYPE_SUCCESS).show()
                                }), location.reload()
                            } else new UserMessage(e.informative.storage_error + "!", UserMessage.TYPE_ERROR).show()
                        }),
                        m = $('<div style="margin-top: 10px;"/>'),
                        d = $('<span style="position: absolute;right: 50px;bottom: 5px;"/>'),
                        u = $('<span style="position: absolute;left: 20px;bottom: 5px;font-size: 10px;">' + TWIR.getStorage() + "</span>");
                    d.append(g.getMainDiv()), m.append(u, d), $(TWIR.menu.gui.window.getContentPane()).append(t.getMainDiv()).append(m)
                } catch (e) {
                    TWIR.bugHunt(e)
                }
            },
            openDonate: function() {
                try {
                    TWIR.menu.gui.window.activateTab("twir_donate"), TWIR.menu.gui.window.clearContentPane();
                    var t = new west.gui.Scrollpane,
                        a = $('<div style="text-align: center;margin-left: auto;margin-right: auto;display: block;font-size: 14px;margin-top: 40px;">' + e.donate_text + ":</div>"),
                        r = $('<div style="margin-top: 20px;width: 400px;margin-left: auto;margin-right: auto;"/>'),
                        i = $('<div><span style="color: #5e321a;font-weight: bold;text-align: center;margin-left: auto;margin-right: auto;display: block;font-size: 15px;">' + e.donate_paypal + ':<br><br><form target="_blank" action="https://www.paypal.com/cgi-bin/webscr method="post"><input type="hidden" name="cmd" value="_s-xclick"><input type="hidden" name="hosted_button_id" value="TE95VRHUPXCUW"><input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"><img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"></form></span></div>'),
                        o = $('<div style="margin-top: 10px;width: 400px;margin-left: auto;margin-right: auto;"/>'),
                        n = $('<div style="padding-top: 10px;padding-bottom: 10px;"><div style="color: #5e321a;font-weight: bold;text-align: center;margin-left: auto;margin-right: auto;display: block;font-size: 15px;">' + e.donate_ingame + ':</div><div style="text-align: center;margin-left: auto;margin-right: auto;display: block;font-size: 13px;">(CZ server only : ingame money, sets, some items, ..) : <br><a target="_blank" href="https://www.the-west.cz/?ref=west_invite_linkrl&player_id=746376&world_id=14&hash=6511">Jamza</a> @ <a target="_blank" href="https://www.the-west.cz/?ref=west_invite_linkrl&player_id=273882&world_id=14&hash=591e">danom333</a></div></div>'),
                        s = $('<div style="text-align:center;display:block;font-size:15px;color: #5e321a;font-weight: bold;margin-top: 30px;">' + e.tyty + '!&nbsp;<img src="' + Game.cdnURL + '/images/chat/emoticons/smile.png?1" alt=":)"></div>');
                    t.getContentPane().append(a), r.append((new west.gui.Groupframe).appendToContentPane(i).getMainDiv()), t.getContentPane().append(r), o.append((new west.gui.Groupframe).appendToContentPane(n).getMainDiv()), t.getContentPane().append(o), t.getContentPane().append(s), $(TWIR.menu.gui.window.getContentPane()).append(t.getMainDiv())
                } catch (e) {}
            }
        }, TWIR.init = function() {
            if (ItemManager.isLoaded() && Bag.loaded && west.storage.ItemSetManager._initialized) try {
                TWIR.storage.init(), TWIR.usebonus.getKeys(), TWIR.usebonus.getDesc(), TWIR.enhancedPlayerProfile(), TWIR.enhancedChatInfo(), TWIR.addPopup.init(), TWIR.enhancedPopups.init(), TWIR.checkJobs(), EventHandler.listen("task-finish-job", function() {
                    setTimeout(function() {
                        TWIR.checkJobs()
                    }, Math.floor(1e3 + 5e3 * Math.random()))
                }), TWIR.updateCrafting(), TWIR.checkTown(), EventHandler.listen("char_home_town_changed", function() {
                    TWIR.checkTown()
                }), TWIR.checkForts(), EventHandler.listen("char_forts_changed", function() {
                    TWIR.checkForts()
                });
                var e = TWIR.checkMap(),
                    t = TWIR.checkMarket();
                TWIR.checkRank.init(), setInterval(TWIR.checkRank.init, Math.floor(Math.random() * (12e5 + 1) + 6e5)), EventHandler.listen("inventory_ready", TWIR.fillFilters), TWIR.Inventory.setInv(), EventHandler.listen("inventory_ready", TWIR.Inventory.init), EventHandler.listen("inventory_ready", TWIR.statsQuantities), EventHandler.listen("inventory_ready", TWIR.statsSalesValue), EventHandler.listen("inventory_changed", function() {
                    TWIR.statsQuantities(), TWIR.statsSalesValue()
                }, Inventory), TWIR.checkShop(), TWIR.marketWatcher.init(), TWIR.fillOther(), $.when(e, t).done(function() {
                    TWIR.menulink()
                }), TWIR.betterBattleTopic(), TWIR.travelButton(), TWIR.battleShortcuts.init(), TWIR.otherEnhacements.init(), setInterval(TWIR.otherEnhacements.addBattleCount, Math.floor(Math.random() * (12e5 + 1) + 6e5)), TWIR.console("TWIR version " + TWIR.version + " by Jamza SUCCESSFULLY LOADED.", "green")
            } catch (e) {
                TWIR.bugHunt(e)
            } else setTimeout(TWIR.init, 100)
        }, TWIR.otherEnhacements = {
            init: function() {
                TWIR.otherEnhacements.addAllToAddressbook(), TWIR.otherEnhacements.addAliToTownWindow(), TWIR.otherEnhacements.fixJobNumbers(), TWIR.otherEnhacements.addBattleCount()
            },
            addBattleCount: function() {
                TWIR.storage.get("fb_count") && (Character.level < 25 || (EventHandler.listen("fort_battle_end", TWIR.otherEnhacements.addBattleCount), Ajax.remoteCall("fort_overview", "", {}, function(e) {
                    var t = 0;
                    if (e.js) {
                        for (var a in e.js) {
                            var r = e.js[a];
                            r[3] && t++
                        }
                        if ($("#ui_bottombar .ui_bottombar_wrapper .button:nth-child(9) .dock-image").empty(), 0 != t) {
                            var i = $('<div style="text-shadow:black -1px 0 1px,black 0 1px 1px,black 1px 0 1px,black 0 -1px 1px;line-height:15px;font-size:10px;font-weight:700;text-align:center;position:absolute;width:21px;z-index:2;background:url(' + Game.cdnURL + '/images/interface/friendsbar/level_bg.png);height:15px;right:2px;color:white;">' + t + "</div>");
                            $("#ui_bottombar .ui_bottombar_wrapper .button:nth-child(9) .dock-image").append(i)
                        }
                    }
                })))
            },
            fixJobNumbers: function() {
                try {
                    var e = JobWindow.getDurationBar;
                    JobWindow.getDurationBar = function(t) {
                        var a = e.apply(this, arguments);
                        return $(a).html(function(e, t) {
                            var a = t.match(/(\b\d+(?:[\.,]\d+)?\b(?!(?:[\.,]\d+)))/g);
                            return isNaN(a) ? t : t.replace(a, Math.round(a))
                        }), a
                    }
                } catch (e) {
                    TWIR.bugHunt(e)
                }
            },
            addAllToAddressbook: function() {
                var e = MessagesWindow.Telegram.refresh_addressbook;
                MessagesWindow.Telegram.refresh_addressbook = function() {
                    e.apply(this, arguments), Ajax.remoteCallMode("ranking", "get_data", {
                        page: 0,
                        tab: "experience",
                        entries_per_page: 1e6
                    }, function(e) {
                        if (e.error) return new UserMessage(e.msg, UserMessage.TYPE_ERROR).show();
                        var t = e.ranking.map(function(e) {
                                if (e.name !== Character.name) return e.name
                            }),
                            a = t.join(";");
                        setTimeout(function() {
                            var e = $("#addressbook_list_table").html();
                            e += "<p><a href=\"javascript:MessagesWindow.Telegram.insert_to(null, '" + a + "');\">Spam ALL!</a></p>", $("#addressbook_list_table").html(e)
                        }, 500)
                    })
                }
            },
            addAliToTownWindow: function() {
                if (TWIR.storage.get("fb_ali_name")) try {
                    TWorigin = TownWindow.init, TownWindow.init = function(e, t) {
                        TWorigin.apply(this, arguments);
                        var a = TWIR.storage.towns;
                        for (var r in a) a[r].town_id === e.town_id && null !== a[r].alliance_id && Ajax.remoteCallMode("alliance", "get_data", {
                            alliance_id: a[r].alliance_id
                        }, function(t) {
                            if (t.error) return new UserMessage(t.error, UserMessage.TYPE_ERROR).show();
                            var a = t.data.allianceName,
                                r = t.data.allianceId,
                                i = e.is_own_town ? "" : $('<div class="tow_forumlink"><div style="position:absolute;display:inline-block;left:10px;top:10px;width:195px;height:20px;text-align:center;z-index:4;color:#420;cursor:pointer;"></div><span class="tow_forumlinktext linklike">' + a + "</span></div>").on("click", function() {
                                    AllianceWindow.open(r)
                                });
                            $(".town-overview", TownWindow.DOM).append(i)
                        })
                    }
                } catch (e) {
                    TWIR.bugHunt(e)
                }
            }
        }, TWIR.battleShortcuts = {
            init: function() {
                TWIR.battleShortcuts.getLiveData(), TWIR.battleShortcuts.addInfo()
            },
            formatStatus: function(e, t) {
                var a = Chat.Formatter.getStatus(e);
                return '<span class="client_status ' + t + '_status" title="' + a.label + '"><img src="' + Game.cdnURL + "/images/chat/status_" + a.icon + '.png?3"/></span>'
            },
            data: {
                playerId: null,
                fortId: null,
                isAllied: null,
                bypass: Character.name === TWIR.author
            },
            formatPlayerRank: function() {
                try {
                    var e = TWIR.battleShortcuts.data.playerId,
                        t = TWIR.battleShortcuts.data.fortId,
                        a = (TWIR.battleShortcuts.data.isAllied, Chat.Resource.Manager.getRooms());
                    for (var r in a)
                        if (a[r].id.indexOf("room_fortbattle_") > -1 && a[r].fortId === t) {
                            var i = a[r].ranks,
                                o = Chat.rankTitles,
                                n = ((i[e] || {}).rank || 0) + 2,
                                s = {
                                    0: ["traitor", o.traitor],
                                    1: ["reservist", o.reservist],
                                    2: ["recruit", o.recruit],
                                    3: ["private", o.private],
                                    4: ["sergeant", o.sergeant],
                                    5: ["captain", o.captain],
                                    6: ["general", o.general]
                                };
                            return '<span><img class="chat_servicegrade_' + s[n][0] + '" src="' + Game.cdnURL + '/images/transparent.png" title="' + s[n][1] + '</span>"/>'
                        }
                } catch (e) {
                    return !1
                }
            },
            getLiveData: function() {
                var e = FortBattle.flashShowCharacterInfo;
                FortBattle.flashShowCharacterInfo = function(t, a, r, i, o, n, s, p) {
                    e.apply(this, arguments);
                    var l = JSON.parse(p),
                        c = l.offense + l.defense + l.leadbonus != 0;
                    TWIR.battleShortcuts.data.playerId = a, TWIR.battleShortcuts.data.fortId = t, TWIR.battleShortcuts.data.isAllied = c
                }
            },
            addInfo: function() {
                var e = FortBattle.getCharDataSheet;
                FortBattle.getCharDataSheet = function(t) {
                    var a = e.apply(this, arguments),
                        r = TWIR.battleShortcuts.data.playerId,
                        i = (TWIR.battleShortcuts.data.fortId, Chat.Resource.Manager.getClient("client_" + r)),
                        o = i ? i.statusId : 0,
                        n = i ? "ChatWindow.Client.onClick(arguments, &quot;client_" + r + "&quot;)" : "PlayerProfileWindow.open(" + r + ")",
                        s = TWIR.battleShortcuts.formatStatus(o, r),
                        p = TWIR.battleShortcuts.formatPlayerRank() ? TWIR.battleShortcuts.formatPlayerRank() : "";
                    return a = a.replace('<div class="recruitlist_avatar">', '<div class="recruitlist_avatar" onclick="' + n + '" style="cursor: pointer"> <div style="position: absolute;z-index: 100;left: 16px;">' + (TWIR.storage.get("fb_online_status") ? s : "") + (TWIR.storage.get("fb_ranks") ? p : "") + "</div>")
                }
            }
        }, TWIR.travelButton = function() {
            var t = FortOverviewWindow.createContent;
            FortOverviewWindow.createContent = function(a, r) {
                t.apply(this, arguments), TWIR.storage.get("fb_travel_button") && Ajax.remoteCall("fort_overview", "", {
                    offset: this.options.offset ? this.options.offset : 0
                }, function(t) {
                    if (t.js)
                        for (var a in t.js) {
                            var r = t.js[a],
                                i = $('<a title="' + e.informative.travel_fort + '" style="position: absolute; bottom: 8px; right: 15px;cursor: pointer;" href="#" onclick="Guidepost.show(' + r[0] + ", " + r[1] + ", " + r[2] + ', &quot;fort&quot;);"><img src="' + Game.cdnURL + '/images/map/icons/instantwork.png" </a>');
                            $(".wayTime" + r[0], FortOverviewWindow.DOM).after(i)
                        }
                })
            }
        }, TWIR.betterBattleTopic = function() {
            var e = FortBattleWindow.getInfoArea;
            FortBattleWindow.getInfoArea = function() {
                var t = e.apply(this, arguments);
                if (TWIR.storage.get("fb_topic")) {
                    var a = Chat.Resource.Manager.getRooms();
                    for (var r in a)
                        if (a[r].id.indexOf("room_fortbattle_") > -1 && a[r].fortId == this.fortId) {
                            var i = a[r].topic;
                            i = i.split(/[\s\u2060](?=\/\d\d\d)/).map(function(e) {
                                var t = e.match(/^\/(\d)(\d)(\d)(\s*)(.*?)(\s*)$/);
                                return t ? t[4] + t[5] + t[6] : e
                            }).join(""), t += '<br><div><span style="font-weight: bold;color: #523F30;">Topic:&nbsp;</span>' + ("" !== i ? '<span style="font-size: 11px;">&quot;' + i + "&quot;</span>" : "") + "</div>"
                        }
                }
                return t
            }
        }, TWIR.enhancedChatInfo = function() {
            if (TWIR.storage.get("mw_bbcode_tooltip")) {
                var e = Game.TextHandler.parse;
                Game.TextHandler.parse = function(t) {
                    var a = e.apply(this, arguments),
                        r = a.match(/<a\b[^<]*class=['"]?bbcode itemlink["']?\b[^<]*?>[^<]*<\/a>/gi);
                    return r && $.each(r, function(e, t) {
                        var r = t.replace(/<a\b[^<]*class=['"]?bbcode itemlink["']?\b[^<]*?>([^<]*)<\/a>/g, "$1"),
                            i = r.replace(/[\[\]]/g, ""),
                            o = TWIR.getItemByName(i),
                            n = TWIR.addPopup.getMarketPrice(o);
                        if (n) {
                            var s = '-<a style="color: #9a5b49 !important;" href="javascript:void(0)" title="' + n.escapeHTML() + '">[&#36;]</a>';
                            a = a.replace(t, "$&" + s)
                        }
                    }), a
                }
            }
            var t = Chat.Formatter.formatContactClient;
            Chat.Formatter.formatContactClient = function(e, a) {
                var r = t.apply(this, arguments);
                if (0 != e.professionId) {
                    var i = new RegExp(Game.InfoHandler.getLocalString4ProfessionId(e.professionId), "g"),
                        o = Game.InfoHandler.getLocalString4ProfessionId(e.professionId),
                        n = TWIR.storage.stats.global.craft;
                    try {
                        var s = n.find(t => t.player_id === e.playerId).profession_skill;
                        $(r).html(function(e, t) {
                            return t.replace(i, o + "&nbsp;(" + s + ")")
                        });
                        var p = $(r).attr("title"),
                            l = p.replace(i, o + "&nbsp;(" + s + ")");
                        $(r).attr("title", l)
                    } catch (e) {}
                }
                return r
            }
        }, TWIR.enhancedPlayerProfile = function() {
            var t = null,
                a = {
                    duels: {
                        rank: 0,
                        win: 0,
                        loss: 0,
                        diff: 0
                    },
                    forts: {
                        rank: 0,
                        damage_dealt: 0,
                        dodges: 0,
                        hits_taken: 0
                    },
                    craft: {
                        id: null,
                        rank: 0,
                        crafted: 0,
                        learnt: 0,
                        points: 0
                    },
                    build: {
                        rank: 0,
                        points: 0,
                        fair: 0,
                        stage_ups: 0
                    },
                    mpi: {
                        rank: 0,
                        games: 0,
                        friendly_dmg: 0,
                        ko: 0,
                        rq: 0
                    }
                };
            PlayerProfileMain.twir_ranking = {
                init: function(e, a) {
                    PlayerProfileMain.twir_ranking.getDuelRank(e), PlayerProfileMain.twir_ranking.getFortRank(e), PlayerProfileMain.twir_ranking.getCraftRank(e), PlayerProfileMain.twir_ranking.getBuildRank(e), PlayerProfileMain.twir_ranking.getMpiRank(e), t && (PlayerProfileMain.twir_ranking.setRankBar(a), PlayerProfileMain.twir_ranking.addProfPoints(a))
                },
                getDuelRank: function(e) {
                    for (var r = 0; r < TWIR.storage.stats.global.duels.length; r++) {
                        var i = TWIR.storage.stats.global.duels[r];
                        if (i.player_id == e) return a.duels.rank = i.counter, a.duels.win = i.duel_win, a.duels.loss = i.duel_loss, a.duels.diff = i.difference, t = i.name, !0
                    }
                    return !1
                },
                getFortRank: function(e) {
                    for (var r = 0; r < TWIR.storage.stats.global.forts.length; r++) {
                        var i = TWIR.storage.stats.global.forts[r];
                        if (i.player_id == e) return a.forts.rank = i.counter, a.forts.damage_dealt = i.damage_dealt, a.forts.dodges = i.dodges, a.forts.hits_taken = i.hits_taken, t = i.name, !0
                    }
                    return !1
                },
                getCraftRank: function(e) {
                    for (var r = 0; r < TWIR.storage.stats.global.craft.length; r++) {
                        var i = TWIR.storage.stats.global.craft[r];
                        if (i.player_id == e) return a.craft.id = i.profession_id, a.craft.rank = i.counter, a.craft.crafted = i.items_created, a.craft.learnt = i.learnt_recipes, a.craft.points = i.profession_skill, t = i.name, !0
                    }
                    return !1
                },
                getBuildRank: function(e) {
                    for (var r = 0; r < TWIR.storage.stats.global.build.length; r++) {
                        var i = TWIR.storage.stats.global.build[r];
                        if (i.player_id == e) return a.build.rank = i.counter, a.build.points = i.total_cp, a.build.stage_ups = i.stage_ups, a.build.fair = i.fair_points, t = i.name, !0
                    }
                    return !1
                },
                getMpiRank: function(e) {
                    for (var r = 0; r < TWIR.storage.stats.global.mpi.length; r++) {
                        var i = TWIR.storage.stats.global.mpi[r];
                        if (i.player_id == e) return a.mpi.rank = i.counter, a.mpi.games = i.games_played, a.mpi.friendly_dmg = i.friendly_dmg, a.mpi.ko = i.knockouts, a.mpi.rq = i.rage_quits, t = i.name, !0
                    }
                    return !1
                },
                addProfPoints: function(e) {
                    null !== a.craft.id && TWIR.storage.get("prof_craft_points") && $(".pp-prof, .pp-prof-" + a.craft.id, e).append($('<span style="height: 12px;line-height: 12px;font-size: 10px;text-shadow: black -1px 0 1px, black 0 1px 1px, black 1px 0 1px, black 0 -1px 1px;color: #F8C57C;font-weight: bold;position: absolute;right: 5px;bottom: 5px;">' + a.craft.points + "</span>"))
                },
                getGameTitle: function(e, t) {
                    try {
                        var a = new RegExp('.appendToThCell\\("head","' + e + "\",'(.*?)'", "g"),
                            r = a.exec(RankingWindow[t].init.toString()),
                            i = !!r && r[1];
                        return i
                    } catch (e) {
                        TWIR.bugHunt(e)
                    }
                },
                setDuelsTitle: function() {
                    var t = PlayerProfileMain.twir_ranking.getGameTitle,
                        r = t("duel_win", "Duels") ? t("duel_win", "Duels") : e.ranking.win,
                        i = t("duel_rank", "Duels") ? t("duel_rank", "Duels") : e.ranking.rank,
                        o = t("duel_loss", "Duels") ? t("duel_loss", "Duels") : e.ranking.lost,
                        n = t("duel_diff", "Duels") ? t("duel_diff", "Duels") : e.ranking.diff,
                        s = "<div style=&quot;font-weight: bold;&quot;>" + e.ranking.duels + "</div>";
                    return s += "<ul style=&quot;list-style-type:none&quot;>", s += "<li>" + i + ":&nbsp;" + a.duels.rank + "</li>", s += "<li>" + r + ":&nbsp;" + a.duels.win + "</li>", s += "<li>" + o + ":&nbsp;" + a.duels.loss + "</li>", s += "<li>" + n + ":&nbsp;" + a.duels.diff + "</li>", s += "</ul>"
                },
                setFortsTitle: function() {
                    var t = PlayerProfileMain.twir_ranking.getGameTitle,
                        r = t("forts_rank", "FortBattles") ? t("forts_rank", "FortBattles") : e.ranking.rank,
                        i = t("forts_damage_dealt", "FortBattles") ? t("forts_damage_dealt", "FortBattles") : e.ranking.dd,
                        o = t("forts_hits_taken", "FortBattles") ? t("forts_hits_taken", "FortBattles") : e.ranking.taken,
                        n = t("forts_dodges", "FortBattles") ? t("forts_dodges", "FortBattles") : e.ranking.dodges,
                        s = "<div style=&quot;font-weight: bold;&quot;>" + e.ranking.fb + "</div>";
                    return s += "<ul style=&quot;list-style-type:none&quot;>", s += "<li>" + r + ":&nbsp;" + a.forts.rank + "</li>", s += "<li>" + i + ":&nbsp;" + (a.forts.damage_dealt >= 1e4 ? TWIR.replSum(a.forts.damage_dealt) : a.forts.damage_dealt) + "</li>", s += "<li>" + o + ":&nbsp;" + a.forts.hits_taken + "</li>", s += "<li>" + n + ":&nbsp;" + a.forts.dodges + "</li>", s += "</ul>"
                },
                setBuildTitle: function() {
                    var t = PlayerProfileMain.twir_ranking.getGameTitle,
                        r = t("build_rank", "Construction") ? t("build_rank", "Construction") : e.ranking.construction,
                        i = t("build_total_cp", "Construction") ? t("build_total_cp", "Construction") : e.ranking.points,
                        o = t("build_fair_points", "Construction") ? t("build_fair_points", "Construction") : e.ranking.fair,
                        n = t("build_stage_ups", "Construction") ? t("build_stage_ups", "Construction") : e.ranking.stage_ups,
                        s = "<div style=&quot;font-weight: bold;&quot;>" + e.ranking.construction + "</div>";
                    return s += "<ul style=&quot;list-style-type:none&quot;>", s += "<li>" + r + ":&nbsp;" + a.build.rank + "</li>", s += "<li>" + i + ":&nbsp;" + (a.build.points >= 1e4 ? TWIR.replSum(a.build.points) : a.build.points) + "</li>", s += "<li>" + o + ":&nbsp;" + (a.build.fair >= 1e4 ? TWIR.replSum(a.build.fair) : a.build.fair) + "</li>", s += "<li>" + n + ":&nbsp;" + a.build.stage_ups + "</li>", s += "</ul>"
                },
                setCraftTitle: function() {
                    var t = PlayerProfileMain.twir_ranking.getGameTitle,
                        r = t("craft_rank", "Crafting") ? t("craft_rank", "Crafting") : e.ranking.rank,
                        i = t("craft_profession_skill", "Crafting") ? t("craft_profession_skill", "Crafting") : e.ranking.points,
                        o = t("craft_learnt_recipes", "Crafting") ? t("craft_learnt_recipes", "Crafting") : e.ranking.learnt,
                        n = t("craft_items_created", "Crafting") ? t("craft_items_created", "Crafting") : e.ranking.crafted,
                        s = "<div style=&quot;font-weight: bold;&quot;>" + e.ranking.crafting + "</div>";
                    return s += "<ul style=&quot;list-style-type:none&quot;>", s += "<li>" + r + ":&nbsp;" + a.craft.rank + "</li>", s += "<li>" + i + ":&nbsp;" + a.craft.points + "</li>", s += "<li>" + o + ":&nbsp;" + a.craft.learnt + "/35</li>", s += "<li>" + n + ":&nbsp;" + (a.craft.crafted >= 1e4 ? TWIR.replSum(a.craft.crafted) : a.craft.crafted) + "</li>", s += "</ul>"
                },
                setMpiTitle: function() {
                    var t = PlayerProfileMain.twir_ranking.getGameTitle,
                        r = t("mpi_rank", "Adventures") ? t("mpi_rank", "Adventures") : e.ranking.rank,
                        i = t("mpi_games_played", "Adventures") ? t("mpi_games_played", "Adventures") : e.ranking.games,
                        o = t("mpi_knockouts", "Adventures") ? t("mpi_knockouts", "Adventures") : e.ranking.ko,
                        n = "<div style=&quot;font-weight: bold;&quot;>" + e.ranking.mpi + "</div>";
                    return n += "<ul style=&quot;list-style-type:none&quot;>", n += "<li>" + r + ":&nbsp;" + a.mpi.rank + "</li>", n += "<li>" + i + ":&nbsp;" + a.mpi.games + "</li>", n += "<li>" + o + ":&nbsp;" + a.mpi.ko + "</li>", n += "<li>" + e.ranking.rg + ":&nbsp;" + a.mpi.rq + "</li>", n += "</ul>"
                },
                setRankBar: function(e) {
                    var r = $('<div style="filter: blur(8px);-webkit-filter: blur(8px);position: absolute;top: 182px;left: 95px;width: 160px;height: 18px;background-color: rgb(48, 21, 6);"></div><div style="position:absolute;top:182px;left:95px;border-top: 1px solid rgba(110,57,0,.5);background-image:none!important;border-collapse:separate!important;border-spacing:1px!important;color:#fff;font-weight:400;width:160px;height:18px;font-size:11px;text-align:center;z-index:100;font-family:Verdana,Arial,sans-serif;"/>');
                    a.duels.html = $('<span onclick="javascript:void(RankingWindow.search(&quot;duels&quot;,&quot;' + t + '&quot;));" title="' + PlayerProfileMain.twir_ranking.setDuelsTitle() + '" style="display: inline-block; margin: 2px;"><img style="padding-bottom:2px;cursor: pointer;" src="' + TWIR.images.profile.duels + '" height="16"/> ' + a.duels.rank + " </span>"), a.forts.html = $('<span onclick="javascript:void(RankingWindow.search(&quot;forts&quot;,&quot;' + t + '&quot;));" title="' + PlayerProfileMain.twir_ranking.setFortsTitle() + '" style="display: inline-block; margin: 2px;"><img style="padding-bottom: 2px;cursor: pointer;" src="' + TWIR.images.profile.forts + '" height="16"/> ' + a.forts.rank + " </span>"), a.build.html = $('<span onclick="javascript:void(RankingWindow.search(&quot;build&quot;,&quot;' + t + '&quot;));" title="' + PlayerProfileMain.twir_ranking.setBuildTitle() + '" style="display: inline-block; margin: 2px;"><img style="padding-bottom: 2px;cursor: pointer;" src="' + TWIR.images.profile.build + '" height="16"/> ' + a.build.rank + " </span>"), a.craft.html = $('<span onclick="javascript:void(RankingWindow.search(&quot;craft&quot;,&quot;' + t + '&quot;));" title="' + PlayerProfileMain.twir_ranking.setCraftTitle() + '" style="display: inline-block; margin: 2px;"><img style="padding-bottom: 2px;cursor: pointer;" src="' + TWIR.images.profile.craft + '" height="16"/> ' + a.craft.rank + " </span>"), a.mpi.html = $('<span onclick="javascript:void(RankingWindow.search(&quot;mpi&quot;,&quot;' + t + '&quot;));" title="' + PlayerProfileMain.twir_ranking.setMpiTitle() + '" style="display: inline-block; margin: 2px;"><img style="padding-bottom: 2px;cursor: pointer;" src="' + TWIR.images.profile.mpi + '" height="16"/> ' + a.mpi.rank + " </span>");
                    for (var i = Object.keys(a).sort((e, t) => a[e].rank - a[t].rank).reduce((e, t, r) => (e[r] = a[t], e), {}), o = 0; o < 3; o++) i[o].rank > 0 ? $(i[o].html).appendTo(r) : ($(i[o].html).html($(i[o].html).html().replace(i[o].rank, "IDK")), $(i[o].html).appendTo(r));
                    TWIR.storage.get("prof_rank_bar") && e.append(r)
                }
            };
            var r = PlayerProfileMain.init;
            PlayerProfileMain.init = function() {
                r.apply(this, arguments), PlayerProfileMain.twir_ranking.init(this.playerid, this.window)
            }
        }, TWIR.addPopup = {
            init: function() {
                TWIR.addPopup.makeDiv(), TWIR.addPopup.apply()
            },
            data: {
                item: null
            },
            makeDiv: function() {
                if (!$("#popup-container").find(".twir_popup").length) return $("#popup_div_compare").after($('<div id="popup" class="mousepopup twir_popup" style="top: 0px; left: 0px; display: none;"><div style="width:450px;"><canvas id="twir_mp"></canvas></div></div>'))
            },
            apply: function() {
                var e = ItemPopup.showDivCompare,
                    t = ItemPopup.hideDivCompare,
                    a = ItemPopup.calcComparePosition;
                ItemPopup.showDivCompare = function() {
                    e.apply(this, arguments), TWIR.addPopup.showDiv()
                }, ItemPopup.hideDivCompare = function() {
                    t.apply(this, arguments), TWIR.addPopup.hideDiv()
                }, ItemPopup.calcComparePosition = function(e, t) {
                    a.apply(this, arguments), TWIR.addPopup.data.item = this.item_obj, TWIR.addPopup.calcPosition(e, t)
                }
            },
            showDiv: function() {
                var e = TWIR.addPopup.data.item,
                    t = TWIR.addPopup.getMarketPrice(e);
                t && "none" === $("#popup_div_compare").css("display") && $("#popup-container").find(".twir_popup").css("display", "")
            },
            hideDiv: function() {
                $("#popup-container").find(".twir_popup").css({
                    display: "none",
                    top: 0,
                    left: 0
                })
            },
            calcPosition: function(e, t) {
                try {
                    var a, r, i, o, n, s = TWIR.addPopup.data.item,
                        p = TWIR.addPopup.getMarketPrice(s);
                    if (!p) return;
                    var l = e.width,
                        c = Map.height;
                    a || (a = $("#popup-container").find(".twir_popup")), (n = MousePopup.prototype.wrap(p)) !== r && (a.html(n), r = n, i = a.height(), o = a.width()), t > Map.width / 2 ? e.left = e.left - o : e.left = e.left + l, c - e.top < i + 10 && (e.top = c - (i + 10)), a.css({
                        top: e.top,
                        left: e.left
                    })
                } catch (e) {}
            },
            getMarketPrice: function(t) {
                try {
                    var a = t;
                    if (TWIR.storage.popups.marketBest.hasOwnProperty(a.short) && TWIR.storage.get("mw_item_price_tooltip")) {
                        var r = '<span><img src="' + a.image + '"; height="25"; width="auto"></img></span><span style="color: #8b4513; text-align: center;margin-bottom: 2px;padding-left: 15px;">' + e.tooltips.market_price + ":</span>";
                        r += '<div class="twir_better_popup" style="text-align:left;margin: 0 auto;display: table;"><table style="display: table !important;border-spacing: 1px !important;min-width: 200px; max-width: 220px;"><tbody>';
                        var i = TWIR.storage.popups.marketBest[a.short].avg_min.price_sum / TWIR.storage.popups.marketBest[a.short].avg_min.count,
                            o = TWIR.storage.popups.marketBest[a.short].avg_max.price_sum / TWIR.storage.popups.marketBest[a.short].avg_max.count;
                        r += '<tr><td style="vertical-align: middle!important;padding-left: 2px;color: #00153f;border-spacing: 1px !important;">' + e.tooltips.suggested_price + ':&nbsp;</td><td style="color: black;float: right;vertical-align: middle;">$' + TWIR.replSum(i) + (o > i + 1e3 ? "&nbsp;-&nbsp;$" + TWIR.replSum(o) : "") + "</td></tr>", r += '<tr><td style="vertical-align: middle!important;padding-left: 2px;color: #00153f;border-spacing: 1px !important;font-size: 12px;">' + e.tooltips.minimal_price + "&nbsp;/&nbsp;" + e.tooltips.maximal_price + ':&nbsp;</td><td style="color: black;vertical-align: middle;float: right;">$' + TWIR.replSum(TWIR.storage.popups.marketBest[a.short].offer_min.price) + "&nbsp;/&nbsp;$" + TWIR.replSum(TWIR.storage.popups.marketBest[a.short].offer_max.price) + "</td></tr>", r += '<tr><td style="vertical-align: middle!important;padding-left: 2px;color: #00153f;border-spacing: 1px !important;font-size: 12px;">' + e.tooltips.average + ':&nbsp;</td><td style="color: black;vertical-align: middle;float: right;">$' + TWIR.replSum(TWIR.storage.popups.marketBest[a.short].avg) + "</td></tr>", 0 != TWIR.storage.popups.marketBest[a.short].avg_since && (r += '<tr><td style="vertical-align: middle!important;padding-left: 2px;color: #00153f;border-spacing: 1px !important;font-size: 12px;">' + e.tooltips.average_since.replace("$1", "7") + ':&nbsp;</td><td style="color: black;vertical-align: middle;float: right;">$' + TWIR.replSum(TWIR.storage.popups.marketBest[a.short].avg_since) + "</td></tr>"), r += "</tbody></table></div>", r += '<br><div style="color: #00153f;font-size: 12px;text-align:center;">' + e.tooltips.seen.replace("$1", TWIR.storage.popups.marketBest[a.short].offer_count) + "</div>";
                        var n = new Date - new Date(TWIR.storage.popups.marketBest[a.short].seen);
                        return r += '<div style="color: #00153f;text-align: center;font-size: 12px;">' + e.tooltips.last_seen + ":&nbsp;" + TWIR.timeSince(new Date(Date.now() - n)) + "</div>"
                    }
                    if (TWIR.storage.popups.marketBestJunk.hasOwnProperty(a.short) && TWIR.storage.get("mw_product_price_tooltip")) {
                        var r = '<span><img src="' + a.image + '"; height="25"; width="auto"></img></span><span style="color: #8b4513; text-align: center;margin-bottom: 2px; padding-left: 15px;">' + e.tooltips.market_price + ":</span>";
                        r += '<div class="twir_better_popup" style="text-align:left;margin: 0 auto;display: table;"><table style="display: table !important;border-spacing: 1px !important;min-width: 200px; max-width: 220px;"><tbody>';
                        var i = TWIR.storage.popups.marketBestJunk[a.short].avg_min.price_sum / TWIR.storage.popups.marketBestJunk[a.short].avg_min.count,
                            o = TWIR.storage.popups.marketBestJunk[a.short].avg_max.price_sum / TWIR.storage.popups.marketBestJunk[a.short].avg_max.count;
                        r += '<tr><td style="vertical-align: middle!important;padding-left: 2px;color: #00153f;border-spacing: 1px !important;">' + e.tooltips.suggested_price + ':&nbsp;</td><td style="color: black;float: right;vertical-align: middle;">$' + TWIR.replSum(i) + (o > i + 1e3 ? "&nbsp;-&nbsp;$" + TWIR.replSum(o) : "") + "</td></tr>", r += '<tr><td style="vertical-align: middle!important;padding-left: 2px;color: #00153f;border-spacing: 1px !important;font-size: 12px;">' + e.tooltips.minimal_price + "&nbsp;(" + e.tooltips.each + "&nbsp;/&nbsp;" + TWIR.storage.popups.marketBestJunk[a.short].offer_min_x.count + '):&nbsp;</td><td style="color: black;vertical-align: middle;float: right;">$' + TWIR.replSum(TWIR.storage.popups.marketBestJunk[a.short].offer_min.price) + "&nbsp;/&nbsp;$" + TWIR.replSum(TWIR.storage.popups.marketBestJunk[a.short].offer_min_x.price) + "</td></tr>", r += '<tr><td style="vertical-align: middle!important;padding-left: 2px;color: #00153f;border-spacing: 1px !important;font-size: 12px;">' + e.tooltips.maximal_price + "&nbsp;(" + e.tooltips.each + "&nbsp;/&nbsp;" + TWIR.storage.popups.marketBestJunk[a.short].offer_max_x.count + '):&nbsp;</td><td style="color: black;vertical-align: middle;float: right;">$' + TWIR.replSum(TWIR.storage.popups.marketBestJunk[a.short].offer_max.price) + "&nbsp;/&nbsp;$" + TWIR.replSum(TWIR.storage.popups.marketBestJunk[a.short].offer_max_x.price) + "</td></tr>", r += "</tbody></table></div>", r += '<br><div style="color: #00153f;font-size: 12px;text-align:center;">' + e.tooltips.seen.replace("$1", TWIR.storage.popups.marketBestJunk[a.short].offer_count) + "</div>";
                        var n = new Date - new Date(TWIR.storage.popups.marketBestJunk[a.short].seen);
                        return r += '<div style="color: #00153f;text-align: center;font-size: 12px;">' + e.tooltips.last_seen + ":&nbsp;" + TWIR.timeSince(new Date(Date.now() - n)) + "</div>"
                    }
                    return !1
                } catch (e) {
                    return !1
                }
            }
        }, TWIR.enhancedPopups = {
            init: function() {
                TWIR.enhancedPopups.jobPopup(), TWIR.enhancedPopups.itemPopup()
            },
            jobPopup: function() {
                try {
                    var e = 0;
                    Ajax.remoteCallMode("character", "ajax_get_buffs", {}, function(t) {
                        if (t.msg.event && void 0 !== t.msg.event.description)
                            for (var a = t.msg.event.description, r = 0; r < a.length; r++) {
                                var i = a[r].replace(/[0-9\%\+\:\-\$\.]/g, "").replace(/(\(|\)).*/g, "").trim(),
                                    o = new RegExp("^.*" + i + "(.*)$", "i");
                                o.test(TWIR.usebonus.desc.experience) && (e += t.msg.event.description[r].replace(/[^0-9.]/g, ""))
                            }
                        if (t.msg.character && void 0 !== t.msg.character.description)
                            for (var n = t.msg.character.description, s = 0; s < n.length; s++) {
                                var p = n[s].replace(/[0-9\%\+\:\-\$\.]/g, "").replace(/(\(|\)).*/g, "").trim(),
                                    l = new RegExp("^.*" + p + "(.*)$", "i");
                                l.test(TWIR.usebonus.desc.experience) && (e += t.msg.character.description[s].replace(/[^0-9.]/g, ""))
                            }
                    });
                    var t = Map.PopupHandler.getJobPopup;
                    Map.PopupHandler.getJobPopup = function(a) {
                        var r = t.apply(this, arguments);
                        if (JobsModel.Beans.hasOwnProperty(a.id)) {
                            var i = JobsModel.Beans[a.id].basis.short.experience + JobsModel.Beans[a.id].basis.short.bonus_experience,
                                o = Math.floor(e / 100 * i);
                            r = r.replace('<div class="strong">' + a.name + "</div>", '$&  <div class="marker_popup_small_text" style="font-weight: bold;">' + (i + o) + "&nbsp;xp&nbsp;/" + JobsModel.Beans[a.id].basis.short.duration.getTime2EndToken() + "</strong></div>");
                            for (var n = {}, s = 0, p = 0, l = 0; l < JobsModel.Beans[a.id].basis.long.yields.length; l++) {
                                var c = ItemManager.get(JobsModel.Beans[a.id].basis.long.yields[l].itemid).short;
                                s = JobsModel.Beans[a.id].basis.long.yields[l].prop || 0, p = JobsModel.Beans[a.id].basis.long.yields[l].probBonus || 0;
                                var A = s + p,
                                    g = A.toFixed(0);
                                n[c] = {
                                    percentage: g
                                }
                            }
                            for (var m in a.yields) {
                                var d = ItemManager.get(m),
                                    u = void 0 !== n[d.short] && 0 != n[d.short].percentage ? n[d.short].percentage : Math.ceil(600 * a.yields[m].prop),
                                    I = JobsModel.Beans[a.id].basis.long.duration.getTime2EndToken();
                                r = r.replace("</div>" + d.name + "</div>", "</div>" + d.name + '<div class="marker_popup_small_text" style="font-weight: normal!important;">(' + u + "&nbsp;%&nbsp;/" + I + ")</div></div>")
                            }
                        }
                        return r
                    }
                } catch (e) {
                    TWIR.bugHunt(e)
                }
            },
            itemPopup: function() {
                var t = ItemPopup.getXHTML;
                ItemPopup.getXHTML = function() {
                    try {
                        var a = "",
                            r = t.call(this);
                        if ((r = r.replace(/<br><span class="inventory_popup_requirement_text(.*?)>$/, function(e) {
                                return a = e, "<br>"
                            }).replace('<div class="invPopup_body">', "").replace('inventory_popup"', 'invPopup_body $& style="max-width:550px!important;min-width: 130px!important;padding-left: 10px!important;"><table><td style="min-width: 200px; max-width: 250px;"').replace(/bonus_attr tw_green"/g, '$& style="max-width:220px;min-width:150px;display:block;"').replace('<br><br><div class="item_set_bonus">', a + '</td><td><div style="display: inline-block;background: url(' + Game.cdnURL + '/images/window/wof/prizes_sep.jpg);width: 25px;height: 270px;margin: 15px 0;"/></td><td style="min-width: 200px; max-width: 250px;">')).includes(a) || (r += a), r = (r = r.replace(/invPopup_head"/g, '$& style="max-height: 140px!important; height: auto!important;"')).replace(/(<p)(>)/g, '$1 class="inventory_popup_type" style="max-width: 250px!important;margin-left: auto;margin-right: auto;">'), TWIR.storage.get("pop_owned_counts")) {
                            var i = Wear.item_ids.includes(this.item_obj.item_id) ? 1 : 0;
                            r = r.replace('<div class="inventory_popup_icon">', '$&<div class="item"><span class="count" style="display:block;top:74px;left:3px">' + TWIR.replSum(Bag.getItemCount(this.item_obj.item_id) + i) + "</span></div>")
                        }
                        TWIR.storage.get("pop_item_id") && (r = r.replace('<div><img src="' + Game.cdnURL + '/images/fort/battle/divider.png" alt=""></div>', '<div class="twir_id" style="margin-top: 2px;color: blue;text-align: center;font-size: 12px;">[item=<b>' + this.item_obj.item_id + '</b>]</div> <div style="text-align: center;"><img src="' + Game.cdnURL + '/images/fort/battle/divider.png" alt=""></div>'));
                        var o = !!TWIR.storage.get("pop_display_event") && TWIR.storage.setList.eventIcons[this.item_obj.set],
                            n = o ? "block" : "none",
                            s = TWIR.storage.setList.eventIcons[this.item_obj.set] && o ? TWIR.images.gameEvents[o[0]] : "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
                            p = TWIR.storage.setList.eventIcons[this.item_obj.set] && o ? o[1] : "";
                        if (r = r.replace(/(<p\s+class="inventory_popup_type">)([\S\s]*?<\/p>)/gi, '<div style="text-align: center; display: ' + n + ';"><img src="' + s + '" height="16" width="auto"></img><span style="margin-right: 10px;position: relative;font-size: 11px;font-style: italic;vertical-align: middle;">' + p + '</span></div> <p class="inventory_popup_type" style="max-width: 250px!important;margin-left: auto;margin-right: auto;"> $2'), this.item_obj instanceof west.item.Weapon && TWIR.storage.get("pop_avg_dmg")) {
                            var l = this.item_obj.getDamage(this.options.character),
                                c = Math.floor((l.min + l.max) / 2);
                            r = r.replace('-<span class="current_value">' + l.max + "</span>", '$&<span style="color: #084f29;">&nbsp;(' + c + ")</span>")
                        }
                        if (this.item_obj.usebonus && "recipe" !== this.item_obj.type && TWIR.storage.get("pop_bonus_calc")) {
                            for (var A = TWIR.usebonus.keys.energy, g = TWIR.usebonus.keys.health, m = "", d = 0; d < this.item_obj.usebonus.length; d++)
                                if (this.item_obj.usebonus[d].match(A)) {
                                    var u = this.item_obj.usebonus[d].replace(/[^0-9.]/g, "").replace(/(\(|\)).*/g, "").trim();
                                    if (u < 100) {
                                        var I = Math.floor(u / 100 * Character.maxEnergy);
                                        m += "<li>" + this.item_obj.usebonus[d] + "&nbsp;(+" + I + ")</li>"
                                    } else m += "<li>" + this.item_obj.usebonus[d] + "</li>"
                                } else if (this.item_obj.usebonus[d].match(g)) {
                                var h = this.item_obj.usebonus[d].replace(/[^0-9.]/g, "").replace(/(\(|\)).*/g, "").trim();
                                if (h < 100) {
                                    var k = Math.floor(h / 100 * Character.maxHealth);
                                    m += "<li>" + this.item_obj.usebonus[d] + "&nbsp;(+" + k + ")</li>"
                                } else m += "<li>" + this.item_obj.usebonus[d] + "</li>"
                            } else m += "<li>" + this.item_obj.usebonus[d] + "</li>";
                            r = r.replace(/<ul\s+class="inventory_popup_effect_list">[\S\s]*?<\/ul>/gi, '<ul class="inventory_popup_effect_list" style="max-width: 220px;display: block;min-width: 170px;white-space: unset!important;"> ' + m + " </ul>")
                        }!1 === this.item_obj.auctionable && !0 === this.item_obj.upgradeable ? r = r.replace(/(invPopup_foot")(>)/g, '$1 style="display:block;text-align: center;font-size: 13px!important;"><p class="tw_red">' + e.tooltips.not_auctionable + '</p><p class="tw_green">' + e.tooltips.upgradeable + "</p>") : !1 === this.item_obj.auctionable ? r = r.replace(/(invPopup_foot")(>)/g, '$1 style="display:block;text-align: center;font-size: 13px!important;"> <p class="tw_red">' + e.tooltips.not_auctionable + "</p>") : !0 === this.item_obj.upgradeable && (r = r.replace(/(invPopup_foot")(>)/g, '$1 style="display:block;text-align: center;font-size: 13px!important;"> <p class="tw_green">' + e.tooltips.upgradeable + "</p>")), !0 === this.item_obj.auctionable && (r = r.replace(/(<br>)(<p\s+class="inventory_popup_auctionable tw_green">[\S\s]*?<\/p>)/gi, "$2")), !1 === this.item_obj.upgradeable && (r = r.replace(/(<br>)(<p\s+class="inventory_popup_notupgradeable tw_red">[\S\s]*?<\/p>)/gi, "$2")), !1 === this.item_obj.sellable && (r = r.replace(/invPopup_notsellable"/g, '$& style="text-align: center;color: #900;font-style: normal!important;font-size: 13px!important;display: block!important;"')), r = (r = (r = (r = (r = (r = (r = (r = r.replace(/inventory_popup_label tw_green"/g, '$& style="max-width: 220px;display: block;min-width: 170px;white-space: unset!important;padding-top: 4px;margin-left: 5px;margin-right: 5px;"')).replace(/inventory_popup_label"/g, '$& style="max-width: 220px;display: block;min-width: 170px;white-space: unset!important;padding-top: 4px;margin-left: 5px;margin-right: 5px;"')).replace(/inventory_popup_bonus_skills"/g, '$& style="max-width: 200px;display: block;min-width: 170px;white-space: unset!important;margin-left: 10px;"')).replace(/(<br>)(<span\s+class="inventory_popup_requirement_text">[\S\s]*?<\/span>)/gi, "$2 <br>")).replace(/<br><p\s+class="inventory_alreadyown">[\S\s]*?<\/p>/gi, "")).replace(/<div\s+class="inventory_popup_prices">[\S\s]*?<\/div>/gi, "$& <br> ")).replace(/<span\s+class="inventory_popup_character_sex">[\S\s]*?<\/span>/gi, "$& <br>")).replace(/<span\s+class="inventory_popup_character_sex text_red">[\S\s]*?<\/span>/gi, "$& <br>");
                        var R = TWIR.storage.popups.marketBest.hasOwnProperty(this.item_obj.short) && TWIR.storage.popups.marketBest[this.item_obj.short].avg >= 1e4 ? TWIR.replSum(TWIR.storage.popups.marketBest[this.item_obj.short].avg) : TWIR.storage.popups.marketBest.hasOwnProperty(this.item_obj.short) ? TWIR.storage.popups.marketBest[this.item_obj.short].avg.toFixed(0) : 0,
                            b = TWIR.storage.popups.marketBest.hasOwnProperty(this.item_obj.short) && TWIR.storage.get("pop_market_price") ? '<div style="margin-top: 5px;"><span class="tw2gui-iconset tw2gui-icon-world" style="display: inline-block; vertical-align: top;"/>&nbsp;&#36;' + R + "</div>" : "";
                        if (TWIR.storage.popups.shop_prices.hasOwnProperty(this.item_obj.short) && TWIR.storage.get("pop_ups_price")) {
                            var y = 1 === this.item_obj.item_level ? 3 : 2 === this.item_obj.item_level ? 9 : 3 === this.item_obj.item_level ? 27 : 4 === this.item_obj.item_level ? 81 : 5 === this.item_obj.item_level ? 243 : 1,
                                w = 3 === TWIR.storage.popups.shop_prices[this.item_obj.short].currency ? '<span style="display: inline-block;position: relative;top: 3px;background: url(' + TWIR.images.currency.bonds_nuggets + ') no-repeat;width: 16px;height: 16px;"></span><span>&nbsp;' + (TWIR.storage.get("pop_short_currency") ? TWIR.replSum(TWIR.storage.popups.shop_prices[this.item_obj.short].price_bonds * y, !0) : TWIR.storage.popups.shop_prices[this.item_obj.short].price_bonds * y) + "</span>" : 2 === TWIR.storage.popups.shop_prices[this.item_obj.short].currency ? '<span style="display: inline-block;position: relative;top: 3px;background: url(' + TWIR.images.currency.nuggets + ') no-repeat;width: 16px;height: 16px;"></span><span>&nbsp;' + (TWIR.storage.get("pop_short_currency") ? TWIR.replSum(TWIR.storage.popups.shop_prices[this.item_obj.short].price_nuggets * y, !0) : TWIR.storage.popups.shop_prices[this.item_obj.short].price_nuggets * y) + "</span>" : 1 === TWIR.storage.popups.shop_prices[this.item_obj.short].currency ? '<span style="display: inline-block;position: relative;top: 3px;background: url(' + TWIR.images.currency.bonds + ') no-repeat;width: 16px;height: 16px;"></span><span>&nbsp;' + (TWIR.storage.get("pop_short_currency") ? TWIR.replSum(TWIR.storage.popups.shop_prices[this.item_obj.short].price_bonds * y, !0) : TWIR.storage.popups.shop_prices[this.item_obj.short].price_bonds * y) + "</span>" : 8 === TWIR.storage.popups.shop_prices[this.item_obj.short].currency ? '<span style="display: inline-block;position: relative;top: 3px;background: url(' + TWIR.images.currency.veteran + ') no-repeat;width: 16px;height: 16px;"></span><span>&nbsp;' + (TWIR.storage.get("pop_short_currency") ? TWIR.replSum(TWIR.storage.popups.shop_prices[this.item_obj.short].price_veteran * y, !0) : TWIR.storage.popups.shop_prices[this.item_obj.short].price_veteran * y) + "</span>" : 7 === TWIR.storage.popups.shop_prices[this.item_obj.short].currency ? '<span style="display: inline-block;position: relative;top: 3px;background: url(' + TWIR.images.currency.bonds_nuggets + ') no-repeat;width: 16px;height: 16px;"></span><span>&nbsp;' + (TWIR.storage.get("pop_short_currency") ? TWIR.replSum(TWIR.storage.popups.shop_prices[this.item_obj.short].price_nuggets * y, !0) : TWIR.storage.popups.shop_prices[this.item_obj.short].price_nuggets * y) + '</span><span style="display: inline-block;position: relative;top: 3px;background: url(' + TWIR.images.currency.dollars + ') no-repeat;width: 16px;height: 16px;margin-left: 5px;"/><span>&nbsp;&#36;' + TWIR.replSum(TWIR.storage.popups.shop_prices[this.item_obj.short].price_dollar * y) + "</span>" : "",
                                x = null !== TWIR.storage.popups.shop_prices[this.item_obj.short].limited_time ? '<span style="color: #666;">&nbsp;(' + TWIR.msToTime((new Date(1e3 * TWIR.storage.popups.shop_prices[this.item_obj.short].limited_time).getTime() - (new Date).getTime()) / 1e3) + ")</span>" : "",
                                f = 0 != TWIR.storage.popups.shop_prices[this.item_obj.short].reduced_value ? '<span style="color: #666;">&nbsp;/-' + TWIR.storage.popups.shop_prices[this.item_obj.short].reduced_value + "%</span>" : "";
                            r = r.replace(/(<div\s+class="inventory_popup_prices">[\S\s]*?)(<\/div>)/gi, "$1" + b + '<div class="twir_other_popup_prices">&nbsp;' + w + f + x + "</div> $2")
                        } else if (TWIR.storage.popups.shop_limited_prices.hasOwnProperty(this.item_obj.short) && TWIR.storage.get("pop_ups_price")) {
                            var y = 1 === this.item_obj.item_level ? 3 : 2 === this.item_obj.item_level ? 9 : 3 === this.item_obj.item_level ? 27 : 4 === this.item_obj.item_level ? 81 : 5 === this.item_obj.item_level ? 243 : 1,
                                w = 3 === TWIR.storage.popups.shop_limited_prices[this.item_obj.short].currency ? '<span style="display: inline-block;position: relative;top: 3px;background: url(' + TWIR.images.currency.bonds_nuggets + ') no-repeat;width: 16px;height: 16px;"></span><span>&nbsp;' + (TWIR.storage.get("pop_short_currency") ? TWIR.replSum(TWIR.storage.popups.shop_limited_prices[this.item_obj.short].price_bonds * y, !0) : TWIR.storage.popups.shop_limited_prices[this.item_obj.short].price_bonds * y) + "</span>" : 2 === TWIR.storage.popups.shop_limited_prices[this.item_obj.short].currency ? '<span style="display: inline-block;position: relative;top: 3px;background: url(' + TWIR.images.currency.nuggets + ') no-repeat;width: 16px;height: 16px;"></span><span>&nbsp;' + (TWIR.storage.get("pop_short_currency") ? TWIR.replSum(TWIR.storage.popups.shop_limited_prices[this.item_obj.short].price_nuggets * y, !0) : TWIR.storage.popups.shop_limited_prices[this.item_obj.short].price_nuggets * y) + "</span>" : 1 === TWIR.storage.popups.shop_limited_prices[this.item_obj.short].currency ? '<span style="display: inline-block;position: relative;top: 3px;background: url(' + TWIR.images.currency.bonds + ') no-repeat;width: 16px;height: 16px;"></span><span>&nbsp;' + (TWIR.storage.get("pop_short_currency") ? TWIR.replSum(TWIR.storage.popups.shop_limited_prices[this.item_obj.short].price_bonds * y, !0) : TWIR.storage.popups.shop_limited_prices[this.item_obj.short].price_bonds * y) + "</span>" : 8 === TWIR.storage.popups.shop_limited_prices[this.item_obj.short].currency ? '<span style="display: inline-block;position: relative;top: 3px;background: url(' + TWIR.images.currency.veteran + ') no-repeat;width: 16px;height: 16px;"></span><span>&nbsp;' + (TWIR.storage.get("pop_short_currency") ? TWIR.replSum(TWIR.storage.popups.shop_limited_prices[this.item_obj.short].price_veteran * y, !0) : TWIR.storage.popups.shop_limited_prices[this.item_obj.short].price_veteran * y) + "</span>" : 7 === TWIR.storage.popups.shop_limited_prices[this.item_obj.short].currency ? '<span style="display: inline-block;position: relative;top: 3px;background: url(' + TWIR.images.currency.bonds_nuggets + ') no-repeat;width: 16px;height: 16px;"></span><span>&nbsp;' + (TWIR.storage.get("pop_short_currency") ? TWIR.replSum(TWIR.storage.popups.shop_limited_prices[this.item_obj.short].price_nuggets * y, !0) : TWIR.storage.popups.shop_limited_prices[this.item_obj.short].price_nuggets * y) + '</span><span style="display: inline-block;position: relative;top: 3px;background: url(' + TWIR.images.currency.dollars + ') no-repeat;width: 16px;height: 16px;margin-left: 5px;"/><span>&nbsp;&#36;' + TWIR.replSum(TWIR.storage.popups.shop_limited_prices[this.item_obj.short].price_dollar * y) + "</span>" : "";
                            r = r.replace(/(<div\s+class="inventory_popup_prices">[\S\s]*?)(<\/div>)/gi, "$1" + b + '<div class="twir_popup_limited_prices">&nbsp;' + w + "</div> $2")
                        } else r = r.replace(/(<div\s+class="inventory_popup_prices">[\S\s]*?)(<\/div>)/gi, "$1" + b + "$2");
                        if (TWIR.storage.get("pop_trader") && null !== this.item_obj.traderlevel && this.item_obj.traderlevel <= 20) switch (this.item_obj.type) {
                            case "belt":
                            case "body":
                            case "foot":
                            case "head":
                            case "pants":
                                r = r.replace(/(<div\s+class="inventory_popup_prices">[\S\s]*?)(<\/div>)/gi, '$1 <div class="twir_trader" style="color: #666;"> ' + Trader.name.tailor + "&nbsp;(Lvl&nbsp;" + this.item_obj.traderlevel + ")</div> $2");
                                break;
                            case "right_arm":
                            case "left_arm":
                                r = r.replace(/(<div\s+class="inventory_popup_prices">[\S\s]*?)(<\/div>)/gi, '$1 <div class="twir_trader" style="color: #666;"> ' + Trader.name.gunsmith + "&nbsp;(Lvl&nbsp;" + this.item_obj.traderlevel + ")</div> $2");
                                break;
                            case "belt":
                            case "neck":
                            case "animal":
                                r = r.replace(/(<div\s+class="inventory_popup_prices">[\S\s]*?)(<\/div>)/gi, '$1 <div class="twir_trader" style="color: #666;"> ' + Trader.name.general + "&nbsp;(Lvl&nbsp;" + this.item_obj.traderlevel + ")</div> $2")
                        }
                        if (!this.item_obj.sellable && this.item_obj.auctionable && TWIR.storage.get("pop_min_market_price")) {
                            var T = "";
                            if (0 != this.item_obj.sell_price) {
                                var W = TWIR.storage.get("pop_short_currency") ? TWIR.replSum(this.item_obj.sell_price, !0) : this.item_obj.sell_price;
                                T = '<span class="inventory_popup_trader_price_sell"><span class="invPopup_sellicon"/>&nbsp;$' + W + "</span>"
                            }
                            var B = TWIR.storage.get("pop_short_currency") ? TWIR.replSum(this.item_obj.price / 2 * (this.options.traderCharge || 1)) : this.item_obj.price / 2 * (this.options.traderCharge || 1);
                            r = r.replace(/(inventory_popup_prices")(>)/g, '$1 style="margin-bottom: 5px;"> <span class="inventory_popup_trader_price_buy"><span class="tw2gui-iconset tw2gui-icon-friends" style="display: inline-block; vertical-align: top;"/>&nbsp;&#36;' + B + "</span>" + T)
                        }
                        if (TWIR.storage.get("pop_short_currency") && (null !== this.item_obj.price && this.item_obj.price >= 1e4 && (r = r.replace("&nbsp;$" + this.item_obj.price * (this.options.traderCharge || 1), "&nbsp;&#36;" + TWIR.replSum(this.item_obj.price * (this.options.traderCharge || 1), !0))), 0 != this.item_obj.sell_price && this.item_obj.price >= 1e4 && (r = r.replace("&nbsp;$" + this.item_obj.sell_price, "&nbsp;&#36;" + TWIR.replSum(this.item_obj.sell_price, !0)))), "crafting" == this.item_obj.spec_type && TWIR.storage.popups.crafting.hasOwnProperty(this.item_obj.item_id)) {
                            for (var v = 2147483647, M = 0; M < TWIR.storage.popups.crafting[this.item_obj.item_id].resources.length; M++) {
                                var S = Bag.getItemByItemId(TWIR.storage.popups.crafting[this.item_obj.item_id].resources[M].item);
                                if (void 0 !== S && S.count >= TWIR.storage.popups.crafting[this.item_obj.item_id].resources[M].count) {
                                    var U = Math.floor(S.count / TWIR.storage.popups.crafting[this.item_obj.item_id].resources[M].count);
                                    v = U < v ? U : v
                                } else v = 0
                            }
                            if (TWIR.storage.get("pop_crafting_recipe")) {
                                var V = Character.professionId == TWIR.storage.popups.crafting[this.item_obj.item_id].profsymbol && Character.professionSkill >= ItemManager.getByBaseId(TWIR.storage.popups.crafting[this.item_obj.item_id].recipe).min_level ? "#070" : "#8b4513";
                                r += '<br><div style="color: ' + V + '; text-align: center;margin-bottom: 2px;">' + e.tooltips.craftable + (0 != v ? "&nbsp;(" + TWIR.replSum(v) + ")" : "") + ":</div>";
                                for (var K = '<div class="twir_better_popup" style="text-align:center;margin: 0 auto;display: table;"><table style="display: table !important;border-collapse: separate !important;border-spacing: 1px !important;border-radius: 3px;border: 1px solid #804000;"><tbody><tr><td style="padding: 5px;border: 1px solid #996b39;border-color: rgba(110,57,0,0.5);background-color: #d4ba91 !important;background-image: none !important;color: #5e321a !important;font-size: 16px;border-collapse: separate !important;border-spacing: 1px !important;vertical-align: middle!important;"><img src="' + Game.cdnURL + "/images/crafting/profsymbol_" + TWIR.storage.popups.crafting[this.item_obj.item_id].profsymbol + '_small.png"></td><td style="padding: 5px;border: 1px solid #996b39;border-color: rgba(110,57,0,0.5);background-color: #d4ba91 !important;background-image: none !important;color: #5e321a !important;font-size: 16px;border-collapse: separate !important;border-spacing: 1px !important;"><table style="display: table !important;border-collapse: separate !important;border-spacing: 1px !important;border-radius: 3px;border: 1px solid #804000;"><tbody><tr>', j = 0; j < TWIR.storage.popups.crafting[this.item_obj.item_id].resources.length; j++) {
                                    var C = Bag.getItemByItemId(TWIR.storage.popups.crafting[this.item_obj.item_id].resources[j].item),
                                        E = void 0 !== C ? C.count : 0,
                                        q = E < TWIR.storage.popups.crafting[this.item_obj.item_id].resources[j].count ? "#900!important" : "#5e321a!important";
                                    K += '<td style="vertical-align: middle!important;padding: 5px;border: 1px solid #996b39;border-color: rgba(110,57,0,0.5);background-color: #d4ba91 !important;background-image: none !important;color: #5e321a ;font-size: 16px;border-collapse: separate !important;border-spacing: 1px !important;"><img style="width:30px;height:30px;" src="' + ItemManager.get(TWIR.storage.popups.crafting[this.item_obj.item_id].resources[j].item).image + '"><div style="font-size:8pt;">(<span style="color: ' + q + ';">' + TWIR.replSum(E) + "</span>)</div></td>"
                                }
                                K += "</tr><tr>";
                                for (var Y = 0; Y < TWIR.storage.popups.crafting[this.item_obj.item_id].resources.length; Y++) K += '<td style="vertical-align: middle!important;padding: 5px;border: 1px solid #996b39;border-color: rgba(110,57,0,0.5);background-color: #d4ba91 !important;background-image: none !important;color: #5e321a !important;font-size: 14px;border-collapse: separate !important;border-spacing: 1px !important;"><span>x' + TWIR.storage.popups.crafting[this.item_obj.item_id].resources[Y].count + "</span></td>";
                                K += "</tr></tbody></table></td></tr></tbody></table></div>"
                            }
                            var G = ItemManager.getByBaseId(TWIR.storage.popups.crafting[this.item_obj.item_id].recipe).min_level >= 50;
                            TWIR.storage.get("pop_recipe_table") && G && (K += '<div class="twir_better_popup" style="text-align:center;margin: 0 auto;display: table;"><table style="display: table !important;border-collapse: separate !important;border-spacing: 1px !important;border-radius: 3px;border: 1px solid #804000;"><tbody><tr><td style="vertical-align: middle!important;padding: 5px;border: 1px solid #996b39;border-color: rgba(110,57,0,0.5);background-color: #d4ba91 !important;background-image: none !important;color: #5e321a !important;font-size: 16px;border-collapse: separate !important;border-spacing: 1px !important;"><img style="width: 30px;height: 30px;" src="' + ItemManager.getByBaseId(TWIR.storage.popups.crafting[this.item_obj.item_id].recipe).image + '"/></td><td style="vertical-align: middle!important;padding: 5px;border: 1px solid #996b39;border-color: rgba(110,57,0,0.5);background-color: #d4ba91 !important;background-image: none !important;color: #5e321a !important;font-style: italic;font-size: 8pt;border-collapse: separate !important;border-spacing: 1px !important;width: 125px;"><span>' + ItemManager.getByBaseId(TWIR.storage.popups.crafting[this.item_obj.item_id].recipe).name + "&nbsp;(" + ItemManager.getByBaseId(TWIR.storage.popups.crafting[this.item_obj.item_id].recipe).min_level + ")</span></td></tr></tbody></table></div>"), r += K
                        }
                        if (JobList.dropsItem(this.item_obj.item_id) && TWIR.storage.get("pop_job_table")) {
                            var F = JobList.getJobsByItemId(this.item_obj.item_id);
                            r += '<br><div style="color: #8b4513; text-align: center;margin-bottom: 2px;">' + e.tooltips.jobdrop + ":</div>";
                            for (var Q = '<div class="twir_better_popup" style="text-align:center;margin: 0 auto;display: table;"><table style="display: table !important;border-collapse: separate !important;border-spacing: 1px !important;border-radius: 3px;border: 1px solid #804000;"><tbody>', O = 0; O < F.length; O++) {
                                var J = 0,
                                    H = 0;
                                if ($.isEmptyObject(JobsModel.Beans) || null == JobsModel.Beans[F[O].id].basis.long.yields[0]) J = Math.ceil(600 * F[O].yields[this.item_obj.item_id].prop), H = 0;
                                else if (!$.isEmptyObject(JobsModel.Beans) && void 0 !== JobsModel.Beans[F[O].id].basis.long.yields[0])
                                    for (var D = 0; D < JobsModel.Beans[F[O].id].basis.long.yields.length; D++) JobsModel.Beans[F[O].id].basis.long.yields[D].itemid === this.item_obj.item_id && (J = JobsModel.Beans[F[O].id].basis.long.yields[D].prop, H = JobsModel.Beans[F[O].id].basis.long.yields[D].probBonus);
                                var Z = J + H,
                                    P = $.isEmptyObject(JobsModel.Beans) || 0 == Z ? "" : "&nbsp;(" + Z.toFixed(0) + "&nbsp;%)";
                                F.hasOwnProperty(O) && (Q += '<tr><td style="vertical-align: middle!important;padding: 5px;border: 1px solid #996b39;border-color: rgba(110,57,0,0.5);background-color: #d4ba91 !important;background-image: none !important;color: #5e321a !important;font-size: 16px;border-collapse: separate !important;border-spacing: 1px !important;"><img style="width: 30px;height: 30px;" src="' + Game.cdnURL + "/images/jobs/" + F[O].shortname + '.png"/></td><td style="vertical-align: middle!important;padding: 5px;border: 1px solid #996b39;border-color: rgba(110,57,0,0.5);background-color: #d4ba91 !important;background-image: none !important;color: #5e321a !important;font-style: italic;font-size: 8pt;border-collapse: separate !important;border-spacing: 1px !important;width: 125px;"><span>' + F[O].name + P + "</span></td></tr>")
                            }
                            r += Q += "</tbody></table></div>"
                        }
                        if (null !== this.item_obj.set) var z = west.storage.ItemSetManager.get(this.item_obj.set),
                            N = z.getWornItems().length,
                            L = void 0 !== Wear.get(this.item_obj.type) ? Wear.get(this.item_obj.type).obj.set : null,
                            X = null !== L ? west.storage.ItemSetManager.get(L) : null,
                            _ = null !== L ? X.getWornItems().length : 0;
                        if (TWIR.storage.get("pop_partial_bonus") && null !== this.item_obj.set && 0 === N && (r += '<td><div style="display: inline-block;background: url(' + Game.cdnURL + '/images/window/wof/prizes_sep.jpg);width: 25px;height: 270px;margin: 15px 0;"/></td><td class="twir_popup_pb" style="min-width: 200px;max-width: 250px;">'), null !== this.item_obj.set) {
                            var ee = 0;
                            if (ee = 11 == z.items.length ? 10 : 3 == z.items.length ? 2 : 9 == z.items.length ? 8 : 6 == z.items.length ? 6 : z.items.length, null !== X) {
                                11 == X.items.length ? 10 : 3 == X.items.length ? 2 : 9 == X.items.length ? 8 : 6 == X.items.length ? 6 : X.items.length
                            }
                            var te = new west.item.BonusExtractor(Character);
                            if (TWIR.storage.get("pop_partial_bonus") && 0 == N) {
                                var ae = _ > ee ? ee : 0 === _ ? ee : _,
                                    re = '<br><div style="color: #8b4513; font-weight: bold;">(' + ae + ") " + e.tooltips.partial_items_bonus + ":</div>";
                                re += '<div style="color: #666; margin-bottom: 5px;font-style: italic;">' + (null !== X ? "&nbsp;>&nbsp;" + X.name : "") + "</div>", re += '<ul class="twir_partial_bonus" style="max-width: 200px;display: block;min-width: 170px;margin-left: 10px;">';
                                var ie = _ > ee ? z.getMergedStages(ee) : 0 === _ ? z.getMergedStages(ee) : z.getMergedStages(_),
                                    oe = null !== X && _ > ee ? X.getMergedStages(ee) : null !== X ? X.getMergedStages(_) : [];
                                ie.sort(function(e, t) {
                                    var a = function(e, t) {
                                            return (e.bonus ? e.bonus.type : e.type) == t && (e.bonus ? e.bonus.name : e.name)
                                        },
                                        r = a(e, "attribute"),
                                        i = a(t, "attribute"),
                                        o = a(e, "skill"),
                                        n = a(t, "skill");
                                    return r && i ? r < i ? -1 : 1 : r ? -1 : i ? 1 : o && n ? 0 : o ? -1 : n ? 1 : 0
                                }), oe.sort(function(e, t) {
                                    var a = function(e, t) {
                                            return (e.bonus ? e.bonus.type : e.type) == t && (e.bonus ? e.bonus.name : e.name)
                                        },
                                        r = a(e, "attribute"),
                                        i = a(t, "attribute"),
                                        o = a(e, "skill"),
                                        n = a(t, "skill");
                                    return r && i ? r < i ? -1 : 1 : r ? -1 : i ? 1 : o && n ? 0 : o ? -1 : n ? 1 : 0
                                });
                                for (var ne = [], se = [], pe = 0; pe < ie.length; pe++) {
                                    var le = void 0 !== te.getDesc(ie[pe]) ? te.getDesc(ie[pe]).replace(/[^0-9.\%]/g, "") : "",
                                        ce = void 0 !== te.getDesc(ie[pe]) ? te.getDesc(ie[pe]).replace(/[0-9\%\+\.\,]/g, "").replace(/(\(|\)).*/g, "").trim() : "";
                                    ne.push({
                                        skill: ce,
                                        value: le
                                    })
                                }
                                for (var Ae = 0; Ae < oe.length; Ae++) {
                                    var ge = void 0 !== te.getDesc(oe[Ae]) ? te.getDesc(oe[Ae]).replace(/[^0-9.\%]/g, "") : "",
                                        me = void 0 !== te.getDesc(oe[Ae]) ? te.getDesc(oe[Ae]).replace(/[0-9\%\+\.\,]/g, "").replace(/(\(|\)).*/g, "").trim() : "";
                                    se.push({
                                        skill: me,
                                        value: ge
                                    })
                                }
                                for (var de = [], ue = 0; ue < ne.length; ue++) {
                                    for (var Ie = 0; Ie < se.length; Ie++)
                                        if (ne[ue].skill === se[Ie].skill) {
                                            var he = ne[ue].value.indexOf("%") > -1 && se[Ie].value.indexOf("%") > -1,
                                                ke = parseFloat(ne[ue].value) - parseFloat(se[Ie].value);
                                            de.push({
                                                skill: ne[ue].skill,
                                                diff: he ? ke + "%" : ke,
                                                value: ne[ue].value
                                            })
                                        } de.find(e => e.skill === ne[ue].skill) || de.push({
                                        skill: ne[ue].skill,
                                        diff: null,
                                        value: ne[ue].value
                                    })
                                }
                                for (var Re = 0; Re < se.length; Re++) de.find(e => e.skill === se[Re].skill) || de.push({
                                    skill: se[Re].skill,
                                    diff: "red",
                                    value: se[Re].value
                                });
                                for (var be = 0; be < de.length; be++)
                                    if ("red" !== de[be].diff) {
                                        var ye = null === de[be].diff ? '&nbsp;(<span class="tw_green">+' + de[be].value + "</span>)&nbsp;" : parseFloat(de[be].diff) > 0 ? '&nbsp;(<span class="tw_green">+' + de[be].diff + "</span>)&nbsp;" : parseFloat(de[be].diff) < 0 ? '&nbsp;(<span class="tw_red">' + de[be].diff + "</span>)&nbsp;" : "&nbsp;",
                                            we = 0 === de[be].diff ? "color: #CC7722" : "color: #666";
                                        re += '<li style="' + we + ';">' + de[be].value + "&nbsp;" + de[be].skill + ye + "</li>"
                                    } for (var xe = 0; xe < de.length; xe++) "red" === de[xe].diff && (re += '<li class="tw_red">-' + de[xe].value + "&nbsp;" + de[xe].skill + "</li>");
                                r += re += "</ul>"
                            }
                            var fe = N > 0 ? "&nbsp;(" + N + "/" + ee + ")" : "",
                                Te = TWIR.storage.get("pop_set_id") ? '<div style="color: #666; text-align: center;">(' + this.item_obj.set + ")</div>" : "";
                            if (N > 0) r = r.replace('<span class="text_bold">' + z.name + ":</span>", '<span style="color: #800080 !important;font-weight: bold;max-width: 220px;display: block;text-align: center;margin-bottom: 5px;">' + z.name + fe + "</span>" + Te);
                            else if (0 === N)
                                if (TWIR.storage.get("pop_partial_bonus")) {
                                    var We = '<span style="color: #800080 !important;font-weight: bold;max-width: 220px;display: block;text-align: center;margin-top: 15px;margin-bottom: 5px;">' + z.name + "</span>" + Te;
                                    r = r.replace('<span class="text_bold">' + z.name + ":</span>", ""), r += We
                                } else r = r.replace('<span class="text_bold">' + z.name + ":</span>", '<span style="color: #800080 !important;font-weight: bold;max-width: 220px;display: block;text-align: center;margin-bottom: 5px;">' + z.name + "</span>" + Te);
                            r = 0 === N ? (r = r.replace(/<ul\s+class="inventory_popup_item_set_names">[\S\s]*?<\/ul>/gi, "")).replace(/<br><div\s+class="item_set_names">[\S\s]*?<\/div>/gi, "") : r.replace(/inventory_popup_item_set_names"/g, '$& style="max-width: 200px;display: block;min-width: 170px;white-space: unset!important;margin-left: 10px;"')
                        }
                        return TWIR.storage.get("pop_partial_bonus") && null !== this.item_obj.set && 0 === N && (r += "</td>"), r
                    } catch (e) {
                        TWIR.bugHunt(e)
                    }
                }
            }
        }, TWIR.fillOther = function() {
            var e = ItemManager.getAll(),
                t = TWIR.usebonus.keys.lp;
            for (var a in e)
                if (e.hasOwnProperty(a) && (e[a].short.indexOf("_fine") >= 0 && null === e[a].set || null === e[a].traderlevel && "yield" !== e[a].type && "recipe" !== e[a].type && !0 === e[a].auctionable && !0 === e[a].dropable && null === e[a].set) && -1 === TWIR.storage.inventory.collectibles.indexOf(e[a].item_base_id) && TWIR.storage.inventory.collectibles.push(e[a].item_base_id), "yield" === e[a].type && e[a].usebonus)
                    for (var r = 0; r < e[a].usebonus.length; r++) {
                        var i = -1 !== e[a].usebonus[r].indexOf(":") ? e[a].usebonus[r].match(/(.*):/g).pop().replace(":", "") : e[a].usebonus[r].replace(/[0-9\%\+\:\-\$\.]/g, "").replace(/(\(|\)).*/g, "").trim(),
                            o = Object.keys(CharacterSkills.keyNames).some(function(e) {
                                return CharacterSkills.keyNames[e].toLowerCase() === i.toLowerCase()
                            });
                        Object.values(TWIR.usebonus.keys).indexOf(i) < 0 && !i.match(t) && !o && Object.assign(TWIR.usebonus.keys, {
                            [e[a].item_id]: i
                        })
                    }
        }, TWIR.usebonus = {
            desc: {},
            getDesc: function() {
                var e = (new west.item.BonusExtractor).keyDescMapping;
                for (var t in e) e.hasOwnProperty(t) && (TWIR.usebonus.desc[t] = e[t].replace(/[0-9\%\+\:\-\$\.]/g, "").replace(/(\(|\)).*/g, "").trim())
            },
            keys: {
                energy: 189e4,
                health: 1883e3,
                duel_motivation: 1882e3,
                work_motivation: 13701e3,
                fort: 2741e3,
                attack: 50481e3,
                defense: 5048e4,
                duel_dmg: 1916e3,
                duel_dmg_pl: 50136e3,
                duel_hp_pl: 50136e3,
                xp: 2467e3,
                xp_bottle: 2197e3,
                luck: 225e4,
                money: 50787e3,
                drop: 2466e3,
                speed_active: 1926e3,
                speed_passive: 2263e3,
                lp: 21e5,
                unpack_card: 1924e3,
                unpack_multiple: 852e3,
                unpack_one: 1975e3,
                bonds: 2136e3,
                money_small: 2204e3,
                money_big: 256e4,
                event_1: 973e3,
                event_2: 2557e3,
                event_3: 2619e3,
                event_4: 2675e3,
                event_5: 259e4,
                avatar: 50088e3
            },
            getKeys: function() {
                for (var e in this.keys) $.isNumeric(this.keys[e]) && (50136e3 === this.keys[e] ? (this.keys.duel_dmg_pl = ItemManager.get(50136e3).usebonus[1].replace(/[0-9\%\+\:\-\$\.]/g, "").replace(/(\(|\)).*/g, "").trim(), this.keys.duel_hp_pl = ItemManager.get(50136e3).usebonus[2].replace(/[0-9\%\+\:\-\$\.]/g, "").replace(/(\(|\)).*/g, "").trim()) : this.keys[e] = -1 !== ItemManager.get(this.keys[e]).usebonus[0].indexOf(":") ? ItemManager.get(this.keys[e]).usebonus[0].match(/(.*):/g).pop().replace(":", "") : ItemManager.get(this.keys[e]).usebonus[0].replace(/[0-9\%\+\:\-\$\.]/g, "").replace(/(\(|\)).*/g, "").trim())
            },
            same: function(e, t) {
                return new RegExp("^.*" + e + "(.*)$", "i").test(t)
            }
        }, TWIR.fillFilters = function() {
            try {
                var t = Bag.items_by_id,
                    a = [],
                    r = (ItemManager.getAll(), TWIR.usebonus.keys),
                    i = Wear.get("right_arm") && "shot" === Wear.get("right_arm").obj.sub_type ? CharacterSkills.keyNames.shot : CharacterSkills.keyNames.punch,
                    o = [CharacterSkills.keyNames.aim, CharacterSkills.keyNames.tough, CharacterSkills.keyNames.reflex, CharacterSkills.keyNames.dodge, CharacterSkills.keyNames.tactic, CharacterSkills.keyNames.appearance, i],
                    n = r.energy,
                    s = r.health,
                    p = r.duel_motivation,
                    l = r.work_motivation,
                    c = r.fort,
                    A = r.attack,
                    g = r.defense,
                    m = r.duel_dmg,
                    d = r.duel_dmg_pl,
                    u = (r.duel_hp_pl, r.xp),
                    I = r.xp_bottle,
                    h = r.luck,
                    k = r.money,
                    R = r.drop,
                    b = r.speed_active,
                    y = r.speed_passive,
                    w = r.lp,
                    x = r.avatar,
                    f = r.unpack_card,
                    T = r.unpack_multiple,
                    W = r.unpack_one,
                    B = r.bonds,
                    v = r.money_small,
                    M = r.money_big,
                    S = r.event_1,
                    U = r.event_2,
                    V = r.event_3,
                    K = r.event_4,
                    j = r.event_5,
                    C = [],
                    E = [],
                    q = [],
                    Y = [],
                    G = [],
                    F = [],
                    Q = [],
                    O = [],
                    J = [],
                    H = [],
                    D = [],
                    Z = [],
                    P = [],
                    z = [],
                    N = [],
                    L = [],
                    X = [],
                    _ = [],
                    ee = [],
                    te = [],
                    ae = [],
                    re = [],
                    ie = [],
                    oe = [],
                    ne = [],
                    se = [],
                    pe = [];
                for (var le in t) {
                    if (t.hasOwnProperty(le)) var ce = t[le].obj;
                    if ("yield" === ce.type)
                        if ("mapdrop" === ce.spec_type && "none" === ce.usetype) - 1 === TWIR.storage.inventory.work.indexOf(ce.item_id) && TWIR.storage.inventory.work.push(ce.item_id);
                        else if (null !== ce.set || TWIR.hasBonus(le) > 0) - 1 === TWIR.storage.inventory.bonus.indexOf(ce.item_id) && TWIR.storage.inventory.bonus.push(ce.item_id);
                    else if ("crafting" === ce.spec_type) {
                        if (ce.usebonus)
                            for (var Ae = 0; Ae < ce.usebonus.length; Ae++) {
                                var ge = ce.usebonus[Ae];
                                switch (!0) {
                                    case TWIR.usebonus.same(n, ge):
                                        -1 === O.indexOf(ce.item_id) && O.push(ce.item_id);
                                        break;
                                    case TWIR.usebonus.same(s, ge):
                                        -1 === J.indexOf(ce.item_id) && J.push(ce.item_id);
                                        break;
                                    case TWIR.usebonus.same(l, ge):
                                        -1 === H.indexOf(ce.item_id) && H.push(ce.item_id);
                                        break;
                                    case TWIR.usebonus.same(p, ge):
                                        -1 === D.indexOf(ce.item_id) && D.push(ce.item_id);
                                        break;
                                    case TWIR.usebonus.same(A, ge):
                                    case TWIR.usebonus.same(g, ge):
                                        -1 === Z.indexOf(ce.item_id) && Z.push(ce.item_id);
                                    case TWIR.usebonus.same(c, ge):
                                        -1 === P.indexOf(ce.item_id) && P.push(ce.item_id);
                                        break;
                                    case TWIR.usebonus.same(y, ge):
                                        -1 === N.indexOf(ce.item_id) && N.push(ce.item_id);
                                        break;
                                    case TWIR.usebonus.same(b, ge):
                                        -1 === L.indexOf(ce.item_id) && L.push(ce.item_id);
                                        break;
                                    case TWIR.usebonus.same(u, ge):
                                    case TWIR.usebonus.same(I, ge):
                                        -1 === X.indexOf(ce.item_id) && X.push(ce.item_id);
                                        break;
                                    case TWIR.usebonus.same(m, ge):
                                    case TWIR.usebonus.same(d, ge):
                                    case Object.keys(CharacterSkills.keyNames).some(function(e) {
                                        return TWIR.usebonus.same(CharacterSkills.keyNames[e].toLowerCase(), ge.toLowerCase()) && $.inArray(CharacterSkills.keyNames[e], o) > -1
                                    }):
                                        -1 === z.indexOf(ce.item_id) && z.push(ce.item_id);
                                        break;
                                    case TWIR.usebonus.same(w, ge):
                                        -1 === ee.indexOf(ce.item_id) && ee.push(ce.item_id);
                                        break;
                                    case TWIR.usebonus.same(h, ge):
                                    case TWIR.usebonus.same(k, ge):
                                    case TWIR.usebonus.same(R, ge):
                                        -1 === te.indexOf(ce.item_id) && te.push(ce.item_id);
                                        break;
                                    case Object.keys(CharacterSkills.keyNames).some(function(e) {
                                        return TWIR.usebonus.same(CharacterSkills.keyNames[e].toLowerCase(), ge.toLowerCase())
                                    }) && !TWIR.usebonus.same(w, ge):
                                        -1 === _.indexOf(ce.item_id) && _.push(ce.item_id);
                                        break;
                                    case TWIR.usebonus.same(f, ge):
                                        -1 !== ne.indexOf(ce.item_id) && -1 !== F.indexOf(ce.item_id) || (ne.push(ce.item_id), F.push(ce.item_id));
                                        break;
                                    default:
                                        -1 === a.indexOf(ce.item_id) && a.push(ce.item_id)
                                }
                                if (TWIR.storage.popups.crafting.hasOwnProperty(ce.item_id)) switch (!0) {
                                    case TWIR.usebonus.same(f, ge):
                                        -1 === F.indexOf(ce.item_id) && F.push(ce.item_id);
                                        break;
                                    case !TWIR.usebonus.same(f, ge):
                                        -1 === G.indexOf(ce.item_id) && G.push(ce.item_id)
                                }
                            }
                        TWIR.storage.popups.crafting.hasOwnProperty(ce.item_id) && (1 === TWIR.storage.popups.crafting[ce.item_id].profsymbol && -1 === C.indexOf(ce.item_id) ? C.push(ce.item_id) : 2 === TWIR.storage.popups.crafting[ce.item_id].profsymbol && -1 === E.indexOf(ce.item_id) ? E.push(ce.item_id) : 3 === TWIR.storage.popups.crafting[ce.item_id].profsymbol && -1 === q.indexOf(ce.item_id) ? q.push(ce.item_id) : 4 === TWIR.storage.popups.crafting[ce.item_id].profsymbol && -1 === Y.indexOf(ce.item_id) && Y.push(ce.item_id))
                    } else if ("bonus_medal" === ce.spec_type && "use" === ce.usetype) - 1 === re.indexOf(ce.item_id) && re.push(ce.item_id);
                    else if ("none" === ce.usetype || "jobdrop" === ce.spec_type) - 1 === TWIR.storage.inventory.quest.indexOf(ce.item_id) && TWIR.storage.inventory.quest.push(ce.item_id);
                    else if ("use" === ce.usetype) {
                        if (ce.usebonus)
                            for (var Ae = 0; Ae < ce.usebonus.length; Ae++) {
                                var ge = ce.usebonus[Ae];
                                switch (!0) {
                                    case TWIR.usebonus.same(n, ge):
                                        -1 === O.indexOf(ce.item_id) && O.push(ce.item_id);
                                        break;
                                    case TWIR.usebonus.same(s, ge):
                                        -1 === J.indexOf(ce.item_id) && J.push(ce.item_id);
                                        break;
                                    case TWIR.usebonus.same(l, ge):
                                        -1 === H.indexOf(ce.item_id) && H.push(ce.item_id);
                                        break;
                                    case TWIR.usebonus.same(p, ge):
                                        -1 === D.indexOf(ce.item_id) && D.push(ce.item_id);
                                        break;
                                    case TWIR.usebonus.same(m, ge):
                                    case TWIR.usebonus.same(d, ge):
                                    case Object.keys(CharacterSkills.keyNames).some(function(e) {
                                        return TWIR.usebonus.same(CharacterSkills.keyNames[e].toLowerCase(), ge.toLowerCase()) && $.inArray(CharacterSkills.keyNames[e], o) > -1
                                    }):
                                        -1 === z.indexOf(ce.item_id) && z.push(ce.item_id);
                                        break;
                                    case TWIR.usebonus.same(h, ge):
                                    case TWIR.usebonus.same(k, ge):
                                    case TWIR.usebonus.same(R, ge):
                                        -1 === te.indexOf(ce.item_id) && te.push(ce.item_id);
                                        break;
                                    case TWIR.usebonus.same(y, ge):
                                        -1 === N.indexOf(ce.item_id) && N.push(ce.item_id);
                                        break;
                                    case TWIR.usebonus.same(b, ge):
                                        -1 === L.indexOf(ce.item_id) && L.push(ce.item_id);
                                        break;
                                    case TWIR.usebonus.same(u, ge):
                                    case TWIR.usebonus.same(I, ge):
                                        -1 === X.indexOf(ce.item_id) && X.push(ce.item_id);
                                        break;
                                    case TWIR.usebonus.same(K, ge):
                                    case TWIR.usebonus.same(j, ge):
                                    case TWIR.usebonus.same(S, ge):
                                    case TWIR.usebonus.same(V, ge):
                                    case TWIR.usebonus.same(U, ge):
                                        -1 === ae.indexOf(ce.item_id) && ae.push(ce.item_id);
                                        break;
                                    case TWIR.usebonus.same(W, ge):
                                    case TWIR.usebonus.same(T, ge):
                                        -1 === ie.indexOf(ce.item_id) && ie.push(ce.item_id);
                                        break;
                                    case TWIR.usebonus.same(M, ge):
                                    case TWIR.usebonus.same(v, ge):
                                    case TWIR.usebonus.same(B, ge):
                                        -1 === oe.indexOf(ce.item_id) && oe.push(ce.item_id);
                                        break;
                                    case TWIR.usebonus.same(f, ge):
                                        -1 === ne.indexOf(ce.item_id) && ne.push(ce.item_id);
                                        break;
                                    case TWIR.usebonus.same(x, ge):
                                        -1 === se.indexOf(ce.item_id) && se.push(ce.item_id);
                                        break;
                                    default:
                                        -1 === a.indexOf(ce.item_id) && a.push(ce.item_id)
                                }
                            }
                    } else if ("buff" === ce.usetype && ce.usebonus)
                        for (var Ae = 0; Ae < ce.usebonus.length; Ae++) {
                            var ge = ce.usebonus[Ae];
                            switch (!0) {
                                case TWIR.usebonus.same(A, ge):
                                case TWIR.usebonus.same(g, ge):
                                    -1 === Z.indexOf(ce.item_id) && Z.push(ce.item_id);
                                case TWIR.usebonus.same(c, ge):
                                    -1 === P.indexOf(ce.item_id) && P.push(ce.item_id);
                                    break;
                                case TWIR.usebonus.same(m, ge):
                                case TWIR.usebonus.same(d, ge):
                                case Object.keys(CharacterSkills.keyNames).some(function(e) {
                                    return TWIR.usebonus.same(CharacterSkills.keyNames[e].toLowerCase(), ge.toLowerCase()) && $.inArray(CharacterSkills.keyNames[e], o) > -1
                                }):
                                    -1 === z.indexOf(ce.item_id) && z.push(ce.item_id);
                                    break;
                                case TWIR.usebonus.same(w, ge):
                                    -1 === ee.indexOf(ce.item_id) && ee.push(ce.item_id);
                                    break;
                                case TWIR.usebonus.same(h, ge):
                                case TWIR.usebonus.same(k, ge):
                                case TWIR.usebonus.same(R, ge):
                                    -1 === te.indexOf(ce.item_id) && te.push(ce.item_id);
                                    break;
                                case TWIR.usebonus.same(y, ge):
                                    -1 === N.indexOf(ce.item_id) && N.push(ce.item_id);
                                    break;
                                case TWIR.usebonus.same(b, ge):
                                    -1 === L.indexOf(ce.item_id) && L.push(ce.item_id);
                                    break;
                                case TWIR.usebonus.same(u, ge):
                                case TWIR.usebonus.same(I, ge):
                                    -1 === X.indexOf(ce.item_id) && X.push(ce.item_id);
                                    break;
                                case Object.keys(CharacterSkills.keyNames).some(function(e) {
                                    return TWIR.usebonus.same(CharacterSkills.keyNames[e].toLowerCase(), ge.toLowerCase())
                                }) && !TWIR.usebonus.same(w, ge):
                                    -1 === _.indexOf(ce.item_id) && _.push(ce.item_id);
                                    break;
                                default:
                                    -1 === a.indexOf(ce.item_id) && a.push(ce.item_id)
                            }
                        }
                    "recipe" === ce.type && -1 === Q.indexOf(ce.item_id) && Q.push(ce.item_id), null !== ce.set && -1 === TWIR.storage.setList.ownedSetItems.indexOf(le) && TWIR.storage.setList.ownedSetItems.push(le)
                }
                var me = TWIR.storage.inventory.buffs = {},
                    de = [],
                    ue = {
                        energy: O,
                        health: J,
                        work_motivation: H,
                        duel_motivation: D,
                        adventures: Z,
                        skills: _,
                        labor_points: ee,
                        luck_money: te,
                        fort_battles: P,
                        duels: z,
                        speed: N,
                        waytime_shortening: L,
                        xp: X
                    };
                $.each(ue, function(t, a) {
                    me[t] = {
                        name: e.inventory[t],
                        items: a
                    }, de = de.concat(a.filter(function(e) {
                        return de.indexOf(e) < 0
                    }))
                });
                var Ie = TWIR.storage.inventory.use = {},
                    he = [],
                    ke = {
                        events: ae,
                        premium: re,
                        unpacks: ie,
                        coll_cards: ne,
                        bonds_money: oe,
                        avatar_part: se
                    };
                $.each(ke, function(t, a) {
                    Ie[t] = {
                        name: e.inventory[t],
                        items: a
                    }, he = he.concat(a.filter(function(e) {
                        return he.indexOf(e) < 0
                    }))
                });
                var Re = TWIR.storage.inventory.crafting = {},
                    be = [],
                    ye = {
                        field_cook: C,
                        tonic_peddler: E,
                        blacksmith: q,
                        master_saddler: Y,
                        craft_cards: F,
                        crafted_items: G,
                        recipes: Q
                    };
                $.each(ye, function(t, a) {
                    Re[t] = {
                        name: e.inventory[t],
                        items: a
                    }, be = be.concat(a.filter(function(e) {
                        return be.indexOf(e) < 0
                    }))
                }), TWIR.storage.inventory.use_all = he, TWIR.storage.inventory.buffs_all = de, TWIR.storage.inventory.crafting_all = be;
                var we = TWIR.storage.inventory.bonus,
                    xe = TWIR.storage.inventory.quest,
                    fe = TWIR.storage.inventory.use_all.concat(TWIR.storage.inventory.buffs_all).concat(TWIR.storage.inventory.crafting_all).concat(we).concat(xe);
                pe = $.grep(a, function(e) {
                    return $.inArray(e, fe) < 0
                }), Ie.others = {
                    name: "#" + e.inventory.others,
                    items: pe
                }
            } catch (e) {
                TWIR.bugHunt(e)
            }
        }, TWIR.updateCrafting = function() {
            var t = localStorage.twir_crafting;
            if (void 0 !== localStorage && void 0 !== t && TWIR.LZ.decompress(t)) {
                var a = TWIR.LZ.decompress(t);
                TWIR.storage.popups.crafting = JSON.parse(a)
            } else {
                var r = ItemManager.getAll();
                for (var i in r) {
                    if (r.hasOwnProperty(i)) var o = r[i];
                    "recipe" == o.type && (TWIR.storage.popups.crafting.hasOwnProperty(i) || Object.assign(TWIR.storage.popups.crafting, {
                        [o.craftitem]: {
                            recipe: o.item_base_id,
                            profsymbol: o.profession_id,
                            resources: o.resources
                        }
                    }))
                }
                void 0 !== localStorage ? (localStorage.twir_crafting = TWIR.LZ.compress(JSON.stringify(TWIR.storage.popups.crafting)), TWIR.console("TWIR/: Crafting DB successfully created and saved.", "green")) : new UserMessage(e.informative.storage_error + "!", UserMessage.TYPE_ERROR).show()
            }
        }, TWIR.checkJobs = function() {
            Ajax.remoteCallMode("work", "index", {}, function(e) {
                if (e.error) return new UserMessage(e.msg).show();
                JobsModel.initJobs(e.jobs)
            }, JobsWindow)
        }, TWIR.checkShop = function() {
            Ajax.remoteCallMode("shop_trader", "index", {}, function(t) {
                if (t.error) return new UserMessage(t.msg).show();
                if (void 0 !== t.inventory) {
                    for (var a = t.inventory.trader || [], r = west.window.shop.model._l10n.mouseovers.categories.trader, i = 0; i < a.length; i++) {
                        var o = ItemManager.get(a[i].item_id),
                            n = {
                                type: o.type,
                                auction_ends_in: 0,
                                auction_end_date: t.traderTime,
                                item_id: a[i].item_id,
                                item_count: 1,
                                auction_price: null,
                                max_price: a[i].price_dollar,
                                seller_name: r || "Trader",
                                seller_id: 0,
                                market_town_id: 0,
                                market_town: "",
                                posx: 0,
                                posy: 0,
                                spec: "trader"
                            };
                        TWIR.storage.marketWatcher.trader.push(n)
                    }
                    var s = new Date(1e3 * t.traderTime).getTime() - (new Date).getTime();
                    for (var p in setTimeout(function() {
                            TWIR.checkShop()
                        }, s), t.inventory)
                        if (t.inventory.hasOwnProperty(p))
                            for (var l = 0; l < t.inventory[p].length; l++) {
                                var c = t.inventory[p][l],
                                    A = ItemManager.get(c.item_id);
                                TWIR.storage.popups.shop_prices.hasOwnProperty(A.short) || Object.assign(TWIR.storage.popups.shop_prices, {
                                    [A.short]: {
                                        currency: c.currency,
                                        price_bonds: 0 != c.reduced_value ? Math.round(c.price_bonds - c.reduced_value / 100 * c.price_bonds) : c.price_bonds,
                                        price_nuggets: 0 != c.reduced_value ? Math.round(c.price_nuggets - c.reduced_value / 100 * c.price_nuggets) : c.price_nuggets,
                                        price_veteran: 0 != c.reduced_value ? Math.round(c.price_veteran - c.reduced_value / 100 * c.price_veteran) : c.price_veteran,
                                        price_dollar: 0 != c.reduced_value ? Math.round(c.price_dollar - c.reduced_value / 100 * c.price_dollar) : c.price_dollar,
                                        limited_time: c.limited_time,
                                        reduced_value: c.reduced_value
                                    }
                                }), null !== c.limited_time && Object.assign(TWIR.storage.popups.shop_limited_prices, {
                                    [A.short]: {
                                        currency: c.currency,
                                        price_bonds: c.price_bonds,
                                        price_nuggets: c.price_nuggets,
                                        price_veteran: c.price_veteran,
                                        price_dollar: c.price_dollar,
                                        year: (new Date).getFullYear()
                                    }
                                })
                            }
                    void 0 !== localStorage ? localStorage.twir_limitedSale = JSON.stringify(TWIR.storage.popups.shop_limited_prices) : new UserMessage(e.informative.storage_error + "!", UserMessage.TYPE_ERROR).show()
                }
            })
        }, TWIR.checkMarket = function() {
            var t = TWIR.storage.market = {};
            return Ajax.remoteCall("building_market", "fetch_bids", {}, function(e) {
                if (e.error) return new UserMessage(e.msg).show();
                for (var a = e.msg.search_result, r = 0; r < a.length; r++)
                    if (a[r].auction_ends_in <= 0 || !isNaN(parseInt(a[r].max_price)) && a[r].current_bid == parseInt(a[r].max_price)) {
                        var i = Map.calcWayTime(Character.position, {
                            x: a[r].market_town_x,
                            y: a[r].market_town_y
                        });
                        isDefined(t[a[r].market_town_id]) ? isDefined(t[a[r].market_town_id]) && isDefined(t[a[r].market_town_id].items[a[r].item_id]) ? t[a[r].market_town_id].items[a[r].item_id].count += a[r].item_count : isDefined(t[a[r].market_town_id]) && (t[a[r].market_town_id].items[a[r].item_id] = {
                            count: a[r].item_count,
                            type: "bid",
                            money: 0
                        }) : t[a[r].market_town_id] = {
                            id: a[r].market_town_id,
                            posx: a[r].market_town_x,
                            posy: a[r].market_town_y,
                            name: a[r].market_town_name,
                            distance: i,
                            items: {
                                [a[r].item_id]: {
                                    count: a[r].item_count,
                                    type: "bid",
                                    money: 0
                                }
                            }
                        }
                    }
            }), Ajax.remoteCall("building_market", "fetch_offers", {}, function(a) {
                if (a.error) return new UserMessage(a.msg).show();
                for (var r = a.msg.search_result, i = 0; i < r.length; i++)
                    if (r[i].auction_ends_in <= 0 || !isNaN(parseInt(r[i].max_price)) && r[i].current_bid == parseInt(r[i].max_price)) {
                        var o = Map.calcWayTime(Character.position, {
                                x: r[i].market_town_x,
                                y: r[i].market_town_y
                            }),
                            n = null !== r[i].bidder_name ? "offer_sold" : "offer",
                            s = null !== r[i].current_bid ? r[i].current_bid : 0;
                        isDefined(t[r[i].market_town_id]) ? isDefined(t[r[i].market_town_id]) && isDefined(t[r[i].market_town_id].items[r[i].item_id]) && t[r[i].market_town_id].items[r[i].item_id].type === n ? (t[r[i].market_town_id].items[r[i].item_id].count += r[i].item_count, t[r[i].market_town_id].items[r[i].item_id].money += r[i].current_bid) : isDefined(t[r[i].market_town_id]) && (t[r[i].market_town_id].items[r[i].item_id] = {
                            count: r[i].item_count,
                            type: n,
                            money: s
                        }) : t[r[i].market_town_id] = {
                            id: r[i].market_town_id,
                            posx: r[i].market_town_x,
                            posy: r[i].market_town_y,
                            name: r[i].market_town_name,
                            distance: o,
                            items: {
                                [r[i].item_id]: {
                                    count: r[i].item_count,
                                    type: n,
                                    money: s
                                }
                            }
                        }
                    } var p = 0,
                    l = 0,
                    c = 0;
                for (var A in TWIR.storage.market)
                    if (TWIR.storage.market.hasOwnProperty(A))
                        for (var g in TWIR.storage.market[A].items) "offer_sold" === TWIR.storage.market[A].items[g].type ? p += TWIR.storage.market[A].items[g].money : "offer_sold" !== TWIR.storage.market[A].items[g].type && (l += TWIR.storage.market[A].items[g].count), c += Object.keys(TWIR.storage.market[A].items).length;
                $(".twir_menulink_market").prop("title", e.menulink.market + "<br>" + (0 != c ? TWIR.replSum(c) + "&nbsp;" + e.tooltips.listings + "&nbsp;($" + TWIR.replSum(p) + ",&nbsp;" + TWIR.replSum(l) + "&nbsp;" + e.tooltips.items + ")" : ""))
            })
        }, TWIR.checkForts = function() {
            var e = ["barracks_room1", "barracks_room2", "barracks_room3", "barracks_room4", "barracks_room5", "barracks_room6"],
                t = 0;
            if (Character.forts.length > 0 && 0 === Character.homeTown.alliance_id) {
                ! function a() {
                    Ajax.remoteCallMode("fort_building_barracks", "index", {
                        fort_id: Character.forts[t].fort_id
                    }, function(r) {
                        !1 === r.error && (TWIR.storage.sleep[r.fortName] = {
                            id: r.fortId,
                            posx: r.coordX,
                            posy: r.coordY,
                            name: r.fortName,
                            stage: r.barrackStage,
                            type: "fort",
                            stage_name: r.rooms[e[r.barrackStage - 1]].name
                        }, t < Character.forts.length - 1 && (t++, setTimeout(function() {
                            a()
                        }, Math.floor(1001 * Math.random() + 1e3))))
                    })
                }()
            } else 0 != Character.homeTown.alliance_id && Ajax.remoteCallMode("alliance", "get_data", {
                alliance_id: Character.homeTown.alliance_id
            }, function(a) {
                if (!1 === a.error && a.data.forts.length > 0) {
                    ! function r() {
                        Ajax.remoteCallMode("fort_building_barracks", "index", {
                            fort_id: a.data.forts[t].fort_id
                        }, function(i) {
                            !1 === i.error && (TWIR.storage.sleep[i.fortName] = {
                                id: i.fortId,
                                posx: i.coordX,
                                posy: i.coordY,
                                name: i.fortName,
                                stage: i.barrackStage,
                                type: "fort",
                                stage_name: i.rooms[e[i.barrackStage - 1]].name
                            }, t < a.data.forts.length - 1 && (t++, setTimeout(function() {
                                r()
                            }, Math.floor(1001 * Math.random() + 1e3))))
                        })
                    }()
                }
            })
        }, TWIR.checkTown = function() {
            var e = ["cubby", "bedroom", "hotel_room", "apartment", "luxurious_apartment"];
            if (0 != Character.homeTown.town_id) return Ajax.remoteCallMode("building_hotel", "get_data", {
                town_id: Character.homeTown.town_id
            }, function(t) {
                if (t.error) return new UserMessage(t.msg, UserMessage.TYPE_ERROR).show(), TWIR.storage.homeTown = null;
                TWIR.storage.sleep[t.town_name] = {
                    posx: Character.homeTown.x,
                    posy: Character.homeTown.y,
                    name: t.town_name,
                    stage: t.hotel_level,
                    id: Character.homeTown.town_id,
                    type: "town",
                    stage_name: t.rooms[e[t.hotel_level - 1]].name
                }
            })
        }, TWIR.checkMap = function() {
            return Ajax.get("map", "get_minimap", {}, function(e) {
                if (e.error) return new UserMessage(e.msg).show();
                var t = e.forts;
                for (var a in t)
                    for (var r in t[a]) t[a][r].hasOwnProperty("fort") && (t[a][r].fort.alliance_id == Character.homeTown.alliance_id && TWIR.storage.sleep.hasOwnProperty(t[a][r].fort.name) ? TWIR.storage.sleep[t[a][r].fort.name].fort_type = t[a][r].fort.type : Character.forts.some(e => e.fort_id == t[a][r].fort.fort_id) && 0 == Character.homeTown.alliance_id && (TWIR.storage.sleep[t[a][r].fort.name].fort_type = t[a][r].fort.type));
                var i = TWIR.storage.towns = {},
                    o = e.towns;
                for (var n in o)
                    if (o.hasOwnProperty(n) && o[n].member_count > 0) {
                        var s = Map.calcWayTime(Character.position, {
                            x: o[n].x,
                            y: o[n].y
                        });
                        i[o[n].name] = {
                            town_id: o[n].town_id,
                            posx: o[n].x,
                            posy: o[n].y,
                            name: o[n].name,
                            alliance_id: o[n].alliance_id,
                            member_count: o[n].member_count,
                            distance: s
                        }
                    } var p = [],
                    l = e.quest_locations;
                for (var c in l) l.hasOwnProperty(c) && p.push([parseInt(l[c][0][0] / Map.tileSize), parseInt(l[c][0][1] / Map.tileSize)]);
                Ajax.get("map", "get_complete_data", {
                    tiles: JSON.stringify(p)
                }).done(function(e) {
                    for (var t = TWIR.storage.NPC = {}, a = e.quests, r = 0; r < p.length; r++)
                        for (var i = a[p[r][0]][p[r][1]][0][1], o = 0; o < i.employer.length; o++)
                            if (t[i.employer[o].name] || !0 !== i.employer[o].visible) {
                                if (!0 === i.employer[o].visible) {
                                    var n = t[i.employer[o].name] || [];
                                    n.findIndex(e => e.posx == i.x) < 0 && n.findIndex(e => e.posy == i.y) < 0 && n.push({
                                        posx: i.x,
                                        posy: i.y
                                    }), t[i.employer[o].name] = n
                                }
                            } else t[i.employer[o].name] = [{
                                posx: i.x,
                                posy: i.y,
                                key: i.employer[o].key
                            }]
                })
            })
        }, TWIR.checkRank = {
            init: function() {
                TWIR.checkRank.getDuelRank().then(TWIR.checkRank.getFortRank).then(TWIR.checkRank.getCraftRank).then(TWIR.checkRank.getBuildRank).then(TWIR.checkRank.getMpiRank)
            },
            getDuelRank: function() {
                return Ajax.remoteCallMode("ranking", "get_data", {
                    page: 0,
                    tab: "duels",
                    entries_per_page: 9999
                }, function(e) {
                    if (e.error) return new UserMessage(e.msg, UserMessage.TYPE_ERROR).show();
                    TWIR.storage.stats.global.duels = [].concat(e.ranking)
                })
            },
            getFortRank: function() {
                return Ajax.remoteCallMode("ranking", "get_data", {
                    page: 0,
                    tab: "forts",
                    entries_per_page: 9999
                }, function(e) {
                    if (e.error) return new UserMessage(e.msg, UserMessage.TYPE_ERROR).show();
                    TWIR.storage.stats.global.forts = [].concat(e.ranking)
                })
            },
            getCraftRank: function() {
                return Ajax.remoteCallMode("ranking", "get_data", {
                    page: 0,
                    tab: "craft",
                    entries_per_page: 9999
                }, function(e) {
                    if (e.error) return new UserMessage(e.msg, UserMessage.TYPE_ERROR).show();
                    TWIR.storage.stats.global.craft = [].concat(e.ranking)
                })
            },
            getBuildRank: function() {
                return Ajax.remoteCallMode("ranking", "get_data", {
                    page: 0,
                    tab: "build",
                    entries_per_page: 9999
                }, function(e) {
                    if (e.error) return new UserMessage(e.msg, UserMessage.TYPE_ERROR).show();
                    TWIR.storage.stats.global.build = [].concat(e.ranking)
                })
            },
            getMpiRank: function() {
                return Ajax.remoteCallMode("ranking", "get_data", {
                    page: 0,
                    tab: "mpi",
                    entries_per_page: 9999
                }, function(e) {
                    if (e.error) return new UserMessage(e.msg, UserMessage.TYPE_ERROR).show();
                    TWIR.storage.stats.global.mpi = [].concat(e.ranking)
                })
            }
        }, TWIR.marketBest = {
            init: function() {
                TWIR.marketBest.getBestItems(), TWIR.marketBest.getBestProducts()
            },
            getBestItems: function() {
                try {
                    var e = TWIR.storage.marketWatcher.marketMain;
                    TWIR.storage.popups.marketBest = {};
                    for (var t = 0; t < e.length; t++) {
                        var a = ItemManager.getByBaseId(e[t].item_base_id),
                            r = void 0 !== Bag.getItemByItemId(a.item_id);
                        if (TWIR.storage.popups.marketBest.hasOwnProperty(a.short) || null === e[t].max_price || Object.assign(TWIR.storage.popups.marketBest, {
                                [a.short]: {
                                    offer_max: {
                                        price: -2147483647,
                                        date: 0
                                    },
                                    offer_min: {
                                        price: 2147483647,
                                        date: 0
                                    },
                                    seen: 0,
                                    avg: 0,
                                    avg_min: {
                                        price_sum: 0,
                                        count: 0
                                    },
                                    avg_max: {
                                        price_sum: 0,
                                        count: 0
                                    },
                                    avg_since: 0,
                                    price_sum_since: 0,
                                    offer_count_since: 0,
                                    price_sum: 0,
                                    offer_count: 0,
                                    owned: !1,
                                    item_count: 0
                                }
                            }), null !== e[t].max_price && TWIR.storage.popups.marketBest.hasOwnProperty(a.short)) {
                            TWIR.storage.popups.marketBest[a.short].price_sum += parseInt(e[t].max_price / e[t].item_count), TWIR.storage.popups.marketBest[a.short].item_count += e[t].item_count, TWIR.storage.popups.marketBest[a.short].offer_count += 1, TWIR.storage.popups.marketBest[a.short].owned = r;
                            new Date - new Date(e[t].date) <= 6048e5 && (TWIR.storage.popups.marketBest[a.short].price_sum_since += parseInt(e[t].max_price / e[t].item_count), TWIR.storage.popups.marketBest[a.short].offer_count_since += 1), TWIR.storage.popups.marketBest[a.short].avg_since = isNaN(TWIR.storage.popups.marketBest[a.short].price_sum_since / TWIR.storage.popups.marketBest[a.short].offer_count_since) ? 0 : TWIR.storage.popups.marketBest[a.short].price_sum_since / TWIR.storage.popups.marketBest[a.short].offer_count_since, new Date(e[t].date) > new Date(TWIR.storage.popups.marketBest[a.short].seen) && (TWIR.storage.popups.marketBest[a.short].seen = e[t].date);
                            var i = parseInt(e[t].max_price / e[t].item_count);
                            TWIR.storage.popups.marketBest[a.short].avg = TWIR.storage.popups.marketBest[a.short].price_sum / TWIR.storage.popups.marketBest[a.short].offer_count, i <= TWIR.storage.popups.marketBest[a.short].avg && (TWIR.storage.popups.marketBest[a.short].avg_min.price_sum += i, TWIR.storage.popups.marketBest[a.short].avg_min.count += 1), i >= TWIR.storage.popups.marketBest[a.short].avg && (TWIR.storage.popups.marketBest[a.short].avg_max.price_sum += i, TWIR.storage.popups.marketBest[a.short].avg_max.count += 1), (e[t].max_price / e[t].item_count > TWIR.storage.popups.marketBest[a.short].offer_max.price || e[t].max_price / e[t].item_count == TWIR.storage.popups.marketBest[a.short].offer_max.price && new Date(e[t].date) > new Date(TWIR.storage.popups.marketBest[a.short].offer_max.date)) && (TWIR.storage.popups.marketBest[a.short].offer_max.price = parseInt(e[t].max_price / e[t].item_count), TWIR.storage.popups.marketBest[a.short].offer_max.date = e[t].date), (e[t].max_price / e[t].item_count < TWIR.storage.popups.marketBest[a.short].offer_min.price || e[t].max_price / e[t].item_count == TWIR.storage.popups.marketBest[a.short].offer_min.price && new Date(e[t].date) > new Date(TWIR.storage.popups.marketBest[a.short].offer_min.date)) && (TWIR.storage.popups.marketBest[a.short].offer_min.price = parseInt(e[t].max_price / e[t].item_count), TWIR.storage.popups.marketBest[a.short].offer_min.date = e[t].date)
                        }
                    }
                } catch (e) {
                    TWIR.bugHunt(e)
                }
            },
            getBestProducts: function() {
                try {
                    var e = TWIR.storage.marketWatcher.marketOther;
                    TWIR.storage.popups.marketBestJunk = {};
                    for (var t = 0; t < e.length; t++) {
                        var a = ItemManager.getByBaseId(e[t].item_base_id),
                            r = void 0 !== Bag.getItemByItemId(a.item_id);
                        if (TWIR.storage.popups.marketBestJunk.hasOwnProperty(a.short) || null === e[t].max_price || Object.assign(TWIR.storage.popups.marketBestJunk, {
                                [a.short]: {
                                    offer_max: {
                                        price: -2147483647,
                                        name: null,
                                        date: 0
                                    },
                                    offer_min: {
                                        price: 2147483647,
                                        name: null,
                                        date: 0
                                    },
                                    offer_max_x: {
                                        each: -2147483647,
                                        price: 0,
                                        count: 2147483647,
                                        date: 0
                                    },
                                    offer_min_x: {
                                        each: 2147483647,
                                        price: 0,
                                        count: -2147483647,
                                        date: 0
                                    },
                                    seen: 0,
                                    avg: 0,
                                    avg_min: {
                                        price_sum: 0,
                                        count: 0
                                    },
                                    avg_max: {
                                        price_sum: 0,
                                        count: 0
                                    },
                                    avg_since: 0,
                                    price_sum_since: 0,
                                    offer_count_since: 0,
                                    price_sum: 0,
                                    offer_count: 0,
                                    owned: !1,
                                    item_count: 0
                                }
                            }), null !== e[t].max_price && TWIR.storage.popups.marketBestJunk.hasOwnProperty(a.short)) {
                            TWIR.storage.popups.marketBestJunk[a.short].price_sum += parseInt(e[t].max_price / e[t].item_count), TWIR.storage.popups.marketBestJunk[a.short].item_count += e[t].item_count, TWIR.storage.popups.marketBestJunk[a.short].offer_count += 1, TWIR.storage.popups.marketBestJunk[a.short].owned = r;
                            new Date - new Date(e[t].date) <= 6048e5 && (TWIR.storage.popups.marketBestJunk[a.short].price_sum_since += parseInt(e[t].max_price / e[t].item_count), TWIR.storage.popups.marketBestJunk[a.short].offer_count_since += 1), TWIR.storage.popups.marketBestJunk[a.short].avg_since = isNaN(TWIR.storage.popups.marketBestJunk[a.short].price_sum_since / TWIR.storage.popups.marketBestJunk[a.short].offer_count_since) ? 0 : TWIR.storage.popups.marketBestJunk[a.short].price_sum_since / TWIR.storage.popups.marketBestJunk[a.short].offer_count_since, new Date(e[t].date) > new Date(TWIR.storage.popups.marketBestJunk[a.short].seen) && (TWIR.storage.popups.marketBestJunk[a.short].seen = e[t].date);
                            var i = parseInt(e[t].max_price / e[t].item_count);
                            TWIR.storage.popups.marketBestJunk[a.short].avg = TWIR.storage.popups.marketBestJunk[a.short].price_sum / TWIR.storage.popups.marketBestJunk[a.short].offer_count, i <= TWIR.storage.popups.marketBestJunk[a.short].avg && (TWIR.storage.popups.marketBestJunk[a.short].avg_min.price_sum += i, TWIR.storage.popups.marketBestJunk[a.short].avg_min.count += 1), i >= TWIR.storage.popups.marketBestJunk[a.short].avg && (TWIR.storage.popups.marketBestJunk[a.short].avg_max.price_sum += i, TWIR.storage.popups.marketBestJunk[a.short].avg_max.count += 1), (e[t].max_price / e[t].item_count > TWIR.storage.popups.marketBestJunk[a.short].offer_max.price || e[t].max_price / e[t].item_count == TWIR.storage.popups.marketBestJunk[a.short].offer_max.price && new Date(e[t].date) > new Date(TWIR.storage.popups.marketBestJunk[a.short].offer_max.date)) && (TWIR.storage.popups.marketBestJunk[a.short].offer_max.price = parseInt(e[t].max_price / e[t].item_count), TWIR.storage.popups.marketBestJunk[a.short].offer_max.date = e[t].date), (e[t].max_price / e[t].item_count > TWIR.storage.popups.marketBestJunk[a.short].offer_max_x.each && e[t].item_count <= TWIR.storage.popups.marketBestJunk[a.short].offer_max_x.count || e[t].max_price / e[t].item_count == TWIR.storage.popups.marketBestJunk[a.short].offer_max_x.each && e[t].item_count <= TWIR.storage.popups.marketBestJunk[a.short].offer_max_x.count && new Date(e[t].date) > new Date(TWIR.storage.popups.marketBestJunk[a.short].offer_max_x.date)) && (TWIR.storage.popups.marketBestJunk[a.short].offer_max_x.each = parseInt(e[t].max_price / e[t].item_count), TWIR.storage.popups.marketBestJunk[a.short].offer_max_x.count = e[t].item_count, TWIR.storage.popups.marketBestJunk[a.short].offer_max_x.price = e[t].max_price, TWIR.storage.popups.marketBestJunk[a.short].offer_max_x.date = e[t].date), (e[t].max_price / e[t].item_count < TWIR.storage.popups.marketBestJunk[a.short].offer_min.price || e[t].max_price / e[t].item_count == TWIR.storage.popups.marketBestJunk[a.short].offer_min.price && new Date(e[t].date) > new Date(TWIR.storage.popups.marketBestJunk[a.short].offer_min.date)) && (TWIR.storage.popups.marketBestJunk[a.short].offer_min.price = parseInt(e[t].max_price / e[t].item_count), TWIR.storage.popups.marketBestJunk[a.short].offer_min.date = e[t].date), (e[t].max_price / e[t].item_count < TWIR.storage.popups.marketBestJunk[a.short].offer_min_x.each && e[t].item_count >= TWIR.storage.popups.marketBestJunk[a.short].offer_min_x.count || e[t].max_price / e[t].item_count == TWIR.storage.popups.marketBestJunk[a.short].offer_min_x.each && e[t].item_count >= TWIR.storage.popups.marketBestJunk[a.short].offer_min_x.count && new Date(e[t].date) > new Date(TWIR.storage.popups.marketBestJunk[a.short].offer_min_x.date)) && (TWIR.storage.popups.marketBestJunk[a.short].offer_min_x.each = parseInt(e[t].max_price / e[t].item_count), TWIR.storage.popups.marketBestJunk[a.short].offer_min_x.price = e[t].max_price, TWIR.storage.popups.marketBestJunk[a.short].offer_min_x.count = e[t].item_count, TWIR.storage.popups.marketBestJunk[a.short].offer_min_x.date = e[t].date)
                        }
                    }
                } catch (e) {
                    TWIR.bugHunt(e)
                }
            }
        }, TWIR.marketWatcher = {
            scan: localStorage && localStorage.twir_mw_scan ? localStorage.getItem("twir_mw_scan") : "all",
            keep: localStorage && localStorage.twir_mw_keep ? localStorage.getItem("twir_mw_keep") : 15552e6,
            onGoing: null,
            checking: !1,
            lastAlert: {},
            underprice: null,
            init: function() {
                var e = $.isNumeric(localStorage.getItem("twir_marketTimer")) ? JSON.parse(localStorage.getItem("twir_marketTimer")) : localStorage.getItem("twir_marketTimer"),
                    t = Math.floor(Math.random() * (9e5 + 1) + 9e5),
                    a = e ? (new Date).getTime() - new Date(e).getTime() : 6e4,
                    r = t - a,
                    i = r >= 0 ? r : 6e4;
                TWIR.marketWatcher.addCss(), TWIR.marketWatcher.checkCollectible(), "none" !== TWIR.marketWatcher.scan && TWIR.console("TWIR/: Next Market scan in: " + (i / 1e3).getTime2EndString(!1) + ".", "#8b4513"), setTimeout(function() {
                    TWIR.marketWatcher.scanMarket(TWIR.storage.marketWatcher.mwl)
                }, i);
                var o = localStorage.twir_marketDataTemp;
                i > 18e4 && o && setTimeout(function() {
                    var e = TWIR.LZ.decompress(o);
                    TWIR.storage.marketWatcher.wtb = JSON.parse(e), TWIR.marketWatcher.showMarketAlert()
                }, 6e4), TWIR.marketWatcher.addMarketTabs()
            },
            addMarketTabs: function() {
                var t = MarketWindow.open;
                MarketWindow.open = function(a, r) {
                    t.apply(this, arguments), MarketWindow.window.appendToContentPane($('<div class="marketplace-twir_mw"/>'));
                    try {
                        MarketWindow.window.addTab(e.market_watcher.add_name, "twir_mw", function(t, a) {
                            if (!MarketWindow.window) return;
                            switch (MarketWindow.window.activateTab(a).setSize(748, 470).$("div.tw2gui_window_content_pane > *", MarketWindow.DOM).each(function(e, t) {
                                $(t).hasClass("marketplace-" + a) ? ($(t).children().fadeIn(), $(t).show()) : ($(t).children().fadeOut(), $(t).hide())
                            }), a) {
                                case "twir_mw":
                                    MarketWindow.window.setTitle(e.market_watcher.add_name), TWIR.marketWatcher.openMWTab()
                            }
                        })
                    } catch (e) {}
                }
            },
            addCss: function() {
                if (0 === $("#twir_mw_css").length) {
                    var e = "\n";
                    return e += "\t.twir_mw_idx       { width: 24px; text-align: right; padding-right: 8px; white-space: nowrap; overflow: hidden!important; text-overflow: ellipsis!important;font-size: 12px;background: url(https://westcz.innogamescdn.com/images/tw2gui/table/cell_shadow_y.png); }\n", e += "\t.twir_mw_name    { width: 270px; white-space: nowrap; overflow: hidden!important; text-overflow: ellipsis!important; padding-left: 5px;font-weight: bold;color: #523F30;font-size: 12px;cursor: pointer;}\n", e += "\t.twir_mw_price      { width: 40px; text-align: center; padding-right: 8px; white-space: nowrap; overflow: hidden!important; text-overflow: ellipsis!important;font-size: 12px;color: #523F30; }\n", e += "\t.twir_mw_remove    { width: 35px; text-align: center; background: url(" + Game.cdnURL + "/images/tw2gui/table/cell_shadow_y.png); float: right;}\n", e += "\t.twir_mw_watch    { position: absolute;bottom: 35px;left: 50%;margin-left: -50px;width: 100px;}\n", e += "\t.twir_mwl_tab .row_head span    { color: #523F30; background: none!important;cursor: unset!important;}\n", $('<style id="twir_mw_css" type="text/css">' + e + "</style>").appendTo("head"), document.styleSheets[0].insertRule('div.ongoing_entry div.image.twir_marketWatcher {background: url("' + TWIR.images.market_watcher + '") no-repeat;}', document.styleSheets[0].cssRules.length), this
                }
            },
            isValidItem: function(t, a) {
                var r = ItemManager.get(t),
                    i = west.storage.ItemSetManager.get(t);

                function o(e) {
                    for (var t = e.items, a = 0; a < t.length; a++)
                        if (!0 === ItemManager.get(1e3 * t[a]).auctionable) return !0;
                    return !1
                }
                return $.isNumeric(t) ? void 0 === r ? (a && new UserMessage(e.informative.valid_id.replace("$1", t) + "!", UserMessage.TYPE_ERROR).show(), !1) : void 0 !== r && !1 === r.auctionable ? (a && new UserMessage(e.informative.valid_auctionable.replace("$1", t) + "!", UserMessage.TYPE_ERROR).show(), !1) : void 0 === r || !0 !== r.auctionable || !0 !== TWIR.storage.marketWatcher.mwl.some(e => e.item_id === t) || (a && new UserMessage(e.informative.valid_defined.replace("$1", t) + "!", UserMessage.TYPE_ERROR).show(), !1) : void 0 === i ? (a && new UserMessage(e.informative.valid_id.replace("$1", t) + "!", UserMessage.TYPE_ERROR).show(), !1) : void 0 === i || o(i) ? void 0 === i || !o(i) || !0 !== TWIR.storage.marketWatcher.mwl.some(e => e.item_id === t) || (a && new UserMessage(e.informative.valid_defined.replace("$1", t) + "!", UserMessage.TYPE_ERROR).show(), !1) : (a && new UserMessage(e.informative.set_auctionable + "!", UserMessage.TYPE_ERROR).show(), !1)
            },
            openMWTab: function() {
                MarketWindow.dataStore = [];
                var t = TWIR.marketWatcher.scan,
                    a = $('<div class="market-twir_mw"></div>'),
                    r = $('<div style="position: absolute;left: 187px;width: 450px;top: 15px;"></div>'),
                    i = $('<div style="position: absolute;top: 0px;left: 650px;background: url(' + Game.cdnURL + '/images/window/character/info.png);width: 37px;height: 38px;" title="' + e.market_watcher.desc + '.&nbsp;(TWIR)"></div>'),
                    o = $('<div class="twir_mwl_tab" style="left: 187px;top: 55px;width: 500px;position: relative;"/>'),
                    n = '<span class="tw2gui-iconset tw2gui-icon-eye" style="vertical-align: middle;display: inline-block;margin-bottom: 2px;margin-right: 2px;"/>',
                    s = (TWIR.images.bell, e.features.alert_sound, TWIR.images.bell, '<img src="' + TWIR.images.currency.dollars + '" style="margin-left: 35px;"/>'),
                    p = (new west.gui.Combobox).setWidth(140);
                p.addItem("all", ("all" == t ? n : "") + e.market_watcher.all_items), p.addItem("valuable", ("valuable" == t ? n : "") + e.market_watcher.valuable), p.addItem("watched", ("watched" == t ? n : "") + e.market_watcher.watched_items), p.addItem("none", ("none" == t ? n : "") + e.market_watcher.nothing), p.select(t), p.addListener(function(e) {
                    TWIR.marketWatcher.scan = e, localStorage && localStorage.setItem("twir_mw_scan", e)
                }), r.append(p.getMainDiv().css({
                    "margin-right": "10px"
                }));
                var l = "";

                function c() {
                    l = "", MarketWindow.window.$("div.twir_mwl_tab", MarketWindow.DOM).empty();
                    for (var t = (new west.gui.Table).addColumn("twir_mw_idx").addColumn("twir_mw_item").addColumn("twir_mw_name").addColumn("twir_mw_price").addColumn("twir_mw_remove").appendToThCell("head", "twir_mw_price", e.market_watcher.max_price + "&nbsp;(" + e.tooltips.each + ")", s).appendToCell("head", "twir_mw_idx").appendToCell("head", "twir_mw_item").appendToCell("head", "twir_mw_name").appendToCell("head", "twir_mw_price").appendToCell("head", "twir_mw_remove"), a = TWIR.storage.marketWatcher.mwl, r = 0; r < a.length; r++) {
                        var i = $.isNumeric(a[r].item_id) ? ItemManager.get(a[r].item_id) : west.storage.ItemSetManager.get(a[r].item_id),
                            n = $('<span title="' + ($.isNumeric(a[r].item_id) ? new ItemPopup(i).getXHTML().escapeHTML() : i.name) + '">' + i.name + "</span>").data("itemId", a[r].item_id);
                        t.appendRow().appendToCell(-1, "twir_mw_idx", r + 1);
                        var p = $.isNumeric(a[r].item_id) ? 0 : i.items[~~(i.items.length * Math.random())],
                            g = ItemManager.get(1e3 * p);
                        t.appendToCell(-1, "twir_mw_item", '<img style="cursor: pointer;" title="' + ($.isNumeric(a[r].item_id) ? new ItemPopup(i).getXHTML().escapeHTML() : i.name) + '" src="' + ($.isNumeric(a[r].item_id) ? i.image : g.image) + '"; height="29"; width="29"></img>'), t.appendToCell(-1, "twir_mw_name", n), a[r].item_price ? t.appendToCell(-1, "twir_mw_price", "$" + (a[r].item_price >= 1e5 ? TWIR.replSum(a[r].item_price) : a[r].item_price)) : t.appendToCell(-1, "twir_mw_price", "-");
                        var m = new west.gui.Icon("abort").getMainDiv().css({
                            "margin-bottom": "2px",
                            "margin-left": "5px",
                            cursor: "pointer"
                        }).data("id", a[r].item_id).click(function() {
                            A($(this).data("id"))
                        });
                        if (t.appendToCell(-1, "twir_mw_remove", m), $.isNumeric(a[r].item_id)) l += "[item=" + a[r].item_id + "]&nbsp;";
                        else
                            for (var d = 0; d < i.items.length; d++) l += "[item=" + 1e3 * i.items[d] + "]&nbsp;"
                    }
                    var u = new west.gui.Icon("link").getMainDiv().css({
                        "margin-left": "5px",
                        cursor: "pointer"
                    }).click(function() {
                        ! function() {
                            if ($("#twir_mw_import.tw2gui_dialog").length) return;
                            var t = $('<div style="text-align: center;"/>'),
                                a = (new west.gui.Textfield).setPlaceholder("[item=xxx] [item=xxx] ..").setWidth(265);
                            t.append("<span>" + e.market_watcher.import+"</span>", a.getMainDiv());
                            var r = $('<span><input type="text" class="input_layout" readonly="readonly" style="text-align: center;resize: horizontal;" size="35" name="report_bbcode" value="' + l + '" onclick="this.select();" /></span>');
                            t.append("<br><br>", '<span style="margin-right: 5px;">' + e.market_watcher.export+"</span>", r), new west.gui.Dialog("", t).setDraggable(!0).setBlockGame(!1).setId("twir_mw_import").addButton("ok", function() {
                                "" != a.getValue() && function(t) {
                                    if (!t) return;
                                    if (t.indexOf("[item=") < 0) return;
                                    t.replace(/\[item=(.*?)\]/g, function(e, t, a) {
                                        t = t.replace(/&shy;/g, "");
                                        var r = parseInt(t);
                                        r -= r % 1e3, TWIR.marketWatcher.isValidItem(r, !1) && TWIR.storage.marketWatcher.mwl.push({
                                            item_id: r,
                                            item_price: 0
                                        })
                                    }), c(), void 0 !== localStorage ? localStorage.twir_marketAlert = TWIR.LZ.compress(JSON.stringify(TWIR.storage.marketWatcher.mwl)) : new UserMessage(e.informative.storage_error + "!", UserMessage.TYPE_ERROR).show()
                                }(a.getValue())
                            }).addButton("cancel").show()
                        }()
                    });
                    t.appendToFooter("twir_mw_remove", u), o.append(t.getMainDiv())
                }

                function A(t) {
                    if (!0 !== TWIR.marketWatcher.checking) {
                        for (var a = TWIR.storage.marketWatcher.mwl.length - 1; a >= 0; --a) TWIR.storage.marketWatcher.mwl[a].item_id === t && TWIR.storage.marketWatcher.mwl.splice(a, 1);
                        c(), localStorage.twir_marketAlert = TWIR.LZ.compress(JSON.stringify(TWIR.storage.marketWatcher.mwl))
                    } else new UserMessage(e.informative.error_wait + ".", UserMessage.TYPE_ERROR).show()
                }

                function g(e) {
                    var t = e;
                    if (!$.isNumeric(e)) {
                        var a = west.storage.ItemSetManager.get(e);
                        t = 1e3 * a.items[~~(a.items.length * Math.random())]
                    }
                    return new tw2widget.InventoryItem(ItemManager.get(t, !0)).getMainDiv().css({
                        position: "absolute",
                        left: "45px",
                        top: "10px"
                    })
                }
                c();
                var m = (new west.gui.Textfield).setPlaceholder(e.market_watcher.item_id).setWidth(125),
                    d = (new west.gui.Textfield).onlyNumeric().setName().maxlength(8).setTooltip(e.market_watcher.max_price + "&nbsp;(" + e.tooltips.each + ")").setPlaceholder("$").setWidth(65),
                    u = $('<div style="position: absolute;top: 65px;left: 2px;width: 175px;height: 270px;"/>'),
                    I = $('<div class="twir_mw_itemframe" style="position: absolute;height: 75px;width: 145px;top: 20px;"/>');
                I.append(g(0)), m.getMainDiv().on("input change paste keyup", function() {
                    MarketWindow.window.$("div.twir_mw_itemframe", MarketWindow.DOM).empty(), m.setValue(m.getValue().replace(/\[item=(.*?)\]/g, "$1").trim());
                    var e = m.getValue();
                    ($.isNumeric(e) && e >= 1e3 || !$.isNumeric(e)) && TWIR.marketWatcher.isValidItem(e, !1) ? I.append(g(e)) : I.append(g(0))
                });
                var h = new west.gui.Button(e.market_watcher.add_item, function() {
                    var t = m.getValue();
                    if ("" !== t) {
                        $.isNumeric(t) && m.setValue(Math.min(2147483647, Math.max(1e3, m.getValue()))), d.setValue(Math.min(99e6, Math.max(0, d.getValue())));
                        var a = $.isNumeric(t) ? JSON.parse(t) : t,
                            r = JSON.parse(d.getValue());
                        TWIR.marketWatcher.isValidItem(a, !0) && (TWIR.storage.marketWatcher.mwl.push({
                            item_id: a,
                            item_price: r
                        }), c(), void 0 !== localStorage ? localStorage.twir_marketAlert = TWIR.LZ.compress(JSON.stringify(TWIR.storage.marketWatcher.mwl)) : new UserMessage(e.informative.storage_error + "!", UserMessage.TYPE_ERROR).show())
                    }
                }).addClass("twir_mw_watch");
                u.append((new west.gui.Groupframe).appendToContentPane($('<div style="width: 145px;height: 240px;"/>').append(I, new west.gui.Icon("abort", "").getMainDiv().css({
                    position: "absolute",
                    right: "25px",
                    top: "160px",
                    cursor: "pointer"
                }).on("click", function() {
                    m.setValue(""), d.setValue(""), I.append(g(0))
                })).append(m.getMainDiv().css({
                    position: "absolute",
                    top: "115px",
                    left: "15px"
                })).append(d.getMainDiv().css({
                    position: "absolute",
                    top: "155px",
                    left: "45px"
                })).append(h.getMainDiv())).getMainDiv()), a.append(u, $('<div class="market_devider_bottom" style="left: 10px;width: 160px;" />'), $('<div class="market_devider_bottom" />'), i, r, o), MarketWindow.window.$("div.marketplace-twir_mw", MarketWindow.DOM).empty().append(a)
            },
            isUndervalued: function(e, t, a) {
                var r = ItemManager.get(e),
                    i = TWIR.storage.popups.marketBest,
                    o = t && i.hasOwnProperty(r.short) ? Math.round(t / i[r.short].avg * 100) : 0;
                return 0 != o && o <= 75 || (!!(t && t <= 3 * r.price) || !!(a && a <= 3 * r.price))
            },
            checkCollectible: function() {
                $.ajax({
                    url: "game.php?window=achievement&action=get_list&h=" + Player.h,
                    type: "POST",
                    data: {
                        folder: "collections",
                        playerid: Character.playerId
                    },
                    success: function(e) {
                        for (var t = [], a = e.achievements.progress || [], r = 0; r < a.length; r++)
                            for (var i, o = /<span.*?([\s\S]*?)<\/span>/gm; i = o.exec(a[r].meta);) {
                                var n = i[1],
                                    s = /<img.*?alt="(.*?)"/.exec(n)[1],
                                    p = n.indexOf("locked") > -1;
                                p && t.push(s)
                            }
                        TWIR.storage.marketWatcher.missing = t
                    }
                })
            },
            scanMarket: function() {
                TWIR.storage.marketWatcher.wtb = {}, TWIR.storage.marketWatcher.wtb_missing = {};
                try {
                    WestUi.NotiBar.remove(TWIR.marketWatcher.OnGoing)
                } catch (e) {}
                var t = 1,
                    a = TWIR.storage.marketWatcher.marketMain.length,
                    r = TWIR.storage.marketWatcher.marketOther.length,
                    i = (new Date).getTime(),
                    o = Math.floor(Math.random() * (9e5 + 1) + 9e5),
                    n = (new Date).valueOf(),
                    s = TWIR.storage.marketWatcher.mwl,
                    p = TWIR.marketWatcher.scan;
                ! function l() {
                    "none" !== p && (TWIR.marketWatcher.checking = !0, Ajax.remoteCall("building_market", "search", {
                        page: t,
                        visibility: 2
                    }, function(c) {
                        if (!1 === c.error) {
                            for (var A = c.msg.search_result, g = 0; g < A.length; g++) {
                                0;
                                var m = ItemManager.get(A[g].item_id).item_base_id,
                                    d = ItemManager.get(A[g].item_id),
                                    u = {
                                        date: n,
                                        auction_end_date: A[g].auction_end_date,
                                        item_base_id: m,
                                        item_count: A[g].item_count,
                                        auction_price: A[g].auction_price,
                                        max_price: A[g].max_price,
                                        offer_id: A[g].market_offer_id
                                    };
                                if (!("yield" !== d.type || null !== d.set || TWIR.storage.inventory.collectibles.indexOf(m) >= 0 || TWIR.storage.inventory.bonus.indexOf(m) >= 0) || "all" != p && "valuable" != p) {
                                    if ("all" == p)
                                        if (TWIR.storage.marketWatcher.marketOther.some(e => e.offer_id === A[g].market_offer_id)) {
                                            var I = TWIR.storage.marketWatcher.marketOther.findIndex(e => e.offer_id === A[g].market_offer_id);
                                            TWIR.storage.marketWatcher.marketOther[I].date = n
                                        } else TWIR.storage.marketWatcher.marketOther.push(u)
                                } else if (TWIR.storage.marketWatcher.marketMain.some(e => e.offer_id === A[g].market_offer_id)) {
                                    var h = TWIR.storage.marketWatcher.marketMain.findIndex(e => e.offer_id === A[g].market_offer_id);
                                    TWIR.storage.marketWatcher.marketMain[h].date = n
                                } else TWIR.storage.marketWatcher.marketMain.push(u);
                                var k = [],
                                    R = s.find(e => e.item_id === A[g].item_id || e.item_id === d.set);
                                if (void 0 === R && ("yield" !== d.type || null !== d.set || TWIR.storage.inventory.collectibles.indexOf(d.item_base_id) >= 0 || TWIR.storage.inventory.bonus.indexOf(d.item_base_id) >= 0) && TWIR.marketWatcher.isUndervalued(A[g].item_id, A[g].max_price, A[g].auction_price)) {
                                    var b = {
                                        type: d.type,
                                        auction_ends_in: A[g].auction_ends_in,
                                        auction_end_date: A[g].auction_end_date,
                                        item_id: A[g].item_id,
                                        item_count: A[g].item_count,
                                        auction_price: A[g].auction_price,
                                        max_price: A[g].max_price,
                                        seller_name: A[g].seller_name,
                                        seller_id: A[g].seller_player_id,
                                        market_town_id: A[g].market_town_id,
                                        market_town: A[g].market_town_name,
                                        posx: A[g].market_town_x,
                                        posy: A[g].market_town_y,
                                        spec: "undervalued"
                                    };
                                    k.push(b)
                                }
                                if (TWIR.storage.get("mw_collections") && TWIR.storage.marketWatcher.missing.indexOf(d.name) >= 0) {
                                    var y = {
                                        type: d.type,
                                        auction_ends_in: A[g].auction_ends_in,
                                        auction_end_date: A[g].auction_end_date,
                                        item_id: A[g].item_id,
                                        item_count: A[g].item_count,
                                        auction_price: A[g].auction_price,
                                        max_price: A[g].max_price,
                                        seller_name: A[g].seller_name,
                                        seller_id: A[g].seller_player_id,
                                        market_town_id: A[g].market_town_id,
                                        market_town: A[g].market_town_name,
                                        posx: A[g].market_town_x,
                                        posy: A[g].market_town_y
                                    };
                                    TWIR.storage.marketWatcher.wtb_missing.hasOwnProperty(d.short) ? TWIR.storage.marketWatcher.wtb_missing[d.short].push(y) : (TWIR.storage.marketWatcher.wtb_missing[d.short] = [], TWIR.storage.marketWatcher.wtb_missing[d.short].push(y))
                                }
                                if (void 0 !== R) {
                                    TWIR.storage.popups.marketBest, TWIR.storage.popups.marketBestJunk;
                                    if (null !== A[g].max_price && A[g].max_price <= R.item_price || null === A[g].max_price || 0 === R.item_price) {
                                        var w = {
                                            type: d.type,
                                            auction_ends_in: A[g].auction_ends_in,
                                            auction_end_date: A[g].auction_end_date,
                                            item_id: A[g].item_id,
                                            item_count: A[g].item_count,
                                            auction_price: A[g].auction_price,
                                            max_price: A[g].max_price,
                                            seller_name: A[g].seller_name,
                                            seller_id: A[g].seller_player_id,
                                            market_town_id: A[g].market_town_id,
                                            market_town: A[g].market_town_name,
                                            posx: A[g].market_town_x,
                                            posy: A[g].market_town_y
                                        };
                                        TWIR.storage.marketWatcher.wtb.hasOwnProperty(d.short) ? TWIR.storage.marketWatcher.wtb[d.short].push(w) : (TWIR.storage.marketWatcher.wtb[d.short] = [], TWIR.storage.marketWatcher.wtb[d.short].push(w))
                                    }
                                }
                            }
                            setTimeout(function() {
                                if (!0 === c.msg.next) t++, l();
                                else {
                                    if (k.length > 0 && TWIR.storage.get("mw_underpriced_alert")) {
                                        var n = k[Math.floor(Math.random() * k.length)],
                                            p = ItemManager.get(n.item_id),
                                            A = TWIR.storage.marketWatcher.wtb;
                                        TWIR.storage.marketWatcher.wtb = {
                                            [p.short]: [],
                                            ...A
                                        }, TWIR.storage.marketWatcher.wtb[p.short].push(n)
                                    }
                                    if (TWIR.storage.get("mw_trader"))
                                        for (var g = TWIR.storage.marketWatcher.trader, m = 0; m < g.length; m++) {
                                            var d = ItemManager.get(g[m].item_id),
                                                u = s.find(e => e.item_id === g[m].item_id),
                                                I = new Date(1e3 * g[m].auction_end_date).getTime() - (new Date).getTime();
                                            g[m].auction_ends_in = I / 1e3, g[m].posx = Character.position.x, g[m].posy = Character.position.y, TWIR.storage.marketWatcher.wtb_missing.hasOwnProperty(d.short) ? TWIR.storage.marketWatcher.wtb_missing[d.short].unshift(g[m]) : TWIR.storage.marketWatcher.missing.indexOf(d.name) >= 0 && (TWIR.storage.marketWatcher.wtb_missing[d.short] = [], TWIR.storage.marketWatcher.wtb_missing[d.short].push(g[m])), TWIR.storage.marketWatcher.wtb.hasOwnProperty(d.short) ? TWIR.storage.marketWatcher.wtb[d.short].unshift(g[m]) : !TWIR.storage.marketWatcher.wtb.hasOwnProperty(d.short) && u && (TWIR.storage.marketWatcher.wtb[d.short] = [], TWIR.storage.marketWatcher.wtb[d.short].push(g[m]))
                                        }
                                    TWIR.storage.marketWatcher.marketMain = TWIR.beatMarketData(TWIR.storage.marketWatcher.marketMain), TWIR.storage.marketWatcher.marketOther = TWIR.beatMarketData(TWIR.storage.marketWatcher.marketOther);
                                    var h = TWIR.storage.marketWatcher.marketMain,
                                        R = TWIR.storage.marketWatcher.marketOther;
                                    if (void 0 !== localStorage) {
                                        var b = TWIR.minMarketData(h),
                                            y = TWIR.minMarketData(R),
                                            w = TWIR.storage.marketWatcher.wtb;
                                        try {
                                            localStorage.twir_marketData = TWIR.LZ.compress(JSON.stringify(b)), localStorage.twir_marketDataJunk = TWIR.LZ.compress(JSON.stringify(y)), localStorage.twir_marketDataTemp = TWIR.LZ.compress(JSON.stringify(w))
                                        } catch (e) {
                                            QUOTA_EXCEEDED_ERR
                                        }
                                        var x = (new Date).getTime();
                                        TWIR.marketBest.init(), TWIR.console("TWIR/: Market Scan completed at " + Chat.Formatter.formatTime((new Date).getTime(), !1) + " in " + ((x - i) / 1e3).getTime2EndToken() + " (" + t + " pages, " + (TWIR.storage.marketWatcher.marketMain.length - a + (TWIR.storage.marketWatcher.marketOther.length - r)) + " new listings). Next scan in: " + (o / 1e3).getTime2EndString(!1) + ".", "green"), localStorage.setItem("twir_marketTimer", (new Date).valueOf())
                                    } else new UserMessage(e.informative.storage_error + "!", UserMessage.TYPE_ERROR).show();
                                    TWIR.marketWatcher.showMarketAlert(), TWIR.marketWatcher.checking = !1, TWIR.marketWatcher.checkCollectible(), TWIR.checkShop(), setTimeout(function() {
                                        TWIR.marketWatcher.scanMarket()
                                    }, o)
                                }
                            }, Math.floor(2001 * Math.random() + 1e3))
                        } else if (c.error) return new UserMessage(c.msg).show()
                    }))
                }()
            },
            searchMarket: function(e) {
                if (!isNaN(e)) {
                    var t = ItemManager.get(e);
                    e = t.name
                }
                MarketWindow.open(Character.homeTown.town_id), MarketWindow.showTab("buy"), $("div.market-buy .iSearchbox input", MarketWindow.DOM).val(e), $("span.iconBut_mpb_refresh", MarketWindow.DOM).click(), $("div.market-buy .iSearchbox input", MarketWindow.DOM).val("")
            },
            setMarketAlert: {
                gui: {
                    window: {}
                },
                open: function(t) {
                    if (TWIR.marketWatcher.checking) return new UserMessage(e.informative.error_wait + ".", UserMessage.TYPE_ERROR).show();
                    var a = TWIR.storage.marketWatcher.wtb_missing,
                        r = TWIR.storage.marketWatcher.wtb;
                    TWIR.marketWatcher.setMarketAlert.gui.window = wman.open("TWIR_MW", null, "escape noreload").setTitle(e.market_watcher.add_name).setMiniTitle(e.market_watcher.add_name).setSize(500, 471), $.isEmptyObject(r) || TWIR.marketWatcher.setMarketAlert.gui.window.addTab(e.market_watcher.watched, "twir_MWA_watched", function() {
                        TWIR.marketWatcher.setMarketAlert.show("watched"), TWIR.marketWatcher.setMarketAlert.gui.window.activateTab("twir_MWA_watched")
                    }), !$.isEmptyObject(a) && TWIR.storage.get("mw_collections") && TWIR.marketWatcher.setMarketAlert.gui.window.addTab(e.market_watcher.collections, "twir_MWA_coll", function() {
                        TWIR.marketWatcher.setMarketAlert.show("coll"), TWIR.marketWatcher.setMarketAlert.gui.window.activateTab("twir_MWA_coll")
                    }), TWIR.marketWatcher.setMarketAlert.show(t), TWIR.marketWatcher.setMarketAlert.gui.window.activateTab("watched" == t ? "twir_MWA_watched" : "twir_MWA_coll")
                },
                show: function(t) {
                    TWIR.marketWatcher.setMarketAlert.gui.window.clearContentPane();
                    var a = (new west.gui.Scrollpane).appendContent("<div/>"),
                        r = TWIR.marketWatcher.setMarketAlert.format(t);
                    a.getContentPane().append($(r)), $(a.getMainDiv()).css({
                        height: "328px",
                        "margin-top": "10px"
                    });
                    var i = localStorage.twir_marketTimer,
                        o = $('<div style="margin-top: 10px;font-size: 11px;float: right;margin-right: 20px;">' + (i ? e.market_watcher.last_scan + ": " + get_server_date_string(!1, JSON.parse(i), !0) : "") + "</div>");
                    $(TWIR.marketWatcher.setMarketAlert.gui.window.getContentPane()).append(a.getMainDiv()).append(o)
                },
                format: function(t) {
                    var a = "watched" == t ? TWIR.storage.marketWatcher.wtb : "coll" == t ? TWIR.storage.marketWatcher.wtb_missing : {};
                    if (Object.keys(a).length) {
                        if (TWIR.marketWatcher.checking) return new UserMessage(e.informative.error_wait + ".", UserMessage.TYPE_ERROR).show();
                        var r = [],
                            i = [...Inventory.availableCategories, "yield", "recipe"];
                        for (var o in a) r.push([o, a[o]]);
                        r.sort(function(e, t) {
                            var a = e[1][0].type,
                                r = t[1][0].type,
                                o = e[1][0].max_price,
                                n = t[1][0].max_price,
                                s = e[1][0].auction_price,
                                p = t[1][0].auction_price;
                            return a == r ? Math.max(o, s) - Math.max(n, p) : i.indexOf(a) - i.indexOf(r)
                        });
                        var n = "";
                        n += '<table class="twir_MWA" style="border-collapse:collapse;margin: 0 auto;max-width: 430px;"><tbody>';
                        for (var s = r, p = 0; p < s.length; p++) {
                            var l = r[p][1];
                            l.sort(function(e, t) {
                                return Math.max(e.max_price, e.auction_price) - Math.max(t.max_price, t.auction_price)
                            });
                            var c = "";
                            if (l.length > 1) {
                                for (var A = l.length <= 11 ? l.length : 11, g = 1; g < A; g++) {
                                    var m = null !== l[g].max_price ? e.market_watcher.price : e.market_watcher.bid,
                                        d = null !== l[g].max_price ? parseInt(l[g].max_price / l[g].item_count) : parseInt(l[g].auction_price / l[g].item_count);
                                    c += "<div>[" + g + "]&nbsp;@" + l[g].seller_name.cutIt(14) + "&nbsp;(x" + l[g].item_count + "),&nbsp;" + m + ":&nbsp;$" + TWIR.replSum(d, !0) + (l[g].item_count > 1 ? "&nbsp;(" + e.tooltips.each + ")" : "") + ",&nbsp;" + e.market_watcher.time_left + ":&nbsp;" + TWIR.msToTime(l[g].auction_ends_in) + "</div>"
                                }
                                l.length >= 11 && (c += '<div style="text-align: center;">...</div>')
                            }
                            var u = ItemManager.get(l[0].item_id),
                                I = TWIR.addPopup.getMarketPrice(u),
                                h = null !== l[0].max_price ? e.market_watcher.price : e.market_watcher.bid,
                                k = null !== l[0].max_price ? l[0].max_price / l[0].item_count : l[0].auction_price / l[0].item_count,
                                R = l[0].spec && "trader" == l[0].spec ? "blue" : TWIR.storage.popups.marketBest.hasOwnProperty(u.short) && k <= TWIR.storage.popups.marketBest[u.short].price_sum / TWIR.storage.popups.marketBest[u.short].offer_count && TWIR.storage.popups.marketBest[u.short].offer_count > 2 ? "#070" : TWIR.storage.popups.marketBest.hasOwnProperty(u.short) && TWIR.storage.popups.marketBest[u.short].offer_max.price <= k && TWIR.storage.popups.marketBest[u.short].offer_count > 2 && l[0].seller_name != TWIR.author ? "#900" : "unset",
                                b = Map.calcWayTime(Character.position, {
                                    x: l[0].posx,
                                    y: l[0].posy
                                }),
                                y = "<div>@" + l[0].seller_name + (l[0].market_town ? "&nbsp;(" + l[0].market_town + ")" : "") + "</div><div>" + e.informative.distance + ":&nbsp;" + b.formatDuration() + "</div>",
                                w = p !== s.length - 1 || 9 === p ? "1px solid rgba(140,92,20,0.65)" : "none",
                                x = l.length > 1 ? '<div style="font-style: italic;margin-left: 10px;color: #666;cursor: pointer;"><span title="' + y.escapeHTML() + '">@' + l[0].seller_name.cutIt(14) + '</span>&nbsp;<span title="' + c.escapeHTML() + '">' + e.market_watcher.offer_count.replace("$1", l.length - 1) + "</span></div>" : '<div style="color: #666;margin-left: 10px;cursor: pointer;"><span title="' + y.escapeHTML() + '">@' + l[0].seller_name + "</span></div>",
                                f = "trader" != l[0].spec ? "TWIR.marketWatcher.searchMarket(" + l[0].item_id + ")" : "west.window.shop.open(&quot;wear_window&quot;).showCategory(&quot;trader&quot;)",
                                T = l[0].spec && "undervalued" == l[0].spec ? '<img src="' + TWIR.images.underprice + '" style="position: absolute; right: 0px; bottom: 0px;"/>' : l[0].spec && "trader" == l[0].spec ? '<img src="' + TWIR.images.trader + '" style="position: absolute; right: 0px; bottom: 0px;"/>' : "";
                            n += '<tr style="border-spacing: 1px !important;border-radius: 3px;border-bottom: ' + w + ';"><td style="vertical-align: middle;"><div style="position: relative; height: 29px; width: 35px;"><img style="cursor: pointer;" title="' + new ItemPopup(u).getXHTML().escapeHTML() + '" src="' + u.image + '"; height="29"; width="29"></img>' + T + "</div></td>", n += '<td style="padding: 2px;padding-right: 8px;vertical-align: middle;"><div style="margin-bottom: -2px; cursor: pointer;"><span data-itemId="' + l[0].item_id + '" title="' + new ItemPopup(u).getXHTML().escapeHTML() + '" style="width: 220px;text-overflow: ellipsis;white-space: nowrap;overflow: hidden;display: inline-block; color: ' + R + ';">' + u.name + '</span><span style="display: inline-block;overflow: hidden;"> &nbsp;(x' + l[0].item_count + ")</span></div>" + x + "</td>", n += '<td title="' + l[0].auction_end_date.getFormattedTimeString4Timestamp() + '" style="text-align: center;padding: 2px; padding-right: 8px;cursor: pointer;"><div>' + e.market_watcher.time_left + "</div><div>" + TWIR.msToTime(l[0].auction_ends_in) + "</div></td>", n += '<td title="' + (I ? I.escapeHTML() : "") + '" style="text-align: center;padding: 2px;cursor: pointer;"><div>' + h + '</div><div style="color: ' + R + ';">$' + TWIR.replSum(k) + "</div></td>", n += '<td style="vertical-align: middle;"><div onclick="' + f + '" style="margin-left: 10px;cursor: pointer;"><img src="' + Game.cdnURL + '/images/icons/bid.png" title="' + ("trader" != l[0].spec ? e.market_watcher.bid_now : e.market_watcher.buy_trader) + '" /> </div></td>', n += "</tr>"
                        }
                        return n += "</tbody></table>"
                    }
                }
            },
            showMarketAlert: function() {
                Math.floor(Math.random() * (6e5 + 1) + 3e5);
                var t = TWIR.storage.marketWatcher.wtb,
                    a = TWIR.storage.marketWatcher.wtb_missing,
                    r = TWIR.marketWatcher.lastAlert,
                    i = !1;
                var o = function() {
                        var e = 0;
                        for (var a in t) {
                            if (t[a].some(e => "undervalued" === e.spec)) {
                                var r = t[a].filter(e => "undervalued" === e.spec)[0].item_id;
                                r !== TWIR.marketWatcher.underprice && (TWIR.marketWatcher.underprice = r, i = !0)
                            }
                            e += t[a].length
                        }
                        return e
                    }(),
                    n = function() {
                        var e = 0;
                        for (var t in r) e += r[t].length;
                        return e
                    }(),
                    s = function() {
                        for (var e in t)
                            if (!r.hasOwnProperty(e)) return !0;
                        return !1
                    }(),
                    p = new Audio(TWIR.alert);
                if (p.volume = .5, TWIR.marketWatcher.OnGoing = null, $.isEmptyObject(t) && $.isEmptyObject(a)) $.isEmptyObject(t) && (TWIR.marketWatcher.lastAlert = t, TWIR.console("TWIR/: No offers matching your list were found.", "#8b4513"));
                else {
                    if (TWIR.storage.get("mw_wtb_alert")) {
                        var l = "<div>" + e.market_watcher.add_name + "</div>";
                        if (TWIR.marketWatcher.OnGoing = new OnGoingPermanentEntry(function() {
                                $.isEmptyObject(t) ? !$.isEmptyObject(a) && TWIR.storage.get("mw_collections") && TWIR.marketWatcher.setMarketAlert.open("coll") : TWIR.marketWatcher.setMarketAlert.open("watched")
                            }, l, "twir_marketWatcher", !1), WestUi.NotiBar.add(TWIR.marketWatcher.OnGoing), $.isEmptyObject(t)) var c = new west.gui.Icon("exclamation").getMainDiv().css({
                            top: "25px",
                            left: "5px",
                            position: "absolute",
                            "background-color": "rgb(48, 21, 6)"
                        });
                        else var c = $('<div style="text-shadow:black -1px 0 1px,black 0 1px 1px,black 1px 0 1px,black 0 -1px 1px;line-height:15px;font-size:10px;font-weight:700;text-align:center;position:absolute;width:21px;z-index:2;background:url(' + Game.cdnURL + '/images/interface/friendsbar/level_bg.png);height:15px;left:2px; top: 28px; color:white;">' + TWIR.replSum(Object.keys(t).length) + "</div>");
                        $(".extra", TWIR.marketWatcher.OnGoing.element).empty().append(c)
                    }
                    TWIR.console("TWIR/: Found " + o + " offers matching your list (" + (o - n > -1 ? o - n : 0) + " new).", "green");
                    var A = new RegExp("^.*" + e.market_watcher.add_name + ":(.*)$", "i"),
                        g = 0 != Character.homeTown.town_id ? Chat.Resource.Manager.getRoom("room_town_" + Character.homeTown.town_id) : Chat.Resource.Manager.getGeneralRoom();
                    if (g && s && TWIR.storage.get("mw_wtb_chat_alert") && -1 === g.history.findIndex(e => A.test(e))) {
                        ChatWindow.open(g, !0);
                        var m = e.market_watcher.seen + '&nbsp;<a href="javascript:void(TWIR.marketWatcher.setMarketAlert.open(&quot;watched&quot;))">[' + Object.keys(t).length + "]</a>.",
                            d = Chat.Formatter.formatMessage(Chat.Formatter.formatText(m, !0), "&nbsp;<b>" + e.market_watcher.add_name + ":</b>", Date.now(), !0, "from_system"),
                            u = Chat.Formatter.formatMessage(Chat.Formatter.formatText(e.market_watcher.underpriced_found + "!", !0), "&nbsp;<b>" + e.market_watcher.add_name + ":</b>", Date.now(), !0, "from_system"),
                            I = Chat.Resource.Manager.getRooms();
                        for (var h in I) I[h].addMessage(d), !0 === i && I[h].addMessage(u)
                    }
                    if (o !== n && (s && null !== TWIR.marketWatcher.OnGoing && TWIR.marketWatcher.OnGoing.highlightBorder(!0), TWIR.marketWatcher.lastAlert = t), s && !TWIR.storage.get("mw_alert_playsound")) {
                        const e = p.play();
                        null !== e && e.catch(() => {
                            p.play()
                        })
                    }
                }
            }
        }, TWIR.statsQuantities = function() {
            var e = Bag.items_by_id,
                t = Bag.getItemsByItemIds(TWIR.storage.inventory.use_all),
                a = Bag.getItemsByItemIds(TWIR.storage.inventory.buffs_all),
                r = Bag.getItemsByItemIds(TWIR.storage.inventory.crafting_all),
                i = Bag.getItemsByItemIds(TWIR.storage.inventory.bonus),
                o = Bag.getItemsByItemIds(TWIR.storage.inventory.work),
                n = Bag.getItemsByItemIds(TWIR.storage.inventory.quest),
                s = {
                    item_id: 0,
                    item_count: 0
                },
                p = {
                    item_id: 0,
                    item_count: 0
                },
                l = 0,
                c = 0,
                A = 0,
                g = 0,
                m = 0,
                d = 0,
                u = 0,
                I = 0,
                h = 0,
                k = 0,
                R = 0,
                b = 0,
                y = 0,
                w = 0,
                x = 0,
                f = 0,
                T = 0,
                W = 0,
                B = 0,
                v = 0,
                M = 0,
                S = 0,
                U = 0,
                V = 0,
                K = 0,
                j = 0,
                C = 0,
                E = 0,
                q = 0,
                Y = 0,
                G = 0,
                F = 0,
                Q = 0,
                O = 0,
                J = 0,
                H = 0,
                D = 0,
                Z = 0,
                P = 0,
                z = 0;
            for (var N in e) {
                if (e.hasOwnProperty(N)) var L = e[N].obj;
                switch ("shot" === L.sub_type ? (U += 1, V += e[N].count) : "hand" === L.sub_type && (M += 1, S += e[N].count), "yield" !== L.type && null !== L.set && (m += 1, d += e[N].count), "yield" !== L.type && "recipe" !== L.type && e[N].count > s.item_count && (s = {
                    item_id: L.item_base_id,
                    item_count: e[N].count
                }), L.type) {
                    case "belt":
                        l += 1, c += e[N].count, K += 1, j += e[N].count;
                        break;
                    case "body":
                        l += 1, c += e[N].count, C += 1, E += e[N].count;
                        break;
                    case "foot":
                        l += 1, c += e[N].count, q += 1, Y += e[N].count;
                        break;
                    case "head":
                        l += 1, c += e[N].count, G += 1, F += e[N].count;
                        break;
                    case "neck":
                        l += 1, c += e[N].count, Q += 1, O += e[N].count;
                        break;
                    case "pants":
                        l += 1, c += e[N].count, J += 1, H += e[N].count;
                        break;
                    case "animal":
                        l += 1, c += e[N].count, D += 1, Z += e[N].count;
                        break;
                    case "right_arm":
                        l += 1, c += e[N].count;
                        break;
                    case "left_arm":
                        l += 1, c += e[N].count, P += 1, z += e[N].count;
                        break;
                    case "yield":
                        A += 1, g += e[N].count, e[N].count > p.item_count && (p = {
                            item_id: L.item_base_id,
                            item_count: e[N].count
                        });
                        break;
                    case "recipe":
                        u += 1, I += e[N].count
                }
            }
            for (var X = 0; X < t.length; X++) h += 1, k += t[X].count;
            for (var _ = 0; _ < a.length; _++) R += 1, b += a[_].count;
            for (var $ = 0; $ < r.length; $++) "recipe" !== r[$].obj.type && (y += 1, w += r[$].count);
            for (var ee = 0; ee < i.length; ee++) x += 1, f += i[ee].count;
            for (var te = 0; te < o.length; te++) T += 1, W += o[te].count;
            for (var ae = 0; ae < n.length; ae++) B += 1, v += n[ae].count;
            return TWIR.storage.stats.cache.count = {
                objects_count: l,
                objects_total_count: c,
                products_count: A,
                products_total_count: g,
                recipes_count: u,
                recipes_total_count: I,
                setitems_count: m,
                setitems_total_count: d,
                useable_count: h,
                useable_total_count: k,
                buff_count: R,
                buff_total_count: b,
                craft_count: y,
                craft_total_count: w,
                bonus_count: x,
                bonus_total_count: f,
                work_count: T,
                work_total_count: W,
                quest_count: B,
                quest_total_count: v,
                hand_count: M,
                hand_total_count: S,
                shot_count: U,
                shot_total_count: V,
                belt_count: K,
                belt_total_count: j,
                body_count: C,
                body_total_count: E,
                foot_count: q,
                foot_total_count: Y,
                head_count: G,
                head_total_count: F,
                neck_count: Q,
                neck_total_count: O,
                pants_count: J,
                pants_total_count: H,
                animal_count: D,
                animal_total_count: Z,
                left_arm_count: P,
                left_arm_total_count: z
            }, TWIR.storage.stats.cache.max_count = {
                objects_max_total_count: s,
                products_max_total_count: p
            }
        }, TWIR.statsSalesValue = function() {
            var e = 0,
                t = 0,
                a = 0,
                r = 0,
                i = 0,
                o = 0,
                n = 0,
                s = 0,
                p = 0,
                l = 0,
                c = 0,
                A = 0,
                g = 0,
                m = 0,
                d = 0,
                u = 0,
                I = 0,
                h = 0,
                k = 0,
                R = 0,
                b = 0,
                y = {
                    item_id: 0,
                    item_price: 0
                },
                w = {
                    item_id: 0,
                    item_price: 0
                },
                x = {
                    item_id: 0,
                    item_price: 0
                },
                f = {
                    item_id: 0,
                    item_price: 0
                },
                T = Bag.items_by_id,
                W = Wear.wear;
            for (var B in W) {
                if (W.hasOwnProperty(B)) var v = W[B].obj.item_id;
                l += $.isNumeric(ItemManager.get(v).price) ? 1 * ItemManager.get(v).price : 0, c += $.isNumeric(ItemManager.get(v).sell_price) ? 1 * ItemManager.get(v).sell_price : 0
            }
            for (var M in T) T.hasOwnProperty(M) && (e += $.isNumeric(ItemManager.get(M).price) ? ItemManager.get(M).price * T[M].count : 0), t += $.isNumeric(ItemManager.get(M).sell_price) ? ItemManager.get(M).sell_price * T[M].count : 0, 1 == T[M].count && (s += $.isNumeric(ItemManager.get(M).price) ? 1 * ItemManager.get(M).price : 0, p += $.isNumeric(ItemManager.get(M).sell_price) ? 1 * ItemManager.get(M).sell_price : 0);
            for (var S in TWIR.storage.popups.marketBest) TWIR.storage.popups.marketBest.hasOwnProperty(S) && !0 === TWIR.storage.popups.marketBest[S].owned && (a += TWIR.storage.popups.marketBest[S].price_sum);
            for (var U in T) {
                if (T.hasOwnProperty(U)) var V = T[U].obj;
                switch (V.type) {
                    case "yield":
                        o += $.isNumeric(ItemManager.get(U).price) ? ItemManager.get(U).price : 0, n += $.isNumeric(ItemManager.get(U).sell_price) ? ItemManager.get(U).sell_price : 0, A += $.isNumeric(ItemManager.get(U).price) ? ItemManager.get(U).price * T[U].count : 0, g += $.isNumeric(ItemManager.get(U).sell_price) ? ItemManager.get(U).sell_price * T[U].count : 0, V.price > w.item_price ? w = {
                            item_id: V.item_base_id,
                            item_price: V.price
                        } : V.sell_price > f.item_price && (f = {
                            item_id: V.item_base_id,
                            item_price: V.sell_price
                        });
                        break;
                    case "recipe":
                        u += $.isNumeric(ItemManager.get(U).price) ? ItemManager.get(U).price * T[U].count : 0, I += $.isNumeric(ItemManager.get(U).sell_price) ? ItemManager.get(U).sell_price * T[U].count : 0;
                        break;
                    case "belt":
                    case "body":
                    case "foot":
                    case "head":
                    case "neck":
                    case "pants":
                    case "animal":
                    case "right_arm":
                    case "left_arm":
                        r += $.isNumeric(ItemManager.get(U).price) ? ItemManager.get(U).price : 0, i += $.isNumeric(ItemManager.get(U).sell_price) ? ItemManager.get(U).sell_price : 0, m += $.isNumeric(ItemManager.get(U).price) ? ItemManager.get(U).price * T[U].count : 0, d += $.isNumeric(ItemManager.get(U).sell_price) ? ItemManager.get(U).sell_price * T[U].count : 0, V.price > y.item_price ? y = {
                            item_id: V.item_base_id,
                            item_price: V.price
                        } : V.sell_price > x.item_price && (x = {
                            item_id: V.item_base_id,
                            item_price: V.sell_price
                        })
                }
                "yield" !== V.type && T[U].count > 1 && (R += $.isNumeric(ItemManager.get(U).price) ? ItemManager.get(U).price * T[U].count : 0, b += $.isNumeric(ItemManager.get(U).sell_price) ? ItemManager.get(U).sell_price * T[U].count : 0), "yield" !== V.type && !0 === V.dropable && (h += $.isNumeric(ItemManager.get(U).price) ? ItemManager.get(U).price * T[U].count : 0, k += $.isNumeric(ItemManager.get(U).sell_price) ? ItemManager.get(U).sell_price * T[U].count : 0)
            }
            return r = Math.round(r / TWIR.storage.stats.cache.count.objects_count), i = Math.round(i / TWIR.storage.stats.cache.count.objects_count), o = Math.round(o / TWIR.storage.stats.cache.count.products_count), n = Math.round(n / TWIR.storage.stats.cache.count.products_count), TWIR.storage.stats.cache.value = {
                inventory_buy_price: e,
                inventory_sell_price: t,
                market_price: a,
                average_obj_buy_price: r,
                average_obj_sell_price: i,
                average_prod_buy_price: o,
                average_prod_sell_price: n,
                unique_buy_price: s,
                unique_sell_price: p,
                wear_buy_price: l,
                wear_sell_price: c,
                products_buy_price: A,
                products_sell_price: g,
                objects_buy_price: m,
                objects_sell_price: d,
                recipe_buy_price: u,
                recipe_sell_price: I,
                droppable_buy_price: h,
                droppable_sell_price: k,
                duplicates_buy_price: R,
                duplicates_sell_price: b
            }, TWIR.storage.stats.cache.max_price = {
                products_max_buy_price: w,
                objects_max_buy_price: y,
                products_max_sell_price: f,
                objects_max_sell_price: x
            }
        }, TWIR.makeMarketMenu = function(t) {
            try {
                var a = (new west.gui.Selectbox).setHeader(e.menulink.market),
                    r = 0;

                function i(t) {
                    if (t.length > r) {
                        var i = 7.5 * (r = t.length) + 120,
                            o = e.menulink.premium_bids.length + e.menulink.premium_offers.length + 50,
                            n = 2 * i < o ? o / 2 : i;
                        a.setWidth(n <= 275 ? n : 275)
                    }
                }
                if (Object.keys(TWIR.storage.market).length > 0) {
                    var o = Object.keys(TWIR.storage.market).sort((e, t) => TWIR.storage.market[e].distance - TWIR.storage.market[t].distance).reduce((e, t, a) => (e[a] = TWIR.storage.market[t], e), {});
                    for (var n in a.addItem(["premium_bids"], ' <img src="' + TWIR.images.currency.nuggets + '" height="16px width="auto" style="left: 5px;top: 5px;"/><span style="margin-left: 15px;color: #5e321a; text-overflow: ellipsis;white-space: nowrap;overflow: hidden;word-wrap: break-word; margin-top: 2px; max-width: 200px;display: inline-block;">' + e.menulink.premium_bids + "</span>", e.menulink.premium_bids), a.addItem(["premium_offers"], ' <img src="' + TWIR.images.currency.nuggets + '" height="16px width="auto" style="left: 5px;top: 5px;"/><span style="margin-left: 15px;color: #5e321a; text-overflow: ellipsis;white-space: nowrap;overflow: hidden;word-wrap: break-word; margin-top: 2px; max-width: 200px;display: inline-block;">' + e.menulink.premium_offers + "</span>", e.menulink.premium_offers), o) {
                        var s = "",
                            p = 0,
                            l = 0;
                        for (var c in s += "<div class=&quot;popup_yield&quot; style=&quot;display: block;max-width: 396px;&quot;>", o[n].items) {
                            "offer_sold" === o[n].items[c].type ? l += o[n].items[c].money : "offer_sold" !== o[n].items[c].type && (p += o[n].items[c].count), Object.keys(o[n].items).length;
                            var A = ItemManager.get(c);
                            s += "<div class=&quot;popup_yield_image&quot; style=&quot;margin-right: 1px;margin-bottom: 1px;display: inline-block;&quot;><div class=&quot;item&quot;><span class=&quot;count&quot; style=&quot;display:block;top:30px;left:1px&quot;>" + TWIR.replSum(o[n].items[c].count) + "</span><img src=&quot;" + A.image + "&quot; alt=&quot;" + A.name + "&quot; width=&quot;43&quot; height=&quot;43&quot; /></div>", "offer_sold" === o[n].items[c].type && (s += "<span style=&quot;font-size: 11px;text-align: center;display: block;&quot;>$" + TWIR.replSum(o[n].items[c].money) + "</span>"), s += "</div>"
                        }
                        s += "</div>", i(o[n].name), a.addItem(["town", o[n].id, o[n].posx, o[n].posy], '<img src="' + Game.cdnURL + '/images/map/minimap/icons/miniicon_market_items.png?2" style="left: 5px;top: 8px;"/><span style="margin-left: 15px;color: #5e321a; text-overflow: ellipsis;white-space: nowrap;overflow: hidden;word-wrap: break-word; margin-top: 2px; max-width: 170px;display: inline-block;">' + o[n].name + '</span><span title="' + s + '" style="display: inline-block;margin-top: 3px;color: #5e321a;position: relative;float: right;font-size: 12px;margin-left: 25px;">&#124;&nbsp;' + (0 != l ? "$" + TWIR.replSum(l) + (0 != p ? ",&nbsp;" : "") : "") + (0 != p ? TWIR.replSum(p) + "&nbsp;" + e.tooltips.items : "") + "</span>", "<div>" + o[n].name + "</div><div>" + e.informative.distance + ":&nbsp;" + o[n].distance.formatDuration() + "</div>")
                    }
                    return a.addListener(function(e) {
                        var t = e[0];
                        switch (t) {
                            case "premium_bids":
                                MarketWindow.Sell.collectAll("Offer");
                                break;
                            case "premium_offers":
                                MarketWindow.Sell.collectAll("Sell");
                                break;
                            case "town":
                                Map.center(e[2], e[3])
                        }
                    }), a.show(t)
                }
                return new UserMessage(e.informative.error_market + "!").show()
            } catch (e) {
                TWIR.bugHunt(e)
            }
        }, TWIR.makeSleepMenu = function(t) {
            try {
                var a = (new west.gui.Selectbox).setHeader(e.menulink.sleep),
                    r = 0;

                function i(t) {
                    if (t.length > r) {
                        var i = 7.5 * (r = t.length) + 120;
                        e.menulink.nearest.length, e.menulink.nearest_five.length;
                        a.setWidth(i <= 275 ? i : 275)
                    }
                }
                var o = ["cubby", "bedroom", "hotel_room", "apartment", "luxurious_apartment"];
                if (Object.keys(TWIR.storage.towns).length > 0) {
                    var n = Object.keys(TWIR.storage.towns).sort((e, t) => TWIR.storage.towns[e].distance - TWIR.storage.towns[t].distance).reduce((e, t, a) => (e[a] = TWIR.storage.towns[t], e), {});
                    a.addItem(["nearest"], '<img src="' + Game.cdnURL + '/images/map/minimap/icons/miniicon_foreign_towns.png?2" style="left: 5px;top: 8px;"/><span style="margin-left: 15px;color: #5e321a; text-overflow: ellipsis;white-space: nowrap;overflow: hidden;word-wrap: break-word; margin-top: 2px; max-width: 200px;display: inline-block;">' + e.menulink.nearest + "</span>", e.menulink.nearest), a.addItem(["nearest5star"], '<img src="' + Game.cdnURL + '/images/map/minimap/icons/miniicon_foreign_towns.png?2" style="left: 5px;top: 8px;"/><span style="margin-left: 15px;color: #5e321a; text-overflow: ellipsis;white-space: nowrap;overflow: hidden;word-wrap: break-word; margin-top: 2px; max-width: 200px;display: inline-block;">' + e.menulink.nearest_five + "</span>", e.menulink.nearest_five)
                }
                if (Object.keys(TWIR.storage.sleep).length > 0) {
                    $.each(TWIR.storage.sleep, function(e) {
                        var t = Map.calcWayTime(Character.position, {
                            x: TWIR.storage.sleep[e].posx,
                            y: TWIR.storage.sleep[e].posy
                        });
                        TWIR.storage.sleep[e].distance = t
                    });
                    var s = Object.keys(TWIR.storage.sleep).sort((e, t) => TWIR.storage.sleep[e].distance - TWIR.storage.sleep[t].distance).reduce((e, t, a) => (e[a] = TWIR.storage.sleep[t], e), {});
                    for (var p in s) {
                        var l = "star" + (s[p].stage - 1) + ".png";
                        if (i(s[p].name), s[p].stage > 0 && "fort" === s[p].type) {
                            if (void 0 !== s[p].fort_type) var c = Character.forts.some(e => e.name === s[p].name) ? Game.cdnURL + "/images/map/minimap/icons/miniicon_own_forts-" + s[p].fort_type + ".png?2" : Game.cdnURL + "/images/map/minimap/icons/miniicon_alliance_forts-" + s[p].fort_type + ".png?2";
                            else var c = Character.forts.some(e => e.name === s[p].name) ? Game.cdnURL + "/images/map/minimap/icons/miniicon_own_forts.png?2" : Game.cdnURL + "/images/map/minimap/icons/miniicon_alliance_forts.png?2";
                            a.addItem(["fort", s[p].id, s[p].posx, s[p].posy], '<img src="' + c + '" style="left: 5px;top: 8px;"/><span style="margin-left: 15px;color: #5e321a; text-overflow: ellipsis;white-space: nowrap;overflow: hidden;word-wrap: break-word; margin-top: 2px; max-width: 170px;display: inline-block;">' + s[p].name + '</span><span style="display: inline-block;margin-top: 3px;color: #5e321a;position: relative;float: right;font-size: 12px;margin-left: 25px;">&#124;&nbsp;Lvl&nbsp;' + s[p].stage + "</span>", '<span style="display: inline-block;"><img src="' + Game.cdnURL + "/images/hotel_stars/" + l + '" height="33" width="auto"/></span><span style="display: inline-block;vertical-align: middle;margin-left: 2px;"><div>' + s[p].stage_name + "</div><div>" + s[p].name + "</div></span><br><div>" + e.informative.distance + ":&nbsp;" + s[p].distance.formatDuration() + "</div>")
                        } else s[p].stage > 0 && "town" === s[p].type && a.addItem(["homeTown", s[p].id, s[p].stage], '<img src="' + Game.cdnURL + '/images/map/minimap/icons/miniicon_own_town.png?2" style="left: 3px;top: 5px;"/><span style="margin-left: 15px;color: #5e321a; text-overflow: ellipsis;white-space: nowrap;overflow: hidden;word-wrap: break-word; margin-top: 2px; max-width: 170px;display: inline-block;">' + s[p].name + '</span><span style="display: inline-block;margin-top: 3px;color: #5e321a;position: relative;float: right;font-size: 12px; margin-left: 25px;">&#124;&nbsp;Lvl&nbsp;' + s[p].stage + "</span>", '<span style="display: inline-block;"><img src="' + Game.cdnURL + "/images/hotel_stars/" + l + '" height="33" width="auto"/></span><span style="display: inline-block;vertical-align: middle;margin-left: 2px;"><div>' + s[p].stage_name + "</div><div>" + s[p].name + "</div></span><br><div>" + e.informative.distance + ":&nbsp;" + s[p].distance.formatDuration() + "</div>")
                    }
                }
                return a.addListener(function(t) {
                    var a = t[0],
                        r = 0,
                        i = Object.keys(n);

                    function s(t) {
                        var a = i[r];
                        Ajax.remoteCallMode("building_hotel", "get_data", {
                            town_id: n[a].town_id
                        }, function(p) {
                            if (!(!1 === p.error && i.length > 0)) return new UserMessage(p.msg).show();
                            var l = p.waytime,
                                c = l.split(":"),
                                A = 60 * +c[0] * 60 + 60 * +c[1] + +c[2];
                            return p.hotel_level >= t && A <= 3600 ? TaskQueue.add(new TaskSleep(n[a].town_id, o[p.hotel_level - 1])) : A > 3600 ? new UserMessage(e.informative.error_hotel + "!").show() : r < i.length - 1 ? (r++, void setTimeout(function() {
                                s(t)
                            }, Math.floor(1001 * Math.random() + 1e3))) : new UserMessage(e.informative.error_hotel + "!").show()
                        })
                    }
                    switch (a) {
                        case "nearest":
                            s(1);
                            break;
                        case "nearest5star":
                            s(5);
                            break;
                        case "homeTown":
                            try {
                                TaskQueue.add(new TaskSleep(t[1], o[t[2] - 1]))
                            } catch (t) {
                                return new UserMessage(e.informative.error_hotel + "!").show()
                            }
                            break;
                        case "fort":
                            try {
                                TaskQueue.add(new TaskFortSleep(t[1], t[2], t[3]))
                            } catch (t) {
                                return new UserMessage(e.informative.error_hotel + "!").show()
                            }
                    }
                }), a.show(t)
            } catch (e) {
                TWIR.bugHunt(e)
            }
        }, TWIR.makeNPCMenu = function(t) {
            try {
                if (Object.keys(TWIR.storage.NPC).length > 0) {
                    var a = (new west.gui.Selectbox).setHeader(e.menulink.npc),
                        r = 0;

                    function i(e) {
                        if (e.length > r) {
                            var t = 7.5 * (r = e.length) + 35;
                            a.setWidth(t <= 275 ? t : 275)
                        }
                    }
                    var o = {};
                    for (var n in Object.keys(TWIR.storage.NPC).sort(function(e, t) {
                            return e = TWIR.replUml(e), t = TWIR.replUml(t), e > t ? 1 : -1
                        }).forEach(function(e) {
                            o[e] = TWIR.storage.NPC[e]
                        }), o)
                        for (var s = o[n], p = 0; p < s.length; p++) {
                            var l = s[p];
                            a.addItem(l, '<img src="' + Game.cdnURL + '/images/map/minimap/icons/miniicon_quests.png?2" style="left: 5px; top: 5px;"><span style="margin-left: 15px;color: #5e321a; text-overflow: ellipsis;white-space: nowrap;overflow: hidden;word-wrap: break-word; margin-top: 2px; max-width: 250px;display: inline-block;">' + n + "</span>", '<span style="display: inline-block;"><img src="' + Game.cdnURL + "/images/quest/employer/" + s[p].key + '.png" height="33" width="auto" style="border-radius: 5px;"/></span><span style="display: inline-block;vertical-align: middle;margin-left: 2px;"><div>' + n + "</div></span><br><div>" + e.informative.distance + ":&nbsp;" + Map.calcWayTime(Character.position, {
                                x: l.posx,
                                y: l.posy
                            }).formatDuration() + "</div>"), i(n)
                        }
                    return a.addListener(function(e) {
                        Map.center(e.posx, e.posy)
                    }), a.show(t)
                }
                return new UserMessage(e.informative.error_npc + "!").show()
            } catch (e) {
                TWIR.bugHunt(e)
            }
        }, TWIR.makeSelectMenu = function(t, a, r) {
            try {
                if ("crafting" !== r) var i = Object.keys(a).sort((e, t) => {
                    var r = TWIR.replUml(a[e].name),
                        i = TWIR.replUml(a[t].name);
                    return r[0].match(/#/) ? 1 : i[0].match(/#/) ? -1 : r == i ? 0 : r > i ? 1 : -1
                }).reduce((e, t, r) => (e[r] = a[t], e), {});
                else i = a;
                var o, n = new west.gui.Selectbox("twir_over_box").setHeader(e.inventory[r]).addClass("twir_over_box"),
                    s = 0;

                function p(e) {
                    if (e.length > s) {
                        var t = 7.5 * (s = e.length) + 100;
                        n.setWidth(t <= 285 ? t : 285)
                    }
                }
                for (var l in i) {
                    var c = i[l].items,
                        A = Bag.getItemsByItemIds(c);
                    if (p(i[l].name), A.length > 0) {
                        o = A.length > 0 ? A[~~(A.length * Math.random())].obj.image : TWIR.images.none;
                        A.length > 0 && A.length;
                        var g = 0;
                        for (var m of c) {
                            var d = Bag.getItemCount(m);
                            d && (g += d)
                        }
                        var u = i[l].name.replace(/"/g, "&quot;").replace("*", "").replace("#", ""),
                            I = "<span>" + u + "</span>";
                        n.addItem(l, '<img title="' + I + '" style="left: 5px; display: inline-block;" src="' + o + '" height="20" width="auto"></img><span title="' + I + '" style="margin-top: 2px;word-wrap: break-word;max-width: 200px;display: inline-block;margin-left: 20px; text-overflow:ellipsis; white-space:nowrap; overflow:hidden;color: #5e321a;">' + i[l].name.replace("*", "").replace("#", "") + '</span><span title="' + e.stats.count_text + '" style="display: inline-block;margin-top: 3px;color: #5e321a;position: relative;float: right;font-size: 12px;margin-left: 25px;">&#124;&nbsp;' + TWIR.replSum(g) + "&nbsp;" + e.tooltips.items_short + "</span>")
                    }
                }
                switch (n.addListener(function(t) {
                    var a = i[t].items,
                        o = Bag.getItemsByItemIds(a);
                    if (0 < o.length) return TWIR.Inventory.data.lastItems = o, TWIR.Inventory.data.title = [i[t].name, e.inventory[r]], Inventory.addItems("twir", 1, !1);
                    new UserMessage(e.informative.error404 + "!", UserMessage.TYPE_HINT).show()
                }), r) {
                    case "crafting":
                        if (0 != TWIR.storage.stats.cache.count.craft_count || 0 != TWIR.storage.stats.cache.count.recipes_count) return n.show(t);
                        break;
                    case "buffs":
                        if (0 != TWIR.storage.stats.cache.count.buff_count) return n.show(t);
                        break;
                    case "useable":
                        if (0 != TWIR.storage.stats.cache.count.useable_count) return n.show(t)
                }
            } catch (e) {
                TWIR.bugHunt(e)
            }
        }, TWIR.menulink = function(t) {
            try {
                var a = $('<div class="twir_menulink" style="display: inline-block; position: absolute; width: auto; height: 33px;top: 93px;right:100px;border-radius: 3px;-webkit-box-shadow: 0 0 20px inset;box-shadow: 0 0 20px inset;border: 3px solid #4d392c;background-image: url(' + TWIR.images.linkbg + ");padding-right: 2px;padding-left: 5px;border: 3px solid transparent;-webkit-border-image: url(" + TWIR.images.linkborder + ') 0 0 stretch;z-index: 15;font-weight: bold;text-align: right;"></div>');
                if ((TWIR.storage.get("ml_sleep") || TWIR.storage.get("ml_market_collector") || TWIR.storage.get("ml_npc")) && $("#buffbars").after(a), TWIR.storage.get("ml_sleep")) {
                    var r = $('<div class="twir_menulink_sleep" title="' + e.menulink.sleep + '" style="background: url(' + TWIR.images.menulink.sleep + ') no-repeat;width: 25px;height: 25px;margin: 4px 5px 5px 0;cursor: pointer;background-position: 0px 0px;display: inline-block;"></div>').appendTo(a);
                    r.mouseenter(function() {
                        $(this).css("background-position", "-25px 0px")
                    }).mouseleave(function() {
                        $(this).css("background-position", "0px 0px")
                    }).click(function(e) {
                        var t = TWIR.checkMap();
                        $.when(t).done(function() {
                            TWIR.makeSleepMenu(e)
                        })
                    })
                }
                if (TWIR.storage.get("ml_market_collector")) {
                    var i = $('<div class="twir_menulink_market" title="' + e.menulink.market + '" style="background: url(' + TWIR.images.menulink.market + ') no-repeat;width: 25px;height: 25px;margin: 4px 5px 5px 0;cursor: pointer;background-position: 0px 0px;display: inline-block;"></div>').appendTo(a);
                    i.mouseenter(function() {
                        $(this).css("background-position", "-25px 0px")
                    }).mouseleave(function() {
                        $(this).css("background-position", "0px 0px")
                    }).click(function(e) {
                        var t = TWIR.checkMarket();
                        $.when(t).done(function() {
                            TWIR.makeMarketMenu(e)
                        })
                    })
                }
                if (TWIR.storage.get("ml_npc")) {
                    var o = $('<div class="twir_menulink_npc" title="' + e.menulink.npc + '" style="background: url(' + TWIR.images.menulink.npc + ') no-repeat;width: 25px;height: 25px;margin: 4px 5px 5px 0;cursor: pointer;background-position: 0px 0px;display: inline-block;"></div>').appendTo(a);
                    o.mouseenter(function() {
                        $(this).css("background-position", "-25px 0px")
                    }).mouseleave(function() {
                        $(this).css("background-position", "0px 0px")
                    }).click(function(e) {
                        var t = TWIR.checkMap();
                        $.when(t).done(function() {
                            TWIR.makeNPCMenu(e)
                        })
                    })
                }
            } catch (e) {}
        }, TWIR.Inventory = {
            init: function() {
                TWIR.Inventory.addCategories(), TWIR.Inventory.addCss(), TWIR.Inventory.setsButton(), TWIR.Inventory.betterSearch()
            },
            data: {
                lastItems: [],
                title: null,
                scroll: null,
                setsButton: null,
                searchVal: null,
                eventVal: "all",
                completeSets: 0,
                invSearchVal: null,
                searchType: "none",
                order: localStorage && localStorage.twir_sort ? JSON.parse(localStorage.getItem("twir_sort")) : ["sort_id", "asc"],
                filter: ["none", !1]
            },
            as_reset: function() {
                return TWIR.Inventory.data.searchType = "none", TWIR.Inventory.data.order = localStorage && localStorage.twir_sort ? JSON.parse(localStorage.getItem("twir_sort")) : ["sort_id", "asc"], TWIR.Inventory.data.filter = ["none", !1], TWIR.Inventory.data.invSearchVal = null, "done"
            },
            ss_reset: function() {
                return TWIR.Inventory.data.searchVal = null, TWIR.Inventory.data.eventVal = "all", "done"
            },
            setInv: function() {
                Inventory.uid = "inventory", Inventory.size = 99999, Inventory.sizeSearch = 99999, Inventory.sizeCustom = 66, Inventory.width = 608, Inventory.availableCategories = ["new", "head", "neck", "body", "pants", "belt", "foot", "right_arm", "left_arm", "animal"], Inventory.defaultCategory = "new", Inventory.latestSize = 66, Inventory.context = null, EventHandler.listen("inventory_ready", function() {
                    TWIR.storage.get("inv_searchwindow_remember_search") || TWIR.Inventory.as_reset(), TWIR.storage.get("inv_setwindow_remember_search") || TWIR.Inventory.ss_reset()
                });
                var t = BuffList.updateCooldownTimer;
                BuffList.updateCooldownTimer = function(e) {
                    try {
                        t.apply(this, arguments)
                    } catch (e) {}
                };
                var a = Inventory.firstLoad;
                Inventory.firstLoad = function() {
                    a.apply(this, arguments), Inventory.guiElements.searchClearButton = "", $("#windows .inventory .actions .upgrade_items").find(".textart_title").html('<img style="margin-right: 1px;margin-bottom: 2px;"src="' + TWIR.images.upgradeicon + '">'), $(Inventory.DOM).find(".search_container").remove(), $(".actions", Inventory.DOM).find(".open_search").remove(), Inventory.guiElements.searchShowButton = new west.gui.Iconbutton(new west.gui.Icon("search"), function() {
                        TWIR.Inventory.showSearch()
                    }).addClass("twir_searchButton"), $(".actions", Inventory.DOM).append(Inventory.guiElements.searchShowButton.getMainDiv()), $(".twir_searchButton").css("cssText", "position: absolute !important;right: 41px; display: inline-block;"), TWIR.repTitle("TWIR - " + e.invent, "TWIR"), $("#windows .inventory .tw2gui_inner_window_title").find(".textart_title").css({
                        "margin-top": "4px",
                        "font-size": "16pt"
                    }), TWIR.Inventory.data.scroll = (new west.gui.Scrollpane).appendContent($("#bag"));
                    $('<div id="twir_content_pane" style="width: 700px!important;height: 355px!important;display: block;overflow: hidden; position: absolute;top: 100px;"></div>').appendTo($("#windows .inventory .tw2gui_window_content_pane"));
                    $("#twir_content_pane").append(TWIR.Inventory.data.scroll.getMainDiv())
                }, Inventory.addItemsByCategory = function(e) {
                    Inventory.window.showLoader();
                    for (var t = Inventory.getCategoryTypes(e), a = 0, r = t.length, i = []; a < r; a++) i = i.concat(Bag.getItemsIdsByType(t[a]));
                    var o = Bag.getItemsByItemIds(i);
                    TWIR.Inventory.order(o), a = 0, r = o.length, setTimeout(function() {
                        for (; a < r; a++) Inventory.addItemDivToInv(o[a]);
                        Inventory.window.hideLoader()
                    }, r > 132 ? 100 : 0)
                }, Inventory.showCustom = function() {
                    Inventory.window.showLoader();
                    var e = this.customResult,
                        t = 0,
                        a = e.length;
                    e.length && (TWIR.Inventory.order(e), $(Inventory.DOM).addClass("instant_wear_enabled")), setTimeout(function() {
                        for (; t < a; ++t) Bag.getItemCount(e[t].getId()) && Inventory.addItemDivToInv(e[t]);
                        Inventory.window.hideLoader()
                    }, a > 132 ? 100 : 0)
                }, Inventory.showSearch = function() {
                    try {
                        Inventory.window.showLoader(), $(Inventory.DOM).addClass("search_enabled"), $("#inventory_search").trigger("focus");
                        var t = Inventory.searchResult;
                        t.length && TWIR.Inventory.order(t);
                        var a = 0,
                            r = t.length;
                        setTimeout(function() {
                            for (var t = 0; t < r; ++t) Bag.getItemCount(Inventory.searchResult[t].obj.item_id) && Inventory.addItemDivToInv(Inventory.searchResult[t]), a++;
                            Inventory.window.hideLoader(), 0 == a && $('<div style="margin:auto;"><span style="margin:auto; font-weight:bold;text-align: center!important;color: #4d392c!important;">' + e.informative.error404 + "</span></div>").appendTo($("#bag", Inventory.DOM))
                        }, r > 132 ? 100 : 0)
                    } catch (e) {}
                }, Inventory.addItems = function(t, a, r) {
                    switch ($("#bag", Inventory.DOM).empty(), t = t || Inventory.defaultCategory, Inventory.setCategoryActive(t), $(Inventory.DOM).removeClass("search_enabled instant_wear_enabled"), "set" !== t && Inventory.clearSearch(), "custom" !== t && "sets" !== t && Inventory.clearCustom(), "twir" !== t && ($("#bag", Inventory.DOM).empty(), TWIR.Inventory.data.lastItems = []), t) {
                        case "new":
                            Inventory.showLastItems(), null !== TWIR.Inventory.data.scroll && TWIR.Inventory.data.scroll.verticalBar.move(0, !1, !0), TWIR.repTitle("TWIR - " + e.invent, "TWIR");
                            break;
                        case "twir":
                            TWIR.Inventory.showItems(), TWIR.repTitle(TWIR.Inventory.data.title[0], TWIR.Inventory.data.title[1]);
                            break;
                        case "bonus":
                        case "work":
                        case "quest":
                            TWIR.Inventory.showItems(Bag.getItemsByItemIds(TWIR.storage.inventory[t])), TWIR.repTitle(TWIR.Inventory.data.title[0], TWIR.Inventory.data.title[1]);
                            break;
                        case "sets":
                            Inventory.showCustom(), TWIR.repTitle(TWIR.Inventory.data.title[0], TWIR.Inventory.data.title[1]);
                            break;
                        case "set":
                            Inventory.showSearch(), TWIR.repTitle("TWIR - " + e.invent, "TWIR");
                            break;
                        case "upgradeable":
                            Inventory.showUpgradeable(), null !== TWIR.Inventory.data.scroll && TWIR.Inventory.data.scroll.verticalBar.move(0, !1, !0), TWIR.repTitle("TWIR - " + e.invent, "TWIR");
                            break;
                        case "custom":
                            Inventory.showCustom(), TWIR.repTitle("TWIR - " + e.invent, "TWIR");
                            break;
                        case "belt":
                        case "body":
                        case "foot":
                        case "head":
                        case "neck":
                        case "pants":
                        case "animal":
                        case "right_arm":
                        case "left_arm":
                        case "yield":
                            Inventory.addItemsByCategory(t), TWIR.repTitle(Inventory.categoryDesc[t], Inventory.categoryDesc[t])
                    }
                    r || null === TWIR.Inventory.data.scroll || TWIR.Inventory.data.scroll.verticalBar.move(0, !1, !0), Inventory.category = t, Inventory.page = 1
                }, Inventory.update = function() {
                    wman.getById(Inventory.uid) && (TWIR.fillFilters(), Inventory.addItems(Inventory.category, Inventory.page, !0), Inventory.updateFilters())
                }, Inventory.addItemDivToInv = function(e) {
                    e.appendTo($("#bag", Inventory.DOM)).getImgEl().off("click").click(function(t) {
                        Inventory.clickHandler(e.getId(), t)
                    }).data("itemId", e.getId()).setDraggable(Inventory.announceDragStart, Inventory.announceDragStop)
                };
                var r = Inventory.updateFilters;
                return Inventory.updateFilters = function() {
                    r.apply(this, arguments), TWIR.storage.setList.ownedSetItems.length < 1 ? $(TWIR.Inventory.data.setsButton).addClass("inactive") : $(TWIR.Inventory.data.setsButton).removeClass("inactive");
                    for (var e = 0; e < TWIR.storage.inventory.addedCategories.length; e++) TWIR.storage.stats.cache.count[TWIR.storage.inventory.addedCategories[e] + "_count"] < 1 ? ($(".filter_" + TWIR.storage.inventory.addedCategories[e]).addClass("no-items"), $(".filter_" + TWIR.storage.inventory.addedCategories[e]).unbind("mouseenter"), $(".filter_" + TWIR.storage.inventory.addedCategories[e]).unbind("mouseleave")) : ($(".filter_" + TWIR.storage.inventory.addedCategories[e]).removeClass("no-items"), $(".filter_" + TWIR.storage.inventory.addedCategories[e]).mouseenter(function() {
                        $(this).css({
                            filter: "opacity(100%)",
                            "-webkit-filter": "opacity(100%)"
                        })
                    }), $(".filter_" + TWIR.storage.inventory.addedCategories[e]).mouseleave(function() {
                        $(this).css({
                            filter: "opacity(75%)",
                            "-webkit-filter": "opacity(75%)"
                        })
                    }));
                    for (var t = 0; t < Inventory.availableCategories.length; t++) Bag.getItemsByType(Inventory.availableCategories[t]).length < 1 && "new" !== Inventory.availableCategories[t] ? ($(".inventory .filters .filter_" + Inventory.availableCategories[t]).unbind("mouseenter"), $(".inventory .filters .filter_" + Inventory.availableCategories[t]).unbind("mouseleave"), $(".inventory .filters .filter_" + Inventory.availableCategories[t] + ".active").unbind("mouseenter"), $(".inventory .filters .filter_" + Inventory.availableCategories[t] + ".active").unbind("mouseleave")) : ($(".inventory .filters .filter_" + Inventory.availableCategories[t]).mouseenter(function() {
                        $(this).css({
                            filter: "opacity(100%)",
                            "-webkit-filter": "opacity(100%)"
                        })
                    }), $(".inventory .filters .filter_" + Inventory.availableCategories[t]).mouseleave(function() {
                        $(this).css({
                            filter: "opacity(75%)",
                            "-webkit-filter": "opacity(75%)"
                        })
                    }), $(".inventory .filters .filter_" + Inventory.availableCategories[t] + ".active").mouseenter(function() {
                        $(this).css({
                            filter: "opacity(100%)",
                            "-webkit-filter": "opacity(100%)"
                        })
                    }), $(".inventory .filters .filter_" + Inventory.availableCategories[t] + ".active").mouseleave(function() {
                        $(this).css({
                            filter: "opacity(75%)",
                            "-webkit-filter": "opacity(75%)"
                        })
                    }))
                }, TWIR.Inventory.improveSearch(), this
            },
            showItems: function(e) {
                Inventory.window.showLoader(), e || (e = TWIR.Inventory.data.lastItems), e.length && TWIR.Inventory.order(e);
                var t = 0,
                    a = e.length;
                setTimeout(function() {
                    for (; t < a; ++t) Bag.getItemCount(e[t].obj.item_id) && Inventory.addItemDivToInv(e[t]);
                    Inventory.window.hideLoader()
                }, a > 132 ? 100 : 0)
            },
            addCss: function() {
                if (0 === $("#twir_main_css").length) {
                    var e = "\n";
                    e += "\t.instant_wear_container       { z-index: 9999;bottom: 0px!important;left: 485px!important }\n", e += "\t.search_container    { z-index: 999!important;position: absolute!important;width: 210px;height: 49px;top: 14px!important;left: unset!important;right: 29px!important}\n", e += "\t.upgrade_items .textart_title      { color: #ffe7b100!important;margin-left: 0px!important;margin-right: 0px!important; }\n", e += "\t.inventory .actions .upgrade_items      { float: left!important;min-width: 16px!important;width: 16px!important;z-index: 999!important;position: relative!important;display: inline-block!important; }\n", e += "\t#bag .item.item_inventory    { margin-bottom: 0px!important;width: 60px!important;height: 58px!important;}\n", e += "\t#windows .inventory    { width: 740px!important;}\n", e += "\t#windows .inventory .filters    { display: inline-block!important;height: 40px!important;width: auto!important;position: absolute!important;left: 5px!important;top: 40px!important;margin-bottom: 16px!important;border-radius: 3px!important;-webkit-box-shadow: 0 0 20px inset;box-shadow: 0 0 20px inset;background-image: url(" + TWIR.images.menubg + ");padding-right: 5px;padding-left: 5px;border: 3px solid transparent;-webkit-border-image: url(" + TWIR.images.menuborder + ") 0 0 stretch;}\n", e += "\t#bag   { width: 671px!important;height: 100%!important;text-align: center!important;color: #4d392c!important;margin-left: 4px!important;overflow: hidden!important;padding-left: 3px;border-radius: 3px;padding-top: 3px;padding-bottom: 3px;-webkit-box-shadow: 0 0 20px inset;box-shadow: 0 0 20px inset;background-image: url(" + TWIR.images.bagbg + ");background-size: 100% auto;}\n", e += "\t#CC_pin_items    { float:left!important;position:relative!important;display:inline-block!important;}\n", e += "\t@-webkit-keyframes fadeIn   { 0%{opacity:0}100%{opacity:1}}\n", e += "\t@keyframes fadeIn   { 0%{opacity:0}100%{opacity:1}}\n", e += "\t.instant_wear_container    { z-index:9999;bottom:0px!important;left:485px!important;}\n", e += "\t.search_container    { z-index:999!important;position:absolute!important;width:210px;height:49px;top:14px!important;left:unset!important;right:29px!important;}\n", e += "\t.upgrade_items .textart_title    { color:#ffe7b100!important;margin-left:0px!important;margin-right:0px!important;}\n", e += "\t.inventory .actions .upgrade_items    { float:left!important;min-width:16px!important;width:16px!important;z-index:999!important;position:relative!important;display:inline-block!important;}\n", e += "\t#bag .item.item_inventory    { margin-bottom:0px!important;width:60px!important;height:58px!important;}\n", e += "\t#twir_menu:hover    { background: url(" + TWIR.images.menuiconhover + ")!important;}\n", e += "\t.tw2gui_window_buttons    { width: auto!important;}\n", e += "\t#windows .inventory    { width: 740px!important;}\n", e += "\t#windows .inventory .filters    { display:inline-block!important;height:40px!important;width:auto!important;position:absolute!important;left:5px!important;top:40px!important;margin-bottom:16px!important;border-radius:3px!important;-webkit-box-shadow:0 0 20px inset;box-shadow:0 0 20px inset;background-image:url(" + TWIR.images.menubg + ");padding-right:5px;padding-left:5px;border:3px solid transparent;-webkit-border-image:url(" + TWIR.images.menuborder + ") 0 0 stretch;}\n", e += "\t#bag    { width:671px!important;height:100%!important;text-align:center!important;color:#4d392c!important;margin-left:4px!important;overflow:hidden!important;padding-left:3px;border-radius:3px;padding-top:3px;padding-bottom:3px;-webkit-box-shadow:0 0 20px inset;box-shadow:0 0 20px inset;background-image:url(" + TWIR.images.bagbg + ");background-size:100% auto;}\n", e += "\t div.tw2gui_window.inventory div.tw2gui_inner_window_bg    { background:none!important;background-image:url(" + Game.cdnURL + "/images/window/premium/premium_buy_bg_large.jpg)!important;background-position:100% 100%!important;background-repeat:no-repeat!important;background-size:100% auto!important;}\n", e += "\t div.tw2gui_selectbox ul.tw2gui_selectbox_content    { min-width: 100px!important;}\n", e += "\t.inventory .bag_navigation    { display: none!important;}\n", e += "\t.inventory .bag_control    { display:none!important;}\n", e += "\t.inventory .bag_next    { display: none!important;}\n", e += "\t.inventory .bag_previous    { display: none!important;}\n", e += "\t.inventory .filters .filter_inventory    { display:inline-block;height:35px!important;width:35px!important;margin-left:2px;margin-right:2px;margin-top:1px;background:none;vertical-align:middle;cursor:pointer;border-radius:25%;-webkit-box-shadow:inset 0 0 5px 2px #4d392c,inset 0 0 2px 1px #222;box-shadow:inset 0 0 5px 2px #4d392c,inset 0 0 2px 1px #222;}\n", e += "\t.inventory .filters .filter_yield    { display: none!important;}\n", e += "\t.inventory .filters .filter_yield:active    { display: none!important;}\n", e += "\t.inventory .filters .filter_upgradeable    { display: none!important;}\n", e += "\t.inventory .filters .filter_upgradeable:active    { display: none!important;}\n", e += "\t.inventory .actions    { text-align:center;position:absolute!important;top:14px!important;width:700px!important;}\n", e += "\t.inventory .actions .tw2gui_iconbutton    { position:relative!important;float:left;display:inline-block!important;}\n", e += "\t.inventory .actions .tw2gui_iconbutton    { position:relative!important;float:left;display:inline-block!important;}\n", e += "\t.twir_flip {transform: rotateX(180deg);}\n", e += "\t.inventory .no-items    { -webkit-filter:opacity(30%) grayscale(50)!important;filter:opacity(30%) grayscale(50)!important;cursor:default!important;}\n", e += "\t.filter_inventory    { display:inline-block;height:35px!important;width:35px!important;margin-left:2px;margin-right:2px;margin-top:1px;background:none;vertical-align:middle;cursor:pointer;border-radius:25%;-webkit-box-shadow:inset 0 0 5px 2px #4d392c,inset 0 0 2px 1px #222;box-shadow:inset 0 0 5px 2px #4d392c,inset 0 0 2px 1px #222;}\n", e += "\t.twir_over_box .tw2gui_selectbox_content   { max-height: unset!important;}\n", $('<style id="twir_main_css" type="text/css">' + e + "</style>").appendTo("head")
                }
                for (var t = 0; t < Inventory.availableCategories.length; t++) $(".inventory .filters .filter_" + Inventory.availableCategories[t]).css({
                    background: "url(" + TWIR.images.defaultFilters[Inventory.availableCategories[t]] + ")",
                    "background-repeat": "no-repeat",
                    "background-position": "center",
                    "background-size": "30px 30px",
                    "-webkit-filter": "opacity(75%)",
                    filter: "opacity(75%)"
                }).attr("title", Inventory.categoryDesc[Inventory.availableCategories[t]]), $(".inventory .filters .filter_" + Inventory.availableCategories[t] + ".active").css({
                    background: "url(" + TWIR.images.defaultFilters[Inventory.availableCategories[t]] + ")",
                    "background-repeat": "no-repeat",
                    "background-position": "center",
                    "background-size": "30px 30px",
                    "-webkit-filter": "opacity(75%)",
                    filter: "opacity(75%)"
                }).attr("title", Inventory.categoryDesc[Inventory.availableCategories[t]]);
                for (var a = 0; a < TWIR.storage.inventory.addedCategories.length; a++) $(".filter_" + TWIR.storage.inventory.addedCategories[a]).css({
                    background: "url(" + TWIR.images.defaultFilters[TWIR.storage.inventory.addedCategories[a]] + ")",
                    "background-repeat": "no-repeat",
                    "background-position": "center",
                    "background-size": "30px 30px"
                });
                return $(".inventory .open_search").css("cssText", "position: absolute !important;right: 41px; display: inline-block;"), this
            },
            betterSearch: function() {
                Inventory.search = function(e) {
                    e && "string" == typeof e && $("#inventory_search").val(e);
                    var t = $("#inventory_search").val();
                    if (t.length > 1) {
                        TWIR.Inventory.data.invSearchVal = t;
                        var a = Bag.search(t);
                        Inventory.showSearchResult(a || [])
                    }
                }
            },
            getSortBox: function() {
                var t = [{
                    sort: "sort_id",
                    name: e.organizing.sort_id
                }, {
                    sort: "sort_ab",
                    name: e.organizing.sort_ab
                }, {
                    sort: "sort_buyprice",
                    name: e.organizing.sort_buyprice
                }, {
                    sort: "sort_sellprice",
                    name: e.organizing.sort_sellprice
                }, {
                    sort: "sort_reqlvl",
                    name: e.organizing.sort_reqlvl
                }, {
                    sort: "sort_upglvl",
                    name: e.organizing.sort_upglvl
                }, {
                    sort: "sort_mindamage",
                    name: e.organizing.sort_mindamage
                }, {
                    sort: "sort_maxdamage",
                    name: e.organizing.sort_maxdamage
                }, {
                    sort: "sort_quantity",
                    name: e.organizing.sort_quantity
                }, {
                    sort: "sort_setname",
                    name: e.organizing.sort_setname
                }, {
                    sort: "sort_marketprice",
                    name: e.organizing.sort_marketprice
                }, {
                    sort: "sort_ups",
                    name: e.organizing.sort_ups
                }];
                return TWIR.sortName(t, name), t
            },
            getFiltBox: function() {
                var t = [{
                    filter: "auctionable",
                    name: e.organizing.auctionable
                }, {
                    filter: "sellable",
                    name: e.organizing.sellable
                }, {
                    filter: "upgradeable",
                    name: e.organizing.upgradeable
                }, {
                    filter: "tradeable",
                    name: e.organizing.tradeable
                }, {
                    filter: "dropable",
                    name: e.organizing.droppable
                }, {
                    filter: "from_set",
                    name: e.inventory.from_set
                }, {
                    filter: "gender",
                    name: e.organizing.gender
                }, {
                    filter: "colls",
                    name: e.organizing.collectibles
                }, {
                    filter: "upgraded",
                    name: e.inventory.upgraded
                }, {
                    filter: "useless",
                    name: e.organizing.duplicates
                }];
                return TWIR.sortName(t, name), t
            },
            getSearchKeywords: function() {
                var t = [];
                return t.push("allitems", "setitems", "yield", "recipe"), "en" !== TWIR.lang ? t.push(e.inventory.useable.toLowerCase(), e.inventory.buffs.toLowerCase(), e.inventory.crafting.toLowerCase()) : t.push("useable", "buffs", "crafting"), t.push("valentine", "easter", "independence", "oktoberfest", "dotd", "xmas"), t
            },
            getSearchTypes() {
                for (var e = [], t = 0; t < Inventory.availableCategories.length; t++) "new" !== Inventory.availableCategories[t] && e.push({
                    type: Inventory.availableCategories[t],
                    name: Inventory.categoryDesc[Inventory.availableCategories[t]]
                });
                return e.push({
                    type: "yield",
                    name: Inventory.categoryDesc.yield
                }), TWIR.sortName(e, name), e
            },
            showSearch: function() {
                try {
                    if ($("#twir_as.tw2gui_dialog").length) return;
                    var t = $('<div style="text-align: center;"/>'),
                        a = $("<tr><td/><td>" + e.inventory.subcat.cutIt(16) + "</td><td>" + e.organizing.bonus.cutIt(16) + "</td></tr>"),
                        r = $("<tr><td>" + e.inventory.property.cutIt(16) + "</td><td/><td>" + e.inventory.item_type.cutIt(16) + "</td></tr>"),
                        i = Inventory.guiElements.searchTextfield = new west.gui.Textfield("inventory_search").maxlength(24).setPlaceholder(Inventory.categoryDesc.set + ".. [Enter]").setWidth(150);
                    i.getMainDiv().on("keypress", function(e) {
                        13 == e.keyCode && Inventory.search()
                    }), null !== TWIR.Inventory.data.invSearchVal && i.setValue(TWIR.Inventory.data.invSearchVal);
                    var o = (new west.gui.Combobox).setWidth(45);
                    kbItems = TWIR.Inventory.getSearchKeywords(), o.addItem(1, "&#8226;&#8226;&#8226;");
                    for (var n = 0; n < kbItems.length; n++) o.addItem(kbItems[n], kbItems[n]);
                    o.select(1), o.addListener(function(t) {
                        if (1 !== t) {
                            var a = function(t) {
                                var a = Object.values(TWIR.storage.setList.eventIcons).filter(e => e[0] === t);
                                if (a.length) {
                                    var r = e.keyWords[t],
                                        i = Array.isArray(r) ? r[[~~(r.length * Math.random())]] : r;
                                    return i + " " + a[a.length - 1][1]
                                }
                                return t
                            }(t);
                            $("#inventory_search").val() !== a && ($("#inventory_search").val(a), Inventory.search()), o.select(1)
                        }
                    });
                    var s = (new west.gui.Combobox).setWidth(45);
                    bItems = TWIR.Inventory.getBonusKeywords(), s.addItem(1, "&#8226;&#8226;&#8226;");
                    for (var p = 0; p < bItems.length; p++) s.addItem(bItems[p], bItems[p]);
                    s.select(1), s.addListener(function(e) {
                        if (1 !== e) {
                            switch (e) {
                                case 1:
                                    return;
                                case "experience":
                                    e = "xp";
                                    break;
                                case "job":
                                    e = "cs_CZ" === Game.locale || "sk_SK" === Game.locale ? "pb" : "lp";
                                    break;
                                case "damage":
                                    e = "dmg";
                                    break;
                                case "offense":
                                    e = "off";
                                    break;
                                case "defense":
                                    e = "def";
                                    break;
                                default:
                                    e = e
                            }
                            $("#inventory_search").val() !== e && ($("#inventory_search").val(e), Inventory.search()), s.select(1)
                        }
                    });
                    var l = $("<tr/>");
                    $("<td/>").append(new west.gui.Icon("search", "").getMainDiv(), i.getMainDiv(), new west.gui.Icon("abort", "").getMainDiv().css({
                        "margin-left": "2px",
                        cursor: "pointer"
                    }).on("click", function() {
                        $("#inventory_search").val(""), TWIR.Inventory.data.invSearchVal = null
                    })).appendTo(l), $("<td/>").append(o.getMainDiv().css({
                        "margin-left": "20px"
                    })).appendTo(l), $("<td/>").append(s.getMainDiv().css({
                        "margin-left": "20px"
                    })).appendTo(l), $('<table style="margin-bottom: 5px;margin-left: auto;margin-right: auto;"/>').append(a, l).appendTo(t);
                    var c = $("<tr/>"),
                        A = new west.gui.Checkbox(e.organizing.invert, ""),
                        g = new west.gui.Combobox;
                    g.addItem("none", e.informative.any);
                    for (var m = TWIR.Inventory.getFiltBox(), d = 0; d < m.length; d++) g.addItem(m[d].filter, m[d].name);
                    g.select(TWIR.Inventory.data.filter[0]), g.addListener(function(e) {
                        var t = $("#inventory_search").val();
                        TWIR.Inventory.data.filter[0] = e, "" === t && $("#inventory_search").val("allitems"), Inventory.search()
                    }), A.setCallback(function() {
                        var e = $("#inventory_search").val();
                        TWIR.Inventory.data.filter[1] = A.isSelected(), "" === e && $("#inventory_search").val("allitems"), Inventory.search()
                    }), A.setSelected(TWIR.Inventory.data.filter[1], !0);
                    var u = (new west.gui.Combobox).setWidth(90);
                    u.addItem("none", e.informative.any);
                    for (var I = TWIR.Inventory.getSearchTypes(), h = 0; h < I.length; h++) u.addItem(I[h].type, I[h].name);
                    u.select(TWIR.Inventory.data.searchType), u.addListener(function(e) {
                        var t = $("#inventory_search").val();
                        TWIR.Inventory.data.searchType = e, "" === t && $("#inventory_search").val("allitems"), Inventory.search()
                    }), $("<td/>").append(g.getMainDiv().css({
                        "margin-right": "10px",
                        "margin-left": "20px"
                    })).appendTo(c), $("<td/>").append(A.getMainDiv().css({
                        "margin-right": "25px"
                    })).appendTo(c), $("<td/>").append(u.getMainDiv().css({
                        "margin-right": "10px"
                    })).appendTo(c), $('<table style="margin-bottom: 10px;margin-left: auto;margin-right: auto;"/>').append(r, c).appendTo(t), t.append("<hr>");
                    var k = $('<div style="margin-top: 15px; display: none;"/>'),
                        R = $("<div/>"),
                        b = $('<span style="cursor: pointer;">' + e.organizing.sort_by + ":&nbsp;</span>"),
                        y = $('<img src="' + TWIR.images.arrow + '" width="13" style="margin-left: 2px;"/>');
                    b.append(y), R.append(b.on("click", function() {
                        k.toggle(), $(y).toggleClass("twir_flip")
                    })), t.append(R);
                    var w = new west.gui.Checkbox(e.organizing.save_permanent, "");
                    void 0 !== localStorage && localStorage.hasOwnProperty("twir_sort") ? w.setSelected(!0, !0) : void 0 === localStorage && w.setEnabled(!1);
                    for (var x = new west.gui.Combobox, f = TWIR.Inventory.getSortBox(), T = 0; T < f.length; T++) x.addItem(f[T].sort, f[T].name);
                    x.select(TWIR.Inventory.data.order[0]);
                    var W = (new west.gui.Combobox).setWidth(90);
                    W.addItem("asc", e.organizing.sort_up), W.addItem("desc", e.organizing.sort_down), W.select(TWIR.Inventory.data.order[1]), w.setCallback(function() {
                        w.isSelected() && void 0 !== localStorage ? localStorage.twir_sort = JSON.stringify(TWIR.Inventory.data.order) : w.isSelected() || void 0 === localStorage ? (new UserMessage(e.informative.storage_error + "!", UserMessage.TYPE_ERROR).show(), w.setEnabled(!1)) : localStorage.removeItem("twir_sort")
                    }), x.addListener(function(t) {
                        TWIR.Inventory.data.order[0] = t, Inventory.update(), w.isSelected() && void 0 !== localStorage ? localStorage.twir_sort = JSON.stringify(TWIR.Inventory.data.order) : w.isSelected() || void 0 === localStorage ? (new UserMessage(e.informative.storage_error + "!", UserMessage.TYPE_ERROR).show(), w.setEnabled(!1)) : localStorage.removeItem("twir_sort")
                    }), W.addListener(function(t) {
                        TWIR.Inventory.data.order[1] = t, Inventory.update(), w.isSelected() && void 0 !== localStorage ? localStorage.twir_sort = JSON.stringify(TWIR.Inventory.data.order) : w.isSelected() || void 0 === localStorage ? (new UserMessage(e.informative.storage_error + "!", UserMessage.TYPE_ERROR).show(), w.setEnabled(!1)) : localStorage.removeItem("twir_sort")
                    }), k.append(x.getMainDiv().css({
                        "margin-right": "10px"
                    })).append(W.getMainDiv().css({
                        "margin-right": "10px"
                    })).append(w.getMainDiv().css({
                        "margin-right": "10px"
                    })), t.append(k), new west.gui.Dialog(e.inventory.search, t).setDraggable(!0).setBlockGame(!1).setPosition("40%", Map.height / 4).setId("twir_as").addButton("cancel", function() {
                        TWIR.storage.get("inv_searchwindow_remember_search") || TWIR.Inventory.as_reset()
                    }).show(), $("#twir_as .tw2gui_inner_window_title").find(".textart_title").css({
                        "margin-top": "4px",
                        "font-size": "16pt"
                    }), i.focus()
                } catch (e) {
                    TWIR.bugHunt(e)
                }
            },
            order: function(e) {
                try {
                    e.sort(function(e, t) {
                        var a = TWIR.Inventory.data.order[0],
                            r = "asc" === TWIR.Inventory.data.order[1],
                            i = "desc" === TWIR.Inventory.data.order[1];
                        switch (a) {
                            case "sort_id":
                                if (!0 === r) return e.obj.item_id - t.obj.item_id;
                                if (!0 === i) return t.obj.item_id - e.obj.item_id;
                                break;
                            case "sort_ab":
                                if (!0 === r) return e.obj.name.localeCompare(t.obj.name);
                                if (!0 === i) return t.obj.name.localeCompare(e.obj.name);
                                break;
                            case "sort_buyprice":
                                if (!0 === r) return e.obj.price - t.obj.price;
                                if (!0 === i) return t.obj.price - e.obj.price;
                                break;
                            case "sort_sellprice":
                                if (!0 === r) return e.obj.sell_price - t.obj.sell_price;
                                if (!0 === i) return t.obj.sell_price - e.obj.sell_price;
                                break;
                            case "sort_reqlvl":
                                if (!0 === r) return e.obj.level - t.obj.level;
                                if (!0 === i) return t.obj.level - e.obj.level;
                                break;
                            case "sort_upglvl":
                                if (!0 === r) return e.obj.item_level - t.obj.item_level;
                                if (!0 === i) return t.obj.item_level - e.obj.item_level;
                                break;
                            case "sort_mindamage":
                                if (e.obj.damage === t.obj.damage) return 0;
                                if (null === e.obj.damage) return 1;
                                if (null === t.obj.damage) return -1;
                                if (r) return e.obj.getDamage(Character).min - t.obj.getDamage(Character).min;
                                if (i) return t.obj.getDamage(Character).min - e.obj.getDamage(Character).min;
                                break;
                            case "sort_maxdamage":
                                if (e.obj.damage === t.obj.damage) return 0;
                                if (null === e.obj.damage) return 1;
                                if (null === t.obj.damage) return -1;
                                if (r) return e.obj.getDamage(Character).max - t.obj.getDamage(Character).max;
                                if (i) return t.obj.getDamage(Character).max - e.obj.getDamage(Character).max;
                                break;
                            case "sort_quantity":
                                if (!0 === r) return e.count - t.count;
                                if (!0 === i) return t.count - e.count;
                                break;
                            case "sort_setname":
                                if (e.obj.set === t.obj.set) return 0;
                                if (null === e.obj.set) return 1;
                                if (null === t.obj.set) return -1;
                                var o = west.storage.ItemSetManager.get(e.obj.set).name,
                                    n = west.storage.ItemSetManager.get(t.obj.set).name;
                                if (r) return o.localeCompare(n);
                                if (i) return n.localeCompare(o);
                                break;
                            case "sort_marketprice":
                                var s = TWIR.storage.popups.marketBest.hasOwnProperty(e.obj.short) ? TWIR.storage.popups.marketBest[e.obj.short].avg : 0,
                                    p = TWIR.storage.popups.marketBest.hasOwnProperty(t.obj.short) ? TWIR.storage.popups.marketBest[t.obj.short].avg : 0;
                                if (0 < s && 0 < p && s === p) return 0;
                                if (0 === s) return 1;
                                if (0 === p) return -1;
                                if (r) return s - p;
                                if (i) return p - s;
                                break;
                            case "sort_ups":
                                var s = TWIR.storage.popups.shop_prices.hasOwnProperty(e.obj.short) ? TWIR.storage.popups.shop_prices[e.obj.short].price_nuggets : TWIR.storage.popups.shop_limited_prices.hasOwnProperty(e.obj.short) ? TWIR.storage.popups.shop_limited_prices[e.obj.short].price_nuggets : 0,
                                    p = TWIR.storage.popups.shop_prices.hasOwnProperty(t.obj.short) ? TWIR.storage.popups.shop_prices[t.obj.short].price_nuggets : TWIR.storage.popups.shop_limited_prices.hasOwnProperty(t.obj.short) ? TWIR.storage.popups.shop_limited_prices[t.obj.short].price_nuggets : 0,
                                    l = TWIR.storage.popups.shop_prices.hasOwnProperty(e.obj.short) ? TWIR.storage.popups.shop_prices[e.obj.short].price_veteran : TWIR.storage.popups.shop_limited_prices.hasOwnProperty(e.obj.short) ? TWIR.storage.popups.shop_limited_prices[e.obj.short].price_veteran : 0,
                                    c = TWIR.storage.popups.shop_prices.hasOwnProperty(t.obj.short) ? TWIR.storage.popups.shop_prices[t.obj.short].price_veteran : TWIR.storage.popups.shop_limited_prices.hasOwnProperty(t.obj.short) ? TWIR.storage.popups.shop_limited_prices[t.obj.short].price_veteran : 0,
                                    A = TWIR.storage.popups.shop_prices.hasOwnProperty(e.obj.short) ? TWIR.storage.popups.shop_prices[e.obj.short].price_dollar : TWIR.storage.popups.shop_limited_prices.hasOwnProperty(e.obj.short) ? TWIR.storage.popups.shop_limited_prices[e.obj.short].price_dollar : 0,
                                    g = TWIR.storage.popups.shop_prices.hasOwnProperty(t.obj.short) ? TWIR.storage.popups.shop_prices[t.obj.short].price_dollar : TWIR.storage.popups.shop_limited_prices.hasOwnProperty(t.obj.short) ? TWIR.storage.popups.shop_limited_prices[t.obj.short].price_dollar : 0;
                                if (!(s || l || A)) return 1;
                                if (!(p || c || g)) return -1;
                                if (r) return s - p || c - l || g - A;
                                if (i) return p - s || l - c || A - g;
                                break;
                            default:
                                if (!0 === r) return e.obj.item_id - t.obj.item_id;
                                if (!0 === i) return t.obj.item_id - e.obj.item_id
                        }
                    })
                } catch (e) {
                    TWIR.bugHunt(e)
                }
            },
            filter: function(e) {
                var t = TWIR.Inventory.data.filter[0];
                if ("none" === t) return e;
                for (var a = [], r = TWIR.Inventory.data.filter[1], i = 0; i < e.length; i++) {
                    var o = e[i];
                    switch ("filt_" + t) {
                        case "filt_auctionable":
                            1 == o.obj.auctionable && 0 == r ? a.push(o) : 0 == o.obj.auctionable && 1 == r && a.push(o);
                            break;
                        case "filt_sellable":
                            1 == o.obj.sellable && 0 == r ? a.push(o) : 0 == o.obj.sellable && 1 == r && a.push(o);
                            break;
                        case "filt_upgradeable":
                            1 == o.obj.upgradeable && 0 == r ? a.push(o) : 0 == o.obj.upgradeable && 1 == r && a.push(o);
                            break;
                        case "filt_tradeable":
                            1 == o.obj.tradeable && o.obj.traderlevel <= 20 && 0 == r ? a.push(o) : (0 == o.obj.tradeable || o.obj.traderlevel > 20) && 1 == r && a.push(o);
                            break;
                        case "filt_dropable":
                            1 == o.obj.dropable && 0 == r ? a.push(o) : 0 == o.obj.dropable && 1 == r && a.push(o);
                            break;
                        case "filt_from_set":
                            null !== o.obj.set && 0 == r ? a.push(o) : null == o.obj.set && 1 == r && a.push(o);
                            break;
                        case "filt_gender":
                            null === o.obj.characterSex && null === o.obj.characterClass || 0 != r ? null == o.obj.characterSex && null == o.obj.characterClass && 1 == r && a.push(o) : a.push(o);
                            break;
                        case "filt_colls":
                            TWIR.storage.inventory.collectibles.indexOf(o.obj.item_base_id) > -1 && 0 == r ? a.push(o) : TWIR.storage.inventory.collectibles.indexOf(o.obj.item_base_id) < 0 && 1 == r && a.push(o);
                            break;
                        case "filt_upgraded":
                            0 != o.obj.item_level && 0 == r ? a.push(o) : 0 == o.obj.item_level && 1 == r && a.push(o);
                            break;
                        case "filt_useless":
                            o.count > 1 && 0 == r ? a.push(o) : 1 == o.count && 1 == r && a.push(o);
                            break;
                        default:
                            1 == o.obj.active && a.push(o)
                    }
                }
                return a
            },
            setsButton: function() {
                try {
                    null == TWIR.Inventory.data.setsButton && (TWIR.Inventory.data.setsButton = new west.gui.Iconbutton(new west.gui.Icon("shirt")).addClass("twir_setsButton").setTitle(e.inventory.sets).getMainDiv()), $(".actions", Inventory.DOM).append(TWIR.Inventory.data.setsButton), $(".twir_setsButton").css("cssText", "position: absolute !important;right: 5px; display: inline-block;"), $(TWIR.Inventory.data.setsButton).on("click", function(e) {
                        for (var t = Bag.getItemsByItemIds(TWIR.storage.setList.ownedSetItems), a = [], r = 0; r < t.length; r++) {
                            var i = west.storage.ItemSetManager.get(t[r].obj.set);
                            a.push({
                                name: i.name,
                                set: t[r].obj.set,
                                max: i.items.length,
                                type: TWIR.Inventory.getSetsType(i.items),
                                items: i.items
                            })
                        }
                        var o = a.reduce((e, t) => (e.some(e => e.set === t.set && e.type === t.type) || e.push(t), e), []);
                        TWIR.Inventory.makeSetsSelect(o)
                    })
                } catch (e) {
                    TWIR.bugHunt(e)
                }
            },
            getSetsType: function(e) {
                try {
                    var t = Bag.getItemsByItemIds(TWIR.makeEmUp(e)),
                        a = e.length;
                    return t.filter(function(e) {
                        return "right_arm" === e.obj.type || "left_arm" === e.obj.type
                    }).length > 0 && a <= 4 ? "weapons" : t.filter(function(e) {
                        return ("yield" === e.obj.type || "animal" === e.obj.type) && "fireworker_set" !== e.obj.set
                    }).length > 0 && a <= 2 ? "ride" : 0 === t.filter(function(e) {
                        return "right_arm" === e.obj.type || "left_arm" === e.obj.type || "yield" === e.obj.type || "animal" === e.obj.type
                    }).length && 6 === a ? "clothes" : "other"
                } catch (e) {}
            },
            updateSetsHtml: function(e) {
                try {
                    for (var t = [], a = TWIR.Inventory.data.searchVal, r = 0; r < e.length; r++) {
                        var i = west.storage.ItemSetManager.get(e[r].set);
                        (null === a || TWIR.Inventory.getSetsSearch(i)) && t.push(e[r])
                    }
                    var o = $("#twir_sets_weapons");
                    o.empty();
                    var n = TWIR.Inventory.getSetsImages(t, "weapons");
                    if (2 == n.length) {
                        var s = $('<img src="' + n[0] + '" style="width: 40px; height: auto;position: absolute;left: -1px; top: 5px;-webkit-transform: scaleX(-1);transform: scaleX(-1);"/>'),
                            p = $('<img src="' + n[1] + '" style="width: 40px; height: auto;position: absolute;right: -3px; bottom: 2px;"/>');
                        o.append(p, s)
                    } else {
                        var l = $('<img src="' + Game.cdnURL + '/images/items/unknown.png" style="width: 45px;height: auto;position: absolute;left: 3px;top: 3px;"/>');
                        o.append(l)
                    }
                    var c = $("#twir_sets_clothes");
                    c.empty();
                    var A = TWIR.Inventory.getSetsImages(t, "clothes");
                    if (3 == A.length) {
                        var g = $('<img src="' + A[0] + '" style="width: 40px; height: auto;position: absolute;left: -5px; top: 5px;"/>'),
                            m = $('<img src="' + A[1] + '" style="width: 30px;height: auto;position: absolute;right: -3px;top: -2px;"/>'),
                            d = $('<img src="' + A[2] + '" style="width: 30px;height: auto;position: absolute;right: -3px;bottom: -2px;"/>');
                        c.append(g, m, d)
                    } else {
                        var u = $('<img src="' + Game.cdnURL + '/images/items/unknown.png" style="width: 45px;height: auto;position: absolute;left: 3px;top: 3px;"/>');
                        c.append(u)
                    }
                    var I = $("#twir_sets_ride");
                    I.empty();
                    var h = TWIR.Inventory.getSetsImages(t, "ride");
                    if (2 == h.length) {
                        var k = $('<img src="' + h[0] + '" style="width: 40px; height: auto;position: absolute;left: -5px; top: 2px;"/>'),
                            R = $('<img src="' + h[1] + '" style="width: 40px; height: auto;position: absolute;right: -5px; bottom: 0px;"/>');
                        I.append(k, R)
                    } else if (1 == h.length) {
                        var b = $('<img src="' + h[0] + '" style="width: 40px;height: auto;position: absolute;left: 5px;top: 5px;"/>');
                        I.append(b)
                    } else {
                        var y = $('<img src="' + Game.cdnURL + '/images/items/unknown.png" style="width: 45px;height: auto;position: absolute;left: 3px;top: 3px;"/>');
                        I.append(y)
                    }
                    var w = $("#twir_sets_other");
                    w.empty();
                    var x = TWIR.Inventory.getSetsImages(t, "other");
                    if (3 == x.length) {
                        var f = $('<img src="' + x[0] + '" style="width: 40px; height: auto;position: absolute;left: -5px; top: 5px;"/>'),
                            T = $('<img src="' + x[1] + '" style="width: 30px;height: auto;position: absolute;right: -3px;top: -2px;"/>'),
                            W = $('<img src="' + x[2] + '" style="width: 30px;height: auto;position: absolute;right: -3px;bottom: -2px;"/>');
                        w.append(f, T, W)
                    } else if (1 == x.length) {
                        var B = $('<img src="' + x[0] + '" style="width: 40px;height: auto;position: absolute;left: 5px;top: 5px;"/>');
                        w.append(B)
                    } else {
                        var y = $('<img src="' + Game.cdnURL + '/images/items/unknown.png" style="width: 45px;height: auto;position: absolute;left: 3px;top: 3px;"/>');
                        w.append(y)
                    }
                } catch (e) {
                    TWIR.bugHunt(e)
                }
            },
            getSetsImages: function(e, t) {
                try {
                    var a = [],
                        r = e.filter(function(e) {
                            return e.type === t
                        }).map(function(e) {
                            return e.items
                        }),
                        i = r[~~(r.length * Math.random())];
                    if (!i) return a;
                    for (var o = [], n = 0; n < i.length; n++) {
                        var s = ItemManager.get(1e3 * i[n]);
                        o.push(s)
                    }
                    switch (t) {
                        case "weapons":
                            var p = o.find(e => "right_arm" === e.type),
                                l = o.find(e => "left_arm" === e.type);
                            p && a.push(p.image), l && a.push(l.image);
                            break;
                        case "ride":
                            var c = o.find(e => "animal" === e.type),
                                A = o.find(e => "yield" === e.type);
                            c && a.push(c.image), A && a.push(A.image);
                            break;
                        case "clothes":
                            var g = o.find(e => "body" === e.type),
                                m = o.find(e => "head" === e.type),
                                d = o.find(e => "foot" === e.type);
                            g && a.push(g.image), m && a.push(m.image), d && a.push(d.image);
                            break;
                        case "other":
                            var g = o.find(e => "body" === e.type),
                                m = o.find(e => "head" === e.type),
                                d = o.find(e => "foot" === e.type),
                                u = o.find(e => "animal" === e.type),
                                I = o.find(e => "right_arm" === e.type),
                                h = o.find(e => "left_arm" === e.type),
                                k = o.find(e => "yield" === e.type);
                            k && i.length < 6 ? a.push(k.image) : (g && a.push(g.image), m && a.push(m.image), !m && h && a.push(h.image), h && "set_sleeper" === h.set ? a.push(h.image) : u ? a.push(u.image) : k ? a.push(k.image) : I ? a.push(I.image) : d && a.push(d.image))
                    }
                    return a
                } catch (e) {}
            },
            getBonusKeywords: function() {
                var e = [];
                return e.push("experience", "dollar", "drop", "luck", "job", "resistance", "damage", "offense", "defense", "speed", "regen", "pray"), e
            },
            makeSetsSelect: function(t) {
                try {
                    if ($("#twir_sm.tw2gui_dialog").length) return;
                    var a = $('<div style="text-align: center;"/>'),
                        r = $("<tr><td/><td>" + e.organizing.bonus.cutIt(16) + "</td></tr>"),
                        i = $('<div style="margin-bottom: 10px;"/>'),
                        o = $('<span id="twir_sets_weapons" title="' + e.inventory.weapons + '" style="border: 2px solid #6B5A3F;border-radius: 8px;height: 50px;width: 50px;display: inline-block; margin: 5px; cursor: pointer;position: relative;"/>');
                    o.click(function(e) {
                        TWIR.Inventory.makeSetsMenu(e, t, "weapons")
                    }), o.mouseenter(function() {
                        $(this).css({
                            "background-color": "rgba(166, 128, 90, 0.32)"
                        })
                    }), o.mouseleave(function() {
                        $(this).css({
                            "background-color": "unset"
                        })
                    });
                    var n = $('<span id="twir_sets_clothes" title="' + e.inventory.clothes + '" style="border: 2px solid #6B5A3F;border-radius: 8px;height: 50px;width: 50px;display: inline-block; margin: 5px; cursor: pointer; position: relative;"/>');
                    n.click(function(e) {
                        TWIR.Inventory.makeSetsMenu(e, t, "clothes")
                    }), n.mouseenter(function() {
                        $(this).css({
                            "background-color": "rgba(166, 128, 90, 0.32)"
                        })
                    }), n.mouseleave(function() {
                        $(this).css({
                            "background-color": "unset"
                        })
                    });
                    var s = $('<span id="twir_sets_ride" title="' + e.inventory.ride + '" style="border: 2px solid #6B5A3F;border-radius: 8px;height: 50px;width: 50px;display: inline-block; margin: 5px; cursor: pointer; position: relative;"/>');
                    s.click(function(e) {
                        TWIR.Inventory.makeSetsMenu(e, t, "ride")
                    }), s.mouseenter(function() {
                        $(this).css({
                            "background-color": "rgba(166, 128, 90, 0.32)"
                        })
                    }), s.mouseleave(function() {
                        $(this).css({
                            "background-color": "unset"
                        })
                    });
                    var p = $('<span id="twir_sets_other" title="' + e.inventory.other_sets + '" style="border: 2px solid #6B5A3F;border-radius: 8px;height: 50px;width: 50px;display: inline-block; margin: 5px; cursor: pointer; position: relative;"/>');

                    function l() {
                        var e = c.getValue();
                        e.length >= 2 ? TWIR.Inventory.data.searchVal = [e] : TWIR.Inventory.data.searchVal = null, TWIR.Inventory.updateSetsHtml(t)
                    }
                    p.click(function(e) {
                        TWIR.Inventory.makeSetsMenu(e, t, "other")
                    }), p.mouseenter(function() {
                        $(this).css({
                            "background-color": "rgba(166, 128, 90, 0.32)"
                        })
                    }), p.mouseleave(function() {
                        $(this).css({
                            "background-color": "unset"
                        })
                    }), i.append(o, n, s, p), a.append(i);
                    var c = (new west.gui.Textfield).maxlength(24).setPlaceholder(Inventory.categoryDesc.set + ".. ").setWidth(150);
                    c.getMainDiv().on("input change paste", function() {
                        l()
                    });
                    var A = (new west.gui.Combobox).setWidth(45);
                    bItems = TWIR.Inventory.getBonusKeywords(), A.addItem(1, "&#8226;&#8226;&#8226;");
                    for (var g = 0; g < bItems.length; g++) A.addItem(bItems[g], bItems[g]);
                    A.select(1), A.addListener(function(e) {
                        if (1 !== e) {
                            switch (e) {
                                case 1:
                                    return;
                                case "experience":
                                    c.setValue("xp");
                                    break;
                                case "job":
                                    "cs_CZ" === Game.locale || "sk_SK" === Game.locale ? c.setValue("pb") : c.setValue("lp");
                                    break;
                                case "damage":
                                    c.setValue("dmg");
                                    break;
                                case "offense":
                                    c.setValue("off");
                                    break;
                                case "defense":
                                    c.setValue("def");
                                    break;
                                default:
                                    c.setValue(e)
                            }
                            l(), A.select(1)
                        }
                    });
                    var m = $("<tr/>");
                    $("<td/>").append(new west.gui.Icon("search", "").getMainDiv(), c.getMainDiv(), new west.gui.Icon("abort", "").getMainDiv().css({
                        "margin-left": "2px",
                        cursor: "pointer"
                    }).on("click", function() {
                        c.setValue(""), TWIR.Inventory.data.searchVal = null, TWIR.Inventory.updateSetsHtml(t)
                    })).appendTo(m), $("<td/>").append(A.getMainDiv().css({
                        "margin-left": "20px"
                    })).appendTo(m), $('<table style="margin-bottom: 5px;margin-left: auto;margin-right: auto;"/>').append(r, m).appendTo(a);
                    var d = $('<div style="margin-top: 10px;"/>'),
                        u = new west.gui.Combobox;
                    u.addItem("all", e.informative.any);
                    var I = [];
                    for (var h in e.keyWords) {
                        var k = Array.isArray(e.keyWords[h]) ? e.keyWords[h][0] : e.keyWords[h],
                            R = "independance" === h ? "independence" : h;
                        I.push({
                            name: k,
                            key: R
                        })
                    }
                    TWIR.sortName(I, name);
                    for (var b = 0; b < I.length; b++) {
                        var y = '<span style="vertical-align: middle;display: inline-block;margin-bottom: 2px;margin-right: 2px;"><img src="' + TWIR.images.gameEvents[I[b].key] + '" height="16" width="auto"/></span>';
                        u.addItem(I[b].key, y + I[b].name)
                    }
                    u.addItem("none", e.informative.none), u.addListener(function(e) {
                        TWIR.Inventory.data.eventVal = e, TWIR.Inventory.updateSetsHtml(t)
                    }), d.append("<span>" + e.inventory.event + ":&nbsp;</span>", u.getMainDiv().css({
                        "margin-right": "10px"
                    })), a.append(d), new west.gui.Dialog(e.inventory.sets, a).setDraggable(!0).setId("twir_sm").setBlockGame(!1).setPosition("40%", Map.height / 4).addButton("cancel", function() {
                        TWIR.storage.get("inv_setwindow_remember_search") || TWIR.Inventory.ss_reset()
                    }).show(), $("#twir_sm .tw2gui_inner_window_title").find(".textart_title").css({
                        "margin-top": "4px",
                        "font-size": "16pt"
                    }), c.focus(), TWIR.Inventory.updateSetsHtml(t)
                } catch (e) {
                    TWIR.bugHunt(e)
                }
            },
            fixDoubleDuel: function(e) {
                for (var t = Bag.getItemsByItemIds(TWIR.makeEmUp(e)), a = [], r = [], i = 0; i < t.length; i++) a.push(t[i].obj.item_base_id), "right_arm" === t[i].obj.type && r.push(t[i].obj.item_base_id);
                var o = 2 !== r.length ? a.length : a.length - 1;
                return o
            },
            getSetsSearch: function(e) {
                try {
                    var t = TWIR.Inventory.data.searchVal,
                        a = TWIR.Inventory.data.eventVal,
                        r = "all" === a || (!("all" === a || !TWIR.storage.setList.eventIcons[e.key] || TWIR.storage.setList.eventIcons[e.key][0] !== a) || "none" === a && !TWIR.storage.setList.eventIcons[e.key]);
                    if (null === t) return !1;
                    var i = t[0].toLowerCase(),
                        o = new RegExp("^.*" + i + "(.*)$", "i"),
                        n = TWIR.Inventory.fixDoubleDuel(e.items),
                        s = e.getMergedStages(n),
                        p = new west.item.BonusExtractor(Character);
                    if (r) switch (i) {
                        case "xp":
                        case "experience":
                            for (var l in s)
                                if (s[l].type && "experience" === s[l].type) {
                                    var c = p.getDesc(s[l]).replace(/[0-9\%\+\.\,]/g, "").replace(/(\(|\)).*/g, "").trim();
                                    return TWIR.Inventory.data.searchVal[1] = c, !0
                                } break;
                        case "dollar":
                            for (var l in s)
                                if (s[l].type && "dollar" === s[l].type) {
                                    var c = p.getDesc(s[l]).replace(/[0-9\%\+\.\,]/g, "").replace(/(\(|\)).*/g, "").trim();
                                    return TWIR.Inventory.data.searchVal[1] = c, !0
                                } break;
                        case "drop":
                            for (var l in s)
                                if (s[l].type && "drop" === s[l].type) {
                                    var c = p.getDesc(s[l]).replace(/[0-9\%\+\.\,]/g, "").replace(/(\(|\)).*/g, "").trim();
                                    return TWIR.Inventory.data.searchVal[1] = c, !0
                                } break;
                        case "luck":
                            for (var l in s)
                                if (s[l].type && "luck" === s[l].type) {
                                    var c = p.getDesc(s[l]).replace(/[0-9\%\+\.\,]/g, "").replace(/(\(|\)).*/g, "").trim();
                                    return TWIR.Inventory.data.searchVal[1] = c, !0
                                } break;
                        case "job":
                        case "lp":
                        case "pb":
                            for (var l in s)
                                if (s[l].type && "job" === s[l].type && "all" === s[l].job) {
                                    var c = p.getDesc(s[l]).replace(/[0-9\%\+\.\,]/g, "").replace(/(\(|\)).*/g, "").trim();
                                    return TWIR.Inventory.data.searchVal[1] = c, !0
                                } break;
                        case "resistance":
                            for (var l in s)
                                if (s[l].type && "fortbattle" === s[l].type && "resistance" === s[l].name) {
                                    var c = p.getDesc(s[l]).replace(/[0-9\%\+\.\,]/g, "").replace(/(\(|\)).*/g, "").trim();
                                    return TWIR.Inventory.data.searchVal[1] = c, !0
                                } break;
                        case "damage":
                        case "dmg":
                            for (var l in s)
                                if (s[l].type && "fortbattle" === s[l].type && "damage" === s[l].name) {
                                    var c = p.getDesc(s[l]).replace(/[0-9\%\+\.\,]/g, "").replace(/(\(|\)).*/g, "").trim();
                                    return TWIR.Inventory.data.searchVal[1] = c, !0
                                } break;
                        case "defense":
                        case "def":
                            for (var l in s)
                                if (s[l].type && "fortbattle" === s[l].type && "defense" === s[l].name) {
                                    var c = p.getDesc(s[l]).replace(/[0-9\%\+\.\,]/g, "").replace(/(\(|\)).*/g, "").trim();
                                    return TWIR.Inventory.data.searchVal[1] = c, !0
                                } break;
                        case "offense":
                        case "off":
                            for (var l in s)
                                if (s[l].type && "fortbattle" === s[l].type && "offense" === s[l].name) {
                                    var c = p.getDesc(s[l]).replace(/[0-9\%\+\.\,]/g, "").replace(/(\(|\)).*/g, "").trim();
                                    return TWIR.Inventory.data.searchVal[1] = c, !0
                                } break;
                        case "speed":
                        case "ms":
                            for (var l in s)
                                if (s[l].type && "speed" === s[l].type) {
                                    var c = p.getDesc(s[l]).replace(/[0-9\%\+\.\,]/g, "").replace(/(\(|\)).*/g, "").trim();
                                    return TWIR.Inventory.data.searchVal[1] = c, !0
                                } break;
                        case "regen":
                            for (var l in s)
                                if (s[l].type && "regen" === s[l].type) {
                                    var c = p.getDesc(s[l]).replace(/[0-9\%\+\.\,]/g, "").replace(/(\(|\)).*/g, "").trim();
                                    return TWIR.Inventory.data.searchVal[1] = c, !0
                                } break;
                        case "pray":
                            for (var l in s)
                                if (s[l].type && "pray" === s[l].type) {
                                    var c = p.getDesc(s[l]).replace(/[0-9\%\+\.\,]/g, "").replace(/(\(|\)).*/g, "").trim();
                                    return TWIR.Inventory.data.searchVal[1] = c, !0
                                } break;
                        default:
                            for (var A in s)
                                if (void 0 !== s[A].desc && o.test(s[A].desc)) {
                                    var c = p.getDesc(s[A]).replace(/[0-9\%\+\.\,]/g, "").replace(/(\(|\)).*/g, "").trim();
                                    return TWIR.Inventory.data.searchVal[1] = c, !0
                                } if (o.test(e.name)) return !0
                    }
                    return !1
                } catch (e) {
                    TWIR.bugHunt(e)
                }
            },
            getSetMenuSorted: function(e) {
                try {
                    var t = null !== TWIR.Inventory.data.searchVal ? TWIR.Inventory.data.searchVal[1] : null,
                        a = new west.item.BonusExtractor(Character);
                    if (null !== t) {
                        for (var r = 0; r < e.length; r++)
                            for (var i = west.storage.ItemSetManager.get(e[r].set), o = TWIR.Inventory.fixDoubleDuel(e[r].items), n = i.getMergedStages(o), s = 0; s < n.length; s++) {
                                var p = a.getDesc(n[s]).replace(/[0-9\%\+\.\,]/g, "").replace(/(\(|\)).*/g, "").trim(),
                                    l = a.getDesc(n[s]).replace(/[^0-9]/g, "").replace(/(\(|\)).*/g, "").trim();
                                p == t && (e[r].val = l)
                            }
                        return e = e.sort(function(e, t) {
                            return e.val === t.val ? 0 : e.val ? t.val ? t.val - e.val : -1 : 1
                        })
                    }
                    return TWIR.sortName(e, name), e
                } catch (t) {
                    return TWIR.sortName(e, name), e
                }
            },
            makeSetsMenu: function(t, a, r) {
                var a = a.filter(e => e.type === r),
                    i = null !== TWIR.Inventory.data.searchVal ? TWIR.Inventory.data.searchVal[1] : null;
                try {
                    var o = new west.gui.Selectbox;
                    if (isDefined(west.storage.ItemSetManager) && 0 != a.length) {
                        var n = new west.item.BonusExtractor(Character);
                        a = TWIR.Inventory.getSetMenuSorted(a);
                        var s = [],
                            p = 0;

                        function l(e) {
                            if (e.length > p) {
                                var t = 7.5 * (p = e.length) + 100;
                                o.setWidth(t <= 350 ? t : 350)
                            }
                        }
                        for (var c = 0; c < a.length; c++) {
                            var A = west.storage.ItemSetManager.get(a[c].set),
                                g = Bag.getItemsByItemIds(TWIR.makeEmUp(A.items)),
                                m = TWIR.Inventory.data.searchVal,
                                d = TWIR.Inventory.data.eventVal,
                                u = "all" === d || (!("all" === d || !TWIR.storage.setList.eventIcons[A.key] || TWIR.storage.setList.eventIcons[A.key][0] !== d) || "none" === d && !TWIR.storage.setList.eventIcons[A.key]);
                            if (-1 === s.indexOf(A.name) && u && (null === m || TWIR.Inventory.getSetsSearch(A))) {
                                s.push(A.name);
                                var I = g.length > 0 ? g[~~(g.length * Math.random())].obj.image : TWIR.images.none,
                                    h = g.map(function(e) {
                                        return e.obj.item_base_id
                                    }),
                                    k = h.reduce(function(e, t) {
                                        return e.indexOf(t) < 0 && e.push(t), e
                                    }, []),
                                    R = A.items.filter(e => !h.includes(e)),
                                    b = R.length ? "(" + k.length + "/" + A.items.length + ")" : "(" + A.items.length + ")";
                                R.length ? 0 : 1;
                                for (var y = R.length ? "#8b4513" : "#800080", w = R.length ? "#5e321a" : "#800080", x = R.length && 1 === g.length && A.items.length >= 4 ? .5 : 1, f = TWIR.storage.setList.eventIcons[A.key], T = TWIR.storage.setList.eventIcons[A.key] ? TWIR.images.gameEvents[f[0]] : "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", W = TWIR.storage.setList.eventIcons[A.key] ? "(" + f[1] + ")" : "", B = TWIR.storage.setList.eventIcons[A.key] && !Array.isArray(e.keyWords[f[0]]) ? e.keyWords[f[0]] : TWIR.storage.setList.eventIcons[A.key] && Array.isArray(e.keyWords[f[0]]) ? e.keyWords[f[0]][0] : "", v = [], M = [], S = 0; S < g.length; S++) v.push(g[S].obj.item_base_id), "right_arm" === g[S].obj.type && M.push(g[S].obj.item_base_id);
                                for (var U = $.grep(A.items, function(e) {
                                        return $.inArray(e, v) < 0
                                    }), V = U.length > 0 ? "<div style=&quot;color: #8b4513;margin-bottom: 10px;&quot;>" + e.tooltips.missing_items + "&nbsp;(" + e.invent.toLowerCase() + "):</div>" : "", K = 0; K < U.length; K++) V += U.length > 0 ? "<div><img style=&quot;-webkit-filter: grayscale(100%);filter: grayscale(100%);display: inline-block;position: relative;margin-right: 2px;margin-bottom: 2px;&quot; src=&quot;" + ItemManager.getByBaseId(U[K]).image + "&quot; height=&quot;16&quot; width=&quot;auto&quot;></img><span style=&quot;color: #666;display: inline-block;&quot;>" + ItemManager.getByBaseId(U[K]).name + "</span></div>" : "";
                                var j = A.getMergedStages(v.length);
                                (j = 2 !== M.length ? A.getMergedStages(v.length) : A.getMergedStages(v.length - 1)).sort(function(e, t) {
                                    var a = function(e, t) {
                                            return (e.bonus ? e.bonus.type : e.type) == t && (e.bonus ? e.bonus.name : e.name)
                                        },
                                        r = a(e, "attribute"),
                                        i = a(t, "attribute"),
                                        o = a(e, "skill"),
                                        n = a(t, "skill");
                                    return r && i ? r < i ? -1 : 1 : r ? -1 : i ? 1 : o && n ? 0 : o ? -1 : n ? 1 : 0
                                });
                                for (var C = v.length > 0 && j.length > 0 ? "<div style=&quot;color: #8b4513;margin-bottom: 10px;&quot;>" + e.tooltips.owned_items_bonus + ":&nbsp;</div>" : "", E = 0; E < j.length; E++) {
                                    var q = n.getDesc(j[E]).replace(/[0-9\%\+\.\,]/g, "").replace(/(\(|\)).*/g, "").trim(),
                                        Y = n.getDesc(j[E]).replace(/[^0-9]/g, "").replace(/(\(|\)).*/g, "").trim(),
                                        G = null !== i && q == i ? "blue" : "#666",
                                        F = q.match(CharacterSkills.keyNames.health) && "soldier" === Character.charClass && Premium.hasBonus("character") ? 20 * Y : q.match(CharacterSkills.keyNames.health) && "soldier" === Character.charClass ? 15 * Y : q.match(CharacterSkills.keyNames.health) ? 10 * Y : 0;
                                    C += v.length > 0 && j.hasOwnProperty(E) ? "<div style=&quot;color: " + G + ";&quot;>" + n.getDesc(j[E]) + (0 != F ? "&nbsp;(" + F + "&nbsp;hp)" : "") + "</div>" : ""
                                }
                                var Q = TWIR.storage.setList.eventIcons[A.key] ? "inline-block" : "none",
                                    O = TWIR.storage.get("inv_setmenu_full_color") ? w : "#5e321a",
                                    J = TWIR.storage.get("inv_setmenu_full_color") ? y : "#8b4513",
                                    H = TWIR.storage.get("inv_setmenu_empty_opacity") ? x : 1,
                                    D = A.name.escapeHTML();
                                l(A.name), o.addItem(A.items, '<span title="' + C + '" style="display: inline-block; height: 20px; width: 32px;vertical-align: top;position: relative;"><img style="left: 0px; right: unset;opacity: ' + H + ';display: inline-block;" src="' + I + '" height="20" width="auto"></img><img title="' + B + "&nbsp;" + W + '" style="display: ' + Q + ';right: 0px;bottom: 0px;" src="' + T + '" height="16" width="auto"></img></span><span style="margin-top: 2px;word-wrap: break-word;max-width: 230px;display: inline-block;margin-left: 5px; text-overflow:ellipsis; white-space:nowrap; overflow:hidden;opacity: ' + H + ";color: " + O + ';vertical-align: middle;" title="' + D + '">' + D + '</span><span title="' + V + '" style="display: inline-block;margin-top: 3px;color: ' + J + ";position: relative;font-size: 12px;font-style: italic;float: right;opacity: " + H + ';">' + b + "</span>")
                            }
                        }
                        o.addListener(function(t) {
                            var a = Bag.getItemsByItemIds(TWIR.makeEmUp(t));
                            if (0 < a.length) {
                                var r = west.storage.ItemSetManager.get(a[0].obj.set).name;
                                return Inventory.customResult = a, TWIR.Inventory.data.title = [r, e.inventory.sets], Inventory.addItems("sets", 1, !1)
                            }
                        })
                    }
                    return o.items.length > 0 ? o.show(t) : new UserMessage(e.informative.no_sets + "!", UserMessage.TYPE_ERROR).show()
                } catch (e) {
                    TWIR.bugHunt(e)
                }
            },
            improveSearch: function() {
                Bag.search = function(t) {
                    if (Bag.loaded) {
                        var a = new RegExp("^.*" + t + "(.*)$", "i"),
                            r = this.getItemsByItemIds(),
                            i = [],
                            o = "";
                        for (var n in e.keyWords)(void 0 !== e.keyWords[n] && Array.isArray(e.keyWords[n]) && e.keyWords[n].findIndex(e => t.toLowerCase().replace(/[0-9\%\+\:\-\$\.]/g, "").replace(/(\(|\)).*/g, "").trim() === e.toLowerCase()) > -1 && e.keyWords[n].some(function(e) {
                            return e.toLowerCase().replace(/[0-9\%\+\:\-\$\.]/g, "").replace(/(\(|\)).*/g, "").trim() === t.toLowerCase().replace(/[0-9\%\+\:\-\$\.]/g, "").replace(/(\(|\)).*/g, "").trim()
                        }) || !Array.isArray(e.keyWords[n]) && e.keyWords[n].toLowerCase() === t.toLowerCase().replace(/[0-9\%\+\:\-\$\.]/g, "").replace(/(\(|\)).*/g, "").trim()) && (o = t.replace(/[^0-9.]/g, "").replace(/(\(|\)).*/g, "").trim(), t = n);
                        return west.common.forEach(r, function(r, n) {
                            var p = r.obj,
                                l = p.bonus.item,
                                c = "none" === TWIR.Inventory.data.searchType || TWIR.Inventory.data.searchType === p.type;
                            if (!o.length && c) switch (t.toLowerCase()) {
                                case "allitems":
                                    p.active && i.push(r);
                                    break;
                                case "setitems":
                                    null !== p.set && i.push(r);
                                    break;
                                case "valentine":
                                    TWIR.storage.setList.eventIcons.hasOwnProperty(p.set) && "valentine" === TWIR.storage.setList.eventIcons[p.set][0] && i.push(r);
                                    break;
                                case "xmas":
                                    TWIR.storage.setList.eventIcons.hasOwnProperty(p.set) && "xmas" === TWIR.storage.setList.eventIcons[p.set][0] && i.push(r);
                                    break;
                                case "easter":
                                    TWIR.storage.setList.eventIcons.hasOwnProperty(p.set) && "easter" === TWIR.storage.setList.eventIcons[p.set][0] && i.push(r);
                                    break;
                                case "independence":
                                    TWIR.storage.setList.eventIcons.hasOwnProperty(p.set) && "independence" === TWIR.storage.setList.eventIcons[p.set][0] && i.push(r);
                                    break;
                                case "oktoberfest":
                                    TWIR.storage.setList.eventIcons.hasOwnProperty(p.set) && "oktoberfest" === TWIR.storage.setList.eventIcons[p.set][0] && i.push(r);
                                    break;
                                case "dotd":
                                    TWIR.storage.setList.eventIcons.hasOwnProperty(p.set) && "dotd" === TWIR.storage.setList.eventIcons[p.set][0] && i.push(r);
                                    break;
                                case "buffs":
                                case e.inventory.buffs.toLowerCase():
                                    $.inArray(p.item_id, TWIR.storage.inventory.buffs_all) > -1 && i.push(r);
                                    break;
                                case "useable":
                                case e.inventory.useable.toLowerCase():
                                    $.inArray(p.item_id, TWIR.storage.inventory.use_all) > -1 && i.push(r);
                                    break;
                                case "crafting":
                                case e.inventory.crafting.toLowerCase():
                                    $.inArray(p.item_id, TWIR.storage.inventory.crafting_all) > -1 && i.push(r);
                                    break;
                                case "yield":
                                case Inventory.categoryDesc.yield.toLowerCase():
                                    "yield" === p.type && i.push(r);
                                    break;
                                case "recipe":
                                case e.inventory.recipes.toLowerCase():
                                    "recipe" === p.type && i.push(r);
                                    break;
                                case "xp":
                                case "experience":
                                    for (var A = 0; A < l.length; A++)(l[A].type && "experience" === l[A].type || s(l[A].bonus) && "experience" === l[A].bonus.type) && i.push(r);
                                    break;
                                case "dollar":
                                    for (var A = 0; A < l.length; A++)(l[A].type && "dollar" === l[A].type || s(l[A].bonus) && "dollar" === l[A].bonus.type) && i.push(r);
                                    break;
                                case "drop":
                                    for (var A = 0; A < l.length; A++)(l[A].type && "drop" === l[A].type || s(l[A].bonus) && "drop" === l[A].bonus.type) && i.push(r);
                                    break;
                                case "luck":
                                    for (var A = 0; A < l.length; A++)(l[A].type && "luck" === l[A].type || s(l[A].bonus) && "luck" === l[A].bonus.type) && i.push(r);
                                    break;
                                case "job":
                                case "lp":
                                case "pb":
                                    for (var A = 0; A < l.length; A++)(l[A].type && "job" === l[A].type && "all" === l[A].job || s(l[A].bonus) && "job" === l[A].bonus.type && "all" === l[A].bonus.job) && i.push(r);
                                    break;
                                case "resistance":
                                    for (var A = 0; A < l.length; A++)(l[A].type && "fortbattle" === l[A].type && "resistance" === l[A].name || s(l[A].bonus) && "fortbattle" === l[A].bonus.type && "resistance" === l[A].bonus.name) && i.push(r);
                                    break;
                                case "damage":
                                case "dmg":
                                    for (var A = 0; A < l.length; A++)(l[A].type && "fortbattle" === l[A].type && "damage" === l[A].name || s(l[A].bonus) && "fortbattle" === l[A].bonus.type && "damage" === l[A].bonus.name) && i.push(r);
                                    break;
                                case "defense":
                                case "def":
                                    for (var A = 0; A < l.length; A++)(l[A].type && "fortbattle" === l[A].type && "defense" === l[A].name || s(l[A].bonus) && "fortbattle" === l[A].bonus.type && "defense" === l[A].bonus.name) && i.push(r);
                                    break;
                                case "offense":
                                case "off":
                                    for (var A = 0; A < l.length; A++)(l[A].type && "fortbattle" === l[A].type && "offense" === l[A].name || s(l[A].bonus) && "fortbattle" === l[A].bonus.type && "offense" === l[A].bonus.name) && i.push(r);
                                    break;
                                case "speed":
                                case "ms":
                                    for (var A = 0; A < l.length; A++)(l[A].type && "speed" === l[A].type || s(l[A].bonus) && "speed" === l[A].bonus.type) && i.push(r);
                                    break;
                                case "regen":
                                    for (var A = 0; A < l.length; A++)(l[A].type && "regen" === l[A].type || s(l[A].bonus) && "regen" === l[A].bonus.type) && i.push(r);
                                    break;
                                case "pray":
                                    for (var A = 0; A < l.length; A++)(l[A].type && "pray" === l[A].type || s(l[A].bonus) && "pray" === l[A].bonus.type) && i.push(r);
                                    break;
                                default:
                                    a.test(p.item_id) || a.test(p.name) || null !== p.set && a.test(west.storage.ItemSetManager.get(p.set).name) || Bag.searchAttrib(p.bonus, a) || Bag.searchUseBonus(p, a) || t == p.level || void 0 !== p.profession && a.test(p.profession) ? i.push(r) : (TWIR.storage.setList.eventIcons.hasOwnProperty(p.set) && TWIR.storage.setList.eventIcons[p.set][1] === t || TWIR.storage.setList.eventIcons.hasOwnProperty(p.set) && TWIR.storage.setList.eventIcons[p.set][0].toLowerCase() + " " + TWIR.storage.setList.eventIcons[p.set][1] === t.toLowerCase()) && c && i.push(r)
                            } else TWIR.storage.setList.eventIcons.hasOwnProperty(p.set) && TWIR.storage.setList.eventIcons[p.set][0] === t && TWIR.storage.setList.eventIcons[p.set][1] === o && i.push(r)
                        }), TWIR.Inventory.filter(i)
                    }

                    function s(e) {
                        return void 0 !== e && "object" == typeof e
                    }
                    EventHandler.listen("inventory_loaded", function() {
                        return Inventory.showSearchResult(i), EventHandler.ONE_TIME_EVENT
                    })
                }
            },
            addCategories: function(t) {
                $('<span title="<b>' + e.donate_title + '</b>" id="twir_menu" style="background-image: url(' + TWIR.images.menuicon + ');cursor: pointer;position: relative;z-index: 9999991;background-repeat: no-repeat;width: 20px;height: 20px;display: inline-block;float: left;"</span>').appendTo(".inventory .tw2gui_window_buttons").click(function(e) {
                    TWIR.menu.open("Donate")
                });
                var a = $('<div class="twir_enchanted_filters ui-state-default" style="display: inline-block; position: absolute; width: auto; height: 40px;top: 55px;right:13px;border-radius: 3px;-webkit-box-shadow: 0 0 20px inset;box-shadow: 0 0 20px inset;border: 3px solid #4d392c;background-image: url(' + TWIR.images.menubg + ");padding-right: 5px;padding-left: 5px;border: 3px solid transparent;-webkit-border-image: url(" + TWIR.images.menuborder + ') 0 0 stretch;"></div>'),
                    r = $('<div class="twir_enchanted_yield_filters ui-state-default" style="display: inline-block; position: absolute; width: auto; height: 40px;top: 55px;right: 146px;border-radius: 3px;-webkit-box-shadow: 0 0 20px inset;box-shadow: 0 0 20px inset;border: 3px solid #4d392c;background-image: url(' + TWIR.images.menubg + ");padding-right: 5px;padding-left: 5px;border: 3px solid transparent;-webkit-border-image: url(" + TWIR.images.menuborder + ') 0 0 stretch;"></div>');
                $(".filters", Inventory.DOM).after(a), $(".filters", Inventory.DOM).after(r);
                $('<span title="' + e.inventory.useable + '" class="filter_inventory filter_useable" style= "-webkit-filter: opacity(75%); filter: opacity(75%);"></span>').appendTo(a).click(function(e) {
                    TWIR.makeSelectMenu(e, TWIR.storage.inventory.use, "useable")
                }), $('<span title="' + e.inventory.buffs + '" class="filter_inventory filter_buff" style="-webkit-filter: opacity(75%); filter: opacity(75%);"></span>').appendTo(a).click(function(e) {
                    TWIR.makeSelectMenu(e, TWIR.storage.inventory.buffs, "buffs")
                }), $('<span title="' + e.inventory.crafting + '" class="filter_inventory filter_craft" style="-webkit-filter: opacity(75%); filter: opacity(75%);" ></span>').appendTo(a).click(function(e) {
                    TWIR.makeSelectMenu(e, TWIR.storage.inventory.crafting, "crafting")
                });
                var i = $('<span title="' + e.inventory.equipment + '" class="filter_inventory filter_bonus" style="-webkit-filter: opacity(75%); filter: opacity(75%);" ></span>').appendTo(r),
                    o = $('<span title="' + e.inventory.work_items + '" class="filter_inventory filter_work" style="-webkit-filter: opacity(75%); filter: opacity(75%);" ></span>').appendTo(r),
                    n = $('<span title="' + e.inventory.quest_items + '" class="filter_inventory filter_quest" style="-webkit-filter: opacity(75%); filter: opacity(75%);" ></span>').appendTo(r);
                o.click(function(t) {
                    var a = Bag.getItemsByItemIds(TWIR.storage.inventory.work);
                    if (0 < a.length) return TWIR.Inventory.data.title = [e.inventory.work_items, e.inventory.work_items], Inventory.addItems("work", 1, !1)
                }), n.click(function(t) {
                    var a = Bag.getItemsByItemIds(TWIR.storage.inventory.quest);
                    if (0 < a.length) return TWIR.Inventory.data.title = [e.inventory.quest_items, e.inventory.quest_items], Inventory.addItems("quest", 1, !1)
                }), i.click(function(t) {
                    var a = Bag.getItemsByItemIds(TWIR.storage.inventory.bonus);
                    if (0 < a.length) return TWIR.Inventory.data.title = [e.inventory.equipment, e.inventory.equipment], Inventory.addItems("bonus", 1, !1)
                }), Inventory.window.hideLoader()
            }
        }, TWIR.Updater = function() {
            try {
                $.getScript(TWIR.updateUrl, function() {
                    setTimeout(function() {
                        var t = new RegExp("^.*" + e.update_message + "(.*)$", "i"),
                            a = 0 != Character.homeTown.town_id ? Chat.Resource.Manager.getRoom("room_town_" + Character.homeTown.town_id) : Chat.Resource.Manager.getGeneralRoom();
                        if (scriptUpdate.TWIR > TWIR.version && -1 === a.history.findIndex(e => t.test(e))) {
                            var a = 0 != Character.homeTown.town_id ? Chat.Resource.Manager.getRoom("room_town_" + Character.homeTown.town_id) : Chat.Resource.Manager.getGeneralRoom(),
                                r = e.update_message + "&nbsp;<b>" + e.download + ':&nbsp;</b> <a target="_blank" href="' + TWIR.updateAds + '">[' + e.ads + '] </a>&nbsp;|&nbsp;<a href="' + TWIR.downloadUrl + '">[' + e.no_ads + "].</a><br> /555" + e.changes + ":&nbsp;" + scriptUpdate.TWIRNew;
                            ChatWindow.open(a, !0);
                            var i = Chat.Formatter.formatMessage(Chat.Formatter.formatText(r, !0), "&nbsp;<b>TWIR:</b>", Date.now(), !0, "from_system"),
                                o = Chat.Resource.Manager.getRooms();
                            for (var n in o) o[n].addMessage(i)
                        }
                    }, 15e3)
                })
            } catch (e) {
                TWIR.bugHunt(e)
            }
        }, setInterval(TWIR.Updater, Math.floor(-581999 * Math.random() + 6e5))
    } + ")();", document.body.appendChild(t), document.body.removeChild(t)
}();
