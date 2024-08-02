import { Strength } from "./PasswordScore";

export default function calculateStrength(password:string):Strength {
    let score = 0;
    if (password.length >= 8) score++;
    if (password.length >= 12) score++;
    if (/\d/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) score++;
    if (score <= 2) {
      return "weak";
    } else if (score <= 4) {
      return "medium";
    } else {
      return "strong";
    }
  }