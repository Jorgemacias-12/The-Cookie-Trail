import { Category } from "./Category";
import { Reward } from "./Rewards";
import { SocialNetwork } from "./SocialNetwork";

export class Project {

  private _ID: string;
  private _FullName: string;
  private _ProjectName: string;
  private _Description: string;
  private _Category: Category;
  private _MaxAmount: number;
  private _Term: number;
  private _ActualAmount: number;
  private _SocialNetworks: SocialNetwork[];
  private _Rewards: Reward[];

  public get ID(): string {
    return this._ID;
  }

  public set ID(value: string) {
    this._ID = value;
  }

  public get FullName(): string {
    return this._FullName;
  }

  public set FullName(value: string) {
    this._FullName = value;
  }

  public get ProjectName(): string {
    return this._ProjectName;
  }

  public set ProjectName(value: string) {
    this._ProjectName = value;
  }

  public get Description(): string {
    return this._Description;
  }

  public set Description(value: string) {
    this._Description = value;
  }

  public get Category(): Category {
    return this._Category;
  }

  public set Category(value: Category) {
    this._Category = value;
  }

  public get MaxAmount(): number {
    return this._MaxAmount;
  }

  public set MaxAmount(value: number) {
    this._MaxAmount = value;
  }

  public get Term(): number {
    return this._Term;
  }

  public set Term(value: number) {
    this._Term = value;
  }

  public get ActualAmout(): number {
    return this._ActualAmount;
  }
  public set ActualAmount(value: number) {
    this.ActualAmount = value;
  }

  public get SocialNetworks(): SocialNetwork[] {
    return this.SocialNetworks;
  }

  public set SocialNetworks(value: SocialNetwork[]) {
    this.SocialNetworks = value;
  }

  public get Rewards(): Reward[] {
    return this._Rewards;
  }

  public set Rewards(value: Reward[]) {
    this.Rewards = value;
  }

}
