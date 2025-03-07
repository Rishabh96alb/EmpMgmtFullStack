package com.example.services;

import com.example.model.EmployeeEntity;
import com.example.repositories.EmployeeRepositories;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepositories repositories;

    public List<EmployeeEntity> getAllEmployees(){
        return repositories.findAll();
    }

    public EmployeeEntity getEmployeeById(int id){
        return repositories.findById(id).orElse(null);
    }

    public EmployeeEntity addEmployee(EmployeeEntity employeeEntity){
        return repositories.save(employeeEntity);
    }

    public EmployeeEntity updateEmployee(int id, EmployeeEntity employeeEntity){
        return repositories.save(employeeEntity);
    }

    public void deleteEmployee(int id){
         repositories.deleteById(id);
    }
}
