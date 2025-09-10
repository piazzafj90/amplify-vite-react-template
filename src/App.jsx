import * as React from 'react';
import Container from '@mui/material/Container';
import MarketingPage from '../src/pages/MarketingPage';
import DbIcon from '../src/assets/DrinksBoxLogo.svg';

import '../src/amplifyConfig';

import { Authenticator, useTheme, View, Image } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

const components = {
    Header() {
        const {tokens} = useTheme();

        return (
            <View textAlign="center" padding={tokens.space.large}>
                <Image
                    alt="Amplify logo"
                    src={DbIcon}
                />
            </View>
        );
    },
}

export default function App() {
  return (
      <Authenticator hideSignUp components={components}>
        <Container maxWidth="med">
          <MarketingPage />
        </Container>
      </Authenticator>
  );
}