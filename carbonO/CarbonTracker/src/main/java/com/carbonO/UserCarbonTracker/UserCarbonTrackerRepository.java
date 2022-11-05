package com.carbonO.UserCarbonTracker;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface UserCarbonTrackerRepository extends JpaRepository<UserCarbonTracker, Long> {
    List<UserCarbonTracker> findAllByUserId(Long userId);

}

