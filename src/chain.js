import { chain, filter, map, sortBy, uniqBy, compact } from "lodash";

const messageList = [
	{ user: 1, messageId: 1, creationDate: new Date(), text: "Hello" }
];
chain(messageList)
	.filter({ user: 1 })
	.sortBy("creationDate")
	.uniqBy("messageId")
	.map("text")
	.compact()
	.valueOf();
