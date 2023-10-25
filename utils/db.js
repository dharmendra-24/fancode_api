import mongoose from "mongoose";
export const connect = (url = "mongodb://127.0.0.1/match") => {
  return mongoose
    .connect(url, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      // useFindAndModify: false,
      // useCreateIndex: true,
    })
    .then(() => console.log("Database Connected"));
};
