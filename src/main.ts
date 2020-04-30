import { Dictionary } from './singleton';

function replaceInnerText(divName: string, text: string) {
  const elt = document.getElementById(divName);
  elt.innerText += `\n${text}`;
}

replaceInnerText('greeting', `Dictionary.getInstance().id ${Dictionary.getInstance().id}`);
replaceInnerText('greeting', `Dictionary.getInstance().id ${Dictionary.getInstance().id}`);
replaceInnerText('greeting', `Dictionary.getInstance().id ${Dictionary.getInstance().id}`);
replaceInnerText('greeting', `Dictionary.getInstance().id ${Dictionary.getInstance().id}`);