module.exports = function updatedAtTrigger(table) {
  return `
    CREATE TRIGGER update_timestamp
    BEFORE UPDATE
    ON ${table}
    FOR EACH ROW
    EXECUTE PROCEDURE update_timestamp();
  `;
};
