import { BirthDate } from "../classes/BirthDate";


export class DriverInfoPageState {
  additionalDriverInfo: AdditionalDriverInfo = new AdditionalDriverInfo();
  driverInfo: PageStateDriverInfo = new PageStateDriverInfo();
}

export class AdditionalDriverInfo {
  id: string = "";
  firstName: string = "";
  lastName: string = "";
  date: BirthDate = new BirthDate();
  active: boolean = false;
}

export class PageStateDriverInfo {
  date: BirthDate = new BirthDate();
  married: string = "";
  active: boolean = false;
}
