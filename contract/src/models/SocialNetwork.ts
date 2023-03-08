export class SocialNetwork {
  private _name: string;
  private _link: string;

  constructor(name: string, link: string) {
    this._name = name;
    this._link = link;
  }

  get Name(): string {
    return this._name;
  }

  set Name(value: string) {
    this._name = value;
  }

  get Link(): string {
    return this._link;
  }

  set Link(value: string) {
    this._link = value;
  }
}
