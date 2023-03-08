import { Category } from "./Category";

export class Project {
 
  private _ID: string;
  private _FullName: string;
  private _ProjectName: string;
  private _Description: string;
  private _Category: Category;
  private _MaxAmount: number;
  private _Plazo: number;

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

  public get Plazo(): number {
    return this._Plazo;
  }

  public set Plazo(value: number) {
    this._Plazo = value;
  }
}
