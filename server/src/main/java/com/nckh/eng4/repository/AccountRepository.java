package com.nckh.eng4.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nckh.eng4.model.Account;

public interface AccountRepository extends JpaRepository<Account, Long> {
}