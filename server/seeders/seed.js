const db = require("../config/connection");
const { User, Book, Review, Club } = require("../models");
const userSeeds = require("./userSeeds.json");
const bookSeeds = require("./bookSeeds.json");
const reviewSeeds = require("./reviewSeeds.json");
const clubSeeds = require("./clubSeeds.json");
const cleanDB = require("./cleanDB");

db.once("open", async () => {
  try {
    await cleanDB("Book", "books");
    await cleanDB("User", "users");
    await cleanDB("Review", "reviews");
    await cleanDB("Club", "clubs");

    await User.create(userSeeds);

    for (let i = 0; i < bookSeeds.length; i++) {
      const { _id, author } = await Book.create(bookSeeds[i]);
      await User.findOneAndUpdate(
        { username: author },
        {
          $addToSet: {
            books: _id,
          },
        }
      );
    }
    
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log("all done!");
  process.exit(0);
});
