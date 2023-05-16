import { IonContent, IonHeader, IonTitle, IonToolbar, IonPage, IonButtons, IonBackButton } from '@ionic/react';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { firestore } from '../firebase.utils';

type RouteParams = {
  id: string;
}

const EntryPage: React.FC = () => {
  const { id } = useParams<RouteParams>();
  const [entry, setEntry] = useState<any>();

  useEffect(() => {
    const entryRef = firestore.collection('entries').doc(id);
    entryRef.get().then(doc => {
      const entry = { id: doc.id, ...doc.data() };
      setEntry(entry);
    })
  }, [id]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>{entry?.title}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {entry?.description}
      </IonContent>
    </IonPage>
  );
};

export default EntryPage;
