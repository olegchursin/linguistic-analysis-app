import axios from 'axios';

import { YANDEX_KEY } from './environment';

const YANDEX_DICT_URL = 'https://dictionary.yandex.net/api/v1/dicservice.json/';

export async function fetchDefinition(text: string, lang: string = 'en-es') {
  const { data } = await axios.get(
    `${YANDEX_DICT_URL}lookup?key=${YANDEX_KEY}&lang=${lang}&text=${text}`
  );
  return data;
}
