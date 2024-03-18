import { ChatOpenAI } from "@langchain/openai";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { StringOutputParser } from "@langchain/core/output_parsers";

// const { ChatOpenAI } = require("@langchain/openai");

const chatModel = new ChatOpenAI({});

// const prompt = ChatPromptTemplate.fromMessages([
//   ["system", "You are a world class technical documentation writer."],
//   ["user", "{input}"],
// ]);

// const outputParser = new StringOutputParser();

// const chain = prompt.pipe(chatModel).pipe(outputParser);

// chain.invoke({input: "what is LangSmith?"})