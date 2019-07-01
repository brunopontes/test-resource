package com.test.lib;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.test.model.ExtractModel.Extract;

public class Utils {

    private static String path = "\\src\\main\\resources\\static\\lancamento-conta-legado.json";

    public static Extract ReadFile() throws Exception {

        Path workingDirectory = Paths.get("").toAbsolutePath();

        try (FileReader reader = new FileReader(workingDirectory + path)) {

            Gson gson = new GsonBuilder().setFieldNamingStrategy(
                    str -> str.getName().substring(0, 1).toUpperCase() + str.getName().substring(1)).create();

            Extract model = gson.fromJson(reader, Extract.class);

            return model;
        } catch (FileNotFoundException e) {
            throw new Exception(e.getMessage());
        } catch (IOException e) {
            throw new Exception(e.getMessage());
        }
    }
}