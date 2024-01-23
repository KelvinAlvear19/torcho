// src/components/CalculoTorcho.tsx
import React, { useState } from 'react';
import {
  IonContent,
  IonInput,
  IonButton,
  IonLabel,
  IonItem,
  IonText,
  IonCol,
  IonRow,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonPage,
  IonCheckbox,
} from '@ionic/react';

const CalculoTorcho: React.FC = () => {
  const [kgReal, setKgReal] = useState<number | string>('');
  const [numSalidas, setNumSalidas] = useState<number | string>('');
  const [numCortes, setNumCortes] = useState<number | string>('');
  const [largoComercial, setLargoComercial] = useState<number | string>('');
  const [despunte, setDespunte] = useState<number | string>('');
  const [factorPesoTorco, setFactorPesoTorco] = useState<number | string>('');
  const [culete, setCulete] = useState<number | string>('');
  const [tamañoTorcho, setTamañoTorcho] = useState<number | string>('');
  const [keepValues, setKeepValues] = useState({
    kgReal: false,
    numSalidas: false,
    numCortes: false,
    largoComercial: false,
    despunte: false,
    factorPesoTorco: false,
    culete: false,
  });

  const [lockValues, setLockValues] = useState({
    kgReal: false,
    numSalidas: false,
    numCortes: false,
    largoComercial: false,
    despunte: false,
    factorPesoTorco: false,
    culete: false,
  });

  const calcularTamañoTorcho = () => {
    const resultado =
      (Number(kgReal) * Number(numSalidas) * (Number(numCortes) * Number(largoComercial) + Number(despunte))) /
      Number(factorPesoTorco) +
      Number(culete);
    setTamañoTorcho(resultado.toFixed(2));
  };

  const limpiarValores = () => {
    setKgReal(lockValues.kgReal ? kgReal : '');
    setNumSalidas(lockValues.numSalidas ? numSalidas : '');
    setNumCortes(lockValues.numCortes ? numCortes : '');
    setLargoComercial(lockValues.largoComercial ? largoComercial : '');
    setDespunte(lockValues.despunte ? despunte : '');
    setFactorPesoTorco(lockValues.factorPesoTorco ? factorPesoTorco : '');
    setCulete(lockValues.culete ? culete : '');
    setTamañoTorcho('');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Ingeniero Francis Torres</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonRow>
          <IonCol size="6">
            <IonItem  style={{ marginBottom: '20px' }}>
              <IonLabel position="stacked" style={{ color: 'black' }}>
                Kg real
              </IonLabel>
              <IonInput
                value={kgReal}
                onIonChange={(e) => setKgReal(e.detail.value!)}
                type="tel"
                inputmode="numeric"
                pattern="[0-9]*"
                placeholder="Ingrese el Kg real"
              ></IonInput>
              <IonCheckbox
                slot="end"
                checked={lockValues.kgReal}
                onIonChange={(e) => setLockValues({ ...lockValues, kgReal: e.detail.checked })}
              />
            </IonItem>

            <IonItem  style={{ marginBottom: '20px' }}>
              <IonLabel position="stacked" style={{ color: 'black' }}>
                Número de salidas
              </IonLabel>
              <IonInput
                value={numSalidas}
                onIonChange={(e) => setNumSalidas(e.detail.value!)}
                type="tel"
                inputmode="numeric"
                pattern="[0-9]*"
                placeholder="Ingrese el número de salidas"
              ></IonInput>
              <IonCheckbox
                slot="end"
                checked={lockValues.numSalidas}
                onIonChange={(e) => setLockValues({ ...lockValues, numSalidas: e.detail.checked })}
              />
            </IonItem>

            <IonItem  style={{ marginBottom: '20px' }}>
              <IonLabel position="stacked" style={{ color: 'black' }}>
                Número de cortes
              </IonLabel>
              <IonInput
                value={numCortes}
                onIonChange={(e) => setNumCortes(e.detail.value!)}
                type="tel"
                inputmode="numeric"
                pattern="[0-9]*"
                placeholder="Ingrese el número de cortes"
              ></IonInput>
              <IonCheckbox
                slot="end"
                checked={lockValues.numCortes}
                onIonChange={(e) => setLockValues({ ...lockValues, numCortes: e.detail.checked })}
              />
            </IonItem>
          </IonCol>

          <IonCol size="6">
            <IonItem  style={{ marginBottom: '20px' }}>
              <IonLabel position="stacked" style={{ color: 'black' }}>
                Largo comercial
              </IonLabel>
              <IonInput
                labelPlacement="stacked"
                fill="outline"
                placeholder="Ingrese el largo comercial"
                value={largoComercial}
                onIonChange={(e) => setLargoComercial(e.detail.value!)}
                type="tel"
                inputmode="numeric"
                pattern="[0-9]*"
              ></IonInput>
              <IonCheckbox
                slot="end"
                checked={lockValues.largoComercial}
                onIonChange={(e) => setLockValues({ ...lockValues, largoComercial: e.detail.checked })}
              />
            </IonItem>

            <IonItem  style={{ marginBottom: '20px' }}>
              <IonLabel position="stacked" style={{ color: 'black' }}>
                Despunte
              </IonLabel>
              <IonInput
                labelPlacement="stacked"
                fill="outline"
                placeholder="Ingrese el despunte"
                value={despunte}
                onIonChange={(e) => setDespunte(e.detail.value!)}
                type="tel"
                inputmode="numeric"
                pattern="[0-9]*"
              ></IonInput>
              <IonCheckbox
                slot="end"
                checked={lockValues.despunte}
                onIonChange={(e) => setLockValues({ ...lockValues, despunte: e.detail.checked })}
              />
            </IonItem>

            <IonItem  style={{ marginBottom: '20px' }}>
              <IonLabel position="stacked" style={{ color: 'black' }}>
                Culotte
              </IonLabel>
              <IonInput
                labelPlacement="stacked"
                fill="outline"
                placeholder="Ingrese el Culotte"
                value={culete}
                onIonChange={(e) => setCulete(e.detail.value!)}
                type="tel"
                inputmode="numeric"
                pattern="[0-9]*"
              ></IonInput>
              <IonCheckbox
                slot="end"
                checked={lockValues.culete}
                onIonChange={(e) => setLockValues({ ...lockValues, culete: e.detail.checked })}
              />
            </IonItem>
          </IonCol>
        </IonRow>

        <IonItem  style={{ marginBottom: '20px' }}>
          <IonLabel position="stacked" style={{ color: 'black' }}>
            Factor de peso torcho
          </IonLabel>
          <IonInput
            labelPlacement="stacked"
            fill="outline"
            placeholder="Ingrese el factor de peso torcho"
            value={factorPesoTorco}
            onIonChange={(e) => setFactorPesoTorco(e.detail.value!)}
            type="tel"
            inputmode="numeric"
            pattern="[0-9]*"
          ></IonInput>
          <IonCheckbox
            slot="end"
            checked={lockValues.factorPesoTorco}
            onIonChange={(e) => setLockValues({ ...lockValues, factorPesoTorco: e.detail.checked })}
          />
        </IonItem>

        <IonButton  color="success" expand="full" onClick={calcularTamañoTorcho}>
          Calcular
        </IonButton>
    <br />  
        <IonButton  color="warning" expand="full" onClick={limpiarValores}>
          Limpiar
        </IonButton>

        <IonItem>
          <IonLabel>Tamaño Torcho:</IonLabel>
          <IonText>{tamañoTorcho}</IonText>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default CalculoTorcho;
