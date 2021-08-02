import { IonButtons,IonItem,IonCardHeader,IonCardSubtitle,IonCardTitle, IonGrid,IonIcon,IonRow,IonCol,IonCard,IonCardContent,IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
// import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import {restaurantOutline} from "ionicons/icons";


const Page: React.FC = () => {
  return (
    <IonPage>
      <IonHeader >
        <IonToolbar color="dark">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
    {/* <div className="main"> */}
    <IonGrid fixed={true}>
      <IonRow className="ion-justify-content-center" >

        <IonCol className=" ion-justify-content-center">
          <div className="main">
          <IonCard className="card1 ion-padding-top ion-text-center" color="dark" mode="md">
            <IonIcon className="log" icon={restaurantOutline}></IonIcon>
            <IonTitle className="title2 ion-text-center"> What's Cooking</IonTitle>
          </IonCard>
          <IonCard className="card2" mode="md">
            <IonCardContent className="content ion-text-center">
                <h1>Item</h1>
                <h1>Rate</h1>
            </IonCardContent>
          </IonCard>
        </div>
        </IonCol>
      </IonRow>
      {/* <IonRow>
        <IonCol>
        <IonCard  mode="md">
        <IonCardHeader>
            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
            <IonCardTitle>Card Title</IonCardTitle>
          </IonCardHeader>
          </IonCard>
        </IonCol>
      </IonRow> */}
    </IonGrid>
    {/* </div> */}

    </IonContent>
      {/* <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader> */}
	{/* <ExploreContainer name="Home" /> */}
      {/* </IonContent> */}
    </IonPage>
  );
};

export default Page;
