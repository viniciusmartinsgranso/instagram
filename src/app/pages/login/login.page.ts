import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUserPayload } from '../../components/payloads/login.user.payload';
import { RegisterUserPayload } from '../../components/payloads/register.user.payload';
import { HelperService } from '../../components/services/helper.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private readonly router: Router,
    private readonly helper: HelperService
  ) { }

  public user: LoginUserPayload = {
    user: '',
    password: '',
  };

  public mockedUser: LoginUserPayload = {
    user: 'Vini',
    password: '123456'
  };

  public mockedCreateUser: RegisterUserPayload = {
    email: 'vini@email.com',
    name: 'Vini',
    username: 'vini',
    password: '123456',
  };

  public createUser: RegisterUserPayload = {
    email: '',
    name: '',
    username: '',
    password: '',
  };

  public isNewUser: boolean = false;

  ngOnInit() {
  }

  public async login(): Promise<void> {
    if (!this.canLogin()) return;

    if (this.user.user !== this.mockedUser.user && this.user.password !== this.mockedUser.password)
      return this.helper.showToast('Usuário não encontrado, cadastre-se agora utilizando o botão Cadastre-se!')

    await this.router.navigate(['/home']);
  }

  public async register(): Promise<void> {
    if (!this.canRegister()) return;

    if (!this.isEqualToMocked()) return;

    await this.router.navigate(['/home']);
  }

  public isEqualToMocked(): boolean {
    if (this.createUser.name !== this.mockedCreateUser.name) return false;

    if (this.createUser.email !== this.mockedCreateUser.email) return false;

    if (this.createUser.username !== this.mockedCreateUser.username) return false;

    if (this.createUser.password !== this.mockedCreateUser.password) return false;

    return true;
  }

  public canLogin(): boolean {
    if (this.user.user.length < 4)
      return false;

    if (this.user.password.length < 6)
      return false;

    return true;
  }

  public canRegister(): boolean {
    if (this.createUser.email.length < 6) return false;

    if (this.createUser.name.length < 4) return false;

    if (this.createUser.username.length < 6) return false;

    if (this.createUser.password.length < 6) return false;

    return true;
  }

}
