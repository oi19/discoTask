# discoTask

---

## Code Structure (MVVM Architecture)

### Application (State Management)
- Reducers 
- Model
- Actions
- Action types
- Index (store creation, Redux Thunk)
  
### Navigation 
- RootNavigator
- Auth
- BudgetStack 
- Onboarding
       
### Domain (Interfaces Defining Contracts with APIs and Domain Services)
       
### Presentation
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
- BudgetScreen.tsx (Initial Route of the Budget Stack that includes Simulated NavBar and Budget Analysis Section)
- Transactions.tsx (Including Search Bar, Transactions List, and Calendar with Many Filtration Options)
- TransactionDetails (Including Receipt, Share Option, and Open for More Possible Details)

---

## Tools & Libraries
- React Query & Zod & React Form Hook with Controller
- Moment
