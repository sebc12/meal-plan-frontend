'use client';
import  { useState } from "react";
import { postRecipes } from "@/lib/postRecipes";

export default function NewWeekForm() {

    const [Name, setName] = useState("");
    const [Description, setDescription] = useState("");
    const [Ingredients, setIngredients] = useState([
        { name: "", amount: "", unit: "" },
    ]);

    const addIngredient = () => {
        setIngredients([...Ingredients, { name: "", amount: "", unit: "" }]);
    };

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      
      const recipeData = { 
          name: Name, 
          description: Description, 
          ingredients: Ingredients 
      };
  
      try {
          const response = await postRecipes(recipeData);
          console.log("Recipe submitted:", response);
          setName("");
          setDescription("");
          setIngredients([{ name: "", amount: "", unit: "" }]);
      } catch (error) {
          console.error("Error submitting recipe:", error);
      }
  };
  
    


  return (
    <form onSubmit={handleSubmit} className="space-y-4 flex flex-col w-2/3 mx-auto">
      
     <label htmlFor="">Recipe name*</label>
      <input type="text" value={Name} onChange={(e) => setName(e.target.value)} className="border border-gray-300 p-2 rounded"/>
      <label htmlFor="">Description</label>
      <input type="text" value={Description} onChange={(e) => setDescription(e.target.value)}  className="border border-gray-300 p-2 rounded"/>
      <label htmlFor="">Ingredients</label>
      {Ingredients.map((ingredient, index) => (
        <div key={index} className="flex justify-between pb-4">
          <div className="flex flex-col">
            <label htmlFor="">Ingredient*</label>
            <input
            type="text"
            value={ingredient.name}
            onChange={(e) => {
              const newIngredients = [...Ingredients];
              newIngredients[index].name = e.target.value;
              setIngredients(newIngredients);
            }}
            placeholder="f.eks. flour"
            className="border border-gray-300 p-2 rounded"
          />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Amount*</label>
            <input
            type="text"
            value={ingredient.amount}
            onChange={(e) => {
              const newIngredients = [...Ingredients];
              newIngredients[index].amount = e.target.value;
              setIngredients(newIngredients);
            }}
            placeholder="f.eks. 200"
            className="border border-gray-300 p-2 rounded"
            
          />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Unit*</label>
            <input
            type="text"
            value={ingredient.unit}
            onChange={(e) => {
              const newIngredients = [...Ingredients];
              newIngredients[index].unit = e.target.value;
              setIngredients(newIngredients);
            }}
            placeholder="f.eks. gram"
            className="border border-gray-300 p-2 rounded"
          />
          </div>   
        </div>
      ))}
      <div className="flex justify-between">
          <button onClick={addIngredient} type="button" className="bg-blue-500 text-white p-2 rounded w-1/4">
            Add ingredient
          </button>
          <button type="submit" className="bg-green-500 text-white p-2 rounded w-1/4">
            Submit
          </button>
      </div>
          
    </form>
  );
}
