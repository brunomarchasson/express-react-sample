import React from 'react';
import {
  Navigate,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  defer,
} from 'react-router-dom';
import { InitLayout } from './layout/InitLayout';
import { PublicLayout } from './layout/PublicLayout';
import AuthPage from './pages/auth/Auth';
import { ProtectedLayout } from './layout/ProtectedLayout';
import { useAuth } from './services/auth/store';
import Home from './pages/Home';
import UiPage from './pages/ui/UiPage.jsx';
import ChangePassword from './pages/auth/changePassword';
import MyProfile from './pages/settings/MyProfile';
import Accounts from './pages/settings/Accounts';
import Account from './pages/settings/Account';

const initAuthPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    useAuth
      .getState()
      .renew()
      .then((r) => {
        resolve(r);
      })
      .catch(reject);
  }, 0);
});

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      element={<InitLayout />}
      loader={() => defer({ initPromise: initAuthPromise })}
    >
      <Route path="/ui" element={<UiPage />} />

      <Route element={<PublicLayout />}>
        <Route path="/login" element={<AuthPage />} />
        <Route path="/register" element={<AuthPage register />} />
        <Route path="/reset-password" element={<ChangePassword />} />
      </Route>
      <Route path="/" element={<ProtectedLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/settings" element={<Home />}>
          <Route index element={<Navigate to="me" />} />
          <Route path="me" element={<MyProfile />} />
          <Route path="accounts" element={<Accounts />}>
            <Route path=":accountId" element={<Account />}></Route>
          </Route>
        </Route>
      </Route>

      {/* <Route element={<PublicLayout />}>
        <Route path="/login/define-password" element={<DefinePassword />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/auth/delete-account" element={<DeleteAccount />} />
      </Route>
      <Route path="/" element={<ProtectedLayout />}>
        <Route path="/" element={<Navigate to="admin" />} />
        <Route path="/admin" element={<AccessControlLayout roles={[ROLES.ADMIN]} />} >
          <Route path="/admin" element={<Admin />} >
            <Route index element={<Navigate to="users" />} />
            <Route path="users" element={<AdminUsers />} >
              <Route path=":userId" element={<AdminUser />} >
              </Route>
            </Route>

          </Route>
        </Route>
      </Route> */}
    </Route>,
  ),
);
