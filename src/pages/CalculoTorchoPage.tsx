// src/pages/CalculoTorchoPage.tsx
import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import CalculoTorcho from '../components/CalculoTorcho';

const CalculoTorchoPage: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <CalculoTorcho />
      </IonContent>
    </IonPage>
  );
};

export default CalculoTorchoPage;
