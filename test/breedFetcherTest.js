const { fetchBreedDescription } = require("../breedFetcher");
const { assert } = require("chai");

describe("fetchBreedDescription", () => {
  it("returns a string description for a valid breed, via callback", (done) => {
    fetchBreedDescription("Siberian", (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc =
        "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      const data = JSON.parse(desc);
      assert.equal(expectedDesc, data[0].description.trim());

      done();
    });
  });
  it("returns [] as breed name is missed, via callback", (done) => {
    fetchBreedDescription(null, (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "[]";
      // compare returned description
      // const data = JSON.parse(desc);
      assert.deepEqual(expectedDesc, desc);

      done();
    });
  });
});
