import { ObjectId } from "mongodb";
import { getCollection } from "@/lib/db";

async function getCovers(id) {
  const coverCollection = await getCollection("covers");
  const results = await coverCollection
    .find({
      author: ObjectId.createFromHexString(id),
    })
    .sort({ _id: -1 })
    .toArray();

  return results;
}

export default async function Dashboard({ user }) {
  const covers = await getCovers(user.userId);
  console.log(covers);

  return (
    <div className="mt-5">
      <h1>
        {covers.length > 0 ? "Here are your covers" : "Create a new cover"}
      </h1>
      {covers.map((cover, idx) => {
        return (
          <div
            className="card w-96 bg-base-100 shadow-sm mb-3 px-4 py-4"
            key={idx}
          >
            <div className="card-body">
              <p>{cover.line1}</p>
              <p>{cover.line2}</p>
              <p>{cover.line3}</p>
            </div>

            <div className="flex gap-2">
              <button className="btn btn-primary">Edit</button>
              <button className="btn btn-danger">Delete</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
