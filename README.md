# Waywarrrd! (Pirate Language)
A piratey language translation. Yaarrrgh! Uses the language translation .json format.

## Workflow
The following style/replacement guide is used when making replacements to the standard "English" language file. Spaces and case are important; make sure to copy and paste the full line.

```
 Yourself
 Yerself

 yourself
 yerself

Your 
Yer 

 your
 yer

your 
yer 

You Died
Ye Be Shark Bait

You died
Ye be shark bait,

You 
Ye 

you 
ye 

 you
 ye
* Not youth/you're/you've

To 
T' 

 to 
 t' 

The 
Th' 

 the 
 th' 

 of 
 o' 

"Quitting
"Abortin'

[(?<=in)]g(?!":|[a-z0-9]|})
n'
* Don't replace variables in notes. Not "dig". Don't match case.

Treasure"(?!:)
Booty"

Treasure 
Booty 

treasure"(?!:)
booty"

treasure 
booty 
* But not when referring to treasure chest/treasure map.

 treasure
 booty
* Not plural, not when referring to treasure chest/treasure map.

Are 
Be 

 are 
 be 

 are
 be
* Not area/areas.

 is 
 be 

There 
Thar 

there 
thar 

 there
 thar

where 
whar 

For 
Fer 

 for 
 fer 

for.
fer.

 my 
 me 

Find 
Come across 

find 
come across 
* Not always, sometimes doesn't make sense.

 any 
 some godforsaken 
* Not always, sometimes doesn't make sense.

Inventory"(?!:)
Duffle"

"Inventory\n
"Duffle\n

 inventory
 duffle

 riches
 swag

 never
 ne'er

 around
 aroun'

Left 
Port 

 left 
 port 
* Not always - just with hands.

left 
port 
* Not always - just with hands.

Right 
Starboard 

 right 
 starboard 
* Not always - just with hands.

right 
starboard 
* Not always - just with hands.

Left"(?!:)
West"

Right"(?!:)
East"

Down"(?!:)
South"
* Just face/move/selection.

Up"(?!:)
North"
* Just face/move/selection.

eggs
cackle fruit
* Not spider eggs.

egg"(?!:)
cackle fruit"

 egg
 cackle fruit
* Not spider eggs.

chicken"(?!:)
cackle"

 chicken
 cackle

 ghost
 dredgie
* Not always.

picked up
looted

Pick-up
Loot

pick-up
loot

pick up
loot

good men
hearties

gold coins
dubloons

quickly
smartly

quicker
smarter

quick!
smart!

 stopped
 belayed

stop 
belay 

Stop 
Belay 

 depths
 briny depths

Quit 
Abort 

sandstone 
holystone 

sandstone"(?!:)
holystone"

 sandstone
 holystone

?
, savvy?
* Not always.
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

![Screenshot #1](https://steamuserimages-a.akamaihd.net/ugc/939433370341323325/F2FE99BECD28C11DCFCFA3C502F8A5F0418E5B09/ "Screenshot #1")

![Screenshot #2](https://steamuserimages-a.akamaihd.net/ugc/939433370341323504/84626E611E353CAE13C046CD7038D8B1004CB41C/ "Screenshot #2")

![Screenshot #3](https://steamuserimages-a.akamaihd.net/ugc/939433370341323774/E7F8E14BF2C4A983E5CA4D94FBB605A2CE84F3A4/ "Screenshot #3")
