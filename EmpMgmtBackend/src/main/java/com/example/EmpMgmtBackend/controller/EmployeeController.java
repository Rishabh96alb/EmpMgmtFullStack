package com.example.EmpMgmtBackend.controller;

import com.example.EmpMgmtBackend.model.EmployeeEntity;
import com.example.EmpMgmtBackend.services.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api")
public class EmployeeController {

    @Autowired
    private EmployeeService service;

    @GetMapping("/employees")
    public ResponseEntity<List<EmployeeEntity>> getAllEmployees(){
        return new ResponseEntity<>(service.getAllEmployees(), HttpStatus.OK);
    }

    @GetMapping("/employees/{id}")
    public ResponseEntity<EmployeeEntity> getEmployeeById(@PathVariable int id){

        EmployeeEntity entity = service.getEmployeeById(id);

        if (entity != null){
            return new ResponseEntity<>(entity, HttpStatus.OK);
        }

        else {
            System.out.println("Employee doesn't exist");
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/employee")
    public ResponseEntity<EmployeeEntity> addEmployee(@RequestBody EmployeeEntity entity){

        EmployeeEntity entity1 = service.addEmployee(entity);
        return new ResponseEntity<>(entity1, HttpStatus.CREATED);
    }

    @PutMapping("/employees/{id}")
    public ResponseEntity<String> updateEmployee(@PathVariable int id, @RequestBody EmployeeEntity entity){
        EmployeeEntity entity1 = service.updateEmployee(id, entity);

        if (entity1!=null){
            return new ResponseEntity<>("Employee Details Updated!", HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>("Failed to Update", HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/employee/{id}")
    public ResponseEntity<String> deleteEmployee(@PathVariable int id){
        EmployeeEntity employeeEntity = service.getEmployeeById(id);

        if (employeeEntity != null){
            service.deleteEmployee(id);
            return new ResponseEntity<>("Employee Deleted", HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>("Failed to Delete", HttpStatus.NOT_FOUND);
        }
    }
}
