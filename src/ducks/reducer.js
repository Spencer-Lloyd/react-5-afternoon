const initialState = {
    loanType: 'Home Purchase',
    propertyType: 'Single Family Home',
    city: '',
    propToBeUsedOn: '',
    found: false,
    realEstateAgent: "false",
    cost: 0,
    downPayment: 0,
    credit: '',
    history: '',
    addressOne: '',
    addressTwo: '',
    addressThree: '',
    firstName: 'aa',
    lastName: '',
    email: ''
 }
//  ACTION TYPES
 const UPDATE_LOAN_TYPE = "UPDATE_LOAN_TYPE";
 const UPDATE_PROPERTY_TYPE = 'UPDATE_PROPERTY_TYPE';
 const UPDATE_CITY = "UPDATE_CITY";
 const UPDATE_PROP = "UPDATE_PROP";
 const UPDATE_FOUND = "UPDATE_FOUND";
 const UPDATE_AGENT = "UPDATE_AGENT";
 const UPDATE_COST = "UPDATE_COST";
//  const UPDATE_DOWNPAYMENT = "UPDATE_DOWNPAYMENT";
//  const UPDATE_CREDIT = "UPDATE_CREDIT";
//  const UPDATE_HISTORY = "UPDATE_HISTORY";
//  const UPDATE_ADDRESS_ONE = "UPDATE_ADDRESS_ONE";
//  const UPDATE_ADDRESS_TWO = "UPDATE_ADDRESS_TWO";
//  const UPDATE_FIRST_NAME = "UPDATE_FIRST_NAME";
//  const UPDATE_LAST_NAME = "UPDATE_LAST_NAME";
//  const UPDATE_EMAIL = "UPDATE_EMAIL";
 
 function reducer( state = initialState, action ) { 
     switch( action.type ){
        case UPDATE_LOAN_TYPE:
            return Object.assign( {}, state, { loanType: action.payload } );
 
        case UPDATE_PROPERTY_TYPE:
            return Object.assign( {}, state, { propertyType: action.payload } );
 
        case UPDATE_CITY:
            return Object.assign( {}, state, { city: action.payload } );
         
        case UPDATE_PROP:
            return Object.assign( {}, state, { propToBeUsedOn: action.payload } );

        case UPDATE_FOUND:
            return Object.assign( {}, state, {found: action.payload})

        case UPDATE_AGENT:
            return Object.assign( {}, state, { realEstateAgent: action.payload } );

        case UPDATE_COST:
            return Object.assign( {}, state, { cost: action.payload } );
        
        default: return state;
     }
 } 
//  ACTION CREATORS
 export function updateLoanType( loanType ){
   return {
     type: UPDATE_LOAN_TYPE,
     payload: loanType
   };
 }
 
 export function updatePropertyType( property ) {
   return {
     type: UPDATE_PROPERTY_TYPE,
     payload: property
   };
 }
 
 export function updateCity( city ) {
   return {
     type: UPDATE_CITY,
     payload: city
   };
 }

 export function updateProp( prop ) {
     return {
         type: UPDATE_PROP,
         payload: prop
     };
 }

 export function updateFound( found ) {
     return {
        type: UPDATE_FOUND,
        payload: found
     };
 }

 export function updateAgent( agent ) {
     return {
        type: UPDATE_AGENT,
        payload: agent
     };
  }

  export function updateCost( cost ) {
      return {
          type: UPDATE_COST,
          payload: cost
      }
  }
 
 export default reducer;