import * as cheerio from "cheerio";
export function CheerioLink(data: string, modify?: ($: cheerio.Root) => void) {
  const $ = cheerio.load(data);
  $("a").addClass("pl-5 text-blue-500 hover:underline hover:text-blue-700");
  $("strong");
  const span = $("span");
  if (span) {
    span.removeAttr("style");
  }
  if (typeof modify === "function") {
    modify($);
  }
  const updateHtml = $.html();
  return updateHtml;
}
