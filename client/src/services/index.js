export const baseURL = `https://api.airtable.com/v0/${REACT_APP_AIRTABLE_BASE}/theshoppies`;

export const config = {
  headers: {
    Authorization: `Bearer ${REACT_APP_AIRTABLE_KEY}`,
  },
};
