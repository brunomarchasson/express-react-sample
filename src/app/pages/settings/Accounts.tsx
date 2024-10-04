import React, { ReactElement, useEffect } from 'react';
import { useOutlet } from 'react-router-dom';
import { UserDTO } from '../../../comon/types/api';
import DataTable from '../../components/Table';
import Error from '../../components/Error';
import { Icon } from '../../components/icons';
import InviteUser from './InviteUser';
import { GlobalLoader } from '../../services/global-loader/Loader';
import { useShallow } from 'zustand/react/shallow';
import { useUsersStore } from '../../stores/users.stores';
import { USER_STATUS } from '../../../modules/user/enums';
import { Link } from 'react-router-dom';
import { api } from '../../services/api';
import { useToast } from '../../services/toast/store';
import FeedbackButton from '../../components/Button';

function ActionColumn({ row }: { row?: UserDTO }) {
  if (!row) return null;
  return (
    <Link to={`/settings/accounts/${row.id}`}>
      <button className="btn btn-sm btn-circle btn-primary btn-ghost">
        <Icon icon="UserRoundPen"></Icon>
      </button>
    </Link>
  );
}

function StatusColumn({ data, row }: { data?: USER_STATUS; row?: UserDTO }) {
  const toaster = useToast((s) => s.toaster);

  if (!data) return null;

  const handleResend = async () => {
    try {
      await api.put(`auth/invitations/${row?.id}`);
      toaster.success('invitation send');
    } catch (e) {
      toaster.error('error');
      console.error(e);
      throw e;
    }
  };
  if (data === USER_STATUS.INVITED)
    return (
      <FeedbackButton
        data-tooltip="resend"
        data-placement="top-right"
        className="btn btn-sm btn-circle btn-primary btn-ghost"
        onClick={handleResend}
      >
        <Icon icon="Mail"></Icon>
      </FeedbackButton>
    );

  return (
    <div className="form-check">
      <input
        readOnly
        checked={data === USER_STATUS.ACTIVE}
        type="checkbox"
        className="form-switch"
      />
    </div>
  );
}
function Accounts(): ReactElement {
  const outlet = useOutlet();
  const { load, data, isLoading, isError } = useUsersStore(
    useShallow((state) => ({
      load: state.load,
      data: state.list,
      isLoading: state.loading,
      isError: state.error,
    })),
  );

  useEffect(() => {
    load();
  }, []);
  // const [{ isLoading, isError, data }] = useData<UserDTO[]>('users');

  console.log(isLoading, isError, data);
  if (isLoading) return <GlobalLoader.Loader></GlobalLoader.Loader>;
  if (isError) return <Error />;

  return (
    <div>
      <div>
        <h1>Accounts</h1>
        <InviteUser />
      </div>
      <DataTable<UserDTO> data={data || []}>
        <DataTable.Column title="name" dataKey="name"></DataTable.Column>
        <DataTable.Column title="email" dataKey="email"></DataTable.Column>
        <DataTable.Column title="role" dataKey="role"></DataTable.Column>
        <DataTable.Column title="active" dataKey="status">
          <StatusColumn />
        </DataTable.Column>
        <DataTable.Column title="" dataKey="">
          <ActionColumn />
        </DataTable.Column>
      </DataTable>
      <div className="search-bar">
        <div className="input-group">
          <button className="btn">
            <i className="search-icon scale-75"></i>
          </button>
          <input
            type="search"
            className="form-control"
            name="search"
            placeholder="Search"
          />
        </div>
      </div>
      <table className="table w-full">
        <thead>
          <tr>
            <th>User</th>
            <th>Role</th>
            <th>Permissions</th>
            <th>Active?</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>alphardex</td>
            <td>Administrator</td>
            <td className="space-x-2">
              <span className="tag tag-primary">Read</span>
              <span className="tag tag-success">Write</span>
              <span className="tag tag-danger">Execute</span>
            </td>
            <td>
              <div className="form-check">
                <input type="checkbox" className="form-switch" />
              </div>
            </td>
            <td>
              <button className="btn btn-primary edit">Edit</button>
            </td>
          </tr>
          <tr>
            <td>Aqua</td>
            <td>Modifier</td>
            <td className="space-x-2">
              <span className="tag tag-primary">Read</span>
              <span className="tag tag-success">Write</span>
            </td>
            <td>
              <div className="form-check">
                <input type="checkbox" className="form-switch" />
              </div>
            </td>
            <td>
              <button className="btn btn-primary edit">Edit</button>
            </td>
          </tr>
          <tr>
            <td>Megumin</td>
            <td>User</td>
            <td className="space-x-2">
              <span className="tag tag-primary">Read</span>
            </td>
            <td>
              <div className="form-check">
                <input type="checkbox" className="form-switch" />
              </div>
            </td>
            <td>
              <button className="btn btn-primary edit">Edit</button>
            </td>
          </tr>
          <tr>
            <td>Darkness</td>
            <td>Guest</td>
            <td>
              <span className="tag">None</span>
            </td>
            <td>
              <div className="form-check">
                <input type="checkbox" className="form-switch" />
              </div>
            </td>
            <td>
              <button className="btn btn-primary edit">Edit</button>
            </td>
          </tr>
        </tbody>
      </table>
      {outlet}
    </div>
  );
}

export default Accounts;
