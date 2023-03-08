import { SocialNetwork } from "./SocialNetwork";

export class User {
  private _id: string;
  private _fullName: string;
  // private _avatar: string; para proxima release
  private _biography: string;
  private _socialNetworks: Array<SocialNetwork>;
  private _antiquity: number;

  constructor(id: string, fullName: string,
    biography: string, socialNetworks: Array<SocialNetwork>, antiquity: number) {
    this._id = id;
    this._fullName = fullName;
    this._biography = biography;
    this._socialNetworks = socialNetworks;
    this._antiquity = antiquity;
  }

  get ID(): string {
    return this._id;
  }

  set ID(value: string) {
    this._id = value;
  }

  get FullName(): string {
    return this._fullName;
  }

  set FullName(value: string) {
    this._fullName = value;
  }

  get Biography(): string {
    return this._biography;
  }

  set Biography(value: string) {
    this._biography = value;
  }

  get SocialNetworks(): Array<SocialNetwork> {
    return this._socialNetworks;
  }

  set SocialNetworks(value: Array<SocialNetwork>) {
    this._socialNetworks = value;
  }

  get Antiquity(): number {
    return this._antiquity;
  }

  set Antiquity(value: number) {
    this._antiquity = value;
  }
}
