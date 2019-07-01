package com.test.viewModel;

import lombok.Builder;

@Builder
public class ExtractViewModel {
    public String DateLaunch;

    public String Description;

    public int Number;

    public String Location;

    public String DateConfirmation;

    public String BankName;

    public int BankAgency;

    public String BankAccount;

    public String BankDetailsComplete;

    public double FinalValue;

    public String FinalValueLocal;
}