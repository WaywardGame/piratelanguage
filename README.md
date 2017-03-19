# Waywarrrd! (Pirate Language)
A piratey language translation. Yaarrrgh! Uses the language translation .json format.

## Workflow
The following style/replacement guide is used when making replacements to the standard "English" language file. "_" are spaces for use when searching the strings.

```
_Yourself / _yourself = _Yerself / _yerself
Your_ / _your / your_ = Yer_ / _yer / yer_
You_ / you_ = Ye_ / ye_
To_ / _to_ = T' / _t'_
The_ / _the_ = Th'_ / _th'_
_of_ = _o'_
ing_ / ing. / ing"(?!:) / ing! = in'_ / in'. / in'" / in'! (be careful to not replace: kindling, sling, swing, flooring, string, ring, bring, sapling, being, spring, bogling, warning, bedding)
treasure = booty (but not when referring to treasure chest/treasure map/singular treasure)
_Are_ / _are_ / _are (not area/areas) = _Be_ / _be_ / _be
_is_ = be
There_ / there_ / _there = Thar_ / thar_ / _thar
where_ = whar_
For_ / _for_ / for. = Fer_ / _fer_ / fer.
find = come across (not always, sometimes doesn't make sense)
_any_ = _some godforsaken_ (doesn't work all the time)
Inventory"(?!:) / _Inventory / _inventory = Duffle" / _Duffle / _duffle
_riches = _swag
_never = _ne'er
_around = _aroun'
Left_ / left_ = Port_ / port_ (not always - just with hands)
Right_ / _right_ = Starboard_ / _starboard_ (not always - just with hands)
eggs"(?!:) / _eggs / egg"(?!:) / _egg = cackle fruit" / _cackle fruit / cackle fruit" / _cackle fruit (not spider eggs)
chicken"(?!:) / _chicken = cackle" /_cackle
_ghost = _dredgie
picked up = looted
Pick-up / pick-up / pick up = Loot / loot / loot
good men = hearties
Ye Died / Ye died = Ye Be Shark Bait / Ye be shark bait
gold coins = dubloons
quickly / quicker / quick! = smartly
_stopped = _belayed
stops = belays
stop_ = belay_
_depths = _briny depths
Quit_ = Abort_
Quittin' = Abortin'
sandstone_ / sandstone"(?!:) = holystone_ / holystone"
? = , savvy?
Yes = Aye
```

Use textdiff to get unchanged lines to remove from the final .json file. [Diff Checker](https://www.diffchecker.com/) can be used. Use the following JavaScript to get the unchanged lines:
```
var rows = document.getElementsByClassName('diff-row');
for (var i = 0; i < rows.length; i++) {
	rows[i].children[0].remove();
	rows[i].children[0].remove();
	rows[i].children[0].remove();
}
var equalRows = document.getElementsByClassName('diff-row');
for (var i = 0; i < equalRows.length; i++) {
	if (!equalRows[i].children[0].classList.contains('diff-line-modified')) {
		equalRows[i].remove();
		i--;
	}
}
```

## Cloning:
```
git clone https://github.com/WaywardGame/piratelanguage.git
cd piratelanguage
```

## Steam Workshop
[http://steamcommunity.com/sharedfiles/filedetails/?id=631428133](http://steamcommunity.com/sharedfiles/filedetails/?id=631428133)

## Screenshots
![Waywarrrd! (Pirate Language)](https://raw.githubusercontent.com/WaywardGame/piratelanguage/master/mod.png "Waywarrrd! (Pirate Language)")

![Screenshot #1](http://images.akamai.steamusercontent.com/ugc/499142450981214176/E909D6C47481EAFFFA4CBD957093861526812BEB/ "Screenshot #1")

![Screenshot #2](http://images.akamai.steamusercontent.com/ugc/499142450981180009/5A433F5E3465F5C1B9F37846A1C4EB9B1508D156/ "Screenshot #2")

![Screenshot #3](http://images.akamai.steamusercontent.com/ugc/499142450981180400/CAE6F145D32E71F5CBA5F4627DE35776ABD0A9F1/ "Screenshot #3")

