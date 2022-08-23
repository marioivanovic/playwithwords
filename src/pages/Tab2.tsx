import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useState } from "react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab2.css";

const Tab2: React.FC = () => {
  const [test, setTest] = useState("Aucun Mot");
  const [value, setValue] = useState("");
  const [noRepeat, setNoRepeat] = useState("");
  const [color, setColor] = useState([{ color: "", value: []},{color: "", value: []},{color: "", value: []},{color: "", value: []},{color: "", value: []}]);
  const array = [
    "ABACA",
    "ABALE",
    "ABATS",
    "ABBES",
    "ABCES",
    "ABDOS",
    "ABEES",
    "ABERS",
    "ABETI",
    "ABIES",
    "ABIMA",
    "ABIME",
    "ABLES",
    "ABOIE",
    "ABOIS",
    "ABOLI",
  ];
  let alreadyDone:any = [];
  const randomValueFromArray = () => {
    if (alreadyDone.length === 0) {
      for (let i:number = 0; i < array.length; i++) alreadyDone.push(i);
    }
  
    let randomValueIndex = Math.floor(Math.random() * alreadyDone.length);

    let indexOfItemInMyArray = alreadyDone[randomValueIndex];
  
    alreadyDone.splice(randomValueIndex, 1);
  
    setNoRepeat(array[indexOfItemInMyArray])
    console.log(indexOfItemInMyArray);
    console.log(alreadyDone);
    console.log(randomValueIndex);
    // console.log(alreadyDone);
    // return myArray[indexOfItemInMyArray];
  };
  
  // randomValueFromArray(["a", "b", "c", "d", "e", "f"]);
  
  
  
  const strRandom = () => {
    let result = "";
    let charactersLength = array.length;
    result += array[Math.floor(Math.random() * charactersLength)];
    setTest(result);
    console.log(result);
  };

  const compare = () => {
    let str = "";
    if (value.toLocaleLowerCase() === test.toLocaleLowerCase()) {
      console.log("le mot green");
      str = value;
    } else {
      let arrayValue = value.split("");
      let arrayTest = test.split("");
      for (let i = 0; i < arrayValue.length; i++) {
        const strSplit = arrayValue[i];
        if (test.includes(strSplit.toUpperCase())) {
          for (let index = 0; index < arrayTest.length; index++) {
            const worldSplit = arrayTest[index];
            if (index === i) {
              if (worldSplit.toLocaleUpperCase() === strSplit.toLocaleUpperCase()) {
                console.log("color green ", strSplit, worldSplit);
              }
              if (
                worldSplit.toLocaleUpperCase() !==
                  strSplit.toLocaleUpperCase() &&
                test.includes(strSplit.toUpperCase())
              ) {
                console.log("color orange ", strSplit, worldSplit);
              }
            }
          }
        } else {
          console.log("rouge", strSplit);
        }
      }
    }
  };

  const handleChange = (e: any) => {
    setValue(e.target.value);
    // console.log(e)
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>

        <h1>Home</h1>
        <h1>{test}</h1>
        <button onClick={strRandom}>Generer</button>
        <input onChange={handleChange} value={value} name="value" />
        <button onClick={compare}>Soumettre</button>
        <h1>{noRepeat}</h1>
        <button onClick={randomValueFromArray}>repeat</button>
        <ExploreContainer name="Tab 2 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
