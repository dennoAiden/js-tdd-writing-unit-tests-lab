// Your tests here
import {isPalindrome }from '../utils'
describe("isPalindrome", () => {
    it("returns true for a simple palindrome like 'racecar'", () => {
      expect(isPalindrome("racecar")).toBe(true);
    });
  
    it("returns false for a non-palindrome like 'car'", () => {
      expect(isPalindrome("car")).toBe(false);
    });
  
    it("returns true for a palindrome with mixed case like 'RaceCar'", () => {
      expect(isPalindrome("RaceCar")).toBe(true);
    });
  
    it("returns false for an empty string", () => {
      expect(isPalindrome("")).toBe(false);
    });
  
    it("throws an error for a string with non-alphabetic characters", () => {
      expect(() => isPalindrome("racecar123")).toThrow("Invalid input: only alphabetic characters are allowed");
    });
  
    it("throws an error for non-string input", () => {
      expect(() => isPalindrome(12345)).toThrow("Invalid input: input must be a string");
    });
  });
  