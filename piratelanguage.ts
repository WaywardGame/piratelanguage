﻿/// <reference path="mod-reference/modreference.d.ts"/>

/*
	Piratey style guide:

	your = yer
	you = ye
	to = t'
	the = th'
	of = o'
	ing = in' (be careful - no kindling, sling, swing, ring, string, bring, beginning)
	treasure = booty (but no treasure chest/treasure map)
	are = be
	is = be
	there = thar
	where = whar
	for = fer
	find = come across (not always, sometimes doesn't make sense)
	found = came across
	any = some godforsaken (doesn't work all the time)
	inventory = duffle
	riches = swag
	never = ne'er
	around = aroun'
	left = port (not always)
	right = starboard (not always)
	eggs = cackle fruit
	chicken = cackle
	ghost = dredgie
	picked up = looted
	pick up = loot
	pick-up = loot
	good men = hearties
	you died = ye be shark bait (some)
	gold coins = dubloon
	quickly = smartly
	quicker = smartly
	quick = smartly
	stopped = belayed
	stop = belay
	depths = briny depths
	quit = abort

	not used, other ideas:
	! = use blimey, avast (for stopping), or arrr (for yes)
	? = Savvy?

	Use textdiff: https://www.diffchecker.com/

	var rows = document.getElementsByClassName('diff-row');
	for (var i = 0; i < rows.length; i++) {
		rows[i].children[0].remove();
		rows[i].children[0].remove();
		rows[i].children[0].remove();
	}

	var equalRows = document.getElementsByClassName('diff-line-equal');
	while (equalRows[0]) {
		equalRows[0].parentNode.removeChild(equalRows[0]);
	}
*/

