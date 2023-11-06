import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import SelectOptions from "./components/SelectOptions/SelectOptions";
import LinkList from "./components/LinkList/LinkList";

const config = {
  botName: "Pet Owner ChatBot",
  initialMessages: [
    createChatBotMessage("Hi, I'm here to help. What do you want to learn?", {
      widget: "SelectOptions",
    }),
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
  },
  widgets: [
    {
      widgetName: "SelectOptions",
      widgetFunc: (props) => <SelectOptions {...props} />,
    },
    {
      widgetName: "dogsLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Introduction to Different Dog Breeds",
            url:
              "https://www.akc.org/dog-breeds/",
            id: 1,
          },
          {
            text: "Basic Dog Care Information",
            url:
              "https://petpedia.co/dog-care/",
            id: 2,
          },
          {
            text: "Puppy Care Guide",
            url: "https://petcube.com/blog/puppy-guide/",
            id: 3,
          },
        ],
      },
    },
    {
      widgetName: "catsLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Introduction to Different Cat Breeds",
            url:
              "https://www.purina.com/cats/cat-breeds",
            id: 1,
          },
          {
            text: "Basic Cat Care Information",
            url:
              "https://www.aspca.org/pet-care/cat-care/general-cat-care",
            id: 2,
          },
          {
            text: "Kitten Care Guide",
            url: "https://www.dailypaws.com/cats-kittens/health-care/kitten-care/how-to-take-care-of-kitten",
            id: 3,
          },
        ],
      },
    },
    {
      widgetName: "vetCareLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Find Local Vets Near You",
            url:
              "https://findalocalvet.com/",
            id: 1,
          },
          {
            text: "PetCo Vet Services",
            url:
              "https://www.petco.com/shop/en/petcostore/s/veterinary-services",
            id: 2,
          },
          {
            text: "PetSmart Vet Services",
            url: "https://www.petsmart.com/petsmart-veterinary-services.html",
            id: 3,
          },
        ],
      },
    },
    {
      widgetName: "petSuppliesLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Chewy",
            url:
              "https://www.chewy.com/",
            id: 1,
          },
          {
            text: "PetCo",
            url:
              "https://www.petco.com/shop/en/petcostore",
            id: 2,
          },
          {
            text: "PetSmart",
            url: "https://www.petsmart.com/",
            id: 3,
          },
        ],
      },
    },
  ],
};

export default config;