import { toast } from 'react-toastify';
import { sessionGet } from '../lib/session';

// ----------------------------------------------------------
// Header
// ----------------------------------------------------------

export const header = () => {
  const sessionToken = sessionGet('AUTH_TOKEN');

  return { headers: { 'X-Auth-Token': sessionToken.data.auth_token } };
};

// ----------------------------------------------------------
// Handle
// ----------------------------------------------------------

export const handleError = (data) => {
  const base = {};

  if (!data || data.status !== 200 || !data.data || !data.data.success) {
    toast.error(data.data && data.data.description ? data.data.description : 'Falha no servidor');
    base.state = false;
    base.data = null;
    return base;
  }

  base.state = false;
  base.data = data.data.data;

  return base;
};
