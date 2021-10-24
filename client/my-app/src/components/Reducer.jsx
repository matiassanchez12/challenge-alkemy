export default function reducer (state, action) {
    switch (action.type) {
      case 'FILTER': {
        const typeSelected = action.payload;
  
        if ('' === typeSelected) {
            return state;
        }

        const listFiltered = state.filter (
          data => data.tipo === typeSelected
        );
  
        return listFiltered;
      }
      default: {
          return state;
      }

    }
}