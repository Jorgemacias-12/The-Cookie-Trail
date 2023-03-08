import { SocialNetwork } from "./SocialNetwork";

export class User {
  private _id: string;
  private _fullName: string;
  // private _avatar: string; para proxima release
  private _biography: string;
  private _socialNetworks: Array<SocialNetwork>;
  private _antiquity: number;

  constructor() {
  }

  public get ID(): string {
    return this._id;
  }

  public set ID(value: string) {
    this._id = value;
  }

  public get FullName(): string {
    return this._fullName;
  }

  public set FullName(value: string) {
    this._fullName = value;
  }

  public get Biography(): string {
    return this._biography;
  }

  public set Biography(value: string) {
    this._biography = value;
  }

  public get SocialNetworks(): Array<SocialNetwork> {
    return this._socialNetworks;
  }

  public set SocialNetworks(value: Array<SocialNetwork>) {
    this._socialNetworks = value;
  }

  public get Antiquity(): number {
    return this._antiquity;
  }

  set Antiquity(value: number) {
    this._antiquity = value;
  }
}
