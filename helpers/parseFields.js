export default (fields) => {
  const parseFields = {};

  fields.forEach(field => {
    parseFields[field.slug] = field.value;
  });

  return parseFields;
};
