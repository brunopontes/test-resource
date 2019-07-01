package com.test.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Builder
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class BaseReturn<T> {
    public BaseReturn() {
        Success = true;
        Description = null;
        Data = null;
    }

    public Boolean Success;

    public String Description;

    public T Data;
}