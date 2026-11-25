// One Star for Monday — a one-star review of Monday as if it were a restaurant.
import * as fs from "node:fs";

const entry = "One star. Arrived early, stayed loud, served cold coffee and a meeting that could have been an email.";

// Write the one-line review exactly as typed, UTF-8, no trailing newline.
function writeEntry(text: string): void {
  fs.mkdirSync("/output", { recursive: true });
  fs.writeFileSync("/output/entry.txt", text, { encoding: "utf8" });
}

writeEntry(entry);
