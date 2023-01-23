import express from "express";
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";
import reminder from "./reminders.js";

const app = express();

const schema = buildSchema(`
    type Reminder{
        id:Int
        title:String
        description:String
        status:String
    }
    type Query{
        reminders:[Reminder]
    }
    type Mutation{
        createReminder(title:String,description:String):Reminder
        deleteReminders:[Reminder]
        completeReminder(id:Int):Reminder
    }
`);

app.use(
  `/graphql`,
  graphqlHTTP({
    schema: schema,
    rootValue: {
      reminders: () => reminder.getReminders(),
      createReminder: (data) => reminder.createReminder(data),
      deleteReminder: () => reminder.deleteReminders(),
      completeReminder: (id) => reminder.completeReminder(id),
    },
    graphiql: true,
  })
);

app.listen(8080,()=>console.log('Listen 8080'))