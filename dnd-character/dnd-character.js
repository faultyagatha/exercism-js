export const abilityModifier = (ability) => {
  if (ability < 3) {
    throw new Error('Ability scores must be at least 3');
  } else if (ability > 18) {
    throw new Error('Ability scores can be at most 18');
  }
  return Math.floor((ability - 10) * 0.5);
};

export class Character {
  static rollAbility() {
    let rolls = [];
    const numDice = 4;
    for (let i = 0; i < numDice; i++) {
      rolls.push(Math.floor(Math.random() * 6));
    }
    return rolls.sort((a, b) => a - b)
      .slice(1)
      .reduce((acc, current) => acc + current);
  }

  constructor() {
    this.strength = Character.rollAbility();
    this.dexterity = Character.rollAbility();
    this.constitution = Character.rollAbility();
    this.intelligence = Character.rollAbility();
    this.wisdom = Character.rollAbility();
    this.charisma = Character.rollAbility();
    this.hitpoints = 10 + abilityModifier(this.constitution);
  }

  get strength() {
    return this.strength;
  }

  get dexterity() {
    return this.dexterity;
  }

  get constitution() {
    return this.constitution;
  }

  get intelligence() {
    return this.intelligence;
  }

  get wisdom() {
    return this.wisdom;
  }

  get charisma() {
    return this.charisma;
  }

  get hitpoints() {
    return this.hitpoints;
  }
}
