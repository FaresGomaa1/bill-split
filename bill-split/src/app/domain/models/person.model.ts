import { IPerson } from "../Interfaces/iperson";

export class Person implements IPerson {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}
