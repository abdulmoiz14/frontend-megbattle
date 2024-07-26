import axios from 'axios';
import { ITelegramUser } from '../utils/types';

export const registerUserApi = async (
  userId: string,
  firstName: string,
  lastName: string,
  languageCode: string
) => {
  const url = `http://localhost:3001/api/users/register`;

  // Construct the request body
  const requestBody = {
    id: userId,
    first_name: firstName,
    last_name: lastName,
    language_code: languageCode,
  };

  // Make the POST request
  const userResponse = await axios.post<{
    message: string;
    User: ITelegramUser;
  }>(url, requestBody);

  return userResponse.data;
};
