import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUserPayload } from '../../components/payloads/login.user.payload';
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
  }

  public mockedUser: LoginUserPayload = {
    user: 'Vini',
    password: '123456'
  };

  ngOnInit() {
  }

  public async login(): Promise<void> {
    if (!this.canLogin()) return;

    if (this.user.user !== this.mockedUser.user && this.user.password !== this.mockedUser.password)
      return this.helper.showToast('Usuário não encontrado, cadastre-se agora utilizando o botão Cadastre-se!')

    await this.router.navigate(['/home']);
  }

  public canLogin(): boolean {
    if (this.user.user.length < 4)
      return false;

    if (this.user.password.length < 6)
      return false;

    return true;
  }

}
