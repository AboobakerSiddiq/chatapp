import { combineReducers } from "redux";
import { photoReducer } from "./photoReducer";
import { inputReducer } from "./sid/sidReducer";

export const rootReducer=combineReducers({
    sid:inputReducer,
    photo:photoReducer
})