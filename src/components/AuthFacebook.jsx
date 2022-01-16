import React from 'react';
import FacebookLogin from 'react-facebook-login';

const AuthFacebook = ({getAuthName}) => {
  const responseFacebook = (response) => {
    getAuthName(response.name);
  };

  return (
    <>
      <FacebookLogin
        appId="493891115492129"
        autoLoad={false}
        fields="name"
        callback={responseFacebook} 
        cssClass="fb-button btn"
      />
    </>
  );
};

export default AuthFacebook;
