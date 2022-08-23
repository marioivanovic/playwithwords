import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useEffect, useState } from "react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab2.css";

const Tab2: React.FC = () => {
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
  const [arrI, setArrI] = useState([]);
  const [isValid, setIsValid] = useState(false);
  const [isRefrech, setIsrefrech] = useState(false);
  const [test, setTest] = useState("Aucun Mot");
  const [nbrTest, setNbrTest] = useState(0);
  const [value, setValue] = useState("");
  const [noRepeat, setNoRepeat] = useState("");
  const [str, setStr] = useState("");
  const [color, setColor] = useState([{ color: "", value: []},{color: "", value: []},{color: "", value: []},{color: "", value: []},{color: "", value: []}]);
  let alreadyDone:any = [];
  // let nbrTest = 0;

  useEffect(() => {
    strRandom();
    // randomValueFromArray();
  }, [])
  

  const randomValueFromArray = () => {
    if (arrI.length === 0) {
      for (let i:number = 0; i < array.length; i++) alreadyDone.push(i);
      setArrI(alreadyDone);
    }
    
    let randomValueIndex = Math.floor(Math.random() * arrI.length);
    let indexOfItemInMyArray = arrI[randomValueIndex];

    arrI.splice(randomValueIndex, 1);
    setNoRepeat(array[indexOfItemInMyArray]);
  };
  
  const strRandom = () => {
    let result = "";
    let charactersLength = array.length;
    result += array[Math.floor(Math.random() * charactersLength)];
    setTest(result);
    console.log(result);
  };

  const compare = async () => {
    if (value.toLocaleLowerCase() === test.toLocaleLowerCase()) {
      console.log("le mot green");
      setIsValid(true);
    } else {
      console.log('first')
      setIsValid(false);
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
    setNbrTest(nbrTest+1)
    console.log(nbrTest);
    let text = await winLoose();
    setStr(text);
  };

  const handleChange = (e: any) => {
    setValue(e.target.value);
  };

  const winLoose =async()=>{
    console.log(isValid)
    let result = '';
    if (nbrTest===6) {
      if (isValid) {
        result="Felicitations !!!!!"
      }else{
        result='Dommage, loose';
      }

      setIsrefrech(true);
    }


    if (nbrTest<6) {
      console.log("nbrTest>6");
      if (isValid) {
        result="Felicitations !!!!!"
      }else{
        result='Dommage, loose Vous pouvez reessayez';
      }
    }

    console.log(result)
    return result;
  }

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
        <h1>{str}</h1>
        <br/>

        <h1>{test}</h1>
        <h1>Nombre d'essai : {nbrTest}</h1>
        {/* <button onClick={strRandom}>Generer</button> */}
        <br/>

        <input onChange={handleChange} value={value} name="value" />
        <button onClick={compare}>Soumettre</button>
        <br/>

        <h1>{noRepeat}</h1>
        <button onClick={randomValueFromArray}>repeat</button>

        {/* <ExploreContainer name="Tab 2 page" /> */}
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
