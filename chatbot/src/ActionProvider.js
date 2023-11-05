class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
  
    // new method
    greet() {
      const greetingMessage = this.createChatBotMessage("Hi, Welcome to Pet Owner ChatBot.");
      this.updateChatbotState(greetingMessage);
    }
  
    handleDogsList = () => {
      const message = this.createChatBotMessage(
        "Fantastic, I've got the following resources for you on Dogs:",
        {
          widget: "dogsLinks",
        }
      );
  
      this.updateChatbotState(message);
    };

    handleCatsList = () => {
      const message = this.createChatBotMessage(
        "Fantastic, I've got the following resources for you on Cats:",
        {
          widget: "catsLinks",
        }
      );
  
      this.updateChatbotState(message);
    };

    handleVetCareList = () => {
      const message = this.createChatBotMessage(
        "Fantastic, I've got the following resources for you on Vet Care:",
        {
          widget: "vetCareLinks",
        }
      );
  
      this.updateChatbotState(message);
    };

    handlePetSuppliesList = () => {
      const message = this.createChatBotMessage(
        "Fantastic, I've got the following resources for you on Pet Supplies:",
        {
          widget: "petSuppliesLinks",
        }
      );
  
      this.updateChatbotState(message);
    };
  
    updateChatbotState(message) {
      // NOTICE: This function is set in the constructor, and is passed in from the top level Chatbot component. The setState function here actually manipulates the top level state of the Chatbot, so it's important that we make sure that we preserve the previous state.
  
      this.setState((prevState) => ({
        ...prevState,
        messages: [...prevState.messages, message],
      }));
    }
  }
  
  export default ActionProvider;
