type voiceType = string;
type ownerType = string | null;

export interface AnimalType {
  voice: voiceType;
  maxLife: number;
  gender: string
}

export interface DomesticType extends AnimalType {}

export interface PetType extends DomesticType {
  name: string;
  owner?: ownerType;
}

// Животные
export class Animal {
  public voice: voiceType;
  protected maxLife: number;
  public gender: string

  constructor({ voice,  maxLife, gender }: AnimalType) {
    this.voice = voice;
    this.maxLife = maxLife;
    this.gender = gender
  }

  makeVoice() {
    return this.voice;
  }
}

// Домашние животные
export class DomesticAnimal extends Animal {
  constructor({  ...args }: DomesticType) {
    super({ ...args });
  }

  feed(food: string) {
    return `Животное ${this.voice} съело еду(${food})`;
  }
}

// Питомцы
export class Pet extends DomesticAnimal {
  readonly name: string;
  protected commands: string[] = [];
  protected owner: ownerType;

  constructor({ name, owner = null, ...args }: PetType) {
    super(args);
    this.name = name;
    this.owner = owner;
  }

  get commandList() {
    return this.commands;
  }

  get getOwner() {
    if(!this.owner) return `нету владельца`
    return this.owner
  }

  setOwner(owner: ownerType) {
    this.owner = owner;
  }

  addCommand(command: string) {
    if (this.commands.includes(command)) {
      return `${this.name} знает команду ${command}`;
    }

    this.commands.push(command);
    return `${this.name} выучил новую команду`;
  }

  doCommand(command: string) {
    if (!this.commands.includes(command)) {
      return `${this.name} не знает команду ${command}`;
    }

    return `${this.name} выполнил команду ${command}`;
  }

  feed(food: string) {
    return `${this.name} съел (${food})`;
  }

  walk() {
    return `${this.name} погулял`;
  }
}
