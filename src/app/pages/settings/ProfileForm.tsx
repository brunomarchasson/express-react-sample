import React from 'react';

type Props = {
  profileId: string;
};

const ProfileForm = ({ profileId }: Props) => {
  console.log(profileId);
  return <div>ProfileForm</div>;
};

export default ProfileForm;
