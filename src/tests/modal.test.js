import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';


describe('Funcionalidade do modal', () => {
  beforeEach(() => {
    renderWithRouter(<App />);
  });
  
  it('Existe o botão de cadastro de evento', () => {
    expect(screen.getByRole('button', { name: 'Cadastre seu evento' })).toBeInTheDocument();
  });

  it('Ao clicar no botão, o modal é aberto', () => {
    const openModalButton = screen.getByRole('button', { name: 'Cadastre seu evento' });
    userEvent.click(openModalButton);

    expect(screen.getByRole('button', { name: 'Entrar' })).toBeInTheDocument();
  });

  describe('O modal de login possui elementos corretos', () => {
    beforeEach(() => {
      const openModalButton = screen.getByRole('button', { name: 'Cadastre seu evento' });
      userEvent.click(openModalButton);
    });

    it('Existe o campo "Email"', () => {
      expect(screen.getByLabelText('Email')).toBeInTheDocument();
    });

    it('Existe o campo "Senha"', () => {
      expect(screen.getByLabelText('Senha')).toBeInTheDocument();
    });

    it('Existe o checkbox "Mostrar senha"', () => {
      expect(screen.getByRole('checkbox', { name: 'Mostrar senha' })).toBeInTheDocument();
    });

    it('Existe o botão "Entrar"', () => {
      expect(screen.getByRole('button', { name: 'Entrar' })).toBeInTheDocument();
    });

    it('Existe o botão "Faça seu cadastro"', () => {
      expect(screen.getByRole('button', { name: 'Faça seu cadastro' })).toBeInTheDocument();
    });
  });

  describe('Verifica funcionalidades do modal de login', ()=> {
    beforeEach(() => {
      const openModalButton = screen.getByRole('button', { name: 'Cadastre seu evento' });
      userEvent.click(openModalButton);
    });

    it('Ao clicar em "Mostrar senha", o campo tipo password passa a ser tipo text', () => {
      expect(screen.getByLabelText('Senha')).toHaveProperty('type', 'password');
      const checkbox = screen.getByRole('checkbox', { name: 'Mostrar senha' });
      userEvent.click(checkbox);
      expect(screen.getByLabelText('Senha')).toHaveProperty('type', 'text');
    });
  });

  describe('O modal de cadastro possui elementos corretos', () => {
    beforeEach(() => {
      const openModalButton = screen.getByRole('button', { name: 'Cadastre seu evento' });
      userEvent.click(openModalButton);
      const createUserButton = screen.getByRole('button', { name: 'Faça seu cadastro' });
      userEvent.click(createUserButton);
    });

    it('Existe o campo "Nome"', () => {
      expect(screen.getByLabelText('Nome')).toBeInTheDocument();
    });

    it('Existe o campo "Email"', () => {
      expect(screen.getByLabelText('Email')).toBeInTheDocument();
    });

    it('Existe o campo "Senha"', () => {
      expect(screen.getByLabelText('Senha')).toBeInTheDocument();
    });

    it('Existe o campo "Confirmar senha"', () => {
      expect(screen.getByLabelText('Confirmar senha')).toBeInTheDocument();
    });

    it('Existe o checkbox "Mostrar senha"', () => {
      expect(screen.getByRole('checkbox', { name: 'Mostrar senha' })).toBeInTheDocument();
    });

    it('Existe o botão "Cadastre-se"', () => {
      expect(screen.getByRole('button', { name: 'Cadastre-se' })).toBeInTheDocument();
    });

    it('Existe o botão "Voltar"', () => {
      expect(screen.getByRole('button', { name: 'Voltar' })).toBeInTheDocument();
    });
  });

  describe('Verifica funcionalidades do modal de cadastro', ()=> {
    beforeEach(() => {
      const openModalButton = screen.getByRole('button', { name: 'Cadastre seu evento' });
      userEvent.click(openModalButton);
      const createUserButton = screen.getByRole('button', { name: 'Faça seu cadastro' });
      userEvent.click(createUserButton);
    });

    it('Ao clicar em "Mostrar senha", o campo tipo password passa a ser tipo text', () => {
      expect(screen.getByLabelText('Senha')).toHaveProperty('type', 'password');
      const checkbox = screen.getByRole('checkbox', { name: 'Mostrar senha' });
      userEvent.click(checkbox);
      expect(screen.getByLabelText('Senha')).toHaveProperty('type', 'text');
    });
  });
});
