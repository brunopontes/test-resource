package com.test.service;

import java.util.List;

import com.test.mapper.ExtractMapper;
import com.test.model.BaseReturn;
import com.test.model.ExtractModel.Extract;
import com.test.viewModel.ExtractViewModel;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.test.repository.ExtractRepository;

@Service
public class ExtractService {

    @Autowired
    private ExtractRepository _repository;
    @Autowired
    private ExtractMapper _mapper;

    public ExtractService(ExtractRepository repository, ExtractMapper mapper) {
        this._repository = repository;
        this._mapper = mapper;
    }

    public BaseReturn<List<ExtractViewModel>> List() {
        BaseReturn<List<ExtractViewModel>> response = new BaseReturn<List<ExtractViewModel>>();

        try {
            Extract model = _repository.List();

            List<ExtractViewModel> viewModels = _mapper.ExtractViewModels(model);

            response.Data = viewModels;
        } catch (Exception ex) {
            response.Success = false;
            response.Description = ex.getMessage();
        }

        return response;
    }
}