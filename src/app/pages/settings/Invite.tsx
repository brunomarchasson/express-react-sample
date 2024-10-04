import React, { ReactElement } from 'react';
import InviteUserForm from './InviteUserForm';
import Dialog, { onCloseAction } from '../../components/Dialog/Dialog';

function Invite(): ReactElement {
  return (
    <Dialog title="Invite" onClose={onCloseAction.up}>
      <InviteUserForm></InviteUserForm>
    </Dialog>
  );
}

export default Invite;
