import { useState, ReactNode, createContext } from 'react';
type UserInfoContext = {
  userData: any;
  setUserData: React.Dispatch<React.SetStateAction<any>>;
};

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const UserInfoContext = createContext<UserInfoContext>(
  {} as UserInfoContext
);

type Props = {
  children: ReactNode;
};

export function UserInfoProvider({ children }: Props) {
  const [userData, setUserData] = useState({});

  return (
    <UserInfoContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserInfoContext.Provider>
  );
}
