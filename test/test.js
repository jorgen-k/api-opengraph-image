import OgImageHtml from "../ogImageHtml.js";

async function fetch(url) {
  console.log( { url } );
  let og = new OgImageHtml(url);
  let html = await og.fetch();

  let stats = await og.getImages("png", 600);
  let format = Object.keys(stats).pop();
  console.log( format, stats );

  // console.log( stats[format][0].buffer.toString() );
}

// await fetch("https://lynnandtonic.com");
await fetch("https://www.netlify.com");
await fetch("https://www.zachleat.com");
await fetch("https://www.11ty.dev");
// await fetch("https://samtan.dev/");