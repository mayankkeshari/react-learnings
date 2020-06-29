function formatString(templateString, ...additionalArgs) {
  let argsLength = additionalArgs && additionalArgs.length;
  if (!templateString || !argsLength) {
    return templateString;
  }

  let formattedString = templateString;
  for (let i = 0; i < argsLength; i++) {
    formattedString = formattedString.replace("{" + i + "}", additionalArgs[i]);
  }
  return formattedString;
}

console.log(formatString('My name is {0} and i am {1}', 'k', 'pp'));
