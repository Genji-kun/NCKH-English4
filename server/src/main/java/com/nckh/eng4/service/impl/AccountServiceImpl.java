package com.nckh.eng4.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nckh.eng4.model.Account;
import com.nckh.eng4.repository.AccountRepository;
import com.nckh.eng4.service.AccountService;

@Service
public class AccountServiceImpl implements AccountService {

    private final AccountRepository accountRepository;

    @Autowired
    public AccountServiceImpl(AccountRepository accountRepository) {
        this.accountRepository = accountRepository;
    }

    @Override
    public Account save(Account account) {
        if (!accountRepository.existsById(account.getId()))
            return accountRepository.save(account);
        else {
            throw new RuntimeException();
        }
    }

    @Override
    public Optional<Account> findById(Long id) {
        return accountRepository.findById(id);
    }

    @Override
    public List<Account> findAll() {
        return accountRepository.findAll();
    }

    @Override
    public void deleteById(Long id) {
        accountRepository.deleteById(id);
    }

}
