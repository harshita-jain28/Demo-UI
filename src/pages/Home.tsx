import { IonButtons,IonItem,IonCardHeader,IonCardSubtitle,IonCardTitle, IonGrid,IonIcon,IonRow,IonCol,IonCard,IonCardContent,IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
// import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import Cooking from "../components/Cooking";
import Cards from "../components/Cards";
import {cashOutline, pencilOutline,arrowUpCircleOutline,todayOutline,personOutline,addOutline} from "ionicons/icons";

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
         <Cooking/>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol>
          <Cards fabButton={pencilOutline} startIcon={cashOutline}>Update Budget</Cards>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol>
          <Cards fabButton={arrowUpCircleOutline} startIcon={todayOutline}>Add Menu</Cards>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol>
          <Cards fabButton={addOutline} startIcon={personOutline}>Add Vendor</Cards>
        </IonCol>
      </IonRow>
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
