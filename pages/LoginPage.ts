import {Page, Locator} from '@playwright/test';

export class LoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

    get LoginPageHeader(): Locator {
        return this.page.getByText('Swag Labs');
    }

    get EmailInput(): Locator {
        return this.page.getByTestId('username');
    }

    get PasswordInput(): Locator {
        return this.page.getByTestId('password');
    }

    get LoginButton(): Locator {
        return this.page.getByTestId('login-button');
    }

    async login(username: string, password: string) {
        await this.EmailInput.fill(username);
        await this.PasswordInput.fill(password);
        await this.LoginButton.click();
    }

}