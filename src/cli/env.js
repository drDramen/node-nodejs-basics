const PREFIX = 'RSS_';
const KEY_VALUE_SEPARATOR = '=';
const VARIABLE_SEPARATOR = '; ';

const parseEnv = () => {
  const rssEnvString = Object.entries(process.env)
                             .filter(([key]) => key.startsWith(PREFIX))
                             .map((data) => data.join(KEY_VALUE_SEPARATOR))
                             .join(VARIABLE_SEPARATOR);

  console.log(rssEnvString);
};

parseEnv();

