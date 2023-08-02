import { Card, CardContent } from '@mui/material';

import SearchForm from './SearchForm';
import { UserInfoProvider } from '@/contexts/UserInfoContext';

const Search = () => {
  return (
    <UserInfoProvider>
      <Card>
        <CardContent>
          <SearchForm />
        </CardContent>
      </Card>
    </UserInfoProvider>
  );
};

export default Search;
