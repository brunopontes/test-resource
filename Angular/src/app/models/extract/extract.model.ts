export class ExtractModel {
  constructor(
    public DateLaunch: string = null,
    public Description: string = null,
    public Number: number = 0,
    public Location: string = null,
    public DateConfirmation: string = null,
    public BankName: string = null,
    public BankAgency: number = 0,
    public BankAccount: string = null,
    public BankDetailsComplete: string = null,
    public FinalValue: number = 0,
    public FinalValueLocal: string = null,
  ) { }
}
