class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  helloWorldHandler = () => {
    const buttonsMessage = this.createChatBotMessage('Sure, here are some website links:', {
      withAvatar: true,
      widget: 'buttonWidget',
    });

    this.setChatBotMessages([buttonsMessage]);
  };

  triggerHelpfulMessage = () => {
    const helpfulMessage = this.createChatBotMessage(
      <div style={{ border: '1px solid #ccc', padding: '8px', borderRadius: '4px' }}>
        Is this information helpful?
      </div>,
      {
        withAvatar: true,
      }
    );
  
    this.setChatBotMessages([helpfulMessage]);
  };

  setChatBotMessages = (messages) => {
    this.setState((state) => ({
      ...state,
      messages: [...state.messages, ...messages],
    }));
  };
}

export default ActionProvider;