package com.example.applicationechange.repository;

import com.example.applicationechange.entity.ApplicationEchange;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ApplicationEchangeRepository extends JpaRepository<ApplicationEchange,Long> {
}
