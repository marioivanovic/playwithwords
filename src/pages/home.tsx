import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonActionSheet,
} from "@ionic/react";
import { trash, close } from "ionicons/icons";
import { usePhotoGallery, UserPhoto } from "../hooks/usePhotoGallery";
import "./home.css";

const Home: React.FC = () => {
  const { deletePhoto } = usePhotoGallery();
  const [photoToDelete, setPhotoToDelete] = useState<UserPhoto>();

  return (
    <IonPage>
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">Photo Gallery</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardContent>A</IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardContent>A</IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardContent>A</IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardContent>A</IonCardContent>
        </IonCard>
        <IonActionSheet
          isOpen={!!photoToDelete}
          buttons={[
            {
              text: "Delete",
              role: "destructive",
              icon: trash,
              handler: () => {
                if (photoToDelete) {
                  deletePhoto(photoToDelete);
                  setPhotoToDelete(undefined);
                }
              },
            },
            {
              text: "Cancel",
              icon: close,
              role: "cancel",
            },
          ]}
          onDidDismiss={() => setPhotoToDelete(undefined)}
        />
      </IonContent>
    </IonPage>
  );
};

export default Home;
