import React from 'react';
import { Button } from '../../common';

function GroomerProfilePage(props) {
  const { userInfo, authService } = props;

  return (
    <div>
      <h1>Hi {userInfo.name} Welcome to Express Groomer</h1>
      <div>
        <p>
          <Button
            handleClick={() => authService.logout()}
            buttonText="Logout"
          />
        </p>
      </div>
    </div>
  );
}
export default GroomerProfilePage;
