import { useEffect, useState } from "react";
import "./App.css";
import "./styles/bottle.css";

// Graphs
import PPLGraph from "./components/PPLGraph";
import OralIDGraph from "./components/OralIDGraph";

const productList = ["TheraStom", "OxiStom", "SalivaMAX", "BioStom", "OralID"];

// Colors for each of the products.
const theraStomColors = ["#a6a9aa", "#2a5c8a", "#84A3C4"];
const oxiStomColors = ["#84754e", "#2a5c8a", "#84A3C4"];
const salivaMAXColors = ["#009681", "#333333", "#707070"];
const bioStomColors = ["#84754e", "#2a5c8a", "#84A3C4"];
const oralIDColors = ["#009681", "#333333", "#707070"];

/* 
 -------------------------------------------------------
  Dummy data for the products since they are confidential.
 -------------------------------------------------------
*/

const theraStomUnits = [
  {
    name: "Jan 2022",
    salesTypeOne: 100,
    salesTypeTwo: 100,
    salesTypeThree: 100,
  },
];
const oxiStomUnits = [
  {
    name: "Jan 2022",
    salesTypeOne: 100,
    salesTypeTwo: 100,
    salesTypeThree: 0,
  },
];
const salivaMAXUnits = [
  {
    name: "Apr 2022",
    salesTypeOne: 100,
    salesTypeTwo: 100,
    salesTypeThree: 100,
  },
];
const bioStomUnits = [
  {
    name: "April 2022",
    salesTypeOne: 10,
    salesTypeTwo: 10,
    salesTypeThree: 10,
  },
];
const oralIDUnits = [
  {
    name: "Jan 2022",
    salesTypeOne: 10,
    salesTypeTwo: 10,
  },
];

const theraStomDates = theraStomUnits.map((unit) => unit.name);
const theraStomOfficeSales = theraStomUnits.map((unit) => unit.salesTypeOne);
const theraStomsalesTypeTwo = theraStomUnits.map((unit) => unit.salesTypeTwo);
const theraStomsalesTypeThree = theraStomUnits.map(
  (unit) => unit.salesTypeThree
);

const oxiStomDates = oxiStomUnits.map((unit) => unit.name);
const oxiStomOfficeSales = oxiStomUnits.map((unit) => unit.salesTypeOne);
const oxiStomsalesTypeTwo = oxiStomUnits.map((unit) => unit.salesTypeTwo);
const oxiStomsalesTypeThree = oxiStomUnits.map((unit) => unit.salesTypeThree);

const salivaMAXDates = salivaMAXUnits.map((unit) => unit.name);
const salivaMAXOfficeSales = salivaMAXUnits.map((unit) => unit.salesTypeOne);
const salivaMAXsalesTypeTwo = salivaMAXUnits.map((unit) => unit.salesTypeTwo);
const salivaMAXsalesTypeThree = salivaMAXUnits.map(
  (unit) => unit.salesTypeThree
);

const bioStomDates = bioStomUnits.map((unit) => unit.name);
const bioStomOfficeSales = bioStomUnits.map((unit) => unit.salesTypeOne);
const bioStomsalesTypeTwo = bioStomUnits.map((unit) => unit.salesTypeTwo);
const bioStomsalesTypeThree = bioStomUnits.map((unit) => unit.salesTypeThree);

const oralIDDates = oralIDUnits.map((unit) => unit.name);
const oralIDsalesTypeTwo = oralIDUnits.map((unit) => unit.salesTypeTwo);
const oralIDsalesTypeOne = oralIDUnits.map((unit) => unit.salesTypeOne);

function App() {
  const [activeProduct, setActiveProduct] = useState(productList[0]);

  useEffect(() => {
    const timeoutId = setTimeout(updateActiveProduct, 7500);

    return () => clearTimeout(timeoutId);
  }, [activeProduct]);

  function updateActiveProduct() {
    const currentIndex = productList.indexOf(activeProduct);

    const nextIndex = currentIndex + 1;

    if (nextIndex >= productList.length) {
      setActiveProduct(productList[0]);
    } else {
      setActiveProduct(productList[nextIndex]);
    }
  }

  const font = {
    fontFamily: "'AlexandriaFLF', sans-serif",
  };

  const weight = {
    fontWeight: "bold",
  };

  const styles = Object.assign({}, font, weight);

  return (
    <div>
      <div className="font-size" style={styles}>
        {activeProduct}
      </div>
      {activeProduct == "TheraStom" && (
        <>
          <PPLGraph
            name={theraStomDates}
            colors={theraStomColors}
            salesTypeOne={theraStomOfficeSales}
            salesTypeTwo={theraStomsalesTypeTwo}
            salesTypeThree={theraStomsalesTypeThree}
          />
        </>
      )}
      {activeProduct == "OxiStom" && (
        <>
          <PPLGraph
            name={oxiStomDates}
            colors={oxiStomColors}
            salesTypeOne={oxiStomOfficeSales}
            salesTypeTwo={oxiStomsalesTypeTwo}
            salesTypeThree={oxiStomsalesTypeThree}
          />
        </>
      )}
      {activeProduct == "SalivaMAX" && (
        <PPLGraph
          name={salivaMAXDates}
          colors={salivaMAXColors}
          salesTypeOne={salivaMAXOfficeSales}
          salesTypeTwo={salivaMAXsalesTypeTwo}
          salesTypeThree={salivaMAXsalesTypeThree}
        />
      )}
      {activeProduct == "BioStom" && (
        <PPLGraph
          name={bioStomDates}
          colors={bioStomColors}
          salesTypeOne={bioStomOfficeSales}
          salesTypeTwo={bioStomsalesTypeTwo}
          salesTypeThree={bioStomsalesTypeThree}
        />
      )}
      {activeProduct == "OralID" && (
        <OralIDGraph
          name={oralIDDates}
          colors={oralIDColors}
          salesTypeOne={oralIDsalesTypeOne}
          salesTypeTwo={oralIDsalesTypeTwo}
        />
      )}
    </div>
  );
}

export default App;
