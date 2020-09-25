import React, { useState } from 'react';
import { Transition, SwitchTransition } from 'react-transition-group';

import { defaultStyle, transitionStyles } from './animations';
import { Auth as AuthContainer } from '../../organisms';

export default function Auth() {
  const [showLogin, setShowLogin] = useState(true);

  const handleToggleAuth = () => {
    setShowLogin(!showLogin);
  };

  return (
    <SwitchTransition>
      <Transition
        key={showLogin ? 'Login' : 'Signup'}
        addEndListener={(node, done) => node.addEventListener('transitioned', done, false)}
        timeout={300}
      >
        {(state) => {
          if (showLogin) {
            return (
              <AuthContainer
                islogin
                key="Login"
                toggleauth={handleToggleAuth}
                style={{ ...defaultStyle, ...transitionStyles[state] }}
              />
            );
          }
          return (
            <AuthContainer
              key="Signup"
              toggleauth={handleToggleAuth}
              style={{ ...defaultStyle, ...transitionStyles[state] }}
            />
          );
        }}
      </Transition>
    </SwitchTransition>
  );
}
