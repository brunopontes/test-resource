package com.test.repository;

import static com.test.lib.Utils.ReadFile;

import com.test.model.ExtractModel.Extract;

import org.springframework.stereotype.Repository;

@Repository
public class ExtractRepository {

    public Extract List() throws Exception {
        try {

            Extract model = ReadFile();

            return model;
        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }
}