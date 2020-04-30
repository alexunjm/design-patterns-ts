/**
 * Singleton Class Dictionary
 */
export class Dictionary {
  private static instance: Dictionary;
  private _id: number;

  private constructor() {
    this.id = Math.floor(Math.random() * 100);
    console.log("Dictionary -> constructor -> this.id", this.id)
  }

  public static getInstance() {
    if (Dictionary.instance == null) {
      Dictionary.instance = new Dictionary();
    }
    return Dictionary.instance;
  }

  public get id(): number {
    return this._id;
  }

  public set id(value: number) {
    this._id = value;
  }


}