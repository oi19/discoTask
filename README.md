d# discoTask

A short cycle from Splash screen with login UX heading to the Budget Section

-  Code Structure (MVVVM Architecture)
  -  Application(state management)
      - Reducers 
      - Model
      - Actions
      - Action types
      - Index (store creation , redux thunk)

  -  Navigation 
    - RootNavigator
    - Auth
    - BudgetStack 
    - onBoarding
     
  - domain(interfaces defining contracts with APIs and domain services )
     
  - Presentation
    - screens
      - screen
        - Screen.tsx
        - styles.tsx 
    - components 
      - common
        - commonComponent
          - Component.tsx
          - styles.tsx   
      -  shared
        - sharedComponent
          - sharedComponent.tsx
          - styles.tsx
          
  - useCases(can be divided to multiple folders)
    -  Infrastructure
      - Api(logicCore api logic(including interceptors & requests )
      - Services 
      - Localization
    - Shared
      - Constants.ts 
      - Helper.ts
      - Styles.tsx
      - Theme.ts
      - validation(schemas).ts 
    - hooks
     - useCustomHookA.ts
     - useCustomHookB.ts
     - auth
        - useAuthentication.ts
        - useUserPermissions.ts
     -data
        - useApiData.ts
        - useLocalStorage.ts 


