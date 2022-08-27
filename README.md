# Waywarrrd! (Pirate Language)
A piratey language translation. Yaarrrgh! Uses the language translation .json format.

## Workflow
The following style/replacement guide is used when making replacements to the standard "English" language file. Spaces and case are important; make sure to copy and paste the full line with case matching (unless otherwise noted).

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

you, 
ye, 

you.
ye.

hello there
ahoy

Hello there
Ahoy

Aberrant 
Bilge-sucking 

an aberrant 
a bilge-sucking 

aberrant 
bilge-sucking 

 aberrant
 bilge-sucking

 Aberrant
 Bilge-sucking

To 
T' 

 to 
 t' 

The 
Th' 

 the 
 th' 

:the 
:th' 

%the 
%th' 

 of 
 o' 

of 
o' 

"Quitting
"Abortin'

"Quit"
"Abort"

quit 
abort 

Quit 
Abort 

 Quit
 Abort

[(?<=in)]g(?!":|[a-z0-9]|\}|\))
n'
* Don't match case.

#--COLOR-WARNIn'
#--COLOR-WARNING

[(?<=in)]g(?!":|[a-z0-9]|\})
n'
* Don't match case. Don't replace variables.

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

Treasure...
Booty...

Are 
Be 

 are 
 be 

 are
 be
* Not area/areas.

 is 
 be 

 is.
 be.

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

 for!
 fer!

 my 
 me 

My 
Me 

Find 
Come across 

find 
come across 
* Not always, sometimes doesn't make sense.

 any 
 some godforsaken 
* Not always, sometimes doesn't make sense (like any o').

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

 Never 
 Ne'er 

 around
 aroun'

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

chicken egg"(?!:)
cackle fruit"

 chicken egg
 cackle fruit

 chicken's egg
 cackle's fruit

chicken"(?!:)
cackle"

 chicken
 cackle

 ghosts
 dredgies

 ghost
 dredgie
* Not "ghostly".

picked up
looted

Pick Up
Loot

pick up
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
* Make sure to replace all

sandstone 
holystone 

sandstone"(?!:)
holystone"

 sandstone
 holystone

?"
, savvy?"
* Not always. Usually starting with Would/Do/Be.
```

Use textdiff to get unchanged lines to remove from the final .json file. [Diff Checker](https://www.prepostseo.com/diff-checker) can be used. Use the following JavaScript to get the unchanged lines:
```
var equalRows = document.getElementsByClassName('ChangeEqual');
for (var i = equalRows.length - 1; i >= 0; i--) {
	equalRows[i].remove();
}
var leftRows = document.getElementsByClassName('Left');
for (var i = leftRows.length - 1; i >= 0; i--) {
	leftRows[i].remove();
}
var thRows = document.getElementsByTagName('TH');
for (var i = thRows.length - 1; i >= 0; i--) {
	thRows[i].remove();
}
```

*Be careful around the formatting of "statusEffect".

## Cloning:
```
git clone https://github.com/WaywardGame/piratelanguage.git
cd piratelanguage
```

## Steam Workshop
[https://steamcommunity.com/sharedfiles/filedetails/?id=631428133](https://steamcommunity.com/sharedfiles/filedetails/?id=631428133)

## Screenshots
![Waywarrrd! (Pirate Language)](https://raw.githubusercontent.com/WaywardGame/piratelanguage/master/mod.png "Waywarrrd! (Pirate Language)")

![Screenshot #1](https://steamuserimages-a.akamaihd.net/ugc/939433370341323325/F2FE99BECD28C11DCFCFA3C502F8A5F0418E5B09/ "Screenshot #1")

![Screenshot #2](https://steamuserimages-a.akamaihd.net/ugc/939433370341323504/84626E611E353CAE13C046CD7038D8B1004CB41C/ "Screenshot #2")

![Screenshot #3](https://steamuserimages-a.akamaihd.net/ugc/939433370341323774/E7F8E14BF2C4A983E5CA4D94FBB605A2CE84F3A4/ "Screenshot #3")
