import React from 'react';
import { screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';
import { api } from '../api/api'

// jest.mock('api', () => ({
//   post: jest.fn()
// }));

describe('Funcionalidade do modal', () => {
  // beforeEach(() => {
  //   renderWithRouter(<App />);
  // });
  
  // it('Existe o botão de cadastro de evento', () => {
  //   expect(screen.getByRole('button', { name: 'Cadastre seu evento' })).toBeInTheDocument();
  // });

  // it('Ao clicar no botão, o modal é aberto', () => {
  //   const openModalButton = screen.getByRole('button', { name: 'Cadastre seu evento' });
  //   userEvent.click(openModalButton);

  //   expect(screen.getByRole('button', { name: 'Entrar' })).toBeInTheDocument();
  // });

  describe('O modal de login possui elementos corretos', () => {
    beforeEach(() => {
      renderWithRouter(<App />);
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

    it('Ao clicar em "Mostrar senha", o campo tipo password passa a ser tipo text', () => {
      expect(screen.getByLabelText('Senha')).toHaveProperty('type', 'password');
      const checkbox = screen.getByRole('checkbox', { name: 'Mostrar senha' });
      userEvent.click(checkbox);
      expect(screen.getByLabelText('Senha')).toHaveProperty('type', 'text');
    });
  });

  describe('Verifica funcionalidades do modal de login', ()=> {
    it('É possível fazer login com sucesso com sucesso', async () => {
      const expectedData = {
        token: 'abc123',
        user: {
          name: 'Kevinnnnnnnnnnnnnnnnnnnn',
          email: 'email@email.com'
        },
      };
   
      jest
      .spyOn(api, 'post')
      .mockImplementation(
        jest.fn(() =>
          Promise.resolve({ data: expectedData })
        )
      );
      const { history } = renderWithRouter(<App />);

      const openModalButton = screen.getByRole('button', { name: 'Cadastre seu evento' });
      userEvent.click(openModalButton);

      const emailInput = screen.getByLabelText('Email');
      const passwordInput = screen.getByLabelText('Senha');
      const loginButton = screen.getByRole('button', { name: 'Entrar' })

      userEvent.type(emailInput, 'email@email.com');
      userEvent.type(passwordInput, '123456');
      userEvent.click(loginButton);

      // await waitFor(() => screen.getByLabelText('página'))
      await waitForElementToBeRemoved(emailInput)
      const { pathname } = history.location;
      expect(pathname).toBe('/events/register');
    });
  });

  describe('O modal de cadastro possui elementos corretos', () => {
    beforeEach(() => {
      renderWithRouter(<App />);
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
      renderWithRouter(<App />);
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
