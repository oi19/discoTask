# discoTask

---

## Code Structure (MVVM Architecture)

- ### Application (State Management)
  - Reducers 
  - Model
  - Actions
  - Action types
  - Index (store creation, Redux Thunk)
  
- ### Navigation 
  - RootNavigator
  - Auth
  - BudgetStack 
  - Onboarding
       
- ### Domain (API Interfaces )
       
- ### Presentation
  - Screens
    - Screen
      - Screen.tsx
      - styles.tsx 
  - Components 
    - Common
      - CommonComponent
        - Component.tsx
        - styles.tsx   
    - Shared
      - SharedComponent
        - SharedComponent.tsx
        - styles.tsx
            
### Use Cases (Can Be Divided into Multiple Folders)
  - Infrastructure
    - API (LogicCore API Logic, including interceptors & requests)
    - Services 
    - Localization
  - Shared
    - Constants.ts 
    - Helper.ts
    - Styles.tsx
    - Theme.ts
    - Validation (Schemas).ts 
  - Hooks
    - useCustomHookA.ts
    - useCustomHookB.ts
    - Auth
      - useAuthentication.ts
      - useUserPermissions.ts
    - Data
      - useApiData.ts
      - useLocalStorage.ts 

---

## Components
- Splash.tsx
- LoginScreen.tsx (Including Multiple Common and Shared Components using React Query, Zod, and React Form Hook)
- BudgetScreen.tsx (Initial Route of the Budget Stack
  -  Simulated NavBar and
  -  Budget Analysis Section (which can be a small teaser for more advanced in detail analysis in a separated component)
- Transactions.tsx (Including Search Bar, Transactions List, and Calendar with Many Filtration Options)
- TransactionDetails (Including Receipt, Share Option, and Open for More Possible Details)

---

## Tools & Libraries
- navigatetionRef (navigation by reference )
- React Query & Zod & React-Form-Hook with Controller
- Moment
- react-native-progress
- react-native-gesture-handler/Swipeable (applied on each transaction item so it can have more than just click into details screen , delete, add to favorite and many more ideas)
