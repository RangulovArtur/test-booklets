import axios from 'axios';

export function getFood() {
    return async dispath => {
        try{
            const responce = await axios.get(`http://localhost:3000/json/food.json`)
            const food = responce.data;
            dispath(fetchFoodSuccess(food))
        }catch(e){
            dispath(fetchAnimalsError(e))
        }
    }
};

export function fetchFoodSuccess(food) {
    return {
        type: 'FETCH_FOOD_SUCCESS',
        food
    }
};

export function getAnimals() {
    return async dispath => {
        try{
            const responce = await axios.get(`http://localhost:3000/json/animals.json`)
            const animals = responce.data;
            dispath(fetchAnimalsSuccess(animals))
        }catch(e){
            dispath(fetchAnimalsError(e))
        }
    }
};

export function fetchAnimalsSuccess(animals) {
    return {
        type: 'FETCH_ANIMALS_SUCCESS',
        animals
    }
};

export function fetchAnimalsError(e) {
    return {
        type: 'FETCH_ANIMALS_ERROR',
        error: e
    }
};

export default function animals (state = {}, action){

    switch(action.type){
        case 'FETCH_FOOD_SUCCESS':
            return {
                ...state,
                food: action.food,
            };
        case 'FETCH_ANIMALS_SUCCESS':
            return {
                ...state,
                animals: action.animals,
            };
        case 'FETCH_ANIMALS_ERROR':
            return {
                ...state,
                error: action.error,
            };
        default:
            return state
    }
}