class Mod extends Mods.Mod {
	public onInitialize(): void {
		var pirateLanguage = new Languages.Language("Waywarrrd! (Pirate Language)");

		pirateLanguage.ui(Languages.UiTranslation.EquipmentLeftHand, "Port Hand (Held)");
		pirateLanguage.ui(Languages.UiTranslation.EquipmentRightHand, "Starboard Hand (Held)");
		pirateLanguage.ui(Languages.UiTranslation.HudInventory, "Duffle");
		pirateLanguage.ui(Languages.UiTranslation.MenuAboutIntro, "Wayward be a turn-based, top-down, wilderness survival roguelike currently in beta. It's brought t' ye by these fine folk:");
		pirateLanguage.ui(Languages.UiTranslation.MenuEndGameDead, "Ye Are Shark Bait");
		pirateLanguage.ui(Languages.UiTranslation.MenuEndGameWon, "Ye Won");
		pirateLanguage.ui(Languages.UiTranslation.MenuManageModsMessage, "Open Steam Workshop t' install mods");
		pirateLanguage.ui(Languages.UiTranslation.MenuNoMods, "Ye have no mods installed");
		pirateLanguage.ui(Languages.UiTranslation.MenuOptionsMessage, "Change yer game settings");
		pirateLanguage.ui(Languages.UiTranslation.MenuQuitGame, "Abort Game");
		pirateLanguage.ui(Languages.UiTranslation.OptionsAutoPickup, "Auto Loot");
		pirateLanguage.ui(Languages.UiTranslation.OptionsKeyBindRebinding, "Press some godforsaken key...");
		pirateLanguage.ui(Languages.UiTranslation.ReturnToTitleScreen, "Return t' Title Screen");
		pirateLanguage.ui(Languages.UiTranslation.WindowTitleInventory, "Duffle");

		pirateLanguage.message(Message.AberrantCreatureDroppedItem, "Mysteriously, th' aberrant creature dropped _0_.");
		pirateLanguage.message(Message.AboutHours, "It appeared ye have _0_ fer about _1_ _2_.");
		pirateLanguage.message(Message.AddedFuelToFire, "Ye added th' fuel t' th' fire! Th' fire grows stronger.");
		pirateLanguage.message(Message.AddedFuelToTorch, "Ye added th' fuel t' th' torch.");
		pirateLanguage.message(Message.AddToQuickslot, "Add t' Quickslot");
		pirateLanguage.message(Message.AlreadyFullyRepaired, "_0_ be already fully repaired.");
		pirateLanguage.message(Message.AlreadyWaterInStill, "Thar  be already water in this still!");
		pirateLanguage.message(Message.AppearsToBeDawn, "It appears t' be dawn.");
		pirateLanguage.message(Message.AppearsToBeDusk, "It appears t' be dusk.");
		pirateLanguage.message(Message.AppearsToBeMidDay, "It appears t' be mid day.");
		pirateLanguage.message(Message.AppearsToBeNight, "It appears t' be night.");
		pirateLanguage.message(Message.AreYouSureYouWantToSail, "Be ye sure ye want t' sail t' civilization? Yer journey will be over, but ye can always return back t' these lands.");
		pirateLanguage.message(Message.ArmorAppearedResistant, "Yer armor appeared t' be resistant t' th' attack.");
		pirateLanguage.message(Message.ArmorAppearedVulnerable, "Yer armor appeared t' be vulnerable t' th' attack.");
		pirateLanguage.message(Message.ArmorProtectedFromInjuryAgainst, "Yer armor protected ye from injury against th' _0_.");
		pirateLanguage.message(Message.AttemptedToDropAllIntoFire, "Ye attempted t' drop all o' _0_ into th' fire.");
		pirateLanguage.message(Message.AttemptToPlaceAllOnGround, "Ye attempted t' place all o' _0_ on th' ground.");
		pirateLanguage.message(Message.AutomaticallySavingGame, "Automatically savin' yer game...");
		pirateLanguage.message(Message.AwakeToFindYourself, "Ye awake t' find yerself no longer in th' company o' hearties or a fine seafarin' vessel. Instead ye discover yerself in tattered clothing, with a pocket full o' shoddy items. Booty... ye remember somethin' about booty.");
		pirateLanguage.message(Message.BadlyBurnedLostHealth, "Ye have been badly burned! Ye have lost _0_ health!");
		pirateLanguage.message(Message.BecomingMoreAgile, "Ye felt yerself becomin' more agile!");
		pirateLanguage.message(Message.BeginSleeping, "Ye begin sleepin'...");
		pirateLanguage.message(Message.BeginUsingRaft, "Ye begin usin' a raft.");
		pirateLanguage.message(Message.BleedingHasStopped, "Th' bleedin' has belayed!");
		pirateLanguage.message(Message.BleedingProfusely, "Ye start bleedin' profusely!");
		pirateLanguage.message(Message.BleedingToDeathLostHealth, "Ye be bleedin' t' death! Ye have lost _0_ health!");
		pirateLanguage.message(Message.BrokenWhileFiring, "_0_ has broken while firin'!");
		pirateLanguage.message(Message.BurningToDeath, "burnin' t' death");
		pirateLanguage.message(Message.ByBleedingOut, "by bleedin' out");
		pirateLanguage.message(Message.ByEatingSomethingBad, "by eatin' somethin' bad fer you");
		pirateLanguage.message(Message.BySteppingOnA, "by steppin' on a ");
		pirateLanguage.message(Message.BySteppingOnTrap, "by steppin' on a trap");
		pirateLanguage.message(Message.CannotBuildHere, "Ye cannot build _0_ here!");
		pirateLanguage.message(Message.CannotCraftHere, "Ye cannot craft here.");
		pirateLanguage.message(Message.CannotDigHere, "Ye cannot dig here!");
		pirateLanguage.message(Message.CannotDropHere, "Ye cannot drop _0_ here!");
		pirateLanguage.message(Message.CannotEquipThatThere, "Ye cannot equip that thar!");
		pirateLanguage.message(Message.CannotFishFor, "Ye cannot fish fer _0_.");
		pirateLanguage.message(Message.CannotGatherFromWhileOnFire, "Ye cannot gather from that while it be on fire!");
		pirateLanguage.message(Message.CannotGatherHere, "Ye cannot gather anythin' here.");
		pirateLanguage.message(Message.CannotImproveGrowingSpeed, "Ye cannot improve th' growin' speed o' this plant any further.");
		pirateLanguage.message(Message.CannotPickupWhenFull, "Ye cannot pick this up while it be full o' water.");
		pirateLanguage.message(Message.CannotPickUpWhileLit, "Ye cannot pick this up while it be lit.");
		pirateLanguage.message(Message.CannotPickUpWithItemsInside, "Ye cannot pick this up with items inside!");
		pirateLanguage.message(Message.CannotPlaceContainerInItself, "Ye cannot place a container inside itself.");
		pirateLanguage.message(Message.CannotPlaceHere, "Ye cannot place a _0_ here!");
		pirateLanguage.message(Message.CannotPlaceThatFromHere, "Ye cannot place that from here.");
		pirateLanguage.message(Message.CannotPlaceThatHere, "Ye cannot place that here.");
		pirateLanguage.message(Message.CannotPlantHere, "Ye cannot plant a _0_ here!");
		pirateLanguage.message(Message.CannotRestHere, "Ye cannot rest here.");
		pirateLanguage.message(Message.CannotSeeHere, "Ye cannot see anythin' here.");
		pirateLanguage.message(Message.CannotSleepHere, "Ye cannot sleep here.");
		pirateLanguage.message(Message.CannotStartFireHere, "Ye cannot start a fire here!");
		pirateLanguage.message(Message.CarryingTooMuchWeight, "Ye be carryin' too much weight!");
		pirateLanguage.message(Message.CarvedUpCorpse, "Ye carved and hacked up th' corpse.");
		pirateLanguage.message(Message.CastYourLine, "Ye cast yer line out _0_ spaces.");
		pirateLanguage.message(Message.CaughtFish, "Ye caught a _0_!");
		pirateLanguage.message(Message.CouldNotDecipher, "Ye could not decipher th' map.");
		pirateLanguage.message(Message.CreatureAppearsHealthy, "Th' creature appears t' be healthy.");
		pirateLanguage.message(Message.CreatureAppearsUnhealthy, "Th' creature appears t' be unhealthy.");
		pirateLanguage.message(Message.CreatureIsAtPercentHealth, "Th' creature be at _0_% health.");
		pirateLanguage.message(Message.CreatureLooksBarelyHurt, "Th' creature looks barely hurt.");
		pirateLanguage.message(Message.CreatureLooksHealthyAndUndamaged, "Th' creature looks healthy and fairly undamaged.");
		pirateLanguage.message(Message.CreatureLooksInjured, "Th' creature looks injured.");
		pirateLanguage.message(Message.CreatureLooksSeverelyDamaged, "Th' creature looks severely damaged.");
		pirateLanguage.message(Message.CreatureSeemsHurt, "Th' creature seems hurt.");
		pirateLanguage.message(Message.CreatureSeemsInjured, "Th' creature seems very injured.");
		pirateLanguage.message(Message.CreatureSeemsUnimpaired, "Th' creature seems unimpaired.");
		pirateLanguage.message(Message.CuredYourPoison, "Ye have cured yer poison!");
		pirateLanguage.message(Message.DamageAppearedEffective, "_0_ damage appeared t' be effective.");
		pirateLanguage.message(Message.DamageAppearedIneffective, "_0_ damage appeared t' be ineffective.");
		pirateLanguage.message(Message.DamagedByPouringWater, "Ye damaged _0_ by pourin' out th' water.");
		pirateLanguage.message(Message.DealtNoDamageToYou, "_0_ has dealt no damage t' ye.");
		pirateLanguage.message(Message.DestroyedGrowingByPickingItUp, "Ye destroyed th' growin' _0_ by tryin' t' pick it up!");
		pirateLanguage.message(Message.DidNotSeemToBeHurting, "_0_ did not seem t' be hurtin' _1_.");
		pirateLanguage.message(Message.DiscoveredCaveEntrance, "Ye have discovered a cave entrance!");
		pirateLanguage.message(Message.DiscoveredInTheBottle, "Ye have discovered _0_ in th' bottle!");
		pirateLanguage.message(Message.DoNotForgetToAddRequiredModsOnWorkshop, "Don't forget t' add th' required mods on th' Steam Workshop page!");
		pirateLanguage.message(Message.DoNotHaveTreasureMaps, "Ye do not have some godforsaken treasure maps!");
		pirateLanguage.message(Message.DrewSurroundings, "Ye drew yer surroundings.");
		pirateLanguage.message(Message.DropAllOfSameQuality, "Drop All o' th' Same Quality");
		pirateLanguage.message(Message.DroppedAllIntoDepths, "Ye dropped all o' _0_ into th' briny depths below.");
		pirateLanguage.message(Message.DroppedIntoDepths, "Ye dropped _0_ into th' briny depths below.");
		pirateLanguage.message(Message.DroppedIntoFire, "Ye dropped _0_ into th' fire.");
		pirateLanguage.message(Message.DueToDehydration, "due t' dehydration");
		pirateLanguage.message(Message.DueToStarvation, "due t' starvation");
		pirateLanguage.message(Message.DugTreasureOut, "Ye dug th' booty out.");
		pirateLanguage.message(Message.DumpContentsOfContainerInInventory, "Ye dump th' contents o' th' container into yer duffle!");
		pirateLanguage.message(Message.DyingOfDehydration, "Ye be dyin' o' dehydration!");
		pirateLanguage.message(Message.EarnedMilestone, "Ye have earned th' milestone, _0_! _1_");
		pirateLanguage.message(Message.EquipmentProtectedYouFromHeat, "Th' flames engulf you, but yer equipment protected ye from th' heat.");
		pirateLanguage.message(Message.EquipTo, "Equip t' ");
		pirateLanguage.message(Message.ExtinguishedFire, "Ye extinguished th' fire.");
		pirateLanguage.message(Message.ExtinguishedTorch, "Ye extinguished th' torch.");
		pirateLanguage.message(Message.FailedToAddFuelToTorch, "Ye failed t' add th' fuel t' th' torch properly.");
		pirateLanguage.message(Message.FailedToCatchFish, "Ye failed t' catch th' fish!");
		pirateLanguage.message(Message.FailedToCauseDamage, "Ye failed t' cause some godforsaken damage t' _0_ with _1_! _2_");
		pirateLanguage.message(Message.FailedToDrawMap, "Ye failed t' draw th' map.");
		pirateLanguage.message(Message.FailedToPickLock, "Ye failed t' pick th' lock.");
		pirateLanguage.message(Message.FailedToPlant, "Ye failed t' plant _0_ in th' ground.");
		pirateLanguage.message(Message.FailedToPreserve, "Ye failed t' preserve th' food.");
		pirateLanguage.message(Message.FailedToReinforce, "Ye failed t' reinforce _0_.");
		pirateLanguage.message(Message.FailedToRepair, "Ye failed t' repair _0_.");
		pirateLanguage.message(Message.FailedToStartFire, "Ye failed t' start a fire!");
		pirateLanguage.message(Message.FailedToTransmogrify, "Ye failed t' transmogrify _0_.");
		pirateLanguage.message(Message.FarAwayFromTreasure, "Ye be far away from th' booty.");
		pirateLanguage.message(Message.FeltBurningPainLostHealth, "Ye felt burnin' pain! Ye have lost _0_ health!");
		pirateLanguage.message(Message.FewMinutes, "It appeared ye _0_ fer a few minutes.");
		pirateLanguage.message(Message.Filled, "Ye filled _0_.");
		pirateLanguage.message(Message.FinalizingWorld, "Finalizin' World");
		pirateLanguage.message(Message.FireAlmostExtinguished, "Th' fire be almost extinguished.");
		pirateLanguage.message(Message.FiredIntoObstacle, "Ye fired _0_ into an obstacle.");
		pirateLanguage.message(Message.FireFacingYouIsWarm, "Th' fire facin' ye be warm and comfortin'.");
		pirateLanguage.message(Message.FireIsHealthy, "Th' fire be very healthy.");
		pirateLanguage.message(Message.FireIsRaging, "Th' fire be ragin'!");
		pirateLanguage.message(Message.FireIsStruggling, "Th' fire be strugglin'.");
		pirateLanguage.message(Message.FirstQuarterOfDay, "It be currently in th' first quarter o' th' day.");
		pirateLanguage.message(Message.FirstQuarterOfNight, "It be currently in th' first quarter o' th' night.");
		pirateLanguage.message(Message.FoodAlreadyPreserved, "This food be already well preserved.");
		pirateLanguage.message(Message.FourthQuarterOfDay, "It be currently in th' fourth quarter o' th' day.");
		pirateLanguage.message(Message.FourthQuarterOfNight, "It be currently in th' fourth quarter o' th' night.");
		pirateLanguage.message(Message.FullyDecodedMap, "Ye fully decoded th' map!");
		pirateLanguage.message(Message.GainedHealth, "Ye have gained _0_ health.");
		pirateLanguage.message(Message.GainedHunger, "Ye have gained _0_ hunger.");
		pirateLanguage.message(Message.GainedStamina, "Ye have gained _0_ stamina.");
		pirateLanguage.message(Message.GainedThirst, "Ye have gained _0_ thirst.");
		pirateLanguage.message(Message.GameHasBeenSavedIsTakingUpMB, "Yer game has been saved! Yer game save be takin' up _0_MB.");
		pirateLanguage.message(Message.GeneratingWorld, "Generatin' World");
		pirateLanguage.message(Message.GettingStronger, "Ye felt yerself gettin' stronger!");
		pirateLanguage.message(Message.HasBeenHurtByYourTrap, "_0_ has been hurt by yer trap!");
		pirateLanguage.message(Message.HasDecayed, "Yer _0_ has decayed.");
		pirateLanguage.message(Message.HasHitYouForDamage, "_0_ has hit ye fer _1_ damage! _2_");
		pirateLanguage.message(Message.HitForDamage, "Ye hit _0_ fer _1_ damage with _2_! _3_");
		pirateLanguage.message(Message.HowDoYouWantToExportSave, "How do ye want t' export this save?");
		pirateLanguage.message(Message.HurtHandsByGatheringWithNoTool, "Ye hurt yer hands by gatherin' with no tool.");
		pirateLanguage.message(Message.HurtHandsHittingWithoutWeapons, "Ye hurt yer hands hittin' _0_ without some godforsaken weapons!");
		pirateLanguage.message(Message.InExactLocationOfTreasure, "Ye be in th' exact location o' whar th' booty be buried.");
		pirateLanguage.message(Message.InjuredFromTrap, "Ye have been injured from a trap!");
		pirateLanguage.message(Message.InNeedOfRepair, "_0_ be in need o' repair.");
		pirateLanguage.message(Message.Inventory, "Duffle");
		pirateLanguage.message(Message.LabelLeftHandAttack, "Port Hand Attack:");
		pirateLanguage.message(Message.LabelPiercingResist, "Piercin' Resist:");
		pirateLanguage.message(Message.LabelRightHandAttack, "Starboard Hand Attack:");
		pirateLanguage.message(Message.LabelSlashingResist, "Slashin' Resist:");
		pirateLanguage.message(Message.LastPlaceYouLeftOff, "Ye awake t' discover yerself in th' last place ye left off...");
		pirateLanguage.message(Message.LearnedHowToCreate, "Ye have learned how t' create _0_!");
		pirateLanguage.message(Message.LeftHand, "Port Hand (Held)");
		pirateLanguage.message(Message.LoadingMods, "Loadin' Mods");
		pirateLanguage.message(Message.LoadingSprites, "Loadin' Sprites");
		pirateLanguage.message(Message.LocalVersionOfModDetected, "A local version o' this mod has been detected. Th' Workshop version will not load.");
		pirateLanguage.message(Message.LoseBonesLayBleaching, "Yer bones lay bleaching, lost t' time.");
		pirateLanguage.message(Message.LoseEndIsBeginning, "Th' end be just th' beginnin'.");
		pirateLanguage.message(Message.LoseSadlyNoTrace, "Sadly, no trace o' ye was ever came across.");
		pirateLanguage.message(Message.LostHealth, "Ye have lost _0_ health.");
		pirateLanguage.message(Message.LostHunger, "Ye have lost _0_ hunger.");
		pirateLanguage.message(Message.LostStamina, "Ye have lost _0_ stamina.");
		pirateLanguage.message(Message.LostThirst, "Ye have lost _0_ thirst.");
		pirateLanguage.message(Message.MapNotOfThisArea, "This map be not o' this area.");
		pirateLanguage.message(Message.MetabolismSlowed, "Yer metabolism has slowed!");
		pirateLanguage.message(Message.MilestoneIsHidden, "This milestone be hidden.");
		pirateLanguage.message(Message.MilestoneIsInvisible, "This milestone be invisible.");
		pirateLanguage.message(Message.MissedWith, "Ye missed _0_ with _1_!");
		pirateLanguage.message(Message.MissingRequiredMods, "Ye be missin' one or more required mods.");
		pirateLanguage.message(Message.ModWithNameAlreadyExists, "A mod with that name already exists. Try changin' th' name o' th' slot.");
		pirateLanguage.message(Message.MonsterIdolAttractedCreature, "Th' monster idol attracted another creature.");
		pirateLanguage.message(Message.MoveAllOfSameQualityToInventory, "Move All o' Same Quality t' Duffle");
		pirateLanguage.message(Message.MoveAllOfSameQualityToOpenedContainer, "Move All o' Same Quality t' Opened Container");
		pirateLanguage.message(Message.MoveAllToInventory, "Move All t' Duffle");
		pirateLanguage.message(Message.MoveAllToOpenedContainer, "Move All t' Opened Container");
		pirateLanguage.message(Message.MoveOverTrapButDoNotSetOff, "Ye move over th' trap, but do not set it off.");
		pirateLanguage.message(Message.MoveToInventory, "Move t' Duffle");
		pirateLanguage.message(Message.MoveToOpenedContainer, "Move t' Opened Container");
		pirateLanguage.message(Message.MustCastIntoWater, "Ye must cast this into water t' catch anythin'.");
		pirateLanguage.message(Message.NeedAShovelToDigTreasure, "Ye need a shovel t' be able t' dig up this booty.");
		pirateLanguage.message(Message.NeedDeeperWaterForRaft, "Ye need t' be in deeper water t' use a raft.");
		pirateLanguage.message(Message.NeedFishingNetForTreasure, "Ye need a fishin' net t' be able t' get this booty.");
		pirateLanguage.message(Message.NeedToBuildUpLandAround, "Ye need t' build up th' land aroun' this water before placin' this here.");
		pirateLanguage.message(Message.NeedToEquipToShoot, "Ye need t' equip this t' shoot from it!");
		pirateLanguage.message(Message.NeedToStartTravelsOutside, "Ye need t' start yer travels outside.");
		pirateLanguage.message(Message.NoAmmunitionForThatWeapon, "Ye do not have some godforsaken ammunition fer that weapon in yer duffle!");
		pirateLanguage.message(Message.NoBlackPowderToFireWeapon, "Ye do not have some godforsaken Black Powder t' fire this weapon.");
		pirateLanguage.message(Message.NoFireToStokeWith, "Thar be no fire t' stoke with _0_ here!");
		pirateLanguage.message(Message.NoFishAtLocation, "Thar be no fish at this location!");
		pirateLanguage.message(Message.NoFuelItemsToStartFire, "Ye do not have some godforsaken fuel t' start th' fire.");
		pirateLanguage.message(Message.NoInkToDrawMap, "Ye do not have some godforsaken ink t' draw a map with!");
		pirateLanguage.message(Message.NoKindlingToStartFire, "Ye do not have some godforsaken Kindling t' start th' fire.");
		pirateLanguage.message(Message.NoLongerFeelPainOfBurning, "Ye no longer feel th' pain o' burnin'!");
		pirateLanguage.message(Message.NoMoreRoomInContainer, "Thar be no more room in this container fer that item.");
		pirateLanguage.message(Message.NoRoomToDrop, "Thar be no room t' drop that here!");
		pirateLanguage.message(Message.NotEnoughFoodToTravel, "Ye do not have enough _0_ t' attempt a long travel!");
		pirateLanguage.message(Message.NotEnoughPurifiedWaterYet, "Thar be not enough purified water available in th' still yet.");
		pirateLanguage.message(Message.NotEnoughStrengthToThrow, "Ye do not have enough strength t' throw this!");
		pirateLanguage.message(Message.NotEnoughTreasureToReturn, "Ye do not have enough booty t' return t' civilization.");
		pirateLanguage.message(Message.NotFacingLockedObject, "Ye be not facin' a locked object.");
		pirateLanguage.message(Message.NotFacingValidFoodForPreservation, "Ye be not facin' a valid food item fer preservation.");
		pirateLanguage.message(Message.NotFacingValidItemForReinforcement, "Ye be not facin' a valid item fer reinforcement.");
		pirateLanguage.message(Message.NotFacingValidItemForRepair, "Ye be not facin' a valid item fer repair.");
		pirateLanguage.message(Message.NotFacingValidItemToTransmogrify, "Ye be not facin' a valid item t' transmogrify.");
		pirateLanguage.message(Message.NothingHereToCarve, "Thar be nothin' here t' carve!");
		pirateLanguage.message(Message.NothingHereToFill, "Thar be nothin' here t' fill _0_.");
		pirateLanguage.message(Message.NothingHereToGardenWith, "Thar be nothin' here t' garden with _0_ here!");
		pirateLanguage.message(Message.NoTinderToStartFire, "Ye do not have some godforsaken Tinder t' start th' fire.");
		pirateLanguage.message(Message.NotInRangeOfTreasure, "Ye be not in th' range o' some godforsaken buried booty!");
		pirateLanguage.message(Message.NoWaterInStill, "Thar be no water in this still.");
		pirateLanguage.message(Message.NoWhereNearTreasure, "Ye be no whar near th' booty.");
		pirateLanguage.message(Message.ObjectIsLocked, "This object be locked.");
		pirateLanguage.message(Message.OverEatingLostStamina, "Ye be over-eatin'! Ye have lost 10 stamina.");
		pirateLanguage.message(Message.OverHydratingLostStamina, "Ye be over-hydratin'! Ye have lost 10 stamina.");
		pirateLanguage.message(Message.PaperTurnedToMush, "Th' wet piece o' paper turned t' mush as it was released from th' bottle.");
		pirateLanguage.message(Message.PartiallyDecodedMap, "Ye partially decoded th' map.");
		pirateLanguage.message(Message.PastExperiencesProvideBenefits, "Yer past experiences provide ye benefits fer survival.");
		pirateLanguage.message(Message.PickupItem, "Loot Item");
		pirateLanguage.message(Message.PickupObject, "Loot Object");
		pirateLanguage.message(Message.PlacedOnGround, "Ye placed _0_ on th' ground!");
		pirateLanguage.message(Message.PlantedInGround, "Ye planted _0_ in th' ground.");
		pirateLanguage.message(Message.PlantIsFertile, "Th' plant be fertile.");
		pirateLanguage.message(Message.PlantIsNotFertile, "Th' plant be not fertile.");
		pirateLanguage.message(Message.PlantVeryHealthy, "Th' plant be very healthy and fertile.");
		pirateLanguage.message(Message.Poisoned, "Ye have been poisoned!");
		pirateLanguage.message(Message.PoisonedLostHealth, "Ye be poisoned! Ye have lost _0_ health!");
		pirateLanguage.message(Message.PoisonWorkedItsCourse, "Th' poison has worked its course!");
		pirateLanguage.message(Message.PouredOutWater, "Ye poured out th' water.");
		pirateLanguage.message(Message.PouredWaterIntoStill, "Ye poured th' water into th' still.");
		pirateLanguage.message(Message.PreservedFood, "Ye preserved th' food.");
		pirateLanguage.message(Message.PublishingMod, "Publishin' Mod");
		pirateLanguage.message(Message.PurifiedWaterInStill, "Thar be purified water in th' still.");
		pirateLanguage.message(Message.RefreshingMods, "Refreshin' Mods");
		pirateLanguage.message(Message.Reinforce, "Ye reinforce _0_.");
		pirateLanguage.message(Message.RemovedBlood, "Ye removed th' blood.");
		pirateLanguage.message(Message.Repair, "Ye repair _0_.");
		pirateLanguage.message(Message.RequiredModsMissingWantToContinue, "One or more required mods be missin'. Unexpected results may occur. Be ye sure ye want t' continue?");
		pirateLanguage.message(Message.RequiredModsNotLoaded, "One or more required mods be not loaded.");
		pirateLanguage.message(Message.RequiresFacingFireSource, "This item requires ye t' be facin' a fire source in order t' light it.");
		pirateLanguage.message(Message.RequiresFireToBeLit, "This still requires a fire t' be lit underneath it t' begin purifyin' water.");
		pirateLanguage.message(Message.RequiresYouToBeFacingToCraft, "This item requires ye t' be facin' _0_ in order t' craft it.");
		pirateLanguage.message(Message.RestInterrupted, "Yer rest has been interrupted!");
		pirateLanguage.message(Message.ReturnedToCivilization, "Returned t' civilization!");
		pirateLanguage.message(Message.ReturningToCivilizationSetOffAgain, "After returnin' th' booty back t' civilization, ye set off again...");
		pirateLanguage.message(Message.ReturnToTitleScreenNoSaveInDailyChallenge, "Be ye sure ye want t' return t' th' title screen?<br />Note: Yer progress be not saved in Daily Challenge Mode.");
		pirateLanguage.message(Message.ReturnToTitleScreenProgressWillBeSaved, "Be ye sure ye want t' return t' th' title screen?<br />Note: Yer progress will be saved automatically.");
		pirateLanguage.message(Message.RightHand, "Starboard Hand (Held)");
		pirateLanguage.message(Message.SailedToCivilization, "Ye sailed t' civilization in this game.");
		pirateLanguage.message(Message.SavingGame, "Savin' Game");
		pirateLanguage.message(Message.ScrollProvidedNoUsefulInsight, "Ye be truly a master o' th' crafts. Th' scroll provided no useful insight fer ye.");
		pirateLanguage.message(Message.SeaweedFromWater, "Ye dragged a slimy mass o' seaweed up out o' th' water!");
		pirateLanguage.message(Message.SecondQuarterOfDay, "It be currently in th' second quarter o' th' day.");
		pirateLanguage.message(Message.SecondQuarterOfNight, "It be currently in th' second quarter o' th' night.");
		pirateLanguage.message(Message.SeeGrowing, "Ye see growin' _0_.");
		pirateLanguage.message(Message.SeemsToHaveDrawnEnergy, "_0_ seems t' have drawn energy from _1_!");
		pirateLanguage.message(Message.SetTrapOffButNoDamage, "Ye set th' trap off, but it does no damage t' ye.");
		pirateLanguage.message(Message.SetUp, "Ye have set up _0_.");
		pirateLanguage.message(Message.ShadowInTheWater, "Ye have seen a shadow in th' water.");
		pirateLanguage.message(Message.SkillHasRaised, "Yer skill in _0_ has raised t' _1_%!");
		pirateLanguage.message(Message.SleepInterrupted, "Yer sleep has been interrupted!");
		pirateLanguage.message(Message.SoilWouldHaveNoEffect, "Th' soil would have no effect on this plant.");
		pirateLanguage.message(Message.SomethingInTheWayOfCarving, "Thar be somethin' in th' way o' yer carvin'!");
		pirateLanguage.message(Message.SomethingInTheWayOfDigging, "Thar be somethin' in th' way o' yer diggin'!");
		pirateLanguage.message(Message.SomethingInTheWayOfDiggingCarveFirst, "Thar be somethin' in th' way o' yer diggin'. This must be carved first.");
		pirateLanguage.message(Message.SomethingInTheWayOfFishing, "Thar be somethin' in th' way. Ye cannot fish past that!");
		pirateLanguage.message(Message.SomethingInTheWayOfPlacing, "Thar be somethin' in th' way o' placin' this.");
		pirateLanguage.message(Message.SoothedYourBurningPain, "Ye have soothed yer burnin' pain!");
		pirateLanguage.message(Message.StaminaIsFull, "Yer stamina be full, ye do not need t' rest any more.");
		pirateLanguage.message(Message.StartedFire, "Ye have started a fire!");
		pirateLanguage.message(Message.StartTravelInWater, "Ye need t' start yer travels while in ocean water.");
		pirateLanguage.message(Message.StarvingToDeath, "Ye be starvin' t' death!");
		pirateLanguage.message(Message.SteppingOnHasInjuredYouForDamage, "Steppin' on th' _0_ has injured ye fer _1_ damage!");
		pirateLanguage.message(Message.StillHasNoWaterToPurify, "This still has no water t' purify!");
		pirateLanguage.message(Message.StirredUpCreature, "Ye stirred up a creature from th' briny depths!");
		pirateLanguage.message(Message.StoppedYourBleeding, "Ye have belayed yer bleedin'!");
		pirateLanguage.message(Message.StopUsingRaft, "Ye belay usin' th' raft.");
		pirateLanguage.message(Message.SummonedGuardiansByDiggingTreasure, "Ye have summoned th' guardians by diggin' up th' booty.");
		pirateLanguage.message(Message.SunIsRising, "It appears th' sun be risin'.");
		pirateLanguage.message(Message.SunIsSetting, "It appears th' sun be settin'.");
		pirateLanguage.message(Message.SunNotBrightEnoughToStartFire, "Th' sun be not bright enough t' start a fire with this!");
		pirateLanguage.message(Message.TeleportBlocked, "Yer teleport destination was blocked.");
		pirateLanguage.message(Message.Teleported, "Ye have teleported.");
		pirateLanguage.message(Message.ThereIsNoSunToStartFire, "Thar be no sun in here t' start a fire with.");
		pirateLanguage.message(Message.ThirdQuarterOfDay, "It be currently in th' third quarter o' th' day.");
		pirateLanguage.message(Message.ThirdQuarterOfNight, "It be currently in th' third quarter o' th' night.");
		pirateLanguage.message(Message.ThrownIntoDepths, "Ye have thrown _0_ into th' briny depths below.");
		pirateLanguage.message(Message.ThrownIntoObstacle, "Ye have thrown _0_ into an obstacle.");
		pirateLanguage.message(Message.TooDamaged, "_0_ be too damaged t' attempt t' _1_.");
		pirateLanguage.message(Message.TooExhaustedToJump, "Ye be too exhausted and overburdened t' make this jump.");
		pirateLanguage.message(Message.ToolAppearedEffectiveForGathering, "Th' tool in use did not appear t' be effective fer gatherin' this resource.");
		pirateLanguage.message(Message.TrampledFire, "Ye trampled th' fire, puttin' it out!");
		pirateLanguage.message(Message.TrampledIntoGround, "_0_ trampled _1_ into th' ground.");
		pirateLanguage.message(Message.TrampleIntoGround, "Ye trampled _0_ into th' ground.");
		pirateLanguage.message(Message.Trampling, "Ye be tramplin' _0_.");
		pirateLanguage.message(Message.Transmogrified, "Ye have transmogrified _0_.");
		pirateLanguage.message(Message.TravelAway, "Be ye sure ye want t' travel away from these lands? Ye can ne'er return. Make sure t' grab all ye need!");
		pirateLanguage.message(Message.TravelToFarOffLands, "Ye travel t' far off lands...");
		pirateLanguage.message(Message.TreasureIsBlocked, "Ye come across th' spot whar th' booty be buried, but it be blocked.");
		pirateLanguage.message(Message.UnableToLoadRequiredMods, "Unable t' load one or more required mods.");
		pirateLanguage.message(Message.UnlockedChest, "Ye unlocked th' wooden chest and viewed its contents.");
		pirateLanguage.message(Message.UnpurifiedWaterInStill, "Thar be unpurified water in th' still.");
		pirateLanguage.message(Message.UpdatingMod, "Updatin' Mod");
		pirateLanguage.message(Message.URLHasOpenedInWebBrowser, "Th' URL has been opened in yer default web browser.");
		pirateLanguage.message(Message.UsedSoilToIncreaseFertility, "Ye used th' soil t' increase th' fertility o' th' plant.");
		pirateLanguage.message(Message.UsedSoilToSpeedUpGrowing, "Ye used th' soil t' speed up th' growin' process.");
		pirateLanguage.message(Message.UsingBareFistsToFight, "usin' yer bare fists t' fight a creature");
		pirateLanguage.message(Message.UsingBareHandsToGather, "usin' yer bare hands t' gather");
		pirateLanguage.message(Message.WaitUntilFireCooledToGetWater, "Ye must wait until th' fire has cooled off t' get th' purified water.");
		pirateLanguage.message(Message.WalkingDistanceOfTreasure, "Ye be within walkin' distance o' th' booty.");
		pirateLanguage.message(Message.WantToDeleteAllSavedData, "Be ye sure ye want t' permanently delete all saved data?");
		pirateLanguage.message(Message.WantToDeleteThisGame, "Be ye sure ye want t' delete this game?");
		pirateLanguage.message(Message.WantToPublishThisMod, "Be ye sure ye want t' publish this mod?");
		pirateLanguage.message(Message.WantToPublishUpdateToMod, "Be ye sure ye want t' publish an update t' this mod?");
		pirateLanguage.message(Message.WantToUninstallThisMod, "Be ye sure ye want t' uninstall this mod?");
		pirateLanguage.message(Message.WaterDoesNotNeedDesalination, "This water does not need t' undergo th' desalination process!");
		pirateLanguage.message(Message.WaterIncreaseFertilityOfPlant, "Ye used th' water t' increase th' fertility o' th' plant.");
		pirateLanguage.message(Message.WaterPutOutFire, "Th' water has put out th' fire.");
		pirateLanguage.message(Message.WaterWouldHaveNoEffect, "Th' water would have no effect on this plant.");
		pirateLanguage.message(Message.WinFindWayBackToCivilization, "Ye find yer way back t' civilization and end yer journey.");
		pirateLanguage.message(Message.WinSailBackWithRiches, "Ye sail back and enjoyed a good life with yer swag.");
		pirateLanguage.message(Message.WinTravelledBackToCivilization, "Ye travelled back t' civilization, but be this th' end?");
		pirateLanguage.message(Message.WorkingYourselfIntoExhaustion, "Ye be workin' yerself into exhaustion!");
		pirateLanguage.message(Message.WorkshopHasBeenOpenedPressOkAfter, "Th' Steam Workshop has been opened in yer default browser.<br />Press OK after you're done viewin' th' Workshop.");
		pirateLanguage.message(Message.YouAte, "Ye ate _0_!");
		pirateLanguage.message(Message.YouBeginResting, "Ye begin restin'...");
		pirateLanguage.message(Message.YouCrafted, "Ye _0_ _1_!");
		pirateLanguage.message(Message.YouDied, "Ye died _0_!");
		pirateLanguage.message(Message.YouDisassembled, "Ye disassembled _0_.");
		pirateLanguage.message(Message.YouDrank, "Ye drank _0_!");
		pirateLanguage.message(Message.YouEquip, "Ye equip _0_.");
		pirateLanguage.message(Message.YouFailedTo, "Ye failed t' _0_ _1_.");
		pirateLanguage.message(Message.YouFire, "Ye fire _0_.");
		pirateLanguage.message(Message.YouGathered, "Ye gathered _0_!");
		pirateLanguage.message(Message.YouHaveKilled, "Ye have killed _0_!");
		pirateLanguage.message(Message.YouOpen, "Ye open _0_.");
		pirateLanguage.message(Message.YouPickedUp, "Ye looted _0_.");
		pirateLanguage.message(Message.YourFist, "yer fist");
		pirateLanguage.message(Message.YouSalvaged, "Ye salvaged _0_.");
		pirateLanguage.message(Message.YouSee, "Ye see _0_.");
		pirateLanguage.message(Message.YouThrew, "Ye threw _0_!");
		pirateLanguage.message(Message.YouUnequip, "Ye un-equip _0_.");
		pirateLanguage.message(Message.YouUsed, "Ye have used _0_!");

		pirateLanguage.item(ItemType.Amber, "Amber", "Fossilized tree resin. Can be melted down t' reinforce items.");
		pirateLanguage.item(ItemType.AnimalSkull, "An Animal Skull", "A hollowed out, bleached animal skull, suitable fer craftin' into a provisional helmet.");
		pirateLanguage.item(ItemType.Arrow, "An Arrow", "A projectile t' be fired from a bow, crafted with an arrowhead and feather t' control flight.");
		pirateLanguage.item(ItemType.StoneArrowhead, "A Stone Arrowhead", "Crafted from stone and t' be used in th' craftin' o' arrows. Could also be used as a carvin' implement.");
		pirateLanguage.item(ItemType.PileOfAsh, "A Pile o' Ash", "Th' powdery remains o' burnt matter.");
		pirateLanguage.item(ItemType.BarkShield, "A Bark Shield", "A Makeshift shield, used t' block incomin' attacks, made with tree bark and wrapped with string.");
		pirateLanguage.item(ItemType.Bone, "A Bone", "A heavy, sun-bleached animal bone, suitable fer rudimentary combat, gathering, or craftin' into more useful items.");
		pirateLanguage.item(ItemType.Branch, "A Branch", "A typical tree branch, useful fer a variety o' crafts or stokin' a fire.");
		pirateLanguage.item(ItemType.CactusSpines, "Cactus Spines", "Thin, long spikes, suitable fer craftin' into makeshift needles.");
		pirateLanguage.item(ItemType.CobblestoneFlooring, "Cobblestone Flooring", "Primitive floorin' created by placin' stones in an organized pattern, fillin' some godforsaken gaps.");
		pirateLanguage.item(ItemType.CookedMeat, "Cooked Meat", "Adequately heated meat, safe and ready fer consumption.");
		pirateLanguage.item(ItemType.Earthworm, "An Earthworm", "A live wrigglin' insect, effective fer bait or eatin' on its own.");
		pirateLanguage.item(ItemType.FertileSoil, "Fertile Soil", "A rich soil suitable fer addin' t' plants t' promote their fertility.");
		pirateLanguage.item(ItemType.WaterskinOfSeawater, "A Waterskin o' Seawater", "A waterskin full o' seawater, not suitable fer drinkin' without desalination.");
		pirateLanguage.item(ItemType.FirePlough, "A Fire Plough", "A fire makin' device which uses a stick and groove method t' create heat through friction.");
		pirateLanguage.item(ItemType.FlowerSeeds, "Flower Seeds", "Dried flower seeds which can be planted t' grow flowers.");
		pirateLanguage.item(ItemType.Fossil, "A Fossil", "A carbonized fossil o' a species long since extinct.");
		pirateLanguage.item(ItemType.GoldCoins, "Gold Dubloons", "Shiny, golden dubloons, from a lost civilization unknown t' ye.");
		pirateLanguage.item(ItemType.GoldenRing, "A Golden Ring", "A golden ring, most likely used as a sign o' wealth and power.");
		pirateLanguage.item(ItemType.GoldenSword, "A Golden Sword", "An ornate, but soft sword, forged from solid gold. Not suitable fer combat due t' its softness.");
		pirateLanguage.item(ItemType.GrassSeeds, "Grass Seeds", "Small dried grass seeds. Can be planted t' grow grass.");
		pirateLanguage.item(ItemType.Kindling, "Kindling", "A gatherin' o' small twigs and tree matter. A requirement fer startin' a fire.");
		pirateLanguage.item(ItemType.LargeRock, "A Large Rock", "A rather large rock, handy fer craftin' many tools and devices.");
		pirateLanguage.item(ItemType.LeafBedroll, "A Leaf Bedroll", "A provisional bed with poor insulation and scratchy half-dried leaves, used fer sleepin' or restin'.");
		pirateLanguage.item(ItemType.Leaves, "Leaves", "A handful o' foliage used as compost or t' stoke a fire.");
		pirateLanguage.item(ItemType.Limestone, "Limestone", "A mineral-rich rock that can be ground into a powder. Useful fer metal and glass production.");
		pirateLanguage.item(ItemType.Log, "A Log", "A sturdy piece o' wood, useful fer construction or as a fuel fer a fire.");
		pirateLanguage.item(ItemType.MortarAndPestle, "A Mortar and Pestle", "Used fer grindin' and crushing, made from smooth stones.");
		pirateLanguage.item(ItemType.WhiteMushrooms, "White Mushrooms", "An edible, long lastin' mushroom. It appears safe t' consume.");
		pirateLanguage.item(ItemType.Nopal, "Nopal", "A de-spined cactus fruit, filled with refreshin' liquid and nutrition.");
		pirateLanguage.item(ItemType.Peat, "Peat", "A dried mass o' sponge-like plants, great fer fire fuel and compostin'.");
		pirateLanguage.item(ItemType.Sandstone, "Sandstone", "A soft, malleable rock, useful fer construction and tool makin'.");
		pirateLanguage.item(ItemType.PileOfGravel, "A Pile o' Gravel", "A large pile o' damp stone and sand.");
		pirateLanguage.item(ItemType.PileOfSand, "A Pile o' Sand", "A large pile o' moist sand, useful fer makin' glass when refined.");
		pirateLanguage.item(ItemType.WoodenArrow, "A Wooden Arrow", "A provisional wooden projectile t' be fired from a bow. Crafted with a feather t' control flight.");
		pirateLanguage.item(ItemType.StoneAxe, "A Stone Axe", "A dual-use tool which be both sharp and blunt. Can be used t' chop wood or mine stone with ease.");
		pirateLanguage.item(ItemType.Bandage, "A Bandage", "A tattered piece o' fabric, used t' staunch wounds and prevent infection.");
		pirateLanguage.item(ItemType.WovenFabric, "Woven Fabric", "A makeshift piece o' fibrous tissue, woven together into fabric.");
		pirateLanguage.item(ItemType.CactusNeedle, "A Cactus Needle", "A needle from a cactus plant, useful in craftin' smaller, more intricate items.");
		pirateLanguage.item(ItemType.StoneShovel, "A Stone Shovel", "A diggin' tool made o' stone, used t' collect different materials from th' ground or t' route water.");
		pirateLanguage.item(ItemType.WoodenSpear, "A Wooden Spear", "A makeshift, easy t' craft huntin' weapon. Makes an fer ideal ranged weapon.");
		pirateLanguage.item(ItemType.Suture, "A Suture", "A sharp needle tool with an attached thin string, used t' sew and close gapin' wounds.");
		pirateLanguage.item(ItemType.Raft, "A Raft", "A small, simple boat; a smartly alternative t' swimmin'. Effective fer traversin' large expanses o' water.");
		pirateLanguage.item(ItemType.RawMeat, "Raw Meat", "A raw, bloody chunk o' meat. Cookin' be recommended before consumption.");
		pirateLanguage.item(ItemType.SpottedRedMushrooms, "Spotted Red Mushrooms", "An odd looking, foul smellin' mushroom.");
		pirateLanguage.item(ItemType.Rope, "Rope", "A thick, twisted piece o' cordage, useful fer heavy-duty bindin'.");
		pirateLanguage.item(ItemType.Sapling, "A Sapling", "A young, fertile tree, suitable fer replantin'.");
		pirateLanguage.item(ItemType.Seaweed, "Seaweed", "A stringy mass o' sea plants. Can be used as cordage or eatin' in desperation.");
		pirateLanguage.item(ItemType.SharpGlass, "Sharp Glass", "A semi-opaque shard o' glass, formed after meltin' sand down.");
		pirateLanguage.item(ItemType.SharpRock, "A Sharp Rock", "A sharpened rock, useful fer crafting, tool making, and carvin' when required.");
		pirateLanguage.item(ItemType.SmoothRock, "A Smooth Rock", "A round, smoothed rock, useful fer many crafts.");
		pirateLanguage.item(ItemType.Soil, "Soil", "A pile o' moist dirt. Th' heavy smell o' earth permeates yer nostrils when holdin' it.");
		pirateLanguage.item(ItemType.StoneSpear, "A Stone Spear", "A huntin' weapon crafted with a stone head, suitable as a throwin' weapon.");
		pirateLanguage.item(ItemType.Stones, "Stones", "A mass o' small rocks. Can be used fer throwin' or craftin'.");
		pirateLanguage.item(ItemType.StoneWall, "A Stone Wall", "A series o' interlaced stones and rocks, shaped into a vertical wall structure. Can be built t' keep enemies out.");
		pirateLanguage.item(ItemType.String, "String", "Woven fabric; th' cornerstone o' all craftin' materials, mainly used fer bindin'.");
		pirateLanguage.item(ItemType.StrippedBark, "Stripped Bark", "A strong, fibrous shavin' from a branch or log, useful fer makin' cordage.");
		pirateLanguage.item(ItemType.TannedLeather, "Tanned Leather", "A durable, treated piece o' leather. Used in craftin' armor and other tools.");
		pirateLanguage.item(ItemType.Tannin, "Tannin", "A natural treatin' agent. T' be applied on hides t' create tanned leather.");
		pirateLanguage.item(ItemType.ThistleSeeds, "Thistle Seeds", "Small hard seeds, used fer growin' thistle plants.");
		pirateLanguage.item(ItemType.TreeBark, "Tree Bark", "A tough, dense chunk o' bark, broken off from a tree or log.");
		pirateLanguage.item(ItemType.TreeFungus, "Tree Fungus", "A semi-hard chunk o' fungus, grown from a tree and possibly edible.");
		pirateLanguage.item(ItemType.Vine, "A Vine", "A long, windin' tree vine, suitable fer cordage.");
		pirateLanguage.item(ItemType.Twigs, "Twigs", "A small pile o' sticks and tree limbs.");
		pirateLanguage.item(ItemType.Bow, "A Bow", "A bent wooden pole with a shorter string tied t' both ends. Th' tension o' th' string be used t' fire arrows.");
		pirateLanguage.item(ItemType.BowDrill, "A Bow Drill", "An advanced fire startin' device. Uses th' string on a bow t' rotate into th' wood, reducin' much effort.");
		pirateLanguage.item(ItemType.FishingNet, "A Fishin' Net", "A checkered weave o' string with weights on each corner, used t' trap and catch fish.");
		pirateLanguage.item(ItemType.RawCod, "A Raw Cod", "Slimy t' th' touch, but healthy and delicious t' eat. Can be cooked fer a better meal.");
		pirateLanguage.item(ItemType.CookedCod, "A Cooked Cod", "A seared, well cooked cod, ready t' consume and enjoy.");
		pirateLanguage.item(ItemType.Campfire, "A Campfire", "A groupin' o' rocks shaped into a ring t' contain a fire.");
		pirateLanguage.item(ItemType.PileOfSnow, "A Pile o' Snow", "A meltin' snow pile. Useful t' drink in desperate need, but be smartly!");
		pirateLanguage.item(ItemType.BarkTorch, "A Bark Torch", "A torch wrapped and bound by stripped tree bark, providin' natural oils t' increase th' life o' th' torch.");
		pirateLanguage.item(ItemType.LitBarkTorch, "A Lit Bark Torch", "Provides light t' yer surroundings when equipped and can also be used t' start other fires.");
		pirateLanguage.item(ItemType.HandDrill, "A Hand Drill", "A rudimentary fire makin' tool which uses a stick and another piece o' wood. Both hands be used t' twist th' stick against wood, makin' friction t' create an ember fer th' fire.");
		pirateLanguage.item(ItemType.SmallBag, "A Small Bag", "A leather pouch used fer holdin' a few items, carried at yer waist, reducin' encumbrance.");
		pirateLanguage.item(ItemType.Shale, "Shale", "A brittle but sharp carvin' implement.");
		pirateLanguage.item(ItemType.SharpenedBone, "A Sharpened Bone", "A sharp bone, useful fer carvin' other objects.");
		pirateLanguage.item(ItemType.Grindstone, "A Grindstone", "A coarse rock useful fer sanding, sharpening, and repairin' other items.");
		pirateLanguage.item(ItemType.RawFishSteak, "A Raw Fish Steak", "A raw piece o' fish, cut into a fillet. Good t' eat as is, but be tastier cooked.");
		pirateLanguage.item(ItemType.CookedFishSteak, "A Cooked Fish Steak", "A cooked fish fillet, seared on th' outside and delicious.");
		pirateLanguage.item(ItemType.WaterskinOfDesalinatedWater, "A Waterskin o' Desalinated Water", "A waterskin full o' freshly desalinated seawater.");
		pirateLanguage.item(ItemType.BullBoat, "A Bull Boat", "A boat made from leather hides and framed with curved wooden poles. Used t' travel t' new, far away lands.");
		pirateLanguage.item(ItemType.RefinedSand, "Refined Sand", "A finely ground sand, useful in makin' glass.");
		pirateLanguage.item(ItemType.Spyglass, "A Spyglass", "An improvised, short-range telescope, which can be used t' see slightly further away in some godforsaken direction when equipped.");
		pirateLanguage.item(ItemType.Flask, "A Flask", "A glass container which can be heated t' use fer desalination, a process used t' make seawater drinkable.");
		pirateLanguage.item(ItemType.RawClay, "Raw Clay", "A soft, formable mud. Suitable fer buildin' materials, tool-making, and more.");
		pirateLanguage.item(ItemType.RawClayBlowpipe, "A Raw Clay Blowpipe", "An unfired clay blowpipe used in glassblowin'. Unusable until it has been fired.");
		pirateLanguage.item(ItemType.ClayBlowpipe, "A Clay Blowpipe", "A sturdy blowpipe used fer glassblowin'.");
		pirateLanguage.item(ItemType.LeatherBelt, "A Leather Belt", "Made from tanned animal hide, cut, wrapped, and stitched together t' tie aroun' th' waist.");
		pirateLanguage.item(ItemType.LeatherTunic, "A Leather Tunic", "A leather garment which provides protection fer th' torso.");
		pirateLanguage.item(ItemType.LeatherCap, "A Leather Cap", "A hat made o' leather, double layered fer extra sturdiness.");
		pirateLanguage.item(ItemType.LeatherGorget, "A Leather Gorget", "A circlet o' leather, bound in two, stitched together and used as neck protection.");
		pirateLanguage.item(ItemType.LeatherPants, "Leather Pants", "Basic leather leggings with just enough paddin' t' provide some leg protection.");
		pirateLanguage.item(ItemType.Furnace, "A Furnace", "An enclosed structure made o' stone, which traps in th' heat t' keep a long-lasting, high-temperature fire.");
		pirateLanguage.item(ItemType.Kiln, "A Kiln", "Similar t' a furnace, but constructed from sandstone. It allows proper heat distribution fer craftin' glass and clay items.");
		pirateLanguage.item(ItemType.IronTongs, "Iron Tongs", "Durable iron tongs used t' grab hot items, protectin' yer hands from damage.");
		pirateLanguage.item(ItemType.TalcumPowder, "Talcum Powder", "Chalky and abundantly absorbent t' th' touch. An agent required fer castin' o' advanced metals.");
		pirateLanguage.item(ItemType.SandCastFlask, "A Sand Cast Flask", "A mold fer castin' metal into some godforsaken shape, made with green sand.");
		pirateLanguage.item(ItemType.Lens, "A Lens", "Glass formed into a partially convex shape. It allows focusin' sunlight into a single location, creatin' enough heat fer a fire.");
		pirateLanguage.item(ItemType.PlantRoots, "Plant Roots", "A tangled mess o' roots, with earth still hangin' from th' tips.");
		pirateLanguage.item(ItemType.LockPick, "A Lock Pick", "An improvised needle and prong that should be strong enough t' pick a lock or two.");
		pirateLanguage.item(ItemType.Pineapple, "A Pineapple", "A juicy, ripe pineapple, loaded with vitamins and thirst-quenchin' attributes.");
		pirateLanguage.item(ItemType.TatteredMap, "A Tattered Map", "An old torn map covered with drawings and scribbles, a bit hard t' make sense o' on first glance.");
		pirateLanguage.item(ItemType.Coal, "Coal", "A black and brittle mineral, stainin' anythin' it touches, but useful as fuel.");
		pirateLanguage.item(ItemType.WroughtIron, "Wrought Iron", "A heavily oxidized and unpurified form o' iron, used in th' forgin' o' brittle tools, weapons, and armor.");
		pirateLanguage.item(ItemType.LimestonePowder, "Limestone Powder", "A white, mineral-dense powder used in glass temperin' and th' purifyin' o' metals.");
		pirateLanguage.item(ItemType.IronIngot, "An Iron Ingot", "A solid brick o' iron, ready t' be formed or melted and cast in many ways.");
		pirateLanguage.item(ItemType.Backpack, "A Backpack", "Crafted with leather, it's suitable fer holdin' many items on yer back, reducin' overall weight.");
		pirateLanguage.item(ItemType.RottenMeat, "Rotten Meat", "Acrid decomposin' animal tissue. Ye would not want t' eat this, but can be used in compost.");
		pirateLanguage.item(ItemType.StoneHammer, "A Stone Hammer", "A rudimentary stone hammer, braced on th' end o' a pole with string. Used fer gatherin' and repairin'.");
		pirateLanguage.item(ItemType.RawChicken, "A Raw Cackle", "A small, plump and de-feathered cackle carcass, ready fer cookin'.");
		pirateLanguage.item(ItemType.CookedChicken, "A Cooked Cackle", "A well cooked cackle, ready t' consume and sure t' satisfy.");
		pirateLanguage.item(ItemType.ForgeAndAnvil, "A Forge and Anvil", "A combination o' a stone forge and anvil. Used in th' production o' metal armor, weapons, and tools.");
		pirateLanguage.item(ItemType.WoodenChest, "A Wooden Chest", "A large wooden container that can fit many items while placed on th' ground. Foods will decay slower within it.");
		pirateLanguage.item(ItemType.IronSword, "An Iron Sword", "A strong, sharp blade designed fer thrustin' and slashin'.");
		pirateLanguage.item(ItemType.IronBreastplate, "An Iron Breastplate", "Durable, armor worn over th' torso. One could take a serious beatin' while wearin' this.");
		pirateLanguage.item(ItemType.IronBoots, "Iron Boots", "Heavy iron plated boots, shieldin' yer feet from damage.");
		pirateLanguage.item(ItemType.IronHelmet, "An Iron Helmet", "Iron plated headgear designed t' withstand heavy blows.");
		pirateLanguage.item(ItemType.IronGorget, "An Iron Gorget", "A round metal brace worn aroun' th' neck and over th' shoulders.");
		pirateLanguage.item(ItemType.IronGreaves, "Iron Greaves", "Iron leggings; t' be strapped on and function as leg protection.");
		pirateLanguage.item(ItemType.IronGauntlets, "Iron Gauntlets", "Iron gloves designed t' be protective and durable, while maintainin' as much flexibility as possible.");
		pirateLanguage.item(ItemType.IronShield, "An Iron Shield", "A large and heavy iron shield, used fer blockin' projectiles or melee attacks.");
		pirateLanguage.item(ItemType.SandstoneFlooring, "Sandstone Flooring", "A group o' sandstone bricks, placed in a grid t' be used as floorin'.");
		pirateLanguage.item(ItemType.SpiderSilk, "Spider Silk", "A delicate but strong strand o' silk, produced by a spider. Can be used as cordage.");
		pirateLanguage.item(ItemType.AnimalFat, "Animal Fat", "A gelatinous shavin' o' animal fat, slimy t' th' touch. Useful as a rendered fuel.");
		pirateLanguage.item(ItemType.AnimalFatTorch, "An Animal Fat Torch", "A torch; wrapped in rendered animal fat, producin' a long-lastin' light source.");
		pirateLanguage.item(ItemType.ClayFlakes, "Clay Flakes", "Dried shavings o' clay. Created by shavin' clay and dryin' over a period o' time.");
		pirateLanguage.item(ItemType.GreenSand, "Green Sand", "A form o' malleable sand made with clay, used t' make molds fer metal castin'.");
		pirateLanguage.item(ItemType.OldInstructionalScroll, "An Old Instructional Scroll", "A tattered sheet o' paper with some roughly scribbled instructions and diagrams.");
		pirateLanguage.item(ItemType.SlimeGelatin, "Slime Gelatin", "A lump o' slime gelatin which jiggles upon yer touch. Can be used t' preserve food, or melted down and used as glue.");
		pirateLanguage.item(ItemType.Glue, "Glue", "A natural form o' glue that can be used t' bind and reinforce items.");
		pirateLanguage.item(ItemType.CookedSpider, "A Cooked Spider", "A crispy spider. Not th' best texture or flavor, but contains small bits o' white meat inside.");
		pirateLanguage.item(ItemType.DeadSpider, "A Dead Spider", "A spider's carcass. It's hard t' stomach, even when cooked. Try not t' think about what you're eatin'.");
		pirateLanguage.item(ItemType.IronLockPick, "An Iron Lock Pick", "A pair o' iron picks and wrenches, durable enough t' pick th' most adept o' locks.");
		pirateLanguage.item(ItemType.RottingVegetation, "Rottin' Vegetation", "A stinkin' mash o' organic plant matter, now usable as compost. Unless ye want t' risk eatin' it.");
		pirateLanguage.item(ItemType.WildOnion, "A Wild Onion", "A strong smellin' and tastin' plant, packed with nutrients and vitamins.");
		pirateLanguage.item(ItemType.IronHammer, "An Iron Hammer", "A strong hammer with an iron head, perfect fer shapin' and repairin' items.");
		pirateLanguage.item(ItemType.IronShovel, "An Iron Shovel", "A heavy iron diggin' implement, liftin' and breakin' through even th' toughest gravels and soils.");
		pirateLanguage.item(ItemType.IronDoubleAxe, "An Iron Double Axe", "An axe with a forged, double sided head, ideal fer both combat and gatherin'.");
		pirateLanguage.item(ItemType.IronPickaxe, "An Iron Pickaxe", "A robust minin' implement, with a blade forged from iron.");
		pirateLanguage.item(ItemType.Inkstick, "An Inkstick", "A hardened brick o' ink, used fer drawin' and paintin'.");
		pirateLanguage.item(ItemType.Coconut, "A Coconut", "A fibrous and heavy fruit. Difficult t' consume, but packed with plenty o' caloric-dense coconut meat and milk.");
		pirateLanguage.item(ItemType.PalmLeaf, "A Palm Leaf", "A large leaf from a palm tree. Th' strong inner fibers o' th' leaf be perfect fer cordage.");
		pirateLanguage.item(ItemType.Offal, "Offal", "A mound o' organs, tissue, and other undesirable portions o' an unlucky animal.");
		pirateLanguage.item(ItemType.Bones, "Bones", "A bundle o' bones from a small vertebrate. Some cracked, others shattered. Th' pieces be quite sharp.");
		pirateLanguage.item(ItemType.LitPoleTorch, "A Lit Pole Torch", "A wooden pole that has been lit on fire. Not suitable fer long journeys in th' darkness.");
		pirateLanguage.item(ItemType.Cotton, "Cotton", "A downy bundle o' opened cotton seeds, th' ideal solution fer spinnin' thread and makin' fabrics.");
		pirateLanguage.item(ItemType.CottonSeeds, "Cotton Seeds", "Unopened, plantable cotton seeds, not yet revealin' their white, soft interiors.");
		pirateLanguage.item(ItemType.CottonFabric, "Cotton Fabric", "A soft piece o' cloth spun from cotton.");
		pirateLanguage.item(ItemType.Tourniquet, "A Tourniquet", "A hard stud twisted together with a strin'. Used t' twist aroun' a bleedin' wound t' stem th' flow o' blood.");
		pirateLanguage.item(ItemType.WroughtIronPickaxe, "A Wrought Iron Pickaxe", "A dual-headed minin' implement. One head be heavy and blunt, th' other, spiked t' cut through rock with ease.");
		pirateLanguage.item(ItemType.WroughtIronDoubleAxe, "A Wrought Iron Double Axe", "A dual-bladed axe which can provide enough slashin' damage fer both combat and gatherin'.");
		pirateLanguage.item(ItemType.WroughtIronShovel, "A Wrought Iron Shovel", "A shovel with an angled, pointed head, useful fer diggin' and water routin'.");
		pirateLanguage.item(ItemType.WroughtIronHammer, "A Wrought Iron Hammer", "A large mallet crafted from wrought iron. Useful fer repairin' and sometimes gatherin'.");
		pirateLanguage.item(ItemType.WroughtIronLockPick, "A Wrought Iron Lock Pick", "A set o' picks and wrenches made from wrought iron, used fer pickin' and unlockin' locked devices.");
		pirateLanguage.item(ItemType.WroughtIronShield, "A Wrought Iron Shield", "A sturdy wrought iron shield, made by bendin' large sheets o' metal into shape.");
		pirateLanguage.item(ItemType.WroughtIronGauntlets, "Wrought Iron Gauntlets", "Intricate and sturdy, these wrought iron gloves fit snugly on yer hands.");
		pirateLanguage.item(ItemType.WroughtIronGreaves, "Wrought Iron Greaves", "Wrought iron leggings, strapped and padded aroun' th' legs t' reduce most damage.");
		pirateLanguage.item(ItemType.WroughtIronGorget, "A Wrought Iron Gorget", "A molded piece o' metal, used t' protect th' area aroun' th' neck and shoulders.");
		pirateLanguage.item(ItemType.WroughtIronHelmet, "A Wrought Iron Helmet", "Usin' a barbute design, this iron helmet shields th' head from most kinds o' attacks.");
		pirateLanguage.item(ItemType.WroughtIronBoots, "Wrought Iron Boots", "Wrought iron footwear. Heavy and made specifically fer protectin' feet and lower legs.");
		pirateLanguage.item(ItemType.WroughtIronBreastPlate, "A Wrought Iron Breastplate", "A large wrought iron chest plate, worn over th' torso.");
		pirateLanguage.item(ItemType.WoodenWall, "A Wooden Wall", "A sturdy set o' bound logs, formin' a protective wall that can be placed.");
		pirateLanguage.item(ItemType.WoodenFlooring, "Wooden Flooring", "Wooden floor boards; planed t' equal height and length.");
		pirateLanguage.item(ItemType.FishingRod, "A Fishin' Rod", "A flexible, smooth wooden rod with a string line and sharpened hook. Used fer fly fishin'.");
		pirateLanguage.item(ItemType.PileOfCompost, "A Pile o' Compost", "A mix o' decayin' organic matter and soil, full o' chemical nutrients and great fer growin' plants.");
		pirateLanguage.item(ItemType.MeltedAmber, "Melted Amber", "Warmed amber resin; used t' create a hardened bind when cooled on t' an object.");
		pirateLanguage.item(ItemType.Tinder, "Tinder", "A dry bunch o' wooden shavings, used t' ignite kindling when startin' a fire.");
		pirateLanguage.item(ItemType.Deadfall, "A Deadfall", "A large, flat rock, propped up with a stick. Once set, anythin' that triggers it will be crushed or injured from th' fallin' rock.");
		pirateLanguage.item(ItemType.Snare, "A Snare", "A short pole pushed into th' ground with a string attached. Designed t' ensnare creatures in its slipknot.");
		pirateLanguage.item(ItemType.WaterskinOfMedicinalWater, "A Waterskin o' Medicinal Water", "A soothin' mixture o' plants and roots. Used t' heal poisons and illnesses.");
		pirateLanguage.item(ItemType.CharcoalBandage, "A Charcoal Bandage", "A cloth bandage, coated in charcoal and used fer its natural antiseptic and anticoagulant properties.");
		pirateLanguage.item(ItemType.WoodenTongs, "Wooden Tongs", "A pair o' simple wood tongs, used t' loot hot objects without injury.");
		pirateLanguage.item(ItemType.WroughtIronTongs, "Wrought Iron Tongs", "A pair o' tongs, forged from wrought iron. Used t' lift hot objects without injury.");
		pirateLanguage.item(ItemType.SheetOfGlass, "A Sheet o' Glass", "A cloudy tempered piece o' glass. Practical fer many optical tools and other simple devices used t' harness th' sun.");
		pirateLanguage.item(ItemType.SolarStill, "A Solar Still", "A still that collects condensation and filters it into in a hole beneath th' glass, desalinatin' th' water and drainin' it into a container.");
		pirateLanguage.item(ItemType.StoneWaterStill, "A Stone Water Still", "A hollowed out rock with a stone lid. It's used t' desalinate water by boilin' it and then collectin' th' steam into a separate container.");
		pirateLanguage.item(ItemType.Sundial, "A Sundial", "A stone timepiece that uses th' location o' th' sun or moon t' show th' approximate time o' day or night.");
		pirateLanguage.item(ItemType.LitAnimalFatTorch, "A Lit Animal Fat Torch", "A bright burning, pleasant smellin' torch. Made with a pole and long lasting, rendered animal fat.");
		pirateLanguage.item(ItemType.Sinew, "Sinew", "Strong and flexible animal tissue. Commonly used fer makin' bows or simple cordage.");
		pirateLanguage.item(ItemType.ShortBow, "A Short Bow", "A bow designed fer powerful shots at close range.");
		pirateLanguage.item(ItemType.LongBow, "A Long Bow", "Nearly as tall as th' average person, this bow be designed fer maximum range.");
		pirateLanguage.item(ItemType.CompositeBow, "A Composite Bow", "An expertly crafted bow, designed fer both velocity and force.");
		pirateLanguage.item(ItemType.WaterskinOfPurifiedFreshWater, "A Waterskin o' Purified Fresh Water", "A full waterskin o' fresh, safe-to-drink water.");
		pirateLanguage.item(ItemType.WaterskinOfUnpurifiedFreshWater, "A Waterskin o' Unpurified Fresh Water", "Unpurified and possibly hazardous water. It be recommended ye purify th' water before drinkin'.");
		pirateLanguage.item(ItemType.GlassBottle, "A Glass Bottle", "A transparent vessel with a cork fer containment. Used fer collectin' water.");
		pirateLanguage.item(ItemType.Cork, "A Cork", "A small cork plug. Crafted from rubbery tree bark; it can be used t' contain liquids in bottles and other containers.");
		pirateLanguage.item(ItemType.GlassBottleOfSeawater, "A Glass Bottle o' Seawater", "Filled t' th' top with seawater. While seawater be technically drinkable, it will not reduce yer thirst.");
		pirateLanguage.item(ItemType.GlassBottleOfDesalinatedWater, "A Glass Bottle o' Desalinated Water", "A bottle filled with clear seawater that has been processed t' remove th' salt content.");
		pirateLanguage.item(ItemType.GlassBottleOfMedicinalWater, "A Glass Bottle o' Medicinal Water", "A bottled concoction o' herbs and nutrients. Used t' cure thirst, poisons, and other ailments.");
		pirateLanguage.item(ItemType.GlassBottleOfPurifiedFreshWater, "A Glass Bottle o' Purified Fresh Water", "Potable, and safe t' hydrate yerself with. Th' water has been purified reducin' some godforsaken toxins and unsafe bacteria.");
		pirateLanguage.item(ItemType.GlassBottleOfUnpurifiedFreshWater, "A Glass Bottle o' Unpurified Fresh Water", "A bottle containin' water that be likely unfit t' drink. It will quench yer thirst, but may have negative side-effects until it's purified.");
		pirateLanguage.item(ItemType.WroughtIronArrow, "A Wrought Iron Arrow", "An arrow with a wrought iron arrowhead. Th' shaft o' th' arrow be long and be fletched with feathers.");
		pirateLanguage.item(ItemType.IronArrow, "An Iron Arrow", "An arrow tipped with a high quality iron arrowhead. Fletched with feathers t' stabilize flight and accuracy.");
		pirateLanguage.item(ItemType.StoneBullet, "A Stone Bullet", "A basic stone projectile fer slings and firearms. Smooth and more or less spherical in shape.");
		pirateLanguage.item(ItemType.WroughtIronBullet, "A Wrought Iron Bullet", "A small ball o' wrought iron, used as ammunition fer slingshots or firearms.");
		pirateLanguage.item(ItemType.LeatherQuiver, "A Leather Quiver", "A leather-bound, back-mounted container designed t' hold arrows; however, other items will also fit inside as well.");
		pirateLanguage.item(ItemType.Ectoplasm, "Ectoplasm", "A ghostly, weightless fluff o' misty goo, strangely self contained and smartly evaporatin'.");
		pirateLanguage.item(ItemType.MagicalEssence, "Magical Essence", "An odd transparent powder with organic and ethereal materials. This magical matter may be used on items t' affix magical properties on t' them.");
		pirateLanguage.item(ItemType.WoodenFence, "A Wooden Fence", "A section o' wooden fencing, constructed from three logs and held together with horizontal beams.");
		pirateLanguage.item(ItemType.MonsterIdol, "A Monster Idol", "A mass o' animal organs, crudely shaped into some kind o' figure. It smells awful and emits an odd hummin' noise, and appears t' attract creatures.");
		pirateLanguage.item(ItemType.CordedSling, "A Corded Sling", "A thick piece o' cordage, wrapped and bound with a slot made fer a projectile. Used t' swing ammunition, increasin' throwin' range.");
		pirateLanguage.item(ItemType.LeatherSling, "A Leather Sling", "A sling crafted from tanned leather. Designed t' hold a projectile t' be thrown at an increased velocity.");
		pirateLanguage.item(ItemType.WroughtIronArrowhead, "A Wrought Iron Arrowhead", "Forged with wrought iron, this arrowhead be used t' craft an arrow. In dire need, it could also be used fer carvin'.");
		pirateLanguage.item(ItemType.IronArrowhead, "An Iron Arrowhead", "An expertly forged iron arrowhead, used t' create arrows. Alternatively can be used t' carve if necessary.");
		pirateLanguage.item(ItemType.Hammock, "A Hammock", "A comfortable place t' sleep, although not too sturdy. Crafted by bound cordage and usually hung off o' th' ground.");
		pirateLanguage.item(ItemType.CottonBedroll, "A Cotton Bedroll", "A soft and downy sleepin' mattress, rolled up fer ease o' carryin'. Can be used t' sleep or rest very comfortably.");
		pirateLanguage.item(ItemType.FeatherBedroll, "A Feather Bedroll", "A bedroll made with soft feathers and wrapped in fabric. Used fer restin' and sleepin' in comfort.");
		pirateLanguage.item(ItemType.RawTaintedMeat, "Raw Tainted Meat", "A piece o' bad-smellin' meat, possibly diseased or tainted with parasites. Possible t' consume, but could be deadly.");
		pirateLanguage.item(ItemType.CookedTaintedMeat, "Cooked Tainted Meat", "A piece o' discolored meat, cooked t' kill possible toxins, but possibly still unsafe fer consumption.");
		pirateLanguage.item(ItemType.StoneKnife, "A Stone Knife", "A sharpened piece o' stone, carved into a blade, with a handle fer support. Can be used as a weapon, gatherin' tool or t' carve.");
		pirateLanguage.item(ItemType.RawBlindfish, "A Raw Blindfish", "An odd lookin' fish with no eyes. Very slimy t' th' touch.");
		pirateLanguage.item(ItemType.CookedBlindfish, "A Cooked Blindfish", "While th' source o' th' food be a bit suspect, after bein' cooked, it appears t' be more palatable.");
		pirateLanguage.item(ItemType.Pemmican, "Pemmican", "A ball o' dried ground meat. With a long shelf life, this be th' ultimate survival food. Fer th' best benefits, prepare it with animal fat.");
		pirateLanguage.item(ItemType.PreparedPemmican, "Prepared Pemmican", "A seasoned mound o' dried ground meat, fried and cooked with fat fer maximum flavor and caloric content.");
		pirateLanguage.item(ItemType.Sail, "A Sail", "A large piece o' fabric, woven together t' be attached t' a mast. Used on a sailboat t' propel it along th' sea.");
		pirateLanguage.item(ItemType.Sailboat, "A Sailboat", "A large one-man boat. Used t' traverse large expanses o' water and fer travel back t' civilization.");
		pirateLanguage.item(ItemType.Egg, "A Cackle Fruit", "A brown colored cackle fruit, laid by a cackle. Can be eaten as is, or cooked fer a tastier meal.");
		pirateLanguage.item(ItemType.BoiledEgg, "A Boiled Cackle Fruit", "A moist, delicious boiled cackle fruit. Great tastin' and packed with protein.");
		pirateLanguage.item(ItemType.GrassBlades, "Grass Blades", "Long and almost sharp t' th' touch. These semi-dried grass blades be perfect fer cordage and string makin'.");
		pirateLanguage.item(ItemType.Niter, "Niter", "A natural mineral, ground up t' be used as a preservative or fer other chemical applications.");
		pirateLanguage.item(ItemType.Saltpeter, "Saltpeter", "A ground mineral, t' be used as a natural food preservative. If combined with other minerals, it can be combustible.");
		pirateLanguage.item(ItemType.BlackPowder, "Black Powder", "A highly combustible powder, made up o' a combination o' minerals.");
		pirateLanguage.item(ItemType.FlintlockPistol, "A Flintlock Pistol", "A long range, high damage pistol. Requires black powder and bullets t' fire.");
		pirateLanguage.item(ItemType.Giblets, "Giblets", "A batch o' cooked animal organs. Considerably repugnant, but nutritious and fillin'.");
		pirateLanguage.item(ItemType.ExplosiveTrap, "An Explosive Trap", "A mound o' leaves used t' conceal a volatile explosive powder. Steppin' on it will trigger a small explosion.");
		pirateLanguage.item(ItemType.SkeletalMageWand, "A Skeletal Mage Wand", "A mysterious, gnarled staff with a twinklin' red gemstone attached t' th' end.");
		pirateLanguage.item(ItemType.RawClayJug, "A Raw Clay Jug", "A formed and sculpted jug molded from raw clay. Requires a kiln t' be fired and hardened.");
		pirateLanguage.item(ItemType.ClayJug, "A Clay Jug", "A fully hardened clay jug with a cork. Used t' hold water.");
		pirateLanguage.item(ItemType.ClayJugOfSeawater, "A Clay Jug o' Seawater", "Unfiltered seawater, held in a clay jug. Unsuitable t' drink in its current form but could be desalinated.");
		pirateLanguage.item(ItemType.ClayJugOfDesalinatedWater, "A Clay Jug o' Desalinated Water", "Potable, safe-to-drink water. Th' water in this clay jug has gone through th' desalination process.");
		pirateLanguage.item(ItemType.ClayJugOfMedicinalWater, "A Clay Jug o' Medicinal Water", "A clay jug containin' medicinal water, used t' cure and soothe certain ailments while also replenishin' yer thirst.");
		pirateLanguage.item(ItemType.ClayJugOfPurifiedFreshWater, "A Clay Jug o' Purified Fresh Water", "A clay jug filled with fresh, purified water. Can be used t' quench yer thirst.");
		pirateLanguage.item(ItemType.ClayJugOfUnpurifiedFreshWater, "A Clay Jug o' Unpurified Fresh Water", "A clay jug full o' natural, fresh water. Although it be drinkable, further purification be recommended.");
		pirateLanguage.item(ItemType.RawClayBrick, "A Raw Clay Brick", "A soft piece o' raw clay, molded into a rectangle. Ready t' be fired inside a kiln.");
		pirateLanguage.item(ItemType.ClayBrick, "A Clay Brick", "A hardened clay brick, used in th' buildin' o' structures such as floors and walls.");
		pirateLanguage.item(ItemType.ClayBrickWall, "A Clay Brick Wall", "A wall made from clay bricks, set into a typical skewed, grid-like fashion t' increase durability.");
		pirateLanguage.item(ItemType.ClayBrickFlooring, "Clay Brick Flooring", "Floorin' crafted from clay bricks. Could be used as decoration or as part o' a buildin'.");
		pirateLanguage.item(ItemType.PineappleSeeds, "Pineapple Seeds", "Small brown seeds that can be planted t' grow into pineapple plants.");
		pirateLanguage.item(ItemType.CactiSeeds, "Cacti Seeds", "These appear t' be cactus seeds. Can be planted t' grow cacti or eaten.");
		pirateLanguage.item(ItemType.VineSeeds, "Vine Seeds", "Seeds t' grow vines. Can be eaten if desperate, but they do not contain some godforsaken significant nutrition.");
		pirateLanguage.item(ItemType.PaperSheet, "Paper Sheet", "A large piece o' paper. It appears t' contain many recycled fibers. Suitable fer drawin' on with ink.");
		pirateLanguage.item(ItemType.PaperMold, "Paper Mold", "A mold used fer makin' paper. Contains a screen that holds wet recycled fibers t' dry and press into flattened, usable paper.");
		pirateLanguage.item(ItemType.FlowerPetals, "Flower Petals", "Th' petals o' a yellow flower. Only useful in creatin' medicinal tonics, or ingestin' directly if food supply be low.");
		pirateLanguage.item(ItemType.Thistles, "Thistles", "Th' flowerin' bulb o' a thistle plant. Filled with a bitter but nutritious milk.");
		pirateLanguage.item(ItemType.DrawnMap, "Drawn Map", "A paper sheet, scrawled with geographical landmarks and features. Used t' approximate a location when read.");

		pirateLanguage.itemGroup(ItemTypeGroup.WaterskinOfPotableWater, "Waterskin o' Potable Water");
		pirateLanguage.itemGroup(ItemTypeGroup.GlassBottleOfPotableWater, "Glass Bottle o' Potable Water");
		pirateLanguage.itemGroup(ItemTypeGroup.Treasure, "Booty");
		pirateLanguage.itemGroup(ItemTypeGroup.ClayJugOfPotableWater, "Clay Jug o' Potable Water");

		pirateLanguage.doodad(DoodadType.PileOfRocks, "Pile o' Rocks");
		pirateLanguage.doodad(DoodadType.GrowingMushroom, "Growin' Mushroom");
		pirateLanguage.doodad(DoodadType.GrowingPlant, "Growin' Plant");

		pirateLanguage.use(ActionType.Rest, "Rest", "Used t' rest fer a period o' time t' regain health and stamina. Ye will belay restin' when reachin' full stamina.");
		pirateLanguage.use(ActionType.Sleep, "Sleep", "Used t' sleep fer a period o' time t' regain health and stamina. Duration be based on Campin' skill and time o' day. A bonus t' all effects (includin' length) will be granted if facin' a fire or lit object. Hunger and dehydration increases slower while sleepin'.");
		pirateLanguage.use(ActionType.Eat, "Eat", "Consumed on use. May provide benefits t' hunger, thirst, health and stamina; however, may reduce them as well dependin' on th' food.");
		pirateLanguage.use(ActionType.Drink, "Drink", "Consumed on use. Will reduce yer thirst; however, will provide negative effects when drinkin' sea/unpurified water.");
		pirateLanguage.use(ActionType.Carve, "Carve", "Used t' carve creature corpses or t' remove objects attached t' th' ground.");
		pirateLanguage.use(ActionType.Dig, "Dig", "Used t' dig up resources and items from th' ground.");
		pirateLanguage.use(ActionType.Cast, "Cast", "Come across a fish in a body o' water and attempt t' cast yer line or net t' catch it.");
		pirateLanguage.use(ActionType.Shoot, "Shoot", "Ye can shoot arrows with this item.");
		pirateLanguage.use(ActionType.SetDown, "Set Down", "Usin' this item will place it over top o' whatever tile be present in yer facin' direction. This be different than just droppin' th' item. It can also be used t' extinguish fires.");
		pirateLanguage.use(ActionType.Sling, "Sling", "Ye can sling bullets with this item.");
		pirateLanguage.use(ActionType.Paddle, "Paddle", "Used t' travel over water without gettin' yer feet wet. Yer speed be not reduced in water while paddlin'.");
		pirateLanguage.use(ActionType.StartFire, "Start Fire", "Used t' start a fire. This cannot be used on some non-dry tiles without fuel. Use on Campfires, Furnaces, Kilns, etc. t' light them. Usin' this action may require Kindling, Tinder and a fuel item in yer duffle dependin' on th' circumstance.");
		pirateLanguage.use(ActionType.GatherWater, "Gather Water", "Used t' gather water into th' item.");
		pirateLanguage.use(ActionType.LockPick, "Lock Pick", "Used t' unlock locked objects.");
		pirateLanguage.use(ActionType.Repair, "Repair", "Use while facin' a damaged item t' attempt t' repair it. Success based on skill used t' make th' item.");
		pirateLanguage.use(ActionType.Heal, "Heal", "Consumed on use. Used t' restore a varied amount o' health.");
		pirateLanguage.use(ActionType.TraverseTheSea, "Traverse Th' Sea", "Used t' travel t' new, unexplored lands, leavin' behind yer current surroundings.");
		pirateLanguage.use(ActionType.Decode, "Decode", "Used fer attemptin' t' read th' map. Use by th' booty location t' reveal how far or close ye are.");
		pirateLanguage.use(ActionType.Ignite, "Ignite", "Use this item on a fire source t' start it on fire.");
		pirateLanguage.use(ActionType.Read, "Read", "Consumed on use. Readin' usually provides useful knowledge.");
		pirateLanguage.use(ActionType.Reinforce, "Reinforce", "Consumed on use. Use while facin' a damaged item t' attempt t' increase th' overall maximum and minimum durability. Success based on skill used t' make th' item.");
		pirateLanguage.use(ActionType.OpenContainer, "Open Container", "Usin' this will open it whar ye may drag and drop items t' and from. Weight reduction and decay reduction bonuses may apply t' items inside.");
		pirateLanguage.use(ActionType.Open, "Open", "Consumed on use. Usin' this will open it, providin' new and unknown items.");
		pirateLanguage.use(ActionType.Cure, "Cure", "Consumed on use. Used t' cure a poison or burnin' pain while sometimes providin' other health benefits.");
		pirateLanguage.use(ActionType.TellTime, "Tell Time", "Used t' measure th' time o' day or night.");
		pirateLanguage.use(ActionType.Transmogrify, "Transmogrify", "Use while facin' an equippable item t' attempt t' infuse with magical properties.");
		pirateLanguage.use(ActionType.StokeFire, "Stoke Fire", "Used on a fire source t' increase th' strength o' th' flame.");
		pirateLanguage.use(ActionType.Pour, "Pour", "Pour on fire t' extinguish th' flames, pour inside a water still t' begin water filtration, pour on a suitable plant t' increase its health, or just simply empty out.");
		pirateLanguage.use(ActionType.Plant, "Plant", "Attempts t' plant th' item on th' tile ye be facin' towards. Some plants may require certain ground types or conditions t' be planted.");
		pirateLanguage.use(ActionType.Garden, "Garden", "Use on a plant t' increase its fertility. Can only be used on some plant types.");
		pirateLanguage.use(ActionType.Build, "Build", "Attempt t' construct or assemble th' item on th' tile ye be facin' towards.");
		pirateLanguage.use(ActionType.GatherTreasure, "Gather Booty", "Attempt t' gather a booty in th' vicinity o' use based on a decoded booty map. Range o' gather is dependent on yer Minin' skill.");
		pirateLanguage.use(ActionType.SailToCivilization, "Sail T' Civilization", "After collectin' enough booty, ye can return t' civilization and bask in th' glory o' yer swag and fame. And start a new adventure!");
		pirateLanguage.use(ActionType.Preserve, "Preserve", "Used with food items t' extend their life and decay rate.");
		pirateLanguage.use(ActionType.Fire, "Fire", "Usin' a mixture o' Black Powder along with a bullet, ye may fire this weapon.");
		pirateLanguage.use(ActionType.Gather, "Gather", "Can be used directly t' gather from an adjacent resource tile. Equippin' this allows it t' be automatically used when walkin' into resource tiles.");
		pirateLanguage.use(ActionType.Teleport, "Teleport", "With a flick o' th' wand, teleport t' a location in front o' whar ye be facin'.");
		pirateLanguage.use(ActionType.Extinguish, "Extinguish", "Douse th' torch, extinguishin' th' flame.");
		pirateLanguage.use(ActionType.DrawMap, "Draw Map", "Draw a map usin' yer skill in cartography o' th' surroundin' area.");
		pirateLanguage.use(ActionType.Pickup, "Loot", "");

		pirateLanguage.monster(MonsterType.LivingRock, "A Livin' Rock");
		pirateLanguage.monster(MonsterType.PirateGhost, "A Pirate Dredgie");
		pirateLanguage.monster(MonsterType.Chicken, "A Cackle");
		pirateLanguage.monster(MonsterType.LivingMushroom, "A Livin' Mushroom");

		pirateLanguage.monsterCorpse(MonsterType.FireElemental, "A Pile o' Embers");

		pirateLanguage.skill(SkillType.Chemistry, "Chemistry", "Influences quality and success rate o' crafted items usin' chemical mixtures.");
		pirateLanguage.skill(SkillType.Anatomy, "Anatomy", "Increases accuracy o' creature health information (via inspecting).<br />Decreases chance o' bleedin'.<br />Increases effectiveness o' healin' consumables.");
		pirateLanguage.skill(SkillType.Archery, "Archery & Firearms", "Increases attack damage, accuracy and maximum range when usin' bows and firearms.");
		pirateLanguage.skill(SkillType.Blacksmithing, "Blacksmithing", "Influences quality, repair, and success rate o' crafted items usin' metal.");
		pirateLanguage.skill(SkillType.Botany, "Botany", "Increases chance o' plantin' a plant.<br />Increases effectiveness o' eatin' plant-based consumables.<br />Decreases chance o' tramplin' plants when steppin' on them.");
		pirateLanguage.skill(SkillType.Camping, "Camping", "Increases th' amount o' turns slept when usin' a Bedroll.<br />Increases chance o' startin' a fire.");
		pirateLanguage.skill(SkillType.Cartography, "Cartography", "Increases chance t' successfully read Tattered Maps.<br />Decreases obscurity when readin' Tattered Maps.");
		pirateLanguage.skill(SkillType.Claythrowing, "Clay Throwing", "Influences quality and success rate o' crafted items usin' clay.");
		pirateLanguage.skill(SkillType.Cooking, "Cooking", "Influences decay o' cooked items.");
		pirateLanguage.skill(SkillType.Fishing, "Fishing", "Increases chance t' successfully catch a fish. Increases maximum range when usin' a Fishin' Rod.<br />Increases th' range in which ye can gather underwater booty from.");
		pirateLanguage.skill(SkillType.Fletching, "Fletchin' & Rangedcraft", "Influences quality and repair rate o' crafted arrows, bows, and slings.");
		pirateLanguage.skill(SkillType.Glassblowing, "Glassblowing", "Influences quality and success rate o' crafted items usin' glass.");
		pirateLanguage.skill(SkillType.Leatherworking, "Leatherworking", "Influences quality, repair, and success rate o' crafted items usin' leather.");
		pirateLanguage.skill(SkillType.LockPicking, "Lock Picking", "Increases chance t' successfully unlock a chest.");
		pirateLanguage.skill(SkillType.Lumberjacking, "Lumberjacking", "Increases chance o' resource droppin' on trees.<br />Decreases chance o' stamina reduction while Lumberjackin'.");
		pirateLanguage.skill(SkillType.Mining, "Mining", "Increases chance o' resource droppin' on rocks.<br />Decreases chance o' stamina reduction while Minin'.<br />Increases th' range in which ye can gather booty from.");
		pirateLanguage.skill(SkillType.Mycology, "Mycology", "Increases chance o' plantin' a mushroom.<br />Increases effectiveness o' eatin' mushroom consumables.<br />Decreases chance o' tramplin' mushrooms when steppin' on them.");
		pirateLanguage.skill(SkillType.Parrying, "Parrying", "Increases yer base defense value.<br />Increases chance t' take less damage in combat.<br />Decreases chance o' stamina reduction from bein' attacked.");
		pirateLanguage.skill(SkillType.Stonecrafting, "Stonecrafting", "Influences quality, repair, and success rate o' crafted items usin' stones and rocks.");
		pirateLanguage.skill(SkillType.Swimming, "Swimming", "Increases speed in water travel.<br />Decreases chance o' stamina reduction in water.");
		pirateLanguage.skill(SkillType.Tactics, "Tactics", "Increases yer base attack value.<br />Increases chance t' hit targets in combat.<br />Decreases chance o' stamina reduction while attackin'.");
		pirateLanguage.skill(SkillType.Tailoring, "Tailoring", "Influences quality, repair, and success rate o' crafted items usin' cloth and material.");
		pirateLanguage.skill(SkillType.Throwing, "Throwing", "Increases attack damage, accuracy, and maximum range when throwin' or slingin' an item.");
		pirateLanguage.skill(SkillType.Tinkering, "Tinkering", "Influences quality, repair, and success rate o' crafted items usin' miscellaneous resources and methods.");
		pirateLanguage.skill(SkillType.Trapping, "Trapping", "Increases th' amount o' damage and success rate o' trappin' creatures.<br />Reduces chance o' settin' off traps and reduces damage taken from traps.");
		pirateLanguage.skill(SkillType.Woodworking, "Woodworking", "Influences quality, repair, and success rate o' crafted items usin' wood.");

		pirateLanguage.milestone(MilestoneType.ReaperOfSouls, "Reaper o' Souls", "Killed 50 dredgies and harvested their corpses.");
		pirateLanguage.milestone(MilestoneType.Survivor, "Survivor", "Survived fer 10000 turns.");
		pirateLanguage.milestone(MilestoneType.TreasureHunter, "Booty Hunter", "Dug or fished up 10 treasure chests.");
		pirateLanguage.milestone(MilestoneType.Collector, "Collector", "Hold one o' every item.");
		pirateLanguage.milestone(MilestoneType.Explorer, "Explorer", "Step on or gather from every type o' tile.");
		pirateLanguage.milestone(MilestoneType.Grandmaster, "Grandmaster", "Get a skill t' 100%.");
		pirateLanguage.milestone(MilestoneType.Prepared, "Prepared", "Equip somethin' in each equipment slot.");

		pirateLanguage.hint(HintType.WelcomeToWayward, "Welcome t' Wayward", "Welcome t' th' early access version o' Wayward! Wayward be currently in beta status and many things will change and improve over time. Hint windows like these will display as ye play th' game if enabled. Ye can disable automatic hints by clickin' th' button \"Disable Hints\" below. If ye need further help or hints, visit th' <a target=\"_blank\" href=\"http://steamcommunity.com/app/379210/discussions/\">Steam Discussions</a>.<br /><br />If ye want t' keep up with Wayward, please visit th' <a target=\"_blank\" href=\"http://www.unlok.ca/category/wayward/\">Wayward Blog</a>, <a target=\"_blank\" href=\"http://www.unlok.ca/forums/wayward-forum/\">Wayward Forums</a>, or <a target=\"_blank\" href=\"http://www.reddit.com/r/Wayward/\">Subreddit</a>.<br /><br />Want t' help Wayward? Spread th' word, or follow us on one o' th' followin' sites: <a target=\"_blank\" href=\"https://www.facebook.com/waywardgame\">Facebook</a>, <a target=\"_blank\" href=\"https://twitter.com/Wayward_Game\">Twitter</a>, or <a target=\"_blank\" href=\"http://www.indiedb.com/games/wayward\">IndieDB</a>.");
		pirateLanguage.hint(HintType.Controls, "Controls", "Th' followin' text describes use o' th' default hotkeys and keybinds; however, they can all be changed in th' options under \"Keybinds\" in th' Options menu.<br /><br /><strong>Window Shortcuts</strong><br />Esc = Main Menu, I = Duffle, E = Equipment, C = Crafting, / = Help, X = Skills, M = Messages, O = Options, Q = Actions, Z = Milestones<br /><br /><strong>Movement</strong><br />T' move, ye can t' use W, A, S, D or by clicking/tappin' on th' game screen in th' direction ye want t' move. T' skip/pass a turn, or t' loot item(s) on th' tile ye be standin' on, press th' spacebar or port click/tap yer character on th' game screen.<br /><br /><strong>Actions</strong><br />Openin' up th' actions menu will bring up a list o' actions ye can perform on th' adjacent tile or object; fer example, if ye want t' loot a Pineapple without needin' t' carve it up. This be also an alternate way t' inspect a tile without needin' t' starboard click on th' game screen. Jumpin' be also selectable in th' actions menu which can help ye get out o' tight spots, but watch out fer th' heavy stamina reduction, it's based on yer current weight.<br /><br /><strong>Usin' Items</strong><br />T' use an item, ye may click/tap it t' bring up th' item menu t' click on an action. Additionally, ye be able t' drag and drop an item into one o' th' quickslots. Press th' number (1, 2, 3, etc.) that corresponds with which quickslot it be attached t' perform th' primary action fer th' item.<br /><br /><strong>Item Uses, Droppin' and Information</strong><br />Some items have more than one use - these will show up in th' items menu if available. Ye be able t' starboard click an item t' automatically drop it without goin' into th' item menu. If ye be facin' a container, ye will drop th' item inside. Ye can use shift + starboard click (or use \"Drop All\" from th' menu) t' drop multiple items o' th' same kind. Ye be also able t' starboard click on th' game screen t' reveal information about what ye be clickin' on (referred t' as \"Inspect\"), whether it be items, monsters, tiles, and more.<br /><br /><strong>More Information</strong><br />Hoverin' over elements on screen will typically reveal more information. Tool-tips will appear over items. Hoverin' over craftin' items will highlight items used in th' craft (ordered by duffle/equipment/quickslot order).<br /><br /><strong>Item Management</strong><br />Besides draggin' and droppin' items t' yer quickslots, ye be also able t' equip items in this fashion, provided it be an equipment item and fits in that slot. Draggin' and droppin' be also used t' move items yer container window and duffle (besides starboard clickin' t' drop an item into a container on th' ground). Additionally, starboard clickin' an item in yer equipment list, quickslots or container window will remove it from that slot.");
		pirateLanguage.hint(HintType.CorpseCarving, "Corpse Carving", "T' harvest potential resources from this corpse, try carvin' it with a sharp item. Choose \"Carve\" from th' items menu or try equppin' it t' a quickslot fer ease o' use.");
		pirateLanguage.hint(HintType.DoodadPickup, "Environmental Items/Objects", "T' loot or gather from some godforsaken environmental item/objects, such as plants or items attached t' th' ground like furnaces, campfires, etc ye can do one o' th' following:<br />1. While facin' th' item, click or press th' \"Actions\" hotkey, and select th' \"Loot Object\" option.<br />2. Use an item with \"Digging\" such as a shovel.<br />3. Use an item with \"Carving\" such as a sharp rock. Usin' yer bare hands with no tool (option 1) can sometimes harm ye. Usin' a tool (option 2 and 3) will decrease th' durability o' th' item. Some objects may require a \"Carving\" tool such as corpses t' harvest from.");
		pirateLanguage.hint(HintType.CaveDarkness, "Cave Darkness", "This would be th' perfect place fer hidden booty, but first th' area requires illumination with fire or a torch.");
		pirateLanguage.hint(HintType.Nightfall, "Nightfall", "Nightfall approaches! Come across a safe area t' camp out, or prepare yerself fer combat!");
		pirateLanguage.hint(HintType.StaminaReplenishment, "Stamina Replenishment", "Ye be gettin' exhausted. Sleep or rest usin' a bedroll or hammock t' regenerate stamina. Ye can also rest by goin' into th' Actions menu and clickin' Rest; however, restin' with an item will produce better regenerative effects. Rest be different from sleep in that ye will only ever rest until yer stamina be maxed out. Alternatively, ye may hold spacebar or click yer character t' skip turns.");
		pirateLanguage.hint(HintType.HealthReplenishment, "Health Problems", "Ye be quite injured, replenish yer health with food or healing-type items. Some status effects reduce yer ability t' regenerate yer health includin' Bleedin' and Poisonin'. Alternatively, ye can also try sleepin' or restin' t' regenerate health.");
		pirateLanguage.hint(HintType.Bleeding, "Bleeding", "Ye be bleedin'! This status effect be usually th' result o' a poor Anatomy skill and fightin' a tough creature. Make sure t' use a healin' item t' belay th' bleeding, such as a Bandage or Tourniquet. Bleedin' causes ye t' starve and dehydrate faster, regenerate stamina slower and not regenerate some godforsaken health.");
		pirateLanguage.hint(HintType.Poisoned, "Poisoned", "Ye have been poisoned! Poisonin' can happen from eatin' bad things or from some types o' creatures. Make sure t' use a curin' item t' cure th' poison, such as a Charcoal Bandage or Medicinal Water. Poisonin' causes ye t' dehydrate faster, slow stamina regeneration and not regenerate some godforsaken health.");
		pirateLanguage.hint(HintType.Dehydration, "Dehydration", "Ye be gettin' quite dehydrated. Thar's many ways t' get drinkable water, but unfortunately fer you, th' largest source o' water, from th' sea be nearly undrinkable in it's raw form. Ye must desalinate th' water through th' use o' a water still or flask before drinkin' it without adverse effects. Alternatively, ye may seek out a fresh water source, such as from caves, small lakes, oases, swamps or ponds. Fresh water be drinkable in it's raw form without too many bad effects; however, ye may still want t' boil it fer th' best health results.");
		pirateLanguage.hint(HintType.UseATool, "Use A Tool", "Gatherin' resources with yer hands be difficult and harmful, try equippin' or usin' a tool t' eliminate th' chance o' injury. If ye be Minin' or Lumberjacking, yer weapon(s) attack value will also help gather items faster. Blunt attack weapon will help ye gather faster while Mining, while Slashin' weapons will help ye gather faster while lumberjackin'.");
		pirateLanguage.hint(HintType.Durability, "Durability", "One o' yer tools, weapons or armor be close t' breakin' from overuse. If ye can't come across or craft an item t' repair it, ye will have t' replace it soon.");
		pirateLanguage.hint(HintType.Death, "Death", "Death be permanent. Although ye are shark bait, all o' th' craftin' recipes ye have discovered will be ready on yer next playthrough.");
		pirateLanguage.hint(HintType.EatingBadThings, "Eatin' Bad Things", "Ow! Eatin' that has hurt ye! Not all edible objects should be eaten, at least not without facin' th' consequences. On th' other hand, sometimes it's worth th' risk t' gain other stats. Eatin' bad things can sometimes result in poisonin'.");
		pirateLanguage.hint(HintType.FastPickup, "Fast Loot", "Ye have just looted an item from th' ground. Sometimes thar be multiple items on a tile. Pressin' th' spacebar or clickin' on yer character will gather items underneath ye without movin'.");
		pirateLanguage.hint(HintType.Bugs, "BUGS!", "Did ye come across an error? Would ye kindly let us know about what happened, so that we may seek t' belay this from happenin' t' other players? Ye can do so by postin' th' issue in <a target=\"_blank\" href=\"http://steamcommunity.com/app/379210/discussions/\">Steam Discussions</a>.");
		pirateLanguage.hint(HintType.HeldItems, "Held Items", "Yer port and starboard hand equipment slots be interchangeable. Ye can equip two weapons, two tools, two shields or some godforsaken combination in between. Be careful o' damagin' useful equipment such as torches or shields while gatherin' or attackin'. Make sure t' always equip another weapon or tool in th' other hand if ye want t' use it t' attack or gather over damagin' an equipped torch. Ye attack with both hands in combat, so it's important t' equip both yer hands if possible.");
		pirateLanguage.hint(HintType.Milestones, "Milestones", "Milestones be personalized goals and achievements. Each playthrough, ye be given an amount t' either discover or work towards. Milestones be saved after each playthrough or death. Th' more ye have completed, th' more startin' skill points ye get and th' more chance t' get better startin' items.");
		pirateLanguage.hint(HintType.Burning, "Burning", "Ye have been burned! This lastin' burnin' pain can be caused from steppin' in an open flame without protection, or possibly other sources. Usin' a curin' item such as a Charcoal Bandage or Medicinal Water will help soothe th' pain. Alternatively, take a swim fer a bit t' remove th' pain. Burnin' pain will belay ye from regeneratin' health and can last quite awhile if untreated.");
		pirateLanguage.hint(HintType.Crafting, "Crafting", "Craftin' be simple, but has many rules!<br /><br />When hoverin' over an item in th' craftin' dialog, ye will see which items will be used in th' craft through a highlighted border that will appear aroun' items in yer duffle, quickslot or equipment windows (priority be set in that order). Ye will also notice that ye will use th' first instance o' a required item. Simply drag aroun' th' order o' items in yer duffle t' use different items in th' craft.<br /><br />Usin' items in a craft that that have lower durability will affect th' crafted item's durability. Items that have zero durability cannot be used in a craft. Additionally, usin' Remarkable, Exceptional or Legendary items in a craft increases yer chances t' craft such an item. Decayable items (such as food) also gain decay bonuses from usin' higher quality items in th' craft.<br /><br />Ye can come across new craftin' recipes by: gatherin' th' required items in yer duffle and by findin' Old Instructional Scrolls.");
		pirateLanguage.hint(HintType.Encumbered, "Encumbered", "Ye be carryin' quite a few items, enough t' slow down yer movement and reduce stamina regeneration. Pack on some godforsaken more weight and you'll be fully overburdened and begin t' take damage while tryin' t' move. Ye can drop items from yer duffle by starboard clickin'.");
		pirateLanguage.hint(HintType.DailyChallengeMode, "Daily Challenge Mode", "Daily Challenge Mode be an extra difficult game mode with some unique game rules t' add an extra challenge fer skilled players. Ye can expect more monsters, a harder beginning o' th' game, and more. Ye cannot save yer game in this mode. Th' world and randomization be unique per day, allowin' multiple players t' play in th' same set o' circumstances.");

		Languages.add(pirateLanguage);
	}

	public onLoad(saveData: any): void {
	}

	public onUnload(): void {
	}

	public onSave(): any {
	}
}
