import React, {useState} from "react";

import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [itemName, setItemName] = useState("")
  const [itemCategory, setItemCategory] = useState("produce")

  function handleItemNameChange (e){
    setItemName(e.target.value)

  };

  function handleItemCategoryChange (e){
    setItemCategory(e.target.value)
  };

  function handleItemSubmit (e){
    e.preventDefault();
    const newItem = {
      id : uuid(),
      name : itemName,
      category : itemCategory,
    }
    onItemFormSubmit (newItem)


  }
  return (
    <form className="NewItem" onSubmit={handleItemSubmit}>
      <label>
        Name:
        <input type="text" 
        name="name"
         value = {itemName}
         onChange={handleItemNameChange} />
      </label>

      <label>
        Category:
        <select
         name="category"
         value = {itemCategory}
         onChange = {handleItemCategoryChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
