declare var com: any, java: any;
const _ParseObject = com.parse.ParseObject;
const _DeleteCallback = com.parse.DeleteCallback;
const _FindCallback = com.parse.FindCallback;
const _GetCallback = com.parse.GetCallback;
export class ParseObject {
  obj;
  constructor(theClassName?: string) {
    if (theClassName) {
      this.obj = new _ParseObject(theClassName);
    } else {
      this.obj = new _ParseObject();
    }
  }
  add(key: string, value: any) {
    this.obj.add(key, value);
  }
  addAll(key: string, value: Object) {
    var map = new java.util.HashMap();
    Object.keys(value).forEach(key => {
      let item = value[key];
      map.put(key, item);
    });
    this.obj.addAll(key, map);
  }
  addAllUnique(key: string, value: Object) {
    var map = new java.util.HashMap();
    Object.keys(value).forEach(key => {
      let item = value[key];
      map.put(key, item);
    });
    this.addAllUnique(key, map);
  }
  addUnique(key: string, value: any) {
    this.obj.addUnique(key, value);
  }
  containsKey(key: string) {
    return this.obj.containsKey(key);
  }
  /*TODO*/
  /*create(Class<T> subclass)*/
  static create(className: string) {
    return new _ParseObject.create(className);
  }
  /*TODO*/
  /*createWithoutData(Class<T> subclass, String objectId)*/
  createWithoutData(className: string, objectId: string) {
    return new _ParseObject.createWithoutData(className, objectId)
  }
  delete() {
    this.obj.delete();
  }
  static deleteAll(list: Array<string>) {
    const _list = new java.util.ArrayList();
    list.forEach(item => {
      _list.add(item);
    });
    _ParseObject.deleteAll(_list);
  }
  static deleteAllInBackground(list: Array<string>, callback?: Function) {
    const _list = new java.util.ArrayList();
    list.forEach(item => {
      _list.add(item);
    });

    if (callback !== undefined && typeof callback === 'function') {
      _ParseObject.deleteAllInBackground(_list);
    } else {
      _ParseObject.deleteAllInBackground(_list, new _DeleteCallback({
        done(e) {
          if (e === null) {
            callback.apply(null, [{ event: 'success' }]);
          } else {
            callback.apply(null, [{ event: 'error', code: e.getCode.toString() }]);
          }
        }
      }));
    }
  }

  deleteEventually(callback?: Function) {
    if (callback !== undefined && typeof callback === 'function') {
      this.obj.deleteEventually();
    } else {
      this.obj.deleteEventually(new _DeleteCallback({
        done(e) {
          if (e === null) {
            callback.apply(null, [{ event: 'success' }]);
          } else {
            callback.apply(null, [{ event: 'error', code: e.getCode.toString() }]);
          }
        }
      }));
    }
  }
  deleteInBackground(callback?: Function) {
    if (callback !== undefined && typeof callback === 'function') {
      this.obj.deleteInBackground();
    } else {
      this.obj.deleteInBackground(new _DeleteCallback({
        done(e) {
          if (e === null) {
            callback.apply(null, [{ event: 'success' }]);
          } else {
            callback.apply(null, [{ event: 'error', code: e.getCode.toString() }]);
          }
        }
      }));
    }
  }
  fetch() {
    return this.obj.fetch();
  }
  static fetchAll(list: Array<string>) {
    const _list = new java.util.ArrayList();
    list.forEach(item => {
      _list.add(item);
    });
    _ParseObject.fetchAll(_list);
  }
  static fetchAllIfNeeded(list: Array<string>) {
    const _list = new java.util.ArrayList();
    list.forEach(item => {
      _list.add(item);
    });
    return _ParseObject.fetchAllIfNeeded(_list);
  }
  static fetchAllIfNeededInBackground(list: Array<string>, callback?: Function) {
    const _list = new java.util.ArrayList();
    list.forEach(item => {
      _list.add(item);
    });

    if (callback !== undefined && typeof callback === 'function') {
      return _ParseObject.fetchAllIfNeededInBackground(_list);
    } else {
      _ParseObject.fetchAllIfNeededInBackground(_list, new _FindCallback({
        done(objects, e) {
          if (e === null) {
            callback.apply(null, [{ event: 'success', objects: objects }]);
          } else {
            callback.apply(null, [{ event: 'error', code: e.getCode.toString() }]);
          }
        }
      }));
    }
  }
  static fetchAllInBackground(list: Array<string>, callback?: Function) {
    const _list = new java.util.ArrayList();
    list.forEach(item => {
      _list.add(item);
    });

    if (callback !== undefined && typeof callback === 'function') {
      return _ParseObject.fetchAllInBackground(_list);
    } else {
      _ParseObject.fetchAllInBackground(_list, new _FindCallback({
        done(objects, e) {
          if (e === null) {
            callback.apply(null, [{ event: 'success', objects: objects }]);
          } else {
            callback.apply(null, [{ event: 'error', code: e.getCode.toString() }]);
          }
        }
      }));
    }
  }
  fetchFromLocalDatastore() {
    try {
      this.obj.fetchFromLocalDatastore();
    } catch (ex) {

    }
  }
  fetchFromLocalDatastoreInBackground(callback: Function) {
    this.obj.fetchFromLocalDatastoreInBackground(new _GetCallback({
      done(object, e) {
        if (e === null) {
          callback.apply(null, [{ event: 'success', object: object }]);
        } else {
          callback.apply(null, [{ event: 'error', code: e.getCode.toString() }]);
        }
      }
    }))
  }
  fetchIfNeeded() {
    this.obj.fetchIfNeeded();
  }
  fetchIfNeededInBackground(callback?: Function) {
    if (callback !== undefined && typeof callback === 'function') {
      return this.fetchIfNeededInBackground();
    } else {
      this.fetchIfNeededInBackground(new _GetCallback({
        done(object, e) {
          if (e === null) {
            callback.apply(null, [{ event: 'success', object: object }]);
          } else {
            callback.apply(null, [{ event: 'error', code: e.getCode.toString() }]);
          }
        }
      }));
    }
  }
  fetchInBackground(callback?: Function) {
    if (callback !== undefined && typeof callback === 'function') {
      return this.fetchInBackground();
    } else {
      this.fetchInBackground(new _GetCallback({
        done(object, e) {
          if (e === null) {
            callback.apply(null, [{ event: 'success', object: object }]);
          } else {
            callback.apply(null, [{ event: 'error', code: e.getCode.toString() }]);
          }
        }
      }));
    }
  }
  get(key: string) {
    return this.obj.get(key);
  }
  getACL() {
    return this.obj.getACL();
  }
  getBoolean(key: string) {
    return this.obj.getBoolean(key);
  }
  getBytes(key: string) {
    return this.obj.getBytes(key);
  }
  /*TODO*/
  /*getClassName() { }
  getCreatedAt() { }
  getDate(String key) { }
  getDouble(String key) { }
  getInt(String key) { }
  getJSONArray(String key) { }
  getJSONObject(String key) { }
  getList(String key) { }
  getLong(String key) { }
  getMap(String key) { }
  getNumber(String key) { }
  getObjectId() { }
  getParseFile(String key) { }
  getParseGeoPoint(String key) { }
  getParseObject(String key) { }
  getParseUser(String key) { }
  getRelation(String key) { }
  getString(String key) { }
  getUpdatedAt() { }
  has(String key) { }
  hasSameId(ParseObject other) { }
  increment(String key) { }
  increment(String key, Number amount)
  isDataAvailable() { }
  isDirty() { }*/
}