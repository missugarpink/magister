import React from "react";
import { useParams } from "react-router-dom";
import productsData from "../../data.json";
import Header from "../Header/Header";
import "./Productdetail.css";

export default ProductDetail;
function ProductDetail() {
  const { name } = useParams();
  const product = productsData.find((p) => p.name === name);

  const caloriesPerGram = {
    protein: 4,
    fat: 9,
    carbohydrates: 4,
  };

  const calculateEnergyPercentage = (product, macro) => {
    const totalCalories =
      product.protein * caloriesPerGram.protein +
      product.fat * caloriesPerGram.fat +
      product.carbohydrates * caloriesPerGram.carbohydrates;
    const macroCalories = product[macro] * caloriesPerGram[macro];
    return (macroCalories / totalCalories) * 100;
  };

  const macros = ["protein", "fat", "carbohydrates"];
  const percentages = macros.map((macro) =>
    calculateEnergyPercentage(product, macro)
  );

  return (
    <div className="product-container">
      <Header text={product.name} />
      <p className="nutrition-info">Wartości odzywcze w 100g produktu</p>
      <div className="nutrition-container">
        <div className="nutrition-element">
          <p className="nutrition-header">Białko</p>
          <p className="nutrition-value">{product.protein}g</p>
          <p className="nutrition-percentage protein">
            {calculateEnergyPercentage(product, "protein").toFixed(0)}%
          </p>
        </div>
        <div className="nutrition-element">
          <p className="nutrition-header">Tłuszcz</p>
          <p className="nutrition-value">{product.fat}g</p>
          <p className="nutrition-percentage fat">
            {calculateEnergyPercentage(product, "fat").toFixed(0)}%
          </p>
        </div>
        <div className="nutrition-element">
          <p className="nutrition-header">Węglowodany</p>
          <p className="nutrition-value">{product.carbohydrates}g</p>
          <p className="nutrition-percentage carbohydrates">
            {calculateEnergyPercentage(product, "carbohydrates").toFixed(0)}%
          </p>
        </div>
        <div className="nutrition-element">
          <p className="nutrition-header">Energia</p>
          <p className="nutrition-value">{product.energy}kcal</p>
          <PieChart
            values={percentages}
            colors={["#e8b4b8", "#eed6d3", "#a49393"]}
          />
        </div>
      </div>
    </div>
  );
}

function PieChart({ values, colors }) {
  const total = values.reduce((acc, value) => acc + value, 0);
  const scaledValues = values.map((value) => (value / total) * 360);
  let cumulativeValue = 0;

  const slices = scaledValues.map((value, index) => {
    const [startX, startY] = getCoordinatesForAngle(cumulativeValue);
    cumulativeValue += value;
    const [endX, endY] = getCoordinatesForAngle(cumulativeValue);
    const largeArcFlag = value > 180 ? 1 : 0;
    return (
      <path
        key={index}
        d={`M 0 0 L ${startX} ${startY} A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY} Z`}
        fill={colors[index]}
      />
    );
  });

  return (
    <svg
      viewBox="-1 -1 2 2"
      style={{ transform: "rotate(-90deg)", marginTop: "20px" }}
    >
      {slices}
    </svg>
  );
}

const getCoordinatesForAngle = (angle) => {
  const radians = (angle * Math.PI) / 180;
  return [Math.cos(radians), Math.sin(radians)];
};
