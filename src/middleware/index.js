import { applyMiddleware } from 'redux'
import logger from "./logger"
import localStorgeMid from "./localStorageMid"
import thunk from "redux-thunk"

export default applyMiddleware(thunk,localStorgeMid, logger)