import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    channel_id:null,
    channel_name:null,
  },
  reducers: {
    setChannelInfo:(state,action) => {
      state.channel_id=action.payload.channelId;
      // console.log("channelid",state.channel_id)
      state.channel_name=action.payload.channelName;  
      // state.user=action.payload;
    },
  }
});

export const { setChannelInfo } = appSlice.actions;//as setChannelInfo returns an object hence we put {} 
// console.log(appSlice.actions)
// {setChannelInfo: ƒ}
// setChannelInfo: ƒ ()
// match: ƒ (action)
// toString: ƒ ()
// type: "app/setChannelInfo"
// arguments: (...)
// caller: (...)
// length: 0
// name: "actionCreator"
// prototype: {constructor: ƒ}
// __proto__: ƒ ()
// apply: ƒ apply()
// arguments: (...)
// bind: ƒ bind()
// call: ƒ call()
// caller: (...)
// constructor: ƒ Function()
// length: 0
// name: ""
// toString: ƒ toString()
// Symbol(Symbol.hasInstance): ƒ [Symbol.hasInstance]()
// get arguments: ƒ ()
// set arguments: ƒ ()
// get caller: ƒ ()
// set caller: ƒ ()
// __proto__: Object
// [[FunctionLocation]]: <unknown>
// [[Scopes]]: Scopes[0]
// [[FunctionLocation]]: createAction.ts:262
// [[Scopes]]: Scopes[3]
// 0: Closure (createAction) {prepareAction: undefined, type: "app/setChannelInfo"}
// 1: Closure (./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js) {immer__WEBPACK_IMPORTED_MODULE_0__: Module, redux__WEBPACK_IMPORTED_MODULE_1__: Module, reselect__WEBPACK_IMPORTED_MODULE_2__: Module, redux_thunk__WEBPACK_IMPORTED_MODULE_3__: Module, createDraftSafeSelector: ƒ, …}
// 2: Global {window: Window, self: Window, document: document, name: "", location: Location, …}
// __proto__:
// constructor: ƒ Object()
// hasOwnProperty: ƒ hasOwnProperty()
// isPrototypeOf: ƒ isPrototypeOf()
// propertyIsEnumerable: ƒ propertyIsEnumerable()
// toLocaleString: ƒ toLocaleString()
// toString: ƒ toString()
// valueOf: ƒ valueOf()
// __defineGetter__: ƒ __defineGetter__()
// __defineSetter__: ƒ __defineSetter__()
// __lookupGetter__: ƒ __lookupGetter__()
// __lookupSetter__: ƒ __lookupSetter__()
// get __proto__: ƒ __proto__()
// set __proto__: ƒ __proto__()

export const selectChannelId = state => state.app.channel_id;
export const selectChannelName = state => state.app.channel_name;

export default appSlice.reducer;
