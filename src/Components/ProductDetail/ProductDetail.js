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
        </div>
      </div>
    </div>
  );
}
