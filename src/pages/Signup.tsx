import React, { useState, useContext, Dispatch } from 'react';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButtons, IonMenuButton, IonRow, IonCol, IonButton, IonList, IonItem, IonLabel, IonInput, IonText } from '@ionic/react';
import './Login.css';
// import { RouteComponentProps, Redirect } from 'react-router';

const Signup: React.FC = () => {

  const [username, setUsername] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [budget, setBudget] = useState('');
  const [preferredRestaurants, setPreferredRestaurants] = useState('');
  const [preferredCuisines, setPreferredCuisines] = useState('');
  // const [formSubmitted, setFormSubmitted] = useState(false);
  // const [usernameError, setUsernameError] = useState(false);
  // const [passwordError, setPasswordError] = useState(false);

  const login = async (e: React.FormEvent) => {
    e.preventDefault();
    // setFormSubmitted(true);
    // if(!username) {
    //   setUsernameError(true);
    // }
    // if(!password) {
    //   setPasswordError(true);
    // }

    // if(username && password) {
    //   setIsLoggedin(true);
    // }
  };

  return (
    <IonPage id="login-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Sign Up</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>

        <div className="login-logo">
          <img src="assets/img/appicon.svg" alt="Ionic logo" />
        </div>

        <form noValidate onSubmit={login}>
          <IonList>
            <IonItem>
              <IonLabel position="stacked" color="primary">Username</IonLabel>
              <IonInput name="username" type="text" value={username} spellCheck={false} autocapitalize="off" onIonChange={e => setUsername(e.detail.value!)}
                required>
              </IonInput>
            </IonItem>

            <IonItem>
              <IonLabel position="stacked" color="primary">Password</IonLabel>
              <IonInput name="password1" type="password" value={password1} onIonChange={e => setPassword1(e.detail.value!)}>
              </IonInput>
            </IonItem>

            <IonItem>
              <IonLabel position="stacked" color="primary">Confirm Password</IonLabel>
              <IonInput name="password2" type="password" value={password2} onIonChange={e => setPassword2(e.detail.value!)}>
              </IonInput>
            </IonItem>

            <IonItem>
              <IonLabel position="stacked" color="primary">Name</IonLabel>
              <IonInput name="name" type="text" value={name} onIonChange={e => setName(e.detail.value!)}>
              </IonInput>
            </IonItem>

            <IonItem>
              <IonLabel position="stacked" color="primary">Address</IonLabel>
              <IonInput name="address" type="text" value={address} onIonChange={e => setAddress(e.detail.value!)}>
              </IonInput>
            </IonItem>

            <IonItem>
              <IonLabel position="stacked" color="primary">Phone</IonLabel>
              <IonInput name="phone" type="text" value={phone} onIonChange={e => setPhone(e.detail.value!)}>
              </IonInput>
            </IonItem>

            <IonItem>
              <IonLabel position="stacked" color="primary">Budget</IonLabel>
              <IonInput name="budget" type="text" value={budget} onIonChange={e => setBudget(e.detail.value!)}>
              </IonInput>
            </IonItem>

            <IonItem>
              <IonLabel position="stacked" color="primary">Preferred Restaurants</IonLabel>
              <IonInput name="budget" type="text" value={preferredRestaurants} onIonChange={e => setPreferredRestaurants(e.detail.value!)}>
              </IonInput>
            </IonItem>

            <IonItem>
              <IonLabel position="stacked" color="primary">Preferred Cuisines</IonLabel>
              <IonInput name="budget" type="text" value={preferredCuisines} onIonChange={e => setPreferredCuisines(e.detail.value!)}>
              </IonInput>
            </IonItem>

            <IonItem>
              <IonLabel position="stacked" color="primary">Mess Menu</IonLabel>
	      <input type="file" />
            </IonItem>

          </IonList>

          <IonRow>
            <IonCol>
              <IonButton type="submit" expand="block">Submit</IonButton>
            </IonCol>
          </IonRow>
        </form>

      </IonContent>

    </IonPage>
  );
};

export default Signup;
