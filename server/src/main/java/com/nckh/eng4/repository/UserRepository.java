package com.nckh.eng4.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nckh.eng4.model.User;

public interface UserRepository extends JpaRepository<User, Long> {

}
