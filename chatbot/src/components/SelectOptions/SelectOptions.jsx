import React from "react";

import "./SelectOptions.css";

const SelectOptions = (props) => {
  const options = [
    {
      text: "Dogs",
      handler: props.actionProvider.handleDogsList,
      id: 1,
    },
    { 
      text: "Cats", 
      handler: props.actionProvider.handleCatsList,
      id: 2,
    },
    { 
      text: "Pet Supplies",
      handler: props.actionProvider.handlePetSuppliesList,
      id: 3,
    },
    { text: "Vet Care",
    handler: props.actionProvider.handleVetCareList,
    id: 4, 
    },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="select-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="select-options-container">{optionsMarkup}</div>;
};

export default SelectOptions;