package com.test.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

import com.test.model.BaseReturn;
import com.test.viewModel.ExtractViewModel;
import com.test.service.ExtractService;

@RestController
public class ExtractController {

    @Autowired
    private ExtractService _service;

    public ExtractController(ExtractService service) {
        this._service = service;
    }

    @GetMapping("/")
    public BaseReturn<List<ExtractViewModel>> List() {
        BaseReturn<List<ExtractViewModel>> response = new BaseReturn<List<ExtractViewModel>>();

        try {

            BaseReturn<List<ExtractViewModel>> viewModels = _service.List();

            response.Data = viewModels.Data;
        } catch (Exception ex) {
            response.Success = false;
            response.Description = ex.getMessage();
        }

        return response;
    }
}