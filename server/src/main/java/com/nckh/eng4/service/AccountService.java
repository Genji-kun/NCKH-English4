package com.nckh.eng4.service;

import java.util.List;
import java.util.Optional;

import com.nckh.eng4.model.Account;

public interface AccountService {
    Account save(Account account);

    Optional<Account> findById(Long id);

    List<Account> findAll();

    void deleteById(Long id);
}
