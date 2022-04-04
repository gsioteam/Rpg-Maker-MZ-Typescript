import { RPG } from "../RPG";

declare class Game_Item {

    private _dataClass: string;
    private _itemId: number;

    constructor();

    public initialize(item: Record<string, unknown>): void;
    public isSkill(): boolean;
    public isItem(): boolean;
    public isUsableItem(): boolean;
    public isWeapon(): boolean;
    public isArmor(): boolean;
    public isEquipItem(): boolean;
    public isNull(): boolean;
    public itemId(): number;
    public object(): RPG.DataItemBase;
    public setObject(item: Record<string, unknown>): void;
    public setEquip(isWeapon: boolean, itemId: number): void;

}

export { Game_Item };