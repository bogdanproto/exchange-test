export interface IUser {
  _id: string | null;
  name: string | null;
  email: string | null;
  phone: string | null;
  experience: number | null;
  avatarCloudURL: string | null;
  mainsport: string | null;
  eqpts: IEqptItem[] | [];
  sports: null | string[];
}

export interface ISliceAuthUser {
  user: IUser;
  token: string | null;
  isLoggedIn: boolean;
  errorAuth: string | null;
  isRefreshing: boolean;
  isAppLoaded: boolean;
}

export interface IUserSignUpSuccess {
  user: {
    name: string;
    email: string;
    mainsport: string;
    sports: string[];
  };
  token: string;
}

export interface IUserLogInSuccess {
  user: {
    name: string;
    email: string;
    phone: string;
    experience: number;
    avatarCloudURL: string;
    mainsport: string;
    eqpts: IEqptItem[] | [];
    sports: string[];
  };
  token: string;
}

export interface IUserAvatarSuccess {
  avatarCloudURL: string;
}

export interface IUserProfileSuccess {
  name: string | null;
  phone: string | null;
  experience: number | null;
}

export interface IUserView {
  _id: string;
  name: string;
  phone: string;
  experience: string;
  avatarCloudURL: string;
}

//===========Interface Form================
export interface IUserForm {
  name: string;
  email: string;
  password: string;
}

export interface IUserLogin extends Pick<IUserForm, 'email' | 'password'> {}

export interface IUserSignUp
  extends Pick<IUserForm, 'name' | 'email' | 'password'> {}

export interface IUserProfile {
  name?: string;
  phone?: string;
  experience?: number;
}

//==============EQPTS========================
export interface IEqptItem {
  _id: string;
  title: string;
  size: string;
}

export interface IListEqpts {}

export interface IEqptItemForm extends Pick<IEqptItem, 'title' | 'size'> {}

export interface IEqptId extends Pick<IEqptItem, '_id'> {}

//==============Sports========================
export interface ISportItem {
  _id: string;
  sport: string;
}
