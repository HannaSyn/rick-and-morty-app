import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const CharacterPagination = ({page, pageCount, changePage}) => {
  return (
    <div className="pagination">
      <Stack spacing={2}>
        <Pagination 
          count={pageCount} 
          variant="outlined"
          page={page}
          onChange={changePage}
        />
      </Stack>
    </div>
  );
};

export default CharacterPagination;
