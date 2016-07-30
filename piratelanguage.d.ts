/// <reference path="mod-reference/modreference.d.ts" />
declare class Mod extends Mods.Mod {
    onInitialize(): void;
    onLoad(saveData: any): void;
    onUnload(): void;
    onSave(): any;
}
