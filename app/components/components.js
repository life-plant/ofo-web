import homeComponent from './home/home';
import heroComponent from './hero/hero';
import loginComponent from './login/login';

export default app => {
  INCLUDE_ALL_MODULES([homeComponent, heroComponent, loginComponent], app);
}
