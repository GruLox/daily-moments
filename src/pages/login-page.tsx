import { IonContent, IonHeader, IonTitle, IonToolbar, IonPage, IonRouterLink, IonButton, IonList, IonItem, IonLabel, IonInput, IonText, IonLoading } from '@ionic/react';
import { Redirect } from 'react-router';
import { useAuth } from '../auth.context';
import { auth } from '../firebase.utils';
import { useState } from 'react';

type Props = {
  onLogin: () => void;
};

const LoginPage: React.FC = () => {
  const { loggedIn } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState({ loading: false, error: false });


  const handleLogin = async () => {
    try {
      setStatus({ loading: true, error: false });
      const credential = await auth.signInWithEmailAndPassword(email, password);
      console.log('credential:', credential);
    } catch (error) {
      console.log('error:', error);
      setStatus({ loading: false, error: true });
    }
  }

  if (loggedIn) {
    return <Redirect to='/my/entries' />
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList>
          <IonItem>
            <IonLabel position='stacked'>Email</IonLabel>
            <IonInput type='email' value={email} onIonChange={e => setEmail(e.detail.value!)} />
          </IonItem>
          <IonItem>
            <IonLabel position='stacked'>Password</IonLabel>
            <IonInput type='password' value={password} onIonChange={e => setPassword(e.detail.value!)} />
          </IonItem>
        </IonList>
        {status.error && <IonText color={'danger'}>Invalid Credentials</IonText>}
        <IonButton expand='block' onClick={handleLogin}>Login</IonButton>
        <IonButton expand='block' routerLink='/register' fill='clear'>
          Don't have an account?
        </IonButton>
        <IonLoading isOpen={status.loading} />
      </IonContent>
    </IonPage>
  );
};

export default LoginPage
