package com.example.EmpMgmtBackend.repositories;

import com.example.EmpMgmtBackend.model.EmployeeEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepositories extends JpaRepository<EmployeeEntity, Integer> {

}
