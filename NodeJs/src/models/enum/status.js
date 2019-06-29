import Enum from 'enum';

module.exports = () => {
  const Status = new Enum({ SEND: 0, SENDED: 1, ERROR: 2 });

  class StatusEnum {
    static getName(value) {
      try {
        const name = Status.get(value).key;

        return name;
      } catch (error) {
        throw new Error(`StatusEnum - GetName : ${error}`);
      }
    }

    static getValue(name) {
      try {
        const value = Status.get(name).value;

        return value;
      } catch (error) {
        throw new Error(`StatusEnum - GetValue : ${error}`);
      }
    }
  }

  return StatusEnum;
};
