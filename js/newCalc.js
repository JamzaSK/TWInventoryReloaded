(function (window) {
TWIR_newCalc = {
	calcBest: function(skills, para, callback) {
		var sets = this.getBestSet(skills, para);
		this.result = sets;
		callback(sets);
		return sets;
	},
	getUsedItems: function(container, base_id) {
		var items = container.items.slice(0),
			i;
		for (i = 0; i < container.sets.length; i++) {
			items.push.apply(items, container.sets[i].getItems());
		}
		var result = [],
			invItem, wearItem;
		for (var i = 0; i < items.length; i++) {
			invItem = Bag.getItemByItemId(items[i]);
			if (!invItem) {
				result.push(base_id ? parseInt(items[i] / 1000) : items[i]);
				continue;
			}
			wearItem = Wear.get(invItem.getType());
			if (!wearItem || (wearItem && (wearItem.getItemBaseId() !== invItem.getItemBaseId() || wearItem.getItemLevel() < invItem.getItemLevel()))) {
				result.push(base_id ? invItem.getItemBaseId() : invItem.getId());
			} else {
				result.push(base_id ? wearItem.getItemBaseId() : wearItem.getId());
			}
		}
		return result;
	},
	getBestSet: function(skills, para) {
		var bestItems, bestItemsContainer, sets, i, best, points = 0,
			tmp, availableSets;
		availableSets = west.item.Calculator.filterUnavailableSets(west.storage.ItemSetManager.getAll()); //2.main WEST
		bestItems = this.getBestItems(skills, para); // 3.
		bestItemsContainer = new west.item.ItemSetContainer;
		for (i = 0; i < bestItems.length; i++) bestItemsContainer.addItem(bestItems[i].getId());
		sets = this.createSubsets(availableSets, bestItems, skills, para); // 4.
		if (window.__limitclothcalc && sets.length > 500) {
			sets = this.createSubsets(availableSets, bestItems, skills, para, true);
			console && console.log('using approximation...');
		}
		sets = this.filterUneffectiveSets(sets, skills, para); //5.
		sets = west.item.Calculator.fillEmptySlots(west.item.Calculator.combineSets(sets), bestItems);
		sets.push(bestItemsContainer);
		for (i = 0; i < sets.length; i++) {
			sets[i] = this.itemsToSets(sets[i]);
			switch (para) {
				case "ms":
					var tmpArr = this.getValue4Container(skills, sets[i], para);
					tmp = this.calcSpeed([tmpArr[0], tmpArr[1]]);
					break;
				default:
					tmp = this.getValue4Container(skills, sets[i], para);
					break;
			}
			sets[i]["tmp"] = tmp;
			if (tmp > points) {
				points = tmp;
				best = sets[i];
			}
		}
		var setsSorted = sets.sort(function(a, b) {
			return b.tmp - a.tmp;
		});
		return setsSorted;
	},
	getBestOwnItems: function(items) {
		var invItems = Bag.getItemsByItemIds(TWIR.makeEmUp(items));
		var result = [];
		for (var a in Wear.wear) {
			if (items.includes(Wear.wear[a].getItemBaseId())) invItems.push(Wear.wear[a]);
		}
		var holder = {};
		for (var b = 0; b < invItems.length; b++) {
			var type = invItems[b].getType();
			if (!holder[type]) holder[type] = invItems[b];
			else if (holder[type] && invItems[b].getItemLevel() > holder[type].getItemLevel()) holder[type] = invItems[b];
		}
		for (var c in holder) {
			result.push(holder[c].getId());
		}
		return result;
	},
	exportFullBonus: function(set, container, base_id, charLevel) {
		if ($.isEmptyObject(set)) return;
		var bonus = {
			attribute: {},
			skill: {},
			job: {},
			job_bonus: {},
			other_bonus: {},
			fortbattle: {},
			damage: [],
		};
		var bonusExtractor = new west.item.BonusExtractor({
			level: charLevel ? charLevel : Character.level,
		});

		function countObjectKeys(obj) {
			var count = 0;
			if (Object && Object.keys) {
				count = Object.keys(obj).length;
			} else {
				jQuery.each(obj, function() {
					count++;
				});
			}
			return count;
		};

		function merge(b, value) {
			switch (b.type) {
				case 'skill':
				case 'attribute':
					bonus[b.type][b.name] = (bonus[b.type][b.name] || 0) + value;
					break;
				case 'fortbattle':
					bonus[b.type]['fort_' + b.name + (b.isSector ? '_sector' : '')] = (bonus[b.type]['fort_' + b.name + (b.isSector ? '_sector' : '')] || 0) + value;
					break;
				case 'job':
					bonus.job[b.job] = (bonus.job[b.job] || 0) + value;
					break;
				case 'pray':
					bonus.other_bonus[b.type] = (bonus.other_bonus[b.type] || 0) + value;
					break;
				case 'luck':
				case 'experience':
				case 'dollar':
				case 'drop':
					bonus.job_bonus[b.type] = (bonus.job_bonus[b.type] || 0) + Math.round(value * 100);
					break;
				case 'speed':
				case 'regen':
					bonus.other_bonus[b.type] = (bonus.other_bonus[b.type] || 0) + Math.round(value * 100);
					break;
				case 'character':
					merge(b.bonus, bonusExtractor.getCharacterItemValue(b));
					break;
				default:
					if (window.DEBUG) console.log('ItemSet: unknown bonus to merge: ', b.type);
					break;
			}
		};

		function mergeItem(item, bonus, base_id) {
			bonusExtractor = new west.item.BonusExtractor({
				level: charLevel ? charLevel : Character.level
			}, item.getItemLevel());
			if (item.speed) {
				bonus.other_bonus.ms = (bonus.other_bonus.ms || 0) + Math.round(1 / (item.speed) * 100 - 100);
			}
			if (item instanceof west.item.Weapon && item.type === "left_arm") {
				var dmg = item.getDamage(Character);
				bonus.damage[0] = dmg.min;
				bonus.damage[1] = dmg.max;
			}
			if (typeof item.bonus.attributes === 'object' && countObjectKeys(item.bonus.attributes) > 0) {
				for (var k in item.bonus.attributes) {
					if (item.bonus.attributes[k]) {
						bonus.attribute[k] = (bonus.attribute[k] || 0) + item.bonus.attributes[k];
					}
				}
			}
			if (typeof item.bonus.skills === 'object' && countObjectKeys(item.bonus.skills) > 0) {
				for (var k in item.bonus.skills) {
					if (item.bonus.skills[k]) {
						bonus.skill[k] = (bonus.skill[k] || 0) + item.bonus.skills[k];
					}
				}
			}
			if (item.bonus.item.length) {
				for (k = 0; k < item.bonus.item.length; k++) {
					var bonus = bonusExtractor.getExportValue(item.bonus.item[k]);
					if (item instanceof west.item.Weapon && bonus.key === 'damage') {
						continue;
					} else {
						merge(item.bonus.item[k], item.bonus.item[k].value);
					}
				}
			}
		};
		if (container) {
			var checked = [];
			for (var i = 0; i < set.sets.length; i++) {
				var getset = west.storage.ItemSetManager.get(set.sets[i].key);
				var bonusObjects = getset.getMergedStages(set.sets[i].items.length);
				for (var a = 0; a < bonusObjects.length; a++) {
					var b = bonusObjects[a];
					merge(b, b.value);
				}
				for (var c = 0; c < set.sets[i].items.length; c++) {
					mergeItem(ItemManager.get(set.sets[i].items[c]), bonus);
					checked.push(set.sets[i].items[c]);
				}
			}
			for (var d = 0; d < set.items.length; d++) {
				if (checked.includes(set.items[d] * (base_id ? 1000 : 1))) continue;
				mergeItem(ItemManager.get(set.items[d] * (base_id ? 1000 : 1)), bonus);
			}
		} else {
			var getset = west.storage.ItemSetManager.get(set.key);
			var bonusObjects = getset.getMergedStages(set.items.length);
			for (var a = 0; a < bonusObjects.length; a++) {
				var b = bonusObjects[a];
				merge(b, b.value);
			}
			for (var c = 0; c < set.items.length; c++) {
				mergeItem(ItemManager.get(set.items[c] * (base_id ? 1000 : 1)), bonus);
			}
		}
		return bonus;
	},
	getAdditionalBonus: function(bonus, level) {
		var extractor = new west.item.BonusExtractor(Character, level);
		if (bonus.type === 'character') {
			value = extractor.getCharacterItemValue(bonus);
			bonus = bonus.bonus;
			if (bonus.type in extractor.keyDescMapping) value = Math.round(value * 100);
		} else if (bonus.type in extractor.keyDescMapping) {
			value = extractor.getValue(bonus);
			value = Math.round(value * 100);
		} else {
			value = extractor.getValue(bonus);
		}
		switch (bonus.type) {
			case 'fortbattle':
				key = 'fort_' + bonus.name + (bonus.isSector ? '_sector' : '');
				break;
			case 'job':
				key = bonus.type + (bonus.job && bonus.job === 'all' ? '' : '_' + bonus.job);
				break;
			default:
				key = bonus.type;
		}
		return {
			[key]: value
		}
	},
	getPointAddition: function(bonus, _valueModifier, _roundingMethod) {
		if (bonus.type == 'character' && bonus.key == 'level') {
			return this.getPointAddition(bonus.bonus, function(val) {
				return this.getRoundedValue(val * Character.level, bonus.roundingMethod);
			}.bind(this), bonus.roundingMethod);
		}
		return 0;
	},
	getRoundedValue: function(value, method) {
		switch (method) {
			case 'round':
				return Math.round(value);
			case 'ceil':
				return Math.ceil(value);
			case 'floatceil':
				return Math.ceil(100 * value) / 100;
			case 'floor':
				return Math.floor(value);
			default:
				return value;
		}
	},
	getValue: function(skills, item, para, object) {
		var value = object ? {} : 0,
			jokeItems = [185147000, 185148000, 185149000, 185150000, 185151000, 185152000, 41999000, 50106000, 48999000],
			attributes = {},
			skill, skillAddition = {},
			skillArr, i, bonusExtractor, affectedSkills;
		if (jokeItems.includes(item.getId())) return value;
		var bonuses = {};
		for (skill in skills) {
			if (!skills[skill]) continue;
			attr = CharacterSkills.getAttributeKey4Skill(skill);
			attributes[attr] = (attributes[attr] || 0) + 1;
		}
		for (attr in item.bonus.attributes) {
			if (!attributes[attr]) continue;
			skillArr = CharacterSkills.getSkillKeys4Attribute(attr);
			for (i = 0; i < skillArr.length; i++) {
				if (skills[skillArr[i]]) skillAddition[skillArr[i]] = item.bonus.attributes[attr];
			}
		}
		if (item.hasItemBonus()) {
			bonusExtractor = new west.item.BonusExtractor(Character, item.getItemLevel());
			for (i = 0; i < item.bonus.item.length; i++) {
				affectedSkills = bonusExtractor.getAffectedSkills(item.bonus.item[i]);
				var specialSkills = this.getAdditionalBonus(item.bonus.item[i], item.getItemLevel());
				for (skill in affectedSkills) {
					//exported bonuses
					if (!bonuses[skill]) bonuses[skill] = 0;
					bonuses[skill] += affectedSkills[skill];
					if (!(skill in skills)) continue;
					if (object) value[skill] = (value[skill] || 0) + (skills[skill] * affectedSkills[skill]);
					else value += skills[skill] * affectedSkills[skill];
				}
				for (special in specialSkills) {
					if (!(special in skills)) continue;
					if ((special in affectedSkills)) continue;
					if (object) value[special] = (value[special] || 0) + (skills[special] * specialSkills[special]);
					else value += skills[special] * specialSkills[special];
				}
				if (!object) value += this.getPointAddition(item.bonus.item[i]); //potrebujem to???
			}
		}
		//dmg zbrane
		if (item instanceof west.item.Weapon) {
			var dmg = item.getDamage(Character);
			var avg = ((dmg.min + dmg.max) / 2);
			if (item.type === "right_arm") bonuses["duel_dmg"] = avg;
			if (item.type === "left_arm") bonuses["fort_dmg"] = [dmg.min, dmg.max];
		}
		for (skill in skills) {
			if (item.bonus.skills[skill] || skillAddition[skill]) {
				if (object) value[skill] = (value[skill] || 0) + (skills[skill] * ((item.bonus.skills[skill] || 0) + (skillAddition[skill] || 0)));
				else value += skills[skill] * ((item.bonus.skills[skill] || 0) + (skillAddition[skill] || 0));
			}
			//if (object) value[skill] = (value[skill] || 0) + (skills[skill] * this.calcByFormula(skill, bonuses, para));
			//else value += skills[skill] * this.calcByFormula(skill, bonuses, para);
			//speed zo zvierata?
			if (item.speed && skill === "ride" && para === "ms") {
				if (object) value[skill] = (value[skill] || 0) + Math.round(Character.defaultSpeed / (Character.defaultSpeed * item.speed) * 100 - 100);
				else value += Math.round(Character.defaultSpeed / (Character.defaultSpeed * item.speed) * 100 - 100);
			}
		}
		if (item.usebonus && item.action) {
			if (object) value = {};
			else value = 0;
		}
		return value;
	},
	calcSpeed: function(boniArr) {
		var boni = (100 + boniArr[0] + CharacterSkills.getSkill("ride").points) * (1 + (boniArr[1] / 100));
		if (!boniArr[0] && !boniArr[1]) boni = 0;
		return boni;
	},
	getValue4Set: function(skills, set, para, base_id) {
		var boni = 0,
			speedBoni = 0,
			rideBoni = 0;
		switch (para) {
			case "ms":
				var setValues = this.getSetValue({
					"speed": 1,
					"ride": 1
				}, set, para, true);
				speedBoni += (setValues.speed || 0);
				rideBoni += (setValues.ride || 0);
				break;
			default:
				boni += this.getSetValue(skills, set, para);
				break;
		}
		var usedSetItems = set.items;
		if (base_id) usedSetItems = TWIR.makeEmUp(usedSetItems, true);
		for (var i = 0; i < usedSetItems.length; i++) {
			switch (para) {
				case "ms":
					var itemValues = this.getValue({
						"speed": 1,
						"ride": 1
					}, ItemManager.get(usedSetItems[i]), para, true);
					speedBoni += (itemValues.speed || 0);
					rideBoni += (itemValues.ride || 0);
					if (i == (usedSetItems.length - 1)) return this.calcSpeed([rideBoni, speedBoni]); //end of array
					break;
				default:
					boni += this.getValue(skills, ItemManager.get(usedSetItems[i]), para);
					if (i == (usedSetItems.length - 1)) return boni; //end of array
					break;
			}
		}
	},
	getSetValue: function(skills, set, para, object) {
		var value = object ? {} : 0,
			skill, i, bonusExtractor, affectedSkills;
		var mergedStages = set.getMergedStages();
		var bonuses = {};
		bonusExtractor = new west.item.BonusExtractor(Character);
		for (i = 0; i < mergedStages.length; i++) {
			affectedSkills = bonusExtractor.getAffectedSkills(mergedStages[i]);
			var specialSkills = this.getAdditionalBonus(mergedStages[i], null);
			for (skill in affectedSkills) {
				//exported bonuses
				if (!bonuses[skill]) bonuses[skill] = 0;
				bonuses[skill] += affectedSkills[skill];
				if (!(skill in skills)) continue;
				if (object) value[skill] = (value[skill] || 0) + (skills[skill] * affectedSkills[skill]);
				else value += skills[skill] * affectedSkills[skill];
			}
			for (special in specialSkills) {
				if (!(special in skills)) continue;
				if ((special in affectedSkills)) continue;
				if (object) value[special] = (value[special] || 0) + (skills[special] * specialSkills[special]);
				else value += skills[special] * specialSkills[special];
			}
			if (!object) value += this.getPointAddition(mergedStages[i]);
		}
		for (skill in skills) {
			//if (object) value[skill] = (value[skill] || 0) + (skills[skill] * this.calcByFormula(skill, bonuses, para));
			//else value += skills[skill] * this.calcByFormula(skill, bonuses, para);
		}
		return value;
	},
	getValue4Container: function(skills, set, para) {
		var boni = 0,
			speedBoni = 0,
			rideBoni = 0,
			i, items = set.getItems();
		for (i = 0; i < items.length; i++) {
			switch (para) {
				case "ms":
					var getVal = this.getValue({
						"speed": 1,
						"ride": 1
					}, ItemManager.get(items[i]), para, true);
					speedBoni += (getVal.speed || 0);
					rideBoni += (getVal.ride || 0);
					break;
				default:
					boni += this.getValue(skills, ItemManager.get(items[i]), para);
					break;
			}
		}
		switch (para) {
			case "ms":
				var arrBoni = this.getSetValue4Container(skills, set, para);
				speedBoni += arrBoni[1];
				rideBoni += arrBoni[0];
				return [rideBoni, speedBoni];
				break;
			default:
				boni += this.getSetValue4Container(skills, set, para);
				return boni;
				break;
		}
	},
	getSetValue4Container: function(skills, container, para) {
		var boni = 0,
			speedBoni = 0,
			rideBoni = 0,
			i;
		for (i = 0; i < container.sets.length; i++) {
			switch (para) {
				case "ms":
					var getVal = this.getSetValue({
						"speed": 1,
						"ride": 1
					}, container.sets[i], para, true);
					speedBoni += (getVal.speed || 0);
					rideBoni += (getVal.ride || 0);
					if (i == (container.sets.length - 1)) return [rideBoni, speedBoni]; //posledny item v loope = return
					break;
				default:
					boni += this.getSetValue(skills, container.sets[i], para);
					if (i == (container.sets.length - 1)) return boni; //posledny item v loope = return
					break;
			}
		}
	},
	itemsToSets: function(container) {
		var sets = {};
		var items = container.items;
		var afterRemove = [];
		for (var a = 0; a < items.length; a++) {
			var getItem = ItemManager.get(items[a]);
			if (!getItem.set) {
				afterRemove.push(getItem.getId());
				continue;
			}
			if (!sets[getItem.set]) {
				var set = west.storage.ItemSetManager.get(getItem.set);
				sets[getItem.set] = new west.item.ItemSet({
					key: set.key,
					items: [getItem.getId()],
					bonus: set.bonus
				});
			} else {
				sets[getItem.set].items.push(getItem.getId());
			}
		}
		for (var b in sets) {
			if (container.sets.findIndex(function(e) {
					return e.key === b;
				}) === -1) container.sets.push(sets[b]);
		}
		container.items = afterRemove;
		return container;
	},
	getBestItems: function(skills, para) { //3
		var best_items = {},
			result = [],
			value = 0,
			items_by_base = Bag.getItemsIdsByBaseItemIds();
		west.common.forEach(items_by_base, function(items, base_id) {
			var item = ItemManager.get(items[0]),
				type = item.getType(),
				speedBoni = 0,
				rideBoni = 0;
			//SINGLE ITEM VALUE
			switch (para) {
				case "ms":
					var getItemVal = this.getValue({
						"speed": 1,
						"ride": 1
					}, item, para, true);
					speedBoni = (getItemVal.speed || 0); //1
					rideBoni = (getItemVal.ride || 0);
					value = rideBoni;
					break;
				default:
					value = this.getValue(skills, item, para); //1
					break;
			}
			best_items[type] = best_items[type] || [];
			if (value && item.wearable()) {
				best_items[type].push({
					item: item,
					id: item.getId(),
					base_id: base_id,
					value: value,
					speed: speedBoni
				});
			}
		});
		west.common.forEach(best_items, function(items, type) {
			var wear_item = Wear.get(type);
			var wear_value = 0;
			if (wear_item) {
				wear_item = ItemManager.get(wear_item.getId()),
					wear_rideBoni = 0,
					wear_speedBoni = 0;
				switch (para) {
					case "ms":
						var getWearVal = this.getValue({
							"speed": 1,
							"ride": 1
						}, wear_item, para, true);
						wear_speedBoni = (getWearVal.speed || 0); //1
						wear_rideBoni = (getWearVal.ride || 0);
						wear_value = wear_rideBoni;
						break;
					default:
						wear_value = this.getValue(skills, wear_item, para); //2
						break;
				}
				items.push({
					item: wear_item,
					id: wear_item.getId(),
					base_id: wear_item.getItemBaseId(),
					value: wear_value,
					speed: wear_speedBoni
				});
			}
			best_items[type] = items.sort(function(a, b) {
				switch (para) {
					case "ms":
						if (!a.value && !a.speed) return 1;
						else if (!b.value && !b.speed) return -1;
						else return b.speed - a.speed || b.value - a.value;
						break;
					default:
						return b.value - a.value;
						break;
				}
			});
			if (best_items[type].length) {
				var bestItem = best_items[type][0];
				if (type === "right_arm") {
					var sameValue = best_items[type].filter(function(item) {
						return item.value === bestItem.value; //&& item.item.sub_type === TWIR.calc.weapon > TOTO JE KED CHCEM LEN KONKRETNU ZBRAN
					});
					result.push(sameValue.length ? sameValue[0].item : bestItem.item);
				} else {
					result.push(bestItem.item);
				}
			}
		});
		return result;
	},
	beatsBestItems: function(set, bestItems, skills, para) {
		var setSlots = set.getUsedSlots(),
			bestItemsPoints = 0,
			speedBoni = 0,
			rideBoni = 0,
			i;
		for (i = 0; i < bestItems.length; i++) {
			if (setSlots.indexOf(bestItems[i].getType()) === -1) continue;
			switch (para) {
				case "ms":
					var getVal = this.getValue({
						"speed": 1,
						"ride": 1
					}, bestItems[i], para, true);
					speedBoni += (getVal.speed || 0);
					rideBoni += (getVal.ride || 0);
					break;
				default:
					bestItemsPoints += this.getValue(skills, bestItems[i], para); //item value
					break;
			}
		}
		switch (para) {
			case "ms":
				bestItemsPoints = this.calcSpeed([rideBoni, speedBoni]);
				break;
		}
		return this.getValue4Set(skills, set, para) > bestItemsPoints; //set value
	},
	itemsCombineable: function(items) {
		var slots = {},
			i, slot;
		for (i = 0; i < items.length; i++) {
			slot = ItemManager.get(items[i]).type;
			if (slots[slot] === true) return false;
			slots[slot] = true;
		}
		return true;
	},
	createCombinations: function(items, k) {
		var i, j, combs, head, tailcombs;
		if (k > items.length || k <= 0) {
			return [];
		}
		if (k == items.length) {
			return [items];
		}
		if (k == 1) {
			combs = [];
			for (i = 0; i < items.length; i++) {
				combs.push([items[i]]);
			}
			return combs;
		}
		combs = [];
		for (i = 0; i < items.length - k + 1; i++) {
			head = items.slice(i, i + 1);
			tailcombs = this.createCombinations(items.slice(i + 1), k - 1);
			for (j = 0; j < tailcombs.length; j++) {
				combs.push(head.concat(tailcombs[j]));
			}
		}
		return combs;
	},
	sortSetItems: function(skills, set, para) {
		var get = ItemManager.get;
		set.items.sort(function(a, b) {
			return this.getValue(skills, get(b), para) - this.getValue(skills, get(a), para);
		});
	},
	weapon: "shot", //UPRAVIT
	filterWeapons: function(items) { //len konkretna zbran
		var weapons = [];
		var toDelete;
		var tailcombs;
		for (var a = 0; a < items.length; a++) {
			var getItem = ItemManager.get(items[a]);
			if (getItem.type === "right_arm") weapons.push(items[a]);
			if (getItem.type === "right_arm" && getItem.sub_type !== this.weapon) toDelete = items[a];
		}
		if (!weapons.length || weapons.length < 2) return items;
		tailcombs = items.filter(function(id) {
			return id !== toDelete
		});
		return tailcombs;
	},
	createSubsets: function(fullSets, bestItems, skills, para, useApproximation) {
		var i, sets = [],
			set, j, permutations, k, l, tmpSet;
		for (i = 0; i < fullSets.length; i++) {
			set = fullSets[i];
			if (useApproximation && para !== "ms") this.sortSetItems(skills, set, para);
			for (j = set.items.length; j > 0; j--) {
				if (!set.bonus.hasOwnProperty(j)) continue;
				var filtered = this.filterWeapons(set.items);
				if (useApproximation && para !== "ms") permutations = [set.items.slice(0, j)];
				else permutations = this.createCombinations(filtered, j);
				for (k = 0, l = permutations.length; k < l; k++) {
					if (!this.itemsCombineable(permutations[k])) continue;
					tmpSet = new west.item.ItemSet({
						key: set.key,
						items: permutations[k],
						bonus: set.bonus
					});
					if (!this.beatsBestItems(tmpSet, bestItems, skills, para)) continue;
					sets.push(tmpSet);
				}
			}
		}
		return sets;
	},
	filterUneffectiveSets: function(sets, skills, para) { //5
		var r = [],
			i, bestBySlots = {},
			slots, setValue, value;
		var speedBoni = 0,
			rideBoni = 0;
		for (i = 0; i < sets.length; i++) {
			switch (para) {
				case "ms":
					var getVal = this.getSetValue({
						"speed": 1,
						"ride": 1
					}, sets[i], para, true);
					speedBoni = (getVal.speed || 0);
					rideBoni = (getVal.ride || 0);
					setValue = this.calcSpeed([rideBoni, speedBoni]);
					break;
				default:
					setValue = this.getSetValue(skills, sets[i], para);
					break;
			}
			if (setValue < 1) continue;
			slots = JSON.stringify(sets[i].getUsedSlots().sort());
			if (!bestBySlots[slots]) {
				bestBySlots[slots] = sets[i];
			} else {
				value = this.getValue4Set(skills, sets[i], para);
				if (this.getValue4Set(skills, bestBySlots[slots], para) < value) bestBySlots[slots] = sets[i];
			}
		}
		for (i in bestBySlots) {
			r.push(bestBySlots[i]);
		}
		return r;
	},
};
})(window);
