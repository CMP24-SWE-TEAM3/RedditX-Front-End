import GetPasswordStrength from "./GetPasswordStrenght";
import RandomUserName from "./RandomUserName";

describe("GetPasswordStrength", () => {
    it("this is a test for GetPasswordStrength function", () => {
      expect(GetPasswordStrength("mohamedromee")).toEqual(7);
    });
  });


describe("RabdomUserName", () => {
    it("this is a test for RabdomUserName function", () => {
      expect(RandomUserName().length).toBeGreaterThan(4);
    });
  });