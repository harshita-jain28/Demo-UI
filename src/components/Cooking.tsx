import React from 'react';
import {IonItem, IonLabel, IonButton, IonIcon,IonCard, IonCardContent, IonTitle } from '@ionic/react';
import {restaurantOutline,pin,beerOutline} from "ionicons/icons";
import "./Cooking.css";
const Cooking: React.FC = () => {
    return (
        <div className="main">
            <IonCard className="card1 ion-padding-top ion-text-center" color="dark" mode="md">
                <IonIcon className="log" icon={restaurantOutline}></IonIcon>
                <IonTitle className="title2 ion-text-center"> What's Cooking</IonTitle>
            </IonCard>
            <IonCard className="card2" mode="md">
                <IonItem className="content" >
                    <IonIcon className="beer" icon={beerOutline} slot="start" />
                    <IonLabel className="item" position="fixed">Item</IonLabel>
                    <IonButton fill="outline" slot="end" color="dark">Price</IonButton>
                </IonItem>
                <IonCardContent className="ion-text-center">
                    <div className="wrapper">
                        <div className="wave"></div>
                    </div>
                </IonCardContent>
            </IonCard>
        </div>

    );

};

export default Cooking;