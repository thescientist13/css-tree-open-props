import fs from 'fs/promises';
import { parse } from 'css-tree';

const contentsUrl = new URL('./node_modules/open-props/src/props.media.css', import.meta.url);
const contents = await fs.readFile(contentsUrl, 'utf-8');

// console.log({ contents });

parse(contents, {
  onParseError(error) {
    console.log(error.formattedMessage);
  }
});