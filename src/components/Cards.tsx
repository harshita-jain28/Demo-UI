import React ,{useState} from 'react';
import { IonFab, IonItem, IonLabel,IonToast,IonGrid, IonButton,IonCol, IonIcon, IonCard, IonCardContent, IonRow, IonInput, IonMenuButton, IonPage, IonTitle, IonToolbar,IonCardTitle, IonFabButton } from '@ionic/react';
import {cashOutline, pencilOutline} from "ionicons/icons";
import "./Cards.css";

const Cards: React.FC<{fabButton: string; startIcon: string}> = (props) => {
    const [isShow, setIsShow] = useState<boolean>(false);
    const showContent = () =>{
        setIsShow(!isShow);
    }
    const [toastIsShown, setToastIsShown] = useState<boolean>(false);

    const showToast = () => {
        setToastIsShown(true);
    }
    return (
        <IonCard className="ion-padding ">
            <IonItem lines="none"> 
                <IonIcon className="card-icon" color="dark" icon={props.startIcon} slot="start" />
                <IonCardTitle className="title">{props.children}</IonCardTitle>
                <IonFab horizontal="end" color="dark">
                    <IonFabButton  color="dark" className="btn" onClick={showContent} size="small">
                        <IonIcon icon={props.fabButton} ></IonIcon>
                    </IonFabButton>
                </IonFab>
            </IonItem>
            {isShow &&
                <IonCardContent>
                    <IonGrid>
                    <IonRow>
                    <IonCol>
                    <IonItem >
                        <IonLabel position="floating" className="label">Enter Budget</IonLabel>
                        <IonInput type="number"></IonInput>
                    </IonItem>
                    </IonCol>
                    <IonCol>
                    <IonButton fill="outline" color="dark" onClick={() => showToast()}>Update</IonButton>
                    <IonToast
                    isOpen={toastIsShown}
                    onDidDismiss={() => setToastIsShown(false)}
                    message="Budget Updated!"
                    duration={3000}
                />
                    </IonCol>
                    </IonRow>
                    </IonGrid>
                </IonCardContent>
            }
        </IonCard>
    )
}
export default Cards;