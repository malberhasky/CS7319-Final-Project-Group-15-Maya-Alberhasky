class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      const lowerCaseMessage = message.toLowerCase();
  
      if (lowerCaseMessage.includes("hello")) {
        this.actionProvider.greet();
      }
  
      if (lowerCaseMessage.includes("dogs")) {
        this.actionProvider.handleDogsList();
      }

      if (lowerCaseMessage.includes("cats")) {
        this.actionProvider.handleCatsList();
      }

      if (lowerCaseMessage.includes("vet care")) {
        this.actionProvider.handleVetCareList();
      }

      if (lowerCaseMessage.includes("pet supplies")) {
        this.actionProvider.handlePetSuppliesList();
      }
    }
  }
  
  export default MessageParser;
  