// const core = require("@nlpjs/core");
// const nlp = require("@nlpjs/nlp");
// const langenmin = require("@nlpjs/lang-en-min");

// window.nlpjs = { ...core, ...nlp, ...langenmin };

// FIXMETUNA: run the following to precompile bundle.js, npm run browserdist

// const { containerBootstrap } = require("@nlpjs/core");
// const { Nlp } = require("@nlpjs/nlp");
// const { LangEn } = require("@nlpjs/lang-en");
// const { fs } = require("@nlpjs/request-rn");
import { containerBootstrap } from "@nlpjs/core";
import { Nlp } from "@nlpjs/nlp";
import { LangEn } from "@nlpjs/lang-en";
// import { fs } from "@nlpjs/request-rn";
import AsyncStorage from "@react-native-async-storage/async-storage";

const customCorpus = require("./corpusBasicEng.json");

const storeData = async (storageKey, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(storageKey, jsonValue);
  } catch (e) {
    console.log("Store chatbot data error: ", e);
    // saving error
  }
};

const getData = async (storageKey) => {
  try {
    const jsonValue = await AsyncStorage.getItem(storageKey);
    // console.log("RAW JSON VALUE: ", jsonValue);
    return !(jsonValue == null) ? JSON.parse(jsonValue) : null;
    // return jsonValue;
  } catch (e) {
    console.log("Get chatbot data error: ", e);
    // error reading value

    return null;
  }
};

export async function trainChatbot() {
  const container = await containerBootstrap();
  // container.register("fs", fs);
  container.use(Nlp);
  container.use(LangEn);
  const nlp = container.get("nlp");

  const savedModel = await getData("chatbotModel");
  // console.log("SAVED CHATBOT MODEL: ", savedModel);
  if (savedModel == null) {
    console.log("Training new Chatbot model");
    nlp.settings.autoSave = false;
    nlp.nlu.log = false;
    nlp.addLanguage("en");
    //   await nlp.addCorpus("./corpusBasicEng.json");
    await nlp.addCorpus(customCorpus);
    // Adds the utterances and intents for the NLP
    // nlp.addDocument("en", "goodbye for now", "greetings.bye");
    // nlp.addDocument("en", "bye bye take care", "greetings.bye");
    // nlp.addDocument("en", "okay see you later", "greetings.bye");
    // nlp.addDocument("en", "bye for now", "greetings.bye");
    // nlp.addDocument("en", "i must go", "greetings.bye");
    // nlp.addDocument("en", "hello", "greetings.hello");
    // nlp.addDocument("en", "hi", "greetings.hello");
    // nlp.addDocument("en", "howdy", "greetings.hello");
    // // Train also the NLG
    // nlp.addAnswer("en", "greetings.bye", "Till next time");
    // nlp.addAnswer("en", "greetings.bye", "see you soon!");
    // nlp.addAnswer("en", "greetings.hello", "Hey there!");
    // nlp.addAnswer("en", "greetings.hello", "Greetings!");
    await nlp.train();

    const exported = nlp.toJSON();
    // console.log("Exporting chatbot model:  ", exported);
    storeData("chatbotModel", exported);
  } else {
    console.log("Loading saved chatbot model");
    nlp.fromJSON(savedModel);
  }

  // // net = new NeuralNetwork();
  // const nlpTmp = container.get("nlp");
  // nlpTmp.fromJSON(exported);

  // const response = await nlp.process("en", "I should go now");
  // console.log("CHATBOT RESPONSE TEST: ", response);
  return nlp;
}

// trainChatbot();
