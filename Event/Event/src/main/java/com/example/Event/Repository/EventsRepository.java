package com.example.Event.Repository;

import com.example.Event.Entity.Events;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface EventsRepository extends JpaRepository<Events, Long> {

    @Query(value = "SELECT * FROM events WHERE date = CURDATE()", nativeQuery = true)
    List<Events> geteventsfromtoday();

}