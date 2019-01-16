import { BirthDate } from "../classes/BirthDate";

export class Drivers {
  primary: PrimaryDriver = new PrimaryDriver();
  secondary: SecondaryDriver = new SecondaryDriver();
}

export class PrimaryDriver {
  date: BirthDate = new BirthDate();
  email: string = "";
  firstName: string = "Adam";
  lastName: string = "";
  married: string = "";
}

export class SecondaryDriver {
  date: BirthDate = new BirthDate();
  email: string = "";
  firstName: string = "";
  lastName: string = "";
  relationship: string = "";
}


