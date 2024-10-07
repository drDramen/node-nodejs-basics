import { argv } from 'node:process';

const KEY_VALUE_SEPARATOR = ' is ';
const VARIABLE_SEPARATOR = ', ';

const parseArgs = () => {
  const cliArguments = argv.slice(2);
  const cliArgumentsKeyValue = [];

  for (let i = 0; i < cliArguments.length; i += 2) {
    const key = cliArguments[i];
    const value = cliArguments[i + 1];

    cliArgumentsKeyValue.push(`${ key } ${ KEY_VALUE_SEPARATOR } ${ value }`);
  }

  const cliArgumentsString = cliArgumentsKeyValue.join(VARIABLE_SEPARATOR);

  console.log(cliArgumentsString);
};

parseArgs();
