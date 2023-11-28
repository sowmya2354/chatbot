import { createChatBotMessage } from "react-chatbot-kit";
import BootAvatar from "./BootAvatar";

import './App.css';

import ButtonWidget from "./ButtonWidget"; 
const config = {
  initialMessages: [createChatBotMessage(`Hi I'm  Sowmya. I’m here to  provide you some website links.`)],
  botName: "CrazyBot", // Fixed typo here
  customComponents: {
    BootAvatar: (props) => <BootAvatar {...props} />
  },

  customStyles: {
    botMessageBox: {
      backgroundColor: "purple"
    },
    chatButton: {
      backgroundColor: 'purple'
    }
  },
  state: {
    links: [] 
  },
  widgets: [
    {
      widgetName: 'buttonWidget',
      widgetFunc: (props) => <ButtonWidget {...props} />,
      buttonWidget: (props) => <ButtonWidget {...props} triggerNextMessage={props.triggerNextMessage} />,
      mapStateToProps: ['buttonData'] // Map 'buttonData' to the ButtonWidget props
    }
  ]
};

export default config;
