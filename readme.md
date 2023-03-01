# Redux with React-Native

1. redux
    - The base object Model
        - The 'store'
            - Like Database
            - Schema of the data aka 'state'
            - All Views MUST subscribe to it
            - The  'createStore(reducer, middleware)' method
                - The 'reducer': A 'combineReducer()' object
                    - An Aggregation of all reducers in the application
    - 1.a. 
            - The @reduxjs/toolkit
                - The 'configureStore()'    
        - The 'reducer'
            - Used to Monitor all actions dispatched from View because this will contineously executed at global level with store
            - Based on Output Action action update the State in Store
            - The 'combineReducer()', used to aggrigate all reducer functions to manage Store Updates 
            - The redcuer function is 'Pure' function
                - Two Parameters
                    - P1: The State aka initialState
                    - P2: The 'Action Type'
                        - The Action Dispatched from View
            - THis cannot be called directly            
            - Practices
                - This is used to update store only
                - No Date/Time Operations
                - No Ajax calls as well as other network access
                - THis can query to Store for following
                    - Delete a record from store
                    - Search a record
                    - Update a record            
            - We may have a seperate reducer function for each action method dispatched from View
                - Recommendations
                    - Combine all reducers in a single object     
```` javascript
      function myreducer(state,action){
        retrun{
            ...state,
            stateObject: action.payload,
            otherInfor:values
        }
      }
````
2. react-redux
    - The 'Provider'
        - A Driver that manages an integration between React-Native and Redux
            - THis has 'store' property, that accepts the REDUX-STORE that is ctreated using 'createStore()'  
    - useDisapatch()
        - a hook used to dispatching an action from View
```` javascript
        let dispatch = useDispatch();

        dispatch(action_mathod(payload)); // ONE_WAY_CALL
````
    - useSelector()
        - Subscription of View to Store
            - Check if Store Available
            - Map the Current Component with Store
            - Map the 'state' of the Component with 'state' from store
```` javascript
     let stateData = useSelector(state=>state.REDUCER_THAT_UPDATE_STATE)   
````
            - the 'stateData' is actual data received from the Store
    - Old Redux
        - mapStateToProps
            - Old representation of 'useSelector()'
```` javascript
     const mapStateToProps=(state)=>{
        products: state.REDUCER_NAME
     };
````
       - mapDispatchToProps
        - Old Represetation of 'useDispatch()' 
```` javascript
         const mapDispatchToProps=({
            getProducts: getProductsFrom
         });
````
        - getProductsForm: is an actual action method
        - getProducts: The props that will be used by component on UI event   

    - The 'connect()' object
        - COnnect React-Native with Redux
```` javascript
      export default connect(mapStateToProps, mapDispatchToProps)(COMPONENT_NAME);  
````

3. Action
    - A Function that is dispatched from View
        - This may have Input parameter (This is known as 'Payload')
        - The Action always return a 'Complex-Type'
            - { type:'ACTION_TYPE', payload  }   
            - The 'payload' will be updated into Store by reducers
    - Practices
        - a. No complex Logic e.g. AJAX Calls, any other network operations
        - b. Perform only Sync operations
        - c. No Access to System Storage e.g. indexedDB, Sqlite, WebSQL, etc.
        - d. No Access to View Elements        


        https://github.com/maheshsabnis/srk_redux_rn.git