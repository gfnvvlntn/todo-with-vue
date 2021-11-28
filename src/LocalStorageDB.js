export default class LocalStorageDB {
  save(data, key) {
    const _value = JSON.stringify(data);
    localStorage.setItem(key, _value);
  }

  fetch(key) {
    let newData;
    if (localStorage.getItem(key)) {
      try {
        newData = JSON.parse(localStorage.getItem(key));
      } catch (e) {
        localStorage.removeItem(key);
      }
      return newData;
    }
  }

  getById(id, key) {
    let data = this.fetch(key);
    return data.find((el) => el.id === id);
  }
}
