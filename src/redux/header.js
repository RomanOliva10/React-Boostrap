import { createStore } from "redux";

let initialState = {
  texts: {
    nav: {
      a1: "Start Bootstrap",
      a2: "About",
      a3: "Services",
      a4: "Portfolio",
      a5: "Contact"
    },
    header: {
      h1: "Your Favorite Place for Free Bootstrap Themes",
      p:
        "Start Bootstrap can help you build better websites using the Bootstrap framework! Just download a theme and start customizing, no strings attached!",
      a: "Find Out More"
    },
    about: {
      h2: "We've got what you need!",
      p:
        "Start Bootstrap has everything you need to get your new website up and running in no time! Choose one of our open source, free to download, and easy to use themes! No strings attached!",
      a: "Get Started!"
    },
    services: {
      h2: "At Your Service",
      h31: "Sturdy Themes",
      p1: "Our themes are updated regularly to keep them bug free!",
      h32: "Up to Date",
      p2: "All dependencies are kept current to keep things fresh.",
      h33: "Ready to Publish",
      p3: "You can use this design as is, or you can make changes!",
      h34: "Made with Love",
      p4: "Is it really open source if it's not made with love?"
    },
    portfolio: {
      category: "Category",
      name: "Project Name"
    },
    call: {
      h2: "Free Download at Start Bootstrap!",
      a: "Download Now!"
    },
    contact: {
      h2: "Let's Get In Touch!",
      p1:
        "Ready to start your next project with us? Send us a messages and we will get back to you as soon as possible!",
      name: "Full name",
      email: "Email address",
      phone: "Phone number",
      message: "Message",
      submit: "Submit",
      number: "+1 (555) 123-4567"
    },

    footer: {
      p: "Copyright &copy; 2021 - Company Name"
    }
  }
};

const TAGS = {
  GET_TEXT: "GET_TEXT"
};

let store = createStore(reducer, initialState);

function actionGetTexts() {
  return {
    type: TAGS.GET_TEXT
  };
}

function reducer(state, action) {
  switch (action.type) {
    case TAGS.GET_TEXT:
      return state;
    default:
      return state;
  }
}

export { TAGS, actionGetTexts };

export default store;
