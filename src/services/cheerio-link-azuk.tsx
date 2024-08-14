import * as cheerio from "cheerio";
export function CheerioLink(data: string) {
  const $ = cheerio.load(data);
  $("a").addClass("pl-5 text-blue-500 hover:underline hover:text-blue-700");
  $("strong").contents().unwrap();
  const span = $("span");
  if (span) {
    span.removeAttr("style");
  }
  const updateHtml = $.html();
  return updateHtml;
}
